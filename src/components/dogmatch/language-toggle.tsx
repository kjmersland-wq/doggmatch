import { Globe } from "lucide-react";
import { useLocale, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

const LABELS: Record<Locale, string> = { en: "English", no: "Norsk" };
const SHORT: Record<Locale, string> = { en: "EN", no: "NO" };

/** English or Norwegian. Remembered on this device. */
export function LanguageToggle({
  className,
  withLabel = false,
}: {
  className?: string;
  withLabel?: boolean;
}) {
  const { locale, setLocale } = useLocale();
  const next: Locale = locale === "no" ? "en" : "no";

  if (withLabel) {
    return (
      <button
        type="button"
        onClick={() => setLocale(next)}
        className={cn(
          "flex w-full items-center justify-between rounded-2xl border border-border-strong px-4 py-3 text-sm",
          className,
        )}
      >
        <span className="flex items-center gap-2.5 text-foreground">
          <Globe className="h-4 w-4" aria-hidden />
          {LABELS[locale]}
        </span>
        <span className="text-muted-foreground">{LABELS[next]}</span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setLocale(next)}
      aria-label={locale === "no" ? "Switch to English" : "Bytt til norsk"}
      title={LABELS[next]}
      className={cn(
        "grid h-10 min-w-10 place-items-center rounded-full border border-border-strong px-3 text-[0.8125rem] font-medium text-foreground transition-colors hover:bg-surface",
        className,
      )}
    >
      {SHORT[locale]}
    </button>
  );
}
