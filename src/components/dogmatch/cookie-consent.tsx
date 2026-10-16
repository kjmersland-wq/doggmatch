import { useEffect, useState } from "react";
import { useConsent } from "@/lib/consent";
import { useCopy } from "@/i18n";
import { Button } from "@/components/dogmatch/ui";
import { cn } from "@/lib/utils";

const copy = {
  en: {
    label: "Cookie notice",
    body: "We use cookies to measure traffic (Google Analytics).",
    essentialOnly: "Decline",
    acceptAll: "Accept",
  },
  no: {
    label: "Om informasjonskapsler",
    body: "Vi bruker informasjonskapsler for å måle trafikk (Google Analytics).",
    essentialOnly: "Avslå",
    acceptAll: "Godta",
  },
  pl: {
    label: "Informacja o plikach cookie",
    body: "Używamy plików cookie do pomiaru ruchu (Google Analytics).",
    essentialOnly: "Odrzuć",
    acceptAll: "Akceptuj",
  },
  dk: {
    label: "Om cookies",
    body: "Vi bruger cookies til at måle trafik (Google Analytics).",
    essentialOnly: "Afvis",
    acceptAll: "Accepter",
  },
  se: {
    label: "Om cookies",
    body: "Vi använder cookies för att mäta trafik (Google Analytics).",
    essentialOnly: "Avvisa",
    acceptAll: "Godkänn",
  },
  fi: {
    label: "Evästeistä",
    body: "Käytämme evästeitä kävijäliikenteen mittaamiseen (Google Analytics).",
    essentialOnly: "Hylkää",
    acceptAll: "Hyväksy",
  },
  de: {
    label: "Hinweis zu Cookies",
    body: "Wir verwenden Cookies, um den Datenverkehr zu messen (Google Analytics).",
    essentialOnly: "Ablehnen",
    acceptAll: "Akzeptieren",
  },
  fr: {
    label: "Avis sur les cookies",
    body: "Nous utilisons des cookies pour mesurer le trafic (Google Analytics).",
    essentialOnly: "Refuser",
    acceptAll: "Accepter",
  },
  nl: {
    label: "Over cookies",
    body: "We gebruiken cookies om het verkeer te meten (Google Analytics).",
    essentialOnly: "Weigeren",
    acceptAll: "Accepteren",
  },
} as const;

export function CookieConsent() {
  const c = useCopy(copy);
  const { consent, ready, accept } = useConsent();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const visible = mounted && ready && !consent;
  useEffect(() => {
    document.body.classList.toggle("has-cookie-banner", visible);
    return () => document.body.classList.remove("has-cookie-banner");
  }, [visible]);

  if (!visible) return null;

  const choose = (choice: { analytics: boolean; marketing: boolean }) => {
    accept(choice);
  };

  return (
    <div
      role="region"
      aria-label={c.label}
      className={cn(
        "fixed inset-x-4 bottom-4 z-[60] transition-opacity duration-200 ease-out print:hidden lg:inset-x-6 lg:bottom-6",

      )}
    >
      <div className="mx-auto flex max-w-md flex-col justify-center gap-3 rounded-lg border border-border-strong bg-background p-4 shadow-[var(--shadow-lift)] sm:p-5 lg:ml-auto lg:mr-0">
        <p className="text-[0.8125rem] leading-snug text-foreground sm:text-sm">{c.body}</p>
        <div className="flex gap-3">
          <Button
            tone="outline"
            type="button"
            onClick={() => choose({ analytics: false, marketing: false })}
            className="h-11 min-w-0 flex-1 px-3 text-sm"
          >
            {c.essentialOnly}
          </Button>
          <Button
            tone="accent"
            className="h-11 min-w-0 flex-1 px-3 text-sm"
            onClick={() => choose({ analytics: true, marketing: false })}
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
