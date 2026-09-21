"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap"; // importing this module registers ScrollTrigger
import type { Experience } from "@/data/experience";

const dateRange = (e: Experience) => `${e.startDate} – ${e.endDate ?? "Present"}`;

export function ExperienceTimeline({ entries }: { entries: Experience[] }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap
          .timeline({
            scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
          })
          .fromTo(
            "[data-rule]",
            { scaleY: 0 },
            { scaleY: 1, duration: 0.8, ease: "power3.out", transformOrigin: "top" }
          )
          .fromTo(
            "[data-entry]",
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.7, ease: "power3.out", stagger: 0.12 },
            0.25
          );
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={root} className="relative pl-6 md:pl-8">
      <div
        data-rule
        aria-hidden
        className="absolute left-0 top-1.5 h-[calc(100%-0.375rem)] w-px bg-border"
      />
      <ol className="space-y-16">
        {entries.map((entry) => (
          <li key={`${entry.company}-${entry.role}`} data-entry className="relative">
            <span
              aria-hidden
              className={`absolute -left-6 top-3 size-[7px] border border-foreground md:-left-8 ${
                entry.current ? "bg-foreground" : "bg-transparent"
              }`}
            />
            {/* Role and company stay together so that below md the date falls under
                both; on md+ items-baseline puts the date on the role's baseline. */}
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
              <div>
                <h3 className="font-medium leading-[1.05] tracking-[-0.035em] text-[clamp(1.75rem,3vw,2.5rem)]">
                  {entry.role}
                </h3>
                <p className="mt-1 text-lg text-foreground/60">{entry.company}</p>
              </div>
              <p className="shrink-0 text-[13px] tabular-nums text-foreground/60 md:text-right">
                {dateRange(entry)}
                {entry.current && <span className="sr-only"> (current role)</span>}
              </p>
            </div>
            <ul className="mt-6 max-w-[62ch] space-y-2 leading-relaxed">
              {entry.description.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
            <p className="mt-6 text-[13px] text-foreground/55">
              {entry.technologies.join(", ")}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
