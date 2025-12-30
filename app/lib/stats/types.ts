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
  contributions: ContributionData | null;
}

export interface ContributionDay {
  date: string;
  contributionCount: number;
  contributionLevel: "NONE" | "FIRST_QUARTILE" | "SECOND_QUARTILE" | "THIRD_QUARTILE" | "FOURTH_QUARTILE";
}

export interface ContributionWeek {
  contributionDays: ContributionDay[];
}

export interface ContributionData {
  totalContributions: number;
  weeks: ContributionWeek[];
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

export interface LighthouseScores {
  performance: number;
  accessibility: number;
  bestPractices: number;
  seo: number;
  fetchedAt: string;
}

export interface LighthouseStats {
  mobile: LighthouseScores | null;
  desktop: LighthouseScores | null;
}
