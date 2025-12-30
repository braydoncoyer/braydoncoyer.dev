"use server";

import { unstable_cache } from "next/cache";
import type { LighthouseScores, LighthouseStats } from "./types";

const SITE_URL = "https://braydoncoyer.dev";

interface PageSpeedResponse {
  lighthouseResult?: {
    categories?: {
      performance?: { score: number };
      accessibility?: { score: number };
      "best-practices"?: { score: number };
      seo?: { score: number };
    };
    fetchTime?: string;
  };
}

async function fetchLighthouseScores(
  strategy: "mobile" | "desktop"
): Promise<LighthouseScores | null> {
  const apiUrl = new URL(
    "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"
  );
  apiUrl.searchParams.set("url", SITE_URL);
  apiUrl.searchParams.set("strategy", strategy);

  // API expects multiple category params, not comma-separated
  const categories = ["performance", "accessibility", "best-practices", "seo"];
  categories.forEach((cat) => apiUrl.searchParams.append("category", cat));

  // Add API key if available (increases quota from 25/day to 25,000/day)
  const apiKey = process.env.PAGESPEED_API_KEY;
  if (apiKey) {
    apiUrl.searchParams.set("key", apiKey);
  }

  try {
    const response = await fetch(apiUrl.toString());

    if (!response.ok) {
      // Don't log quota errors as errors - they're expected without API key
      const errorText = await response.text();
      if (response.status === 429) {
        console.warn(
          `PageSpeed API quota exceeded (${strategy}). Set PAGESPEED_API_KEY for higher limits.`
        );
      } else {
        console.error(`PageSpeed API error (${strategy}):`, response.status, errorText);
      }
      return null;
    }

    const data: PageSpeedResponse = await response.json();
    const categories = data.lighthouseResult?.categories;

    if (!categories) {
      console.error(`No categories in PageSpeed response (${strategy})`);
      return null;
    }

    return {
      performance: Math.round((categories.performance?.score ?? 0) * 100),
      accessibility: Math.round((categories.accessibility?.score ?? 0) * 100),
      bestPractices: Math.round(
        (categories["best-practices"]?.score ?? 0) * 100
      ),
      seo: Math.round((categories.seo?.score ?? 0) * 100),
      fetchedAt: data.lighthouseResult?.fetchTime ?? new Date().toISOString(),
    };
  } catch (error) {
    console.error(`Error fetching Lighthouse scores (${strategy}):`, error);
    return null;
  }
}

export const getLighthouseStats = unstable_cache(
  async (): Promise<LighthouseStats> => {
    // Fetch both mobile and desktop scores in parallel
    const [mobile, desktop] = await Promise.all([
      fetchLighthouseScores("mobile"),
      fetchLighthouseScores("desktop"),
    ]);

    return {
      mobile,
      desktop,
    };
  },
  ["lighthouse-stats"],
  { revalidate: 2592000 } // Revalidate every 30 days
);
