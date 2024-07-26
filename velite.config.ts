import { defineConfig, defineCollection, s } from 'velite';

const computedFields = <T extends { slug: string}>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

export const posts = defineCollection({
  name: "Blog", // collection type name
  pattern: "./blog/*.mdx", // content files glob pattern
  schema: s.object({
    title: s.string(), // .max(69),
    publishedAt: s.isodate(), // input Date-like string, output ISO Date string.
    summary: s.string(), //.max(69),
    coverImage: s.string(),
    categories: s.array(s.string()),
    slug: s.custom().transform((_, { meta }) => {
      return meta.basename?.replace(/\.mdx$/, "") || "";
    }),
    code: s.mdx(),
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
  collections: { posts },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
});