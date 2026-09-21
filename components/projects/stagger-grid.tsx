"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "@/lib/gsap"; // importing this module registers ScrollTrigger

/**
 * Thin animated wrapper: the cards themselves stay server-rendered and arrive
 * here as children, so no project data crosses into the client bundle.
 */
export function StaggerGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.fromTo(
          "[data-card]",
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: root.current, start: "top 85%", once: true },
          }
        );
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}
