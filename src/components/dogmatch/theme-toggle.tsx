import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

/**
 * Day / night. A quiet switch — sunlight for the daytime read,
 * a softer navy for late evenings on the sofa.
 */
export function ThemeToggle({ className, withLabel = false }: { className?: string; withLabel?: boolean }) {
  const { mode, toggle, ready } = useTheme();
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
          {night ? "Night mode" : "Day mode"}
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
      aria-label={night ? "Switch to day mode" : "Switch to night mode"}
      title={night ? "Day mode" : "Night mode"}
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
