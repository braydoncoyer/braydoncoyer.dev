import { notFound } from "next/navigation";
import { fetchAndSortBlogPosts } from "@/app/lib/utils";
import { markdownResponse, postToMarkdown } from "@/app/lib/markdown";

// Served at /blog/<slug>.md through a rewrite in middleware.ts.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return fetchAndSortBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const post = fetchAndSortBlogPosts().find((post) => post.slug === slug);
  if (!post) notFound();

  return markdownResponse(postToMarkdown(post), `/blog/${post.slug}`);
}
