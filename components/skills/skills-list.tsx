"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap"; // importing this module registers ScrollTrigger
import type { SkillCategory } from "@/data/skills";

/**
 * The real content. Client-only for the scroll stagger — the markup itself is
 * static and renders identically with JS off.
 */
export function SkillsList({ categories }: { categories: SkillCategory[] }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        // fromTo, not from: under Strict Mode the double-invoked effect would
        // re-read the already-hidden state as the destination and animate 0 -> 0.
        gsap.fromTo(
          "[data-skill]",
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: { trigger: root.current, start: "top 80%", once: true },
          }
        );
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={root} className="group/list border-b border-border">
      {categories.map((category) => (
        <div
          key={category.name}
          className="group/row grid grid-cols-1 gap-2 border-t border-border py-6 transition-opacity duration-300 md:grid-cols-[10rem_1fr] md:gap-6 group-hover/list:opacity-35 hover:!opacity-100"
        >
          <h3 className="text-[13px] uppercase tracking-wide text-foreground/55">
            {category.name}
          </h3>
          <ul className="flex flex-wrap gap-x-5 gap-y-2">
            {category.items.map((skill) => (
              <li key={skill.name} data-skill className="text-base">
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
