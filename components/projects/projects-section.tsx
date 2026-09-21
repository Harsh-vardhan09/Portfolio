import Link from "next/link";
import { SectionIndex } from "@/components/section-heading";
import { featuredProjects, projects } from "@/data/projects";
import { ProjectsAccordion } from "./projects-accordion";

const HOME_LIMIT = 6;

export function ProjectsSection() {
  const shown = featuredProjects.slice(0, HOME_LIMIT);
  const hasMore = projects.length > featuredProjects.length;

  return (
    <section id="projects" className="scroll-mt-24 py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionIndex>03 / Projects</SectionIndex>
        <div className="mt-12">
          <ProjectsAccordion projects={shown} />
        </div>

        {hasMore && (
          <Link
            href="/projects"
            className="mt-16 inline-block text-[13px] text-foreground/60 transition-colors hover:text-foreground focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            View all projects ↗
          </Link>
        )}
      </div>
    </section>
  );
}
