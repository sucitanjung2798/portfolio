import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";


export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          title="Featured Projects"
          description="Selected enterprise applications I've built to solve real business problems."
        />

        <div className="mt-16 grid gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
