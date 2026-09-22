"use client";

import { useLayoutEffect, useRef } from "react";
// Importing this module registers ScrollTrigger.
import { gsap, ScrollTrigger } from "@/lib/gsap";
import type { Experience } from "@/data/experience";

/** Year-only entries carry no endDate and are not current, so show a single date. */
const dateRange = (e: Experience) =>
  e.current
    ? `${e.startDate} – Present`
    : e.endDate
      ? `${e.startDate} – ${e.endDate}`
      : e.startDate;

// Halo on the leading tip. color-mix on the theme token so it follows the toggle.
const headGlow = {
  boxShadow:
    "0 0 0 4px color-mix(in srgb, var(--foreground) 12%, transparent), 0 0 18px color-mix(in srgb, var(--foreground) 35%, transparent)",
};

export function ExperienceTimeline({ entries }: { entries: Experience[] }) {
  const root = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    // Everything below is opt-in: the markup already renders the finished state,
    // so reduced-motion and no-JS users get a complete timeline and no listeners.
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context((self) => {
        const markers = self.selector!("[data-marker]") as HTMLElement[];

        // Trigger on the rail, not root: the rail is what the head traverses, so
        // its height and the scroll range match exactly and the tip cannot drift.
        // gsap 3.15 does support the clamp string syntax here, but clamping
        // truncates the scroll range while the head still travels the full rail,
        // so the tip outruns the viewport centre. /experience gets bottom padding.
        const railTrigger = {
          trigger: rail.current,
          start: "top center",
          end: "bottom center",
          scrub: 0.6,
          invalidateOnRefresh: true,
        } as const;

        gsap.fromTo(
          "[data-progress]",
          { scaleY: 0 },
          { scaleY: 1, ease: "none", scrollTrigger: railTrigger }
        );

        // yPercent keeps the dot centred on its own position while `y` carries the
        // travel; using -translate-y-1/2 here would be folded into the same y and
        // overwritten by the tween.
        gsap.set("[data-head]", { yPercent: -50 });

        // One timeline so travel and the fades share a single scrubbed progress.
        gsap
          .timeline({ scrollTrigger: railTrigger })
          .fromTo(
            "[data-head]",
            { y: 0 },
            { y: () => rail.current?.offsetHeight ?? 0, ease: "none", duration: 1 },
            0
          )
          .fromTo(
            "[data-head]",
            { opacity: 0 },
            { opacity: 1, ease: "none", duration: 0.03 },
            0
          )
          .to("[data-head]", { opacity: 0, ease: "none", duration: 0.03 }, 0.97);

        // Markers key off center too, so each lights the moment the tip passes it.
        markers.forEach((marker) => {
          marker.dataset.reached = "false";
          ScrollTrigger.create({
            trigger: marker,
            start: "top center",
            onEnter: () => (marker.dataset.reached = "true"),
            onLeaveBack: () => (marker.dataset.reached = "false"),
          });
        });

        (self.selector!("[data-entry]") as HTMLElement[]).forEach((entry) => {
          gsap
            .timeline({
              scrollTrigger: {
                trigger: entry,
                start: "top 80%",
                end: "top 45%",
                scrub: 0.8,
              },
            })
            .fromTo(
              entry.querySelector("[data-entry-body]"),
              { opacity: 0.25, y: 24 },
              { opacity: 1, y: 0, ease: "none", duration: 1 },
              0
            )
            .fromTo(
              entry.querySelectorAll("[data-reveal]"),
              { y: 12 },
              { y: 0, ease: "none", duration: 0.6, stagger: 0.05 },
              0
            );
        });

        // MaskedHeading sizes itself after mount, which moves the timeline and
        // leaves ScrollTrigger holding stale positions.
        document.fonts?.ready.then(() => ScrollTrigger.refresh()).catch(() => {});

        const section = root.current?.closest("section");
        let timer: ReturnType<typeof setTimeout>;
        const observer = new ResizeObserver(() => {
          clearTimeout(timer);
          timer = setTimeout(() => ScrollTrigger.refresh(), 150);
        });
        if (section) observer.observe(section);

        return () => {
          clearTimeout(timer);
          observer.disconnect();
          // revert() restores styles but not attributes we set by hand.
          markers.forEach((marker) => (marker.dataset.reached = "true"));
        };
      }, root);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={root} className="relative pl-6 md:pl-8">
      <div
        ref={rail}
        aria-hidden
        className="absolute bottom-0 left-[3px] top-1.5 w-px"
      >
        <div className="absolute inset-0 bg-border" />
        <div data-progress className="absolute inset-0 origin-top bg-foreground" />
        <div
          data-head
          style={headGlow}
          className="absolute left-1/2 top-0 size-[9px] -translate-x-1/2 rounded-full bg-foreground opacity-0"
        />
      </div>

      <ol className="space-y-16">
        {entries.map((entry) => (
          <li key={`${entry.company}-${entry.role}`} data-entry className="relative">
            <span
              data-marker
              data-reached="true"
              aria-hidden
              className="absolute -left-6 top-3 size-[7px] border border-foreground/40 bg-background transition-[background-color,border-color,transform] duration-300 data-[reached=true]:scale-125 data-[reached=true]:border-foreground data-[reached=true]:bg-foreground md:-left-8"
            />
            {/* Transform lives on this wrapper, never on the <li>: the <li> is the
                ScrollTrigger target and holds the marker, and a transform there
                would corrupt both elements' cached positions. */}
            <div data-entry-body>
            {/* Role and company stay together so that below md the date falls under
                both; on md+ items-baseline puts the date on the role's baseline. */}
            <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-8">
              <div>
                <h3
                  data-reveal
                  className="font-medium leading-[1.05] tracking-[-0.035em] text-[clamp(1.75rem,3vw,2.5rem)]"
                >
                  {entry.role}
                </h3>
                <p data-reveal className="mt-1 text-lg text-foreground/60">
                  {entry.company}
                </p>
              </div>
              <p
                data-reveal
                className="flex shrink-0 items-center gap-3 text-[13px] tabular-nums text-foreground/60 md:text-right"
              >
                {dateRange(entry)}
                {entry.current && (
                  <>
                    <span className="border border-foreground/40 px-1.5 py-0.5 text-[11px] uppercase tracking-[0.18em]">
                      Now
                    </span>
                    <span className="sr-only">(current role)</span>
                  </>
                )}
              </p>
            </div>
            <ul className="mt-6 max-w-[62ch] space-y-2 leading-relaxed">
              {entry.description.map((line) => (
                <li key={line} data-reveal>
                  {line}
                </li>
              ))}
            </ul>
            <p data-reveal className="mt-6 text-[13px] text-foreground/55">
              {entry.technologies.join(", ")}
            </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
