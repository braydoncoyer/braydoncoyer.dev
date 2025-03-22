import { ShadowBox } from "@/app/components/ShadowBox";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { Button } from "@/app/components/Button";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@/app/components/Tabs";
import { Photo } from "@/app/components/Photo";
import { GridWrapper } from "@/app/components/GridWrapper";
import { AnimatedMobilePhotos } from "@/app/components/AnimatedMobilePhotos";

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
        conference: "Commit Your Code",
        title: "What's New in Tailwind CSS v4?",
        description:
          "Tailwind CSS v4 brings numerous enhancements to the developer experience. In this session, we'll explore the key changes and new features to help you prepare for the official release of v4.",
        link: "https://www.youtube.com/live/Ils_dA_fHmY?si=Jk-2MDczcxbE95La&t=15711",
        buttonLabel: "Watch Video",
      },
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
        link: "https://www.youtube.com/watch?v=VS01DHSnGV0&t",
        buttonLabel: "Watch Video",
      },
      {
        conference: "Dallas Software Developer Meetup",
        title:
          "The Nest Big Thing in CSS: An Introduction to Native Class Nesting",
        description:
          "Let's explore native class nesting in CSS! We'll cover the fundamentals of nesting, its benefits, and browser support.",
        link: "https://www.youtube.com/watch?v=4lNEn9bY-GE",
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
        conference: "Twitter",
        title: "CSS Grid vs Flexbox",
        description:
          "An online discussion on Twitter with experts in the web development sphere on all things Flexbox and Grid and when to use each tool.",
      },
      {
        conference: "Internal Company Lighting Talk",
        title:
          "Reactivity Without the Headache - An Introduction to Angular Signals",
        description:
          "Learn how Angular Signals introduce a new reactive way to track state across your application. We'll refactor real code to use this new reactive pattern to simplify and minimize the codebase.",
      },
      {
        conference: "Twitter",
        title: "FullStack <development /> Chat",
        description:
          "I was invited by a Shashi Lo to be a speaker on his Twitter Space discussing Fullstack development.",
        link: "https://x.com/shashiwhocodes/status/1620965070183305216",
        buttonLabel: "Listen now",
      },
      {
        conference: "Dallas Software Developer Meetup",
        title: "Application Confidence - An Introduction to Testing React",
        description:
          "An introducing to testing React Applications with the React Testing Library!",
        link: "https://youtu.be/65wXOrmIOK4?si=MURD5_RbieH4Gtnu&t=3695",
        buttonLabel: "Watch now",
      },
    ],
  },
  podcasts: {
    title: "Podcasts & Videos",
    talks: [
      {
        conference: "Guidance Counselor 2.0",
        title:
          "GC 2.0 w/Taylor Desseyn and Navigating 800 Submissions to Fulltime Job",
        description:
          "Taylor had me on his podcasts to help encourage job seekers by talking about my experience landing my first time web development job.",
        link: "https://x.com/tdesseyn/status/1648331656749813760",
        buttonLabel: "Listen now",
      },
    ],
  },
};

export default function SpeakingPage() {
  return (
    <div className="relative">
      <title>Speaking | Braydon Coyer</title>
      <div className="relative space-y-16">
        <GridWrapper>
          <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
            My conference talks, podcast && video appearances.
          </h1>
        </GridWrapper>

        <div className="text-center">
          <GridWrapper className="py-4">
            <Button
              variant="primary"
              href="https://forms.gle/hyhqN12A2BGForzq6"
            >
              Invite me to speak
            </Button>
          </GridWrapper>
        </div>

        <div>
          {/* Photos */}
          <div className="mb-8 mt-16 hidden items-center justify-center space-x-12 lg:flex">
            <div className="relative">
              <ShadowBox width={278} height={278}></ShadowBox>
              <span className="absolute left-1 top-2 rotate-[-8deg]">
                <Photo
                  width={270}
                  height={270}
                  src="/c3_speaker_head.png"
                  alt="DoorDash hitting it's millionth total order back in 2015."
                  direction="right"
                />
              </span>
            </div>

            <div className="relative">
              <ShadowBox width={412} height={278}></ShadowBox>
              <span className="absolute left-1 top-1 rotate-[8deg]">
                <Photo
                  width={404}
                  height={270}
                  src="/braydon_commit_your_code.jpeg"
                  alt="DoorDash hitting it's millionth total order back in 2015."
                  direction="left"
                />
              </span>
            </div>

            <div className="relative">
              <ShadowBox width={188} height={278}></ShadowBox>
              <span className="absolute left-1 top-1 rotate-[-8deg]">
                <Photo
                  width={180}
                  height={270}
                  src="/braydon_speaking_head_3.jpeg"
                  alt="DoorDash hitting it's millionth total order back in 2015."
                  direction="right"
                />
              </span>
            </div>
          </div>
          {/* Mobile Photos */}
          <AnimatedMobilePhotos delay={0.1} />
        </div>

        <div className="relative space-y-32">
          {/* Talks list */}
          <section className="space-y-16">
            {Object.entries(presentationList).map(([key, category]) => (
              <GridWrapper key={key} className="py-4">
                <div>
                  <div className="grid h-auto grid-cols-1 text-balance pt-16 lg:grid-cols-12">
                    <h2 className="mb-16 text-balance text-3xl font-semibold leading-10 lg:col-span-2 lg:mb-0 lg:text-right">
                      {category.title}
                    </h2>
                    <div className="col-span-2 hidden h-auto justify-center lg:flex">
                      <svg
                        className="h-full w-2"
                        viewBox="0 0 8 100"
                        preserveAspectRatio="none"
                      >
                        <g filter="url(#filter0_i_185_3294)">
                          <path
                            d="M4 4L4 96"
                            stroke="#D6DADE"
                            strokeOpacity="0.24"
                            strokeWidth="8"
                            strokeLinecap="round"
                            vectorEffect="non-scaling-stroke"
                          />
                        </g>
                        <defs>
                          <filter
                            id="filter0_i_185_3294"
                            x="0"
                            y="0"
                            width="8"
                            height="100%"
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
                            <feOffset dy="1" />
                            <feGaussianBlur stdDeviation="0.5" />
                            <feComposite
                              in2="hardAlpha"
                              operator="arithmetic"
                              k2="-1"
                              k3="1"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0.847059 0 0 0 0 0.882353 0 0 0 0 0.921569 0 0 0 0.32 0"
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
                    <div className="flex flex-col space-y-14 text-left lg:col-span-8 lg:col-start-5">
                      {category.talks.map((talk, index) => (
                        <div key={index}>
                          <h3 className="mb-2 text-lg font-semibold">
                            {talk.title}
                          </h3>
                          <p className="mb-6 text-xs text-text-secondary">
                            {talk.conference}
                          </p>
                          <p className="mb-6 text-base leading-7 text-text-secondary">
                            {talk.description}
                          </p>
                          {talk.link && talk.buttonLabel && (
                            <a
                              className="flex items-center text-sm font-medium text-indigo-600"
                              href={talk.link}
                            >
                              {talk.buttonLabel}
                              <svg
                                className="relative ml-2.5 mt-px overflow-visible"
                                width="3"
                                height="6"
                                viewBox="0 0 3 6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M0 0L3 3L0 6"></path>
                              </svg>
                            </a>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </GridWrapper>
            ))}
          </section>

          {/* Biography */}
          <section className="relative px-4">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="relative col-span-7 flex flex-col space-y-8">
                {/* Title */}
                <div className="col-span-5 flex w-3/4 flex-col items-start space-y-3 text-balance">
                  <div className="text-left text-sm font-medium text-indigo-600">
                    <span>Biography</span>
                  </div>
                  <h2 className="text-3xl font-semibold text-text-primary">
                    Here are a few options for speaker bios
                  </h2>
                </div>

                <Tabs defaultTab="first-person">
                  <TabList>
                    <Tab id="first-person" label="First person" />
                    <Tab id="third-person" label="Third person" />
                  </TabList>
                  <TabPanels className="mt-8">
                    <TabPanel id="first-person">
                      <p className="text-base leading-7 text-text-secondary">
                        I am Braydon Coyer, a Senior Frontend Engineer at
                        LogicGate, where I play a key role in developing an
                        automated Governance, Risk, and Compliance (GRC)
                        platform. As a creative developer, blogger, and
                        designer, I enjoy tinkering and sharing my projects with
                        the public. I live in Texas with my wife and two
                        daughters.
                      </p>
                    </TabPanel>
                    <TabPanel id="third-person">
                      <p className="text-base leading-7 text-text-secondary">
                        Braydon Coyer is a Senior Frontend Engineer at
                        LogicGate, where he plays a key role in developing an
                        automated Governance, Risk, and Compliance (GRC)
                        platform. As a creative developer, blogger, and
                        designer, he enjoys tinkering and sharing his projects
                        with the public. Braydon lives in Texas with his wife
                        and two daughters.
                      </p>
                    </TabPanel>
                  </TabPanels>
                </Tabs>

                <span className="absolute left-3/4 top-12 rounded-lg border border-border-primary/50 p-2">
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
              <div className="col-span-5 flex flex-col items-start space-y-8">
                <div className="flex flex-col items-start space-y-4">
                  <div className="text-left text-sm font-medium text-indigo-600">
                    <span>Headshots</span>
                  </div>
                  <h2 className="text-3xl font-semibold text-text-primary">
                    A variety of photos great for speaker headshots
                  </h2>
                </div>
                <div className="mt-12 flex w-full space-x-4">
                  <div className="relative">
                    <ShadowBox width={200} height={200}></ShadowBox>
                    <img
                      className="absolute left-1 top-2 h-[186px] w-[186px] rotate-[9deg] rounded-lg object-cover shadow"
                      src="/braydon_headshot_1.jpeg"
                      alt=""
                    />
                  </div>

                  <div className="relative">
                    <ShadowBox width={200} height={200}></ShadowBox>
                    <img
                      className="absolute left-1 top-2 h-[186px] w-[186px] rotate-[-8deg] rounded-lg object-cover shadow"
                      src="/braydon_speaking_photo_square.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}
