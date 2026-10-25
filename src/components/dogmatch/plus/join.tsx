import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { createPlusCheckout } from "@/lib/plus/plus.functions";
import type { PlanId } from "@/lib/plus/plans";
import { useMembership } from "@/hooks/use-membership";
import { readPartnerCode } from "@/components/dogmatch/plus/partner-code";
import { StripeEmbeddedCheckout } from "@/components/StripeEmbeddedCheckout";
import { getStripeEnvironment } from "@/lib/stripe";
import { cn } from "@/lib/utils";
import { useCopy, useLocale } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";
import { PURCHASES_ENABLED, purchasesPausedCopy } from "@/lib/purchases";

type Props = {
  plan: PlanId;
  tone?: "primary" | "outline";
  label?: string;
  className?: string;
};

const copy = {
  en: {
    notify: "Notify me when membership opens",
    opening: "Opening secure checkout…",
    already: "You're already a member",
    signInToJoin: "Sign in to join",
    join: "Join DoggMatch+",
    close: "Close",
    error: "We couldn't open the payment page just then. Please try again.",
  },
  no: {
    notify: "Si fra når medlemskap åpner",
    opening: "Åpner sikker betaling …",
    already: "Du er allerede medlem",
    signInToJoin: "Logg inn for å bli medlem",
    join: "Bli DoggMatch+-medlem",
    close: "Lukk",
    error: "Vi klarte ikke å åpne betalingssiden akkurat nå. Prøv gjerne igjen.",
  },
  pl: {
    notify: "Powiadom mnie, gdy członkostwo się otworzy",
    opening: "Otwieranie bezpiecznej płatności…",
    already: "Jesteś już członkiem",
    signInToJoin: "Zaloguj się, by dołączyć",
    join: "Dołącz do DoggMatch+",
    close: "Zamknij",
    error: "Nie udało się teraz otworzyć strony płatności. Spróbuj ponownie.",
  },
  dk: {
    notify: "Giv mig besked, når medlemskab åbner",
    opening: "Åbner sikker betaling …",
    already: "Du er allerede medlem",
    signInToJoin: "Log ind for at blive medlem",
    join: "Bliv DoggMatch+-medlem",
    close: "Luk",
    error: "Vi kunne ikke åbne betalingssiden lige nu. Prøv venligst igen.",
  },
  se: {
    notify: "Meddela mig när medlemskap öppnar",
    opening: "Öppnar säker betalning …",
    already: "Du är redan medlem",
    signInToJoin: "Logga in för att gå med",
    join: "Bli DoggMatch+-medlem",
    close: "Stäng",
    error: "Vi kunde inte öppna betalsidan just nu. Försök gärna igen.",
  },
  fi: {
    notify: "Ilmoita minulle, kun jäsenyys aukeaa",
    opening: "Avataan turvallista maksua…",
    already: "Olet jo jäsen",
    signInToJoin: "Kirjaudu sisään liittyäksesi",
    join: "Liity DoggMatch+:aan",
    close: "Sulje",
    error: "Emme juuri nyt saaneet avattua maksusivua. Yritä uudelleen.",
  },
  de: {
    notify: "Benachrichtige mich, wenn die Mitgliedschaft öffnet",
    opening: "Sichere Kasse wird geöffnet …",
    already: "Du bist bereits Mitglied",
    signInToJoin: "Melde dich an, um beizutreten",
    join: "DoggMatch+ beitreten",
    close: "Schließen",
    error: "Wir konnten die Zahlungsseite gerade nicht öffnen. Bitte versuch es noch einmal.",
  },
  fr: {
    notify: "Prévenez-moi à l'ouverture de l'abonnement",
    opening: "Ouverture du paiement sécurisé…",
    already: "Vous êtes déjà membre",
    signInToJoin: "Connectez-vous pour adhérer",
    join: "Rejoindre DoggMatch+",
    close: "Fermer",
    error: "Nous n'avons pas pu ouvrir la page de paiement pour le moment. Merci de réessayer.",
  },
  nl: {
    notify: "Laat me weten wanneer lidmaatschap opent",
    opening: "Beveiligde betaalpagina wordt geopend…",
    already: "Je bent al lid",
    signInToJoin: "Log in om lid te worden",
    join: "Word lid van DoggMatch+",
    close: "Sluiten",
    error: "We konden de betaalpagina nu niet openen. Probeer het opnieuw.",
  },
} as const;

/** Takes someone from the pricing card straight into secure checkout. */
export function JoinPlusButton({ plan, tone = "primary", label, className }: Props) {
  const c = useCopy(copy);
  const p = useCopy(purchasesPausedCopy);
  const { locale } = useLocale();
  const navigate = useNavigate();
  const startCheckout = useServerFn(createPlusCheckout);
  const { membership, signedIn, loading } = useMembership();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);

  const already = membership.subscribed;

  async function onClick() {
    setError(null);
    if (!PURCHASES_ENABLED && !already) return;
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
      const successPath = locale === "en" ? "/checkout/success" : `/${locale}/checkout/success`;
      const result = await startCheckout({
        data: { plan, code: readPartnerCode(), successPath, environment: getStripeEnvironment() },
      });
      if ("error" in result) throw new Error(result.error);
      setClientSecret(result.clientSecret);
    } catch {
      setError(c.error);
    } finally {
      setBusy(false);
    }
  }

  const text = busy ? c.opening : already ? c.already : !signedIn ? c.signInToJoin : (label ?? c.join);

  const paused = !PURCHASES_ENABLED && !already;

  if (paused) {
    // Billing is off: never offer a button that leads toward checkout. Send people to the waitlist.
    return (
      <div className={cn("mt-8", className)}>
        <a
          href="#waitlist"
          className={cn(
            "inline-flex h-14 w-full items-center justify-center rounded-full px-6 text-[0.9375rem] font-medium transition-colors sm:text-base",
            tone === "primary"
              ? "bg-primary text-primary-foreground hover:bg-primary/90"
              : "border border-border-strong text-foreground hover:bg-surface",
          )}
        >
          {c.notify}
        </a>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.paused}</p>
      </div>
    );
  }

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

      {clientSecret && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-foreground/60 p-4 backdrop-blur-sm sm:items-center"
        >
          <div className="relative w-full max-w-2xl rounded-3xl bg-background p-4 shadow-2xl sm:p-6">
            <button
              type="button"
              onClick={() => setClientSecret(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-border bg-background px-4 py-2 text-sm hover:bg-surface"
            >
              {c.close}
            </button>
            <StripeEmbeddedCheckout clientSecret={clientSecret} />
          </div>
        </div>
      )}
    </div>
  );
}
