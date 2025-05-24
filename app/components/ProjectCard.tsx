import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  className?: string;
}

export function ProjectCard({
  slug,
  title,
  description,
  image,
  technologies,
  className,
}: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className={clsx(
        "group relative flex flex-col overflow-hidden rounded-2xl bg-white p-6 shadow-lg transition-all hover:shadow-xl dark:bg-zinc-900",
        className,
      )}
    >
      <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
        <Image
          src={`/projects/${image}`}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="mb-2 text-xl font-medium text-text-primary">{title}</h3>
      <p className="mb-4 flex-grow text-sm text-text-secondary">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {technologies.slice(0, 3).map((tech, index) => (
          <span
            key={index}
            className="rounded-full bg-indigo-100 px-2 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}
