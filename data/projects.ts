/**
 * To add a project, copy this block into `projects` below. Order does not matter —
 * the array is sorted by `year` descending on export.
 *
 *   {
 *     title: "Project Name – What It Does",
 *     slug: "project-name",              // must be unique; becomes /projects/<slug>
 *     description: "One line for the card.",
 *     overview: "A paragraph for the detail page.",   // optional
 *     year: 2026,
 *     technologies: ["React", "TypeScript"],
 *     image: "/projects/project-name.png",            // optional — card falls back to the title
 *     github: "",                                     // optional — empty string hides the link
 *     live: "",
 *     demo: "",
 *     featured: true,                                 // optional — shows on the homepage grid
 *     contributors: 4,                                // optional — stat on the detail page
 *     users: 500,                                     // optional
 *     highlights: ["Something notable."],             // optional
 *   },
 */

export type Project = {
  title: string;
  slug: string;
  description: string; // one line, card
  overview?: string; // paragraph, detail page
  year: number;
  technologies: string[];
  image?: string;
  github?: string;
  live?: string;
  demo?: string;
  featured?: boolean;
  contributors?: number;
  users?: number;
  highlights?: string[];
};

const entries: Project[] = [
  {
    title: "AthLead – AI Sports Analytics & Ranking Platform",
    slug: "athlead",
    description:
      "AI-powered platform built to help athletes and coaches analyze performance and rank talent using data-driven insights.",
    year: 2025,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "JWT",
      "REST API",
    ],
    github: "",
    live: "",
    demo: "",
    featured: true,
    contributors: 15,
    users: 100,
    highlights: ["Selected for Smart India Hackathon 2025 at institution"],
  },
  {
    title: "OTP Autofill – Chrome Extension",
    slug: "otp-autofill",
    description:
      "Chrome extension that securely auto-fills OTPs from Gmail using Google OAuth 2.0 and the Gmail API.",
    year: 2026,
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Chrome Extension APIs",
      "Gmail API",
      "OAuth 2.0",
    ],
    github: "",
    live: "",
    demo: "",
    featured: true,
    highlights: [
      "Manifest V3",
      "Gmail API",
      "Google OAuth 2.0",
      "1,000+ views across LinkedIn and X",
    ],
  },
  // TODO: replace with a real project — title, description, year, technologies.
  {
    title: "Untitled Project 03",
    slug: "project-03",
    description: "Placeholder entry. Replace this with the real project.",
    year: 2025,
    technologies: ["TBD"],
    featured: true,
  },
  // TODO: replace with a real project — title, description, year, technologies.
  {
    title: "Untitled Project 04",
    slug: "project-04",
    description: "Placeholder entry. Replace this with the real project.",
    year: 2025,
    technologies: ["TBD"],
    featured: true,
  },
  // TODO: replace with a real project — title, description, year, technologies.
  {
    title: "Untitled Project 05",
    slug: "project-05",
    description: "Placeholder entry. Replace this with the real project.",
    year: 2025,
    technologies: ["TBD"],
    featured: true,
  },
  // TODO: replace with a real project — title, description, year, technologies.
  {
    title: "Untitled Project 06",
    slug: "project-06",
    description: "Placeholder entry. Replace this with the real project.",
    year: 2025,
    technologies: ["TBD"],
    featured: true,
  },
];

/** Newest first, so callers never sort. */
export const projects: Project[] = [...entries].sort((a, b) => b.year - a.year);

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
