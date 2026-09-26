import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Copy, Share2 } from "lucide-react";
import { interpolate, useCopy, useLocale, useT } from "@/i18n";
import { Arrow, ButtonLink, Button } from "./ui";
import { withLangPrefix } from "@/lib/localized-path";
import { useNavGroups } from "./nav-structure";
import { encodeProfile } from "@/lib/matching/share";
import type { UserProfile } from "@/lib/matching/types";
import { SITE_URL } from "@/lib/seo";
import { track } from "@/lib/analytics";

const copy = {
  en: { compare: "Compare the top {n}", copyLink: "Copy link to this result", copied: "Link copied", share: "Share", cardLabel: "Your share card", reasons: "Why it fits", tagline: "Matched on DoggMatch — rules you can see.", copyText: "Copy as text", textCopied: "Text copied", nextTitle: "Next steps, all free", nextBody: "Read the breed honestly, then look at what living with one really involves." },
  no: { compare: "Sammenlign de {n} beste", copyLink: "Kopier lenke til dette resultatet", copied: "Lenke kopiert", share: "Del", cardLabel: "Delekortet ditt", reasons: "Hvorfor den passer", tagline: "Matchet på DoggMatch — regler du kan se.", copyText: "Kopier som tekst", textCopied: "Tekst kopiert", nextTitle: "Neste steg, alle gratis", nextBody: "Les om rasen ærlig, og se hva det egentlig innebærer å leve med en." },
  pl: { compare: "Porównaj {n} najlepsze", copyLink: "Skopiuj link do tego wyniku", copied: "Link skopiowany", share: "Udostępnij", cardLabel: "Twoja karta do udostępnienia", reasons: "Dlaczego pasuje", tagline: "Dopasowano w DoggMatch — zasady, które widzisz.", copyText: "Skopiuj jako tekst", textCopied: "Tekst skopiowany", nextTitle: "Kolejne kroki, wszystkie bezpłatne", nextBody: "Przeczytaj uczciwie o rasie, a potem zobacz, co naprawdę oznacza życie z takim psem." },
  dk: { compare: "Sammenlign de {n} bedste", copyLink: "Kopiér link til dette resultat", copied: "Link kopieret", share: "Del", cardLabel: "Dit delekort", reasons: "Hvorfor den passer", tagline: "Matchet på DoggMatch — regler, du kan se.", copyText: "Kopiér som tekst", textCopied: "Tekst kopieret", nextTitle: "Næste skridt, alle gratis", nextBody: "Læs ærligt om racen, og se, hvad det egentlig kræver at leve med en." },
  se: { compare: "Jämför de {n} bästa", copyLink: "Kopiera länk till det här resultatet", copied: "Länk kopierad", share: "Dela", cardLabel: "Ditt delningskort", reasons: "Varför den passar", tagline: "Matchad på DoggMatch — regler du kan se.", copyText: "Kopiera som text", textCopied: "Text kopierad", nextTitle: "Nästa steg, alla gratis", nextBody: "Läs ärligt om rasen och se vad det egentligen innebär att leva med en." },
  fi: { compare: "Vertaile {n} parasta", copyLink: "Kopioi linkki tähän tulokseen", copied: "Linkki kopioitu", share: "Jaa", cardLabel: "Jakokorttisi", reasons: "Miksi se sopii", tagline: "Sovitettu DoggMatchissa — säännöt, jotka näet.", copyText: "Kopioi tekstinä", textCopied: "Teksti kopioitu", nextTitle: "Seuraavat askeleet, kaikki ilmaisia", nextBody: "Lue rodusta rehellisesti ja katso, mitä elämä sen kanssa oikeasti tarkoittaa." },
  de: { compare: "Die besten {n} vergleichen", copyLink: "Link zu diesem Ergebnis kopieren", copied: "Link kopiert", share: "Teilen", cardLabel: "Deine Teilen-Karte", reasons: "Warum er passt", tagline: "Gematcht auf DoggMatch — Regeln, die du sehen kannst.", copyText: "Als Text kopieren", textCopied: "Text kopiert", nextTitle: "Nächste Schritte, alle kostenlos", nextBody: "Lies ehrlich über die Rasse und sieh, was das Leben mit ihr wirklich bedeutet." },
  fr: { compare: "Comparer les {n} meilleurs", copyLink: "Copier le lien de ce résultat", copied: "Lien copié", share: "Partager", cardLabel: "Votre carte à partager", reasons: "Pourquoi il vous convient", tagline: "Trouvé sur DoggMatch — des règles que vous pouvez voir.", copyText: "Copier en texte", textCopied: "Texte copié", nextTitle: "Prochaines étapes, toutes gratuites", nextBody: "Lisez honnêtement sur la race, puis voyez ce que vivre avec elle implique vraiment." },
  nl: { compare: "Vergelijk de beste {n}", copyLink: "Kopieer link naar dit resultaat", copied: "Link gekopieerd", share: "Delen", cardLabel: "Je deelkaart", reasons: "Waarom hij past", tagline: "Gematcht op DoggMatch — regels die je kunt zien.", copyText: "Kopieer als tekst", textCopied: "Tekst gekopieerd", nextTitle: "Volgende stappen, allemaal gratis", nextBody: "Lees eerlijk over het ras en zie wat leven met zo'n hond echt inhoudt." },
} as const;

type Props = {
  profile: UserProfile;
  breedId: string;
  breedName: string;
  score: number;
  reasons: string[];
  compareIds: string[];
};

/** Actions under the top match, plus a plain-text share card. No image service, no tracking pixel. */
export function ResultActions({ profile, breedId, breedName, score, reasons, compareIds }: Props) {
  const t = useT();
  const c = useCopy(copy);
  const { locale } = useLocale();
  const [done, setDone] = useState<"link" | "text" | null>(null);

  const path = `${locale === "en" ? "" : `/${locale}`}/find-my-dog`;
  const url = `${SITE_URL}${path}?r=${encodeURIComponent(encodeProfile(profile))}`;
  const topReasons = reasons.slice(0, 3);
  const cardText = [`${breedName} — ${score}%`, ...topReasons.map((r) => `• ${r}`), c.tagline, url].join("\n");

  async function write(value: string, kind: "link" | "text") {
    try {
      await navigator.clipboard.writeText(value);
      setDone(kind);
      track("result_shared", { kind, breed: breedId });
      window.setTimeout(() => setDone(null), 2200);
    } catch {
      /* clipboard blocked — the card text is still on screen */
    }
  }

  async function onShare() {
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: `${breedName} — ${score}%`, text: cardText, url });
        track("result_shared", { kind: "native", breed: breedId });
        return;
      } catch {
        /* dismissed — fall back to copy */
      }
    }
    void write(url, "link");
  }

  return (
    <div>
      <div className="flex flex-wrap items-center gap-3">
        <ButtonLink to={withLangPrefix("/breeds/$breedId")} params={{ breedId } as never} size="lg">
          {t.result.viewBreed}
          <Arrow />
        </ButtonLink>
        {compareIds.length >= 2 && (
          <ButtonLink
            to={withLangPrefix("/compare")}
            search={{ breeds: compareIds.join(",") } as never}
            tone="outline"
            size="lg"
          >
            {interpolate(c.compare, { n: compareIds.length })}
          </ButtonLink>
        )}
        <Button tone="ghost" size="lg" onClick={() => void write(url, "link")}>
          {done === "link" ? (
            <Check className="h-4 w-4 text-accent" aria-hidden />
          ) : (
            <Copy className="h-4 w-4" aria-hidden />
          )}
          {done === "link" ? c.copied : c.copyLink}
        </Button>
        <Button tone="ghost" size="lg" onClick={() => void onShare()}>
          <Share2 className="h-4 w-4" aria-hidden />
          {c.share}
        </Button>
      </div>

      <figure className="mt-8 max-w-md rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
        <figcaption className="eyebrow">{c.cardLabel}</figcaption>
        <p className="mt-3 font-display text-xl leading-tight">{breedName}</p>
        <p className="font-display text-3xl font-semibold tabular-nums tracking-tight text-accent">
          {score}
          <span className="align-top text-xl">%</span>
        </p>
        <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
          {c.reasons}
        </p>
        <ul className="mt-2 space-y-1.5 text-sm leading-relaxed">
          {topReasons.map((r) => (
            <li key={r}>• {r}</li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">{c.tagline}</p>
        <button
          type="button"
          onClick={() => void write(cardText, "text")}
          className="mt-4 text-sm font-medium underline underline-offset-4 hover:text-accent"
        >
          {done === "text" ? c.textCopied : c.copyText}
        </button>
      </figure>
    </div>
  );
}

/** Free next steps after the match: readiness, costs, home prep — labels come from the localized nav. */
export function ResultNextSteps() {
  const c = useCopy(copy);
  const groups = useNavGroups();
  const items = groups.find((g) => g.id === "get-a-dog")?.items ?? [];
  const picks = [items[1], items[4], items[5]].filter(Boolean) as typeof items;
  return (
    <div>
      <h2 className="display-md">{c.nextTitle}</h2>
      <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{c.nextBody}</p>
      <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
        {picks.map((item) => (
          <li key={item.to} className="bg-background">
            <Link
              to={withLangPrefix(item.to as "/")}
              className="block p-6 transition-colors hover:bg-surface"
            >
              <p className="font-display text-lg leading-tight">{item.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{item.hint}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
