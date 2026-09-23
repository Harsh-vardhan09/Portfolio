"use client";

import { useState } from "react";
import { useMedia } from "@/lib/use-media";
import DepthCarousel from "@/components/DepthCarousel";
import type { Certificate } from "@/data/certificates";

export function CertificatesCarousel({ items }: { items: Certificate[] }) {
  const [active, setActive] = useState(0);
  // A 380px card cannot fit a 380px viewport, so shrink the card on small screens.
  const narrow = useMedia("(max-width: 640px)", false);
  // On wide screens the 1056px container leaves plenty of room for a larger card.
  const wide = useMedia("(min-width: 1024px)", false);
  const current = items[active];

  const slides = items.map((c) => ({
    image: c.image as string,
    alt: `${c.title} — ${c.issuer}`,
  }));

  return (
    <div>
      {/* Full-bleed on mobile: cancelling the section padding widens the auto-scale
          budget, which is what sizes the front card. */}
      <div className="relative -mx-6 h-[400px] overflow-hidden md:mx-0 md:h-[600px] lg:h-[740px]">
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
          depth={narrow ? 80 : 220}
          spread={narrow ? 10 : 90}
          tilt={22}
          tiltDirection="right"
          perspective={narrow ? 2200 : 1400}
          visibleCards={narrow ? 3 : 4}
          falloff={0.2}
          blur={6}
          autoplay={false}
          loop
          // Square card: three badges are exactly 1:1 and the certificates sit at
          // 1.29, 1.41 and 0.71, so a square frame letterboxes the whole set least.
          // Widths stay inside the container at every breakpoint, so the card
          // renders the same whether or not the auto-scale has kicked in.
          cardWidth={narrow ? 300 : wide ? 620 : 480}
          cardHeight={narrow ? 300 : wide ? 620 : 480}
          fitPadding={narrow ? 16 : 120}
          radius={18}
          duration={700}
          ease="power3.out"
          autoplayDelay={3200}
          // The arrows sit at the container edges and overlapped the larger mobile
          // card; touch has swipe and the dots, so drop them on narrow screens.
          showControls={!narrow}
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
