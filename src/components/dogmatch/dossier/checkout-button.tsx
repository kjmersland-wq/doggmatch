import { useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import { useCopy, interpolate } from "@/i18n";
import type { BreedId } from "@/data/breeds";
import { Button } from "@/components/dogmatch/ui";
import { cn } from "@/lib/utils";
import { useMembership } from "@/hooks/use-membership";
import { withLangPrefix } from "@/lib/localized-path";
import { purchasesPausedCopy } from "@/lib/purchases";

const copy = {
  en: {
    cta: "Unlock Complete Dossier for {breed}",
    opening: "Opening secure checkout…",
    error: "We couldn't open checkout just then. Please try again.",
  },
  no: {
    cta: "Lås opp full dossier for {breed}",
    opening: "Åpner sikker betaling …",
    error: "Vi klarte ikke å åpne betalingen akkurat nå. Prøv gjerne igjen.",
  },
  pl: {
    cta: "Odblokuj pełne dossier dla {breed}",
    opening: "Otwieranie bezpiecznej płatności…",
    error: "Nie udało się teraz otworzyć płatności. Spróbuj ponownie.",
  },
  dk: {
    cta: "Lås fuld dossier op for {breed}",
    opening: "Åbner sikker betaling …",
    error: "Vi kunne ikke åbne betalingen lige nu. Prøv venligst igen.",
  },
  se: {
    cta: "Lås upp fullständig dossier för {breed}",
    opening: "Öppnar säker betalning …",
    error: "Vi kunde inte öppna betalningen just nu. Försök gärna igen.",
  },
  fi: {
    cta: "Avaa täydellinen dossier – {breed}",
    opening: "Avataan turvallista maksua…",
    error: "Emme juuri nyt saaneet avattua maksua. Yritä uudelleen.",
  },
  de: {
    cta: "Vollständiges Dossier für {breed} freischalten",
    opening: "Sichere Kasse wird geöffnet …",
    error: "Wir konnten die Zahlung gerade nicht öffnen. Bitte versuchen Sie es erneut.",
  },
  fr: {
    cta: "Débloquer le dossier complet pour {breed}",
    opening: "Ouverture du paiement sécurisé…",
    error: "Nous n'avons pas pu ouvrir le paiement à l'instant. Veuillez réessayer.",
  },
  nl: {
    cta: "Volledig dossier voor {breed} ontgrendelen",
    opening: "Beveiligd afrekenen wordt geopend…",
    error: "We konden het afrekenen zojuist niet openen. Probeer het opnieuw.",
  },
} as const;

/** Sends the reader straight into a the breed dossier (lifetime members only — no one-time product is sold). */
export function DossierCheckoutButton({
  breedId,
  breedName,
  className,
}: {
  breedId: BreedId;
  breedName: string;
  className?: string;
}) {
  const c = useCopy(copy);
  const p = useCopy(purchasesPausedCopy);
  const navigate = useNavigate();
  const { membership } = useMembership();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onClick() {
    setError(null);
    setBusy(true);
    try {
      // Lifetime members never pay for a dossier — the server checks this again.
      if (membership.lifetime) {
        await navigate({ to: withLangPrefix("/quiz/success"), search: { breed: breedId, session_id: "" } });
        return;
      }
      setBusy(false);
    } catch {
      setError(c.error);
      setBusy(false);
    }
  }

  const paused = !membership.lifetime;

  return (
    <div className={cn("flex flex-col items-start gap-3", className)}>
      <Button size="lg" onClick={onClick} disabled={busy || paused}>
        {busy ? c.opening : interpolate(c.cta, { breed: breedName })}
      </Button>
      {paused && <p className="text-sm leading-relaxed text-muted-foreground">{p.paused}</p>}
      {error && (
        <p role="alert" className="text-sm leading-relaxed text-accent">
          {error}
        </p>
      )}
    </div>
  );
}
