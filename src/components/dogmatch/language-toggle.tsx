import { useLocale, type Locale } from "@/i18n";
import { cn } from "@/lib/utils";

const SHORT: Record<Locale, string> = { en: "EN", no: "NO" };
const ARIA_LABEL: Record<Locale, string> = {
  en: "Switch language",
  no: "Bytt språk",
};

/** English or Norwegian. Remembered on this device. Horizontal, compact pill. */
export function LanguageToggle({
  className,
  withLabel = false,
}: {
  className?: string;
  withLabel?: boolean;
}) {
  const { locale, setLocale } = useLocale();

  const options: Locale[] = ["en", "no"];

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
              withLabel && "px-3.5 py-2 text-[0.8125rem]",
            )}
          >
            {SHORT[code]}
          </button>
        );
      })}
    </div>
  );
}
