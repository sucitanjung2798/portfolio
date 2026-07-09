import { StaticImageData } from "next/image";

export interface ProjectChallenge {
  title: string;
  solution: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  company: string;
  period: string;
  description: string;
  image: StaticImageData;

  featured: boolean;

  technologies: string[];

  overview: string;

  businessProblem: string;

  responsibilities: string[];

  challenges: ProjectChallenge[];

  businessImpact: string[];
  role: string;
  team: string;
}
