import { EXCLUDED_DOMAINS, INTERNAL_PATTERNS } from "./constants";

/**
 * Check if a URL is external (not internal or anchor link)
 * Client-safe version without Node.js dependencies
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
