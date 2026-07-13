"use client";

import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Project } from "@/types/project";
import {
  LucideCalendar,
  LucideCircleUser,
  LucideCodeXml,
  LucideFolderClosed,
  LucideUsers,
} from "lucide-react";
import ProjectCarousel from "./ProjectCarousel";

type Props = {
  project: Project;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export default function ProjectModal({ project, open, onOpenChange }: Props) {

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-[1400px] h-[90vh] overflow-y-auto rounded-3xl p-8">
        <div>
          <span className="inline-flex w-fit h-fit rounded-full bg-blue-100 px-4 py-1 text-base font-semibold text-primary">
            Case Study
          </span>

          <div className="mt-6 font-semibold text-2xl">{project.title}</div>

          <div className="flex items-start gap-8 justify-between mt-6">
            <div>
              <p>{project.description}</p>

              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#edf4ff] p-2 rounded-full">
                    <LucideCircleUser className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold">Role</div>
                    <div>{project.role}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#edf4ff] p-2 rounded-full">
                    <LucideCalendar className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold">Role</div>
                    <div>{`${project.duration} bulan`}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#edf4ff] p-2 rounded-full">
                    <LucideFolderClosed className="text-primary" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold">Project Type</div>
                    <div>{project.projectType}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
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
                    <div className="flex max-w-md flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-blue-100 bg-slate-100 px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full space-y-5">
              <ProjectCarousel images={project.images} />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
