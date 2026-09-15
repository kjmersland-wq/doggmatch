import { useEffect, useState } from "react";
import { useConsent } from "@/lib/consent";
import { useCopy } from "@/i18n";
import { Button } from "@/components/dogmatch/ui";
import { cn } from "@/lib/utils";

const copy = {
  en: {
    label: "Cookie notice",
    body: "We respect your space. DoggMatch uses essential cookies to save your match preferences and ensure secure sessions—no advertising trackers.",
    essentialOnly: "Essential only",
    acceptAll: "Accept all",
  },
  no: {
    label: "Om informasjonskapsler",
    body: "Vi bryr oss om personvernet ditt. DoggMatch bruker bare de informasjonskapslene som trengs for å lagre treffpreferansene dine og sikre trygge økter — ingen annonsesporing.",
    essentialOnly: "Kun nødvendige",
    acceptAll: "Godta alle",
  },
  pl: {
    label: "Informacja o plikach cookie",
    body: "Szanujemy Twoją prywatność. DoggMatch korzysta wyłącznie z niezbędnych plików cookie, aby zapisać Twoje preferencje dopasowania i zapewnić bezpieczne sesje — bez śledzenia reklamowego.",
    essentialOnly: "Tylko niezbędne",
    acceptAll: "Zaakceptuj wszystkie",
  },
  dk: {
    label: "Om cookies",
    body: "Vi passer på dit privatliv. DoggMatch bruger kun de cookies, der er nødvendige for at gemme dine matchpræferencer og sikre trygge sessioner — ingen annoncesporing.",
    essentialOnly: "Kun nødvendige",
    acceptAll: "Accepter alle",
  },
  se: {
    label: "Om cookies",
    body: "Vi värnar om din integritet. DoggMatch använder bara de cookies som behövs för att spara dina matchpreferenser och säkerställa trygga sessioner — ingen annonsspårning.",
    essentialOnly: "Endast nödvändiga",
    acceptAll: "Acceptera alla",
  },
  fi: {
    label: "Evästeistä",
    body: "Välitämme yksityisyydestäsi. DoggMatch käyttää vain välttämättömiä evästeitä tallentaakseen täsmäysasetuksesi ja varmistaakseen turvalliset istunnot — ei mainosseurantaa.",
    essentialOnly: "Vain välttämättömät",
    acceptAll: "Hyväksy kaikki",
  },
  de: {
    label: "Hinweis zu Cookies",
    body: "Wir respektieren deine Privatsphäre. DoggMatch verwendet nur die notwendigen Cookies, um deine Match-Einstellungen zu speichern und sichere Sitzungen zu gewährleisten – keine Werbe-Tracker.",
    essentialOnly: "Nur notwendige",
    acceptAll: "Alle akzeptieren",
  },
  fr: {
    label: "Avis sur les cookies",
    body: "Nous respectons votre vie privée. DoggMatch utilise uniquement les cookies essentiels pour enregistrer vos préférences de correspondance et assurer des sessions sécurisées — aucun traceur publicitaire.",
    essentialOnly: "Essentiels uniquement",
    acceptAll: "Tout accepter",
  },
  nl: {
    label: "Over cookies",
    body: "We respecteren je privacy. DoggMatch gebruikt alleen essentiële cookies om je matchvoorkeuren op te slaan en veilige sessies te garanderen — geen advertentietrackers.",
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
