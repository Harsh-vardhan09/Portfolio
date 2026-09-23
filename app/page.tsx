import { Hero } from "@/components/hero/hero";
import { ExperienceSection } from "@/components/experience/experience-section";
import { SkillsSection } from "@/components/skills/skills-section";
import { ProjectsSection } from "@/components/projects/projects-section";
import { CertificatesSection } from "@/components/certificates/certificates-section";
import { ContactSection } from "@/components/contact/contact-section";

export default function Home() {
  return (
    <>
      <Hero />
      <section id="about" className="scroll-mt-24" />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
    </>
  );
}
