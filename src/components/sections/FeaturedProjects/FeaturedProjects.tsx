"use client";

import { useState } from "react";

import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";

import { projects } from "@/data/projects";

import ProjectGrid from "./ProjectGrid";

export default function FeaturedProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const featuredProjects = projects.filter((project) => project.featured);

  // const categories = useMemo(() => {
  //   return [
  //     "All",
  //     ...new Set(featuredProjects.map((project) => project.category)),
  //   ];
  // }, [featuredProjects]);

  const filteredProjects =
    selectedCategory === "All"
      ? featuredProjects
      : featuredProjects.filter(
          (project) => project.category === selectedCategory,
        );

  return (
    <Section id="projects">
      <Container>
        <SectionHeading
          title="Featured Projects"
          description="Selected enterprise applications I've built to solve real business problems."
        />

        {/* <ProjectFilter
          categories={categories}
          active={selectedCategory}
          onChange={setSelectedCategory}
        /> */}

        <ProjectGrid projects={filteredProjects} />
      </Container>
    </Section>
  );
}
