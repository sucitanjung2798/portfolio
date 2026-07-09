import { Project } from "@/types/project";
import HrisBanner from "@/assets/banner/hris.png";

export const hris: Project = {
  slug: "hris",

  title: "Enterprise HRIS",

  category: "HRIS Platform",

  description:
    "Enterprise Human Resource Information System designed to streamline employee management, payroll operations, recruitment workflows, salary structures, approvals, and other internal HR processes.",

  image: HrisBanner,

  company: "Bisa Group",

  period: "Dec 2023 – Present",

  featured: true,

  technologies: [
    "React",
    "Next.js",
    "TypeScript",
    "Redux Toolkit",
    "Tailwind CSS",
    "Axios",
    "React Hook Form",
    "Yup",
  ],

  overview:
    "Developed and maintained an enterprise Human Resource Information System (HRIS) that supports employee management, payroll administration, recruitment workflows, salary structures, medical reimbursement, and approval processes.",

  businessProblem:
    "The company required a centralized platform to manage employee data, payroll operations, recruitment processes, and internal HR workflows. Manual processes created inefficiencies, data inconsistencies, and increased administrative workload.",

  responsibilities: [
    "Developed new HRIS features using React.js, Next.js, and TypeScript.",
    "Built reusable UI components and form architectures.",
    "Integrated REST APIs with backend services.",
    "Collaborated with Product Owners, Designers, Backend Engineers, and QA teams.",
    "Participated in requirement gathering, stakeholder demonstrations, and UAT.",
    "Performed bug fixing, maintenance, and performance optimization.",
  ],

  challenges: [
    {
      title: "Complex Dynamic Forms",

      solution:
        "Implemented reusable form components using React Hook Form, Yup validation, and TypeScript to handle dynamic form requirements while maintaining type safety.",
    },

    {
      title: "Large Data Tables",

      solution:
        "Optimized rendering performance using pagination, debounce search, and virtualized tables to ensure smooth user experience when handling large datasets.",
    },
  ],

  businessImpact: [
    "Supported approximately 1,000 employees across multiple business units.",
    "Improved HR operational efficiency through digital workflows.",
    "Reduced manual data entry and administrative overhead.",
    "Enhanced consistency and accuracy of employee data management.",
  ],

  role: "Frontend Developer",

  team: "Product, Backend, UI/UX, QA",
};
