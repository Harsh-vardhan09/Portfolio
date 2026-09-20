"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import MaskedHeading from "@/components/MaskedHeading";
import type { Hero } from "@/data/site";

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function useMedia(query: string, initial: boolean) {
  const [matches, setMatches] = useState(initial);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const read = () => setMatches(mq.matches);
    read();
    mq.addEventListener("change", read);
    return () => mq.removeEventListener("change", read);
  }, [query]);
  return matches;
}

/** Portrait + masked name. Client-only: the entrance timeline and MaskedHeading both need the DOM. */
export function HeroStage({ hero }: { hero: Hero }) {
  const root = useRef<HTMLDivElement>(null);
  // MaskedHeading runs its drift/parallax rAF loop unconditionally, so gate those props ourselves.
  const reduced = useMedia("(prefers-reduced-motion: reduce)", true);
  // Below md the single line would shrink to ~29px, so let it wrap and size up instead.
  const narrow = useMedia("(max-width: 767px)", false);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        gsap.set("[data-portrait]", { opacity: 0, scale: 1.04 });
        gsap.to("[data-portrait]", {
          opacity: 1,
          scale: 1,
          duration: 0.9,
          ease: EASE,
        });
      }, root);
      return () => ctx.revert();
    });
    return () => mm.revert();
  }, []);

  return (
    <div ref={root} className="absolute inset-0 isolate">
      {/* Layer 1 — flat ground */}
      <div className="absolute inset-0 z-0 bg-background" />

      {/* Layer 2 — portrait, anchored to the bottom */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center">
        <Image
          data-portrait
          src={hero.portrait.src}
          alt={hero.portrait.alt}
          width={500}
          height={500}
          preload
          className="h-[70vh] w-auto object-contain object-bottom grayscale contrast-[1.08] md:h-[92vh]"
        />
      </div>

      {/* Layer 3 — the name, letterforms clipped out of the portrait.
          fillColor keeps the whole word readable where the cutout is transparent. */}
      <div className="absolute inset-x-0 top-[48%] z-20 -translate-y-1/2">
        <MaskedHeading
          tag="h1"
          text={hero.name}
          src={hero.portrait.src}
          mediaType="image"
          nowrap={!narrow}
          align="center"
          weight={500}
          tracking={-0.04}
          lineHeight={0.82}
          textScale={narrow ? 0.185 : 0.0935}
          maxFontSize={320}
          mediaOpacity={0.35}
          fillScale={3.2}
          brightness={1.12}
          saturation={1}
          reveal={reduced ? "none" : "rise"}
          trigger="mount"
          duration={0.9}
          stagger={0.04}
          parallax={reduced ? 0 : 26}
          drift={reduced ? 0 : 18}
        />
      </div>

      {/* Layer 4 — head and shoulders only, so the face sits in front of the letterforms */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 z-30 hidden justify-center md:flex"
        style={{ clipPath: "inset(0 0 38% 0)" }}
      >
        <Image
          data-portrait
          src={hero.portrait.src}
          alt=""
          width={500}
          height={500}
          className="h-[70vh] w-auto object-contain object-bottom grayscale contrast-[1.08] md:h-[92vh]"
        />
      </div>
    </div>
  );
}
