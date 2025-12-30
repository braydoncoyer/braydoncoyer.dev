import { posts, changelogItems } from "#site/content";
import type { BuildTimeStats, CategoryCount } from "./types";

function estimateWordCount(mdxCode: string): number {
  // Strip HTML/JSX tags and code blocks
  const stripped = mdxCode
    .replace(/<[^>]*>/g, " ")
    .replace(/\{[^}]*\}/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/`[^`]*`/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  return stripped.split(/\s+/).filter((word) => word.length > 0).length;
}

export function getBuildTimeStats(): BuildTimeStats {
  const publishedPosts = posts.filter((post) => !post.draft);
  const publishedChangelog = changelogItems.filter((item) => !item.draft);

  // Calculate word counts
  const wordCounts = publishedPosts.map((post) => estimateWordCount(post.code));
  const totalWords = wordCounts.reduce((sum, count) => sum + count, 0);
  const avgWordsPerArticle =
    publishedPosts.length > 0
      ? Math.round(totalWords / publishedPosts.length)
      : 0;

  // Calculate combined reading time (assuming 200 words per minute)
  const combinedReadingMinutes = Math.ceil(totalWords / 200);

  // Category breakdown
  const categoryMap = new Map<string, number>();
  publishedPosts.forEach((post) => {
    post.categories.forEach((cat) => {
      categoryMap.set(cat, (categoryMap.get(cat) || 0) + 1);
    });
  });

  const categoryBreakdown: CategoryCount[] = Array.from(categoryMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  return {
    totalArticles: publishedPosts.length,
    totalWords,
    combinedReadingMinutes,
    avgWordsPerArticle,
    changelogCount: publishedChangelog.length,
    categoryBreakdown,
  };
}
