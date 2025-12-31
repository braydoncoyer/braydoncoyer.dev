import type { LinkPreviewConfig } from "./types";

export const DEFAULT_CONFIG: LinkPreviewConfig = {
  screenshotWidth: 1200,
  screenshotHeight: 630, // OG image aspect ratio
  timeout: 30000, // 30 seconds for slow sites
  outputDir: "public/previews",
  manifestPath: "public/previews/manifest.json",
  imageFormat: "jpeg", // Playwright only supports png or jpeg
  imageQuality: 80,
};

// Domains to skip (social media with dynamic content, etc.)
export const EXCLUDED_DOMAINS = [
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
  "mailto:",
  "tel:",
];

// Internal link patterns to skip
export const INTERNAL_PATTERNS = [/^\//, /^#/, /braydoncoyer\.dev/];

// How old a screenshot can be before regeneration (30 days in ms)
export const MAX_SCREENSHOT_AGE_MS = 30 * 24 * 60 * 60 * 1000;

// Concurrency limit for screenshot generation
export const SCREENSHOT_CONCURRENCY = 3;
