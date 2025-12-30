import { Metadata } from "next";
import { getBuildTimeStats } from "@/app/lib/stats/build-time-stats";
import { getServerStats } from "@/app/lib/stats/server-stats";
import { getGitHubStats } from "@/app/lib/stats/github-stats";
import { getLighthouseStats } from "@/app/lib/stats/lighthouse-stats";
import { StatsPageHeader } from "@/app/components/stats/StatsPageHeader";
import { StatsSectionHeader } from "@/app/components/stats/StatsSectionHeader";
import { StatCard } from "@/app/components/stats/StatCard";
import { TopArticlesCard } from "@/app/components/stats/TopArticlesCard";
import { ReactionBreakdown } from "@/app/components/stats/ReactionBreakdown";
import { CategoryBarChart } from "@/app/components/stats/CategoryBarChart";
import { DaysSinceRevamp } from "@/app/components/stats/DaysSinceRevamp";
import { CoffeeCupsCard } from "@/app/components/stats/CoffeeCupsCard";
import { MostViewedArticleCard } from "@/app/components/stats/MostViewedArticleCard";
import { CommunityMessagesCard } from "@/app/components/stats/CommunityMessagesCard";
import { ChangelogUpdatesCard } from "@/app/components/stats/ChangelogUpdatesCard";
import { SiteViewsCard } from "@/app/components/stats/SiteViewsCard";
import { GitHubStatsCard } from "@/app/components/stats/GitHubStatsCard";
import { ContributionGraphCard } from "@/app/components/stats/ContributionGraphCard";
import { LighthouseScoreCard } from "@/app/components/stats/LighthouseScoreCard";
import { GridWrapper } from "@/app/components/GridWrapper";
import { StatsPageWrapper } from "@/app/components/stats/StatsPageWrapper";

export const metadata: Metadata = {
  title: "Stats | Braydon Coyer",
  description:
    "Numbers, metrics, and fun facts about braydoncoyer.dev - total articles, views, reactions, and more.",
};

// Revamp date: March 31, 2025
const REVAMP_DATE = new Date("2025-03-31");

export default async function StatsPage() {
  // Parallel data fetching
  const [buildTimeStats, serverStats, githubStats, lighthouseStats] =
    await Promise.all([
      Promise.resolve(getBuildTimeStats()),
      getServerStats(),
      getGitHubStats(),
      getLighthouseStats(),
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
    <StatsPageWrapper>
      <div className="mt-14 space-y-12 pb-16 md:mt-16 md:space-y-16">
        <StatsPageHeader />

      {/* Blog Stats Section */}
      <section>
        <GridWrapper>
          <StatsSectionHeader
            title="Blog Stats"
            description="Content creation metrics and popular articles"
            delay={0.2}
          />
          <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
            {/* Row 1: Key metrics + Most Viewed Article */}
            <div className="md:col-span-2">
              <StatCard
                label="Total Articles"
                value={buildTimeStats.totalArticles}
                delay={0.25}
              />
            </div>
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
            <div className="md:col-span-5">
              <CoffeeCupsCard cups={coffeeCups} delay={0.35} />
            </div>

            {/* Row 2: Writing stats */}
            <div className="md:col-span-2">
              <StatCard
                label="Words Written"
                value={buildTimeStats.totalWords}
                delay={0.4}
              />
            </div>
            <div className="md:col-span-5">
              <StatCard
                label="Reading Time"
                value={readingTimeFormatted}
                animate={false}
                delay={0.45}
              />
            </div>

            {/* Row 3-4: Article lists + Category chart */}
            <div className="md:col-span-5">
              <TopArticlesCard
                title="Top Viewed Articles"
                articles={serverStats.topViewedArticles.slice(1, 5)}
                metricLabel="views"
                delay={0.5}
              />
            </div>
            <div className="md:col-span-7 md:row-span-2">
              <CategoryBarChart
                categories={buildTimeStats.categoryBreakdown}
                delay={0.55}
              />
            </div>
            <div className="md:col-span-5">
              <TopArticlesCard
                title="Most Reacted Articles"
                articles={serverStats.topReactedArticles.slice(0, 4)}
                metricLabel="reactions"
                delay={0.6}
              />
            </div>
          </div>
        </GridWrapper>
      </section>

      {/* Engagement Section */}
      <section>
        <GridWrapper>
          <StatsSectionHeader
            title="Engagement"
            description="Site activity and community interactions"
            delay={0.65}
          />
          <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
            {/* Row 1: Views + Reactions + Community */}
            <div className="md:col-span-3">
              <SiteViewsCard value={serverStats.totalViews} delay={0.7} />
            </div>
            <div className="md:col-span-5 md:row-span-2">
              <ReactionBreakdown
                reactions={serverStats.reactionsByType}
                delay={0.75}
              />
            </div>
            <div className="md:col-span-4">
              <CommunityMessagesCard
                count={serverStats.communityWallMessages}
                delay={0.8}
              />
            </div>

            {/* Row 2: Site meta */}
            <div className="md:col-span-3">
              <ChangelogUpdatesCard
                count={buildTimeStats.changelogCount}
                delay={0.85}
              />
            </div>
            <div className="md:col-span-4">
              <DaysSinceRevamp revampDate={REVAMP_DATE} delay={0.9} />
            </div>
          </div>
        </GridWrapper>
      </section>

      {/* GitHub Section */}
      <section>
        <GridWrapper>
          <StatsSectionHeader
            title="GitHub"
            description="Open source contributions and repository stats"
            delay={0.95}
          />
          <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
            {githubStats.contributions && (
              <div className="h-full md:col-span-9">
                <ContributionGraphCard
                  contributions={githubStats.contributions}
                  delay={1.0}
                />
              </div>
            )}
            <div className="flex h-full flex-col gap-2 md:col-span-3">
              <div className="flex-1">
                <GitHubStatsCard
                  type="stars"
                  label="GitHub Stars"
                  value={githubStats.stars}
                  delay={1.05}
                />
              </div>
              <div className="flex-1">
                <GitHubStatsCard
                  type="forks"
                  label="Forks"
                  value={githubStats.forks}
                  delay={1.1}
                />
              </div>
              <div className="flex-1">
                <GitHubStatsCard
                  type="commits"
                  label="Commits"
                  value={githubStats.commits}
                  delay={1.15}
                />
              </div>
            </div>
          </div>
        </GridWrapper>
      </section>

      {/* Performance Section */}
      {(lighthouseStats.mobile || lighthouseStats.desktop) && (
        <section>
          <GridWrapper>
            <StatsSectionHeader
              title="Performance"
              description="Lighthouse scores for site speed and accessibility"
              delay={1.2}
            />
            <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
              {lighthouseStats.mobile && (
                <div className="md:col-span-6">
                  <LighthouseScoreCard
                    scores={lighthouseStats.mobile}
                    strategy="mobile"
                    delay={1.25}
                  />
                </div>
              )}
              {lighthouseStats.desktop && (
                <div className="md:col-span-6">
                  <LighthouseScoreCard
                    scores={lighthouseStats.desktop}
                    strategy="desktop"
                    delay={1.3}
                  />
                </div>
              )}
            </div>
          </GridWrapper>
        </section>
      )}
      </div>
    </StatsPageWrapper>
  );
}
