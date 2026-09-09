import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useConsent } from "@/lib/consent";
import { useCopy } from "@/i18n";
import { Button } from "@/components/dogmatch/ui";
import { withLangPrefix } from "@/lib/localized-path";

const copy = {
  en: {
    title: "A quick word about cookies",
    body: "We keep the essentials — your language, your theme, your dog's notes, signing in and paying safely. Those are needed for the site to work. Anything used to measure how DoggMatch is used, or for marketing, only happens if you say yes.",
    acceptAll: "Accept all",
    necessaryOnly: "Only necessary",
    customise: "Choose myself",
    save: "Save my choice",
    necessary: "Necessary",
    necessaryBody: "Language, theme, your dog's own pages, sign-in and checkout. Always on — the site can't work without them.",
    analytics: "Analytics",
    analyticsBody: "Anonymous, aggregated numbers on which pages help people. Off unless you turn it on.",
    marketing: "Marketing",
    marketingBody: "Used to measure whether an advert brought someone here. Off unless you turn it on.",
    privacy: "Read our privacy notice",
    settings: "Cookie settings",
    always: "Always on",
  },
  no: {
    title: "Kort om informasjonskapsler",
    body: "Vi lagrer det nødvendige — språket ditt, temaet, notatene om hunden din, innlogging og trygg betaling. Det trengs for at siden skal fungere. Alt som måler hvordan DoggMatch brukes, eller som brukes til markedsføring, skjer bare hvis du sier ja.",
    acceptAll: "Godta alle",
    necessaryOnly: "Bare nødvendige",
    customise: "Velg selv",
    save: "Lagre valget mitt",
    necessary: "Nødvendige",
    necessaryBody: "Språk, tema, hundens egne sider, innlogging og betaling. Alltid på — siden fungerer ikke uten.",
    analytics: "Analyse",
    analyticsBody: "Anonyme, samlede tall på hvilke sider som faktisk hjelper folk. Av med mindre du slår det på.",
    marketing: "Markedsføring",
    marketingBody: "Brukes for å se om en annonse førte noen hit. Av med mindre du slår det på.",
    privacy: "Les personvernerklæringen",
    settings: "Innstillinger for informasjonskapsler",
    always: "Alltid på",
  },
  pl: {
    title: "Kilka słów o plikach cookie",
    body: "Zachowujemy to, co niezbędne — twój język, motyw, notatki o twoim psie, logowanie i bezpieczne płatności. To potrzebne, żeby strona działała. Wszystko, co służy do mierzenia sposobu korzystania z DoggMatch, albo do marketingu, dzieje się tylko wtedy, gdy się na to zgodzisz.",
    acceptAll: "Zaakceptuj wszystkie",
    necessaryOnly: "Tylko niezbędne",
    customise: "Wybieram sam",
    save: "Zapisz mój wybór",
    necessary: "Niezbędne",
    necessaryBody: "Język, motyw, własne strony twojego psa, logowanie i płatność. Zawsze włączone — bez nich strona nie zadziała.",
    analytics: "Analityka",
    analyticsBody: "Anonimowe, zbiorcze dane o tym, które strony naprawdę pomagają ludziom. Wyłączone, chyba że je włączysz.",
    marketing: "Marketing",
    marketingBody: "Służy do sprawdzenia, czy reklama przyprowadziła kogoś na stronę. Wyłączone, chyba że je włączysz.",
    privacy: "Przeczytaj naszą politykę prywatności",
    settings: "Ustawienia plików cookie",
    always: "Zawsze włączone",
  },
} as const;

function Toggle({
  checked,
  onChange,
  label,
  body,
  locked,
  lockedLabel,
}: {
  checked: boolean;
  onChange?: (v: boolean) => void;
  label: string;
  body: string;
  locked?: boolean;
  lockedLabel?: string;
}) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border/60 py-3 last:border-0">
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="mt-1 text-[0.8125rem] leading-relaxed text-muted-foreground">{body}</p>
      </div>
      {locked ? (
        <span className="mt-1 shrink-0 text-xs text-muted-foreground">{lockedLabel}</span>
      ) : (
        <button
          type="button"
          role="switch"
          aria-checked={checked}
          aria-label={label}
          onClick={() => onChange?.(!checked)}
          className={`mt-1 h-6 w-11 shrink-0 rounded-full transition-colors ${
            checked ? "bg-accent" : "bg-border-strong"
          }`}
        >
          <span
            className={`block h-5 w-5 rounded-full bg-background transition-transform ${
              checked ? "translate-x-[22px]" : "translate-x-[2px]"
            }`}
          />
        </button>
      )}
    </div>
  );
}

export function CookieConsent() {
  const c = useCopy(copy);
  const { consent, ready, accept } = useConsent();
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || !ready || consent) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={c.title}
      className="fixed inset-x-0 bottom-0 z-[60] px-3 pb-3 print:hidden lg:px-6 lg:pb-6"
    >
      <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-background/98 p-5 shadow-[var(--shadow-lift)] backdrop-blur lg:p-7">
        <h2 className="text-lg font-semibold tracking-[-0.01em]">{c.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>

        {details && (
          <div className="mt-4 rounded-2xl border border-border/70 px-4">
            <Toggle locked checked label={c.necessary} body={c.necessaryBody} lockedLabel={c.always} />
            <Toggle checked={analytics} onChange={setAnalytics} label={c.analytics} body={c.analyticsBody} />
            <Toggle checked={marketing} onChange={setMarketing} label={c.marketing} body={c.marketingBody} />
          </div>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button onClick={() => accept({ analytics: true, marketing: true })}>{c.acceptAll}</Button>
          <Button tone="outline" onClick={() => accept({ analytics: false, marketing: false })}>
            {c.necessaryOnly}
          </Button>
          {details ? (
            <Button tone="ghost" onClick={() => accept({ analytics, marketing })}>
              {c.save}
            </Button>
          ) : (
            <Button tone="ghost" onClick={() => setDetails(true)}>
              {c.customise}
            </Button>
          )}
          <Link to={withLangPrefix("/privacy")} className="text-sm text-muted-foreground underline underline-offset-4">
            {c.privacy}
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Footer entry so the choice can be changed at any time. */
export function CookieSettingsLink({ className }: { className?: string }) {
  const c = useCopy(copy);
  const { reopen } = useConsent();
  return (
    <button type="button" onClick={reopen} className={className}>
      {c.settings}
    </button>
  );
}
