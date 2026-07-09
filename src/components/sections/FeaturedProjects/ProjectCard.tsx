import Link from "next/link";

import TechnologyBadge from "../../ui/TechnologyBadge";

import { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="rounded-3xl border border-border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm text-primary font-medium">{project.category}</p>

      <h3 className="mt-3 text-3xl font-bold">{project.title}</h3>

      <p className="mt-6 leading-8 text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <TechnologyBadge key={technology} label={technology} />
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-10 inline-flex text-primary font-medium"
      >
        View Case Study →
      </Link>
    </article>
  );
}
