import { defineConfig, defineCollection, s } from "velite";
import rehypeRaw from "rehype-raw";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

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
      code: s.mdx(),
      canonicalUrl: s.string().optional(),
      draft: s.boolean().default(false),
    })
    .transform(computedFields),
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
