"use client";

import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { projects } from "@/data/projects";
import { Project } from "@/types/project";

export default function FeaturedProjects() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          title="Featured Projects"
          description="Selected enterprise applications I've built to solve real business problems."
        />

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3 mt-6">
          {projects.map((project) => (
            <div key={project.title}>
              <article className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-all hover:shadow-xl">
                {/* Image */}

                <div className="overflow-hidden relative bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/10] w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}

                <div className="p-4 md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-xl md:text-2xl font-bold">
                    {project.title}
                  </h3>

                  <p className="mt-4 line-clamp-3 text-sm leading-6 text-neutral-600 md:text-base md:leading-7">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium whitespace-nowrap"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setOpenModal(true);
                      setSelectedProject(project);
                    }}
                    className="mt-6 inline-flex items-center gap-2 font-medium text-blue-600 transition-all hover:gap-3 cursor-pointer"
                  >
                    View Case Study
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </article>
            </div>
          ))}
        </div>

        <ProjectModal
          project={selectedProject}
          open={openModal}
          onOpenChange={setOpenModal}
        />
      </Container>
    </Section>
  );
}
