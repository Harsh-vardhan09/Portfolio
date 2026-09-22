import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import { SectionIndex } from "@/components/section-heading";
import { ProjectCard } from "@/components/projects/project-card";
import { StaggerGrid } from "@/components/projects/stagger-grid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Harsh Vardhan",
  description:
    "Projects by Harsh Vardhan — full stack web applications and developer tools.",
};

export default function ProjectsPage() {
  // projects is already sorted year-descending at export.
  const years = [...new Set(projects.map((p) => p.year))];

  return (
    <>
      <SiteHeader />
      <section className="py-32 md:py-48">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <SectionIndex>Projects</SectionIndex>
          <h1 className="mt-12 font-medium leading-[1.05] tracking-[-0.04em] text-[clamp(2.5rem,8vw,6rem)]">
            PROJECTS
          </h1>

          <div className="mt-16 space-y-16">
            {years.map((year) => (
              <div
                key={year}
                className="lg:grid lg:grid-cols-[6rem_1fr] lg:gap-8"
              >
                <p className="mb-6 text-[13px] tabular-nums text-foreground/55 lg:sticky lg:top-24 lg:mb-0 lg:self-start">
                  {year}
                </p>
                <StaggerGrid className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
                  {projects
                    .filter((p) => p.year === year)
                    .map((project) => (
                      <ProjectCard key={project.slug} project={project} />
                    ))}
                </StaggerGrid>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
