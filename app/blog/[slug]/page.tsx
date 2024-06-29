import type { Metadata } from "next";
import { Suspense, cache } from "react";
import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
// import { getViewsCount } from "app/db/queries";
import { getBlogPosts } from "app/db/blog";
// import ViewCounter from "../view-counter";
// import { increment } from "app/db/actions";
import { unstable_noStore as noStore } from "next/cache";
import { SectionTitlePill } from "app/components/SectionTitlePill";
import { HorizontalLine } from "app/components/HorizontalLine";
import { NewsletterSignUp } from "app/components/NewsletterSignUp";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://leerob.io${image}`
    : `https://leerob.io/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://leerob.io/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  console.log(date);
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

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  console.log(post);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://leerob.io${post.metadata.image}`
              : `https://leerob.io/og?title=${post.metadata.title}`,
            url: `https://leerob.io/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Lee Robinson",
            },
          }),
        }}
      />

      <div className="mb-7 pt-[90px]">
        <SectionTitlePill title="Category" />
      </div>
      <div className="text-center mb-12 space-y-4">
        <h1 className="font-semibold text-3xl tracking-tighter text-balance leading-9 text-text-primary">
          {post.metadata.title}
        </h1>
        <p className="text-base text-text-secondary">
          {formatDate(post.metadata.publishedAt)}
        </p>

        {/* View count goes here */}
        {/* <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
          <Suspense fallback={<p className="h-5" />}></Suspense>
          <Suspense fallback={<p className="h-5" />}>
            <Views slug={post.slug} />
          </Suspense>
        </div> */}
      </div>
      {/* Image */}
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
      <article className=" w-full mb-24">
        <CustomMDX source={post.content} />
      </article>
      <NewsletterSignUp />
    </section>
  );
}

// let incrementViews = cache(increment);

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();
//   incrementViews(slug);
//   return <ViewCounter allViews={views} slug={slug} />;
// }
