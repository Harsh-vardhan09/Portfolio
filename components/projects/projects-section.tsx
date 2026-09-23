import Link from "next/link";
import { SectionIndex } from "@/components/section-heading";
import { featuredProjects, projects } from "@/data/projects";
import { ProjectCard } from "./project-card";
import { ProjectsAccordion } from "./projects-accordion";
import { StaggerGrid } from "./stagger-grid";

const HOME_LIMIT = 6;

export function ProjectsSection() {
  const shown = featuredProjects.slice(0, HOME_LIMIT);
  const hasMore = projects.length > featuredProjects.length;

  return (
    <section id="projects" className="scroll-mt-24 py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionIndex>03 / Projects</SectionIndex>
        {/* Below lg the accordion splits into ~84px slivers, which shows nothing
            useful, so small screens get the card grid instead. */}
        <StaggerGrid className="mt-12 grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:hidden">
          {shown.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          ))}
        </StaggerGrid>

        <div className="mt-12 hidden lg:block">
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
