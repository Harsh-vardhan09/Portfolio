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
    image: "/assets/athlead.png",
    year: 2026,
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Python",
      "JWT",
      "REST API",
    ],
    github: "https://github.com/Harsh-vardhan09/AthLead",
    live: "https://athlead-frontend.onrender.com/",
    demo: "",
    featured: true,
    contributors: 15,
    users: 100,
    highlights: ["Selected for Smart India Hackathon 2025 at institution"],
  },
  {
    title: "TurboForge – Turborepo Monorepo Scaffolding CLI",
    slug: "turboforge",
    image:"/assets/turboforge.png",
    description:
      "CLI that scaffolds production-ready Turborepo monorepos with a Next.js frontend, Express backend, Prisma database, and shared packages.",
    overview:
      "TurboForge generates a full-stack monorepo from a single command: npx turboforge my-app. It combines Next.js 14, Tailwind CSS, Express, TypeScript, Prisma, PostgreSQL, pnpm workspaces, and reusable shared UI and configuration packages into a ready-to-develop project structure.",
    year: 2026,
    technologies: [
      "Node.js",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "Prisma",
      "PostgreSQL",
      "Turborepo",
      "pnpm",
    ],
    github: "https://github.com/Harsh-vardhan09/TurboForge",
    featured: true,
    highlights: [
      "One-command monorepo scaffolding with npx turboforge",
      "Preconfigured Next.js frontend and Express backend",
      "Shared UI and TypeScript, Tailwind, and ESLint configurations",
      "Prisma and PostgreSQL database package with ready-to-use commands",
    ],
  },
  {
    title: "OTP Autofill – Chrome Extension",
    slug: "otp-autofill",
    image:"/assets/otp.png",
    description:
      "Chrome extension that reads recent OTP emails from Gmail and automatically fills verification codes into supported web forms.",
    overview:
      "OTP Autofill is a Manifest V3 Chrome extension that uses Google sign-in, the Chrome Identity API, and Gmail's read-only API access to find recent verification emails and extract OTP codes. It detects OTP pages and supports single-input, multi-input, and contenteditable fields, with optional automatic detection and form submission.",
    year: 2026,
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Chrome Extension Manifest V3",
      "Gmail API",
      "Chrome Identity API",
      "Chrome Storage API",
    ],
    github: "https://github.com/Harsh-vardhan09/Otp-Autofiller-extension",
    live: "",
    demo: "",
    featured: true,
    highlights: [
      "Google sign-in with support for multiple Gmail accounts",
      "Detects OTP pages and fills single-input, multi-input, and contenteditable fields",
      "Extracts recent verification codes through the Gmail API",
      "Persistent settings with optional automatic detection and form submission",
    ],
  },
  // TODO: replace with a real project — title, description, year, technologies.
  {
    title: "Zingle – MERN Social Media Platform",
    slug: "zingle",
    image: "/assets/zingle.png",
    description:
      "Full-stack social media platform for creating posts and stories, following users, and sending messages.",
    overview:
      "Zingle is a MERN-based social media application with authentication, media sharing, user connections, stories, and messaging. It uses Clerk for authentication, Cloudinary and ImageKit for media, and Inngest for background jobs and scheduled notifications.",
    year: 2026,
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Clerk",
      "Redux",
      "Cloudinary",
      "ImageKit",
      "Inngest",
    ],
    github: "https://github.com/Harsh-vardhan09/Zingle",
    live: "",
    demo: "",
    featured: true,
    highlights: [
      "Create and delete posts",
      "Post stories and share media",
      "Follow users and send messages",
      "Background jobs and scheduled notifications with Inngest",
    ],
  },
  {
    title: "AETHERIA – Gamified Productivity & Habit Tracking Platform",
    slug: "aetheria",
    image: "/assets/atheria.png",
    description:
      "Gamified productivity platform that turns daily goals into quests with XP, streaks, spells, potions, and house competitions.",
    overview:
      "AETHERIA is a MERN monorepo inspired by the magical world of Hogwarts. Users can create and complete quests, earn XP, maintain streaks, level up, choose a house, activate productivity spells, craft potions, track statistics, and compete in the House Cup and Wizard Leaderboard.",
    year: 2025,
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
    ],
    github: "https://github.com/Harsh-vardhan09/AETHERIA",
    featured: true,
    highlights: [
      "Quest, XP, level, HP, and daily streak system",
      "House Cup and Wizard Leaderboard",
      "Productivity spells, potions, and Daily Owl suggestions",
      "JWT authentication with responsive UI",
    ],
  },
  {
    title: "WanderLust – Travel & Accommodation Listing Platform",
    slug: "wanderlust",
    image: "/assets/wanderlust.png",
    description:
      "Full-stack travel and accommodation platform where users can explore stays, create listings, and share reviews.",
    overview:
      "WanderLust is a server-rendered travel and accommodation listing application built with Node.js, Express, MongoDB, and EJS. Users can sign up, manage property listings, upload images, view locations on Mapbox maps, and add ratings and reviews with protected actions secured by Passport.js.",
    year: 2025,
    technologies: [
      "Node.js",
      "Express.js",
      "EJS",
      "Bootstrap",
      "JavaScript",
      "MongoDB",
      "Mongoose",
      "Passport.js",
      "Cloudinary",
      "Mapbox",
      "Joi",
    ],
    github: "https://github.com/Harsh-vardhan09/Wanderlust",
    featured: true,
    highlights: [
      "Create, edit, view, and delete accommodation listings",
      "Image uploads with Cloudinary and location-based Mapbox maps",
      "Ratings and reviews with protected user actions",
      "Session-based authentication and authorization with Passport.js",
    ],
  },
];

/** Newest first, so callers never sort. */
export const projects: Project[] = [...entries].sort((a, b) => b.year - a.year);

export const featuredProjects = projects.filter((p) => p.featured);

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
