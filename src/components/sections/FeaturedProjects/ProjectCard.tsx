import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <p className="text-sm font-medium text-blue-600">{project.category}</p>

        <h3 className="mt-3 text-2xl font-semibold">{project.title}</h3>

        <p className="mt-3 leading-7 text-neutral-600">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-neutral-100 px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-medium text-blue-600 transition hover:gap-3"
        >
          View Case Study
          <ArrowRight size={18} />
        </Link>
      </div>
    </article>
  );
}
