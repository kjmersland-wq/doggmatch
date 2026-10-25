import { Info } from "lucide-react";
import { useCopy } from "@/i18n";
import { PURCHASES_ENABLED, purchasesPausedCopy } from "@/lib/purchases";

/** Removed automatically when the single PURCHASES_ENABLED switch is turned on. */
export function PaymentsPausedNotice() {
  const c = useCopy(purchasesPausedCopy);
  if (PURCHASES_ENABLED) return null;

  return (
    <aside aria-label="DoggMatch+" className="w-full border-b border-border bg-surface print:hidden">
      <div className="container-page flex items-start gap-3 py-4 text-sm leading-relaxed text-foreground">
        <Info aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
        <p className="max-w-5xl">{c.paused}</p>
      </div>
    </aside>
  );
}