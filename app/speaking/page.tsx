import { ShadowBox } from "@/app/components/ShadowBox";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { Button } from "@/app/components/Button";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@/app/components/Tabs";
import { Photo } from "@/app/components/Photo";
import { GridWrapper } from "@/app/components/GridWrapper";
import { AnimatedMobilePhotos } from "@/app/components/AnimatedMobilePhotos";
import { PageSection } from "../components/PageSection";
import { ContentLink } from "../components/ContentLink";
import { VideoCard } from "../components/VideoCard";

interface Talk {
  title: string;
  description: string;
  event: string;
  url?: string;
}

const talksAndPresentations: Talk[] = [
  {
    title: "Behind the Scenes of Tailwind CSS",
    description:
      "Ever peeked into Tailwind's source code? You'll see exactly how thousands of utility classes get generated, the purging techniques that scan your templates to slash bundle sizes, and how JIT compilation delivers unlimited arbitrary values without tanking performance.",
    event: "Stir Trek 2025",
  },
  {
    title: "What's New in Tailwind CSS v4?",
    description:
      "Tailwind CSS v4 brings numerous enhancements to the developer experience. In this session, we'll explore the key changes and new features to help you prepare for the official release of v4.",
    event: "Commit Your Code Conference",
    url: "https://www.youtube.com/live/Ils_dA_fHmY?si=Jk-2MDczcxbE95La&t=15711",
  },
  {
    title: "The Power of a Second Brain in a Developer's Workflow",
    description:
      "Instead of using AI to solve a problem and forgetting the solution moments later, use a Second Brain to enhance memory retention and discover related information in context of your past experiences. ",
    event: "C3 Dev Fest",
    url: "https://gitnation.com/contents/the-power-of-a-second-brain-in-a-developers-workflow",
  },
  {
    title: "Choosing Blog Topics and Boosting Content with SEO",
    description:
      "Learn the art of selecting high-traffic article topics and mastering effective writing and formatting techniques to maximize engagement and readership.",
    event: "THAT Conference",
    url: "https://www.youtube.com/watch?v=VS01DHSnGV0&t",
  },
  {
    title: "The Nest Big Thing in CSS: An Introduction to Native Class Nesting",
    description:
      "Let's explore native class nesting in CSS! We'll cover the fundamentals of nesting, its benefits, and browser support.",
    event: "Dallas Software Developer Meetup",
    url: "https://www.youtube.com/watch?v=4lNEn9bY-GE",
  },
  {
    title:
      "Reactivity Without the Headache - An Introduction to Angular Signals",
    description:
      "Learn how Angular Signals introduce a new reactive way to track state across your application. We'll refactor real code to use this new reactive pattern to simplify and minimize the codebase.",
    event: "Lunch & Learn",
  },
  {
    title: "Application Confidence - An Introduction to Testing React",
    description:
      "An introducing to testing React Applications with the React Testing Library!",
    event: "Dallas Software Developer Meetup",
  },
  {
    title: "Live Link Previews with Next.js",
    description:
      "Learn how to display a preview of an externally linked site in your Next.js application!",
    event: "Dallas Software Developer Meetup",
  },
  {
    title: "FullStack <development /> Chat",
    description:
      "I was invited by a Shashi Lo to be a speaker on his Twitter Space discussing Fullstack development.",
    event: "Twitter Space",
    url: "https://x.com/shashiwhocodes/status/1620965070183305216",
  },
];

export default function SpeakingPage() {
  return (
    <div className="relative">
      <title>Speaking | Braydon Coyer</title>
      <div className="relative space-y-16">
        <GridWrapper>
          <h1 className="max-w-3/5 mx-auto mt-16 text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
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
                  src="/braydon_stir_trek.jpeg"
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
          <div className="space-y-16">
            <PageSection title={<h2>Talks && Presentations</h2>}>
              <p className="text-sm/8 text-text-primary">
                An arrangement of live and virtual conference and meetup
                presentations.
              </p>
              <div className="mt-8 max-w-2xl space-y-10 text-balance">
                {talksAndPresentations.map((talk) => (
                  <ContentLink
                    key={talk.title}
                    title={talk.title}
                    description={talk.description}
                    href={talk.url}
                  />
                ))}
              </div>
            </PageSection>

            <PageSection title={<h2>Videos && Podcasts</h2>}>
              <p className="text-sm/8 text-text-primary">
                A combination of podcast recordings and educational videos.
              </p>
              <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                <VideoCard
                  title="Build a Devious Web Video Player in 4 Hours"
                  subtitle="Web Dev Challenge"
                  url="https://youtu.be/bF32laUxoK0?si=UW3OGEQ4dYVSzhBV"
                  target="_blank"
                  thumbnailUrl="/web_dev_challenge.jpeg"
                  duration={2108}
                />
                <VideoCard
                  title="Homeless to Software Developer! TailwindCSS Usage and Best Practices!"
                  subtitle="Commit Your Code: Ep9"
                  url="https://youtu.be/eQsedvVk9sE?si=11dVYMIoHl-R85o4"
                  target="_blank"
                  thumbnailUrl="/commit_your_code_ep_9.jpeg"
                  duration={2731}
                />
              </div>
            </PageSection>
          </div>

          {/* Biography */}
          <GridWrapper>
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
                          designer, I enjoy tinkering and sharing my projects
                          with the public. I live in Texas with my wife and two
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
                        src="/braydon_headshot_3.jpg"
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
          </GridWrapper>
        </div>

        {/* Newsletter */}
        <NewsletterSignUp />
      </div>
    </div>
  );
}
