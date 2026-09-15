import { Link } from "@tanstack/react-router";
import type { Breed } from "@/data/breeds";
import { breedContent } from "@/data/breed-content";
import { breedImages } from "@/data/breed-images";
import { useCopy, pick, interpolate } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";
import { useMatchProfile } from "@/lib/matching/store";
import { relatedBreeds } from "@/lib/breeds/related";
import { breedFaq } from "@/lib/breeds/faq";
import { getLocale } from "@/i18n/locale";
import { Arrow, ButtonLink, Eyebrow } from "./ui";

/* ------------------------------------------------------------------ guides */

const guideCopy = {
  en: {
    title: "Read more before you decide",
    intro: "The guides that matter most for this breed, written in plain language.",
    guides: {
      "family-dogs": "Dogs and children, honestly",
      "flat-living": "Living with a dog in a flat",
      "first-dog": "Your first dog",
      "shedding-allergies": "Shedding, coat care and allergies",
      "calm-dogs": "Calmer dogs for quieter homes",
      "active-life": "Dogs for an active life",
      "yearly-cost": "What a dog really costs per year",
    },
  },
  dk: {
    title: "Læs mere, før du beslutter dig",
    intro: "De vigtigste guides til denne race, skrevet i et letforståeligt sprog.",
    guides: {
      "family-dogs": "Hunde og børn – en ærlig snak",
      "flat-living": "At bo i lejlighed med hund",
      "first-dog": "Din første hund",
      "shedding-allergies": "Hårtab, pelspleje og allergi",
      "calm-dogs": "Rolige hunde til rolige hjem",
      "active-life": "Hunde til en aktiv livsstil",
      "yearly-cost": "Hvad en hund reelt koster om året",
    },
  },
  se: {
    title: "Läs på innan du bestämmer dig",
    intro: "De guider som är viktigast för den här rasen, skrivna på ett lättförståeligt sätt.",
    guides: {
      "family-dogs": "Hundar och barn – en ärlig guide",
      "flat-living": "Att bo med hund i lägenhet",
      "first-dog": "Din första hund",
      "shedding-allergies": "Fällning, pälsvård och allergier",
      "calm-dogs": "Lugnare hundar för ett lugnare hem",
      "active-life": "Hundar för ett aktivt liv",
      "yearly-cost": "Vad en hund verkligen kostar per år",
    },
  },
  fi: {
    title: "Lue lisää ennen päätöstäsi",
    intro: "Tälle rodulle tärkeimmät oppaat, selkokielellä kirjoitettuna.",
    guides: {
      "family-dogs": "Koira ja lapset – rehellisesti",
      "flat-living": "Koiran kanssa kerrostalossa",
      "first-dog": "Ensimmäinen koirasi",
      "shedding-allergies": "Karvanlähtö, turkinhoito ja allergiat",
      "calm-dogs": "Rauhallisemmat koirat rauhallisempiin koteihin",
      "active-life": "Koirat aktiiviseen elämään",
      "yearly-cost": "Mitä koira todella maksaa vuodessa",
    },
  },
  de: {
    title: "Lesen Sie mehr, bevor Sie sich entscheiden",
    intro: "Die wichtigsten Ratgeber für diese Rasse, verständlich erklärt.",
    guides: {
      "family-dogs": "Hunde und Kinder – die ehrliche Wahrheit",
      "flat-living": "Ein Hund in der Stadtwohnung",
      "first-dog": "Ihr erster Hund",
      "shedding-allergies": "Haaren, Fellpflege und Allergien",
      "calm-dogs": "Ruhigere Hunde für entspanntere Haushalte",
      "active-life": "Hunde für ein aktives Leben",
      "yearly-cost": "Was ein Hund wirklich pro Jahr kostet",
    },
  },
  fr: {
    title: "Lisez ceci avant de vous décider",
    intro: "Les guides essentiels pour cette race, expliqués simplement.",
    guides: {
      "family-dogs": "Les chiens et les enfants, en toute franchise",
      "flat-living": "Vivre avec un chien en appartement",
      "first-dog": "Votre premier chien",
      "shedding-allergies": "Perte de poils, entretien du pelage et allergies",
      "calm-dogs": "Des chiens plus calmes pour des foyers plus sereins",
      "active-life": "Des chiens pour une vie active",
      "yearly-cost": "Le coût réel d'un chien par an",
    },
  },
  nl: {
    title: "Lees meer voordat u een beslissing neemt",
    intro: "De gidsen die er het meest toe doen voor dit ras, geschreven in duidelijke taal.",
    guides: {
      "family-dogs": "Honden en kinderen, eerlijk gezegd",
      "flat-living": "Samenleven met een hond in een appartement",
      "first-dog": "Uw eerste hond",
      "shedding-allergies": "Verharen, vachtverzorging en allergieën",
      "calm-dogs": "Rustigere honden voor een rustiger thuis",
      "active-life": "Honden voor een actief leven",
      "yearly-cost": "Wat een hond werkelijk per jaar kost",
    },
  },
  no: {
    title: "Les mer før du bestemmer deg",
    intro: "Guidene som betyr mest for denne rasen, skrevet i klart språk.",
    guides: {
      "family-dogs": "Hund og barn, ærlig sagt",
      "flat-living": "Å ha hund i leilighet",
      "first-dog": "Din første hund",
      "shedding-allergies": "Pelsfelling, pelsstell og allergi",
      "calm-dogs": "Roligere hunder for rolige hjem",
      "active-life": "Hunder for et aktivt liv",
      "yearly-cost": "Hva en hund faktisk koster i året",
    },
  },
  pl: {
    title: "Poczytaj więcej, zanim zdecydujesz",
    intro: "Poradniki, które mają największe znaczenie przy tej rasie, napisane prostym językiem.",
    guides: {
      "family-dogs": "Pies i dzieci, szczerze",
      "flat-living": "Pies w mieszkaniu",
      "first-dog": "Twój pierwszy pies",
      "shedding-allergies": "Linienie, pielęgnacja i alergie",
      "calm-dogs": "Spokojniejsze psy do cichych domów",
      "active-life": "Psy do aktywnego życia",
      "yearly-cost": "Ile pies naprawdę kosztuje rocznie",
    },
  },
} as const;

type GuideId = keyof (typeof guideCopy)["en"]["guides"];

function relevantGuides(breed: Breed): GuideId[] {
  const t = breed.traits;
  const ids: GuideId[] = ["family-dogs", "flat-living", "first-dog"];
  if (t.shedding >= 3 || t.grooming >= 4) ids.push("shedding-allergies");
  if (t.energy <= 2) ids.push("calm-dogs");
  if (t.energy >= 4 || t.exerciseNeeds >= 4) ids.push("active-life");
  ids.push("yearly-cost");
  return ids;
}

export function BreedGuideLinks({ breed }: { breed: Breed }) {
  const c = useCopy(guideCopy);
  const ids = relevantGuides(breed);

  return (
    <section className="container-page border-t border-border py-16">
      <h2 className="display-md">{c.title}</h2>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{c.intro}</p>
      <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {ids.map((id) => (
          <li key={id} className="bg-card">
            <Link
              to={withLangPrefix("/guides")}
              hash={id}
              className="flex h-full items-center justify-between gap-4 p-6 transition-colors hover:bg-surface"
            >
              <span className="font-display text-base leading-tight tracking-tight">{c.guides[id]}</span>
              <Arrow />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ----------------------------------------------------------------- compare */

const compareCopy = {
  en: {
    title: "Compare with similar breeds",
    intro:
      "Side by side on exercise, coat, time alone and cost — the things that decide how the week actually feels.",
    cta: "Compare these breeds",
    open: "Open the full comparison",
  },
  dk: {
    title: "Sammenlign med lignende racer",
    intro:
      "Side om side på motion, pelspleje, tid alene og pris — de ting, der afgør, hvordan ugen reelt føles.",
    cta: "Sammenlign disse racer",
    open: "Åbn den fulde sammenligning",
  },
  se: {
    title: "Jämför med liknande raser",
    intro:
      "Sida vid sida gällande motion, pälsvård, ensamtid och kostnad – det som avgör hur veckan faktiskt känns.",
    cta: "Jämför dessa raser",
    open: "Öppna hela jämförelsen",
  },
  fi: {
    title: "Vertaa samankaltaisiin rotuihin",
    intro:
      "Rinnakkain liikunnan, turkin, yksinoloajan ja kustannusten suhteen – asiat, jotka ratkaisevat, miltä viikko todellisuudessa tuntuu.",
    cta: "Vertaa näitä rotuja",
    open: "Avaa täydellinen vertailu",
  },
  de: {
    title: "Vergleich mit ähnlichen Rassen",
    intro:
      "Seite an Seite bei Bewegung, Fellpflege, Alleinsein und Kosten – die Dinge, die entscheiden, wie sich die Woche tatsächlich anfühlt.",
    cta: "Diese Rassen vergleichen",
    open: "Vollständigen Vergleich öffnen",
  },
  fr: {
    title: "Comparer avec des races similaires",
    intro:
      "Côte à côte pour l'exercice, le pelage, le temps seul et le coût — les éléments qui déterminent comment la semaine se déroule réellement.",
    cta: "Comparer ces races",
    open: "Ouvrir la comparaison complète",
  },
  nl: {
    title: "Vergelijk met vergelijkbare rassen",
    intro:
      "Zij aan zij op het gebied van beweging, vacht, alleen zijn en kosten – de dingen die bepalen hoe de week daadwerkelijk voelt.",
    cta: "Vergelijk deze rassen",
    open: "Bekijk de volledige vergelijking",
  },
  no: {
    title: "Sammenlign med lignende raser",
    intro:
      "Side om side på mosjon, pels, alenetid og kostnad — det som avgjør hvordan uka faktisk blir.",
    cta: "Sammenlign disse rasene",
    open: "Åpne hele sammenligningen",
  },
  pl: {
    title: "Porównaj z podobnymi rasami",
    intro:
      "Obok siebie: ruch, sierść, czas w samotności i koszty — to, co decyduje o tym, jak naprawdę wygląda tydzień.",
    cta: "Porównaj te rasy",
    open: "Otwórz pełne porównanie",
  },
} as const;

export function CompareSimilar({ breed }: { breed: Breed }) {
  const c = useCopy(compareCopy);
  const names = breedContent();
  const related = relatedBreeds(breed.id, 3);
  const ids = [breed.id, ...related.map((r) => r.id)].join(",");

  return (
    <section className="container-page border-t border-border py-16">
      <h2 className="display-md">{c.title}</h2>
      <p className="mt-3 max-w-xl leading-relaxed text-muted-foreground">{c.intro}</p>
      <ul className="mt-8 flex flex-wrap gap-3">
        {[breed, ...related].map((b) => (
          <li
            key={b.id}
            className="flex items-center gap-3 rounded-full border border-border bg-card py-2 pl-2 pr-5"
          >
            <img
              src={breedImages[b.id]}
              alt=""
              width={40}
              height={40}
              loading="lazy"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-display text-sm tracking-tight">{names[b.id].displayName}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <ButtonLink
          to={withLangPrefix("/compare")}
          {...({ search: { breeds: ids } } as Record<string, unknown>)}
          size="lg"
        >
          {c.cta}
          <Arrow />
        </ButtonLink>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- quiz nudge */

const quizCopy = {
  en: {
    eyebrow: "Not sure yet?",
    title: "Let us read this breed against your own days",
    body: "Fifteen short questions about your home, your hours and your energy. You get a ranked shortlist, the reasoning behind it, and this page will start speaking to your answers.",
    cta: "Take the Find My Dog quiz",
    time: "Takes about three minutes. Your answers stay on this device.",
  },
  dk: {
    eyebrow: "Er du i tvivl?",
    title: "Lad os matche denne race med din hverdag",
    body: "Femten korte spørgsmål om dit hjem, din tid og dit energiniveau. Du får en rangeret liste, begrundelsen for den, og denne side vil begynde at tale til dine svar.",
    cta: "Tag Find Min Hund-quizzen",
    time: "Tager cirka tre minutter. Dine svar gemmes på denne enhed.",
  },
  se: {
    eyebrow: "Osäker än?",
    title: "Låt oss matcha rasen mot din vardag",
    body: "Femton korta frågor om ditt hem, dina tider och din energinivå. Du får en rangordnad lista med hundraser, förklaringen bakom rekommendationen, och den här sidan kommer att anpassa sig efter dina svar.",
    cta: "Gör \"Hitta min hund\"-testet",
    time: "Tar ungefär tre minuter. Dina svar sparas lokalt på den här enheten.",
  },
  fi: {
    eyebrow: "Etkö ole vielä varma?",
    title: "Luetaan rotuasi omiin päiviisi sopivaksi",
    body: "Viisitoista lyhyttä kysymystä kodistasi, aikatauluistasi ja energiatasostasi. Saat järjestetyn listan sopivimmista roduista, perustelut valinnoille ja tämä sivu alkaa puhua vastauksiesi pohjalta.",
    cta: "Tee Löydä koirani -kysely",
    time: "Kestää noin kolme minuuttia. Vastauksesi pysyvät tällä laitteella.",
  },
  de: {
    eyebrow: "Noch unsicher?",
    title: "Lassen Sie uns diese Rasse mit Ihren eigenen Tagen abgleichen",
    body: "Fünfzehn kurze Fragen zu Ihrem Zuhause, Ihren Arbeitszeiten und Ihrer Energie. Sie erhalten eine Rangliste, die Begründung dafür, und diese Seite wird auf Ihre Antworten eingehen.",
    cta: "Machen Sie den Finde-meinen-Hund-Quiz",
    time: "Dauert etwa drei Minuten. Ihre Antworten bleiben auf diesem Gerät.",
  },
  fr: {
    eyebrow: "Vous hésitez encore ?",
    title: "Comparons cette race à votre quotidien",
    body: "Quinze courtes questions sur votre foyer, vos horaires et votre niveau d'énergie. Vous recevrez une liste classée, les raisons de ce classement, et cette page s'adaptera à vos réponses.",
    cta: "Faites le quiz 'Trouvez mon chien'",
    time: "Environ trois minutes. Vos réponses restent sur cet appareil.",
  },
  nl: {
    eyebrow: "Nog niet zeker?",
    title: "Laat ons dit ras afzetten tegen jouw dagelijkse leven",
    body: "Vijftien korte vragen over je huis, je tijden en je energie. Je krijgt een gerangschikte shortlist, de uitleg erachter, en deze pagina zal inspelen op jouw antwoorden.",
    cta: "Doe de Vind Mijn Hond quiz",
    time: "Duurt ongeveer drie minuten. Je antwoorden blijven op dit apparaat staan.",
  },
  no: {
    eyebrow: "Usikker ennå?",
    title: "La oss lese denne rasen opp mot dine egne dager",
    body: "Femten korte spørsmål om hjemmet ditt, timene dine og energien din. Du får en rangert kortliste, begrunnelsen bak, og denne siden begynner å snakke til svarene dine.",
    cta: "Ta Finn min hund",
    time: "Tar rundt tre minutter. Svarene blir liggende på denne enheten.",
  },
  pl: {
    eyebrow: "Jeszcze nie masz pewności?",
    title: "Zestawmy tę rasę z twoją codziennością",
    body: "Piętnaście krótkich pytań o dom, godziny i energię. Dostaniesz uszeregowaną krótką listę, uzasadnienie, a ta strona zacznie mówić językiem twoich odpowiedzi.",
    cta: "Wypełnij Znajdź mojego psa",
    time: "Zajmuje około trzech minut. Odpowiedzi zostają na tym urządzeniu.",
  },
} as const;

/** Only shown when the reader has not answered the questions yet. */
export function BreedQuizCta() {
  const c = useCopy(quizCopy);
  const profile = useMatchProfile();
  if (profile) return null;

  return (
    <section className="container-page border-t border-border py-16">
      <div className="rounded-[2rem] border border-border bg-card p-8 md:p-12">
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h2 className="display-md mt-5 max-w-xl">{c.title}</h2>
        <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">{c.body}</p>
        <div className="mt-8">
          <ButtonLink to={withLangPrefix("/find-my-dog")} size="lg">
            {c.cta}
            <Arrow />
          </ButtonLink>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{c.time}</p>
      </div>
    </section>
  );
}

/* --------------------------------------------------------------------- faq */

const faqCopy = {
  en: { title: "Questions people ask before committing to a {breed}" },
  dk: { title: "Spørgsmål folk stiller, før de forpligter sig til en {breed}" },
  se: { title: "Frågor som folk ställer innan de bestämmer sig för en {breed}" },
  fi: { title: "Kysymyksiä, joita ihmiset miettivät ennen kuin sitoutuvat {rotu}n hankintaan" },
  de: { title: "Fragen, die sich Menschen vor der Anschaffung eines {breed} stellen" },
  fr: { title: "Questions que les gens se posent avant de s'engager avec un {breed}" },
  nl: { title: "Vragen die mensen stellen voordat ze zich committeren aan een {breed}" },
  no: { title: "Spørsmål folk stiller før de bestemmer seg for en {breed}" },
  pl: { title: "Pytania, które ludzie zadają przed decyzją o rasie {breed}" },
} as const;

export function BreedFaq({ breed, displayName }: { breed: Breed; displayName: string }) {
  const c = useCopy(faqCopy);
  const items = breedFaq(breed, displayName, getLocale());

  return (
    <section className="container-page border-t border-border py-16">
      <h2 className="display-md max-w-2xl">{interpolate(c.title, { breed: displayName })}</h2>
      <dl className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {items.map((item) => (
          <div key={item.question} className="bg-card p-6">
            <dt className="font-display text-base leading-snug tracking-tight">{item.question}</dt>
            <dd className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">{item.answer}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {pick({
          en: "These answers come from the same trait numbers used everywhere on DoggMatch — no marketing, no guesswork.",
          no: "Svarene bygger på de samme egenskapstallene som brukes overalt på DoggMatch — ingen markedsføring, ingen gjetting.",
          pl: "Te odpowiedzi opierają się na tych samych wartościach cech, których używamy w całym DoggMatch — bez marketingu i zgadywania.",
        })}
      </p>
    </section>
  );
}
