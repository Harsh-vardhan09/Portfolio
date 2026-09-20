import { ArrowDown } from "lucide-react";
import { icons } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { hero, nav, socials } from "@/data/site";
import { HeroStage } from "./hero-stage";

const focus =
  "outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground";

export function Hero() {
  return (
    <>
      <section className="relative h-dvh overflow-hidden">
        <HeroStage hero={hero} />

        {/* Chrome sits above every stage layer */}
        {/* No z-index here on purpose: a z-indexed wrapper would become its own stacking
            context and leave mix-blend-difference below with nothing to blend against.
            DOM order already paints this above the stage. */}
        <div className="pointer-events-none absolute inset-0 p-6 text-foreground md:p-10">
          <div className="pointer-events-auto absolute inset-x-6 top-6 flex items-start justify-between gap-6 md:inset-x-10 md:top-10">
          <p className="min-w-0 truncate text-[13px] tracking-[0.02em] text-foreground/60">
            {hero.copyright}
          </p>

          <div className="flex shrink-0 items-center gap-4 sm:gap-6">
          <nav className="flex gap-4 text-[13px] tracking-[0.02em] sm:gap-6">
            {nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`group relative ${focus}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </a>
            ))}
          </nav>
          <ThemeToggle className={`text-foreground/70 transition-colors hover:text-foreground ${focus}`} />
          </div>
          </div>

          {/* Below the name, split to either side of the centred portrait.
              Stacks on mobile, where the two would collide. */}
          <div className="absolute inset-x-6 top-[60%] flex flex-col gap-1 font-medium leading-[1.05] tracking-[-0.035em] text-[clamp(1.25rem,3vw,2.5rem)] text-white mix-blend-difference md:inset-x-10 md:flex-row md:justify-between">
            <p>{hero.roleLines[0]}</p>
            <p className="md:text-right">{hero.roleLines[1]}</p>
          </div>

          <ul className="pointer-events-auto absolute bottom-6 left-6 flex flex-col gap-5 md:bottom-10 md:left-10">
            {socials.map((social) => {
              const Icon = icons[social.icon];
              return (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    target={social.icon === "mail" ? undefined : "_blank"}
                    rel="noreferrer"
                    className={`block text-foreground/70 transition-colors hover:text-foreground ${focus}`}
                  >
                    <Icon className="size-[20px]" />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-white/70 mix-blend-difference md:bottom-10">
            <span>{hero.scrollCue}</span>
            <ArrowDown className="size-3.5 motion-safe:animate-bounce" />
          </div>
        </div>
      </section>

    </>
  );
}
