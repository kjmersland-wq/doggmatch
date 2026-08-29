import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useCopy } from "@/i18n";
import { cn } from "@/lib/utils";

/**
 * Day / night. A quiet switch — sunlight for the daytime read,
 * a softer navy for late evenings on the sofa.
 */
export function ThemeToggle({ className, withLabel = false }: { className?: string; withLabel?: boolean }) {
  const { mode, toggle, ready } = useTheme();
  const c = useCopy({
    en: { night: "Night mode", day: "Day mode", toDay: "Switch to day mode", toNight: "Switch to night mode" },
    no: { night: "Nattmodus", day: "Dagmodus", toDay: "Bytt til dagmodus", toNight: "Bytt til nattmodus" },
    pl: { night: "Tryb nocny", day: "Tryb dzienny", toDay: "Przełącz na tryb dzienny", toNight: "Przełącz na tryb nocny" },
  });
  const night = mode === "night";

  if (withLabel) {
    return (
      <button
        type="button"
        onClick={toggle}
        aria-pressed={night}
        className={cn(
          "flex w-full items-center justify-between rounded-2xl border border-border-strong px-4 py-3 text-sm",
          className,
        )}
      >
        <span className="flex items-center gap-2.5 text-foreground">
          {night ? <Moon className="h-4 w-4" aria-hidden /> : <Sun className="h-4 w-4" aria-hidden />}
          {night ? c.night : c.day}
        </span>
        <span
          className={cn(
            "relative h-6 w-11 rounded-full transition-colors",
            night ? "bg-accent" : "bg-muted",
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 h-5 w-5 rounded-full bg-background shadow transition-all",
              night ? "left-[22px]" : "left-0.5",
            )}
          />
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={night}
      aria-label={night ? c.toDay : c.toNight}
      title={night ? c.day : c.night}
      className={cn(
        "grid h-10 w-10 place-items-center rounded-full border border-border-strong text-foreground transition-colors hover:bg-surface",
        className,
      )}
    >
      {ready && night ? (
        <Moon className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden />
      ) : (
        <Sun className="h-[18px] w-[18px]" strokeWidth={1.6} aria-hidden />
      )}
    </button>
  );
}
