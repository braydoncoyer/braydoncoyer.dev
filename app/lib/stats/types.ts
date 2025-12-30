export type ReactionType = "like" | "heart" | "celebrate" | "insightful";

export interface BuildTimeStats {
  totalArticles: number;
  totalWords: number;
  combinedReadingMinutes: number;
  avgWordsPerArticle: number;
  changelogCount: number;
  categoryBreakdown: CategoryCount[];
}

export interface CategoryCount {
  name: string;
  count: number;
}

export interface ServerStats {
  totalViews: number;
  totalReactions: number;
  reactionsByType: Record<ReactionType, number>;
  topViewedArticles: ArticleMetric[];
  topReactedArticles: ArticleMetric[];
  communityWallMessages: number;
}

export interface ArticleMetric {
  slug: string;
  title: string;
  count: number;
  imageName?: string;
}

export interface GitHubStats {
  stars: number;
  forks: number;
  commits: number;
}

export interface AllStats {
  buildTime: BuildTimeStats;
  server: ServerStats;
  github: GitHubStats;
  computed: ComputedStats;
}

export interface ComputedStats {
  daysSinceRevamp: number;
  coffeeCups: number;
  techStackCount: number;
}
