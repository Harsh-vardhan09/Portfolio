import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { focusRing } from "@/lib/focus";
import { nav } from "@/data/site";

/**
 * Header for the sub-pages, which render no hero and would otherwise be dead
 * ends. Section links are rewritten to absolute form so they reach the homepage
 * rather than appending a hash to the current route.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-4 md:px-12">
        <Link
          href="/"
          className={`group flex items-center gap-2 text-[13px] tracking-[0.02em] ${focusRing}`}
        >
          <span aria-hidden className="transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-0.5">
            ←
          </span>
          Harsh Vardhan
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-4 sm:gap-6">
          {/* Below sm these five wrap to 3-5 rows and make a sticky header ~150px
              tall. The back link alone covers the way home at that size. */}
          <nav className="hidden flex-wrap justify-end gap-x-4 gap-y-1 text-[13px] tracking-[0.02em] sm:flex sm:gap-x-6">
            {nav.map((link) => (
              <Link
                key={link.href}
                href={link.href.startsWith("#") ? `/${link.href}` : link.href}
                className={`group relative text-foreground/70 transition-colors hover:text-foreground ${focusRing}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 group-focus-visible:scale-x-100" />
              </Link>
            ))}
          </nav>
          <ThemeToggle className={`shrink-0 text-foreground/70 transition-colors hover:text-foreground ${focusRing}`} />
        </div>
      </div>
    </header>
  );
}
