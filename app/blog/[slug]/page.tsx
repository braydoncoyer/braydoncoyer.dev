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
      {/* <svg
        className="absolute top-[65px] w-full inset-x-0 left-1/2 transform -translate-x-1/2 pointer-events-none"
        height="auto"
        width="auto"
        fill="none"
      >
        <path
          opacity="0.5"
          d="M1439 95.9956L1122.75 95.9951M5.28435e-05 95.9957L538.001 95.9952L1122.75 95.9951M1439 278.995L1279.5 278.995M1122.75 95.9951L1102.22 116.527C1100.72 118.027 1099.88 120.062 1099.88 122.184L1099.88 206.745L1099.88 252.807C1099.88 254.928 1100.72 256.963 1102.22 258.464L1120.41 276.652C1121.91 278.153 1123.94 278.995 1126.06 278.995L1178.13 278.995L1279.5 278.995M1441.38 428.745L1305.69 428.745C1303.57 428.745 1301.53 427.902 1300.03 426.402L1281.84 408.213C1280.34 406.713 1279.5 404.678 1279.5 402.556L1279.5 278.995M220 304.246L-0.999929 304.246M220 304.246L220 235.496M220 304.246L220 697M220 235.496L156.25 235.496L-0.999935 235.496M220 235.496L289.061 235.496C291.183 235.496 293.218 234.653 294.718 233.153L312.953 214.918C314.426 213.445 315.266 211.455 315.295 209.372L316.875 95.9957L316.875 0.500098M220 235.496L220 138.559C220 136.438 219.157 134.403 217.657 132.903L183.093 98.3389C181.593 96.8386 179.558 95.9957 177.436 95.9957L-0.999947 95.9957M159.5 3680.5L159.5 2838.75M1148.5 3680.5L1148.5 2602.94C1148.5 2600.82 1149.34 2598.78 1150.84 2597.28L1169.03 2579.09C1170.53 2577.59 1172.57 2576.75 1174.69 2576.75L1439 2576.75M-0.998754 2576.75L263.313 2576.75C265.434 2576.75 267.469 2575.91 268.969 2574.41L287.158 2556.22C288.658 2554.72 289.501 2552.68 289.501 2550.56L289.501 2456.5M1279.5 278.995L1279.5 0.500014M1219.5 697L1219.5 95.9954M385.5 269.808L385.5 296.12C385.5 300.539 381.918 304.12 377.5 304.12L324.875 304.12C320.457 304.12 316.875 300.539 316.875 296.12L316.875 269.808L316.875 243.496C316.875 239.077 320.457 235.496 324.875 235.496L377.5 235.496C381.918 235.496 385.5 239.077 385.5 243.496L385.5 269.808ZM1035.5 43L1035.5 51.3125C1035.5 55.7308 1039.08 59.3125 1043.5 59.3125L1114.75 59.3125C1119.17 59.3125 1122.75 55.7308 1122.75 51.3125L1122.75 43C1122.75 38.5818 1119.17 35 1114.75 35L1043.5 35C1039.08 35 1035.5 38.5818 1035.5 43Z"
          stroke="#D6DADE"
        />
        <g filter="url(#filter0_i_0_1)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M97 202.954C97 204.058 97.9002 204.94 98.9964 205.076C105.92 205.933 111.102 211.19 112.019 217.461C112.179 218.554 113.06 219.455 114.165 219.455L135.165 219.455C136.269 219.455 137.17 218.558 137.114 217.455C136.085 196.981 119.338 180.991 98.9996 180.002C97.8964 179.949 97 180.849 97 181.954L97 202.954Z"
            fill="#EDEEF0"
            fillOpacity="0.5"
          />
        </g>
        <g opacity="0.5" filter="url(#filter1_i_0_1)">
          <circle
            cx="351.5"
            cy="269.5"
            r="11.5"
            stroke="#EDEEF2"
            strokeWidth="6"
          />
        </g>
        <g filter="url(#filter2_i_0_1)">
          <rect x="1045" y="43" width="70" height="8" rx="1" fill="#EDEEF2" />
        </g>
        <g filter="url(#filter3_i_0_1)">
          <rect x="1232" y="108" width="35" height="8" rx="1" fill="#EDEEF2" />
        </g>
        <defs>
          <filter
            id="filter0_i_0_1"
            x="97"
            y="180"
            width="40.1168"
            height="40.9548"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_1"
            />
          </filter>
          <filter
            id="filter1_i_0_1"
            x="337"
            y="255"
            width="29"
            height="30.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_1"
            />
          </filter>
          <filter
            id="filter2_i_0_1"
            x="1045"
            y="43"
            width="70"
            height="9.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_1"
            />
          </filter>
          <filter
            id="filter3_i_0_1"
            x="1232"
            y="108"
            width="35"
            height="9.5"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="0.75" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_0_1"
            />
          </filter>
        </defs>
      </svg> */}
      <div className="max-w-4xl mx-auto">
        <div className="mb-7">
          <SectionTitlePill title={post.categories[0]} />
        </div>
        <div className="text-center mb-12 space-y-4">
          <h1 className="font-semibold text-5xl tracking-tighter text-balance leading-[55px] text-text-primary">
            {post.title}
          </h1>
          <p className="text-base text-text-secondary">
            {formatDate(post.publishedAt)}
          </p>

          {/* View Count */}
          <div>
            <p className="text-base text-text-secondary">5000 reads</p>
          </div>
        </div>
        {/* Article Banner Image */}
        <div className="relative">
          <span className="absolute top-0 inset-x-0">
            <HorizontalLine />
          </span>
          <img
            src={`/blog/${post.imageName}`}
            className="w-full h-96 object-cover rounded-3xl mb-16"
          />
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

          <span className="absolute bottom-0 inset-x-0">
            <HorizontalLine />
          </span>
        </div>

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
