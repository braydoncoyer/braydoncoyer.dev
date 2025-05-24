import { fetchAndSortProjects } from "@/app/lib/utils";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { ProjectCard } from "@/app/components/ProjectCard";
import { GridWrapper } from "@/app/components/GridWrapper";
import Link from "next/link";

function ProjectImage(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      className="drama-shadow aspect-video rounded-xl object-cover object-top"
    />
  );
}

export default async function ProjectsPage() {
  const projects = fetchAndSortProjects();

  return (
    <div className="mt-14 space-y-16 md:mt-16">
      <title>Projects | Braydon Coyer</title>
      <GridWrapper>
        <h1 className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]">
          A collection of my favorite works.
        </h1>
      </GridWrapper>

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
              <Link
                className="inline-flex items-center text-sm font-medium text-indigo-600"
                href={`/projects/${project.slug}`}
              >
                Read more about {project.title}
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
              </Link>
            </div>
          </GridWrapper>
        </div>
      ))}

      <NewsletterSignUp
        title="Stay updated on my projects"
        description="Sign up to receive notifications about new projects, insights, and exclusive content directly in your inbox."
        buttonText="Get Notified"
      />
    </div>
  );
}
