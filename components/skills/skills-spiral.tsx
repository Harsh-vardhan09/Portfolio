"use client";

import InfiniteSpiral from "@/components/InfiniteSpiral";
import type { Skill } from "@/data/skills";

/** Decoration only — it duplicates the list, so the wrapper is aria-hidden. */
export function SkillsSpiral({ skills }: { skills: Skill[] }) {
  const items = skills
    .filter((s) => s.icon)
    .map((s) => ({ id: s.name, src: s.icon as string, alt: "" }));

  // A sparse spiral reads as broken, so below this it is better to render nothing.
  if (items.length < 8) return null;

  return (
    <div aria-hidden className="hidden h-[520px] lg:block">
      <InfiniteSpiral
        items={items}
        animationMode="all"
        speed={0.4}
        grayscale={1}
        cardWidth={72}
        cardHeight={72}
        cardRadius={12}
        cardsPerTurn={7}
        verticalSpacing={56}
        edgeFade={0.35}
        pauseOnHover
        cardChrome="border border-border"
      />
    </div>
  );
}
