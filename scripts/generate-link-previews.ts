import { chromium, Browser } from "playwright";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import type {
  LinkPreviewManifest,
  LinkPreviewEntry,
  LinkPreviewConfig,
} from "../app/lib/link-previews/types";

// Configuration
const config: LinkPreviewConfig & { contentHashPath: string } = {
  contentHashPath: "public/previews/.content-hash",
  screenshotWidth: 1200,
  screenshotHeight: 630,
  timeout: 30000, // Increased timeout for slow sites
  outputDir: "public/previews",
  manifestPath: "public/previews/manifest.json",
  imageFormat: "jpeg", // Playwright only supports png or jpeg
  imageQuality: 80,
};

// Domains to skip
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

// Internal patterns
const INTERNAL_PATTERNS = [/^\//, /^#/, /braydoncoyer\.dev/];

// Max age before regeneration (6 months)
const MAX_SCREENSHOT_AGE_MS = 6 * 30 * 24 * 60 * 60 * 1000;

// Concurrency limit
const CONCURRENCY = 3;

// Simple hash function - must match the client-side hash in mdx.tsx
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

/**
 * Extract URLs from compiled MDX code
 */
function extractUrlsFromCode(code: string): string[] {
  // Match href attributes in the compiled code
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

/**
 * Capture a screenshot of a URL
 */
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
    // Block unnecessary resources for faster loading
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
      await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: config.timeout,
      });
      // Wait for images to load
      await page.waitForTimeout(3000);
    }

    // Wait a bit for any animations to settle
    await page.waitForTimeout(1000);

    const filename = getScreenshotFilename(url);
    const outputPath = path.join(config.outputDir, filename);

    await page.screenshot({
      path: outputPath,
      type: config.imageFormat,
      quality: config.imageFormat === "png" ? undefined : config.imageQuality,
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

/**
 * Load existing manifest for incremental builds
 */
async function loadExistingManifest(): Promise<LinkPreviewManifest | null> {
  try {
    const content = await fs.readFile(config.manifestPath, "utf-8");
    return JSON.parse(content);
  } catch {
    return null;
  }
}

/**
 * Generate a hash of all post content to detect changes
 */
function generateContentHash(posts: Array<{ code: string }>): string {
  const hash = crypto.createHash("md5");
  for (const post of posts) {
    hash.update(post.code);
  }
  return hash.digest("hex");
}

/**
 * Load the stored content hash
 */
async function loadContentHash(): Promise<string | null> {
  try {
    return await fs.readFile(config.contentHashPath, "utf-8");
  } catch {
    return null;
  }
}

/**
 * Save the content hash
 */
async function saveContentHash(hash: string): Promise<void> {
  await fs.writeFile(config.contentHashPath, hash);
}

/**
 * Process URLs in batches with concurrency limit
 */
async function processBatch(
  browser: Browser,
  urls: string[],
  existingPreviews: Record<string, LinkPreviewEntry>
): Promise<Record<string, LinkPreviewEntry>> {
  const results: Record<string, LinkPreviewEntry> = { ...existingPreviews };

  for (let i = 0; i < urls.length; i += CONCURRENCY) {
    const batch = urls.slice(i, i + CONCURRENCY);
    console.log(
      `Processing batch ${Math.floor(i / CONCURRENCY) + 1}/${Math.ceil(urls.length / CONCURRENCY)}`
    );

    await Promise.all(
      batch.map(async (url) => {
        console.log(`  Capturing: ${url}`);
        const hash = hashUrl(url);
        const result = await captureScreenshot(browser, url);

        results[hash] = {
          url,
          screenshotPath: `/previews/${getScreenshotFilename(url)}`,
          width: config.screenshotWidth,
          height: config.screenshotHeight,
          generatedAt: new Date().toISOString(),
          status: result.success ? "success" : "failed",
          errorMessage: result.error,
        };

        if (result.success) {
          console.log(`    ✓ Success`);
        } else {
          console.log(`    ✗ Failed: ${result.error}`);
        }
      })
    );
  }

  return results;
}

async function main() {
  const startTime = Date.now();
  console.log("🔗 Link Preview Generator\n");

  // Ensure output directory exists
  await fs.mkdir(config.outputDir, { recursive: true });

  // Load existing manifest
  const existingManifest = await loadExistingManifest();
  const existingPreviews = existingManifest?.previews || {};

  // Load posts from Velite output
  let posts: Array<{ code: string; draft?: boolean }> = [];
  try {
    const veliteOutput = await import("../.velite/index.js");
    posts = veliteOutput.posts || [];
  } catch (error) {
    console.log("⚠️  No Velite output found. Run 'npm run build' first to generate content.");
    console.log("    Creating empty manifest for now...\n");

    // Write empty manifest
    const emptyManifest: LinkPreviewManifest = {
      generated: new Date().toISOString(),
      version: "1.0",
      previews: existingPreviews,
    };
    await fs.writeFile(config.manifestPath, JSON.stringify(emptyManifest, null, 2));
    return;
  }

  // Fast-path: Check if content has changed since last run
  const currentHash = generateContentHash(posts);
  const storedHash = await loadContentHash();

  if (storedHash === currentHash && existingManifest) {
    const elapsed = Date.now() - startTime;
    console.log(`✓ No content changes detected. Skipping. (${elapsed}ms)\n`);
    return;
  }

  // Content changed - proceed with URL extraction
  console.log("Content changed, checking for new URLs...\n");

  // Collect all external URLs from posts
  const allUrls = new Set<string>();
  for (const post of posts) {
    if (post.draft) continue;
    const urls = extractUrlsFromCode(post.code);
    urls.forEach((url) => allUrls.add(url));
  }

  console.log(`Found ${allUrls.size} unique external URLs\n`);

  if (allUrls.size === 0) {
    console.log("No external URLs to process.");

    // Write manifest with existing previews
    const manifest: LinkPreviewManifest = {
      generated: new Date().toISOString(),
      version: "1.0",
      previews: existingPreviews,
    };
    await fs.writeFile(config.manifestPath, JSON.stringify(manifest, null, 2));
    await saveContentHash(currentHash);
    return;
  }

  // Filter out already-generated previews (incremental build)
  const urlsToProcess = [...allUrls].filter((url) => {
    const hash = hashUrl(url);
    const existing = existingPreviews[hash];
    if (!existing) return true;

    // Skip if failed previously (don't retry on every build)
    if (existing.status === "failed") return false;

    // Regenerate if older than 6 months
    const age = Date.now() - new Date(existing.generatedAt).getTime();
    return age > MAX_SCREENSHOT_AGE_MS;
  });

  console.log(`Processing ${urlsToProcess.length} new/stale URLs\n`);

  if (urlsToProcess.length === 0) {
    console.log("✓ All screenshots are up to date.\n");

    // Write manifest (updates timestamp)
    const manifest: LinkPreviewManifest = {
      generated: new Date().toISOString(),
      version: "1.0",
      previews: existingPreviews,
    };
    await fs.writeFile(config.manifestPath, JSON.stringify(manifest, null, 2));
    await saveContentHash(currentHash);
    return;
  }

  // Launch browser
  console.log("Launching browser...\n");
  const browser = await chromium.launch({
    headless: true,
  });

  try {
    // Process URLs
    const newPreviews = await processBatch(
      browser,
      urlsToProcess,
      existingPreviews
    );

    // Write manifest
    const manifest: LinkPreviewManifest = {
      generated: new Date().toISOString(),
      version: "1.0",
      previews: newPreviews,
    };

    await fs.writeFile(config.manifestPath, JSON.stringify(manifest, null, 2));

    // Summary
    const total = Object.values(newPreviews).length;
    const successful = Object.values(newPreviews).filter(
      (p) => p.status === "success"
    ).length;
    const failed = Object.values(newPreviews).filter(
      (p) => p.status === "failed"
    ).length;

    console.log("\n📊 Summary:");
    console.log(`   Total previews: ${total}`);
    console.log(`   Successful: ${successful}`);
    console.log(`   Failed: ${failed}`);
    console.log(`\n✓ Manifest written to ${config.manifestPath}`);

    // Save content hash for fast-path on next run
    await saveContentHash(currentHash);
  } finally {
    await browser.close();
  }
}

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
