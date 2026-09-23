/**
 * To add a certificate or badge, copy a block below. Order here is the order
 * shown in the carousel. `image` must exist under /public/certificates/.
 *
 *   {
 *     title: "Certificate Name",
 *     issuer: "Who issued it",
 *     date: "May 2026",                 // "" hides the date line
 *     image: "/certificates/slug.jpg",
 *     credentialId: "",                 // optional
 *     verificationUrl: "",              // optional
 *     skills: ["Thing"],                // optional
 *   },
 */

export type Certificate = {
  title: string;
  issuer: string;
  date: string;
  image?: string;
  pdf?: string;
  credentialId?: string;
  verificationUrl?: string;
  skills?: string[];
};

export const certificates: Certificate[] = [
  {
    title: "Summer Internship",
    issuer: "GAIL (India) Limited",
    date: "August 2026",
    image: "/certificates/gail-summer-training.jpg",
  },
  {
    title: "AWS Certified AI Practitioner",
    issuer: "Amazon Web Services",
    date: "May 2026",
    image: "/certificates/aws-ai-practitioner.jpg",
    skills: ["AI/ML", "AWS"],
  },
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "February 2026",
    image: "/certificates/aws-cloud-practitioner.jpg",
    skills: ["Cloud", "AWS"],
  },
  {
    title: "Project Admin",
    issuer: "Open Source Connect India (OSCI) 2026",
    date: "2026",
    image: "/certificates/osci-project-admin.jpg",
    skills: ["Open Source"],
  },
  {
    title: "Power Contributor",
    issuer: "GirlScript Summer of Code 2026",
    date: "2026",
    image: "/certificates/gssoc-power-contributor.png",
    skills: ["Open Source"],
  },
  {
    title: "Contributor",
    issuer: "GirlScript Summer of Code 2026",
    date: "2026",
    image: "/certificates/gssoc-contributor.png",
    skills: ["Open Source"],
  },
  {
    title: "TechSprint — Second Runner-Up",
    issuer: "Google Developer Groups, KIET",
    // TODO: the certificate carries no date; add it if you have one.
    date: "",
    image: "/certificates/techsprint-runner-up.jpg",
  },
];
