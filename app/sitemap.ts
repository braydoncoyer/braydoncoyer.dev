import type { MetadataRoute } from "next";
import {
  extractUniqueBlogCategories,
  fetchAndSortBlogPosts,
} from "@/app/lib/utils";
import { absoluteUrl } from "@/app/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = fetchAndSortBlogPosts();
  const latestPostDate = posts[0] ? new Date(posts[0].publishedAt) : undefined;

  const blogUrls = posts.map((post) => ({
    url: absoluteUrl(`/blog/${post.slug}`),
    lastModified: new Date(post.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryUrls = Array.from(extractUniqueBlogCategories(posts)).map(
    (category) => ({
      url: absoluteUrl(
        `/blog/category/${encodeURIComponent(category.toLowerCase())}`,
      ),
      lastModified: latestPostDate,
      changeFrequency: "weekly" as const,
      priority: 0.4,
    }),
  );

  // Static pages leave lastModified out rather than reporting the build time,
  // which would tell crawlers they change on every deploy.
  return [
    {
      url: absoluteUrl("/"),
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    { url: absoluteUrl("/about"), changeFrequency: "monthly", priority: 0.7 },
    {
      url: absoluteUrl("/speaking"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: absoluteUrl("/projects"),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    { url: absoluteUrl("/toolbox"), changeFrequency: "yearly", priority: 0.4 },
    ...blogUrls,
    ...categoryUrls,
  ];
}
