import { chromium, Browser } from "playwright";
import fs from "fs/promises";
import path from "path";
import type {
  LinkPreviewManifest,
  LinkPreviewEntry,
} from "../app/lib/link-previews/types";

/**
 * Quick script to regenerate ONLY failed or missing link previews.
 * Much faster than the full build script since it skips already-successful screenshots.
 *
 * Usage:
 *   npm run fix-previews          # Fix failed/missing screenshots
 *   npm run fix-previews -- --all # Retry all failed (even previously failed)
 */

const config = {
  screenshotWidth: 1200,
  screenshotHeight: 630,
  timeout: 45000, // Longer timeout for retries
  outputDir: "public/previews",
  manifestPath: "public/previews/manifest.json",
  imageFormat: "jpeg" as const,
  imageQuality: 80,
};

const EXCLUDED_DOMAINS = [
  "twitter.com",
  "x.com",
  "facebook.com",
  "instagram.com",
  "linkedin.com",
  "youtube.com",
  "youtu.be",
  "tiktok.com",
  "reddit.com",
  "discord.com",
  "slack.com",
];

const INTERNAL_PATTERNS = [/^\//, /^#/, /braydoncoyer\.dev/];

function hashUrl(url: string): string {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    const char = url.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash).toString(16).padStart(12, "0").slice(0, 12);
}

function isExternalUrl(url: string): boolean {
  if (!url) return false;
  if (INTERNAL_PATTERNS.some((pattern) => pattern.test(url))) return false;

  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

function shouldGeneratePreview(url: string): boolean {
  if (!isExternalUrl(url)) return false;

  try {
    const parsed = new URL(url);
    return !EXCLUDED_DOMAINS.some((domain) => parsed.hostname.includes(domain));
  } catch {
    return false;
  }
}

function getScreenshotFilename(url: string): string {
  return `${hashUrl(url)}.${config.imageFormat}`;
}

function extractUrlsFromCode(code: string): string[] {
  const patterns = [
    /href[=:]\\?"([^"\\]+)\\?"/g,
    /href:\s*["']([^"']+)["']/g,
    /href="([^"]+)"/g,
  ];

  const urls = new Set<string>();

  for (const pattern of patterns) {
    let match;
    while ((match = pattern.exec(code)) !== null) {
      const url = match[1];
      if (shouldGeneratePreview(url)) {
        urls.add(url);
      }
    }
  }

  return [...urls];
}

async function captureScreenshot(
  browser: Browser,
  url: string
): Promise<{ success: boolean; error?: string }> {
  const context = await browser.newContext({
    viewport: {
      width: config.screenshotWidth,
      height: config.screenshotHeight,
    },
    userAgent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });

  const page = await context.newPage();

  try {
    // Block heavy resources to speed up loading
    await page.route("**/*", (route) => {
      const resourceType = route.request().resourceType();
      if (["font", "media", "websocket"].includes(resourceType)) {
        route.abort();
      } else {
        route.continue();
      }
    });

    // First try networkidle with shorter timeout
    try {
      await page.goto(url, {
        waitUntil: "networkidle",
        timeout: 20000, // 20 seconds for networkidle
      });
    } catch {
      // Fallback: use domcontentloaded and wait for content
      console.log(`      Trying fallback (domcontentloaded)...`);
      await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: config.timeout,
      });
      // Wait for images to load
      await page.waitForTimeout(3000);
    }

    // Additional wait for any animations
    await page.waitForTimeout(1500);

    const filename = getScreenshotFilename(url);
    const outputPath = path.join(config.outputDir, filename);

    await page.screenshot({
      path: outputPath,
      type: config.imageFormat,
      quality: config.imageQuality,
    });

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  } finally {
    await context.close();
  }
}

async function loadManifest(): Promise<LinkPreviewManifest | null> {
  try {
    const content = await fs.readFile(config.manifestPath, "utf-8");
    return JSON.parse(content);
  } catch {
    return null;
  }
}

async function main() {
  const retryAll = process.argv.includes("--all");

  console.log("🔧 Fix Failed Link Previews\n");

  if (retryAll) {
    console.log("Mode: Retry ALL failed screenshots\n");
  } else {
    console.log("Mode: Fix only missing screenshots (new links)\n");
  }

  // Load manifest
  const manifest = await loadManifest();
  if (!manifest) {
    console.log("❌ No manifest found. Run 'npm run generate-previews' first.");
    return;
  }

  const existingPreviews = manifest.previews || {};

  // Load posts from Velite
  let posts: Array<{ code: string; draft?: boolean }> = [];
  try {
    const veliteOutput = await import("../.velite/index.js");
    posts = veliteOutput.posts || [];
  } catch {
    console.log("❌ No Velite output found. Run 'npm run build' first.");
    return;
  }

  // Collect all URLs from posts
  const allUrls = new Set<string>();
  for (const post of posts) {
    if (post.draft) continue;
    extractUrlsFromCode(post.code).forEach((url) => allUrls.add(url));
  }

  console.log(`📋 Found ${allUrls.size} total external URLs in posts\n`);

  // Find URLs that need processing
  const urlsToProcess: string[] = [];
  const failedUrls: string[] = [];
  const missingUrls: string[] = [];

  for (const url of allUrls) {
    const hash = hashUrl(url);
    const existing = existingPreviews[hash];

    if (!existing) {
      missingUrls.push(url);
      urlsToProcess.push(url);
    } else if (existing.status === "failed" && retryAll) {
      failedUrls.push(url);
      urlsToProcess.push(url);
    }
  }

  // Report status
  const successCount = Object.values(existingPreviews).filter(
    (p) => p.status === "success"
  ).length;
  const failedCount = Object.values(existingPreviews).filter(
    (p) => p.status === "failed"
  ).length;

  console.log("📊 Current Status:");
  console.log(`   ✓ Successful: ${successCount}`);
  console.log(`   ✗ Failed: ${failedCount}`);
  console.log(`   ? Missing (new): ${missingUrls.length}`);

  if (failedCount > 0 && !retryAll) {
    console.log(`\n💡 Tip: Run 'npm run fix-previews -- --all' to retry failed screenshots`);
  }

  if (urlsToProcess.length === 0) {
    console.log("\n✅ Nothing to process. All links have screenshots.");
    return;
  }

  console.log(`\n🎯 Processing ${urlsToProcess.length} URLs:\n`);

  // Show what we're processing
  if (missingUrls.length > 0) {
    console.log(`   New links (${missingUrls.length}):`);
    missingUrls.slice(0, 5).forEach((url) => console.log(`     - ${url}`));
    if (missingUrls.length > 5) {
      console.log(`     ... and ${missingUrls.length - 5} more`);
    }
  }

  if (failedUrls.length > 0) {
    console.log(`\n   Retrying failed (${failedUrls.length}):`);
    failedUrls.slice(0, 5).forEach((url) => console.log(`     - ${url}`));
    if (failedUrls.length > 5) {
      console.log(`     ... and ${failedUrls.length - 5} more`);
    }
  }

  console.log("\n🚀 Launching browser...\n");

  const browser = await chromium.launch({ headless: true });

  try {
    let successfulFixes = 0;
    let stillFailed = 0;

    // Process one at a time for better success rate on retries
    for (let i = 0; i < urlsToProcess.length; i++) {
      const url = urlsToProcess[i];
      console.log(`[${i + 1}/${urlsToProcess.length}] ${url}`);

      const result = await captureScreenshot(browser, url);
      const hash = hashUrl(url);

      existingPreviews[hash] = {
        url,
        screenshotPath: `/previews/${getScreenshotFilename(url)}`,
        width: config.screenshotWidth,
        height: config.screenshotHeight,
        generatedAt: new Date().toISOString(),
        status: result.success ? "success" : "failed",
        errorMessage: result.error,
      };

      if (result.success) {
        console.log(`   ✓ Success\n`);
        successfulFixes++;
      } else {
        console.log(`   ✗ Failed: ${result.error}\n`);
        stillFailed++;
      }
    }

    // Update manifest
    const updatedManifest: LinkPreviewManifest = {
      generated: new Date().toISOString(),
      version: manifest.version,
      previews: existingPreviews,
    };

    await fs.writeFile(
      config.manifestPath,
      JSON.stringify(updatedManifest, null, 2)
    );

    // Summary
    console.log("\n📊 Results:");
    console.log(`   ✓ Fixed: ${successfulFixes}`);
    console.log(`   ✗ Still failing: ${stillFailed}`);
    console.log(`\n✅ Manifest updated.`);

    if (stillFailed > 0) {
      console.log("\n💡 Some URLs still failed. Common reasons:");
      console.log("   - Site blocks automated browsers");
      console.log("   - Site requires authentication");
      console.log("   - Site has long loading times");
      console.log("   - Site uses anti-bot protection");
    }
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
