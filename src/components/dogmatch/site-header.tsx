import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, UserRound } from "lucide-react";
import { useT } from "@/i18n";
import { cn } from "@/lib/utils";
import { ButtonLink, Arrow } from "./ui";
import { BrandLock } from "./brand-logo";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { useNavGroups } from "./nav-structure";

export function SiteHeader() {
  const t = useT();
  const navGroups = useNavGroups();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<string | null>(null);
  const [mobileGroup, setMobileGroup] = useState<string | null>(navGroups[0]?.id ?? null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
    setMenu(null);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menu) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenu(null);
    const onClick = (e: MouseEvent) => {
      if (!barRef.current?.contains(e.target as Node)) setMenu(null);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [menu]);

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 print:hidden",
        scrolled || open || menu
          ? "border-b border-border/70 bg-background/90 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div ref={barRef} className="relative">
        <div className="container-page flex h-[72px] items-center justify-between gap-6">
          <Link to="/" aria-label={t.brand.name} className="shrink-0">
            <BrandLock markClassName="h-9 w-9" wordmarkClassName="text-[1.35rem]" />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navGroups.map((g) => {
              const active = menu === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  aria-expanded={active}
                  onClick={() => setMenu(active ? null : g.id)}
                  onMouseEnter={() => setMenu(g.id)}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[0.9375rem] transition-colors",
                    active ? "bg-surface text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {g.label}
                  <ChevronDown
                    className={cn("h-3.5 w-3.5 transition-transform", active && "rotate-180")}
                    aria-hidden
                  />
                </button>
              );
            })}
            <Link
              to="/plus"
              className="ml-1 flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.9375rem] text-muted-foreground transition-colors hover:text-foreground"
            >
              DoggMatch<span className="font-semibold text-accent">+</span>
            </Link>
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <LanguageToggle />
            <ThemeToggle />
            <Link
              to="/account"
              aria-label={t.nav.account}
              className="grid h-10 w-10 place-items-center rounded-full border border-border-strong text-foreground transition-colors hover:bg-surface"
            >
              <UserRound className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden />
            </Link>
            <ButtonLink to="/find-my-dog" tone="primary" size="md">
              {t.nav.startMatching}
              <Arrow />
            </ButtonLink>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? t.nav.close : t.nav.menu}
              className="grid h-10 w-10 place-items-center rounded-full border border-border-strong"
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
        </div>

        {/* Desktop mega menu */}
        {navGroups.map((g) =>
          menu === g.id ? (
            <div
              key={g.id}
              onMouseLeave={() => setMenu(null)}
              className="animate-fade absolute inset-x-0 top-full hidden border-b border-border bg-background/98 backdrop-blur-xl lg:block"
            >
              <div className="container-page grid gap-10 py-10 md:grid-cols-[minmax(0,1fr)_2.2fr]">
                <div className="max-w-xs">
                  <p className="eyebrow">{g.label}</p>
                  <p className="mt-3 font-display text-xl leading-snug tracking-tight text-foreground">
                    {g.blurb}
                  </p>
                </div>
                <ul className="grid gap-x-8 gap-y-1 sm:grid-cols-2 xl:grid-cols-3">
                  {g.items.map((item) => (
                    <li key={item.to}>
                      <Link
                        to={item.to}
                        className="block rounded-2xl px-4 py-3 transition-colors hover:bg-surface"
                        activeProps={{ className: "bg-surface" }}
                      >
                        <span className="block text-[0.9375rem] font-medium text-foreground">
                          {item.label}
                        </span>
                        <span className="mt-0.5 block text-[0.8125rem] leading-snug text-muted-foreground">
                          {item.hint}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : null,
        )}
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="animate-fade h-[calc(100dvh-72px)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <div className="container-page py-5">
            <ButtonLink to="/find-my-dog" size="lg" className="w-full">
              {t.nav.startMatching}
              <Arrow />
            </ButtonLink>

            <Link
              to="/plus"
              onClick={() => setOpen(false)}
              className="mt-3 flex h-12 w-full items-center justify-center rounded-full border border-border-strong text-[0.9375rem] font-medium"
            >
              DoggMatch<span className="font-semibold text-accent">+</span>
            </Link>

            <nav className="mt-6 divide-y divide-border/70" aria-label="Mobile">
              {navGroups.map((g) => {
                const expanded = mobileGroup === g.id;
                return (
                  <div key={g.id} className="py-1">
                    <button
                      type="button"
                      aria-expanded={expanded}
                      onClick={() => setMobileGroup(expanded ? null : g.id)}
                      className="flex w-full items-center justify-between py-4 text-left"
                    >
                      <span className="font-display text-xl tracking-tight text-foreground">
                        {g.label}
                      </span>
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 text-muted-foreground transition-transform",
                          expanded && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                    {expanded && (
                      <ul className="pb-3">
                        {g.items.map((item) => (
                          <li key={item.to}>
                            <Link
                              to={item.to}
                              className="block rounded-2xl px-3 py-3 transition-colors active:bg-surface"
                            >
                              <span className="block text-[0.9375rem] font-medium text-foreground">
                                {item.label}
                              </span>
                              <span className="mt-0.5 block text-[0.8125rem] text-muted-foreground">
                                {item.hint}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="mt-6 space-y-3 pb-24">
              <LanguageToggle withLabel />
              <ThemeToggle withLabel />
              <Link
                to="/account"
                className="flex items-center gap-2.5 rounded-2xl border border-border-strong px-4 py-3 text-sm text-foreground"
              >
                <UserRound className="h-4 w-4" aria-hidden />
                {t.nav.account}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
