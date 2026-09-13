import { localizedHead } from "@/lib/seo";
import { pageSeo } from "@/lib/seo/pages";
import { Link, createFileRoute } from "@tanstack/react-router";
import { withLangPrefix } from "@/lib/localized-path";
import { useMemo, useState } from "react";
import { Eyebrow, Section } from "@/components/dogmatch/ui";
import { FoodRow, VetNote } from "@/components/dogmatch/care/parts";
import { foodItems } from "@/data/care/nutrition";
import type { FoodSafety } from "@/data/care/types";
import { cn } from "@/lib/utils";
import { useCopy } from "@/i18n";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { seoLinks } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";

const title = "Can my dog eat this? — a calm, searchable answer | DoggMatch";
const description =
  "Search any food and get a straight answer: fine in small amounts, be careful, or don't give this. Written for the moment something hits the kitchen floor.";

export const Route = createFileRoute("/{-$lang}/my-dog/food")({
  head: (ctx) => localizedHead(ctx, "/my-dog/food", pageSeo.myDogFood),
  component: FoodSafetyPage,
});

const copy = {
  en: {
    eyebrow: "Food safety",
    title: "Can my dog eat this?",
    intro:
      "Something's landed on the floor and your dog got there first. Type it in and you'll get a straight answer, without the panic.",
    azLink: "Browse every food, A–Z",
    searchPlaceholder: "Grapes, cheese, peanut butter…",
    searchAria: "Search foods",
    filters: [
      { value: "all" as const, label: "Everything" },
      { value: "safe" as const, label: "Fine in small amounts" },
      { value: "care" as const, label: "Be careful" },
      { value: "avoid" as const, label: "Don't give" },
    ],
    empty:
      "We haven't got that one written up. If your dog has already eaten it and you're not sure, ring your vet — that's exactly the sort of call they're there for.",
    vetNote:
      "If your dog has eaten something on the \"don't give\" list, don't wait to see what happens. Ring your vet or an animal poison line and tell them what it was, roughly how much, and when.",
    noteTitle: "A note on lists like this",
    noteBody:
      "Dogs differ. Something that's fine for most can still upset yours, and quantity matters — a crumb of something rich is not the same as half a packet. Treats of any kind should stay under about a tenth of what your dog eats in a day.",
  },
  de: {
    eyebrow: "Lebensmittelsicherheit",
    title: "Darf mein Hund das fressen?",
    intro:
      "Etwas ist auf den Boden gefallen und dein Hund war zuerst da. Gib es ein und du erhältst eine klare Antwort, ganz ohne Panik.",
    azLink: "Alle Lebensmittel von A–Z durchsuchen",
    searchPlaceholder: "Trauben, Käse, Erdnussbutter…",
    searchAria: "Lebensmittel suchen",
    filters: [
      { value: "all" as const, label: "Alles" },
      { value: "safe" as const, label: "In kleinen Mengen in Ordnung" },
      { value: "care" as const, label: "Vorsicht geboten" },
      { value: "avoid" as const, label: "Nicht geben" },
    ],
    empty:
      "Das haben wir noch nicht aufgeschrieben. Wenn dein Hund es bereits gefressen hat und du dir unsicher bist, ruf deinen Tierarzt an – dafür sind sie genau da.",
    vetNote:
      'Wenn dein Hund etwas von der Liste "Nicht geben" gefressen hat, warte nicht ab, was passiert. Ruf deinen Tierarzt oder eine Tiergift-Notrufnummer an und sag ihnen, was es war, ungefähr wie viel und wann.',
    noteTitle: "Ein Hinweis zu solchen Listen",
    noteBody:
      "Hunde sind verschieden. Was für die meisten in Ordnung ist, kann deinen Hund trotzdem stören, und die Menge spielt eine Rolle – ein Krümel von etwas Reichhaltigem ist nicht dasselbe wie eine halbe Packung. Leckerlis jeglicher Art sollten unter etwa einem Zehntel dessen bleiben, was dein Hund täglich frisst.",
  },
  fr: {
    eyebrow: "Sécurité alimentaire",
    title: "Mon chien peut-il manger ceci ?",
    intro:
      "Quelque chose est tombé par terre et votre chien a été le premier sur les lieux. Tapez le nom de l'aliment et vous obtiendrez une réponse claire, sans paniquer.",
    azLink: "Parcourir tous les aliments, de A à Z",
    searchPlaceholder: "Raisins, fromage, beurre de cacahuète…",
    searchAria: "Rechercher des aliments",
    filters: [
      { value: "all" as const, label: "Tout" },
      { value: "safe" as const, label: "Sans danger en petites quantités" },
      { value: "care" as const, label: "Avec précaution" },
      { value: "avoid" as const, label: "À éviter" },
    ],
    empty:
      "Nous n'avons pas encore rédigé d'informations à ce sujet. Si votre chien en a déjà mangé et que vous n'êtes pas sûr, appelez votre vétérinaire — c'est exactement pour ce genre de situation qu'il est là.",
    vetNote:
      "Si votre chien a mangé quelque chose de la liste \"À éviter\", n'attendez pas de voir ce qui se passe. Appelez votre vétérinaire ou un centre antipoison animal et dites-lui ce que c'était, à peu près quelle quantité, et quand.",
    noteTitle: "Une note sur ce type de listes",
    noteBody:
      "Les chiens sont différents. Ce qui convient à la plupart peut quand même déranger le vôtre, et la quantité compte — une miette de quelque chose de riche n'est pas la même chose qu'un demi-paquet. Les friandises, quelles qu'elles soient, ne devraient pas dépasser environ un dixième de ce que votre chien mange par jour.",
  },
  nl: {
    eyebrow: "Voedselveiligheid",
    title: "Mag mijn hond dit eten?",
    intro:
      "Er is iets op de grond gevallen en je hond was er als eerste bij. Typ het in en je krijgt een duidelijk antwoord, zonder paniek.",
    azLink: "Bekijk al het eten, A-Z",
    searchPlaceholder: "Druiven, kaas, pindakaas…",
    searchAria: "Zoek naar voedsel",
    filters: [
      { value: "all" as const, label: "Alles" },
      { value: "safe" as const, label: "Oké in kleine hoeveelheden" },
      { value: "care" as const, label: "Wees voorzichtig" },
      { value: "avoid" as const, label: "Niet geven" },
    ],
    empty:
      "We hebben dit nog niet uitgewerkt. Als je hond het al heeft gegeten en je bent niet zeker, bel dan je dierenarts – daar zijn ze precies voor.",
    vetNote:
      "Als je hond iets van de 'niet geven'-lijst heeft gegeten, wacht dan niet af wat er gebeurt. Bel je dierenarts of een vergiftigingslijn voor dieren en vertel wat het was, ongeveer hoeveel, en wanneer.",
    noteTitle: "Een opmerking over dit soort lijsten",
    noteBody:
      "Honden verschillen. Wat voor de meesten prima is, kan de jouwe toch van streek maken, en de hoeveelheid is belangrijk – een kruimel van iets rijks is niet hetzelfde als de helft van een pakje. Snoepjes van welke aard dan ook moeten onder ongeveer een tiende van wat je hond per dag eet blijven.",
  },
  no: {
    eyebrow: "Matsikkerhet",
    title: "Kan hunden min spise dette?",
    intro:
      "Noe har havnet på gulvet, og hunden din kom først. Skriv det inn, så får du et rett svar, uten panikk.",
    azLink: "Bla gjennom alle matvarer, A–Å",
    searchPlaceholder: "Druer, ost, peanøttsmør…",
    searchAria: "Søk etter mat",
    filters: [
      { value: "all" as const, label: "Alt" },
      { value: "safe" as const, label: "Greit i små mengder" },
      { value: "care" as const, label: "Vær forsiktig" },
      { value: "avoid" as const, label: "Ikke gi" },
    ],
    empty:
      "Vi har ikke skrevet om den ennå. Har hunden din allerede spist det og du er usikker, ring veterinæren — det er nettopp den typen samtale de er der for.",
    vetNote:
      "Har hunden din spist noe fra «ikke gi»-listen, ikke vent og se hva som skjer. Ring veterinæren eller en dyregiftlinje og fortell hva det var, omtrent hvor mye, og når.",
    noteTitle: "En kommentar om lister som denne",
    noteBody:
      "Hunder er forskjellige. Noe som er greit for de fleste kan likevel gi din hund problemer, og mengde betyr noe — en smule av noe fettrikt er ikke det samme som et halvt pakke. Godbiter av alle slag bør holdes under omtrent en tidel av det hunden spiser på en dag.",
  },
  pl: {
    eyebrow: "Bezpieczeństwo jedzenia",
    title: "Czy mój pies może to zjeść?",
    intro:
      "Coś wylądowało na podłodze i twój pies dotarł tam pierwszy. Wpisz co to było, a otrzymasz jasną odpowiedź, bez paniki.",
    azLink: "Przeglądaj wszystkie produkty, A–Z",
    searchPlaceholder: "Winogrona, ser, masło orzechowe…",
    searchAria: "Szukaj produktów",
    filters: [
      { value: "all" as const, label: "Wszystko" },
      { value: "safe" as const, label: "Dobre w małych ilościach" },
      { value: "care" as const, label: "Uważaj" },
      { value: "avoid" as const, label: "Nie podawaj" },
    ],
    empty:
      "Tego jeszcze nie opisaliśmy. Jeśli twój pies już to zjadł i nie jesteś pewien, zadzwoń do weterynarza — dokładnie po to tam są.",
    vetNote:
      "Jeśli twój pies zjadł coś z listy „nie podawaj”, nie czekaj, aż zobaczysz efekty. Zadzwoń do weterynarza lub na infolinię ds. zatruć zwierząt i powiedz, co to było, mniej więcej ile i kiedy.",
    noteTitle: "Uwaga o listach takich jak ta",
    noteBody:
      "Psy się różnią. Coś, co jest w porządku dla większości, może zaszkodzić twojemu psu, a ilość ma znaczenie — okruszek czegoś tłustego to nie to samo co pół opakowania. Wszelkie przysmaki powinny stanowić mniej niż jedną dziesiątą tego, co pies zjada w ciągu dnia.",
  },
  dk: {
    eyebrow: "Fødevaresikkerhed",
    title: "Kan min hund spise dette?",
    intro:
      "Noget er landet på gulvet, og din hund nåede først derhen. Skriv det ind, så får du et klart svar, uden panik.",
    azLink: "Gennemse alle fødevarer, A–Å",
    searchPlaceholder: "Druer, ost, jordnøddesmør…",
    searchAria: "Søg efter mad",
    filters: [
      { value: "all" as const, label: "Alt" },
      { value: "safe" as const, label: "Fint i små mængder" },
      { value: "care" as const, label: "Vær forsigtig" },
      { value: "avoid" as const, label: "Giv ikke" },
    ],
    empty:
      "Den har vi ikke skrevet op endnu. Har din hund allerede spist det, og du er usikker, så ring til dyrlægen — det er præcis den slags opkald, de er der for.",
    vetNote:
      'Har din hund spist noget fra "giv ikke"-listen, så vent ikke med at se, hvad der sker. Ring til dyrlægen eller en dyregiftlinje og fortæl, hvad det var, cirka hvor meget, og hvornår.',
    noteTitle: "En note om lister som denne",
    noteBody:
      "Hunde er forskellige. Noget der er fint for de fleste, kan stadig give din hund problemer, og mængde betyder noget — en krumme af noget fedt er ikke det samme som en halv pakke. Godbidder af enhver slags bør holdes under omkring en tiendedel af det, din hund spiser på en dag.",
  },
  se: {
    eyebrow: "Matsäkerhet",
    title: "Kan min hund äta det här?",
    intro:
      "Något har hamnat på golvet och din hund kom dit först. Skriv in det, så får du ett rakt svar, utan panik.",
    azLink: "Bläddra bland alla livsmedel, A–Ö",
    searchPlaceholder: "Vindruvor, ost, jordnötssmör…",
    searchAria: "Sök livsmedel",
    filters: [
      { value: "all" as const, label: "Allt" },
      { value: "safe" as const, label: "Okej i små mängder" },
      { value: "care" as const, label: "Var försiktig" },
      { value: "avoid" as const, label: "Ge inte" },
    ],
    empty:
      "Den har vi inte skrivit om än. Har din hund redan ätit det och du är osäker, ring veterinären — det är precis den typen av samtal de finns till för.",
    vetNote:
      'Har din hund ätit något från listan "ge inte", vänta inte och se vad som händer. Ring veterinären eller en djurgiftlinje och berätta vad det var, ungefär hur mycket, och när.',
    noteTitle: "En kommentar om listor som denna",
    noteBody:
      "Hundar är olika. Något som är okej för de flesta kan ändå ge din hund problem, och mängden spelar roll — en smula av något fett är inte samma sak som ett halvt paket. Godis av alla slag bör hållas under ungefär en tiondel av vad hunden äter på en dag.",
  },
  fi: {
    eyebrow: "Ruokaturvallisuus",
    title: "Voiko koirani syödä tätä?",
    intro:
      "Jotain on pudonnut lattialle, ja koirasi ehti sinne ensin. Kirjoita se, niin saat suoran vastauksen ilman paniikkia.",
    azLink: "Selaa kaikkia ruoka-aineita, A–Ö",
    searchPlaceholder: "Viinirypäleet, juusto, maapähkinävoi…",
    searchAria: "Hae ruoka-aineita",
    filters: [
      { value: "all" as const, label: "Kaikki" },
      { value: "safe" as const, label: "Sopii pieninä määrinä" },
      { value: "care" as const, label: "Ole varovainen" },
      { value: "avoid" as const, label: "Älä anna" },
    ],
    empty:
      "Sitä emme ole vielä kirjoittaneet auki. Jos koirasi on jo syönyt sitä etkä ole varma, soita eläinlääkärille — juuri sitä varten he ovat olemassa.",
    vetNote:
      'Jos koirasi on syönyt jotain "älä anna" -listalta, älä jää odottamaan mitä tapahtuu. Soita eläinlääkärille tai eläinten myrkytyspäivystykseen ja kerro, mitä se oli, suunnilleen kuinka paljon ja milloin.',
    noteTitle: "Huomio tällaisista listoista",
    noteBody:
      "Koirat ovat erilaisia. Jokin, mikä sopii useimmille, voi silti aiheuttaa ongelmia omallesi, ja määrällä on väliä — murunen jotain rasvaista ei ole sama asia kuin puoli pakettia. Kaikenlaisten herkkujen tulisi jäädä alle kymmenesosaan siitä, mitä koira syö päivässä.",
  },
} as const;

function FoodSafetyPage() {
  const c = useCopy(copy);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<FoodSafety | "all">("all");
  const [open, setOpen] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return foodItems()
      .filter((f) => (filter === "all" ? true : f.safety === filter))
      .filter((f) =>
        q ? f.name.toLowerCase().includes(q) || f.body.toLowerCase().includes(q) : true,
      )
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [query, filter]);

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">{c.title}</h1>
        <ShareBar className="mt-6" />
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
        <Link
          to={withLangPrefix("/can-dogs-eat")}
          className="mt-4 inline-flex text-sm text-accent underline decoration-border underline-offset-4 hover:decoration-accent"
        >
          {c.azLink}
        </Link>

        <div className="mt-10 max-w-xl">
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(null);
            }}
            type="search"
            placeholder={c.searchPlaceholder}
            aria-label={c.searchAria}
            className="h-14 w-full rounded-2xl border border-border bg-card px-5 text-[1.0625rem] outline-none transition-colors focus:border-accent"
          />
          <div className="mt-4 flex flex-wrap gap-2">
            {c.filters.map((f) => (
              <button
                key={f.value}
                type="button"
                aria-pressed={filter === f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  "min-h-11 rounded-full border px-4 text-sm transition-colors duration-300",
                  filter === f.value
                    ? "border-accent bg-accent-soft text-accent"
                    : "border-border text-muted-foreground hover:border-border-strong hover:text-foreground",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Section className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="rounded-[1.5rem] border border-border bg-card px-6 md:px-8">
            {results.length === 0 ? (
              <p className="py-10 text-[0.9375rem] leading-relaxed text-muted-foreground">
                {c.empty}
              </p>
            ) : (
              <ul>
                {results.map((item) => (
                  <FoodRow
                    key={item.id}
                    item={item}
                    open={open === item.id}
                    onToggle={() => setOpen(open === item.id ? null : item.id)}
                  />
                ))}
              </ul>
            )}
          </div>

          <div className="grid gap-6">
            <VetNote>{c.vetNote}</VetNote>
            <div className="rounded-[1.5rem] border border-border bg-surface p-7">
              <h2 className="font-display text-xl tracking-tight">{c.noteTitle}</h2>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                {c.noteBody}
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <SourcesLink category="nutrition" />
        </div>
      </Section>
    </div>
  );
}
