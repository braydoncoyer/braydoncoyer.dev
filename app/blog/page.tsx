import Link from "next/link";
import { Suspense } from "react";
// import ViewCounter from "./view-counter";
// import { getViewsCount } from "app/db/queries";
import { getBlogPosts } from "app/db/blog";
import { PageTitle } from "app/components/PageTitle";

import { posts } from "#site/content";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function BlogPage() {
  const allBlogPosts = await posts;

  return (
    <div className="space-y-[80px] mt-[100px] w-full">
      <PageTitle title="Insightful and helpful content curated for you." />
      <ul className="grid grid-cols-3 gap-6">
        {allBlogPosts.length > 0 ? (
          <>
            {allBlogPosts.map((post, index) => {
              return (
                <li key={post.slug} className="flex flex-col h-full">
                  <Link
                    key={post.slug}
                    className="flex flex-col mb-4 space-y-1 border border-border-primary rounded-2xl h-full"
                    href={`/blog/${post.slug}`}
                  >
                    <img
                      src={
                        post.coverImage ??
                        "https://image.isu.pub/190918160849-8822f46c79620853d26cb2aad7175839/jpg/page_1_thumb_large.jpg"
                      }
                      alt=""
                      className="rounded-t-2xl h-full w-full"
                    />
                    <div className="flex flex-col w-full space-y-4 p-6 flex-grow">
                      <h2 className="tracking-tight text-slate-900 text-2xl font-bold leading-8 text-balance">
                        {post.title}
                      </h2>
                      <p className="leading-6 text-text-secondary flex-grow">
                        {post.summary}
                      </p>
                      {/* Ensure other elements here are properly aligned */}
                    </div>
                  </Link>
                </li>
              );
            })}
          </>
        ) : (
          <p>Nothing to see here yet...</p>
        )}
        {/* {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post, index) => (
            <Link
              key={post.slug}
              className="flex flex-col mb-4 space-y-1 border border-border-primary rounded-2xl"
              href={`/blog/${post.slug}`}
            >
              <img
                src={
                  post.metadata.image ??
                  "https://image.isu.pub/190918160849-8822f46c79620853d26cb2aad7175839/jpg/page_1_thumb_large.jpg"
                }
                alt=""
                className="rounded-t-2xl"
              />
              <div className="flex flex-col w-full space-y-4 p-6">
                <h2 className="tracking-tight text-slate-900 text-2xl font-bold leading-8 text-balance">
                  {post.metadata.title}
                </h2>
                <p className="leading-6 text-text-secondary">
                  {post.metadata.summary}
                </p>

                {index === 0 ? (
                  <div className="px-3 py-2 text-xs text-white leading-3 bg-[#6C47FF]/25 rounded-full">
                    <span>Latest article</span>
                  </div>
                ) : null}
              </div>
            </Link>
          ))} */}
      </ul>
    </div>
  );
}

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();

//   return <ViewCounter allViews={views} slug={slug} />;
// }
