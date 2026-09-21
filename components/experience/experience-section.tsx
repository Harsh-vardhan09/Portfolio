import { SectionIndex } from "@/components/section-heading";
import { experience } from "@/data/experience";
import { ExperienceHeading } from "./experience-heading";
import { ExperienceTimeline } from "./experience-timeline";

/**
 * One component, two mount points: the homepage section and /experience.
 * `heading` swaps the masked display type for a plain page title.
 */
export function ExperienceSection({
  heading = "masked",
}: {
  heading?: "masked" | "plain";
}) {
  return (
    <section id="experience" className="scroll-mt-24 py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionIndex>02 / Experience</SectionIndex>
        <div className="mt-12">
          {heading === "masked" ? (
            <ExperienceHeading text="EXPERIENCE" />
          ) : (
            <h2 className="font-medium leading-[1.05] tracking-[-0.04em] text-[clamp(2.5rem,8vw,6rem)]">
              EXPERIENCE
            </h2>
          )}
        </div>
        <div className="mt-16">
          <ExperienceTimeline entries={experience} />
        </div>
      </div>
    </section>
  );
}
