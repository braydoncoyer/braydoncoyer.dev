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
import { FeaturedBlogCard } from "../components/FeaturedBlogCard";

export default async function BlogPage() {
  const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  const featuredArticles = allPublishedBlogPosts.slice(0, 3);
  const otherArticles = allPublishedBlogPosts.slice(3);
  const categories = extractUniqueBlogCategories(allPublishedBlogPosts);

  return (
    <BlogLayout>
      {/* Keep space and margin here -- needed to align properly with the rest of the site.
      Decision was made to remove this from the layout component to allow for wide article image on the blog post page. */}
      <div className="space-y-[80px] mt-[100px]">
        <BlogPageHeader
          title="Insightful and helpful content curated for you."
          sectionTitle="Featured"
        />
        <div className="space-y-[80px] mt-[100px] w-full">
          <ul className="grid grid-cols-3 gap-2">
            {featuredArticles.length > 0 ? (
              <>
                {featuredArticles.slice(0, 3).map((post) => (
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
      </div>
    </BlogLayout>
  );
}
