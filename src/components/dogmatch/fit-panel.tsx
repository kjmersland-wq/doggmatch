import { useCopy } from "@/i18n";
import { matchInsights, scoreReading } from "@/lib/matching/insights";
import type { BreedTraits } from "@/data/breeds";
import type { UserProfile } from "@/lib/matching/types";

const copy = {
  en: {
    fitsTitle: "Why this dog may fit your life",
    tradeTitle: "Things you should seriously consider",
    fromLabel: "Your answer",
    none: "Nothing here worked against you — but meet the dog before you decide.",
    noneFits: "Very little here lined up with your answers.",
    honesty:
      "This is a lifestyle compatibility result, not a scientific measurement. It compares what you told us with what this dog usually needs — individual dogs vary.",
  },
  no: {
    fitsTitle: "Hvorfor denne hunden kan passe livet ditt",
    tradeTitle: "Ting du bør tenke grundig gjennom",
    fromLabel: "Ditt svar",
    none: "Ingenting her talte imot deg — men møt hunden før du bestemmer deg.",
    noneFits: "Veldig lite her stemte med svarene dine.",
    honesty:
      "Dette er et resultat om livsstilskompatibilitet, ikke en vitenskapelig måling. Det sammenligner det du fortalte oss med det denne hunden vanligvis trenger — enkelthunder varierer.",
  },
  pl: {
    fitsTitle: "Dlaczego ten pies może pasować do twojego życia",
    tradeTitle: "Rzeczy, które warto solidnie przemyśleć",
    fromLabel: "Twoja odpowiedź",
    none: "Nic tutaj nie przemawiało przeciwko tobie — ale poznaj psa, zanim zdecydujesz.",
    noneFits: "Bardzo niewiele tu pasowało do twoich odpowiedzi.",
    honesty:
      "To wynik zgodności stylu życia, a nie pomiar naukowy. Porównuje to, co nam powiedziałeś, z tym, czego zwykle potrzebuje ten pies — poszczególne psy się różnią.",
  },
  dk: {
    fitsTitle: "Hvorfor denne hund kan passe til dit liv",
    tradeTitle: "Ting du bør overveje grundigt",
    fromLabel: "Dit svar",
    none: "Intet her talte imod dig — men mød hunden, før du beslutter dig.",
    noneFits: "Meget lidt her stemte med dine svar.",
    honesty:
      "Dette er et resultat om livsstilskompatibilitet, ikke en videnskabelig måling. Det sammenligner det, du fortalte os, med det denne hund normalt har brug for — den enkelte hund varierer.",
  },
  se: {
    fitsTitle: "Varför den här hunden kan passa ditt liv",
    tradeTitle: "Saker du bör tänka igenom ordentligt",
    fromLabel: "Ditt svar",
    none: "Inget här talade emot dig — men träffa hunden innan du bestämmer dig.",
    noneFits: "Väldigt lite här stämde med dina svar.",
    honesty:
      "Det här är ett resultat om livsstilskompatibilitet, inte en vetenskaplig mätning. Det jämför det du berättade för oss med det den här hunden vanligtvis behöver — enskilda hundar varierar.",
  },
  fi: {
    fitsTitle: "Miksi tämä koira voisi sopia elämääsi",
    tradeTitle: "Asioita, jotka kannattaa miettiä huolella",
    fromLabel: "Vastauksesi",
    none: "Mikään tässä ei puhunut sinua vastaan — mutta tapaa koira ennen kuin päätät.",
    noneFits: "Hyvin vähän tässä vastasi vastauksiasi.",
    honesty:
      "Tämä on elämäntyylin yhteensopivuutta kuvaava tulos, ei tieteellinen mittaus. Se vertaa kertomaasi siihen, mitä tämä koira yleensä tarvitsee — yksittäiset koirat vaihtelevat.",
  },
  de: {
    fitsTitle: "Warum dieser Hund zu deinem Leben passen könnte",
    tradeTitle: "Dinge, die du ernsthaft bedenken solltest",
    fromLabel: "Deine Antwort",
    none: "Nichts hier sprach gegen dich — aber triff den Hund, bevor du dich entscheidest.",
    noneFits: "Sehr wenig hier passte zu deinen Antworten.",
    honesty:
      "Dies ist ein Ergebnis zur Lebensstil-Kompatibilität, keine wissenschaftliche Messung. Es vergleicht das, was du uns erzählt hast, mit dem, was dieser Hund üblicherweise braucht — einzelne Hunde können abweichen.",
  },
  fr: {
    fitsTitle: "Pourquoi ce chien pourrait convenir à votre vie",
    tradeTitle: "Des points à bien prendre en compte",
    fromLabel: "Votre réponse",
    none: "Rien ici ne jouait contre vous — mais rencontrez le chien avant de décider.",
    noneFits: "Très peu de choses ici correspondaient à vos réponses.",
    honesty:
      "Il s'agit d'un résultat de compatibilité de style de vie, pas d'une mesure scientifique. Il compare ce que vous nous avez dit avec ce dont ce chien a généralement besoin — chaque chien est différent.",
  },
  nl: {
    fitsTitle: "Waarom deze hond bij je leven zou kunnen passen",
    tradeTitle: "Dingen die je serieus moet overwegen",
    fromLabel: "Jouw antwoord",
    none: "Niets hier pleitte tegen je — maar ontmoet de hond voordat je beslist.",
    noneFits: "Heel weinig hier kwam overeen met jouw antwoorden.",
    honesty:
      "Dit is een resultaat over levensstijlcompatibiliteit, geen wetenschappelijke meting. Het vergelijkt wat je ons hebt verteld met wat deze hond meestal nodig heeft — individuele honden verschillen.",
  },
};

/**
 * The heart of the honest reading: strengths and trade-offs get equal room,
 * and each line names the answer it came from.
 */
export function FitPanel({
  traits,
  profile,
  score,
  className,
}: {
  traits: BreedTraits;
  profile: UserProfile;
  score?: number;
  className?: string;
}) {
  const c = useCopy(copy);
  const { fits, tradeoffs } = matchInsights(traits, profile);

  return (
    <div className={className}>
      {typeof score === "number" && (
        <p className="max-w-xl text-lg leading-relaxed">{scoreReading(score)}</p>
      )}
      <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        <section className="bg-card p-8 md:p-10">
          <h3 className="display-md">{c.fitsTitle}</h3>
          <ul className="mt-6 space-y-5">
            {fits.length === 0 && (
              <li className="text-[0.9375rem] leading-relaxed text-muted-foreground">{c.noneFits}</li>
            )}
            {fits.map((item) => (
              <li key={item.from} className="border-l-2 border-primary/40 pl-4">
                <p className="eyebrow">
                  {c.fromLabel} · {item.from}
                </p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>
        <section className="bg-card p-8 md:p-10">
          <h3 className="display-md">{c.tradeTitle}</h3>
          <ul className="mt-6 space-y-5">
            {tradeoffs.length === 0 && (
              <li className="text-[0.9375rem] leading-relaxed text-muted-foreground">{c.none}</li>
            )}
            {tradeoffs.map((item) => (
              <li key={item.from} className="border-l-2 border-accent/60 pl-4">
                <p className="eyebrow">
                  {c.fromLabel} · {item.from}
                </p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <p className="mt-5 max-w-2xl border-l-2 border-border pl-4 text-sm leading-relaxed text-muted-foreground">
        {c.honesty}
      </p>
    </div>
  );
}
