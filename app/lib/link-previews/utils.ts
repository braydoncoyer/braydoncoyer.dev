import crypto from "crypto";
import { EXCLUDED_DOMAINS, INTERNAL_PATTERNS } from "./constants";

/**
 * Generate a short hash from a URL for use as a filename
 */
export function hashUrl(url: string): string {
  return crypto.createHash("md5").update(url).digest("hex").slice(0, 12);
}

/**
 * Check if a URL is external (not internal or anchor link)
 */
export function isExternalUrl(url: string): boolean {
  if (!url) return false;

  // Check internal patterns
  if (INTERNAL_PATTERNS.some((pattern) => pattern.test(url))) {
    return false;
  }

  try {
    const parsed = new URL(url);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

/**
 * Check if a URL should have a preview generated
 */
export function shouldGeneratePreview(url: string): boolean {
  if (!isExternalUrl(url)) return false;

  try {
    const parsed = new URL(url);

    // Check against excluded domains
    const isExcluded = EXCLUDED_DOMAINS.some(
      (domain) =>
        parsed.hostname.includes(domain) || url.startsWith(domain)
    );

    return !isExcluded;
  } catch {
    return false;
  }
}

/**
 * Generate the screenshot filename from a URL
 */
export function getScreenshotFilename(url: string, format: string): string {
  const hash = hashUrl(url);
  return `${hash}.${format}`;
}

/**
 * Format a URL for display (hostname + truncated path)
 */
export function formatUrlForDisplay(url: string, maxLength = 40): string {
  try {
    const parsed = new URL(url);
    let displayUrl =
      parsed.hostname + (parsed.pathname !== "/" ? parsed.pathname : "");

    if (displayUrl.length > maxLength) {
      displayUrl = displayUrl.slice(0, maxLength - 3) + "...";
    }

    return displayUrl;
  } catch {
    return url.length > maxLength ? url.slice(0, maxLength - 3) + "..." : url;
  }
}

/**
 * Get the favicon URL for a domain
 */
export function getFaviconUrl(url: string): string {
  try {
    const parsed = new URL(url);
    // Use Google's favicon service as a reliable source
    return `https://www.google.com/s2/favicons?domain=${parsed.hostname}&sz=32`;
  } catch {
    return "";
  }
}
