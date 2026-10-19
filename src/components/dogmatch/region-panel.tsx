import { AlertTriangle, MapPin } from "lucide-react";
import { interpolate, useCopy, useLocale, INTL_LOCALE } from "@/i18n";
import { useCountry } from "@/hooks/use-country";
import type { Breed } from "@/data/breeds";
import {
  CLIMATE,
  COUNTRIES,
  CURRENCY,
  breedRule,
  climateNote,
  isConverted,
  isCountry,
  type Country,
} from "@/lib/region";

const copy = {
  en: {
    label: "Where do you live?",
    other: "Somewhere else (costs in euro)",
    hint: "Suggested from your language. Change it if it's wrong.",
    title: "For where you live",
    euro: "Costs are shown in euro.",
    converted:
      "Costs are shown in {currency}, converted from euro at a rough fixed rate, so treat them as a guide.",
    climate: {
      cold: "Climate: long, cold winters.",
      temperate: "Climate: mild, changeable weather.",
      warm: "Climate: warm summers.",
    },
    feelsCold:
      "{breed} feels the cold more than most. Plan on a coat for winter walks and shorter outings in hard frost.",
    feelsHeat:
      "Summers can get hot here, and {breed} struggles in the heat. Keep walks to early morning and evening, with shade and water always close.",
    restricted:
      "{breed} is restricted in {country}: special rules, permits or a temperament test can apply, and some dogs can be refused.",
    permit: "In {country}, a {breed} needs a permit or registration with the authorities.",
    regional:
      "Rules for {breed} depend on the region in {country}, and some regions list it as restricted.",
    check:
      "Rules change, so check the current local rules before you commit. This is a guide, not legal advice.",
  },
  no: {
    label: "Hvor bor du?",
    other: "Et annet sted (priser i euro)",
    hint: "Foreslått ut fra språket ditt. Endre hvis det er feil.",
    title: "For der du bor",
    euro: "Kostnader vises i euro.",
    converted:
      "Kostnader vises i {currency}, omregnet fra euro med en grov fast kurs, så se på dem som en pekepinn.",
    climate: {
      cold: "Klima: lange, kalde vintre.",
      temperate: "Klima: mildt og omskiftelig vær.",
      warm: "Klima: varme somre.",
    },
    feelsCold:
      "{breed} fryser lettere enn de fleste. Regn med dekken på vinterturene og kortere turer i streng kulde.",
    feelsHeat:
      "Somrene kan bli varme her, og {breed} sliter i varmen. Hold turene til tidlig morgen og kveld, med skygge og vann alltid i nærheten.",
    restricted:
      "{breed} er regulert i {country}: det kan gjelde særskilte regler, tillatelser eller en temperamenttest, og noen hunder kan bli avvist.",
    permit: "I {country} krever {breed} tillatelse eller registrering hos myndighetene.",
    regional:
      "Reglene for {breed} avhenger av regionen i {country}, og enkelte regioner har den på listen over regulerte raser.",
    check:
      "Regler endrer seg, så sjekk gjeldende lokale regler før du bestemmer deg. Dette er en veiledning, ikke juridisk rådgivning.",
  },
  pl: {
    label: "Gdzie mieszkasz?",
    other: "Gdzie indziej (koszty w euro)",
    hint: "Podpowiedź na podstawie Twojego języka. Zmień, jeśli to błąd.",
    title: "Dla miejsca, w którym mieszkasz",
    euro: "Koszty podajemy w euro.",
    converted:
      "Koszty podajemy w {currency}, przeliczone z euro według zgrubnego, stałego kursu, więc traktuj je orientacyjnie.",
    climate: {
      cold: "Klimat: długie, mroźne zimy.",
      temperate: "Klimat: łagodna, zmienna pogoda.",
      warm: "Klimat: ciepłe lata.",
    },
    feelsCold:
      "Rasa {breed} marznie bardziej niż większość psów. Przygotuj ubranko na zimowe spacery i krótsze wyjścia podczas mrozu.",
    feelsHeat:
      "Lata bywają tu upalne, a rasa {breed} źle znosi gorąco. Spacery planuj wcześnie rano i wieczorem, z cieniem i wodą zawsze pod ręką.",
    restricted:
      "Rasa {breed} podlega ograniczeniom (kraj: {country}): mogą obowiązywać szczególne przepisy, zezwolenia lub test charakteru, a niektóre psy można odrzucić.",
    permit: "Rasa {breed} wymaga zezwolenia lub rejestracji w urzędzie (kraj: {country}).",
    regional:
      "Przepisy dotyczące rasy {breed} zależą od regionu (kraj: {country}), a niektóre regiony umieszczają ją na liście ras ograniczonych.",
    check:
      "Przepisy się zmieniają, więc przed decyzją sprawdź aktualne lokalne zasady. To wskazówka, nie porada prawna.",
  },
  dk: {
    label: "Hvor bor du?",
    other: "Et andet sted (priser i euro)",
    hint: "Foreslået ud fra dit sprog. Ret det, hvis det er forkert.",
    title: "Til der, hvor du bor",
    euro: "Omkostninger vises i euro.",
    converted:
      "Omkostninger vises i {currency}, omregnet fra euro med en grov fast kurs, så brug dem som en vejledning.",
    climate: {
      cold: "Klima: lange, kolde vintre.",
      temperate: "Klima: mildt og omskifteligt vejr.",
      warm: "Klima: varme somre.",
    },
    feelsCold:
      "{breed} fryser lettere end de fleste. Regn med et dækken på vinterturene og kortere ture i hård frost.",
    feelsHeat:
      "Somrene kan blive varme her, og {breed} har det svært i varmen. Hold turene til tidlig morgen og aften, med skygge og vand altid i nærheden.",
    restricted:
      "{breed} er reguleret i {country}: der kan gælde særlige regler, tilladelser eller en temperamentstest, og nogle hunde kan blive afvist.",
    permit: "I {country} kræver {breed} en tilladelse eller registrering hos myndighederne.",
    regional:
      "Reglerne for {breed} afhænger af regionen i {country}, og nogle regioner har den på listen over regulerede racer.",
    check:
      "Regler ændrer sig, så tjek de aktuelle lokale regler, før du beslutter dig. Det er en vejledning, ikke juridisk rådgivning.",
  },
  se: {
    label: "Var bor du?",
    other: "Någon annanstans (kostnader i euro)",
    hint: "Föreslaget utifrån ditt språk. Ändra om det är fel.",
    title: "För där du bor",
    euro: "Kostnader visas i euro.",
    converted:
      "Kostnader visas i {currency}, omräknade från euro med en grov fast kurs, så se dem som en vägledning.",
    climate: {
      cold: "Klimat: långa, kalla vintrar.",
      temperate: "Klimat: milt och växlande väder.",
      warm: "Klimat: varma somrar.",
    },
    feelsCold:
      "{breed} fryser lättare än de flesta. Räkna med täcke på vinterpromenaderna och kortare turer i sträng kyla.",
    feelsHeat:
      "Somrarna kan bli varma här, och {breed} har svårt med värme. Håll promenaderna till tidig morgon och kväll, med skugga och vatten alltid nära.",
    restricted:
      "{breed} är reglerad i {country}: särskilda regler, tillstånd eller ett temperamentstest kan gälla, och vissa hundar kan nekas.",
    permit: "I {country} kräver {breed} tillstånd eller registrering hos myndigheterna.",
    regional:
      "Reglerna för {breed} beror på region i {country}, och vissa regioner har den på listan över reglerade raser.",
    check:
      "Regler ändras, så kontrollera gällande lokala regler innan du bestämmer dig. Det här är en vägledning, inte juridisk rådgivning.",
  },
  fi: {
    label: "Missä asut?",
    other: "Jossain muualla (hinnat euroina)",
    hint: "Ehdotus kielesi perusteella. Muuta, jos se on väärin.",
    title: "Sinun asuinpaikkaasi varten",
    euro: "Kustannukset näytetään euroina.",
    converted:
      "Kustannukset näytetään valuutassa {currency}, muunnettuna eurosta karkealla kiinteällä kurssilla, joten pidä niitä suuntaa-antavina.",
    climate: {
      cold: "Ilmasto: pitkät, kylmät talvet.",
      temperate: "Ilmasto: leuto ja vaihteleva sää.",
      warm: "Ilmasto: lämpimät kesät.",
    },
    feelsCold:
      "{breed} palelee helpommin kuin useimmat. Varaudu toppatakkiin talvilenkeillä ja lyhyempiin ulkoiluihin kovalla pakkasella.",
    feelsHeat:
      "Kesät voivat olla täällä kuumia, ja {breed} kärsii helteestä. Pidä lenkit aamuun ja iltaan, ja varjo sekä vesi aina lähellä.",
    restricted:
      "{breed} on rajoitettu (maa: {country}): voimassa voi olla erityissääntöjä, lupia tai luonnetesti, ja joitakin koiria voidaan hylätä.",
    permit: "Rotu {breed} vaatii luvan tai rekisteröinnin viranomaisilta (maa: {country}).",
    regional:
      "Rodun {breed} säännöt riippuvat alueesta (maa: {country}), ja jotkin alueet listaavat sen rajoitetuksi.",
    check:
      "Säännöt muuttuvat, joten tarkista voimassa olevat paikalliset säännöt ennen päätöstä. Tämä on opas, ei oikeudellista neuvontaa.",
  },
  de: {
    label: "Wo wohnst du?",
    other: "Anderswo (Kosten in Euro)",
    hint: "Vorgeschlagen anhand deiner Sprache. Ändere es, wenn es nicht stimmt.",
    title: "Für deinen Wohnort",
    euro: "Kosten werden in Euro angezeigt.",
    converted:
      "Kosten werden in {currency} angezeigt, mit einem groben festen Kurs aus Euro umgerechnet — sieh sie als Richtwert.",
    climate: {
      cold: "Klima: lange, kalte Winter.",
      temperate: "Klima: mildes, wechselhaftes Wetter.",
      warm: "Klima: warme Sommer.",
    },
    feelsCold:
      "{breed} friert leichter als die meisten. Plane einen Mantel für Winterspaziergänge ein und kürzere Runden bei strengem Frost.",
    feelsHeat:
      "Die Sommer können hier heiß werden, und {breed} leidet unter Hitze. Lege Spaziergänge auf früh morgens und abends, mit Schatten und Wasser immer in Reichweite.",
    restricted:
      "{breed} ist in {country} eingeschränkt: Es können besondere Regeln, Erlaubnisse oder ein Wesenstest gelten, und manche Hunde können abgelehnt werden.",
    permit: "In {country} braucht ein Hund der Rasse {breed} eine Erlaubnis oder eine Anmeldung bei den Behörden.",
    regional:
      "Die Regeln für {breed} hängen in {country} von der Region ab, und manche Regionen führen die Rasse als eingeschränkt.",
    check:
      "Regeln ändern sich, also prüfe die aktuellen örtlichen Vorschriften, bevor du dich entscheidest. Das ist eine Orientierung, keine Rechtsberatung.",
  },
  fr: {
    label: "Où habitez-vous ?",
    other: "Ailleurs (coûts en euros)",
    hint: "Suggéré d'après votre langue. Changez-le si ce n'est pas bon.",
    title: "Pour là où vous vivez",
    euro: "Les coûts sont affichés en euros.",
    converted:
      "Les coûts sont affichés en {currency}, convertis depuis l'euro à un taux fixe approximatif : prenez-les comme un repère.",
    climate: {
      cold: "Climat : hivers longs et froids.",
      temperate: "Climat : temps doux et changeant.",
      warm: "Climat : étés chauds.",
    },
    feelsCold:
      "La race {breed} craint le froid plus que la plupart. Prévoyez un manteau pour les promenades d'hiver et des sorties plus courtes par grand froid.",
    feelsHeat:
      "Les étés peuvent être chauds ici, et la race {breed} supporte mal la chaleur. Gardez les promenades pour le petit matin et le soir, avec toujours de l'ombre et de l'eau à portée.",
    restricted:
      "La race {breed} est encadrée en {country} : des règles particulières, des autorisations ou un test de comportement peuvent s'appliquer, et certains chiens peuvent être refusés.",
    permit: "En {country}, la race {breed} nécessite un permis ou une déclaration auprès des autorités.",
    regional:
      "Les règles pour la race {breed} dépendent de la région en {country}, et certaines régions la classent comme restreinte.",
    check:
      "Les règles changent, alors vérifiez les règles locales en vigueur avant de vous décider. Ceci est un repère, pas un conseil juridique.",
  },
  nl: {
    label: "Waar woon je?",
    other: "Ergens anders (kosten in euro)",
    hint: "Voorgesteld op basis van je taal. Pas het aan als het niet klopt.",
    title: "Voor waar je woont",
    euro: "Kosten worden in euro getoond.",
    converted:
      "Kosten worden getoond in {currency}, omgerekend vanuit euro tegen een grove vaste koers, dus zie ze als richtlijn.",
    climate: {
      cold: "Klimaat: lange, koude winters.",
      temperate: "Klimaat: zacht, wisselvallig weer.",
      warm: "Klimaat: warme zomers.",
    },
    feelsCold:
      "Een {breed} heeft het sneller koud dan de meeste honden. Reken op een jasje voor winterwandelingen en kortere rondjes bij strenge vorst.",
    feelsHeat:
      "De zomers kunnen hier heet worden, en een {breed} heeft het zwaar in de hitte. Houd wandelingen bij vroeg in de ochtend en 's avonds, met schaduw en water altijd in de buurt.",
    restricted:
      "Het ras {breed} is in {country} aan beperkingen gebonden: er kunnen bijzondere regels, vergunningen of een gedragstest gelden, en sommige honden kunnen worden geweigerd.",
    permit:
      "In {country} heeft een {breed} een vergunning of registratie bij de autoriteiten nodig.",
    regional:
      "De regels voor het ras {breed} hangen in {country} af van de regio, en sommige regio's zetten het ras op de beperkte lijst.",
    check:
      "Regels veranderen, dus controleer de actuele lokale regels voordat je besluit. Dit is een richtlijn, geen juridisch advies.",
  },
} as const;

function useCountryName() {
  const { locale } = useLocale();
  const c = useCopy(copy);
  return (country: Country) => {
    if (country === "OTHER") return c.other;
    try {
      return (
        new Intl.DisplayNames([INTL_LOCALE[locale]], { type: "region" }).of(country) ?? country
      );
    } catch {
      return country;
    }
  };
}

/** A plain select: the reader's country, shared by every part of the site that shows money or rules. */
export function CountryPicker({ className }: { className?: string }) {
  const c = useCopy(copy);
  const { country, confirmed, setCountry } = useCountry();
  const nameOf = useCountryName();

  return (
    <label className={className}>
      <span className="flex items-center gap-2 text-sm font-medium">
        <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
        {c.label}
      </span>
      <select
        value={country}
        onChange={(event) => isCountry(event.target.value) && setCountry(event.target.value)}
        className="mt-2 h-12 w-full rounded-lg border border-border-strong bg-background px-4 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/20"
      >
        {COUNTRIES.map((code) => (
          <option key={code} value={code}>
            {nameOf(code)}
          </option>
        ))}
      </select>
      {!confirmed && <span className="mt-2 block text-xs text-muted-foreground">{c.hint}</span>}
    </label>
  );
}

/** What the chosen country changes for this breed: currency, climate, and any breed rules. */
export function RegionNotes({ breed, breedName }: { breed: Breed; breedName: string }) {
  const c = useCopy(copy);
  const { country } = useCountry();
  const nameOf = useCountryName();
  const climate = climateNote(breed, country);
  const rule = breedRule(breed.id, country);
  const countryName = nameOf(country);
  const warnings = [
    rule ? interpolate(c[rule], { breed: breedName, country: countryName }) : null,
    climate ? interpolate(c[climate], { breed: breedName }) : null,
  ].filter((line): line is string => line !== null);

  return (
    <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <h2 className="display-md">{c.title}</h2>
          <CountryPicker className="mt-5 block max-w-xs" />
        </div>
        <div className="space-y-4 text-sm leading-relaxed">
          <p className="text-muted-foreground">
            {isConverted(country)
              ? interpolate(c.converted, { currency: CURRENCY[country] })
              : c.euro}{" "}
            {c.climate[CLIMATE[country]]}
          </p>
          {warnings.length > 0 && (
            <ul className="space-y-3">
              {warnings.map((line) => (
                <li key={line} className="flex gap-3">
                  <AlertTriangle
                    className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                    aria-hidden="true"
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          )}
          {rule && <p className="text-xs text-muted-foreground">{c.check}</p>}
        </div>
      </div>
    </div>
  );
}
