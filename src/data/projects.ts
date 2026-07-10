import { Project } from "@/types/project";
import HrisBanner from "@/assets/banner/hris.png";

export const projects: Project[] = [
  {
    slug: "hris",
    title: "Enterprise HRIS",
    category: "HRIS",
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
  },

  {
    slug: "payroll",
    title: "Payroll Management",
    category: "Payroll",
    description:
      "Comprehensive payroll management system designed to automate salary calculations, tax deductions, and compliance reporting.",
    image: HrisBanner,
    company: "Bisa Group",
    period: "Jun 2023 – Nov 2023",
    featured: false,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
    ],
    overview:
      "Developed a robust payroll management system that streamlined salary processing, tax calculations, and compliance reporting for a diverse workforce.",
    businessProblem:
      "The company needed a more efficient way to manage payroll processes, reduce manual errors, and ensure compliance with tax regulations.",
    responsibilities: [
      "Implemented core payroll functionalities using React.js, Next.js, and TypeScript.",
      "Integrated with existing HRIS and accounting systems.",
      "Conducted code reviews and provided technical guidance to the development team.",
    ],
    challenges: [
      {
        title: "Complex Payroll Calculations",
        solution:
          "Developed a modular calculation engine that handled various payroll rules and regulations while maintaining type safety.",
      },
    ],
    businessImpact: [
      "Automated payroll processing for over 500 employees.",
      "Reduced payroll processing time by 60%.",
      "Improved accuracy in tax deductions and compliance reporting.",
    ],
    role: "Frontend Developer",
    team: "Product, Backend, UI/UX, QA",
  },

  {
    slug: "recruitment",
    title: "Recruitment System",
    category: "Recruitment",
    description:
      "Streamlined recruitment process with a user-friendly interface for managing job postings, candidate applications, and interview scheduling.",
    image: HrisBanner,
    company: "Bisa Group",
    period: "Jan 2023 – May 2023",
    featured: false,
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
    ],
    overview:
      "Developed a comprehensive recruitment system that simplified job posting, candidate management, and interview coordination for the HR team.",
    businessProblem:
      "The company needed a more efficient way to manage the recruitment process, reduce time-to-hire, and improve candidate experience.",
    responsibilities: [
      "Designed and implemented the user interface for the recruitment system.",
      "Integrated with existing HRIS and email notification services.",
      "Collaborated with HR stakeholders to gather requirements and provide technical solutions.",
    ],
    challenges: [
      {
        title: "Candidate Experience",
        solution:
          "Created an intuitive user interface that provided a seamless experience for candidates throughout the application process.",
      },
    ],
    businessImpact: [
      "Reduced time-to-hire by 40%.",
      "Improved candidate satisfaction scores by 30%.",
      "Enhanced the overall efficiency of the recruitment process.",
    ],
    role: "Frontend Developer",
    team: "Product, Backend, UI/UX, QA",
  },
];
