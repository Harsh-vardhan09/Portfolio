"use client";

import { useState } from "react";
import { useMedia } from "@/lib/use-media";
import DepthCarousel from "@/components/DepthCarousel";
import type { Certificate } from "@/data/certificates";

export function CertificatesCarousel({ items }: { items: Certificate[] }) {
  const [active, setActive] = useState(0);
  // A 380px card cannot fit a 380px viewport, so shrink the card on small screens.
  const narrow = useMedia("(max-width: 640px)", false);
  const current = items[active];

  const slides = items.map((c) => ({
    image: c.image as string,
    alt: `${c.title} — ${c.issuer}`,
  }));

  return (
    <div>
      <div className="relative h-[320px] overflow-hidden md:h-[440px]">
        <DepthCarousel
          items={slides}
          onChange={(index) => setActive(index)}
          // contain, not cover: certificates are landscape and badges are square,
          // so cropping to a single card ratio would cut the content off.
          imageFit="contain"
          // Vertical wheel belongs to the page; drag, arrows and dots drive the carousel.
          wheelAxis="horizontal"
          cardSurface="bg-background"
          tint="var(--background)"
          depth={220}
          spread={90}
          tilt={22}
          tiltDirection="right"
          perspective={1400}
          visibleCards={4}
          falloff={0.2}
          blur={6}
          autoplay={false}
          loop
          // Landscape card: four of the items are landscape certificates and the
          // rest are square badges, so a portrait card wasted vertical space.
          cardWidth={narrow ? 240 : 380}
          cardHeight={narrow ? 178 : 280}
          radius={18}
          duration={700}
          ease="power3.out"
          autoplayDelay={3200}
          showControls
          showIndicators
        />
      </div>

      {/* Live region: the carousel is draggable and keyboard-driven, so the
          caption has to announce the card that is actually in front. */}
      <div aria-live="polite" className="mt-10 text-center">
        <p className="font-medium tracking-[-0.02em] text-[clamp(1.125rem,2vw,1.5rem)]">
          {current.title}
        </p>
        <p className="mt-1 text-sm text-foreground/60">
          {current.issuer}
          {current.date && <span className="tabular-nums"> · {current.date}</span>}
        </p>
      </div>
    </div>
  );
}
