import { SectionIndex } from "@/components/section-heading";
import { allSkills, skillCategories } from "@/data/skills";
import { SkillsList } from "./skills-list";
import { SkillsSpiral } from "./skills-spiral";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionIndex>01 / Skills</SectionIndex>
        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <SkillsList categories={skillCategories} />
          <SkillsSpiral skills={allSkills} />
        </div>
      </div>
    </section>
  );
}
