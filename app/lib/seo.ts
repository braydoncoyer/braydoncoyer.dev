import type { Metadata } from "next";
import { siteMetadata } from "@/app/data/siteMetadata";

export const DEFAULT_OG_IMAGE = {
  url: "/braydon_coyer_blogfolio_og.jpg",
  width: 1200,
  height: 630,
  alt: siteMetadata.title,
};

// Next.js replaces `alternates` wholesale when a page sets it, so every page
// has to repeat the feed link alongside its canonical.
export const feedAlternates = {
  "application/rss+xml": [
    { url: "/rss.xml", title: `${siteMetadata.title}'s blog` },
  ],
};

export function absoluteUrl(path: string) {
  return new URL(path, siteMetadata.siteUrl).toString();
}

export function postOgImageUrl(post: {
  title: string;
  summary: string;
  imageName: string;
}) {
  return `/api/og?title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.summary)}&image=${encodeURIComponent(post.imageName)}`;
}

// Metadata for a top-level page: title, description, canonical URL and social
// cards. Leave `title` out to use the site's default title (the home page).
export function pageMetadata({
  title,
  description,
  path,
}: {
  title?: string;
  description: string;
  path: string;
}): Metadata {
  const socialTitle = title
    ? `${title} | ${siteMetadata.title}`
    : siteMetadata.title;

  return {
    ...(title ? { title } : {}),
    description,
    alternates: { canonical: path, types: feedAlternates },
    openGraph: {
      type: "website",
      url: path,
      siteName: siteMetadata.title,
      locale: "en_US",
      title: socialTitle,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      site: siteMetadata.twitterHandle,
      creator: siteMetadata.twitterHandle,
      title: socialTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
