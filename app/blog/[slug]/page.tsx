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

interface BlogPageProps {
  params: {
    slug: string;
  };
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
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  BlogPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  let post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <div className="max-w-4xl mx-auto">
        <div className="mb-7 pt-[90px]">
          <SectionTitlePill title={post.categories[0]} />
        </div>
        <div className="text-center mb-12 space-y-4">
          <h1 className="font-semibold text-4xl tracking-tighter text-balance leading-9 text-text-primary">
            {post.title}
          </h1>
          <p className="text-base text-text-secondary">
            {formatDate(post.publishedAt)}
          </p>

          {/* View Count */}
          <div>
            <p className="text-base text-text-secondary">5000 reads</p>
          </div>
        </div>
        {/* Article Banner Image */}
        <div className="relative">
          <span className="absolute top-0 inset-x-0">
            <HorizontalLine />
          </span>
          <img
            src="https://m.media-amazon.com/images/M/MV5BNDUwNjBkMmUtZjM2My00NmM4LTlmOWQtNWE5YTdmN2Y2MTgxXkEyXkFqcGdeQXRyYW5zY29kZS13b3JrZmxvdw@@._V1_.jpg"
            className="w-full h-96 object-cover rounded-3xl mb-16"
          />
          <span className="absolute bottom-0 inset-x-0">
            <HorizontalLine />
          </span>
        </div>

        <MDXContent code={post.code} />
      </div>
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
