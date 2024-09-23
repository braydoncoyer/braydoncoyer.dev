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
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <article>
                <div className="grid grid-cols-12 rounded-2xl h-full py-4 group">
                  <div className="space-y-2 col-span-2 col-start-1 p-4">
                    <div className="font-medium leading-none text-sm">
                      <time dateTime={post.publishedAt}>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          }
                        )}
                      </time>
                    </div>
                    <p className="text-sm text-text-secondary">1,352 reads</p>
                  </div>
                  <div className="flex flex-col w-full flex-grow col-span-8 col-start-5 col-end-12 p-4 group">
                    <div className="z-10">
                      <h2 className="tracking-tight text-slate-900 text-lg font-medium leading-none mb-3">
                        {post.title}
                      </h2>
                      <p className="leading-6 text-text-secondary flex-grow text-base mb-3">
                        {post.summary}
                      </p>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="flex items-center text-sm text-indigo-500 font-medium"
                      >
                        <span className="text-sm leading-6">Read More</span>
                        <svg
                          className="relative mt-px overflow-visible ml-2.5 "
                          width="3"
                          height="6"
                          viewBox="0 0 3 6"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M0 0L3 3L0 6"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="h-6 w-full border-y border-border-primary [background-image:linear-gradient(45deg,theme(colors.border-primary)_12.50%,transparent_12.50%,transparent_50%,theme(colors.border-primary)_50%,theme(colors.border-primary)_62.50%,transparent_62.50%,transparent_100%)] [background-size:5px_5px]"></div>
              </article>
            </Link>
          ))}
        </>
      ) : (
        <p>Nothing to see here yet...</p>
      )}
    </ul>
  );
}
