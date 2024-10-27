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
          <div className="relative overflow-hidden w-full h-[1880px]">
            <div className="absolute top-0 left-[455px] w-full">
              <AboutTrackPattern />
            </div>
            {/* Section 1 */}
            <div className="flex w-full justify-center px-14 pt-32">
              <div className="flex-1">
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
              <div className="text-left flex-1">
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
            </div>

            {/* Section 2 */}
            <div className="flex w-full justify-center px-14 pt-44">
              <div className="text-left flex-1">
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
              <div className="flex-1">
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
            </div>

            {/* Section 3 */}
            <div className="flex w-full justify-center px-14 pt-52">
              <div className="flex-1">
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
              <div className="text-left flex-1">
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
            </div>

            {/* Section 4 */}
            <div className="flex w-full justify-center px-14 pt-44">
              <div className="text-left flex-1">
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
              <div className="flex-1">
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
            </div>
          </div>
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
