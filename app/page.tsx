import { BgGradient } from "./components/BgGradient";
import { HorizontalLine } from "./components/HorizontalLine";
import { ShadowBox } from "./components/ShadowBox";
import { NewsletterSignUp } from "./components/NewsletterSignUp";
import { ChangelogBento } from "./components/ChangelogBento";
import { fetchAndSortBlogPosts } from "./lib/utils";
import { SpeakingBento } from "./components/SpeakingBento";
import { CommunityWallBento } from "./components/CommunityWallBento";
import { CalendarBento } from "./components/CalendarBento";
import { FeaturedBlogCard } from "./components/FeaturedBlogCard";
import { ToolboxBento } from "./components/ToolboxBento";
import { ConnectionsBento } from "./components/ConnectionsBento";
import { ProfilePicture } from "./components/ProfilePicture";
import { Photo } from "./components/Photo";
import { AboutMeBento } from "./components/AboutMeBento";
import {
  AboutPattern,
  BlogPattern,
  HeaderPattern,
  MySitePattern,
} from "./components/SvgPatterns";

export default async function Home() {
  const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  const featuredArticles = allPublishedBlogPosts.slice(0, 3);

  return (
    <section>
      <HeaderPattern />
      <ProfilePicture />
      <div className="space-y-16">
        <section>
          <div className="relative">
            <h1 className="mx-auto text-text-primary text-center text-balance font-medium text-6xl leading-[64px] tracking-tighter max-w-2xl">
              Hey, I&apos;m Braydon! <br /> Welcome to my corner of the
              internet!
            </h1>
            <div className="mt-8 text-center text-balance">
              <p className="text-text-secondary leading-8">
                I&apos;m a front-end developer with a love for design and a
                knack for tinkering. This site is intentionally over-engineered
                and serves as my playground for experimenting with new ideas and
                seeing what sticks!
              </p>
            </div>
          </div>
          <div>
            {/* Photos */}
            <div className="flex w-full space-x-4 justify-around items-center mt-16 mb-8">
              <div className="relative">
                <ShadowBox width={188} height={278}></ShadowBox>
                <span className="lg:order-2 rounded-lg absolute top-2 left-1 rotate-[-8deg]">
                  <Photo
                    width={180}
                    height={269}
                    src="/family_01.jpeg"
                    alt="DoorDash hitting it's millionth total order back in 2015."
                    direction="right"
                  />
                </span>
              </div>

              <div className="relative">
                <ShadowBox width={278} height={214}></ShadowBox>
                <span className="absolute top-2 left-1 rotate-[8deg]">
                  <Photo
                    width={272}
                    height={206}
                    src="/family_02.jpeg"
                    alt="DoorDash hitting it's millionth total order back in 2015."
                    direction="left"
                  />
                </span>
              </div>

              <div className="relative">
                <ShadowBox width={278} height={278}></ShadowBox>
                <span className="absolute top-2 left-1 rotate-[-8deg]">
                  <Photo
                    width={270}
                    height={270}
                    src="/family_03.jpeg"
                    alt="DoorDash hitting it's millionth total order back in 2015."
                    direction="right"
                  />
                </span>
              </div>

              <div className="relative">
                <ShadowBox width={188} height={278}></ShadowBox>
                <span className="absolute top-2 left-1 rotate-[5deg]">
                  <Photo
                    width={180}
                    height={270}
                    src="/braydon_headshot.jpg"
                    alt="DoorDash hitting it's millionth total order back in 2015."
                    direction="right"
                  />
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-16 relative">
          <AboutPattern />
          <div className="space-y-4">
            <div className="text-sm font-medium text-indigo-600 text-center">
              <span>About</span>
            </div>
            <h2 className="mx-auto text-text-primary text-center text-balance font-medium text-3xl tracking-tight max-w-lg leading-10">
              Here&apos;s what sets me apart and makes me unique
            </h2>
          </div>

          {/* About Grid */}
          <div>
            <HorizontalLine />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 grid-rows-[14]">
              <div className="col-span-5 row-span-6">
                <AboutMeBento linkTo="/about" />
              </div>

              <div className="col-span-7 row-span-8">
                <ConnectionsBento linkTo="/about" />
              </div>

              <div className="col-span-5 row-span-7">
                <ToolboxBento linkTo="/toolbox" />
              </div>

              <div className="col-span-7 row-span-5">
                <CalendarBento />
              </div>
            </div>
            <HorizontalLine />
          </div>
        </section>

        {/* Blog Section */}
        <section className="space-y-16 relative">
          <BlogPattern />
          <div className="space-y-4 relative">
            <span className="absolute left-1/2 -translate-x-1/2 top-0 pointer-events-none">
              <BgGradient />
            </span>
            <div className="text-sm font-medium text-indigo-600 text-center">
              <span>Blog</span>
            </div>
            <h2 className="mx-auto text-text-primary text-center text-balance font-medium text-3xl tracking-tighter max-w-lg leading-10">
              I like sharing my experiments and knowledge with others
            </h2>
          </div>

          <div className="z-10">
            <ul className="grid grid-cols-3 gap-2 z-50">
              <HorizontalLine />
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
            <HorizontalLine />
          </div>
        </section>

        {/* My Site Section */}
        <section className="space-y-16 relative">
          <MySitePattern />
          <div className="space-y-4">
            <div className="text-sm font-medium text-indigo-600 text-center">
              <span>My Site</span>
            </div>
            <h2 className="mx-auto text-text-primary text-center text-balance font-medium text-3xl tracking-tighter max-w-lg leading-10">
              My site is a playful sandbox. Explore, experiment, and say hello
            </h2>
          </div>

          <div>
            {/* <HorizontalLine /> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <span className="col-span-1 h-[276px]">
                <ChangelogBento />
              </span>
              <SpeakingBento />
              <CommunityWallBento />
            </div>
            {/* <HorizontalLine /> */}
          </div>
        </section>

        {/* Newsletter Section */}
        <section>
          <NewsletterSignUp />
        </section>
      </div>
    </section>
  );
}
