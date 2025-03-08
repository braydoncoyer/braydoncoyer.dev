"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface CategorySelectProps {
  categories: string[];
  currentCategory: string;
}

export function CategorySelect({
  categories,
  currentCategory,
}: CategorySelectProps) {
  const router = useRouter();

  function routeToCategoryPage(slug: string) {
    if (slug === "") {
      router.push("/blog");
    } else {
      router.push(`/blog?category=${encodeURIComponent(slug.toLowerCase())}`);
    }
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function isActiveTab(tabName, activeCategory) {
    return tabName === activeCategory;
  }

  return (
    <div className="border-b border-dashed border-border-primary pb-5 md:px-4 lg:pb-0">
      <h3 className="text-base font-semibold text-gray-900">Categories</h3>
      <div className="mt-3 sm:mt-4">
        <div className="grid grid-cols-1 lg:hidden">
          <select
            value={currentCategory}
            onChange={(e) => routeToCategoryPage(e.target.value)}
            aria-label="Select a Category"
            className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-2 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-slate-600"
          >
            <option value="">ALL</option>
            {categories.map((cat) => (
              <option key={cat} value={cat.toLowerCase()}>
                {cat.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
        <div className="hidden lg:block">
          <nav className="-mb-px flex space-x-4">
            <Link
              href="/blog"
              aria-current={!currentCategory ? "page" : undefined}
              className={classNames(
                !currentCategory
                  ? "border-slate-900 text-slate-900"
                  : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700",
                "whitespace-nowrap border-b-2 pb-4 text-sm uppercase",
              )}
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/blog?category=${encodeURIComponent(cat.toLowerCase())}`}
                aria-current={
                  cat.toLowerCase() === currentCategory ? "page" : undefined
                }
                className={classNames(
                  currentCategory &&
                    isActiveTab(cat.toLowerCase(), currentCategory)
                    ? "border-slate-900 text-slate-900"
                    : "border-transparent text-slate-500 hover:border-slate-300 hover:text-slate-700",
                  "whitespace-nowrap border-b-2 pb-4 text-sm uppercase",
                )}
              >
                {cat}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
