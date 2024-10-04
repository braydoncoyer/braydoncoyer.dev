import { SectionTitlePill } from "app/components/SectionTitlePill";
import { NewsletterSignUp } from "app/components/NewsletterSignUp";
import { HorizontalLine } from "app/components/HorizontalLine";
import { BgSectionTag, TagType } from "app/components/BgSectionTag";
import { getTimeOfDayGreeting } from "app/lib/utils";
import { ProfilePicture } from "../components/ProfilePicture";
import React from "react";
import { CurrentlyPlayingBento } from "../components/CurrentlyPlayingBento";
import { ConnectionsBento } from "../components/ConnectionsBento";
import { ToolboxBento } from "../components/ToolboxBento";
import { CalendarBento } from "../components/CalendarBento";
import { BentoCard } from "../components/BentoCard";
import { Scrapbook } from "../components/Scrapbook";

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
