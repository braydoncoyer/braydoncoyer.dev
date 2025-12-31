/**
 * Table of Contents utilities
 * Shared types and functions for TOC heading extraction and rendering
 */

export interface TocHeading {
  level: 2 | 3;
  text: string;
  slug: string;
}

/**
 * Slugify a string for use as an anchor ID
 * Must match the slugify function in mdx.tsx for consistency
 */
export function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

/**
 * Extract H2 and H3 headings from MDX content
 * Uses regex to parse markdown headings from raw content
 */
export function extractHeadingsFromMdx(content: string): TocHeading[] {
  const headings: TocHeading[] = [];

  // Match markdown headings: ## or ### at start of line
  // Captures the hashes and the heading text
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3;
    const text = match[2].trim();

    // Skip empty headings
    if (!text) continue;

    headings.push({
      level,
      text,
      slug: slugify(text),
    });
  }

  return headings;
}
