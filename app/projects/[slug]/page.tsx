import { notFound } from "next/navigation";
import { MDXContent } from "@/app/components/mdx";
import { unstable_noStore as noStore } from "next/cache";
import { SectionTitlePill } from "@/app/components/SectionTitlePill";
import { HorizontalLine } from "@/app/components/HorizontalLine";
import { NewsletterSignUp } from "@/app/components/NewsletterSignUp";
import { projects } from "#site/content";
import { getRelatedProjects } from "@/app/lib/utils";
import { ProjectCard } from "@/app/components/ProjectCard";
import { BgGradient } from "@/app/components/BgGradient";
import clsx from "clsx";
import { Metadata, ResolvingMetadata } from "next";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getProjectFromParams(params: ProjectPageProps["params"]) {
  const { slug } = await params;
  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  return project;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await getProjectFromParams(params);
  const relatedProjects = getRelatedProjects(project);

  return (
    <article className="space-y-12">
      {/* Project Banner Image */}
      <div className="relative">
        {/* Lines */}
        <span className="absolute top-6 z-10 h-px w-full bg-zinc-500/75 mix-blend-screen md:top-12"></span>
        <span className="absolute bottom-6 z-10 h-px w-full bg-zinc-500/75 mix-blend-screen md:bottom-12"></span>
        <span className="absolute left-6 z-10 h-full w-px bg-zinc-500/75 mix-blend-screen md:left-12"></span>
        <span className="absolute right-6 z-10 h-full w-px bg-zinc-500/75 mix-blend-screen md:right-12"></span>

        {/* top left cross */}
        <span className="absolute left-[44.5px] top-12 z-20 hidden h-px w-2 bg-white md:block"></span>
        <span className="absolute left-[48px] top-[44.5px] z-20 hidden h-2 w-px bg-white md:block"></span>

        {/* top right cross */}
        <span className="absolute right-[44.5px] top-12 z-20 hidden h-px w-2 bg-white md:block"></span>
        <span className="absolute right-[48px] top-[44.5px] z-20 hidden h-2 w-px bg-white md:block"></span>

        {/* bottom left cross */}
        <span className="absolute bottom-12 left-[44.5px] z-20 hidden h-px w-2 bg-white md:block"></span>
        <span className="absolute bottom-[44.5px] left-[48px] z-20 hidden h-2 w-px bg-white md:block"></span>

        {/* bottom right cross */}
        <span className="absolute bottom-12 right-[44.5px] z-20 hidden h-px w-2 bg-white md:block"></span>
        <span className="absolute bottom-[44.5px] right-[48px] z-20 hidden h-2 w-px bg-white md:block"></span>

        <div
          className="drama-shadow flex h-[350px] w-full flex-col justify-end rounded-2xl bg-cover bg-center bg-no-repeat p-8 md:mb-16 md:h-[600px] md:p-16"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(99, 102, 241, 1) 0%, rgba(99, 102, 241, 0.1) 30%, transparent 35%), url('${project.image}')`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="wrapper z-10">
        <MDXContent code={project.code} />
      </div>

      {/* Related Projects */}
      <section className="space-y-16">
        <div className="relative space-y-4">
          <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2">
            <BgGradient />
          </span>
          <SectionTitlePill title="Related Projects" />
          <h2 className="mx-auto max-w-lg text-balance text-center text-3xl font-medium leading-10 tracking-tighter text-text-primary">
            Here are some other projects you might find interesting.
          </h2>
        </div>

        <div className="z-10">
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
            <HorizontalLine />
            {relatedProjects.length > 0 ? (
              <>
                {relatedProjects.slice(0, 3).map((project, index) => (
                  <ProjectCard
                    key={project.slug}
                    slug={project.slug}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies}
                    className={clsx(index === 2 && "hidden sm:hidden lg:block")}
                  />
                ))}
              </>
            ) : (
              <p>Nothing to see here yet...</p>
            )}
          </ul>
          <HorizontalLine />
        </div>
      </section>
      <NewsletterSignUp />
    </article>
  );
}

export async function generateMetadata(
  { params }: ProjectPageProps,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const slug = (await params).slug;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(project.title)}&summary=${encodeURIComponent(project.description)}&image=${encodeURIComponent(project.image)}`,
          width: 1200,
          height: 630,
          alt: project.title,
        },
        ...previousImages,
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [
        `/api/og?title=${encodeURIComponent(project.title)}&summary=${encodeURIComponent(project.description)}&image=${encodeURIComponent(project.image)}`,
      ],
    },
  };
}
