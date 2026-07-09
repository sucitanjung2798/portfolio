import Image from "next/image";
import Link from "next/link";

import TechnologyBadge from "@/components/ui/TechnologyBadge";
import { Project } from "@/types/project";
import { Building2, CalendarDays } from "lucide-react";

type CaseStudyHeroProps = {
  project: Project;
};

export default function CaseStudyHero({ project }: CaseStudyHeroProps) {
  return (
    <>
      <Link
        href="/#projects"
        className="inline-flex items-center text-sm text-muted-foreground transition hover:text-foreground"
      >
        ← Back to Projects
      </Link>

      <header className="mt-10">
        <span className="rounded-full border border-border px-3 py-1 text-sm">
          {project.category}
        </span>

        <h1 className="mt-6 text-5xl font-bold tracking-tight">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <TechnologyBadge key={technology} label={technology} />
          ))}
        </div>

        <div className="mt-10 gap-4 flex flex-col md:flex-row justify-between items-start md:items-center md:flex-wrap">
          <div className="flex items-start gap-3">
            <Building2 className="mt-0.5 h-5 w-5 text-muted-foreground" />

            <div>
              <p className="text-sm font-medium">Company</p>
              <p className="text-muted-foreground">{project.company}</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CalendarDays className="mt-0.5 h-5 w-5 text-muted-foreground" />

            <div>
              <p className="text-sm font-medium">Period</p>
              <p className="text-muted-foreground">{project.period}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-sm">
          <Image
            src={project.image}
            alt={project.title}
            priority
            className="w-full transition-transform duration-500 hover:scale-[1.02]"
          />
        </div>
      </header>
    </>
  );
}
