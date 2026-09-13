import { ButtonLink, Arrow } from "@/components/dogmatch/ui";
import { useCopy } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";

const copy = {
  en: { line: "Already a partner?", cta: "Open the partner portal" },
  no: { line: "Allerede partner?", cta: "Åpne partnerportalen" },
  pl: { line: "Jesteś już partnerem?", cta: "Otwórz portal partnera" },
  dk: { line: "Allerede partner?", cta: "Åbn partnerportalen" },
  se: { line: "Redan partner?", cta: "Öppna partnerportalen" },
  fi: { line: "Oletko jo kumppani?", cta: "Avaa kumppaniportaali" },
  de: { line: "Schon Partner?", cta: "Partnerportal öffnen" },
  fr: { line: "Déjà partenaire ?", cta: "Ouvrir l'espace partenaire" },
  nl: { line: "Al partner?", cta: "Open het partnerportaal" },
} as const;

/** Quiet way in for partners who already work with us. */
export function PartnerPortalLink({ className }: { className?: string }) {
  const c = useCopy(copy);
  return (
    <div className={className}>
      <p className="text-sm text-muted-foreground">{c.line}</p>
      <ButtonLink tone="outline" className="mt-3" to={withLangPrefix("/partners/portal")}>
        {c.cta}
        <Arrow />
      </ButtonLink>
    </div>
  );
}
