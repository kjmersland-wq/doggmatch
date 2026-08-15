import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useT } from "@/i18n";
import { cn } from "@/lib/utils";
import { ButtonLink, Arrow } from "./ui";

const links = [
  { to: "/find-my-dog", key: "findMyDog" },
  { to: "/breeds", key: "breeds" },
  { to: "/compare", key: "compare" },
  { to: "/dog-life", key: "dogLife" },
  { to: "/guides", key: "guides" },
] as const;

export function SiteHeader() {
  const t = useT();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border/70 bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="container-page flex h-[72px] items-center justify-between gap-8">
        <Link to="/" className="flex items-baseline gap-[2px]" aria-label={t.brand.name}>
          <span className="font-display text-[1.35rem] font-semibold tracking-[-0.04em]">Dog</span>
          <span className="font-display text-[1.35rem] font-semibold tracking-[-0.04em] text-primary">
            Match
          </span>
          <span className="ml-[3px] h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-[0.9375rem] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {t.nav[l.key]}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink to="/find-my-dog" tone="primary" size="md">
            {t.nav.startMatching}
            <Arrow />
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? t.nav.close : t.nav.menu}
          className="grid h-11 w-11 place-items-center rounded-full border border-border-strong lg:hidden"
        >
          <span className="relative block h-3 w-4">
            <span
              className={cn(
                "absolute inset-x-0 top-0 h-px bg-foreground transition-transform duration-300",
                open && "top-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute inset-x-0 bottom-0 h-px bg-foreground transition-transform duration-300",
                open && "bottom-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {open && (
        <div className="animate-fade border-t border-border bg-background lg:hidden">
          <nav className="container-page flex flex-col py-4" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="border-b border-border/60 py-4 font-display text-xl tracking-tight last:border-0"
              >
                {t.nav[l.key]}
              </Link>
            ))}
            <ButtonLink to="/find-my-dog" size="lg" className="mt-5 w-full">
              {t.nav.startMatching}
              <Arrow />
            </ButtonLink>
          </nav>
        </div>
      )}
    </header>
  );
}
