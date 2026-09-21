import type { Metadata } from "next";
import { ExperienceSection } from "@/components/experience/experience-section";

export const metadata: Metadata = {
  title: "Experience — Harsh Vardhan",
  description:
    "Full stack and systems work across Vyor AI and GAIL — CRM platforms, ERP systems, and internal tooling.",
};

export default function ExperiencePage() {
  return <ExperienceSection heading="plain" />;
}
