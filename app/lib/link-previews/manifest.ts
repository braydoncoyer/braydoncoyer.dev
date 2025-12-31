import type { LinkPreviewEntry, LinkPreviewData } from "./types";

// We'll import the manifest dynamically to handle cases where it doesn't exist
let manifest: { previews: Record<string, LinkPreviewEntry> } | null = null;
let manifestLoaded = false;

/**
 * Simple hash function for client-side use (same algorithm as server)
 * This creates a hash compatible with the build script's MD5 approach
 */
function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  // Convert to hex and take first 12 chars
  return Math.abs(hash).toString(16).padStart(12, "0").slice(0, 12);
}

/**
 * Load the manifest if not already loaded
 */
async function loadManifest() {
  if (manifestLoaded) return;

  try {
    const response = await fetch("/previews/manifest.json");
    if (response.ok) {
      manifest = await response.json();
    }
  } catch {
    // Manifest doesn't exist or couldn't be loaded
    manifest = null;
  }

  manifestLoaded = true;
}

/**
 * Get preview data for a URL (async version for runtime)
 */
export async function getPreviewForUrlAsync(
  url: string
): Promise<LinkPreviewData | null> {
  await loadManifest();

  if (!manifest) return null;

  const hash = simpleHash(url);
  const entry = manifest.previews[hash];

  if (!entry || entry.status !== "success") {
    return null;
  }

  return {
    screenshotPath: entry.screenshotPath,
    width: entry.width,
    height: entry.height,
  };
}

/**
 * Sync version using pre-loaded manifest data
 * This is used in the MDX component which receives preview data as props
 */
export function getPreviewFromManifest(
  manifestData: Record<string, LinkPreviewEntry> | null,
  url: string
): LinkPreviewData | null {
  if (!manifestData) return null;

  const hash = simpleHash(url);
  const entry = manifestData[hash];

  if (!entry || entry.status !== "success") {
    return null;
  }

  return {
    screenshotPath: entry.screenshotPath,
    width: entry.width,
    height: entry.height,
  };
}

// Export the hash function for consistency
export { simpleHash as hashUrl };
