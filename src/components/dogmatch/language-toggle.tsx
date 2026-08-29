import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown } from "lucide-react";
import { useLocale, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

/** Real Unicode flag emoji, the two-letter code and the native language name. */
const LANGS: { code: Locale; flag: string; short: string; label: string }[] = [
  { code: "en", flag: "🇬🇧", short: "GB", label: "English" },
  { code: "no", flag: "🇳🇴", short: "NO", label: "Norsk" },
  { code: "pl", flag: "🇵🇱", short: "PL", label: "Polski" },
];

const ARIA_LABEL: Record<Locale, string> = {
  en: "Choose language",
  no: "Velg språk",
  pl: "Wybierz język",
};

const MENU_LABEL: Record<Locale, string> = {
  en: "Languages",
  no: "Språk",
  pl: "Języki",
};

/**
 * Compact flag + code language dropdown. Keyboard accessible, works the same
 * in the desktop header and the mobile drawer.
 */
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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const current = (LANGS.find((l) => l.code === locale) ?? LANGS[0])!;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
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

  const choose = (code: Locale) => {
    setLocale(code);
    setOpen(false);
    buttonRef.current?.focus();
  };

  /** Roving keyboard support inside the open list. */
  const onListKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(
      ref.current?.querySelectorAll<HTMLButtonElement>("[role='menuitemradio']") ?? [],
    );
    const index = items.indexOf(document.activeElement as HTMLButtonElement);
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      const next = e.key === "ArrowDown" ? index + 1 : index - 1;
      items[(next + items.length) % items.length]?.focus();
    }
  };

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={`${ARIA_LABEL[locale]} — ${current.label}`}
        className={cn(
          "flex h-10 items-center gap-1.5 rounded-full border border-border/60 bg-surface/50 px-3 text-[0.8125rem] font-medium leading-none text-foreground backdrop-blur-sm transition-colors hover:bg-surface",
          withLabel && "w-full justify-between",
        )}
      >
        <span className="flex items-center gap-1.5">
          <span aria-hidden className="text-base leading-none">
            {current.flag}
          </span>
          <span className="tracking-wide">{withLabel ? current.label : current.short}</span>
        </span>
        <ChevronDown
          className={cn("h-3.5 w-3.5 text-muted-foreground transition-transform", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open && (
        <div
          role="menu"
          aria-label={MENU_LABEL[locale]}
          onKeyDown={onListKeyDown}
          className={cn(
            "absolute z-50 mt-2 min-w-[9.5rem] rounded-2xl border border-border/70 bg-background p-1.5 shadow-lg",
            withLabel ? "left-0 bottom-full mb-2 mt-0 w-full" : "right-0 top-full",
          )}
        >
          {LANGS.map((l) => {
            const active = locale === l.code;
            return (
              <button
                key={l.code}
                type="button"
                role="menuitemradio"
                aria-checked={active}
                onClick={() => choose(l.code)}
                className={cn(
                  "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-[0.9375rem] transition-colors",
                  active
                    ? "bg-surface font-medium text-foreground"
                    : "text-muted-foreground hover:bg-surface/60 hover:text-foreground",
                )}
              >
                <span className="flex items-center gap-2">
                  <span aria-hidden className="text-base leading-none">
                    {l.flag}
                  </span>
                  <span className="font-medium tracking-wide">{l.short}</span>
                  <span className="text-[0.8125rem] text-muted-foreground">{l.label}</span>
                </span>
                {active && <Check className="h-4 w-4 shrink-0 text-accent" aria-hidden />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
