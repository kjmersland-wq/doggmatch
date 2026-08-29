import { Link } from "@tanstack/react-router";
import { useCopy } from "@/i18n";
import { cn } from "@/lib/utils";

const copy = {
  en: { label: "Sources & methodology", aria: "Read where this information comes from" },
  no: { label: "Kilder og metode", aria: "Les hvor denne informasjonen kommer fra" },
  pl: { label: "Źródła i metodologia", aria: "Sprawdź, skąd pochodzą te informacje" },
} as const;

/**
 * A quiet link back to the source registry. Put it under any section that
 * states something factual, so the reader can always check our homework.
 */
export function SourcesLink({ category, className }: { category?: string; className?: string }) {
  const c = useCopy(copy);
  return (
    <Link
      to="/sources"
      {...(category ? { hash: category } : {})}
      aria-label={c.aria}
      className={cn(
        "inline-flex items-center gap-1.5 text-xs text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-accent",
        className,
      )}
    >
      <span aria-hidden="true">↗</span>
      {c.label}
    </Link>
  );
}
