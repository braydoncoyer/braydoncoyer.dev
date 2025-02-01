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
import { GridWrapper } from "./components/GridWrapper";

export default async function Home() {
  const allPublishedBlogPosts = await fetchAndSortBlogPosts();
  const featuredArticles = allPublishedBlogPosts.slice(0, 3);

  return (
    <section>
      <HeaderPattern />
      <ProfilePicture />
      <div className="mt-6 space-y-10 md:mt-0 md:space-y-16">
        <section>
          <div className="relative text-balance">
            <GridWrapper>
              <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
                Hey, I&apos;m Braydon! <br /> Welcome to my corner of the
                internet!
              </h1>
            </GridWrapper>
            <GridWrapper>
              <div className="mt-4 text-center md:mt-8">
                <p className="leading-8 text-text-secondary">
                  I&apos;m a front-end developer with a love for design and a
                  knack for tinkering. This site is intentionally
                  over-engineered and serves as my playground for experimenting
                  with new ideas and seeing what sticks!
                </p>
              </div>
            </GridWrapper>
          </div>
          <div>
            {/* Desktop Photos */}
            <div className="mb-8 mt-16 hidden items-center justify-around space-x-16 md:flex md:space-x-4">
              <div className="relative">
                <ShadowBox width={188} height={278}></ShadowBox>
                <span className="absolute left-1 top-2 rotate-[-8deg] rounded-lg lg:order-2">
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
                <span className="absolute left-1 top-2 rotate-[8deg]">
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
                <span className="absolute left-1 top-2 rotate-[-8deg]">
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
                <span className="absolute left-1 top-2 rotate-[5deg]">
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

            {/* Mobile Photos */}
            <div className="relative -mx-12 md:hidden">
              <div className="relative w-full overflow-hidden py-12">
                <div className="mt-10 flex items-center justify-center space-x-14">
                  <div className="relative w-fit">
                    <ShadowBox width={170} height={252}></ShadowBox>
                    <img
                      className="absolute left-0 top-2 h-[245px] w-[163px] rotate-[-5deg] rounded-lg object-cover shadow"
                      src="/c3_speaker_head.png"
                      alt="A headshot"
                    />
                  </div>
                  <div className="relative w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[280px] w-[190px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/braydon_speaking_photo.jpeg"
                      alt="A headshot"
                    />
                  </div>
                  <div className="relative w-fit">
                    <ShadowBox width={170} height={252}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[245px] w-[163px] rotate-[10deg] rounded-lg object-cover shadow"
                      src="/braydon_speaking_head_3.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="relative space-y-10 md:space-y-16">
          <AboutPattern />
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary md:text-4xl">
                Here&apos;s what sets me apart and makes me unique
              </h2>
            </GridWrapper>
          </div>

          {/* About Bento */}
          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-12 md:grid-rows-[14]">
              <div className="col-span-1 md:col-span-5 md:row-span-6">
                <AboutMeBento linkTo="/about" />
              </div>

              <div className="md:col-span-7 md:row-span-8">
                <ConnectionsBento linkTo="/connections" />
              </div>

              <div className="md:col-span-5 md:row-span-7">
                <ToolboxBento linkTo="/toolbox" />
              </div>

              <div className="md:col-span-7 md:row-span-5">
                <CalendarBento />
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* Blog Section */}
        <section className="relative space-y-10 md:space-y-16">
          <BlogPattern />
          <div className="relative space-y-4 text-balance">
            <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
              <BgGradient />
            </span>
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Blog</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:text-4xl">
                I like sharing my experiments && knowledge with others
              </h2>
            </GridWrapper>
          </div>

          <div className="z-10">
            <GridWrapper>
              <ul className="z-50 grid grid-cols-1 gap-2 md:grid-cols-3">
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
            </GridWrapper>
          </div>
        </section>

        {/* My Site Section */}
        <section className="relative space-y-10 md:space-y-16">
          <MySitePattern />
          <div className="space-y-4 text-balance">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>My Site</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary md:mx-auto md:max-w-lg md:text-4xl">
                My site is a playful sandbox. Explore, experiment, && say hello
              </h2>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-3">
              <span className="col-span-1 h-[276px]">
                <ChangelogBento />
              </span>
              <SpeakingBento />
              <CommunityWallBento />
            </div>
          </GridWrapper>
        </section>

        {/* Newsletter Section */}
        <section>
          <NewsletterSignUp />
        </section>
      </div>
    </section>
  );
}
