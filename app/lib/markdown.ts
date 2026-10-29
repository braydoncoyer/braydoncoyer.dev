import fs from "fs";
import path from "path";
import type { Blog } from "#site/content";
import { absoluteUrl } from "@/app/lib/seo";

// Plain-Markdown versions of posts for feeds, agents and LLMs. These routes are
// prerendered at build time, so reading the MDX source from disk is fine.

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

function readPostBody(slug: string): string {
  const source = fs.readFileSync(path.join(BLOG_DIR, `${slug}.mdx`), "utf8");
  // Drop the frontmatter; the header in postToMarkdown carries what readers need.
  const body = source.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n/, "");

  // Drop MDX import/export lines, which mean nothing outside the site, but
  // leave code blocks alone since they often start lines with `export`.
  let inFence = false;
  return body
    .split("\n")
    .filter((line) => {
      if (/^\s*(```|~~~)/.test(line)) inFence = !inFence;
      return inFence || !/^(import|export) /.test(line);
    })
    .join("\n")
    .trim();
}

export function postToMarkdown(post: Blog): string {
  const published = new Date(post.publishedAt).toISOString().slice(0, 10);
  return [
    `# ${post.title}`,
    "",
    `> ${post.summary}`,
    "",
    `- Author: Braydon Coyer`,
    `- Published: ${published}`,
    `- URL: ${absoluteUrl(`/blog/${post.slug}`)}`,
    `- Tags: ${post.categories.join(", ")}`,
    "",
    readPostBody(post.slug),
    "",
  ].join("\n");
}

// canonical is a path on this site or a full URL elsewhere.
export function markdownResponse(body: string, canonical: string) {
  return new Response(body, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      // Point search engines at the HTML page so the Markdown copy never
      // competes with it.
      Link: `<${absoluteUrl(canonical)}>; rel="canonical"`,
    },
  });
}
