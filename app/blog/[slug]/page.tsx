import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@/app/components/mdx";
// import { getViewsCount } from "app/db/queries";
import { getBlogPosts } from "app/db/blog";
// import ViewCounter from "../view-counter";
// import { increment } from "app/db/actions";
import { unstable_noStore as noStore } from "next/cache";
import { SectionTitlePill } from "app/components/SectionTitlePill";
import { HorizontalLine } from "app/components/HorizontalLine";
import { NewsletterSignUp } from "app/components/NewsletterSignUp";
import { posts } from "#site/content";
import { getRelatedBlogPosts } from "@/app/lib/utils";
import { FeaturedBlogCard } from "@/app/components/FeaturedBlogCard";
import { BgGradient } from "@/app/components/BgGradient";
import readingDuration from "reading-duration";

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
      <title>{post.title}</title>
      {/* Article Banner Image */}
      <div className="relative">
        {/* Lines */}
        <span className="absolute w-full h-px bg-zinc-500/75 mix-blend-screen top-6 md:top-12 z-10"></span>
        <span className="absolute w-full h-px bg-zinc-500/75 mix-blend-screen bottom-6 md:bottom-12 z-10"></span>
        <span className="absolute w-px h-full bg-zinc-500/75 mix-blend-screen left-6 md:left-12 z-10"></span>
        <span className="absolute w-px h-full bg-zinc-500/75 mix-blend-screen right-6 md:right-12 z-10"></span>

        {/* top left cross */}
        <span className="hidden md:block w-2 h-px bg-white absolute left-[44.5px] top-12 z-20"></span>
        <span className="hidden md:block w-px h-2 bg-white absolute left-[48px] top-[44.5px] z-20"></span>

        {/* top right cross */}
        <span className="hidden md:block w-2 h-px bg-white absolute right-[44.5px] top-12 z-20"></span>
        <span className="hidden md:block w-px h-2 bg-white absolute right-[48px] top-[44.5px] z-20"></span>

        {/* bottom left cross */}
        <span className="hidden md:block w-2 h-px bg-white absolute left-[44.5px] bottom-12 z-20"></span>
        <span className="hidden md:block w-px h-2 bg-white absolute left-[48px] bottom-[44.5px] z-20"></span>

        {/* bottom right cross */}
        <span className="hidden md:block w-2 h-px bg-white absolute right-[44.5px] bottom-12 z-20"></span>
        <span className="hidden md:block w-px h-2 bg-white absolute right-[48px] bottom-[44.5px] z-20"></span>

        <div
          className="w-full h-[350px] md:h-[600px] rounded-2xl md:mb-16 drama-shadow bg-cover bg-center bg-no-repeat p-8 md:p-16 flex flex-col justify-end"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(99, 102, 241, 1) 0%, rgba(99, 102, 241, 0.5) 30%, transparent 40%), url('/blog/${post.imageName}')`,
          }}
        >
          <div className="mt-auto">
            <div className="md:flex-wrap gap-2 hidden md:flex mb-4">
              {post.categories.slice(0, 3).map((category, index) => (
                <div
                  key={index}
                  className="inline-flex text-center text-xs text-white rounded-full uppercase border border-border-primary px-2 py-px"
                >
                  <span>#{category}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4 mb-4 text-balance max-w-2xl">
              <h1 className="font-medium text-4xl md:text-5xl tracking-tight leading-[45px] md:leading-[60px] text-white">
                {post.title}
              </h1>
              <p className="text-slate-100 leading-8 hidden md:block">
                {post.summary}
              </p>
            </div>

            {/* View Count */}
            <div className="flex items-center gap-4 text-slate-300 text-sm">
              <div className="flex items-center gap-1.5 text-slate-300 text-xs">
                <svg
                  className="w-5 h-5 text-slate-200"
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
              <div className="flex items-center gap-1.5 text-slate-200 text-xs">
                <svg
                  className="w-5 h-5 text-slate-300"
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
              <div className="flex items-center gap-1 text-slate-200 text-xs">
                <svg
                  className="text-slate-300 w-5 h-5"
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
                <p>5000 reads</p>
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
        <div className="space-y-4 relative">
          <span className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none">
            <BgGradient />
          </span>
          <SectionTitlePill title="Similar Posts" />
          <h2 className="mx-auto text-text-primary text-center text-balance font-medium text-3xl tracking-tighter max-w-lg leading-10">
            Here are some other articles you might find interesting.
          </h2>
        </div>

        <div className="z-10">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-2">
            <HorizontalLine />
            {similarPosts.length > 0 ? (
              <>
                {similarPosts.slice(0, 3).map((post) => (
                  <FeaturedBlogCard
                    key={post.slug}
                    slug={post.slug}
                    imageName={post.imageName}
                    title={post.title}
                    summary={post.summary}
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

// let incrementViews = cache(increment);

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();
//   incrementViews(slug);
//   return <ViewCounter allViews={views} slug={slug} />;
// }
