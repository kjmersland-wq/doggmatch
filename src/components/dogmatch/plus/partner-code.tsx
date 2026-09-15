import { useEffect, useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { checkPartnerCode } from "@/lib/plus/stripe.functions";
import { useCopy } from "@/i18n";

export const PARTNER_CODE_KEY = "dm_partner_code";

/** Reads the partner code someone has already entered, if any. */
export function readPartnerCode(): string {
  if (typeof window === "undefined") return "";
  try {
    return window.localStorage.getItem(PARTNER_CODE_KEY) ?? "";
  } catch {
    return "";
  }
}

const copy = {
  en: {
    label: "Got a code from a partner?",
    body: "Shops, groomers, trainers and clinics we work with hand these out. It takes 25% off your first year.",
    placeholder: "Your partner code",
    apply: "Apply code",
    checking: "Checking…",
    ok: "25% off your first year, thanks to {company}.",
    bad: "We don't recognise that code. Have a quick look at the spelling.",
  },
  no: {
    label: "Har du en kode fra en partner?",
    body: "Butikker, frisører, trenere og klinikker vi samarbeider med deler ut disse. Den gir 25 % avslag det første året.",
    placeholder: "Partnerkoden din",
    apply: "Bruk kode",
    checking: "Sjekker …",
    ok: "25 % avslag det første året, takket være {company}.",
    bad: "Vi kjenner ikke igjen den koden. Sjekk gjerne stavemåten.",
  },
  pl: {
    label: "Masz kod od partnera?",
    body: "Sklepy, groomerzy, trenerzy i kliniki, z którymi współpracujemy, rozdają takie kody. Dają 25% zniżki na pierwszy rok.",
    placeholder: "Twój kod partnera",
    apply: "Użyj kodu",
    checking: "Sprawdzanie…",
    ok: "25% zniżki na pierwszy rok dzięki {company}.",
    bad: "Nie rozpoznajemy tego kodu. Sprawdź pisownię.",
  },
  dk: {
    label: "Har du en kode fra en partner?",
    body: "Butikker, groomere, trænere og klinikker, vi samarbejder med, deler dem ud. Den giver 25 % på det første år.",
    placeholder: "Din partnerkode",
    apply: "Brug kode",
    checking: "Tjekker …",
    ok: "25 % på det første år, takket være {company}.",
    bad: "Vi genkender ikke den kode. Tjek lige stavemåden.",
  },
  se: {
    label: "Har du en kod från en partner?",
    body: "Butiker, hundfrisörer, tränare och kliniker vi samarbetar med delar ut dem. Den ger 25 % på första året.",
    placeholder: "Din partnerkod",
    apply: "Använd kod",
    checking: "Kontrollerar …",
    ok: "25 % på första året, tack vare {company}.",
    bad: "Vi känner inte igen koden. Titta gärna på stavningen.",
  },
  fi: {
    label: "Onko sinulla kumppanin koodi?",
    body: "Kaupat, trimmaajat, kouluttajat ja klinikat, joiden kanssa teemme yhteistyötä, jakavat näitä. Se antaa 25 % alennuksen ensimmäisestä vuodesta.",
    placeholder: "Kumppanikoodisi",
    apply: "Käytä koodia",
    checking: "Tarkistetaan…",
    ok: "25 % alennus ensimmäisestä vuodesta, kiitos {company}.",
    bad: "Emme tunnista tuota koodia. Tarkistathan kirjoitusasun.",
  },
  de: {
    label: "Hast du einen Code von einem Partner?",
    body: "Läden, Hundesalons, Trainer und Praxen, mit denen wir arbeiten, geben solche Codes aus. Er gibt 25 % im ersten Jahr.",
    placeholder: "Dein Partnercode",
    apply: "Code einlösen",
    checking: "Wird geprüft …",
    ok: "25 % im ersten Jahr, dank {company}.",
    bad: "Diesen Code kennen wir nicht. Schau kurz auf die Schreibweise.",
  },
  fr: {
    label: "Vous avez un code d'un partenaire ?",
    body: "Boutiques, toiletteurs, éducateurs et cliniques avec qui nous travaillons en distribuent. Il donne 25 % la première année.",
    placeholder: "Votre code partenaire",
    apply: "Utiliser le code",
    checking: "Vérification…",
    ok: "25 % sur votre première année, grâce à {company}.",
    bad: "Nous ne reconnaissons pas ce code. Vérifiez l'orthographe.",
  },
  nl: {
    label: "Heb je een code van een partner?",
    body: "Winkels, trimsalons, trainers en klinieken waarmee we samenwerken delen die uit. Hij geeft 25% korting op je eerste jaar.",
    placeholder: "Je partnercode",
    apply: "Code gebruiken",
    checking: "Controleren…",
    ok: "25% korting op je eerste jaar, dankzij {company}.",
    bad: "We herkennen die code niet. Kijk even naar de spelling.",
  },
} as const;

/** A quiet little field where a partner's customer can enter their code. */
export function PartnerCodeField({ className }: { className?: string }) {
  const c = useCopy(copy);
  const check = useServerFn(checkPartnerCode);
  const [value, setValue] = useState("");
  const [state, setState] = useState<"idle" | "checking" | "ok" | "bad">("idle");
  const [company, setCompany] = useState<string | null>(null);

  useEffect(() => {
    const saved = readPartnerCode();
    if (saved) {
      setValue(saved);
      setState("ok");
    }
  }, []);

  async function onApply() {
    const code = value.trim().toUpperCase();
    if (!code) return;
    setState("checking");
    const res = await check({ data: { code } });
    if (res.valid) {
      setCompany(res.company);
      setState("ok");
      try {
        window.localStorage.setItem(PARTNER_CODE_KEY, code);
      } catch {
        /* private browsing — the code still works this visit */
      }
    } else {
      setState("bad");
      try {
        window.localStorage.removeItem(PARTNER_CODE_KEY);
      } catch {
        /* nothing to clear */
      }
    }
  }

  return (
    <div className={className}>
      <p className="text-[0.9375rem]">{c.label}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <input
          type="text"
          value={value}
          onChange={(e) => {
            setValue(e.target.value.toUpperCase());
            setState("idle");
          }}
          placeholder={c.placeholder}
          className="h-12 min-w-[220px] flex-1 rounded-full border border-border bg-surface px-5 text-[0.9375rem] uppercase tracking-widest outline-none focus:border-border-strong"
        />
        <button
          type="button"
          onClick={() => void onApply()}
          disabled={state === "checking"}
          className="h-12 rounded-full border border-border-strong px-6 text-sm hover:bg-surface disabled:opacity-70"
        >
          {state === "checking" ? c.checking : c.apply}
        </button>
      </div>
      {state === "ok" && (
        <p className="mt-3 text-sm text-muted-foreground">
          {c.ok.replace("{company}", company ?? "")}
        </p>
      )}
      {state === "bad" && (
        <p role="alert" className="mt-3 text-sm text-accent">
          {c.bad}
        </p>
      )}
    </div>
  );
}
