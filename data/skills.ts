/**
 * To add a skill, drop `{ name: "Thing" }` into the right category's `items`.
 * `icon` is optional and points at a file under /public/skills/ — the text list
 * renders correctly with zero icons present.
 */

export type Skill = { name: string; icon?: string };

export type SkillCategory = {
  name: string;
  items: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    items: [
      { name: "JavaScript", icon: "/skills/javascript.svg" },
      { name: "TypeScript", icon: "/skills/typescript.svg" },
      { name: "Java" },
      { name: "Python", icon: "/skills/python.svg" },
      { name: "C#" },
    ],
  },
  {
    name: "Frameworks & Libraries",
    items: [
      { name: "React", icon: "/skills/react.svg" },
      { name: "Next.js", icon: "/skills/nextjs.svg" },
      { name: "Node.js", icon: "/skills/nodejs.svg" },
      { name: "Express.js", icon: "/skills/express.svg" },
      { name: "ASP.NET", icon: "/skills/aspnet.svg" },
      { name: "Blazor", icon: "/skills/blazor.svg" },
      { name: "GSAP", icon: "/skills/gsap.svg" },
      { name: "React Native" },
    ],
  },
  {
    name: "Databases",
    items: [
      { name: "PostgreSQL", icon: "/skills/postgresql.svg" },
      { name: "SQL" },
      { name: "MongoDB", icon: "/skills/mongodb.svg" },
      { name: "MySQL", icon: "/skills/mysql.svg" },
      { name: "Supabase", icon: "/skills/supabase.svg" },
    ],
  },
  {
    name: "Cloud & DevOps",
    items: [
      { name: "AWS EC2" },
      { name: "AWS S3" },
      { name: "Docker", icon: "/skills/docker.svg" },
      { name: "Kubernetes", icon: "/skills/kubernetes.svg" },
      { name: "Redis", icon: "/skills/redis.svg" },
      { name: "Turborepo", icon: "/skills/turborepo.svg" },
      { name: "Linux", icon: "/skills/linux.svg" },
    ],
  },
  {
    name: "Developer Tools",
    items: [
      { name: "Git", icon: "/skills/git.svg" },
      { name: "GitHub", icon: "/skills/github.svg" },
      { name: "IntelliJ IDEA", icon: "/skills/intellij-idea.svg" },
      { name: "Prisma Studio", icon: "/skills/prisma.svg" },
      { name: "Obsidian", icon: "/skills/obsidian.svg" },
    ],
  },
];

/** Flat list for the spiral, which does not care about grouping. */
export const allSkills: Skill[] = skillCategories.flatMap((c) => c.items);
