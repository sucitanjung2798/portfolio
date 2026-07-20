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
import { motion } from "framer-motion";
import { cardVariants, containerVariants } from "./animate";

export default function FeaturedProjects() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <Section id="projects" className="bg-[#EDF4FF]">
      <Container>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
          }}
        >
          <SectionHeading
            title="Featured Projects"
            description="Selected enterprise applications I've built to solve real business problems."
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid-cols-3 mt-6"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <motion.article
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition-shadow hover:shadow-xl"
              >
                {/* Image */}

                <motion.div
                  whileHover={{
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  className="overflow-hidden relative bg-slate-100"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/10] w-full object-contain"
                  />
                </motion.div>

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
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{
                          opacity: 0,
                          scale: 0.8,
                        }}
                        whileInView={{
                          opacity: 1,
                          scale: 1,
                        }}
                        transition={{
                          delay: index * 0.08,
                        }}
                        viewport={{ once: true }}
                        className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <motion.button
                    whileHover={{
                      x: 5,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    onClick={() => {
                      setOpenModal(true);
                      setSelectedProject(project);
                    }}
                    className="mt-6 inline-flex items-center gap-2 font-medium text-blue-600 cursor-pointer"
                  >
                    View Case Study
                    <ArrowUpRight size={18} />
                  </motion.button>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </motion.div>

        <ProjectModal
          project={selectedProject}
          open={openModal}
          onOpenChange={setOpenModal}
        />
      </Container>
    </Section>
  );
}
