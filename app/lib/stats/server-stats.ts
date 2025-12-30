"use server";

import { unstable_cache } from "next/cache";
import { createSupabaseAdminClient } from "../supabase/server";
import { posts } from "#site/content";
import type { ServerStats, ReactionType, ArticleMetric } from "./types";

const VALID_REACTIONS: ReactionType[] = [
  "like",
  "heart",
  "celebrate",
  "insightful",
];

export const getServerStats = unstable_cache(
  async (): Promise<ServerStats> => {
    const supabase = await createSupabaseAdminClient();

    // Total views across all articles
    const { data: viewsData } = await supabase
      .from("article_views")
      .select("slug, view_count");

    const totalViews =
      viewsData?.reduce((sum, row) => sum + row.view_count, 0) || 0;

    // Total reactions by type
    const { data: reactionsData } = await supabase
      .from("article_reactions")
      .select("article_slug, reaction_type, count");

    const reactionsByType: Record<ReactionType, number> = {
      like: 0,
      heart: 0,
      celebrate: 0,
      insightful: 0,
    };

    reactionsData?.forEach((row) => {
      if (VALID_REACTIONS.includes(row.reaction_type as ReactionType)) {
        reactionsByType[row.reaction_type as ReactionType] += row.count;
      }
    });

    const totalReactions = Object.values(reactionsByType).reduce(
      (sum, count) => sum + count,
      0
    );

    // Top 5 most viewed articles
    const topViewedRaw =
      viewsData
        ?.sort((a, b) => b.view_count - a.view_count)
        .slice(0, 5)
        .map((item) => {
          const post = posts.find((p) => p.slug === item.slug);
          return {
            slug: item.slug,
            title: post?.title || item.slug,
            count: item.view_count,
            imageName: post?.imageName,
          };
        }) || [];

    // Top 5 most reacted articles (aggregate reactions per article)
    const reactionsPerArticle: Record<string, number> = {};
    reactionsData?.forEach((row) => {
      reactionsPerArticle[row.article_slug] =
        (reactionsPerArticle[row.article_slug] || 0) + row.count;
    });

    const topReactedRaw: ArticleMetric[] = Object.entries(reactionsPerArticle)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5)
      .map(([slug, count]) => {
        const post = posts.find((p) => p.slug === slug);
        return {
          slug,
          title: post?.title || slug,
          count,
          imageName: post?.imageName,
        };
      });

    // Community wall message count
    const { count: messageCount } = await supabase
      .from("messages")
      .select("*", { count: "exact", head: true });

    return {
      totalViews,
      totalReactions,
      reactionsByType,
      topViewedArticles: topViewedRaw,
      topReactedArticles: topReactedRaw,
      communityWallMessages: messageCount || 0,
    };
  },
  ["server-stats"],
  { revalidate: 3600 } // Revalidate every hour
);
