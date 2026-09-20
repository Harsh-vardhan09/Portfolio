export type NavLink = { label: string; href: string };
export type SocialLink = { label: string; href: string; icon: "github" | "linkedin" | "leetcode" | "mail" };

export type Hero = {
  name: string;
  copyright: string;
  roleLines: [string, string];
  portrait: { src: string; alt: string };
  scrollCue: string;
};

export const nav: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/Harsh-vardhan09", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harsh-vardhan-hv", icon: "linkedin" },
  { label: "LeetCode", href: "https://leetcode.com/u/Aarsh-HV", icon: "leetcode" },
  { label: "Email", href: "mailto:harsh.vardhanp0901@gmail.com", icon: "mail" },
];

export const hero: Hero = {
  name: "HARSH VARDHAN",
  copyright: "© Harsh Vardhan — Full Stack Developer",
  roleLines: ["Full Stack Developer", "Systems & Tooling"],
  portrait: {
    src: "/Main.png",
    alt: "Harsh Vardhan",
  },
  scrollCue: "Scroll",
};
