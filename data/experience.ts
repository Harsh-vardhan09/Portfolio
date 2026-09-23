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
    endDate: "August 2026",
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
  {
    // TODO: add the month range once known — a single year renders on its own.
    company: "OSCI '26",
    role: "Project Admin",
    startDate: "2026",
    description: [
      "Project admin for an open source project in Open Source Connect India 2026.",
      "Reviewed and triaged incoming contributions from participants.",
      "Scoped and labelled issues so contributors could pick up work independently.",
    ],
    technologies: ["Git", "GitHub", "Open Source"],
  },
  {
    // TODO: add the month range once known.
    company: "GirlScript Summer of Code (GSSoC) '26",
    role: "Open Source Contributor",
    startDate: "2026",
    description: [
      "Contributed to multiple open source projects across the programme.",
      "15+ pull requests merged.",
    ],
    technologies: ["Git", "GitHub", "Open Source"],
  },
  {
    company: "Personal Open Source Projects",
    role: "Maintainer",
    startDate: "2025",
    description: [
      "Maintain personal projects that have drawn outside contributors.",
      "AthLead grew to 30+ contributors and 100+ users.",
      "Reviewed pull requests and kept issues scoped for new contributors.",
    ],
    technologies: ["Git", "GitHub", "Open Source"],
  },
];
