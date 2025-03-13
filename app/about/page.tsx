"use client";

import { NewsletterSignUp } from "app/components/NewsletterSignUp";
import { HorizontalLine } from "app/components/HorizontalLine";
import { getTimeOfDayGreeting } from "app/lib/utils";
import { ProfilePicture } from "../components/ProfilePicture";
import React, { useEffect, useRef, useState } from "react";
import { CurrentlyPlayingBento } from "../components/CurrentlyPlayingBento";
import { ConnectionsBento } from "../components/ConnectionsBento";
import { Scrapbook } from "../components/Scrapbook";
import { ShadowBox } from "../components/ShadowBox";
import { useScroll, motion } from "framer-motion";
import { Resume } from "app/components/Resume";
import { Button } from "../components/Button";
import { StatsBento } from "../components/StatsBento";
import { CurrentlyReadingBento } from "../components/CurrentlyReadingBento";
import { GridWrapper } from "../components/GridWrapper";

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
              <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-5xl lg:text-left lg:text-6xl lg:leading-[64px]">
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
          <div className="relative h-[2050px] w-full overflow-hidden lg:h-[2050px]">
            <div className="absolute left-0 top-0 w-full md:left-4 lg:left-[455px]">
              <AboutTrackPattern />
            </div>
            {/* Section 1 */}
            <div className="relative ml-5 grid w-full grid-cols-12 grid-rows-2 md:grid-cols-10 md:grid-rows-1 lg:flex lg:px-14 lg:pt-32">
              <div className="col-span-11 col-start-1 mt-6 text-left md:col-span-6 md:col-start-2 lg:order-2 lg:flex-1">
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
              <div className="col-span-11 col-start-1 row-start-2 mt-6 place-items-center md:col-span-3 md:col-start-8 md:row-start-1 lg:flex-1 lg:place-items-start">
                <div className="lg:flex lg:items-center lg:justify-start">
                  <div className="relative w-fit lg:ml-20">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/knights_kwest.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
              </div>
              <svg
                className="pointer-events-none absolute right-4 hidden lg:block"
                width="648"
                height="366"
                viewBox="0 0 648 366"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M647 17V183V302.373C647 306.616 645.314 310.686 642.314 313.686L623.686 332.314C620.686 335.314 616.616 337 612.373 337H324.127C319.884 337 315.814 338.686 312.814 341.686L294.186 360.314C291.186 363.314 287.116 365 282.873 365H17C8.16344 365 1 357.837 1 349V17"
                  stroke="#D6DADE"
                />
                <path d="M1 17V1L647 1V17" stroke="#D6DADE" />
              </svg>
            </div>

            {/* Section 2 */}
            <div className="relative w-full justify-center md:flex md:px-14 md:pt-44">
              <HorizontalLine />
              <div className="mt-6 flex-1 text-left">
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
                  discovered React. It&apos;t long before I landed my first
                  full-time job as a web developer.
                </p>
              </div>
              <div className="mt-6 flex-1">
                <div className="flex items-center justify-end">
                  <div className="relative mr-20 w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/braydon_and_pj.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
              </div>
              <svg
                className="pointer-events-none absolute left-4"
                width="648"
                height="369"
                viewBox="0 0 648 369"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0L1 352C1 360.837 8.16345 368 17 368H482.873C487.116 368 491.186 366.314 494.186 363.314L642.314 215.186C645.314 212.186 647 208.116 647 203.873V0"
                  stroke="#D6DADE"
                />
              </svg>
            </div>

            {/* Section 3 */}
            <div className="relative w-full justify-center md:flex md:px-14 md:pt-40">
              <HorizontalLine />
              <div className="mt-6 flex-1">
                <div className="flex items-center justify-start">
                  <div className="relative ml-20 w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/braydon_and_pj.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex-1 text-left">
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
              <svg
                className="pointer-events-none absolute right-4"
                width="648"
                height="316"
                viewBox="0 0 648 316"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M647 0V252.373C647 256.616 645.314 260.686 642.314 263.686L623.686 282.314C620.686 285.314 616.616 287 612.373 287H324.127C319.884 287 315.814 288.686 312.814 291.686L294.186 310.314C291.186 313.314 287.116 315 282.873 315H17C8.16344 315 1 307.837 1 299V0"
                  stroke="#D6DADE"
                />
              </svg>
            </div>

            {/* Section 4 */}
            <div className="relative w-full justify-center md:flex md:px-14 md:pt-44">
              <HorizontalLine />
              <div className="mt-6 flex-1 text-left">
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
              <div className="mt-6 flex-1">
                <div className="flex items-center justify-end">
                  <div className="relative mr-32 w-fit">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="absolute left-0 top-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow"
                      src="/braydon_speaking_photo.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
              </div>
              <svg
                className="pointer-events-none absolute left-4"
                width="648"
                height="341"
                viewBox="0 0 648 341"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 0L1 324C1 332.837 8.16344 340 17 340H582.873C587.116 340 591.186 338.314 594.186 335.314L642.314 287.186C645.314 284.186 647 280.116 647 275.873V0"
                  stroke="#D6DADE"
                />
              </svg>
            </div>
          </div>

          <span className="absolute bottom-0 right-36">
            <svg
              width="36"
              height="21"
              viewBox="0 0 36 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.24"
                d="M0.827592 6.88352V6.01349C1.39104 6.01349 1.7838 5.89915 2.00586 5.67045C2.23124 5.43845 2.34393 5.06226 2.34393 4.5419V3.27415C2.34393 2.71401 2.41353 2.25497 2.55273 1.89702C2.69525 1.53906 2.9024 1.26065 3.17418 1.06179C3.44596 0.862926 3.7774 0.725378 4.1685 0.649147C4.5596 0.569602 5.00373 0.52983 5.50089 0.52983V1.91193C5.10979 1.91193 4.80984 1.96662 4.60103 2.07599C4.39222 2.18205 4.24805 2.34612 4.1685 2.56818C4.09227 2.79025 4.05415 3.07363 4.05415 3.41832V5.04901C4.05415 5.30421 4.01107 5.54285 3.92489 5.76491C3.83872 5.98698 3.68129 6.18253 3.45259 6.35156C3.2239 6.51728 2.89743 6.6482 2.47319 6.74432C2.05226 6.83712 1.50373 6.88352 0.827592 6.88352ZM5.50089 13.1626C5.00373 13.1626 4.5596 13.1229 4.1685 13.0433C3.7774 12.9671 3.44596 12.8295 3.17418 12.6307C2.9024 12.4318 2.69525 12.1534 2.55273 11.7955C2.41353 11.4375 2.34393 10.9785 2.34393 10.4183V9.15554C2.34393 8.63518 2.23124 8.26065 2.00586 8.03196C1.7838 7.79995 1.39104 7.68395 0.827592 7.68395V6.81392C1.50373 6.81392 2.05226 6.86198 2.47319 6.9581C2.89743 7.0509 3.2239 7.18182 3.45259 7.35085C3.68129 7.51657 3.83872 7.71046 3.92489 7.93253C4.01107 8.15459 4.05415 8.39157 4.05415 8.64347V10.2741C4.05415 10.6188 4.09227 10.9022 4.1685 11.1243C4.24805 11.3464 4.39222 11.5121 4.60103 11.6214C4.80984 11.7308 5.10979 11.7855 5.50089 11.7855V13.1626ZM0.827592 7.68395V6.01349H2.40359V7.68395H0.827592ZM14.4286 0.340908L11.1474 12.5312H9.57138L12.8526 0.340908H14.4286ZM23.1712 6.81392V7.68395C22.6077 7.68395 22.2133 7.79995 21.9879 8.03196C21.7659 8.26065 21.6548 8.63518 21.6548 9.15554V10.4183C21.6548 10.9785 21.5836 11.4375 21.4411 11.7955C21.3018 12.1534 21.0964 12.4318 20.8246 12.6307C20.5528 12.8295 20.2214 12.9671 19.8303 13.0433C19.4392 13.1229 18.995 13.1626 18.4979 13.1626V11.7855C18.889 11.7855 19.1889 11.7308 19.3977 11.6214C19.6065 11.5121 19.7491 11.3464 19.8253 11.1243C19.9048 10.9022 19.9446 10.6188 19.9446 10.2741V8.64347C19.9446 8.39157 19.9877 8.15459 20.0739 7.93253C20.16 7.71046 20.3175 7.51657 20.5462 7.35085C20.7749 7.18182 21.0997 7.0509 21.5206 6.9581C21.9448 6.86198 22.495 6.81392 23.1712 6.81392ZM18.4979 0.52983C18.995 0.52983 19.4392 0.569602 19.8303 0.649147C20.2214 0.725378 20.5528 0.862926 20.8246 1.06179C21.0964 1.26065 21.3018 1.53906 21.4411 1.89702C21.5836 2.25497 21.6548 2.71401 21.6548 3.27415V4.5419C21.6548 5.06226 21.7659 5.43845 21.9879 5.67045C22.2133 5.89915 22.6077 6.01349 23.1712 6.01349V6.88352C22.495 6.88352 21.9448 6.83712 21.5206 6.74432C21.0997 6.6482 20.7749 6.51728 20.5462 6.35156C20.3175 6.18253 20.16 5.98698 20.0739 5.76491C19.9877 5.54285 19.9446 5.30421 19.9446 5.04901V3.41832C19.9446 3.07363 19.9048 2.79025 19.8253 2.56818C19.7491 2.34612 19.6065 2.18205 19.3977 2.07599C19.1889 1.96662 18.889 1.91193 18.4979 1.91193V0.52983ZM23.1712 6.01349V7.68395H21.5952V6.01349H23.1712Z"
                fill="#A5AEB8"
              />
            </svg>
          </span>

          <span className="absolute -bottom-12 left-36 rounded-lg border border-border-primary/50 p-2">
            <svg
              width="29"
              height="29"
              viewBox="0 0 29 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5" filter="url(#filter0_i_185_2882)">
                <circle
                  cx="14.5"
                  cy="14.5"
                  r="11.5"
                  stroke="#EDEEF2"
                  strokeWidth="6"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_185_2882"
                  x="0"
                  y="0"
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
                  <feComposite
                    in2="hardAlpha"
                    operator="arithmetic"
                    k2="-1"
                    k3="1"
                  />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.32 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="shape"
                    result="effect1_innerShadow_185_2882"
                  />
                </filter>
              </defs>
            </svg>
          </span>
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
          <Resume />
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
            <div className="grid grid-cols-1 gap-2 md:grid-cols-12">
              <div className="md:col-span-3 md:row-span-6">
                <CurrentlyPlayingBento />
              </div>
              <div className="hidden md:col-span-7 md:row-span-5 md:block">
                <Scrapbook />
              </div>
              <div className="hidden md:col-span-2 md:col-start-11 md:row-span-10 md:block md:min-h-[50px]">
                <CurrentlyReadingBento />
              </div>
              <div className="md:col-span-7 md:row-span-8">
                <ConnectionsBento linkTo="/connections" />
              </div>

              <div className="md:col-span-3 md:row-span-4">
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

function AboutTrackPattern() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const verticalPathRef = useRef<SVGPathElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const [pathLength, setPathLength] = useState(0);
  const [position, setPosition] = useState({ x: 145, y: 0 });

  useEffect(() => {
    if (!pathRef.current && !verticalPathRef.current) return;
    const length =
      pathRef.current?.getTotalLength() ||
      verticalPathRef.current?.getTotalLength() ||
      0;
    setPathLength(length);
  }, []);

  useEffect(() => {
    if ((!pathRef.current && !verticalPathRef.current) || !pathLength) return;

    return scrollYProgress.on("change", (latest) => {
      const clampedProgress = Math.max(0, Math.min(latest, 1));
      if (latest > 0) {
        // Get the active path based on screen size
        const activePath =
          window.innerWidth >= 1024 ? pathRef.current : verticalPathRef.current;
        if (!activePath) return;

        const point = activePath.getPointAtLength(pathLength * clampedProgress);
        setPosition({ x: point.x, y: point.y });
      }
    });
  }, [pathLength, scrollYProgress]);

  return (
    <div ref={containerRef}>
      {/* Vertical SVG for small/medium screens */}
      <svg
        className="user-select-none pointer-events-none block lg:hidden"
        width="20"
        height="2500"
        viewBox="-10 -10 40 2500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="purpleGlowVertical"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.423 0 0 0 0 0.278 0 0 0 0 1 0 0 0 0.6 0"
            />
          </filter>

          <mask id="verticalPathMask">
            <path
              d="M10 0.5L10 2500"
              stroke="white"
              strokeWidth="8"
              strokeLinejoin="round"
              fill="none"
            />
          </mask>
        </defs>

        <g mask="url(#verticalPathMask)">
          <motion.circle
            cx={10}
            cy={position.y}
            r="120"
            fill="#6C47FF"
            filter="url(#purpleGlowVertical)"
            opacity="0.5"
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              mass: 0.5,
            }}
          />
        </g>

        <path
          ref={verticalPathRef}
          d="M10 0.5L10 2500"
          stroke="#D6DADE"
          strokeOpacity="0.24"
          strokeWidth="8"
          strokeLinejoin="round"
        />

        <motion.circle
          className="fill-indigo-600"
          cx={10}
          cy={position.y}
          r="10"
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            mass: 0.5,
          }}
        />
      </svg>

      {/* Original SVG for large screens */}
      <svg
        className="user-select-none pointer-events-none hidden lg:block"
        width="380"
        height="1787"
        viewBox="-10 -10 380 1795"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            id="purpleGlow"
            x="-100%"
            y="-100%"
            width="300%"
            height="300%"
          >
            <feGaussianBlur stdDeviation="15" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="0 0 0 0 0.423
                      0 0 0 0 0.278
                      0 0 0 0 1
                      0 0 0 0.6 0"
            />
          </filter>

          {/* Create a mask using the path */}
          <mask id="pathMask">
            <path
              d="M145 0.49999L145 43C145 51.8365 137.836 59 129 59L19.9999 59C11.1633 59 3.99987 66.1634 3.99987 75L3.99962 515C3.99961 523.837 11.163 531 19.9996 531L256 531C264.836 531 272 538.163 272 547L272 830.373C272 834.616 270.314 838.686 267.314 841.686L78.6861 1030.31C75.6855 1033.31 71.6158 1035 67.3724 1035L19.9996 1035C11.163 1035 3.99959 1042.16 3.99959 1051L3.99963 1471C3.99963 1479.84 11.1631 1487 19.9996 1487L256 1487C264.836 1487 272 1494.16 272 1503L272 1757C272 1765.84 279.163 1773 288 1773L380 1773"
              stroke="white"
              strokeWidth="8"
              strokeLinejoin="round"
              fill="none"
            />
          </mask>

          <filter
            id="filter0_i_395_898"
            x="0"
            y="0.5"
            width="380"
            height="1778"
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
              result="effect1_innerShadow_395_898"
            />
          </filter>
        </defs>

        {/* Container for masked elements */}
        <g mask="url(#pathMask)">
          {/* Glowing circle */}
          <motion.circle
            cx={position.x}
            cy={position.y}
            r="120"
            fill="#6C47FF"
            filter="url(#purpleGlow)"
            opacity="0.5"
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 100,
              mass: 0.5,
            }}
          />
        </g>

        {/* Path on top */}
        <g filter="url(#filter0_i_395_898)">
          <path
            ref={pathRef}
            d="M145 0.49999L145 43C145 51.8365 137.836 59 129 59L19.9999 59C11.1633 59 3.99987 66.1634 3.99987 75L3.99962 515C3.99961 523.837 11.163 531 19.9996 531L256 531C264.836 531 272 538.163 272 547L272 830.373C272 834.616 270.314 838.686 267.314 841.686L78.6861 1030.31C75.6855 1033.31 71.6158 1035 67.3724 1035L19.9996 1035C11.163 1035 3.99959 1042.16 3.99959 1051L3.99963 1471C3.99963 1479.84 11.1631 1487 19.9996 1487L256 1487C264.836 1487 272 1494.16 272 1503L272 1757C272 1765.84 279.163 1773 288 1773L380 1773"
            stroke="#D6DADE"
            strokeOpacity="0.24"
            strokeWidth="8"
            strokeLinejoin="round"
          />
        </g>

        {/* Main circle on top */}
        <motion.circle
          className="fill-indigo-600"
          cx={position.x}
          cy={position.y}
          r="10"
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            mass: 0.5,
          }}
        />
      </svg>
    </div>
  );
}
