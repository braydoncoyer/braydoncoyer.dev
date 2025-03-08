import { ResumeData } from "../lib/resume/types";
import { Timeline } from "./Timeline";

const resumeData: ResumeData = {
  experiences: [
    {
      company: "LogicGate",
      period: "2022 - Present",
      positions: [
        {
          title: "Frontend Developer III",
          description: [
            "I lead feature development on a team by analyzing requirements, designing solutions, and assist in evolving the frontend chapter of our organization.",
          ],
        },
        {
          title: "Frontend Developer II",
          description: [
            "I joined LogicGate and immediately took charge of feature development on my team while also assisting other frontend developers in the organization.",
          ],
        },
      ],
    },
    {
      company: "Cognizant",
      period: "2019 - 2021",
      positions: [
        {
          title: "Senior Fullstack Developer",
          description: [
            "I designed and developed full-stack RESTful microservices using Netflix OSS, Java, Spring Boot, SQL, Angular, React, and Vue.",
            "I led development teams, utilizing extreme programming principles such as agile, test-driven development, and paired programming.",
            "I spearheaded the information architecture and developed a reusable UI component library for healthcare clients.",
            "I led over 650 developers through a monthly enablement process, training them for client work on the Digital Engineering stack.",
          ],
        },
      ],
    },
    {
      company: "projekt202",
      period: "2018 - 2019",
      positions: [
        {
          title: "UI Developer",
          description: [
            "I assisted in developing a reusable UI component library and worked closely with a multi-million dollar airline client to gather requirements.",
            "My responsibility included developing solutions for enterprise clients worth millions of dollars, using Angular 7 for the frontend.",
          ],
        },
      ],
    },
    {
      company: "Major 4 Apps",
      period: "2018 - 2019",
      positions: [
        {
          title: "Founder & Developer",
          description: [
            "I developed custom applications for clients, designed, developed, tested, and supported mobile applications on iOS and Android platforms.",
            "My mobile game ranked among the top 200 on the Amazon App Store.",
          ],
        },
      ],
    },
  ],
  avatarUrl: "/braydon_headshot_1.jpeg",
};

export function Resume() {
  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative">
          <div className="divide-y divide-gray-100">
            {resumeData.experiences.map((experience) => (
              <div
                key={experience.company}
                className="grid grid-cols-[1fr,5fr] gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr,1fr,4fr]"
              >
                <div className="hidden md:block">
                  <h3 className="text-xl font-bold">{experience.company}</h3>
                  <p className="text-sm text-gray-600">{experience.period}</p>
                </div>

                <div />

                <div className="space-y-6">
                  {experience.positions.map((position, index) => (
                    <div
                      key={`${experience.company}-${index}`}
                      className="space-y-4"
                    >
                      <h4 className="text-lg font-semibold">
                        {position.title}
                      </h4>
                      <div className="space-y-3">
                        {position.description.map((desc, i) => (
                          <p key={i} className="text-gray-600">
                            {desc}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute top-0 h-full w-8 md:left-[calc(28%_-_1rem)]">
            <Timeline avatarUrl={resumeData.avatarUrl} />
          </div>
        </div>
      </div>
    </div>
  );
}
