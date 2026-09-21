"use client";

import MaskedHeading from "@/components/MaskedHeading";
import { useMedia } from "@/lib/use-media";

/** Echoes the hero's masked type without repeating the name. */
export function ExperienceHeading({ text }: { text: string }) {
  const reduced = useMedia("(prefers-reduced-motion: reduce)", true);

  return (
    <MaskedHeading
      tag="h2"
      text={text}
      src="/Main.png"
      mediaType="image"
      reveal={reduced ? "none" : "wipe"}
      trigger="view"
      align="left"
      weight={500}
      tracking={-0.04}
      textScale={0.1}
      grayscale
      mediaOpacity={0.4}
      fillColor="var(--foreground)"
      parallax={reduced ? 0 : 20}
      drift={reduced ? 0 : 12}
    />
  );
}
