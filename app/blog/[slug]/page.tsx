import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXContent } from "@/app/components/mdx";
// import { getViewsCount } from "app/db/queries";
import { getBlogPosts } from "app/db/blog";
// import ViewCounter from "../view-counter";
// import { increment } from "app/db/actions";
import { unstable_noStore as noStore } from "next/cache";
import { SectionTitlePill } from "app/components/SectionTitlePill";
import { HorizontalLine } from "app/components/HorizontalLine";
import { NewsletterSignUp } from "app/components/NewsletterSignUp";
import { posts } from "#site/content";

interface BlogPageProps {
  params: {
    slug: string;
  };
}

function formatDate(date: string) {
  noStore();
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

async function getPostFromParams(params: BlogPageProps["params"]) {
  const { slug } = params;
  const post = posts.find((post) => post.slug === slug);

  return post;
}

export async function generateStaticParams(): Promise<
  BlogPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  let post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article>
      {/* Article Banner Image */}
      <div className="relative">
        {/* Lines */}
        <span className="absolute w-full h-px bg-zinc-500/75 mix-blend-screen top-12"></span>
        <span className="absolute w-full h-px bg-zinc-500/75 mix-blend-screen bottom-12 z-10"></span>
        <span className="absolute w-px h-full bg-zinc-500/75 mix-blend-screen left-12 z-10"></span>
        <span className="absolute w-px h-full bg-zinc-500/75 mix-blend-screen right-12 z-10"></span>

        {/* top left cross */}
        <span className="w-2 h-px bg-white absolute left-[44.5px] top-12 z-20"></span>
        <span className="w-px h-2 bg-white absolute left-[48px] top-[44.5px] z-20"></span>

        {/* top right cross */}
        <span className="w-2 h-px bg-white absolute right-[44.5px] top-12 z-20"></span>
        <span className="w-px h-2 bg-white absolute right-[48px] top-[44.5px] z-20"></span>

        {/* bottom left cross */}
        <span className="w-2 h-px bg-white absolute left-[44.5px] bottom-12 z-20"></span>
        <span className="w-px h-2 bg-white absolute left-[48px] bottom-[44.5px] z-20"></span>

        {/* bottom right cross */}
        <span className="w-2 h-px bg-white absolute right-[44.5px] bottom-12 z-20"></span>
        <span className="w-px h-2 bg-white absolute right-[48px] bottom-[44.5px] z-20"></span>

        <img
          src={`/blog/${post.imageName}`}
          className="w-full h-[600px] object-cover rounded-2xl mb-16"
          alt={post.title}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary to-transparent rounded-2xl"></div>

        <div className="text-left space-y-6 absolute bottom-16 left-16 max-w-3xl text-balance">
          <div className="inline-flex text-center text-xs text-white rounded-full uppercase border border-border-primary px-2 py-px">
            <span>#{post.categories[0]}</span>
          </div>
          <div className="space-y-4">
            <h1 className="font-medium text-5xl tracking-tight text-balance leading-[64px] text-white">
              {post.title}
            </h1>
            <p className="text-slate-200 leading-8">{post.summary}</p>
          </div>

          {/* View Count */}
          <div className="flex items-center gap-4 text-slate-300 text-sm">
            <div className="flex items-center gap-1.5 text-slate-300 text-xs">
              <svg
                className="w-5 h-5 text-slate-300"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.75 8.75C4.75 7.64543 5.64543 6.75 6.75 6.75H17.25C18.3546 6.75 19.25 7.64543 19.25 8.75V17.25C19.25 18.3546 18.3546 19.25 17.25 19.25H6.75C5.64543 19.25 4.75 18.3546 4.75 17.25V8.75Z"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M8 4.75V8.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16 4.75V8.25"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M7.75 10.75H16.25"
                ></path>
              </svg>

              <p>{formatDate(post.publishedAt)}</p>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 text-xs">
              <svg
                className="w-5 h-5 text-slate-300"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.75 4.75H18.25M6.75 4.75H17.25V6C17.25 8.89949 14.8995 11.25 12 11.25C9.10051 11.25 6.75 8.8995 6.75 6V4.75Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M9 10H15"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M5.75 19.25H18.25M6.75 19.25H17.25V17.5C17.25 14.6005 14.8995 12.25 12 12.25C9.10051 12.25 6.75 14.6005 6.75 17.5V19.25Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <p>9 min read</p>
            </div>
            <div className="flex items-center gap-1 text-slate-300 text-xs">
              <svg
                className="text-slate-300 w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M19.25 12C19.25 13 17.5 18.25 12 18.25C6.5 18.25 4.75 13 4.75 12C4.75 11 6.5 5.75 12 5.75C17.5 5.75 19.25 11 19.25 12Z"
                ></path>
                <circle
                  cx="12"
                  cy="12"
                  r="2.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                ></circle>
              </svg>
              <p>5000 reads</p>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper z-10">
        <svg
          className="absolute bottom-10 right-[-100px]"
          width="24"
          height="14"
          viewBox="0 0 24 14"
        >
          <path
            opacity="0.24"
            d="M0.827592 6.88352V6.01349C1.39104 6.01349 1.7838 5.89915 2.00586 5.67045C2.23124 5.43845 2.34393 5.06226 2.34393 4.5419V3.27415C2.34393 2.71401 2.41353 2.25497 2.55273 1.89702C2.69525 1.53906 2.9024 1.26065 3.17418 1.06179C3.44596 0.862926 3.7774 0.725378 4.1685 0.649147C4.5596 0.569602 5.00373 0.52983 5.50089 0.52983V1.91193C5.10979 1.91193 4.80984 1.96662 4.60103 2.07599C4.39222 2.18205 4.24805 2.34612 4.1685 2.56818C4.09227 2.79025 4.05415 3.07363 4.05415 3.41832V5.04901C4.05415 5.30421 4.01107 5.54285 3.92489 5.76491C3.83872 5.98698 3.68129 6.18253 3.45259 6.35156C3.2239 6.51728 2.89743 6.6482 2.47319 6.74432C2.05226 6.83712 1.50373 6.88352 0.827592 6.88352ZM5.50089 13.1626C5.00373 13.1626 4.5596 13.1229 4.1685 13.0433C3.7774 12.9671 3.44596 12.8295 3.17418 12.6307C2.9024 12.4318 2.69525 12.1534 2.55273 11.7955C2.41353 11.4375 2.34393 10.9785 2.34393 10.4183V9.15554C2.34393 8.63518 2.23124 8.26065 2.00586 8.03196C1.7838 7.79995 1.39104 7.68395 0.827592 7.68395V6.81392C1.50373 6.81392 2.05226 6.86198 2.47319 6.9581C2.89743 7.0509 3.2239 7.18182 3.45259 7.35085C3.68129 7.51657 3.83872 7.71046 3.92489 7.93253C4.01107 8.15459 4.05415 8.39157 4.05415 8.64347V10.2741C4.05415 10.6188 4.09227 10.9022 4.1685 11.1243C4.24805 11.3464 4.39222 11.5121 4.60103 11.6214C4.80984 11.7308 5.10979 11.7855 5.50089 11.7855V13.1626ZM0.827592 7.68395V6.01349H2.40359V7.68395H0.827592ZM14.4286 0.340908L11.1474 12.5312H9.57138L12.8526 0.340908H14.4286ZM23.1712 6.81392V7.68395C22.6077 7.68395 22.2133 7.79995 21.9879 8.03196C21.7659 8.26065 21.6548 8.63518 21.6548 9.15554V10.4183C21.6548 10.9785 21.5836 11.4375 21.4411 11.7955C21.3018 12.1534 21.0964 12.4318 20.8246 12.6307C20.5528 12.8295 20.2214 12.9671 19.8303 13.0433C19.4392 13.1229 18.995 13.1626 18.4979 13.1626V11.7855C18.889 11.7855 19.1889 11.7308 19.3977 11.6214C19.6065 11.5121 19.7491 11.3464 19.8253 11.1243C19.9048 10.9022 19.9446 10.6188 19.9446 10.2741V8.64347C19.9446 8.39157 19.9877 8.15459 20.0739 7.93253C20.16 7.71046 20.3175 7.51657 20.5462 7.35085C20.7749 7.18182 21.0997 7.0509 21.5206 6.9581C21.9448 6.86198 22.495 6.81392 23.1712 6.81392ZM18.4979 0.52983C18.995 0.52983 19.4392 0.569602 19.8303 0.649147C20.2214 0.725378 20.5528 0.862926 20.8246 1.06179C21.0964 1.26065 21.3018 1.53906 21.4411 1.89702C21.5836 2.25497 21.6548 2.71401 21.6548 3.27415V4.5419C21.6548 5.06226 21.7659 5.43845 21.9879 5.67045C22.2133 5.89915 22.6077 6.01349 23.1712 6.01349V6.88352C22.495 6.88352 21.9448 6.83712 21.5206 6.74432C21.0997 6.6482 20.7749 6.51728 20.5462 6.35156C20.3175 6.18253 20.16 5.98698 20.0739 5.76491C19.9877 5.54285 19.9446 5.30421 19.9446 5.04901V3.41832C19.9446 3.07363 19.9048 2.79025 19.8253 2.56818C19.7491 2.34612 19.6065 2.18205 19.3977 2.07599C19.1889 1.96662 18.889 1.91193 18.4979 1.91193V0.52983ZM23.1712 6.01349V7.68395H21.5952V6.01349H23.1712Z"
            fill="#A5AEB8"
          />
        </svg>
        <MDXContent code={post.code} />
      </div>
      <NewsletterSignUp />
    </article>
  );
}

// let incrementViews = cache(increment);

// async function Views({ slug }: { slug: string }) {
//   let views = await getViewsCount();
//   incrementViews(slug);
//   return <ViewCounter allViews={views} slug={slug} />;
// }
