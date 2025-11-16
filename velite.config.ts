import { defineConfig, defineCollection, s } from "velite";
import rehypeRaw from "rehype-raw";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

// Helper function to slugify text (matches the one in mdx.tsx)
function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/&/g, "-and-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-");
}

// Extract table of contents from raw MDX content
function extractToc(content: string) {
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;
  const headings: Array<{ depth: number; value: string; id: string }> = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const depth = match[1].length;
    const value = match[2].trim();
    const id = slugify(value);
    headings.push({ depth, value, id });
  }

  return headings;
}

export const posts = defineCollection({
  name: "Blog", // collection type name
  pattern: "./blog/*.mdx", // content files glob pattern
  schema: s
    .object({
      title: s.string(), // .max(69),
      publishedAt: s.isodate(), // input Date-like string, output ISO Date string.
      summary: s.string(), //.max(69),
      imageName: s.string(),
      categories: s.array(s.string()),
      slug: s.custom().transform((_, { meta }) => {
        return meta.basename?.replace(/\.mdx$/, "") || "";
      }),
      content: s.raw(), // Raw MDX content for TOC extraction
      code: s.mdx(),
      canonicalUrl: s.string().optional(),
      draft: s.boolean().default(false),
      audioFile: s.string().optional(), // Audio file name (e.g., "article-slug.mp3")
    })
    .transform((data) => ({
      ...computedFields(data),
      toc: extractToc(data.content), // Extract TOC from raw content
    })),
});

export const changelogItems = defineCollection({
  name: "Changelog", // collection type name
  pattern: "./changelog/*.mdx", // content files glob pattern
  schema: s
    .object({
      title: s.string(), // .max(69),
      publishedAt: s.isodate(), // input Date-like string, output ISO Date string.
      imageName: s.string().optional(),
      slug: s.custom().transform((_, { meta }) => {
        return meta.basename?.replace(/\.mdx$/, "") || "";
      }),
      code: s.mdx(),
      draft: s.boolean().default(false),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts, changelogItems },
  mdx: {
    rehypePlugins: [
      [rehypeRaw, { passThrough: ['mdxJsxFlowElement', 'mdxJsxTextElement'] }]
    ],
    remarkPlugins: [],
  },
});
