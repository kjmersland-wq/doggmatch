import { Link } from "@tanstack/react-router";
import { useCopy } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";

/**
 * The thread that runs through DoggMatch: find, understand, prepare, live with.
 * Dropped at the foot of the main public pages so no page is a dead end.
 */

const copy = {
  en: {
    title: "Where to go next",
    intro: "DoggMatch follows the whole journey — from working out which dog suits you, to the ordinary days years later.",
    steps: [
      { to: "/find-my-dog", label: "Find my dog", hint: "A few questions about your days" },
      { to: "/breeds", label: "Breed library", hint: "What each dog is like to live with" },
      { to: "/compare", label: "Compare dogs", hint: "Side by side, on what matters" },
      { to: "/get-a-dog", label: "Getting a dog", hint: "Readiness, costs and choosing well" },
      { to: "/my-dog", label: "My dog", hint: "Routines, food, weight and care" },
      { to: "/train", label: "Training", hint: "Short, kind lessons that build up" },
      { to: "/travel", label: "Travel", hint: "Crossing borders and long car days" },
      { to: "/dog-life", label: "Dog life", hint: "Everyday life together, wherever you are" },
    ],
  },
  no: {
    title: "Hvor du kan gå videre",
    intro: "DoggMatch følger hele reisen — fra å finne ut hvilken hund som passer deg, til de helt vanlige dagene mange år senere.",
    steps: [
      { to: "/find-my-dog", label: "Finn min hund", hint: "Noen spørsmål om dagene dine" },
      { to: "/breeds", label: "Rasebiblioteket", hint: "Hvordan hver hund er å leve med" },
      { to: "/compare", label: "Sammenlign hunder", hint: "Side om side, på det som betyr noe" },
      { to: "/get-a-dog", label: "Skaffe hund", hint: "Beredskap, kostnader og gode valg" },
      { to: "/my-dog", label: "Min hund", hint: "Rutiner, fôr, vekt og stell" },
      { to: "/train", label: "Trening", hint: "Korte, vennlige leksjoner som bygger seg opp" },
      { to: "/travel", label: "Reise", hint: "Over grenser og lange bilturer" },
      { to: "/dog-life", label: "Hundeliv", hint: "Hverdagen sammen, uansett hvor du er" },
    ],
  },
  pl: {
    title: "Dokąd pójść dalej",
    intro: "DoggMatch towarzyszy przez całą drogę — od odkrycia, jaki pies do ciebie pasuje, po zwyczajne dni wiele lat później.",
    steps: [
      { to: "/find-my-dog", label: "Znajdź mojego psa", hint: "Kilka pytań o twoje dni" },
      { to: "/breeds", label: "Biblioteka ras", hint: "Jak żyje się z każdym psem" },
      { to: "/compare", label: "Porównaj psy", hint: "Obok siebie, w tym, co ważne" },
      { to: "/get-a-dog", label: "Zdobądź psa", hint: "Gotowość, koszty i dobre wybory" },
      { to: "/my-dog", label: "Mój pies", hint: "Rutyny, jedzenie, waga i pielęgnacja" },
      { to: "/train", label: "Trening", hint: "Krótkie, łagodne lekcje, które się rozwijają" },
      { to: "/travel", label: "Podróże", hint: "Przekraczanie granic i długie trasy samochodem" },
      { to: "/dog-life", label: "Życie z psem", hint: "Codzienność razem, gdziekolwiek jesteś" },
    ],
  },
  dk: {
    title: "Hvor du kan gå videre",
    intro: "DoggMatch følger hele rejsen — fra at finde ud af, hvilken hund der passer til dig, til de helt almindelige dage mange år senere.",
    steps: [
      { to: "/find-my-dog", label: "Find min hund", hint: "Nogle spørgsmål om dine dage" },
      { to: "/breeds", label: "Racebiblioteket", hint: "Hvordan hver hund er at leve med" },
      { to: "/compare", label: "Sammenlign hunde", hint: "Side om side, på det der betyder noget" },
      { to: "/get-a-dog", label: "Få en hund", hint: "Parathed, omkostninger og gode valg" },
      { to: "/my-dog", label: "Min hund", hint: "Rutiner, foder, vægt og pleje" },
      { to: "/train", label: "Træning", hint: "Korte, venlige lektioner der bygger sig op" },
      { to: "/travel", label: "Rejser", hint: "Over grænser og lange biature" },
      { to: "/dog-life", label: "Hundeliv", hint: "Hverdagen sammen, uanset hvor du er" },
    ],
  },
  se: {
    title: "Vart du kan gå vidare",
    intro: "DoggMatch följer hela resan — från att ta reda på vilken hund som passar dig, till de helt vanliga dagarna många år senare.",
    steps: [
      { to: "/find-my-dog", label: "Hitta min hund", hint: "Några frågor om dina dagar" },
      { to: "/breeds", label: "Rasbiblioteket", hint: "Hur det är att leva med varje hund" },
      { to: "/compare", label: "Jämför hundar", hint: "Sida vid sida, i det som spelar roll" },
      { to: "/get-a-dog", label: "Skaffa hund", hint: "Beredskap, kostnader och kloka val" },
      { to: "/my-dog", label: "Min hund", hint: "Rutiner, foder, vikt och skötsel" },
      { to: "/train", label: "Träning", hint: "Korta, snälla lektioner som byggs på" },
      { to: "/travel", label: "Resor", hint: "Över gränser och långa bilresor" },
      { to: "/dog-life", label: "Hundliv", hint: "Vardagen tillsammans, var du än är" },
    ],
  },
  fi: {
    title: "Mihin voit jatkaa täältä",
    intro: "DoggMatch kulkee koko matkan mukana — siitä, minkälainen koira sinulle sopii, aina niihin ihan tavallisiin päiviin vuosien päästä.",
    steps: [
      { to: "/find-my-dog", label: "Löydä koirani", hint: "Muutama kysymys arjestasi" },
      { to: "/breeds", label: "Rotukirjasto", hint: "Millaista on elää kunkin koiran kanssa" },
      { to: "/compare", label: "Vertaile koiria", hint: "Rinnakkain, niissä asioissa jotka merkitsevät" },
      { to: "/get-a-dog", label: "Hanki koira", hint: "Valmius, kustannukset ja hyvät valinnat" },
      { to: "/my-dog", label: "Oma koirani", hint: "Rutiinit, ruokinta, paino ja hoito" },
      { to: "/train", label: "Koulutus", hint: "Lyhyitä, ystävällisiä oppitunteja, jotka rakentuvat vaiheittain" },
      { to: "/travel", label: "Matkustaminen", hint: "Rajojen yli ja pitkät automatkat" },
      { to: "/dog-life", label: "Koiran arki", hint: "Yhteinen arki, missä ikinä oletkin" },
    ],
  },
} as const;

export function JourneyLinks({ exclude = [] }: { exclude?: string[] }) {
  const c = useCopy(copy);
  const steps = c.steps.filter((s) => !exclude.includes(s.to));

  return (
    <nav aria-label={c.title} className="container-page mt-20 border-t border-border pt-12 md:mt-28">
      <h2 className="display-md">{c.title}</h2>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{c.intro}</p>
      <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step) => (
          <li key={step.to} className="bg-card">
            <Link to={withLangPrefix(step.to)} className="block h-full p-6 transition-colors hover:bg-surface">
              <span className="block font-display text-base leading-tight tracking-tight">
                {step.label}
              </span>
              <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                {step.hint}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
