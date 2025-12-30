import { Metadata } from "next";
import { getBuildTimeStats } from "@/app/lib/stats/build-time-stats";
import { getServerStats } from "@/app/lib/stats/server-stats";
import { getGitHubStats } from "@/app/lib/stats/github-stats";
import { StatsPageHeader } from "@/app/components/stats/StatsPageHeader";
import { StatCard } from "@/app/components/stats/StatCard";
import { TopArticlesCard } from "@/app/components/stats/TopArticlesCard";
import { ReactionBreakdown } from "@/app/components/stats/ReactionBreakdown";
import { CategoryBarChart } from "@/app/components/stats/CategoryBarChart";
import { DaysSinceRevamp } from "@/app/components/stats/DaysSinceRevamp";
import { CoffeeCupsCard } from "@/app/components/stats/CoffeeCupsCard";
import { MostViewedArticleCard } from "@/app/components/stats/MostViewedArticleCard";
import { CommunityMessagesCard } from "@/app/components/stats/CommunityMessagesCard";
import { ChangelogUpdatesCard } from "@/app/components/stats/ChangelogUpdatesCard";
import { GitHubStatsCard } from "@/app/components/stats/GitHubStatsCard";
import { GridWrapper } from "@/app/components/GridWrapper";

export const metadata: Metadata = {
  title: "Stats | Braydon Coyer",
  description:
    "Numbers, metrics, and fun facts about braydoncoyer.dev - total articles, views, reactions, and more.",
};

// Revamp date: March 31, 2025
const REVAMP_DATE = new Date("2025-03-31");

export default async function StatsPage() {
  // Parallel data fetching
  const [buildTimeStats, serverStats, githubStats] = await Promise.all([
    Promise.resolve(getBuildTimeStats()),
    getServerStats(),
    getGitHubStats(),
  ]);

  // Computed stats
  const coffeeCups = Math.floor(buildTimeStats.totalWords / 500);

  // Format reading time nicely
  const hours = Math.floor(buildTimeStats.combinedReadingMinutes / 60);
  const minutes = buildTimeStats.combinedReadingMinutes % 60;
  const readingTimeFormatted =
    hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;

  // Get the most viewed article for the featured card
  const mostViewedArticle = serverStats.topViewedArticles[0];

  return (
    <div className="mt-14 space-y-12 pb-16 md:mt-16 md:space-y-16">
      <StatsPageHeader />

      {/* Main Bento Grid */}
      <section>
        <GridWrapper>
          <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
            {/* Row 1-2: Hero section with Most Viewed Article flanked by stats */}
            <div className="md:col-span-2">
              <StatCard
                label="Total Articles"
                value={buildTimeStats.totalArticles}
                delay={0.3}
              />
            </div>
            {mostViewedArticle && mostViewedArticle.imageName && (
              <div className="md:col-span-5 md:row-span-2">
                <MostViewedArticleCard
                  title={mostViewedArticle.title}
                  slug={mostViewedArticle.slug}
                  imageName={mostViewedArticle.imageName}
                  viewCount={mostViewedArticle.count}
                  delay={0.35}
                />
              </div>
            )}
            <div className="md:col-span-5">
              <DaysSinceRevamp revampDate={REVAMP_DATE} delay={0.4} />
            </div>
            <div className="md:col-span-2">
              <ChangelogUpdatesCard
                count={buildTimeStats.changelogCount}
                delay={0.45}
              />
            </div>
            <div className="md:col-span-5">
              <CoffeeCupsCard cups={coffeeCups} delay={0.5} />
            </div>

            {/* Row 3-4: Reactions centered with stats and community cards */}
            <div className="md:col-span-3">
              <StatCard
                label="Words Written on Blog"
                value={buildTimeStats.totalWords}
                delay={0.55}
              />
            </div>
            <div className="md:col-span-5 md:row-span-2">
              <ReactionBreakdown
                reactions={serverStats.reactionsByType}
                delay={0.6}
              />
            </div>
            <div className="md:col-span-4">
              <CommunityMessagesCard
                count={serverStats.communityWallMessages}
                delay={0.65}
              />
            </div>
            <div className="md:col-span-3">
              <StatCard
                label="Reading Time"
                value={readingTimeFormatted}
                animate={false}
                delay={0.7}
              />
            </div>
            <div className="md:col-span-4">
              <StatCard
                label="Total Site Views"
                value={serverStats.totalViews}
                delay={0.75}
              />
            </div>

            {/* Row 5-6: Article lists with Category chart */}
            <div className="md:col-span-5">
              <TopArticlesCard
                title="Top Viewed Articles"
                articles={serverStats.topViewedArticles.slice(1, 5)}
                metricLabel="views"
                delay={0.8}
              />
            </div>
            <div className="md:col-span-7 md:row-span-2">
              <CategoryBarChart
                categories={buildTimeStats.categoryBreakdown}
                delay={0.85}
              />
            </div>
            <div className="md:col-span-5">
              <TopArticlesCard
                title="Most Reacted Articles"
                articles={serverStats.topReactedArticles.slice(0, 4)}
                metricLabel="reactions"
                delay={0.9}
              />
            </div>

            {/* Row 7: GitHub Stats */}
            <div className="md:col-span-4">
              <GitHubStatsCard
                type="stars"
                label="GitHub Stars"
                value={githubStats.stars}
                delay={0.95}
              />
            </div>
            <div className="md:col-span-4">
              <GitHubStatsCard
                type="forks"
                label="Forks"
                value={githubStats.forks}
                delay={1.0}
              />
            </div>
            <div className="md:col-span-4">
              <GitHubStatsCard
                type="commits"
                label="Commits"
                value={githubStats.commits}
                delay={1.05}
              />
            </div>
          </div>
        </GridWrapper>
      </section>
    </div>
  );
}
