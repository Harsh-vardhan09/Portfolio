import AccordionGallery from "@/components/AccordionGallery";
import { resolveProjectImage } from "@/lib/project-image";
import { projectPlaceholder } from "@/lib/project-placeholder";
import type { Project } from "@/data/projects";

/**
 * Server component: builds plain serializable items and hands them to the
 * client gallery, so no project data logic ships to the browser.
 */
export function ProjectsAccordion({ projects }: { projects: Project[] }) {
  const items = projects.map((project) => ({
    image: resolveProjectImage(project.image) ?? projectPlaceholder(project.title),
    label: project.title.split("–")[0].trim(),
    alt: project.title,
    link: `/projects/${project.slug}`,
  }));

  return (
    <AccordionGallery
      items={items}
      defaultIndex={2}
      expandRatio={0.42}
      trigger="hover"
      // Theme tokens rather than the demo's pink/purple: the palette is
      // near-monochrome and the accent defaults to none.
      accentColor="var(--foreground)"
      overlayColor="#0D0D0D"
      textColor="#FFFFFF"
      grayscale
      showLabels
      duration={0.6}
      ease="power4.out"
      parallax={0.95}
      tilt={7}
      stagger={0.09}
      height={490}
      gap={10}
      radius={10}
      orientation="horizontal"
    />
  );
}
