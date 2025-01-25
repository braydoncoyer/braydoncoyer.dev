import {
  extractUniqueBlogCategories,
  fetchAndSortBlogPosts,
} from "app/lib/utils";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { BlogPostList } from "@/app/components/BlogPostList";
import { BlogPageHeader } from "@/app/components/BlogPageHeader";
import { CategorySelect } from "@/app/components/CategorySelect";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const allPublishedBlogPosts = fetchAndSortBlogPosts();
  const categories = Array.from(
    extractUniqueBlogCategories(allPublishedBlogPosts)
  );

  const category = (await params).category
    ? (await params).category.toLowerCase()
    : "";

  const categoryPosts = allPublishedBlogPosts.filter((post) => {
    return (
      Array.isArray(post.categories) &&
      post.categories.some(
        (cat) => typeof cat === "string" && cat.toLowerCase() === category
      )
    );
  });

  return (
    <div className="space-y-[80px] mt-[100px] w-full">
      <title>{category} Articles</title>
      <BlogPageHeader
        title={`Articles about ${category || "Unknown Category"}`}
      />

      <CategorySelect categories={categories} currentCategory={category} />

      <BlogPostList posts={categoryPosts} />
      <NewsletterSignUp
        title={`Stay updated on ${category} articles`}
        description={`Sign up to receive notifications about new blog posts, insights, and exclusive content directly in your inbox.`}
        buttonText="Get Notified"
      />
    </div>
  );
}
