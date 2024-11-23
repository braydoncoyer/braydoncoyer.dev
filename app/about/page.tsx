"use client";

import { SectionTitlePill } from "app/components/SectionTitlePill";
import { NewsletterSignUp } from "app/components/NewsletterSignUp";
import { HorizontalLine } from "app/components/HorizontalLine";
import { BgSectionTag, TagType } from "app/components/BgSectionTag";
import { getTimeOfDayGreeting } from "app/lib/utils";
import { ProfilePicture } from "../components/ProfilePicture";
import React, { useEffect, useRef, useState } from "react";
import { CurrentlyPlayingBento } from "../components/CurrentlyPlayingBento";
import { ConnectionsBento } from "../components/ConnectionsBento";
import { ToolboxBento } from "../components/ToolboxBento";
import { CalendarBento } from "../components/CalendarBento";
import { BentoCard } from "../components/BentoCard";
import { Scrapbook } from "../components/Scrapbook";
import { ShadowBox } from "../components/ShadowBox";
import { useScroll, useTransform, motion } from "framer-motion";

const experienceList = [
  {
    company: "LogicGate",
    positions: [
      {
        title: "Frontend Developer III",
        description: (
          <div>
            <p>
              I lead feature development on my team by analyzing requirements,
              designing solutions, and helping to advance the frontend chapter
              of our organization.
            </p>
          </div>
        ),
        date: "2023 - Present",
      },
      {
        title: "Frontend Developer II",
        description: (
          <div className="space-y-4">
            <p>
              I joined LogicGate and quickly took charge of feature development
              for my team, while also assisting other frontend developers in the
              organization.
            </p>
          </div>
        ),
        date: "2022 - 2023",
      },
    ],
  },
  {
    company: "Cognizant",
    positions: [
      {
        title: "Senior Fullstack Developer",
        description: (
          <div className="space-y-4">
            <p>
              I designed and developed full-stack RESTful microservices using
              Netflix OSS, Java, Spring Boot, SQL, Angular, React, and Vue.
            </p>
            <p>
              I led development teams, utilizing extreme programming principles
              such as agile, test-driven development, and paired programming.
            </p>
            <p>
              I spearheaded the information architecture and developed a
              reusable UI component library for healthcare clients.
            </p>
            <p>
              I led over 650 developers through a monthly enablement process,
              training them for client work on the Digital Engineering stack.
            </p>
          </div>
        ),
        date: "2019 - 2021",
      },
    ],
  },
  {
    company: "projekt202",
    positions: [
      {
        title: "UI Developer",
        description: (
          <div className="space-y-4">
            <p>
              I assisted in developing a reusable UI component library and
              worked closely with a multi-million dollar airline client to
              gather requirements.
            </p>
            <p>
              My responsibility included developing solutions for enterprise
              clients worth millions of dollars, using Angular 7 for the
              frontend.
            </p>
          </div>
        ),
        date: "2018 - 2019",
      },
    ],
  },
  {
    company: "Major 4 Apps",
    positions: [
      {
        title: "Founder & Developer",
        description: (
          <div className="space-y-4">
            <p>
              I developed custom applications for clients, designed, developed,
              tested, and supported mobile applications on iOS and Android
              platforms.
            </p>
            <p>
              My mobile game ranked among the top 200 on the Amazon App Store.
            </p>
            <p>
              Additionally, my mobile game was featured in the top 20 GameSalad
              games on the Tizen App Store.
            </p>
            <p>
              Furthermore, my mobile games were featured as &quot;New and
              Noteworthy&quot; in the iOS App Store.
            </p>
          </div>
        ),
        date: "2011 - 2018",
      },
    ],
  },
];

export default function ToolboxPage() {
  const timeOfDayGreeting = getTimeOfDayGreeting();

  return (
    <div className="relative">
      <span className="absolute top-20 -translate-y-1/2 left-1/2 translate-x-1/2">
        <HorizontalLine />
      </span>
      <span className="absolute left-32 top-6 border p-2 rounded-lg border-border-primary/50">
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
      <span className="absolute right-4 top-14">
        <BgSectionTag width={250} tagType={TagType.TOOLBOX} />
      </span>
      <div className="space-y-[80px] relative">
        {/* Title */}
        <div className="pt-[90px] flex justify-around items-center">
          <div className="max-w-3xl">
            <h1
              className="text-text-primary text-balance font-medium text-6xl leading-[64px]
            tracking-tighter"
            >
              {timeOfDayGreeting} <br />
              I&apos;m Braydon, an experienced frontend developer.
            </h1>
          </div>
          <div className="flex-shrink-0 ml-8">
            <ProfilePicture />
          </div>
        </div>

        <span className="absolute top-40 -translate-y-1/2 left-1/2 translate-x-1/2">
          <HorizontalLine />
        </span>

        {/* About */}
        <div className="relative text-center space-y-8">
          <SectionTitlePill title="About" />
          <div className="max-w-3xl mx-auto">
            <h2
              className="w-full text-text-primary text-balance font-medium text-3xl leading-[40px]
            tracking-tighter"
            >
              Hey there! Let me quickly tell you about myself and what I enjoy
              doing.
            </h2>
          </div>
          <div className="relative overflow-hidden w-full h-[2000px]">
            <div className="absolute top-0 left-[455px] w-full">
              <AboutTrackPattern />
            </div>
            {/* Section 1 */}
            <div className="flex w-full px-14 pt-32 relative">
              <HorizontalLine />
              <div className="flex-1 mt-6">
                <div className="flex justify-start items-center">
                  <div className="relative w-fit ml-20">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="w-[180px] h-[270px] absolute left-0 top-0 rotate-[-8deg] object-cover rounded-lg shadow"
                      src="/braydon_headshot_1.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
              </div>
              <div className="text-left flex-1 mt-6">
                <h2
                  className="w-full text-text-primary text-balance font-medium text-3xl leading-[40px]
            tracking-tighter mb-6"
                >
                  I started my creative journey developing apps for iOS and
                  Android
                </h2>
                <p className="text-base text-text-secondary mb-6 leading-8">
                  When the iPad was launched in 2010, I felt a strong desire to
                  create interactive content for its stunning 1024x768 screen.
                </p>

                <p className="text-base text-text-secondary mb-6 leading-8">
                  I delved into mobile development and successfully released
                  numerous games and applications, with one of my games even
                  surpassing Angry Birds in popularity.
                </p>
              </div>
              <svg
                className="absolute right-4"
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
            <div className="flex w-full justify-center px-14 pt-44 relative">
              <HorizontalLine />
              <div className="text-left flex-1 mt-6">
                <h2
                  className="w-full text-text-primary text-balance font-medium text-3xl leading-[40px]
            tracking-tighter mb-6"
                >
                  The leap over to web development.
                </h2>
                <p className="text-base text-text-secondary mb-6 leading-8">
                  I decided to explore web development before too long. Given my
                  inclination towards visual expression and design, I naturally
                  gravitated towards frontend development.
                </p>

                <p className="text-base text-text-secondary mb-6 leading-8">
                  So, I started learning HTML, CSS, and JavaScript. In 2016, I
                  got into React. Not long after that, I nailed my first
                  full-time gig as a web developer.
                </p>
              </div>
              <div className="flex-1 mt-6">
                <div className="flex justify-end items-center">
                  <div className="relative w-fit mr-20">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="w-[180px] h-[270px] absolute left-0 top-0 rotate-[8deg] object-cover rounded-lg shadow"
                      src="/braydon_headshot_1.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
              </div>
              <svg
                className="absolute left-4"
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
            <div className="flex w-full justify-center px-14 pt-52 relative">
              <HorizontalLine />
              <div className="flex-1 mt-6">
                <div className="flex justify-start items-center">
                  <div className="relative w-fit ml-20">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="w-[180px] h-[270px] absolute left-0 top-0 rotate-[-8deg] object-cover rounded-lg shadow"
                      src="/braydon_headshot_1.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
              </div>
              <div className="text-left flex-1 mt-6">
                <h2
                  className="w-full text-text-primary text-balance font-medium text-3xl leading-[40px]
            tracking-tighter mb-6"
                >
                  What I truly value in life.
                </h2>
                <p className="text-base text-text-secondary mb-6 leading-8">
                  I believed I had sufficient job security to propose to the
                  love of my life and get married. However, COVID-19 struck, and
                  we had a small yet delightful wedding in 2020.
                </p>

                <p className="text-base text-text-secondary mb-6 leading-8">
                  Our first daughter, ElizaJane, was born in 2021, followed by
                  our second child, Renny, in 2023.
                </p>
              </div>
              <svg
                className="absolute right-4"
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
            <div className="flex w-full justify-center px-14 pt-44 relative">
              <HorizontalLine />
              <div className="text-left flex-1 mt-6">
                <h2
                  className="w-full text-text-primary text-balance font-medium text-3xl leading-[40px]
            tracking-tighter mb-6"
                >
                  What I’m doing now.
                </h2>
                <p className="text-base text-text-secondary mb-6 leading-8">
                  These days, I work for LogicGate as a Senior Frontend
                  Developer, helping lead teams to create some pretty cool
                  stuff.
                </p>

                <p className="text-base text-text-secondary mb-6 leading-8">
                  In my free time, I enjoy creative coding, blogging, playing
                  games with friends and spending time with my family.
                </p>

                <p className="text-base text-text-secondary mb-6 leading-8">
                  Thanks for checking out my corner of the web.
                </p>
              </div>
              <div className="flex-1 mt-6">
                <div className="flex justify-end items-center">
                  <div className="relative w-fit mr-32">
                    <ShadowBox width={188} height={278}></ShadowBox>
                    <img
                      className="w-[180px] h-[270px] absolute left-0 top-0 rotate-[8deg] object-cover rounded-lg shadow"
                      src="/braydon_headshot_1.jpeg"
                      alt="A headshot"
                    />
                  </div>
                </div>
              </div>
              <svg
                className="absolute left-4"
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

          <span className="absolute left-36 -bottom-12 border p-2 rounded-lg border-border-primary/50">
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
        <div className="relative text-center space-y-8">
          <SectionTitlePill title="Experience" />
          <div className="max-w-3xl mx-auto">
            <h2
              className="w-full text-text-primary text-balance font-medium text-3xl leading-[40px]
            tracking-tighter"
            >
              My work history and accomplishments timeline.
            </h2>
          </div>
        </div>
        <div>
          {experienceList.map((experience, index) => (
            <div key={index} className="grid grid-cols-12 gap-6 mb-8">
              <div className="col-span-3 flex justify-center">
                <h3 className="text-2xl font-semibold text-left">
                  {experience.company}
                </h3>
              </div>
              <div className="col-span-2"></div>
              <div className="col-span-7"></div>

              {experience.positions.map((position, posIndex) => (
                <React.Fragment key={posIndex}>
                  <div className="col-span-3 flex justify-center text-left">
                    <span className="text-gray-500">{position.date}</span>
                  </div>
                  <div className="col-span-2"></div>
                  <div className="col-span-7 pr-24">
                    <h4 className="font-medium mb-2">{position.title}</h4>
                    <div className="text-text-secondary leading-7 space-y-4">
                      {position.description}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </div>
          ))}
        </div>

        <section className="space-y-16">
          <div className="space-y-4">
            <SectionTitlePill title="About" />
            <h2 className="mx-auto text-text-primary text-center text-balance font-medium text-3xl tracking-tight max-w-lg leading-10">
              Here&apos;s what sets me apart and makes me unique
            </h2>
          </div>

          {/* About Grid */}
          <HorizontalLine />
          <div className="grid grid-cols-12 grid-rows-auto gap-2">
            <CurrentlyPlayingBento />
            <Scrapbook />

            <ConnectionsBento />
            <BentoCard colSpan={2} rowSpan={8} height="h-[300px]">
              bonus
            </BentoCard>
            <BentoCard colSpan={3} rowSpan={4} height="h-[220px]">
              Stats
            </BentoCard>
          </div>
          {/* <HorizontalLine /> */}
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

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const [pathLength, setPathLength] = useState(0);
  const [position, setPosition] = useState({ x: 145, y: 0 });

  useEffect(() => {
    if (!pathRef.current) return;
    const length = pathRef.current.getTotalLength();
    setPathLength(length);
  }, []);

  useEffect(() => {
    if (!pathRef.current || !pathLength) return;

    return scrollYProgress.on("change", (latest) => {
      const clampedProgress = Math.max(0, Math.min(latest, 1));
      // Only update position when scrolling actually begins (latest > 0)
      if (latest > 0) {
        const point = pathRef.current!.getPointAtLength(
          pathLength * clampedProgress
        );
        setPosition({ x: point.x, y: point.y });
      }
    });
  }, [pathLength, scrollYProgress]);

  return (
    <div ref={containerRef}>
      <svg
        className="user-select-none pointer-events-none"
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
          cx={position.x}
          cy={position.y}
          r="10"
          fill="#6C47FF"
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
