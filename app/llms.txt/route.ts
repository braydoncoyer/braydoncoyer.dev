import { siteMetadata } from "@/app/data/siteMetadata";
import { fetchAndSortBlogPosts } from "@/app/lib/utils";
import { absoluteUrl } from "@/app/lib/seo";

// https://llmstxt.org: a short, Markdown map of the site for LLMs and agents.
export const dynamic = "force-static";

export function GET() {
  const posts = fetchAndSortBlogPosts();

  const body = [
    `# ${siteMetadata.title}`,
    "",
    `> ${siteMetadata.description}`,
    "",
    "Every post is also available as plain Markdown by adding `.md` to its URL, and all posts are combined in llms-full.txt.",
    "",
    "## Blog posts",
    "",
    ...posts.map(
      (post) =>
        `- [${post.title}](${absoluteUrl(`/blog/${post.slug}.md`)}): ${post.summary}`,
    ),
    "",
    "## Pages",
    "",
    `- [About](${absoluteUrl("/about")}): background, work history and what I'm up to`,
    `- [Speaking](${absoluteUrl("/speaking")}): conference talks, meetups, podcasts and videos`,
    `- [Projects](${absoluteUrl("/projects")}): sites and tools I've designed and built`,
    `- [Blog](${absoluteUrl("/blog")}): every article, newest first`,
    `- [RSS feed](${absoluteUrl("/rss.xml")})`,
    "",
    "## Optional",
    "",
    `- [All posts in one file](${absoluteUrl("/llms-full.txt")})`,
    `- [GitHub](${siteMetadata.github})`,
    `- [LinkedIn](${siteMetadata.linkedin})`,
    `- [X](${siteMetadata.twitter})`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
