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
    <ul className="flex flex-col gap-6">
      {posts.length > 0 ? (
        <>
          {posts.map((post) => (
            <li key={post.slug}>
              <HorizontalLine />
              <div className="grid grid-cols-12 rounded-2xl h-full py-8">
                <div className="space-y-2 col-span-2 col-start-1">
                  <div className="font-medium leading-none text-sm">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                  <p className="text-sm text-text-secondary">1,352 reads</p>
                </div>
                <div className="flex flex-col w-full space-y-3 flex-grow col-span-8 col-start-5 col-end-12">
                  <h2 className="tracking-tight text-slate-900 text-lg font-bold leading-none">
                    {post.title}
                  </h2>
                  <p className="leading-6 text-text-secondary flex-grow text-base">
                    {post.summary}
                  </p>
                  <Link
                    className="text-sm leading-6 text-indigo-700/50 hover:text-indigo-500"
                    href={`/blog/${post.slug}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
              <HorizontalLine />
            </li>
          ))}
        </>
      ) : (
        <p>Nothing to see here yet...</p>
      )}
    </ul>
  );
}
