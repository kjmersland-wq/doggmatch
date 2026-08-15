import { cn } from "@/lib/utils";
import markSrc from "@/assets/doggmatch-mark.png";

/**
 * The approved DoggMatch identity: navy dog emblem inside the orange swoosh,
 * paired with the navy/orange wordmark. One mark, used everywhere.
 */
export function BrandMark({ className, alt = "" }: { className?: string; alt?: string }) {
  return (
    <img
      src={markSrc}
      alt={alt}
      aria-hidden={alt === "" ? true : undefined}
      width={512}
      height={512}
      className={cn("h-9 w-9 shrink-0 object-contain", className)}
      loading="eager"
      decoding="async"
    />
  );
}

export function BrandWordmark({ className }: { className?: string }) {
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
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <BrandMark className={markClassName} />
      <BrandWordmark className={wordmarkClassName} />
    </span>
  );
}
