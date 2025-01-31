import Link from "next/link";
import { HorizontalLine } from "./HorizontalLine";

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
          {posts.map((post, index) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`}>
                <div className="block">
                  <article>
                    <div className="group grid h-full grid-cols-12 rounded-2xl">
                      <div className="col-span-2 col-start-1 space-y-2 p-4">
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
                        <p className="text-sm text-text-secondary">
                          1,352 reads
                        </p>
                      </div>
                      <div className="col-start-4 h-full border-x border-dashed border-border-primary"></div>
                      <div className="group col-span-8 col-start-5 col-end-12 flex w-full flex-grow flex-col p-4">
                        <div className="z-10">
                          <h2 className="mb-3 text-base font-medium leading-none tracking-tight text-slate-900">
                            {post.title}
                          </h2>
                          <p className="mb-3 flex-grow text-base leading-6 text-text-secondary">
                            {post.summary}
                          </p>
                          <Link
                            href={`/blog/${post.slug}`}
                            className="flex items-center text-sm font-medium text-indigo-600"
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
              </Link>
              {index < posts.length - 1 && (
                <div className="h-0 w-full border-t border-dashed border-border-primary" />
              )}
            </li>
          ))}
        </>
      ) : (
        <p>Nothing to see here yet...</p>
      )}
    </ul>
  );
}
