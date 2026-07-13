"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Project } from "@/types/project";
import { useState } from "react";
import ProjectModal from "./ProjectModal";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <article
        className="
        group
        overflow-hidden
        rounded-3xl
        border
        border-neutral-200
        bg-white
        transition-all
        hover:shadow-xl
      "
      >
        {/* Image */}

        <div className="overflow-hidden relative bg-slate-100">
          <Image
            src={project.image}
            alt={project.title}
            className="
            aspect-[16/10]
            w-full
            object-scale-down"
          />
        </div>

        {/* Content */}

        <div className="p-7">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            {project.category}
          </p>

          <h3 className="mt-3 text-2xl font-bold">{project.title}</h3>

          <p className="mt-4 line-clamp-3 leading-7 text-neutral-600">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="
                rounded-full
                bg-neutral-100
                px-3
                py-1
                text-xs
                font-medium
              "
              >
                {tech}
              </span>
            ))}
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="mt-8 inline-flex items-center gap-2 font-medium text-blue-600 transition-all group-hover:gap-3 cursor-pointer"
          >
            View Case Study
            <ArrowUpRight size={18} />
          </button>
        </div>
      </article>

      <ProjectModal
        project={project}
        open={openModal}
        onOpenChange={setOpenModal}
      />
    </>
  );
}
