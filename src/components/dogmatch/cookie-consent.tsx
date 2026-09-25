import { useEffect, useState } from "react";
import { useConsent } from "@/lib/consent";
import { useCopy } from "@/i18n";
import { Button } from "@/components/dogmatch/ui";
import { cn } from "@/lib/utils";

const copy = {
  en: {
    label: "Cookie notice",
    body: "Essential cookies keep your answers and sign-in safe. With your OK, we also measure visits (PostHog, EU) to see what helps. Never ads.",
    essentialOnly: "Essential only",
    acceptAll: "Accept all",
  },
  no: {
    label: "Om informasjonskapsler",
    body: "Nødvendige informasjonskapsler tar vare på svarene dine og innloggingen. Sier du ja, måler vi også besøk (PostHog, EU) for å se hva som hjelper. Aldri reklame.",
    essentialOnly: "Kun nødvendige",
    acceptAll: "Godta alle",
  },
  pl: {
    label: "Informacja o plikach cookie",
    body: "Niezbędne pliki cookie chronią Twoje odpowiedzi i logowanie. Jeśli się zgodzisz, mierzymy też wizyty (PostHog, UE), by wiedzieć, co pomaga. Nigdy reklamy.",
    essentialOnly: "Tylko niezbędne",
    acceptAll: "Zaakceptuj wszystkie",
  },
  dk: {
    label: "Om cookies",
    body: "Nødvendige cookies passer på dine svar og dit login. Siger du ja, måler vi også besøg (PostHog, EU) for at se, hvad der hjælper. Aldrig reklamer.",
    essentialOnly: "Kun nødvendige",
    acceptAll: "Accepter alle",
  },
  se: {
    label: "Om cookies",
    body: "Nödvändiga cookies tar hand om dina svar och din inloggning. Säger du ja mäter vi också besök (PostHog, EU) för att se vad som hjälper. Aldrig reklam.",
    essentialOnly: "Endast nödvändiga",
    acceptAll: "Acceptera alla",
  },
  fi: {
    label: "Evästeistä",
    body: "Välttämättömät evästeet pitävät vastauksesi ja kirjautumisesi tallessa. Jos sallit, mittaamme myös käyntejä (PostHog, EU) nähdäksemme, mikä auttaa. Ei koskaan mainoksia.",
    essentialOnly: "Vain välttämättömät",
    acceptAll: "Hyväksy kaikki",
  },
  de: {
    label: "Hinweis zu Cookies",
    body: "Notwendige Cookies sichern deine Antworten und deine Anmeldung. Mit deinem Okay messen wir auch Besuche (PostHog, EU), um zu sehen, was hilft. Niemals Werbung.",
    essentialOnly: "Nur notwendige",
    acceptAll: "Alle akzeptieren",
  },
  fr: {
    label: "Avis sur les cookies",
    body: "Les cookies essentiels protègent vos réponses et votre connexion. Avec votre accord, nous mesurons aussi les visites (PostHog, UE) pour voir ce qui aide. Jamais de pub.",
    essentialOnly: "Essentiels uniquement",
    acceptAll: "Tout accepter",
  },
  nl: {
    label: "Over cookies",
    body: "Essentiële cookies bewaren je antwoorden en je login. Met jouw oké meten we ook bezoeken (PostHog, EU) om te zien wat helpt. Nooit advertenties.",
    essentialOnly: "Alleen essentieel",
    acceptAll: "Alles accepteren",
  },
} as const;

export function CookieConsent() {
  const c = useCopy(copy);
  const { consent, ready, accept } = useConsent();
  const [mounted, setMounted] = useState(false);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted || !ready || consent) return null;

  const choose = (choice: { analytics: boolean; marketing: boolean }) => {
    setLeaving(true);
    window.setTimeout(() => accept(choice), 200);
  };

  return (
    <div
      role="region"
      aria-label={c.label}
      className={cn(
        "fixed inset-x-4 bottom-4 z-[60] transition-opacity duration-200 ease-out print:hidden lg:inset-x-6 lg:bottom-6",
        leaving ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="mx-auto flex max-h-[15vh] max-w-md flex-col justify-center gap-3 overflow-hidden rounded-2xl border border-white/10 bg-navy-deep p-4 shadow-2xl shadow-navy-deep/40 sm:p-5 lg:ml-auto lg:mr-0">
        <p className="text-[0.8125rem] leading-snug text-slate-300 sm:text-sm">{c.body}</p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => choose({ analytics: false, marketing: false })}
            className="h-11 flex-1 rounded-full border border-white/15 text-sm font-medium text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            {c.essentialOnly}
          </button>
          <Button
            tone="accent"
            className="h-11 flex-1"
            onClick={() => choose({ analytics: true, marketing: true })}
          >
            {c.acceptAll}
          </Button>
        </div>
      </div>
    </div>
  );
}

/** Footer entry so the choice can be changed at any time. */
export function CookieSettingsLink({ className }: { className?: string }) {
  const c = useCopy({
    en: { settings: "Cookie settings" },
    no: { settings: "Innstillinger for informasjonskapsler" },
    pl: { settings: "Ustawienia plików cookie" },
    dk: { settings: "Cookieindstillinger" },
    se: { settings: "Cookie-inställningar" },
    fi: { settings: "Evästeasetukset" },
    de: { settings: "Cookie-Einstellungen" },
    fr: { settings: "Paramètres des cookies" },
    nl: { settings: "Cookie-instellingen" },
  } as const);
  const { reopen } = useConsent();
  return (
    <button type="button" onClick={reopen} className={className}>
      {c.settings}
    </button>
  );
}
