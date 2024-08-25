import { PageTitle } from "app/components/PageTitle";

import { Changelog, changelogItems } from "#site/content";
import { notFound } from "next/navigation";
import { HorizontalLine } from "../components/HorizontalLine";
import { MDXContent } from "@/app/components/mdx";
import { NewsletterSignUp } from "../components/NewsletterSignUp";

export async function fetchAndSortPosts(): Promise<Changelog[]> {
  try {
    const allChangelogItems = await changelogItems;
    return allChangelogItems
      .filter((item) => !item.draft)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
  } catch (error) {
    notFound();
  }
}

export default async function ChangelogPage() {
  const allChangelogItems = await fetchAndSortPosts();

  return (
    <div className="space-y-[80px] mt-[100px] w-full">
      <div className="max-w-2xl mx-auto">
        <PageTitle title="Here's what's new on my site." />
      </div>

      <svg
        className="absolute top-0 w-full inset-x-0 left-1/2 transform -translate-x-1/2 pointer-events-none"
        viewBox="0 0 1440 379"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_i_38_2862)">
          <rect x="1075" y="22" width="24" height="8" rx="1" fill="#EDEEF2" />
        </g>
        <path
          opacity="0.5"
          d="M1447.63 88.9956L1222.5 88.9951M-1.37472 88.9957L381.999 88.9957M1222.5 88.9951L1201.97 109.527C1200.47 111.027 1199.63 113.062 1199.63 115.184L1199.63 192.685M1222.5 88.9951L537 88.9952M157.375 339.245L93.6253 339.245L-2.3747 339.245M157.375 339.245L287.686 339.245C289.808 339.245 291.843 338.402 293.343 336.902L311.578 318.667C313.051 317.194 313.891 315.205 313.92 313.122L315.387 207.857C315.449 203.395 311.85 199.745 307.388 199.745L118.125 199.745M157.375 339.245L157.375 242.309C157.375 240.187 156.532 238.152 155.032 236.652L118.125 199.745M118.125 199.745L-2.37471 199.745M1447.63 273.5L1280.44 273.5M1199.63 192.685L1272.44 192.685C1276.86 192.685 1280.44 196.267 1280.44 200.685L1280.44 273.5M1199.63 192.685L1199.63 265.5C1199.63 269.918 1203.21 273.5 1207.63 273.5L1280.44 273.5M1280.44 273.5L1280.44 379M1121.38 35.5581L1121.38 61.8701C1121.38 66.2884 1117.79 69.8701 1113.38 69.8701L1060.75 69.8702C1056.33 69.8702 1052.75 66.2884 1052.75 61.8702L1052.75 35.5581L1052.75 9.24808C1052.75 4.8298 1056.33 1.24808 1060.75 1.24808L1113.38 1.24808C1117.79 1.24808 1121.38 4.8298 1121.38 9.24808L1121.38 35.5581ZM389.999 70.9957L529 70.9957C533.419 70.9957 537 74.5774 537 78.9957L537 98.9957C537 103.414 533.419 106.996 529 106.996L389.999 106.996C385.581 106.996 381.999 103.414 381.999 98.9957L381.999 78.9957C381.999 74.5774 385.581 70.9957 389.999 70.9957Z"
          stroke="#D6DADE"
        />
        <g filter="url(#filter1_i_38_2862)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M90 246.954C90 248.058 90.9002 248.94 91.9964 249.076C98.92 249.933 104.102 255.19 105.019 261.461C105.179 262.554 106.06 263.455 107.165 263.455L128.165 263.455C129.269 263.455 130.17 262.558 130.114 261.455C129.085 240.981 112.338 224.991 91.9996 224.002C90.8964 223.949 90 224.849 90 225.954L90 246.954Z"
            fill="#EDEEF0"
            fill-opacity="0.5"
          />
        </g>
        <g opacity="0.5" filter="url(#filter2_i_38_2862)">
          <circle
            cx="1239.5"
            cy="233.5"
            r="11.5"
            stroke="#EDEEF2"
            stroke-width="6"
          />
        </g>
        <defs>
          <filter
            id="filter0_i_38_2862"
            x="1075"
            y="22"
            width="24"
            height="9.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_innerShadow_38_2862"
            />
          </filter>
          <filter
            id="filter1_i_38_2862"
            x="90"
            y="224"
            width="40.1168"
            height="40.9548"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_innerShadow_38_2862"
            />
          </filter>
          <filter
            id="filter2_i_38_2862"
            x="1225"
            y="219"
            width="29"
            height="30.5"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
              result="effect1_innerShadow_38_2862"
            />
          </filter>
        </defs>
      </svg>

      <ul className="flex flex-col gap-6">
        {allChangelogItems.length > 0 ? (
          <>
            {allChangelogItems.map((post, index) => {
              return (
                <li key={post.slug}>
                  <HorizontalLine />
                  <div
                    key={post.slug}
                    className="grid grid-cols-12 rounded-2xl h-full py-8"
                  >
                    <div className="space-y-2 col-span-2 col-start-1">
                      <div className="font-medium leading-none text-sm">
                        <time dateTime={post.publishedAt}>
                          {new Date(post.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </time>
                      </div>
                    </div>
                    <div className="flex flex-col w-full flex-grow col-span-8 col-start-4">
                      <h2 className="tracking-tight text-slate-900 text-2xl font-semibold leading-none mb-8">
                        {post.title}
                      </h2>
                      <img
                        className="w-full h-96 object-cover rounded-3xl mb-8"
                        src="https://framerusercontent.com/images/qtKbMR65zAX0Ziafg98khJkdQ.webp?scale-down-to=2048"
                        alt=""
                      />
                      <MDXContent code={post.code} />
                    </div>
                  </div>
                  <HorizontalLine />
                </li>
              );
            })}
          </>
        ) : (
          <p>Nothing to see here yet...</p>
        )}
      </ul>

      <NewsletterSignUp />
    </div>
  );
}
