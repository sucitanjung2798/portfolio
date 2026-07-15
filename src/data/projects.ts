import { Project } from "@/types/project";
import DashboardImage from "@/assets/banner/hris.png";
import EmployeeImage from "@/assets/banner/employee.png";
import LeaveImage from "@/assets/banner/leave.png";
import LeaveDetail from "@/assets/banner/leave-detail.png";
import LeaveForm from "@/assets/banner/leave-form.png";
import ListSalaryStructure from "@/assets/banner/list-salary-structure.png";
import DetailPayrollPerEmployee from "@/assets/banner/detail-payroll-per-employee.png";
import DetailPayrollPerMonths from "@/assets/banner/detail-payroll-per-months.png";
import EmptyPagePayroll from "@/assets/banner/empty-page-payroll.png";
import AddNewPayroll from "@/assets/banner/add-new-payroll.png";
import ListPayroll from "@/assets/banner/list-payroll.png";
import EditPayroll from "@/assets/banner/edit-payroll.png";
import DetailSalaryStructure from "@/assets/banner/detail-salary-structure.png";
import JobApplyForm from "@/assets/banner/job-apply-form.png";
import LoginPage from "@/assets/banner/login-page.png";
import RelationForm from "@/assets/banner/relation-form.png";
import ChangePassword from "@/assets/banner/change-password.png";
import CourseForm from "@/assets/banner/course-form.png";
import SoftSkillForm from "@/assets/banner/softskill-form.png";
import RegisteredUser from "@/assets/banner/registered-user.png";
import {
  LucideBadgeCheck,
  LucideBriefcaseBusiness,
  LucideBuilding2,
  LucideCalculator,
  LucideChartLine,
  LucideClock3,
  LucideFolderKanban,
  LucideUsers,
  LucideWorkflow,
} from "lucide-react";

export const projects: Project[] = [
  {
    slug: "hris",
    title: "Enterprise HRIS",
    images: [DashboardImage, EmployeeImage, LeaveImage, LeaveDetail, LeaveForm],
    image: DashboardImage,
    duration: "4",
    projectType: "Internal Application",
    category: "HRIS",
    description:
      "An enterprise Human Resource Information System (HRIS) that centralizes employee management, organizational structure, payroll preparation, recruitment workflows, attendance, leave management, and approval processes into a single internal platform.",
    company: "Bisa Group",
    period: "Dec 2023 – Present",
    featured: true,
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
      "React Hook Form",
      "Yup",
      "Material UI",
      "Shadcn UI",
    ],
    overview:
      "The HRIS platform was developed to replace fragmented manual processes and multiple third-party tools with one centralized internal system. I was responsible for building and maintaining various frontend modules, integrating REST APIs, and creating reusable components that support employee management, payroll administration, recruitment, approvals, and organizational data",
    businessProblem:
      "The company managed employee information across multiple disconnected systems and manual spreadsheets, resulting in duplicated work, inconsistent data, and slower administrative processes. HR teams required a centralized platform that could support multiple business units while remaining scalable for future business growth.",
    solutions:
      "I developed responsive frontend interfaces using React.js, Next.js, and TypeScript while collaborating closely with Product Owners, and Backend Engineers. I built reusable components, dynamic forms, data tables, and integrated REST APIs to streamline complex HR workflows into a consistent user experience.",
    keyFeatures: [
      "Employee Management",
      "Organizational Structure",
      "Payroll Preparation",
      "Recruitment Management",
      "Salary Structure",
      "Leave & Attendance",
      "Medical Reimbursement",
      "Approval Workflow",
      "User & Role Management",
      "Dashboard & Reporting",
    ],
    results: [
      {
        icon: LucideUsers,
        keyValue: "1000+",
        description: "Employees managed through the HRIS system.",
      },
      {
        icon: LucideBuilding2,
        keyValue: "Multi",
        description: "Business units supported within a single platform.",
      },
      {
        icon: LucideWorkflow,
        keyValue: "1",
        description: "Centralized platform for HR operations.",
      },
    ],
    whatILearned:
      "The project strengthened my ability to build large-scale enterprise applications, design reusable frontend architectures, collaborate with cross-functional teams, and translate complex business processes into intuitive user interfaces.",
    role: "Frontend Developer",
    team: "Product, Backend, UI/UX, QA",
  },

  {
    slug: "payroll",
    title: "Payroll Management",
    category: "Payroll",
    description:
      "An internal payroll management system that simplifies salary calculation, payroll components, deductions, employee benefits, and payroll approval workflows.",
    images: [
      ListSalaryStructure,
      DetailPayrollPerEmployee,
      DetailPayrollPerMonths,
      EmptyPagePayroll,
      AddNewPayroll,
      ListPayroll,
      EditPayroll,
      DetailSalaryStructure,
    ],
    image: EmptyPagePayroll,
    projectType: "Internal Application",
    duration: "1.5",
    company: "Bisa Group",
    period: "Jun 2023 – Nov 2023",
    featured: true,
    technologies: [
      "React",
      "JavaScript",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Axios",
      "React Hook Form",
      "Yup",
      "Material UI",
      "Shadcn UI",
    ],
    overview:
      "The Payroll System was developed as part of the company's HR platform to automate payroll operations and reduce manual calculations. I contributed to developing payroll forms, salary structures, dynamic calculations, validation, and backend integration.",
    businessProblem:
      "Payroll processing involved complex salary components, allowances, deductions, overtime, reimbursements, and approval flows. Manual handling increased processing time and the possibility of calculation errors.",
    solutions:
      "I built dynamic payroll interfaces capable of handling complex salary calculations using reusable form components, React Hook Form, TypeScript, and REST API integration. The application supports various payroll scenarios while maintaining a clean and user-friendly experience.",
    keyFeatures: [
      "Payroll Processing",
      "Salary Structure",
      "Overtime Management",
      "Medical Reimbursement",
      "Additional Income",
      "Salary Deduction",
      "Payroll Approval",
      "Employee Payroll History",
    ],
    results: [
      {
        icon: LucideCalculator,
        keyValue: "Automated",
        description: "Payroll calculations and processing workflows.",
      },
      {
        icon: LucideBadgeCheck,
        keyValue: "Accurate",
        description: "Improved payroll accuracy through structured validation.",
      },
      {
        icon: LucideClock3,
        keyValue: "Faster",
        description: "Simplified payroll administration for HR teams.",
      },
    ],
    whatILearned:
      "Working on payroll taught me how to build reliable applications for business-critical operations where data accuracy, validation, and user experience are equally important.",
    role: "Frontend Developer",
    team: "Product, Backend, UI/UX, QA",
  },

  {
    slug: "recruitment",
    title: "Recruitment System",
    category: "Recruitment",
    description:
      "An internal recruitment platform that manages job vacancies, applicant information, interview processes, and recruitment approvals in one centralized application.",
    images: [
      JobApplyForm,
      LoginPage,
      RelationForm,
      ChangePassword,
      CourseForm,
      SoftSkillForm,
      RegisteredUser,
    ],
    image: LoginPage,
    projectType: "Internal Application",
    duration: "8",
    company: "Bisa Group",
    period: "Jan 2023 – May 2023",
    featured: true,
    technologies: [
      "React",
      "JavaScript",
      "React Context",
      "Material UI",
      "Axios",
    ],
    overview:
      "The Recruitment System digitalized the hiring process from candidate application to recruitment approval. I developed frontend modules, reusable components, applicant management pages, and integrated APIs for recruitment workflows.",
    businessProblem:
      "Recruitment activities were handled across multiple spreadsheets and communication tools, making it difficult to track candidate progress and collaborate between HR and hiring managers.",
    solutions:
      "I developed responsive recruitment modules that organize candidate information, simplify interview management, and provide a structured workflow for recruitment approvals while ensuring a consistent user experience.",
    keyFeatures: [
      "Job Vacancy Management",
      "Candidate Management",
      "Interview Schedule",
      "Recruitment Pipeline",
      "Approval Workflow",
      "Candidate Profile",
      "Dashboard",
    ],
    results: [
      {
        icon: LucideChartLine,
        keyValue: "Visible",
        description: "Improved visibility of recruitment progress.",
      },
      {
        icon: LucideFolderKanban,
        keyValue: "Centralized",
        description: "Candidate information stored in one platform.",
      },
      {
        icon: LucideBriefcaseBusiness,
        keyValue: "Efficient",
        description: "Reduced administrative effort during hiring.",
      },
    ],
    whatILearned:
      "This project improved my understanding of workflow-driven applications and strengthened my ability to design interfaces that support collaboration between multiple stakeholders throughout the recruitment process.",
    role: "Frontend Developer",
    team: "Product, Backend, UI/UX, QA",
  },
];
