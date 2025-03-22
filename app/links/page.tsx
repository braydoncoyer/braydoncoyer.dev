import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";

import { GridWrapper } from "@/app/components/GridWrapper";
import { ProfilePicture } from "@/app/components/ProfilePicture";
import { Button } from "@/app/components/Button";
import { siteMetadata } from "@/app/data/siteMetadata";
import { fetchAndSortBlogPosts } from "@/app/lib/utils";
import { FeaturedBlogCard } from "@/app/components/FeaturedBlogCard";
import clsx from "clsx";

export default async function LinksPage() {
  const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  const featuredArticles = allPublishedBlogPosts.slice(0, 4);

  return (
    <div className="relative">
      <title>Links | Braydon Coyer</title>
      <div className="space-y-12">
        <ProfilePicture />
        <GridWrapper>
          <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            Hey, I&apos;m Braydon!
          </h1>
        </GridWrapper>
        <GridWrapper>
          <div className="mx-auto max-w-xl text-center md:mt-8">
            <p className="leading-8 text-text-secondary">
              I&apos;m a front-end developer, team lead, blogger and
              international public speaker.
            </p>
          </div>
        </GridWrapper>
        <GridWrapper>
          <div className="flex justify-center space-x-4 py-4">
            <Button href="/" variant="primary">
              View my full website
            </Button>
            <Button href="mailto:braydon@coyer.net" variant="secondary">
              Email me
            </Button>
          </div>
        </GridWrapper>
        <GridWrapper>
          <div className="text-center text-sm font-medium text-indigo-600">
            <span>Socials</span>
          </div>
        </GridWrapper>
        <GridWrapper>
          <div className="relative mx-auto grid max-w-2xl grid-cols-3 place-items-center justify-items-center">
            <a
              href={siteMetadata.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            >
              <div className="group inline-block text-center">
                <div className="h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400">
                  <div
                    className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                    style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                  >
                    <svg
                      className="h-12 w-12 text-indigo-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 6.69788 7.73566 5.1875 5.76391C4.39814 7.20632 4.80107 9.05121 6.10822 9.97802C5.63461 9.96302 5.1716 9.82741 4.75807 9.58305V9.62304C4.75807 11.1255 5.75654 12.4191 7.1444 12.7166C6.70672 12.8435 6.24724 12.8622 5.80131 12.771C6.19128 14.0565 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">Twitter</p>
                </div>
              </div>
            </a>
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            >
              <div className="group inline-block text-center">
                <div className="h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400">
                  <div
                    className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                    style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                  >
                    <svg
                      className="h-12 w-12 text-indigo-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.75 7.75C4.75 6.09315 6.09315 4.75 7.75 4.75H16.25C17.9069 4.75 19.25 6.09315 19.25 7.75V16.25C19.25 17.9069 17.9069 19.25 16.25 19.25H7.75C6.09315 19.25 4.75 17.9069 4.75 16.25V7.75Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M10.75 16.25V14C10.75 12.7574 11.7574 11.75 13 11.75C14.2426 11.75 15.25 12.7574 15.25 14V16.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M10.75 11.75V16.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7.75 11.75V16.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M7.75 8.75V9.25"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">LinkedIn</p>
                </div>
              </div>
            </a>
            <a
              href={siteMetadata.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            >
              <div className="group inline-block text-center">
                <div className="h-28 w-28 rounded-[20px] border border-border-primary bg-bg-primary p-2 transition-all duration-300 group-hover:-translate-y-3 group-hover:border-indigo-400">
                  <div
                    className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]"
                    style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                  >
                    <svg
                      className="h-12 w-12 text-indigo-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.75 12C4.75 10.7811 5.05079 9.63249 5.58219 8.62429L4.80156 6.0539C4.53964 5.19151 5.46262 4.44997 6.24833 4.89154L8.06273 5.91125C9.1965 5.17659 10.5484 4.75 12 4.75C13.4526 4.75 14.8054 5.17719 15.9396 5.91278L17.7624 4.8911C18.549 4.45014 19.4715 5.19384 19.2075 6.05617L18.42 8.62837C18.95 9.63558 19.25 10.7828 19.25 12C19.25 16.0041 16.0041 19.25 12 19.25C7.99594 19.25 4.75 16.0041 4.75 12Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">GitHub</p>
                </div>
              </div>
            </a>
          </div>
        </GridWrapper>

        <GridWrapper>
          <div className="text-center text-sm font-medium text-indigo-600">
            <span>Blog</span>
          </div>
        </GridWrapper>

        <div className="z-10">
          <GridWrapper>
            <ul className="z-50 grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.length > 0 ? (
                <>
                  {featuredArticles.slice(0, 4).map((post, index) => (
                    <FeaturedBlogCard
                      key={post.slug}
                      slug={post.slug}
                      imageName={post.imageName}
                      title={post.title}
                      summary={post.summary}
                      className={clsx(
                        // Hide the fourth article on mobile and desktop
                        index === 3 && "hidden md:block lg:hidden",
                      )}
                    />
                  ))}
                </>
              ) : (
                <p>Nothing to see here yet...</p>
              )}
            </ul>
          </GridWrapper>
        </div>

        <NewsletterSignUp />
      </div>
    </div>
  );
}
