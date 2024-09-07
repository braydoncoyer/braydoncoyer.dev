import { PageTitle } from "app/components/PageTitle";
import { SectionTitlePill } from "app/components/SectionTitlePill";
import {
  extractUniqueBlogCategories,
  fetchAndSortBlogPosts,
} from "app/lib/utils";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { BlogPostList } from "@/app/components/BlogPostList";
import Link from "next/link";
import { BlogPageHeader } from "@/app/components/BlogPageHeader";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const allPublishedBlogPosts = fetchAndSortBlogPosts();
  const categories = extractUniqueBlogCategories(allPublishedBlogPosts);

  const category = params.category ? params.category.toLowerCase() : "";

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
      <BlogPageHeader
        title={`Articles about ${category || "Unknown Category"}`}
      />

      {/* Categories */}
      <div>
        <ul className="flex gap-3 justify-center">
          {Array.from(categories).map((cat) => (
            <li key={cat}>
              <Link
                href={`/blog/category/${encodeURIComponent(cat)}`}
                className={`text-blue-600 hover:underline ${
                  cat.toLowerCase() === category ? "font-bold" : ""
                }`}
              >
                {cat}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <BlogPostList posts={categoryPosts} />
      <NewsletterSignUp
        title={`Stay updated on ${category} articles`}
        description={`Sign up to receive notifications about new blog posts, insights, and exclusive content directly in your inbox.`}
        buttonText="Get Notified"
      />
    </div>
  );
}
