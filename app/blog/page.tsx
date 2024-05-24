import Link from "next/link";
import { Suspense } from "react";
// import ViewCounter from "./view-counter";
// import { getViewsCount } from "app/db/queries";
import { getBlogPosts } from "app/db/blog";
import { PageTitle } from "app/components/PageTitle";

export const metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function BlogPage() {
  let allBlogs = getBlogPosts();

  return (
    <div className="space-y-[80px] mt-[100px] w-full">
      <PageTitle title="Insightful and helpful content curated for you." />
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col mb-4 space-y-1"
            href={`/blog/${post.slug}`}
          >
            <div className="flex flex-col w-full">
              <p className="tracking-tight text-slate-900">
                {post.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();

//   return <ViewCounter allViews={views} slug={slug} />;
// }
