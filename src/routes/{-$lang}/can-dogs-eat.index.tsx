import { Link, createFileRoute } from "@tanstack/react-router";
import { Eyebrow, Section } from "@/components/dogmatch/ui";
import { SafetyDot, VetNote } from "@/components/dogmatch/care/parts";
import { SourcesLink } from "@/components/dogmatch/sources-link";
import { ShareBar } from "@/components/dogmatch/share";
import { useCopy, useLocale } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";
import { foodsByLetter, foodListFor } from "@/lib/food";
import { breadcrumbLd, headLocale, jsonLd, langUrl, localizedHead } from "@/lib/seo";

const seo = {
  en: {
    title: "Can dogs eat that? A–Z food safety list for dogs | DoggMatch",
    description:
      "A calm A–Z answer for every food: fine in small amounts, be careful, or don't give this. Written for the moment something hits the kitchen floor.",
  },
  no: {
    title: "Kan hunder spise det? A–Å matliste for hund | DoggMatch",
    description:
      "Et rolig A–Å-svar for hver matvare: greit i små mengder, vær forsiktig, eller ikke gi dette.",
  },
  pl: {
    title: "Czy pies może to zjeść? Lista A–Z bezpiecznych produktów | DoggMatch",
    description:
      "Spokojna odpowiedź A–Z dla każdego produktu: w porządku w małych ilościach, uważaj albo nie podawaj.",
  },
  dk: {
    title: "Må hunde spise det? A–Å fødevareliste for hunde | DoggMatch",
    description:
      "Et roligt A–Å-svar for hver fødevare: fint i små mængder, vær forsigtig, eller giv ikke hunden dette.",
  },
  se: {
    title: "Kan hundar äta det? A–Ö-lista över livsmedel | DoggMatch",
    description:
      "Ett lugnt A–Ö-svar för varje livsmedel: okej i små mängder, var försiktig, eller ge inte din hund detta.",
  },
  fi: {
    title: "Voiko koira syödä sitä? A–Ö-ruokalista koirille | DoggMatch",
    description:
      "Rauhallinen A–Ö-vastaus jokaiselle ruoka-aineelle: pieninä määrinä sopii, ole varovainen, tai älä anna tätä koiralle.",
  },
  de: {
    title: "Dürfen Hunde das fressen? A–Z-Liste zur Futtersicherheit | DoggMatch",
    description:
      "Eine ruhige A–Z-Antwort für jedes Lebensmittel: in kleinen Mengen unbedenklich, mit Bedacht, oder bitte nicht geben.",
  },
  fr: {
    title: "Les chiens peuvent-ils manger ça ? Liste A–Z des aliments | DoggMatch",
    description:
      "Une réponse claire de A à Z pour chaque aliment : sans souci en petite quantité, avec prudence, ou à ne pas donner.",
  },
  nl: {
    title: "Mogen honden dat eten? A–Z-lijst met voedselveiligheid | DoggMatch",
    description:
      "Een rustig A–Z-antwoord voor elk voedingsmiddel: prima in kleine hoeveelheden, wees voorzichtig, of geef dit niet.",
  },
};

export const Route = createFileRoute("/{-$lang}/can-dogs-eat/")({
  head: (ctx) => {
    const locale = headLocale(ctx);
    const head = localizedHead(ctx, "/can-dogs-eat", seo);
    return {
      ...head,
      scripts: [
        breadcrumbLd([
          { name: "DoggMatch", path: "/" },
          { name: seo[locale].title, path: "/can-dogs-eat" },
        ]),
        jsonLd({
          "@type": "CollectionPage",
          name: seo[locale].title,
          description: seo[locale].description,
          url: langUrl("/can-dogs-eat", locale),
        }),
      ],
    };
  },
  component: FoodHub,
});

const copy = {
  en: {
    eyebrow: "Food safety",
    title: "Can dogs eat that?",
    intro:
      "One page per food, so you get a straight answer without scrolling past three adverts first. Pick what your dog got hold of.",
    counted: (n: number) => `${n} foods answered so far`,
    vetNote:
      "If your dog has eaten something on the “don't give this” list, don't wait for symptoms. Ring your vet or an animal poison line and tell them what it was, roughly how much, and when.",
    searchHint: "Prefer to search? Use the searchable food list.",
    searchLink: "Open the searchable list",
  },
  de: {
    eyebrow: "Lebensmittelsicherheit",
    title: "Dürfen Hunde das fressen?",
    intro:
      "Eine Seite pro Lebensmittel, damit Sie eine klare Antwort erhalten, ohne erst an drei Werbeanzeigen vorbeiscrollen zu müssen. Wählen Sie aus, was Ihr Hund erwischt hat.",
    counted: (n: number) => `${n} Lebensmittel bereits beantwortet`,
    vetNote:
      "Wenn Ihr Hund etwas von der „Nicht geben“-Liste gefressen hat, warten Sie nicht auf Symptome. Rufen Sie Ihren Tierarzt oder eine Tiergift-Notrufnummer an und sagen Sie ihnen, was es war, ungefähr wie viel und wann.",
    searchHint: "Suchen Sie lieber? Nutzen Sie die durchsuchbare Lebensmittelliste.",
    searchLink: "Durchsuchbare Liste öffnen",
  },
  fr: {
    eyebrow: "Sécurité alimentaire",
    title: "Les chiens peuvent-ils manger ça ?",
    intro:
      "Une page par aliment, pour une réponse claire sans avoir à faire défiler trois publicités. Choisissez ce que votre chien a mangé.",
    counted: (n: number) => `${n} aliments analysés jusqu'à présent`,
    vetNote:
      "Si votre chien a ingéré un aliment de la liste « à ne pas donner », n'attendez pas les symptômes. Appelez votre vétérinaire ou un centre antipoison animal et précisez-lui ce que c'était, approximativement la quantité et quand.",
    searchHint: "Vous préférez chercher ? Utilisez la liste des aliments consultable.",
    searchLink: "Ouvrir la liste consultable",
  },
  nl: {
    eyebrow: "Voedselveiligheid",
    title: "Mag mijn hond dit eten?",
    intro:
      "Eén pagina per voedingsmiddel, zodat je direct antwoord krijgt zonder eerst langs drie advertenties te scrollen. Kies wat je hond te pakken heeft gekregen.",
    counted: (n: number) => `${n} voedingsmiddelen beantwoord tot nu toe`,
    vetNote:
      "Als je hond iets heeft gegeten dat op de 'niet geven'-lijst staat, wacht dan niet op symptomen. Bel je dierenarts of een vergiftigingslijn voor dieren en vertel wat het was, ongeveer hoeveel, en wanneer.",
    searchHint: "Liever zoeken? Gebruik de doorzoekbare voedingsmiddelenlijst.",
    searchLink: "Open de doorzoekbare lijst",
  },
  no: {
    eyebrow: "Mattrygghet",
    title: "Kan hunder spise det?",
    intro: "Én side per matvare, så du får et klart svar med én gang. Velg det hunden fikk tak i.",
    counted: (n: number) => `${n} matvarer besvart så langt`,
    vetNote:
      "Har hunden spist noe fra «ikke gi dette»-listen, ikke vent på symptomer. Ring veterinæren og si hva det var, omtrent hvor mye, og når.",
    searchHint: "Vil du heller søke? Bruk den søkbare matlisten.",
    searchLink: "Åpne den søkbare listen",
  },
  pl: {
    eyebrow: "Bezpieczeństwo żywności",
    title: "Czy pies może to zjeść?",
    intro: "Jedna strona na produkt, więc od razu masz jasną odpowiedź. Wybierz to, co zjadł twój pies.",
    counted: (n: number) => `${n} produktów opisanych do tej pory`,
    vetNote:
      "Jeśli pies zjadł coś z listy „nie podawaj”, nie czekaj na objawy. Zadzwoń do weterynarza i powiedz, co to było, ile mniej więcej i kiedy.",
    searchHint: "Wolisz szukać? Skorzystaj z wyszukiwarki produktów.",
    searchLink: "Otwórz listę z wyszukiwarką",
  },
  dk: {
    eyebrow: "Fødevaresikkerhed",
    title: "Må hunde spise det?",
    intro: "Én side per fødevare, så du får et klart svar med det samme. Vælg det, hunden fik fat i.",
    counted: (n: number) => `${n} fødevarer besvaret indtil videre`,
    vetNote:
      "Har hunden spist noget fra listen „giv ikke hunden dette“, så vent ikke på symptomer. Ring til din dyrlæge eller en dyregiftlinje, og fortæl hvad det var, cirka hvor meget, og hvornår.",
    searchHint: "Vil du hellere søge? Brug den søgbare fødevareliste.",
    searchLink: "Åbn den søgbare liste",
  },
  se: {
    eyebrow: "Matsäkerhet",
    title: "Kan hundar äta det?",
    intro: "En sida per livsmedel, så du får ett tydligt svar direkt. Välj det din hund kom åt.",
    counted: (n: number) => `${n} livsmedel besvarade hittills`,
    vetNote:
      "Har hunden ätit något från listan ”ge inte din hund detta”, vänta inte på symtom. Ring veterinären eller en giftinformationscentral och berätta vad det var, ungefär hur mycket och när.",
    searchHint: "Föredrar du att söka? Använd den sökbara livsmedelslistan.",
    searchLink: "Öppna den sökbara listan",
  },
  fi: {
    eyebrow: "Ruokaturvallisuus",
    title: "Voiko koira syödä sitä?",
    intro: "Yksi sivu jokaista ruoka-ainetta kohti, jotta saat suoran vastauksen heti. Valitse se, mitä koirasi sai käsiinsä.",
    counted: (n: number) => `${n} ruoka-ainetta käsitelty tähän mennessä`,
    vetNote:
      "Jos koira on syönyt jotain ”älä anna tätä koiralle” -listalta, älä odota oireita. Soita eläinlääkärille tai myrkytystietokeskukseen ja kerro, mitä se oli, suunnilleen kuinka paljon ja milloin.",
    searchHint: "Haluatko mieluummin hakea? Käytä haettavaa ruokalistaa.",
    searchLink: "Avaa haettava lista",
  },
} as const;

function FoodHub() {
  const c = useCopy(copy);
  const { locale } = useLocale();
  const groups = foodsByLetter(locale);
  const total = foodListFor(locale).length;

  return (
    <div className="pb-24">
      <section className="container-page pt-28 md:pt-36">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="display-xl mt-6 max-w-3xl">{c.title}</h1>
        <ShareBar className="mt-6" />
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
        <p className="mt-3 text-sm text-muted-foreground">{c.counted(total)}</p>
      </section>

      <Section className="container-page">
        <div className="grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div className="grid gap-8">
            {groups.map((group) => (
              <div key={group.letter}>
                <h2 className="font-display text-lg tracking-tight text-muted-foreground">{group.letter}</h2>
                <ul className="mt-3 grid gap-1 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <li key={item.id}>
                      <Link
                        to={withLangPrefix("/can-dogs-eat/$foodId")}
                        params={{ foodId: item.id }}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-[0.9375rem] transition-colors hover:bg-surface"
                      >
                        <SafetyDot safety={item.safety} />
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="grid gap-6">
            <VetNote>{c.vetNote}</VetNote>
            <div className="rounded-[1.5rem] border border-border bg-surface p-7">
              <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">{c.searchHint}</p>
              <Link
                to={withLangPrefix("/my-dog/food")}
                className="mt-4 inline-flex text-sm text-accent underline decoration-border underline-offset-4 hover:decoration-accent"
              >
                {c.searchLink}
              </Link>
            </div>
            <SourcesLink category="nutrition" />
          </div>
        </div>
      </Section>
    </div>
  );
}
