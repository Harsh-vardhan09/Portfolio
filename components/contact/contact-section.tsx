import { ArrowUpRight } from "lucide-react";
import { socials } from "@/data/site";
import { focusRing } from "@/lib/focus";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  const mail = socials.find((s) => s.icon === "mail");
  const elsewhere = socials.filter((s) => s.icon !== "mail");

  return (
    <section id="contact" className="scroll-mt-24 pt-32 md:pt-48">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        <h2 className="max-w-[14ch] font-medium leading-[0.95] tracking-[-0.035em] text-[clamp(3rem,10vw,9rem)]">
          Let&rsquo;s build something.
        </h2>

        {mail && <ContactForm mailto={mail.href} />}

        <ul className="mt-16 flex flex-wrap gap-x-8 gap-y-3">
          {elsewhere.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target="_blank"
                rel="noreferrer noopener"
                className={`group inline-flex items-center gap-1 text-foreground/70 transition-colors hover:text-foreground ${focusRing}`}
              >
                {social.label}
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>

        <footer className="mt-24 flex flex-wrap items-center justify-between gap-2 border-t border-border py-8 text-[13px] text-foreground/45">
          <span>© 2026 Harsh Vardhan</span>
          <span>Built with Next.js</span>
        </footer>
      </div>
    </section>
  );
}
