import { SectionIndex } from "@/components/section-heading";
import { certificates } from "@/data/certificates";
import { CertificatesCarousel } from "./certificates-carousel";

export function CertificatesSection() {
  const withImages = certificates.filter((c) => c.image);
  if (withImages.length === 0) return null;

  return (
    <section id="certificates" className="scroll-mt-24 py-32 md:py-48">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <SectionIndex>04 / Certificates &amp; Badges</SectionIndex>
        <div className="mt-16">
          <CertificatesCarousel items={withImages} />
        </div>
      </div>
    </section>
  );
}
