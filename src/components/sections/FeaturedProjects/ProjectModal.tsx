"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Project } from "@/types/project";
import {
  LucideCalendar,
  LucideCircleCheck,
  LucideCircleUser,
  LucideCodeXml,
  LucideFolderClosed,
  LucideUsers,
} from "lucide-react";
import ProjectUI from "./ProjectUI";
import { motion } from "framer-motion";
import {
  containerDetailVariants,
  fadeLeft,
  fadeRight,
  fadeUp,
} from "./animate";

type Props = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ProjectModal({ project, open, onOpenChange }: Props) {
  if (!project) return null;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-[1100px] h-[90vh] overflow-y-auto rounded-2xl p-5 sm:p-6 lg:p-8 z-[998]">
        <motion.div
          variants={containerDetailVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex w-fit h-fit rounded-full bg-blue-100 px-4 py-1 text-base font-semibold text-primary"
          >
            Case Study
          </motion.span>

          <motion.div
            variants={fadeUp}
            className="mt-5 text-2xl font-bold lg:text-3xl"
          >
            {project.title}
          </motion.div>

          <div className="mt-8 flex flex-col gap-8 lg:grid lg:grid-cols-12">
            <motion.div variants={fadeLeft} className="lg:col-span-5">
              <p className="leading-7 text-neutral-700">
                {project.description}
              </p>

              <div className="mt-4 flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#edf4ff] p-2 rounded-full">
                    <LucideCircleUser className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold">Role</div>
                    <div>{project.role}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#edf4ff] p-2 rounded-full">
                    <LucideCalendar className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold">Duration</div>
                    <div>{`${project.duration} months`}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#edf4ff] p-2 rounded-full">
                    <LucideFolderClosed className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold">Project Type</div>
                    <div>{project.projectType}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#edf4ff] p-2 rounded-full">
                    <LucideUsers className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold">Team</div>
                    <div>{project.team}</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#edf4ff] p-2 rounded-full">
                    <LucideCodeXml className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold">Technologies</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <motion.span
                          key={tech}
                          initial={{
                            opacity: 0,
                            scale: 0.8,
                          }}
                          animate={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            delay: index * 0.05,
                          }}
                          className="rounded-full border border-blue-100 bg-slate-100 px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              className="space-y-5 lg:col-span-7 overflow-hidden rounded-2xl"
            >
              <ProjectUI images={project.images} />
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="border-b mt-8" />

          <motion.div
            variants={containerDetailVariants}
            className="mt-8 grid gap-8 lg:grid-cols-2"
          >
            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-2 leading-7 text-neutral-700"
            >
              <div className="text-xl font-semibold">Overview</div>
              <div>{project.overview}</div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-2 leading-7 text-neutral-700"
            >
              <div className="text-xl font-semibold">The Problem</div>
              <div>{project.businessProblem}</div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-2 leading-7 text-neutral-700"
            >
              <div className="text-xl font-semibold">My Solution</div>
              <div>{project.solutions}</div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-2">
              <div className="text-xl font-semibold">Key Features</div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {project.keyFeatures.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-2">
                      <div className="text-primary">
                        <LucideCircleCheck />
                      </div>
                      <div>{item}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="bg-[#EDF4FF] p-6 rounded-lg flex flex-col gap-2"
            >
              <div className="text-xl font-semibold">Results</div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {project.results.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      variants={fadeUp}
                      whileHover={{
                        y: -5,
                        transition: {
                          duration: 0.2,
                        },
                      }}
                      key={index}
                      className="flex flex-col items-center text-center"
                    >
                      <div className="text-primary">
                        <Icon size={30} />
                      </div>
                      <div className="font-semibold text-lg">
                        {item.keyValue}
                      </div>
                      <div className="text-wrap">{item.description}</div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-2 bg-[#EDF4FF] rounded-lg p-6 leading-7 text-neutral-700"
            >
              <div className="text-xl font-semibold">What I Learned</div>
              <div>{project.whatILearned}</div>
            </motion.div>
          </motion.div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
