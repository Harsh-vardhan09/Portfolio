import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { ExperienceSection } from "@/components/experience/experience-section";

export const metadata: Metadata = {
  title: "Experience — Harsh Vardhan",
  description:
    "Full stack and systems work across Vyor AI and GAIL — CRM platforms, ERP systems, and internal tooling.",
};

export default function ExperiencePage() {
  // The timeline is the last thing on this page, so without trailing space its
  // bottom can never reach the viewport centre and the progress line stalls.
  return (
    <>
      <SiteHeader />
      <div className="pb-[50vh]">
        <ExperienceSection heading="plain" />
      </div>
    </>
  );
}
