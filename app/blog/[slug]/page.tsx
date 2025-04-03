import { notFound } from "next/navigation";
import { MDXContent } from "@/app/components/mdx";
import { unstable_noStore as noStore } from "next/cache";
import { SectionTitlePill } from "@/app/components/SectionTitlePill";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { posts } from "#site/content";
import { getRelatedBlogPosts } from "@/app/lib/utils";
import { FeaturedBlogCard } from "@/app/components/FeaturedBlogCard";
import { BgGradient } from "@/app/components/BgGradient";
import readingDuration from "reading-duration";
import clsx from "clsx";
import { ViewCounter } from "@/app/components/ViewCounter";
import ArticleReactionWrapper from "@/app/components/ArticleReactionsWrapper";
import { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

function formatDate(date: string) {
  noStore();
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

async function getPostFromParams(params: BlogPageProps["params"]) {
  const { slug } = await params;
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  return post;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const post = await getPostFromParams(params);
  const similarPosts = getRelatedBlogPosts(post);

  const readingTime = readingDuration(post.code, {
    wordsPerMinute: 200,
    emoji: false,
  });

  return (
    <article className="space-y-12">
      {/* Article Banner Image */}
      <div className="relative">
        {/* Lines */}
        <span className="absolute top-6 z-10 h-px w-full bg-zinc-500/75 mix-blend-screen md:top-12"></span>
        <span className="absolute bottom-6 z-10 h-px w-full bg-zinc-500/75 mix-blend-screen md:bottom-12"></span>
        <span className="absolute left-6 z-10 h-full w-px bg-zinc-500/75 mix-blend-screen md:left-12"></span>
        <span className="absolute right-6 z-10 h-full w-px bg-zinc-500/75 mix-blend-screen md:right-12"></span>

        {/* top left cross */}
        <span className="absolute left-[44.5px] top-12 z-20 hidden h-px w-2 bg-white md:block"></span>
        <span className="absolute left-[48px] top-[44.5px] z-20 hidden h-2 w-px bg-white md:block"></span>

        {/* top right cross */}
        <span className="absolute right-[44.5px] top-12 z-20 hidden h-px w-2 bg-white md:block"></span>
        <span className="absolute right-[48px] top-[44.5px] z-20 hidden h-2 w-px bg-white md:block"></span>

        {/* bottom left cross */}
        <span className="absolute bottom-12 left-[44.5px] z-20 hidden h-px w-2 bg-white md:block"></span>
        <span className="absolute bottom-[44.5px] left-[48px] z-20 hidden h-2 w-px bg-white md:block"></span>

        {/* bottom right cross */}
        <span className="absolute bottom-12 right-[44.5px] z-20 hidden h-px w-2 bg-white md:block"></span>
        <span className="absolute bottom-[44.5px] right-[48px] z-20 hidden h-2 w-px bg-white md:block"></span>

        <div
          className="drama-shadow flex h-[350px] w-full flex-col justify-end rounded-2xl bg-cover bg-center bg-no-repeat p-8 md:mb-16 md:h-[600px] md:p-16"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(99, 102, 241, 1) 0%, rgba(99, 102, 241, 0.1) 30%, transparent 35%), url('/blog/${post.imageName}')`,
          }}
        >
          <div className="mt-auto">
            <div className="mb-4 hidden gap-2 md:flex md:flex-wrap">
              {post.categories.slice(0, 3).map((category, index) => (
                <div
                  key={index}
                  className="inline-flex rounded-full border border-white px-2 py-px text-center text-xs uppercase text-white"
                >
                  <span>#{category}</span>
                </div>
              ))}
            </div>
            <div className="mb-4 space-y-4 text-balance">
              <h1 className="max-w-2xl text-4xl font-medium leading-[45px] tracking-tight text-white md:text-5xl md:leading-[60px]">
                {post.title}
              </h1>
              <p className="hidden max-w-3xl leading-8 text-slate-100 md:block">
                {post.summary}
              </p>
            </div>

            {/* Article metadata */}
            <div className="flex items-center gap-4 gap-6 text-sm text-slate-200">
              <div className="flex items-center gap-1.5 text-xs">
                <svg
                  className="hidden h-5 w-5 md:block"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M8 4.75V8.25"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M16 4.75V8.25"
                  ></path>
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M7.75 10.75H16.25"
                  ></path>
                </svg>

                <p>{formatDate(post.publishedAt)}</p>
              </div>
              {/* Read Time */}
              <div className="flex items-center gap-1.5 text-xs text-slate-200">
                <svg
                  className="hidden h-5 w-5 text-slate-300 md:block"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.75 4.75H18.25M6.75 4.75H17.25V6C17.25 8.89949 14.8995 11.25 12 11.25C9.10051 11.25 6.75 8.8995 6.75 6V4.75Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M9 10H15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M5.75 19.25H18.25M6.75 19.25H17.25V17.5C17.25 14.6005 14.8995 12.25 12 12.25C9.10051 12.25 6.75 14.6005 6.75 17.5V19.25Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <p>{readingTime}</p>
              </div>
              {/* View Count */}
              <div className="flex items-center gap-1 text-xs text-slate-200">
                <svg
                  className="hidden h-5 w-5 text-slate-300 md:block"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"
                  ></path>
                  <circle
                    cx="12"
                    cy="12"
                    r="2.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  ></circle>
                </svg>
                <Suspense fallback={<span>...</span>}>
                  <ViewCounter slug={post.slug} increment={true} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="wrapper z-10">
        <MDXContent code={post.code} />
      </div>

      {/* Similar Posts */}
      <section className="space-y-16">
        <div className="mx-auto w-fit">
          <Suspense fallback={<div>Loading reactions...</div>}>
            <ArticleReactionWrapper slug={post.slug} />
          </Suspense>
        </div>
        <div className="relative space-y-4">
          <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
            <BgGradient />
          </span>
          <SectionTitlePill title="Similar Posts" />
          <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary">
            Here are some other articles you might find interesting.
          </h2>
        </div>

        <div className="z-10">
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <HorizontalLine />
            {similarPosts.length > 0 ? (
              <>
                {similarPosts.slice(0, 3).map((post, index) => (
                  <FeaturedBlogCard
                    key={post.slug}
                    slug={post.slug}
                    imageName={post.imageName}
                    title={post.title}
                    summary={post.summary}
                    className={clsx(index === 2 && "hidden sm:hidden lg:block")}
                  />
                ))}
              </>
            ) : (
              <p>Nothing to see here yet...</p>
            )}
          </ul>
          <HorizontalLine />
        </div>
      </section>
      <NewsletterSignUp />
    </article>
  );
}

export async function generateMetadata(
  { params }: BlogPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;

  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return {
      title: "Blog Post Not Found",
    };
  }

  const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      authors: ["Braydon Coyer"],
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.summary)}&image=${encodeURIComponent(post.imageName)}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      images: [
        `/api/og?title=${encodeURIComponent(post.title)}&summary=${encodeURIComponent(post.summary)}&image=${encodeURIComponent(post.imageName)}`,
      ],
    },
  };
}
