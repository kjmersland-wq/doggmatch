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
