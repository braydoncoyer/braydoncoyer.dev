"use client";
import Image from "next/image";
import { ShadowBox } from "app/components/ShadowBox";
import { BorderCard } from "app/components/BorderCard";
import { SectionTitlePill } from "app/components/SectionTitlePill";
import { NewsletterSignUp } from "app/components/NewsletterSignUp";
import { PageTitle } from "app/components/PageTitle";
import { hardwareData, softwareData } from "app/data/toolbox";
import { HorizontalLine } from "app/components/HorizontalLine";
import { BgSectionTag, TagType } from "app/components/BgSectionTag";
import { BgGradient } from "app/components/BgGradient";
import { Button } from "app/components/Button";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "app/components/Tabs";

type Talk = {
  conference: string;
  title: string;
  description: string;
  link?: string;
  buttonLabel?: string;
};

type EventCategory = {
  title: string;
  talks: Talk[];
};

type PresentationList = {
  live: EventCategory;
  virtual: EventCategory;
  podcasts: EventCategory;
};

const presentationList: PresentationList = {
  live: {
    title: "Live Talks",
    talks: [
      {
        conference: "C3 Dev Fest",
        title: "The Power of a Second Brain in a Developer's Workflow",
        description:
          "Instead of using AI to solve a problem and forgetting the solution moments later, use a Second Brain to enhance memory retention and discover related information in context of your past experiences. ",
        link: "https://gitnation.com/contents/the-power-of-a-second-brain-in-a-developers-workflow",
        buttonLabel: "Watch Video",
      },
      {
        conference: "THAT Conference",
        title: "Choosing Blog Topics and Boosting Content with SEO",
        description:
          "Learn the art of selecting high-traffic article topics and mastering effective writing and formatting techniques to maximize engagement and readership.",
        link: "https:",
        buttonLabel: "Watch Video",
      },
      {
        conference: "Dallas Software Developer Meetup",
        title:
          "The Nest Big Thing in CSS: An Introduction to Native Class Nesting",
        description:
          "Let's explore native class nesting in CSS! We'll cover the fundamentals of nesting, its benefits, and browser support.",
        link: "https:",
        buttonLabel: "Watch Video",
      },
      {
        conference: "Dallas Software Developer Meetup",
        title: "Live Link Previews with Next.js",
        description:
          "Learn how to display a preview of an externally linked site in your Next.js application!",
      },
    ],
  },
  virtual: {
    title: "Virtual Events",
    talks: [
      {
        conference: "THAT Conference",
        title: "Choosing Blog Topics and Boosting Content with SEO",
        description:
          "Learn the art of selecting high-traffic article topics and mastering effective writing and formatting techniques to maximize engagement and readership.",
        link: "https:",
        buttonLabel: "Watch Video",
      },
      {
        conference: "Dallas Software Developer Meetup",
        title:
          "The Nest Big Thing in CSS: An Introduction to Native Class Nesting",
        description:
          "Let's explore native class nesting in CSS! We'll cover the fundamentals of nesting, its benefits, and browser support.",
        link: "https:",
        buttonLabel: "Watch Video",
      },
      {
        conference: "Dallas Software Developer Meetup",
        title: "Live Link Previews with Next.js",
        description:
          "Learn how to display a preview of an externally linked site in your Next.js application!",
      },
    ],
  },
  podcasts: {
    title: "Podcasts & Videos",
    talks: [
      {
        conference: "THAT Conference",
        title: "Choosing Blog Topics and Boosting Content with SEO",
        description:
          "Learn the art of selecting high-traffic article topics and mastering effective writing and formatting techniques to maximize engagement and readership.",
        link: "https:",
        buttonLabel: "Watch Video",
      },
    ],
  },
};

export default function SpeakingPage() {
  return (
    <div className="relative">
      <div className="space-y-[80px] relative">
        <span className="absolute -right-[120px] top-[260px] z-10">
          <BgSectionTag tagType={TagType.SECTION} />
        </span>
        <div>
          <PageTitle title="I present on web development at conferences globally && across the web." />
        </div>
        <span className="absolute top-40 inset-x-0">
          <HorizontalLine />
        </span>

        <div className="text-center">
          <Button>Have me speak at your event</Button>
        </div>

        <div className="space-y-32 relative">
          <span className="absolute left-0 top-[400px]">
            <svg
              width="89"
              height="27"
              viewBox="0 0 89 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M80 1C84.4183 1 88 4.58172 88 9V18C88 22.4183 84.4183 26 80 26L9 26C4.58172 26 0.999998 22.4183 0.999998 18V9C0.999998 4.58172 4.58172 1 9 1L80 1Z"
                stroke="#D6DADE"
              />
              <g filter="url(#filter0_i_0_1)">
                <rect
                  x="58"
                  y="7"
                  width="24"
                  height="7"
                  rx="1"
                  fill="#EDEEF2"
                />
              </g>
              <defs>
                <filter
                  id="filter0_i_0_1"
                  x="58"
                  y="7"
                  width="24"
                  height="8.5"
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
                    result="effect1_innerShadow_0_1"
                  />
                </filter>
              </defs>
            </svg>
          </span>
          {/* Talks list */}
          <section className="space-y-16">
            {Object.entries(presentationList).map(([key, category]) => (
              <>
                <div
                  className="grid grid-cols-12 text-balance h-auto pt-16"
                  key={key}
                >
                  <h2 className="text-3xl text-right font-semibold leading-10 col-span-2">
                    {category.title}
                  </h2>
                  <div className="col-span-2 h-auto flex justify-center">
                    <svg className="w-2 h-full">
                      <g filter="url(#filter0_i_185_3294)">
                        <path
                          d="M4 4L4.00002 1000"
                          stroke="#D6DADE"
                          strokeOpacity="0.24"
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <filter
                          className="h-full w-2"
                          id="filter0_i_185_3294"
                          x="0"
                          y="0"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
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
                            result="effect1_innerShadow_185_3294"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="col-span-8 col-start-5 flex flex-col space-y-14 text-left">
                    {category.talks.map((talk, index) => (
                      <div key={index}>
                        <h3 className="text-base font-semibold mb-4">
                          {talk.title}
                        </h3>
                        <p className="text-base font-semibold text-text-secondary mb-6">
                          {talk.conference}
                        </p>
                        <p className="text-base text-text-secondary mb-6 leading-7">
                          {talk.description}
                        </p>
                        {talk.link && talk.buttonLabel && (
                          <a
                            href={talk.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {/* Extra focus is applied due to the anchor tag. Come back and fix this. */}
                            <Button variant="secondary" href={talk.link}>
                              {talk.buttonLabel}
                            </Button>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
                <HorizontalLine />
              </>
            ))}
          </section>

          {/* Biography */}
          <section className="relative px-4">
            <span className="absolute -left-[120px] top-[-85px] z-10">
              <BgSectionTag tagType={TagType.SECTION} />
            </span>
            <div className="grid grid-cols-12 gap-12">
              <div className="col-span-7 flex flex-col space-y-8 relative">
                {/* Title */}
                <div className="col-span-5 flex flex-col items-start space-y-3 w-3/4 text-balance">
                  <SectionTitlePill title="Biography" />
                  <h2 className="text-3xl font-semibold text-text-primary">
                    Here are a few speaker biography options
                  </h2>
                </div>

                <Tabs defaultTab="first-person">
                  <TabList>
                    <Tab id="first-person" label="First person" />
                    <Tab id="third-person" label="Third person" />
                  </TabList>
                  <TabPanels className="mt-8">
                    <TabPanel id="first-person">
                      <p className="text-base text-text-secondary leading-7">
                        I&apos;m a Frontend Engineer at LogicGate where I help
                        build a GRC automated platform. I&apos;m a creative
                        developer, blogger and designer. My mission is to
                        translate user-focussed designs into pixel-perfect
                        websites or applications that run blazing fast. I live
                        in Texas with my wife and two daughters.
                      </p>
                    </TabPanel>
                    <TabPanel id="third-person">
                      <p className="text-base text-text-secondary leading-7">
                        Braydon Coyer is a Frontend Engineer at LogicGate where
                        he helps build a GRC automated platform. He is a
                        creative developer, a blogger and a designer. His
                        mission is to translate user-focussed designs into
                        pixel-perfect websites or applications that run blazing
                        fast. He lives in Texas with his wife and two daughters.
                      </p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>

                <span className="absolute left-3/4 top-12 border p-2 rounded-lg border-border-primary/50">
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
              <div className="col-span-5 flex flex-col space-y-8 items-start">
                <div className="flex flex-col space-y-4 items-start">
                  <SectionTitlePill title="Headshots" />
                  <h2 className="text-3xl font-semibold text-text-primary">
                    A collection of photos suitable for speaker headshots
                  </h2>
                </div>
                <div className="flex w-full space-x-4 mt-12">
                  <div className="relative">
                    <ShadowBox width={200} height={200}></ShadowBox>
                    <img
                      className="w-[186px] h-[186px] rounded-lg object-cover absolute top-2 left-1 rotate-[9deg] shadow"
                      src="/braydon_headshot_1.jpeg"
                      alt=""
                    />
                  </div>

                  <div className="relative">
                    <ShadowBox width={200} height={200}></ShadowBox>
                    <img
                      className="w-[186px] h-[186px] rounded-lg object-cover absolute top-2 left-1 rotate-[-8deg] shadow"
                      src="/braydon_headshot_2.jpeg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-24 relative">
              <HorizontalLine />
            </div>
          </section>
        </div>

        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}
