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
        link: "https:",
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
          <PageTitle title="I present on web development at conferences globally and across the web." />
        </div>
        <span className="absolute top-40 inset-x-0">
          <HorizontalLine />
        </span>

        <div className="text-center">
          <Button
            label="Have me speak at your event"
            clicked={() => {
              console.log("Clicked");
            }}
          />
        </div>

        {/* <div className="absolute top-0 inset-0">
          <svg
            viewBox="0 0 1440 379"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M1447.63 88.9956L1222.5 88.9951M-1.37466 88.9957L381.999 88.9957M1222.5 88.9951L1201.97 109.527C1200.47 111.027 1199.63 113.062 1199.63 115.184L1199.63 192.685M1222.5 88.9951L537 88.9952M157.375 339.245L93.6254 339.245L-2.37464 339.245M157.375 339.245L287.687 339.245C289.808 339.245 291.843 338.402 293.343 336.902L311.578 318.667C313.051 317.194 313.891 315.205 313.92 313.122L315.387 207.857C315.449 203.395 311.85 199.745 307.388 199.745L118.125 199.745M157.375 339.245L157.375 242.309C157.375 240.187 156.533 238.152 155.032 236.652L118.125 199.745M118.125 199.745L-2.37465 199.745M1447.63 273.5L1280.44 273.5M1199.63 192.685L1272.44 192.685C1276.86 192.685 1280.44 196.267 1280.44 200.685L1280.44 273.5M1199.63 192.685L1199.63 265.5C1199.63 269.918 1203.21 273.5 1207.63 273.5L1280.44 273.5M1280.44 273.5L1280.44 379M1121.38 35.5581L1121.38 61.8701C1121.38 66.2884 1117.79 69.8701 1113.38 69.8701L1060.75 69.8702C1056.33 69.8702 1052.75 66.2884 1052.75 61.8702L1052.75 35.5581L1052.75 9.24808C1052.75 4.8298 1056.33 1.24808 1060.75 1.24808L1113.38 1.24808C1117.79 1.24808 1121.38 4.8298 1121.38 9.24808L1121.38 35.5581ZM389.999 70.9957L529 70.9957C533.419 70.9957 537 74.5774 537 78.9957L537 98.9957C537 103.414 533.419 106.996 529 106.996L389.999 106.996C385.581 106.996 381.999 103.414 381.999 98.9957L381.999 78.9957C381.999 74.5774 385.581 70.9957 389.999 70.9957Z"
              stroke="#A5AEB8"
            />
          </svg>
        </div> */}

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
                            <Button label={talk.buttonLabel} />
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
          <section className="relative">
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
                <div className="flex space-x-4">
                  <Button label="First person" />
                  <Button label="Third person" />
                </div>
                <div className="w-full h-px bg-[#A5AEB81F]/50 rounded-full"></div>
                <div>
                  <p className="text-base text-text-secondary mb-6 leading-7">
                    Braydon Coyer is a Frontend Engineer at LogicGate where he
                    helps build a GRC automated platform. He is a creative
                    developer, a blogger and a designer. His mission is to
                    translate user-focussed designs into pixel-perfect websites
                    or applications that run blazing fast. He lives in Texas
                    with his wife and two daughters.
                  </p>
                </div>
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
        <span className="absolute bottom-6 left-8">
          <svg
            width="24"
            height="14"
            viewBox="0 0 24 14"
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
        <span className="absolute bottom-6 right-8">
          <svg
            width="24"
            height="8"
            viewBox="0 0 24 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_i_185_3210)">
              <rect width="24" height="8" rx="1" fill="#EDEEF2" />
            </g>
            <defs>
              <filter
                id="filter0_i_185_3210"
                x="0"
                y="0"
                width="24"
                height="9.5"
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
                  result="effect1_innerShadow_185_3210"
                />
              </filter>
            </defs>
          </svg>
        </span>
      </div>
    </div>
  );
}
