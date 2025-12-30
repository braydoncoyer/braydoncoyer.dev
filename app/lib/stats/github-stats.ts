"use server";

import { unstable_cache } from "next/cache";
import type { GitHubStats, ContributionData } from "./types";

const GITHUB_REPO = "braydoncoyer/braydoncoyer.dev";
const GITHUB_USERNAME = "braydoncoyer";

async function fetchContributions(token: string): Promise<ContributionData | null> {
  const query = `
    query {
      user(login: "${GITHUB_USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                date
                contributionCount
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      console.error("Failed to fetch contributions:", response.status);
      return null;
    }

    const data = await response.json();
    const calendar = data?.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      return null;
    }

    return {
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
    };
  } catch (error) {
    console.error("Error fetching contributions:", error);
    return null;
  }
}

export const getGitHubStats = unstable_cache(
  async (): Promise<GitHubStats> => {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
      console.warn("GITHUB_TOKEN not set, returning default values");
      return {
        stars: 0,
        forks: 0,
        commits: 0,
        contributions: null,
      };
    }

    const headers: HeadersInit = {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github.v3+json",
    };

    try {
      // Fetch repository info (stars, forks)
      const repoResponse = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}`,
        { headers }
      );

      let stars = 0;
      let forks = 0;

      if (repoResponse.ok) {
        const repoData = await repoResponse.json();
        stars = repoData.stargazers_count || 0;
        forks = repoData.forks_count || 0;
      }

      // Fetch commit count via pagination headers
      const commitsResponse = await fetch(
        `https://api.github.com/repos/${GITHUB_REPO}/commits?per_page=1`,
        { headers }
      );

      let commits = 0;

      if (commitsResponse.ok) {
        // Parse Link header for total count
        const linkHeader = commitsResponse.headers.get("Link");
        if (linkHeader) {
          const match = linkHeader.match(/page=(\d+)>; rel="last"/);
          if (match) {
            commits = parseInt(match[1], 10);
          }
        } else {
          // If no pagination, there's only one page
          const data = await commitsResponse.json();
          commits = Array.isArray(data) ? data.length : 0;
        }
      }

      // Fetch contribution graph data
      const contributions = await fetchContributions(token);

      return {
        stars,
        forks,
        commits,
        contributions,
      };
    } catch (error) {
      console.error("Error fetching GitHub stats:", error);
      return {
        stars: 0,
        forks: 0,
        commits: 0,
        contributions: null,
      };
    }
  },
  ["github-stats"],
  { revalidate: 86400 } // Revalidate every 24 hours
);
