import Image from "next/image";
import Link from "next/link";
import { resolveProjectImage } from "@/lib/project-image";
import type { Project } from "@/data/projects";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";
const MAX_TECH = 5;

export function ProjectCard({
  project,
  sizes = "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw",
}: {
  project: Project;
  sizes?: string;
}) {
  const image = resolveProjectImage(project.image);
  const shown = project.technologies.slice(0, MAX_TECH);
  const rest = project.technologies.length - shown.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      data-card
      className="group block rounded-sm border border-border p-3 transition-colors duration-300 hover:border-foreground/40 focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-sm bg-foreground/5">
        {image ? (
          <Image
            src={image}
            alt=""
            fill
            sizes={sizes}
            className={`object-cover grayscale scale-100 transition-[filter,transform] duration-500 ${EASE} group-hover:scale-[1.03] group-hover:grayscale-0`}
          />
        ) : (
          // No screenshot yet — set the title large so the frame still reads as deliberate.
          <span className="flex h-full items-end p-5 font-medium leading-[0.95] tracking-[-0.035em] text-[clamp(1.5rem,3.5vw,2.75rem)] text-foreground/25">
            {project.title.split("–")[0].trim()}
          </span>
        )}
      </div>

      <div className="flex items-center justify-between pt-4 text-[13px] tabular-nums text-foreground/55">
        <span>{project.year}</span>
        <span aria-hidden>↗</span>
      </div>
      <h3 className="pt-1 text-xl font-medium tracking-[-0.02em]">{project.title}</h3>
      <p className="max-w-[46ch] pt-2 text-sm text-foreground/65">{project.description}</p>
      <p className="pt-3 text-[13px] text-foreground/55">
        {shown.join(", ")}
        {rest > 0 && ` +${rest} more`}
      </p>
    </Link>
  );
}
