import { Project } from "@/types/project";
import ProjectCard from "./ProjectCard";

type Props = {
  projects: Project[];
};

export default function ProjectGrid({ projects }: Props) {
  return (
    <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
