import { siteMetadata } from "@/app/data/siteMetadata";
import { fetchAndSortBlogPosts } from "@/app/lib/utils";
import { postToMarkdown } from "@/app/lib/markdown";

// Every post as Markdown in one file, for agents that want the whole blog.
export const dynamic = "force-static";

export function GET() {
  const posts = fetchAndSortBlogPosts();

  const body = [
    `# ${siteMetadata.title}: all posts`,
    "",
    `> ${siteMetadata.description}`,
    "",
    ...posts.map((post) => `${postToMarkdown(post)}\n---\n`),
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
