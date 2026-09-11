import { cn } from "@/lib/utils";
import markSrc from "@/assets/doggmatch-mark.png";

/**
 * The approved DoggMatch identity: navy dog emblem inside the orange swoosh,
 * paired with the navy/orange wordmark. One mark, used everywhere.
 */
export function BrandMark({ className, alt = "" }: { className?: string | undefined; alt?: string | undefined }) {
  // The dog emblem is deep navy, so it sits on a small ivory disc — otherwise
  // it disappears against the dark navy header and dark mode surfaces.
  return (
    <span
      className={cn(
        "grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ivory",
        className,
      )}
    >
      <img
        src={markSrc}
        alt={alt}
        aria-hidden={alt === "" ? true : undefined}
        width={512}
        height={512}
        className="h-[86%] w-[86%] object-contain"
        loading="eager"
        decoding="async"
      />
    </span>
  );
}

export function BrandWordmark({ className }: { className?: string | undefined }) {
  return (
    <span className={cn("font-display font-semibold tracking-[-0.04em] leading-none", className)}>
      <span className="text-foreground">Dogg</span>
      <span className="text-accent">Match</span>
    </span>
  );
}

export function BrandLock({
  className,
  markClassName,
  wordmarkClassName,
}: {
  className?: string | undefined;
  markClassName?: string | undefined;
  wordmarkClassName?: string | undefined;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark className={markClassName} />
      <BrandWordmark className={wordmarkClassName} />
    </span>
  );
}
