import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Harsh Vardhan`,
    description: project.description,
  };
}

/** Scaffold: every section below renders only when its data exists. */
export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const stats = [
    project.contributors && { label: "Contributors", value: `${project.contributors}+` },
    project.users && { label: "Users", value: `${project.users}+` },
  ].filter(Boolean) as { label: string; value: string }[];

  const links = [
    { label: "GitHub", href: project.github },
    { label: "Live Demo", href: project.live },
    { label: "Demo", href: project.demo },
  ].filter((l) => l.href);

  return (
    <article className="py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <p className="text-[13px] tabular-nums text-foreground/55">{project.year}</p>
        <h1 className="mt-4 max-w-[20ch] font-medium leading-[1.05] tracking-[-0.04em] text-[clamp(2rem,6vw,4.5rem)]">
          {project.title}
        </h1>
        <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-foreground/70">
          {project.description}
        </p>

        {project.overview && (
          <section className="mt-20">
            <h2 className="text-[13px] uppercase tracking-[0.2em] text-foreground/50">
              Overview
            </h2>
            <p className="mt-6 max-w-[65ch] leading-relaxed">{project.overview}</p>
          </section>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <section className="mt-20">
            <h2 className="text-[13px] uppercase tracking-[0.2em] text-foreground/50">
              Highlights
            </h2>
            <ul className="mt-6 max-w-[62ch] space-y-2 leading-relaxed">
              {project.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>
        )}

        {stats.length > 0 && (
          <section className="mt-20">
            <h2 className="text-[13px] uppercase tracking-[0.2em] text-foreground/50">
              Contributions
            </h2>
            <dl className="mt-6 flex gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-[13px] text-foreground/55">{stat.label}</dt>
                  <dd className="mt-1 font-medium tracking-[-0.035em] text-[clamp(1.75rem,3vw,2.5rem)] tabular-nums">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        <section className="mt-20">
          <h2 className="text-[13px] uppercase tracking-[0.2em] text-foreground/50">
            Tech Stack
          </h2>
          <p className="mt-6 max-w-[62ch] leading-relaxed">
            {project.technologies.join(", ")}
          </p>
        </section>

        {links.length > 0 && (
          <section className="mt-20">
            <h2 className="text-[13px] uppercase tracking-[0.2em] text-foreground/50">
              Links
            </h2>
            <ul className="mt-6 flex flex-wrap gap-6">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/70 underline-offset-4 transition-colors hover:text-foreground hover:underline focus-visible:outline-solid focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
