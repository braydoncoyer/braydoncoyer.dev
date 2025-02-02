import {
  extractUniqueBlogCategories,
  fetchAndSortBlogPosts,
} from "app/lib/utils";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { BlogPostList } from "@/app/components/BlogPostList";
import { CategorySelect } from "@/app/components/CategorySelect";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const allPublishedBlogPosts = fetchAndSortBlogPosts();
  const categories = Array.from(
    extractUniqueBlogCategories(allPublishedBlogPosts),
  );

  const category = (await params).category
    ? (await params).category.toLowerCase()
    : "";

  const categoryPosts = allPublishedBlogPosts.filter((post) => {
    return (
      Array.isArray(post.categories) &&
      post.categories.some(
        (cat) => typeof cat === "string" && cat.toLowerCase() === category,
      )
    );
  });

  return (
    <div className="mt-[100px] w-full space-y-[80px]">
      <title>{category} Articles</title>
      <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
        {`Articles about ${category || "Unknown Category"}`}
      </h1>

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
