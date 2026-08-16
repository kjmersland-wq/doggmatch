import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useLocale, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

const LABELS: Record<Locale, string> = { en: "English", no: "Norsk" };
const SHORT: Record<Locale, string> = { en: "EN", no: "NO" };
const ARIA_LABEL: Record<Locale, string> = {
  en: "Choose language",
  no: "Velg språk",
};

const options: Locale[] = ["en", "no"];

/** Compact language switcher. Scales from a pill (2 languages) to a dropdown (many). */
export function LanguageToggle({
  className,
  withLabel = false,
}: {
  className?: string;
  withLabel?: boolean;
}) {
  const { locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("mousedown", onClick);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  // Two languages: keep it as a simple horizontal pill.
  if (!withLabel && options.length === 2) {
    return (
      <div
        role="group"
        aria-label={ARIA_LABEL[locale]}
        className={cn(
          "inline-flex items-center rounded-full border border-border/60 bg-surface/50 p-0.5 backdrop-blur-sm",
          className,
        )}
      >
        {options.map((code) => {
          const active = locale === code;
          return (
            <button
              key={code}
              type="button"
              onClick={() => setLocale(code)}
              aria-pressed={active}
              className={cn(
                "relative rounded-full px-2.5 py-1.5 text-[0.75rem] font-medium leading-none tracking-wide transition-all",
                active
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {SHORT[code]}
            </button>
          );
        })}
      </div>
    );
  }

  // Three or more languages, or the mobile drawer: use a scalable dropdown.
  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={ARIA_LABEL[locale]}
        className="flex h-10 items-center gap-2 rounded-full border border-border/60 bg-surface/50 px-3 text-[0.8125rem] font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-surface"
      >
        <Globe className="h-4 w-4 text-muted-foreground" aria-hidden />
        {withLabel ? LABELS[locale] : SHORT[locale]}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[10rem] rounded-2xl border border-border/70 bg-background p-1.5 shadow-lg">
          {options.map((code) => {
            const active = locale === code;
            return (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setLocale(code);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between rounded-xl px-3 py-2 text-left text-[0.9375rem] transition-colors",
                  active ? "bg-surface font-medium text-foreground" : "text-muted-foreground hover:bg-surface/60",
                )}
              >
                <span>{LABELS[code]}</span>
                {active && <Check className="h-4 w-4 text-accent" aria-hidden />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
