import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export type ResultType = {
  icon: LucideIcon;
  keyValue: string;
  description: string;
};

export interface Project {
  slug: string;
  title: string;
  category: string;
  company: string;
  period: string;
  description: string;
  image: StaticImageData;
  duration: string;
  projectType: string;
  solutions: string;
  keyFeatures: string[];
  results: ResultType[];
  whatILearned: string;

  featured: boolean;

  technologies: string[];

  overview: string;

  businessProblem: string;

  role: string;
  team: string;
  images: StaticImageData[];
}
