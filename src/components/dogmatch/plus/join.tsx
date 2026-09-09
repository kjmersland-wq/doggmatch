import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { createPlusCheckout } from "@/lib/plus/stripe.functions";
import type { PlanId } from "@/lib/plus/plans";
import { useMembership } from "@/hooks/use-membership";
import { cn } from "@/lib/utils";
import { useCopy } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";

type Props = {
  plan: PlanId;
  tone?: "primary" | "outline";
  label?: string;
  className?: string;
};

const copy = {
  en: {
    opening: "Opening secure checkout…",
    already: "You're already a member",
    signInToJoin: "Sign in to join",
    join: "Join DoggMatch+",
    error: "We couldn't open the payment page just then. Please try again.",
  },
  no: {
    opening: "Åpner sikker betaling …",
    already: "Du er allerede medlem",
    signInToJoin: "Logg inn for å bli medlem",
    join: "Bli DoggMatch+-medlem",
    error: "Vi klarte ikke å åpne betalingssiden akkurat nå. Prøv gjerne igjen.",
  },
  pl: {
    opening: "Otwieranie bezpiecznej płatności…",
    already: "Jesteś już członkiem",
    signInToJoin: "Zaloguj się, by dołączyć",
    join: "Dołącz do DoggMatch+",
    error: "Nie udało się teraz otworzyć strony płatności. Spróbuj ponownie.",
  },
} as const;

/** Takes someone from the pricing card straight into Stripe checkout. */
export function JoinPlusButton({ plan, tone = "primary", label, className }: Props) {
  const c = useCopy(copy);
  const navigate = useNavigate();
  const startCheckout = useServerFn(createPlusCheckout);
  const { membership, signedIn, loading } = useMembership();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const already = membership.subscribed;

  async function onClick() {
    setError(null);
    if (!signedIn) {
      void navigate({ to: withLangPrefix("/auth"), search: { next: "/plus" } });
      return;
    }
    if (already) {
      void navigate({ to: withLangPrefix("/account") });
      return;
    }
    setBusy(true);
    try {
      const { url } = await startCheckout({ data: { plan } });
      window.location.href = url;
    } catch {
      setError(c.error);
      setBusy(false);
    }
  }

  const text = busy
    ? c.opening
    : already
      ? c.already
      : !signedIn
        ? c.signInToJoin
        : (label ?? c.join);

  return (
    <div className={cn("mt-8", className)}>
      <button
        type="button"
        onClick={onClick}
        disabled={busy || loading}
        className={cn(
          "inline-flex h-14 w-full items-center justify-center rounded-full px-6 text-[0.9375rem] font-medium transition-colors sm:text-base disabled:opacity-70",
          tone === "primary"
            ? "bg-primary text-primary-foreground hover:bg-primary/90"
            : "border border-border-strong text-foreground hover:bg-surface",
        )}
      >
        {text}
      </button>
      {error && (
        <p role="alert" className="mt-3 text-sm leading-relaxed text-accent">
          {error}
        </p>
      )}
    </div>
  );
}
