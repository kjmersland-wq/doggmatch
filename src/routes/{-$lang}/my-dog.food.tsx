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
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: seoLinks("/my-dog/food"),
  }),
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
      "Har din hund spist noget fra \"giv ikke\"-listen, så vent ikke med at se, hvad der sker. Ring til dyrlægen eller en dyregiftlinje og fortæl, hvad det var, cirka hvor meget, og hvornår.",
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
      "Har din hund ätit något från listan \"ge inte\", vänta inte och se vad som händer. Ring veterinären eller en djurgiftlinje och berätta vad det var, ungefär hur mycket, och när.",
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
      "Jos koirasi on syönyt jotain \"älä anna\" -listalta, älä jää odottamaan mitä tapahtuu. Soita eläinlääkärille tai eläinten myrkytyspäivystykseen ja kerro, mitä se oli, suunnilleen kuinka paljon ja milloin.",
    noteTitle: "Huomio tällaisista listoista",
    noteBody:
      "Koirat ovat erilaisia. Jokin, mikä sopii useimmille, voi silti aiheuttaa ongelmia omallesi, ja määrällä on väliä — murunen jotain rasvaista ei ole sama asia kuin puoli pakettia. Kaikenlaisten herkkujen tulisi jäädä alle kymmenesosaan siitä, mitä koira syö päivässä.",
  },
  de: {
    eyebrow: "Futtersicherheit",
    title: "Darf mein Hund das essen?",
    intro:
      "Etwas ist auf dem Boden gelandet, und Ihr Hund war zuerst da. Tippen Sie es ein, und Sie erhalten eine klare Antwort, ohne Panik.",
    azLink: "Alle Lebensmittel von A–Z durchsuchen",
    searchPlaceholder: "Weintrauben, Käse, Erdnussbutter …",
    searchAria: "Lebensmittel suchen",
    filters: [
      { value: "all" as const, label: "Alles" },
      { value: "safe" as const, label: "In kleinen Mengen unbedenklich" },
      { value: "care" as const, label: "Mit Vorsicht" },
      { value: "avoid" as const, label: "Nicht geben" },
    ],
    empty:
      "Das haben wir noch nicht beschrieben. Hat Ihr Hund es bereits gefressen und sind Sie unsicher, rufen Sie Ihren Tierarzt an — genau für solche Anrufe sind sie da.",
    vetNote:
      "Hat Ihr Hund etwas von der „Nicht geben“-Liste gefressen, warten Sie nicht ab, was passiert. Rufen Sie Ihren Tierarzt oder eine Giftnotrufzentrale an und schildern Sie, was es war, ungefähr wie viel, und wann.",
    noteTitle: "Ein Hinweis zu Listen wie dieser",
    noteBody:
      "Hunde sind unterschiedlich. Etwas, das für die meisten unbedenklich ist, kann Ihrem Hund trotzdem zu schaffen machen, und die Menge zählt — ein Krümel von etwas Reichhaltigem ist nicht dasselbe wie eine halbe Packung. Leckerlis jeder Art sollten unter etwa einem Zehntel der Tagesration bleiben.",
  },
  fr: {
    eyebrow: "Sécurité alimentaire",
    title: "Mon chien peut-il manger ça ?",
    intro:
      "Quelque chose est tombé par terre et votre chien est arrivé le premier. Tapez-le, et vous obtiendrez une réponse claire, sans panique.",
    azLink: "Parcourir tous les aliments, de A à Z",
    searchPlaceholder: "Raisin, fromage, beurre de cacahuète…",
    searchAria: "Rechercher des aliments",
    filters: [
      { value: "all" as const, label: "Tout" },
      { value: "safe" as const, label: "Sans souci en petite quantité" },
      { value: "care" as const, label: "Avec prudence" },
      { value: "avoid" as const, label: "Ne pas donner" },
    ],
    empty:
      "Nous n'avons pas encore rédigé de fiche pour cet aliment. Si votre chien l'a déjà mangé et que vous n'êtes pas sûr, appelez votre vétérinaire — c'est exactement le genre d'appel pour lequel il est là.",
    vetNote:
      "Si votre chien a mangé quelque chose de la liste « ne pas donner », n'attendez pas de voir ce qui se passe. Appelez votre vétérinaire ou un centre antipoison animalier et indiquez ce que c'était, environ la quantité, et le moment.",
    noteTitle: "Une remarque sur les listes comme celle-ci",
    noteBody:
      "Chaque chien est différent. Quelque chose qui convient à la plupart peut tout de même perturber le vôtre, et la quantité compte — une miette d'un aliment riche n'est pas comparable à la moitié d'un paquet. Toutes friandises confondues devraient rester sous environ un dixième de ce que votre chien mange en une journée.",
  },
  nl: {
    eyebrow: "Voedselveiligheid",
    title: "Mag mijn hond dit eten?",
    intro:
      "Er is iets op de vloer beland en uw hond was er als eerste bij. Typ het in en u krijgt een duidelijk antwoord, zonder paniek.",
    azLink: "Blader door alle voedingsmiddelen, A–Z",
    searchPlaceholder: "Druiven, kaas, pindakaas…",
    searchAria: "Voedingsmiddelen zoeken",
    filters: [
      { value: "all" as const, label: "Alles" },
      { value: "safe" as const, label: "Geen probleem in kleine hoeveelheden" },
      { value: "care" as const, label: "Wees voorzichtig" },
      { value: "avoid" as const, label: "Niet geven" },
    ],
    empty:
      "Dat hebben we nog niet uitgewerkt. Heeft uw hond het al gegeten en weet u het niet zeker, bel dan uw dierenarts — precies voor dat soort telefoontjes zijn ze er.",
    vetNote:
      "Heeft uw hond iets van de lijst \"niet geven\" gegeten, wacht dan niet af wat er gebeurt. Bel uw dierenarts of een dierendierengiflijn en vertel wat het was, ongeveer hoeveel, en wanneer.",
    noteTitle: "Een opmerking over lijsten zoals deze",
    noteBody:
      "Honden verschillen. Iets dat voor de meeste honden prima is, kan bij de uwe toch problemen geven, en de hoeveelheid maakt uit — een kruimel van iets machtigs is niet hetzelfde als een half pakje. Snacks van welke aard dan ook mogen samen niet meer zijn dan ongeveer een tiende van wat uw hond op een dag eet.",
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
      .filter((f) => (q ? f.name.toLowerCase().includes(q) || f.body.toLowerCase().includes(q) : true))
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
              <p className="py-10 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.empty}</p>
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
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{c.noteBody}</p>
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
