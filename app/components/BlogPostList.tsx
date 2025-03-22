import Link from "next/link";
import { ViewCounter } from "./ViewCounter";
import { Suspense } from "react";

interface BlogPost {
  slug: string;
  publishedAt: string;
  title: string;
  summary: string;
}

interface BlogPostListProps {
  posts: BlogPost[];
}

export function BlogPostList({ posts }: BlogPostListProps) {
  return (
    <ul className="flex flex-col">
      {posts.length > 0 ? (
        <>
          {posts.map((post) => (
            <li key={post.slug}>
              <div className="block">
                <article>
                  <div className="group grid h-full grid-cols-1 md:grid-cols-12">
                    <div className="hidden space-y-2 p-4 md:col-span-3 md:col-start-1 md:block lg:col-span-2">
                      <div className="font-mono text-sm leading-none text-text-secondary">
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            },
                          )}
                        </time>
                      </div>
                      <span className="text-text-secondary">
                        <Suspense fallback={<span>...</span>}>
                          <ViewCounter
                            slug={post.slug}
                            increment={false}
                            className="font-mono text-xs text-text-secondary"
                          />
                        </Suspense>
                      </span>
                    </div>
                    <div className="col-start-4 hidden h-full border-x border-border-primary md:block md:border-dashed"></div>
                    <div className="group col-span-8 flex w-full flex-grow flex-col py-4 md:col-start-5 md:col-end-12 md:p-4">
                      <div className="z-10 text-balance">
                        <h2 className="mb-3 text-base font-medium leading-6 tracking-tight text-slate-900 md:leading-none">
                          {post.title}
                        </h2>
                        <p className="mb-3 flex-grow text-base leading-6 text-text-secondary">
                          {post.summary}
                        </p>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="flex items-center text-sm font-medium text-indigo-600"
                          prefetch={true}
                        >
                          <span className="text-sm leading-6">Read More</span>
                          <svg
                            className="relative ml-2.5 mt-px overflow-visible"
                            width="3"
                            height="6"
                            viewBox="0 0 3 6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M0 0L3 3L0 6"></path>
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="-mx-4 h-0 w-svw border-t border-dashed border-border-primary md:m-0 md:w-full" />
            </li>
          ))}
        </>
      ) : (
        <p>Nothing to see here yet...</p>
      )}
    </ul>
  );
}
