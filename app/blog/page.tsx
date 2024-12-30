import {
  extractUniqueBlogCategories,
  fetchAndSortBlogPosts,
} from "app/lib/utils";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { BlogPostList } from "@/app/components/BlogPostList";
import { BlogPageHeader } from "@/app/components/BlogPageHeader";
import { CategorySelect } from "@/app/components/CategorySelect";
import { FeaturedBlogCard } from "../components/FeaturedBlogCard";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const allPublishedBlogPosts = fetchAndSortBlogPosts();
  const categories = Array.from(
    extractUniqueBlogCategories(allPublishedBlogPosts)
  );
  const category = (await searchParams).category?.toLowerCase() || "";

  const displayedPosts = category
    ? allPublishedBlogPosts.filter((post) =>
        post.categories?.map((cat) => cat.toLowerCase()).includes(category)
      )
    : allPublishedBlogPosts;

  const featuredPosts = !category && (
    <ul className="grid grid-cols-3 gap-2">
      {allPublishedBlogPosts.slice(0, 3).map((post) => (
        <FeaturedBlogCard
          key={post.slug}
          slug={post.slug}
          imageName={post.imageName}
          title={post.title}
          summary={post.summary}
        />
      ))}
    </ul>
  );

  return (
    <div className="space-y-[80px] mt-[100px] w-full">
      <BlogPageHeader
        title={
          category
            ? `Articles about ${category}`
            : "Insightful && helpful content curated for you."
        }
      />

      {featuredPosts}
      <div>
        <CategorySelect categories={categories} currentCategory={category} />
        <BlogPostList posts={displayedPosts} />
      </div>

      <NewsletterSignUp
        title={
          category ? `Stay updated on ${category} articles` : "Stay updated"
        }
        description="Sign up to receive notifications about new blog posts, insights, and exclusive content directly in your inbox."
        buttonText="Get Notified"
      />
    </div>
  );
}
