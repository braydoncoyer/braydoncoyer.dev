import { GridWrapper } from "@/app/components/GridWrapper";

interface Project {
  title: string;
  description: string;
  image: string;
  url: string;
}

const projects: Project[] = [
  {
    title: "Commit Your Code Conference Website",
    description:
      "A web development conference for charity, the Commit Your Code Conference website was designed and built by me using Figma, Next.js and Tailwind CSS.",
    image: "/projects/commit_your_code_project.jpeg",
    url: "https://www.commityourcode.com/",
  },
  {
    title: "Pomegradient",
    description:
      "Pomegradient is a web-based gradient solution that allows you to find, save and craft gradients with a creative community!",
    image: "/projects/pomegradient_project.jpeg",
    url: "https://www.pomegradient.com/",
  },
];

function ProjectImage(props) {
  return (
    <img src={props.src} alt={props.alt} className="drama-shadow rounded-xl" />
  );
}

export default function ProjectPage() {
  return (
    <div className="relative space-y-16">
      <GridWrapper>
        <h1 className="mx-auto mt-16 max-w-2xl text-balance text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          A collection of my favorite works.
        </h1>
      </GridWrapper>

      <GridWrapper className="space-y-12">
        {projects.map((project) => (
          <div key={project.title} className="space-y-12">
            <GridWrapper className="px-10">
              <ProjectImage src={project.image} alt={project.title} />
            </GridWrapper>
            <GridWrapper className="px-10">
              <div className="max-w-2xl text-balance">
                <h2 className="mb-3 text-2xl font-medium leading-6 tracking-tight text-slate-900 md:leading-none">
                  {project.title}
                </h2>
                <p className="mb-3 flex-grow text-base leading-6 text-text-secondary">
                  {project.description}
                </p>
                <a
                  className="inline-flex items-center text-sm font-medium text-indigo-600"
                  href={project.url}
                >
                  Visit {project.title}
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
              </div>
            </GridWrapper>
          </div>
        ))}
      </GridWrapper>
    </div>
  );
}
