/**
 * Most recent first. Set `current: true` on the role you are still in —
 * it fills the timeline marker and is expected to have no `endDate`.
 */

export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate?: string;
  description: string[];
  technologies: string[];
  location?: string;
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "Vyor AI",
    role: "Full Stack Developer Intern",
    startDate: "May 2026",
    current: true,
    description: [
      "Architected and scaffolded a CRM platform.",
      "Built secure REST APIs.",
      "Designed database models.",
      "Led a team of 4 developers.",
      "Worked on an ERP system adopted by 10+ schools.",
      "Built backend APIs and data models.",
      "Worked with cross-functional teams to align frontend and backend development.",
    ],
    technologies: [
      "Turborepo",
      "Next.js",
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "AWS EC2",
      "AWS S3",
      "REST APIs",
    ],
  },
  {
    company: "Gas Authority of India Limited (GAIL)",
    role: "SDE Intern",
    startDate: "June 2026",
    endDate: "July 2026",
    description: [
      "Built an event management portal.",
      "Reduced manual coordination and administrative effort by 80%.",
      "Led a team of 5 developers.",
      "Coordinated tasks and reviewed progress.",
      "Collaborated with stakeholders to translate requirements into software solutions.",
      "Reduced requirements rework by 85%.",
    ],
    technologies: ["C#", "ASP.NET", ".NET", "Blazor", "REST APIs"],
  },
];
