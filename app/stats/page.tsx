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
            {/* Row 1: Most Viewed Article + Content Stats */}
            {mostViewedArticle && mostViewedArticle.imageName && (
              <div className="md:col-span-5 md:row-span-2">
                <MostViewedArticleCard
                  title={mostViewedArticle.title}
                  slug={mostViewedArticle.slug}
                  imageName={mostViewedArticle.imageName}
                  viewCount={mostViewedArticle.count}
                  delay={0.3}
                />
              </div>
            )}
            <div className="md:col-span-4">
              <StatCard
                label="Total Articles"
                value={buildTimeStats.totalArticles}
                delay={0.35}
              />
            </div>
            <div className="md:col-span-3">
              <StatCard
                label="Words Written"
                value={buildTimeStats.totalWords}
                delay={0.4}
              />
            </div>
            <div className="md:col-span-4">
              <StatCard
                label="Reading Time"
                value={readingTimeFormatted}
                animate={false}
                delay={0.45}
              />
            </div>
            <div className="md:col-span-3">
              <StatCard
                label="Total Views"
                value={serverStats.totalViews}
                delay={0.5}
              />
            </div>

            {/* Row 2: Reactions + Fun Stats */}
            <div className="md:col-span-5 md:row-span-2">
              <ReactionBreakdown
                reactions={serverStats.reactionsByType}
                delay={0.55}
              />
            </div>
            <div className="md:col-span-4">
              <DaysSinceRevamp revampDate={REVAMP_DATE} delay={0.6} />
            </div>
            <div className="md:col-span-3">
              <CoffeeCupsCard cups={coffeeCups} delay={0.65} />
            </div>

            {/* Row 3: Community + Changelog */}
            <div className="md:col-span-4">
              <CommunityMessagesCard
                count={serverStats.communityWallMessages}
                delay={0.7}
              />
            </div>
            <div className="md:col-span-3">
              <ChangelogUpdatesCard
                count={buildTimeStats.changelogCount}
                delay={0.75}
              />
            </div>

            {/* Row 4: Top Articles + Categories */}
            <div className="md:col-span-6">
              <TopArticlesCard
                title="Top Viewed"
                articles={serverStats.topViewedArticles.slice(1, 5)}
                metricLabel="views"
                delay={0.8}
              />
            </div>
            <div className="md:col-span-6 md:row-span-2">
              <CategoryBarChart
                categories={buildTimeStats.categoryBreakdown}
                delay={0.85}
              />
            </div>

            <div className="md:col-span-6">
              <TopArticlesCard
                title="Most Reacted"
                articles={serverStats.topReactedArticles.slice(0, 4)}
                metricLabel="reactions"
                delay={0.9}
              />
            </div>

            {/* Row 5: GitHub Stats */}
            <div className="md:col-span-4">
              <StatCard
                label="GitHub Stars"
                value={githubStats.stars}
                delay={0.95}
                icon={
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                }
              />
            </div>
            <div className="md:col-span-4">
              <StatCard
                label="Forks"
                value={githubStats.forks}
                delay={1.0}
                icon={
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                }
              />
            </div>
            <div className="md:col-span-4">
              <StatCard
                label="Commits"
                value={githubStats.commits}
                delay={1.05}
                icon={
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </GridWrapper>
      </section>
    </div>
  );
}
