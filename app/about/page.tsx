import { NewsletterSignUp } from "app/components/NewsletterSignUp";
import { HorizontalLine } from "app/components/HorizontalLine";
import { getTimeOfDayGreeting } from "app/lib/utils";
import { ProfilePicture } from "../components/ProfilePicture";
import React from "react";
import { CurrentlyPlayingBento } from "../components/CurrentlyPlayingBento";
import { ConnectionsBento } from "../components/ConnectionsBento";
import { Scrapbook } from "../components/Scrapbook";
import { ShadowBox } from "../components/ShadowBox";
import { Resume } from "app/components/Resume";
import { Button } from "../components/Button";
import { StatsBento } from "../components/StatsBento";
import { CurrentlyReadingBento } from "../components/CurrentlyReadingBento";
import { GridWrapper } from "../components/GridWrapper";
import { AboutTrackPattern } from "../components/AboutTrackPattern";

export default function AboutPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <div className="relative">
      <title>About | Braydon Coyer</title>
      <div className="relative space-y-10 md:space-y-16">
        {/* Title */}
        <GridWrapper>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-around lg:pt-16">
            <div className="order-2 mx-auto max-w-lg lg:order-1 lg:m-0 lg:max-w-3xl">
              <h1 className="mx-auto max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
                {timeOfDayGreeting} <br />
                I&apos;m Braydon, a creative frontend engineer.
              </h1>
            </div>
            <div className="ld:order-2 order-1 flex-shrink-0 lg:ml-8">
              <ProfilePicture />
            </div>
          </div>
        </GridWrapper>

        <span className="absolute left-1/2 top-40 -translate-y-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* About */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>About</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-xl text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                Here&apos;s a quick intro about me and what I love to do
              </h2>
            </GridWrapper>
          </div>
          <div className="relative h-fit w-full overflow-hidden">
            <div className="absolute left-0 top-0 w-full md:left-4 lg:left-[355px] xl:left-[455px]">
              <AboutTrackPattern />
            </div>

            {/* Section 1 */}
            <div className="grid grid-cols-1 gap-8 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pb-20 xl:py-32">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/knights_kwest.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  I began my creative journey by developing apps for iOS and
                  Android
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  When the iPad launched in 2010, I was inspired to create
                  interactive content for its stunning 1024x768 screen.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I jumped into mobile development, freelancing along the way,
                  and successfully released several games and apps, with one of
                  my games even surpassing Angry Birds in popularity.
                </p>
              </div>
              <div className="hidden lg:order-1 lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/knights_kwest.jpeg"
                    alt="A headshot"
                  />
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="grid grid-cols-1 gap-8 py-24 lg:grid-cols-2 lg:items-center lg:justify-between lg:pl-12">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/braydon_and_pj.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  The transition to web development.
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I decided to dive into web development not long after. With my
                  love for visual expression and design, frontend development
                  felt like the perfect fit for me.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I began learning HTML, CSS, and JavaScript, and in 2016, I
                  discovered React. It wasn&apos;t long before I landed my first
                  full-time job as a web developer.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/braydon_and_pj.jpeg"
                    alt="A headshot"
                  />
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div className="grid grid-cols-1 gap-8 pr-12 lg:grid-cols-2 lg:items-center lg:justify-between xl:py-24">
              <div className="flex flex-col items-center text-left lg:order-2 lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/braydon_and_pj.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  What I truly value in life.
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I knew I wanted to spend my best friend, PeggyJean, so I
                  proposed. When COVID-19 hit, we had to adjust our plans and
                  ended up having a small but wonderful wedding in 2020.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Family means everything to me, and I cherish the moments we
                  share together. Our first daughter, ElizaJane, arrived in
                  2021, and our second child, Renny, joined us in 2023.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                    src="/braydon_and_pj.jpeg"
                    alt="A headshot"
                  />
                </div>
              </div>
            </div>

            {/* Section 4 */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:justify-between lg:py-32 lg:pl-12 xl:py-24">
              <div className="flex flex-col items-center text-left lg:items-start">
                <div className="mb-8 lg:hidden">
                  <div className="relative mx-auto w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/braydon_speaking_photo.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
                <h2 className="mb-6 w-full text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                  What I&apos;m doing now.
                </h2>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  Right now, I&apos;m a Senior Frontend Developer at LogicGate,
                  where I get to lead teams in building some really exciting
                  projects.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  I love sharing what I know as an international tech speaker
                  and try to speak at a few events each year.
                </p>
                <p className="mb-6 text-base leading-8 text-text-secondary">
                  In my downtime, I enjoy creative coding, blogging, gaming with
                  friends, and hanging out with my family.
                </p>
              </div>
              <div className="hidden lg:block">
                <div className="relative mx-auto w-fit">
                  <ShadowBox width={188} height={278}></ShadowBox>
                  <img
                    className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                    src="/braydon_speaking_photo.jpeg"
                    alt="A headshot"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* About */}
        <div className="relative space-y-8 text-center">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>Experience</span>
              </div>
            </GridWrapper>
            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-3xl font-medium leading-[40px] tracking-tighter text-text-primary">
                My work history and achievements timeline.
              </h2>
            </GridWrapper>
          </div>
        </div>
        <div className="space-y-16">
          <GridWrapper>
            <Resume />
          </GridWrapper>
          <div className="flex justify-center">
            <Button variant="secondary">Download Resume</Button>
          </div>
        </div>

        <section className="relative space-y-16">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center text-sm font-medium text-indigo-600">
                <span>More</span>
              </div>
            </GridWrapper>

            <GridWrapper>
              <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tight text-text-primary">
                Here&apos;s what sets me apart and makes me unique
              </h2>
            </GridWrapper>
          </div>

          {/* About Grid */}
          <GridWrapper>
            <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
              <div className="lg:col-span-3 lg:row-span-6">
                <CurrentlyPlayingBento />
              </div>
              <div className="hidden lg:col-span-7 lg:row-span-5 lg:block">
                <Scrapbook />
              </div>
              <div className="hidden lg:col-span-2 lg:col-start-11 lg:row-span-10 lg:block lg:min-h-[50px]">
                <CurrentlyReadingBento />
              </div>
              <div className="lg:col-span-7 lg:row-span-8">
                <ConnectionsBento linkTo="/connections" />
              </div>

              <div className="lg:col-span-3 lg:row-span-4">
                <StatsBento />
              </div>
            </div>
          </GridWrapper>
        </section>

        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}
