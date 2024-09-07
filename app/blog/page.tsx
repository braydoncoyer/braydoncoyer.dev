import Link from "next/link";
import BlogLayout from "app/blog/layout";

import { SectionTitlePill } from "../components/SectionTitlePill";
import { HorizontalLine } from "../components/HorizontalLine";
import {
  extractUniqueBlogCategories,
  fetchAndSortBlogPosts,
} from "../lib/utils";
import { NewsletterSignUp } from "../components/NewsletterSignUp";
import { BlogPostList } from "../components/BlogPostList";
import { BlogPageHeader } from "../components/BlogPageHeader";

export default async function BlogPage() {
  const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  const featuredArticles = allPublishedBlogPosts.slice(0, 3);
  const otherArticles = allPublishedBlogPosts.slice(3);
  const categories = extractUniqueBlogCategories(allPublishedBlogPosts);

  return (
    <BlogLayout>
      <BlogPageHeader
        title="Insightful and helpful content curated for you"
        sectionTitle="Featured"
      />
      <div className="space-y-[80px] mt-[100px] w-full">
        <ul className="grid grid-cols-3 gap-2">
          <HorizontalLine />
          {featuredArticles.length > 0 ? (
            <>
              {featuredArticles.slice(0, 3).map((post) => {
                return (
                  <li
                    key={post.slug}
                    className="flex flex-col h-full border border-border-primary rounded-3xl p-2 bg-gradient-to-t from-white to-transparent"
                  >
                    <Link
                      key={post.slug}
                      className="flex flex-col rounded-2xl h-full"
                      href={`/blog/${post.slug}`}
                    >
                      <img
                        src={
                          `/blog/${post.imageName}` ||
                          "https://image.isu.pub/190918160849-8822f46c79620853d26cb2aad7175839/jpg/page_1_thumb_large.jpg"
                        }
                        alt=""
                        className="rounded-2xl h-[225px] object-cover"
                      />
                      <div className="my-4 flex flex-col w-full space-y-4 px-4 flex-grow">
                        <h2 className="tracking-tight text-slate-900 text-lg font-bold leading-7">
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
        </ul>
        {/* <HorizontalLine /> */}

        {/* Categories */}
        <div>
          <ul className="flex gap-3 justify-center">
            {Array.from(categories).map((category) => (
              <li key={category}>
                <Link
                  href={`/blog/category/${encodeURIComponent(category)}`}
                  className="text-blue-600 hover:underline"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Articles */}
        <SectionTitlePill title="All articles" />
        <BlogPostList posts={otherArticles} />
      </div>
      <NewsletterSignUp
        title="Stay updated on future articles"
        description="Sign up to receive notifications about new blog posts, insights, and exclusive content directly in your inbox."
        buttonText="Get Notified"
      />
    </BlogLayout>
  );
}
