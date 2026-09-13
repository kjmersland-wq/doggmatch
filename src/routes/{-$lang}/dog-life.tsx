import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { lazy, Suspense, useCallback, useEffect, useRef, useState } from "react";
import { useT, pick, useCopy, useLocale } from "@/i18n";
import { Button, Eyebrow } from "@/components/dogmatch/ui";
import dogLifeImage from "@/assets/dog-life.jpg";
import { seoLinks, abs, localizedHead } from "@/lib/seo";
import { ShareBar } from "@/components/dogmatch/share";
import { getPlacesCopy } from "@/lib/places/copy";
import { findNearbyPlaces, suggestPlaces } from "@/lib/places/places.functions";
import { PLACE_CATEGORIES, type NearbyResult, type PlaceCategory, type Suggestion } from "@/lib/places/types";
import { PlaceSend, SavedPlacesPanel } from "@/components/dogmatch/place-send";


const PlacesMap = lazy(() => import("@/components/dogmatch/places-map"));

const title = "Dog Life — dog-friendly places where you live | DoggMatch";
const description =
  "Parks, good walks, training classes, vets, groomers and places that welcome dogs. Just tell us where you live.";

const seoCopy = {
  en: { title, description },
  no: {
    title: "Hundeliv — hundevennlige steder der du bor | DoggMatch",
    description:
      "Parker, fine turer, hundekurs, veterinærer, hundefrisører og steder som tar godt imot hunder. Bare fortell oss hvor du bor.",
  },
  pl: {
    title: "Psie życie — miejsca przyjazne psom w Twojej okolicy | DoggMatch",
    description:
      "Parki, dobre spacery, szkolenia, weterynarze, groomerzy i miejsca, które lubią psy. Wystarczy, że powiesz nam, gdzie mieszkasz.",
  },
  dk: {
    title: "Hundeliv — hundevenlige steder, hvor du bor | DoggMatch",
    description:
      "Parker, gode gåture, hundekurser, dyrlæger, hundefrisører og steder, der tager godt imod hunde. Bare fortæl os, hvor du bor.",
  },
  se: {
    title: "Hundliv — hundvänliga platser där du bor | DoggMatch",
    description:
      "Parker, fina promenader, hundkurser, veterinärer, hundfrisörer och ställen som gillar hundar. Berätta bara var du bor.",
  },
  fi: {
    title: "Koiraelämä — koiraystävälliset paikat kotikaupungissasi | DoggMatch",
    description:
      "Puistoja, hyviä lenkkejä, koirakursseja, eläinlääkäreitä, trimmaajia ja paikkoja, jotka ottavat koirat mielellään vastaan. Kerro vain, missä asut.",
  },
  de: {
    title: "Hundeleben — hundefreundliche Orte bei dir vor Ort | DoggMatch",
    description:
      "Parks, schöne Gassirunden, Hundeschulen, Tierärzte, Hundefriseure und Orte, die Hunde willkommen heißen. Sag uns einfach, wo du wohnst.",
  },
  fr: {
    title:
      "Vie de chien — des lieux qui accueillent bien votre chien près de chez vous | DoggMatch",
    description:
      "Parcs, belles balades, cours d'éducation, vétérinaires, toiletteurs et lieux qui aiment les chiens. Dites-nous simplement où vous habitez.",
  },
  nl: {
    title: "Hondenleven — hondvriendelijke plekken bij jou in de buurt | DoggMatch",
    description:
      "Parken, fijne wandelroutes, hondenscholen, dierenartsen, trimsalons en plekken die honden verwelkomen. Vertel ons gewoon waar je woont.",
  },
};

export const Route = createFileRoute("/{-$lang}/dog-life")({
  head: (ctx) => localizedHead(ctx, "/dog-life", seoCopy),
  component: DogLifePage,
});

/** Practical, honest guidance for each category, in the same order as t.dogLife.categories. */
const tipCopy = {
  en: {
    lead: "We're building the local listings city by city. Until yours is ready, here's what we'd look for in each — it's the same checklist we use ourselves.",
    tips: [
      "Fenced, with a separate area for small dogs, and never so crowded that your dog can't leave a situation.",
      "Loops of 30-45 minutes with soft ground and shade. Vary the route — new smells tire a dog more than new distance.",
      "Check the local rules and the season; ground-nesting birds mean leads in spring almost everywhere.",
      "Ask which methods they use. Reward-based, small groups, and you should be allowed to watch a class before booking.",
      "Register before you need one, and note the nearest out-of-hours emergency clinic on the fridge.",
      "Ask to see how they handle a nervous dog. A good groomer will happily do a short first visit with no clipping at all.",
      "Insurance, references and a meeting on your dog's terms. Ask how many dogs they walk at once.",
      "Water bowl outside is a good sign; a bowl and a treat behind the counter is a better one.",
      "Phone ahead — dog-friendly often means the terrace only, and that matters in February.",
      "Check seasonal dog bans, currents and blue-green algae warnings before letting a dog swim.",
      "Somewhere that will order your food in and knows the breed-specific bits beats the cheapest shelf price.",
    ],
    searching: (place: string) => `Looking around ${place}`,
    notReady: (place: string) =>
      `We don't have verified places for ${place} yet. Tell us and we'll prioritise it — the checklist below works anywhere in the meantime.`,
  },
  no: {
    lead: "Vi bygger de lokale oversiktene by for by. Til din er klar, er dette vi ville sett etter — samme sjekkliste som vi bruker selv.",
    tips: [
      "Inngjerdet, med eget område for små hunder, og aldri så fullt at hunden din ikke kan komme seg unna.",
      "Runder på 30-45 minutter med mykt underlag og skygge. Varier ruta — nye lukter sliter ut en hund mer enn nye kilometer.",
      "Sjekk lokale regler og årstid; båndtvang gjelder om våren de fleste steder.",
      "Spør hvilke metoder de bruker. Belønningsbasert, små grupper, og du bør få se en time før du melder deg på.",
      "Registrer deg før du trenger det, og heng opp nærmeste vaktveterinær på kjøleskapet.",
      "Be om å se hvordan de håndterer en usikker hund. En god groomer tar gjerne et kort førstebesøk uten klipping.",
      "Forsikring, referanser og et møte på hundens premisser. Spør hvor mange hunder de går med om gangen.",
      "Vannbolle utenfor er et godt tegn; bolle og godbit bak disken er et bedre.",
      "Ring først — hundevennlig betyr ofte bare uteserveringen, og det merkes i februar.",
      "Sjekk hundeforbud i sesongen, strøm og varsler om blågrønnalger før hunden får bade.",
      "Et sted som bestiller inn fôret ditt og kan de rasespesifikke tingene slår den billigste hyllprisen.",
    ],
    searching: (place: string) => `Ser rundt ${place}`,
    notReady: (place: string) =>
      `Vi har ikke verifiserte steder for ${place} ennå. Si fra, så prioriterer vi det — sjekklisten under fungerer overalt i mellomtiden.`,
  },
  pl: {
    lead: "Budujemy lokalne zestawienia miasto po mieście. Zanim twoje będzie gotowe, oto na co sami zwracamy uwagę.",
    tips: [
      "Ogrodzony, z osobną częścią dla małych psów i nigdy tak zatłoczony, żeby pies nie mógł się wycofać.",
      "Pętle po 30-45 minut, miękkie podłoże i cień. Zmieniaj trasę — nowe zapachy męczą psa bardziej niż nowe kilometry.",
      "Sprawdź lokalne przepisy i porę roku; wiosną w wielu miejscach obowiązuje smycz.",
      "Zapytaj o metody. Szkolenie na nagrodach, małe grupy i możliwość obejrzenia zajęć przed zapisem.",
      "Zarejestruj się, zanim będzie potrzebny, i zapisz najbliższą całodobową lecznicę.",
      "Poproś, żeby pokazali, jak pracują z niepewnym psem. Dobry groomer chętnie zrobi krótką pierwszą wizytę bez strzyżenia.",
      "Ubezpieczenie, referencje i spotkanie na warunkach psa. Zapytaj, ile psów prowadzi naraz.",
      "Miska z wodą przed wejściem to dobry znak; miska i smakołyk za ladą — jeszcze lepszy.",
      "Zadzwoń wcześniej — „przyjazne psom” często oznacza tylko ogródek, a to ma znaczenie w lutym.",
      "Sprawdź sezonowe zakazy, prądy i ostrzeżenia o sinicach, zanim pies wejdzie do wody.",
      "Sklep, który zamówi twoją karmę i zna specyfikę rasy, jest wart więcej niż najniższa cena na półce.",
    ],
    searching: (place: string) => `Szukamy w okolicy: ${place}`,
    notReady: (place: string) =>
      `Nie mamy jeszcze zweryfikowanych miejsc dla ${place}. Daj znać, a zajmiemy się tym wcześniej — lista poniżej sprawdza się wszędzie.`,
  },
  dk: {
    lead: "Vi bygger de lokale oversigter by for by. Indtil din er klar, er det her, vi selv ville kigge efter — den samme tjekliste, vi selv bruger.",
    tips: [
      "Indhegnet, med et separat område til små hunde, og aldrig så fyldt at din hund ikke kan trække sig ud af en situation.",
      "Runder på 30-45 minutter med blødt underlag og skygge. Skift rute — nye dufte trætter en hund mere end nye kilometer.",
      "Tjek de lokale regler og årstiden; i foråret betyder redefugle på jorden snor de fleste steder.",
      "Spørg hvilke metoder de bruger. Belønningsbaseret, små hold, og du bør få lov at overvære en time, før du melder dig til.",
      "Bliv registreret, før du får brug for det, og hæng den nærmeste døgnåbne dyreklinik op på køleskabet.",
      "Bed om at se, hvordan de håndterer en nervøs hund. En god hundefrisør laver gerne et kort første besøg helt uden klipning.",
      "Forsikring, referencer og et møde på hundens præmisser. Spørg hvor mange hunde de lufter ad gangen.",
      "En vandskål udenfor er et godt tegn; en skål og en godbid bag disken er et endnu bedre.",
      "Ring i forvejen — hundevenligt betyder ofte kun terrassen, og det mærkes i februar.",
      "Tjek sæsonens hundeforbud, strøm og advarsler om blågrønalger, før hunden får lov at svømme.",
      "Et sted der bestiller dit foder hjem og kender de racespecifikke ting, slår den billigste hyldevare.",
    ],
    searching: (place: string) => `Kigger nærmere på ${place}`,
    notReady: (place: string) =>
      `Vi har endnu ikke verificerede steder for ${place}. Sig til, så prioriterer vi det — tjeklisten herunder virker alle vegne i mellemtiden.`,
  },
  se: {
    lead: "Vi bygger de lokala listorna stad för stad. Tills din är klar är det här vad vi själva skulle leta efter — samma checklista som vi själva använder.",
    tips: [
      "Inhägnat, med ett eget område för små hundar, och aldrig så fullt att din hund inte kan dra sig undan.",
      "Rundor på 30-45 minuter med mjukt underlag och skugga. Variera rutten — nya dofter tröttar ut en hund mer än nya kilometer.",
      "Kolla lokala regler och säsong; markhäckande fåglar betyder koppeltvång på våren nästan överallt.",
      "Fråga vilka metoder de använder. Belöningsbaserat, små grupper, och du bör få se en lektion innan du bokar.",
      "Registrera dig innan du behöver det, och sätt upp närmaste jourhavande djurklinik på kylskåpet.",
      "Be att få se hur de hanterar en nervös hund. En bra hundfrisör gör gärna ett kort första besök helt utan klippning.",
      "Försäkring, referenser och ett möte på hundens villkor. Fråga hur många hundar de rastar samtidigt.",
      "En vattenskål utomhus är ett gott tecken; en skål och ett godis bakom disken är ett ännu bättre.",
      "Ring i förväg — hundvänligt betyder ofta bara uteserveringen, och det märks i februari.",
      "Kolla säsongens badförbud för hundar, strömmar och varningar om blågröna alger innan hunden får simma.",
      "Ett ställe som beställer hem ditt foder och kan det rasspecifika slår det billigaste hyllpriset.",
    ],
    searching: (place: string) => `Tittar runt i ${place}`,
    notReady: (place: string) =>
      `Vi har inga verifierade ställen för ${place} än. Säg till, så prioriterar vi det — checklistan nedan fungerar överallt under tiden.`,
  },
  fi: {
    lead: "Rakennamme paikallisia listoja kaupunki kerrallaan. Kunnes omasi on valmis, tässä on se, mitä itse etsisimme — sama tarkistuslista, jota käytämme itsekin.",
    tips: [
      "Aidattu, erillinen alue pienille koirille, eikä koskaan niin täynnä, ettei koirasi voisi poistua tilanteesta.",
      "20–45 minuutin lenkkejä pehmeällä alustalla ja varjossa. Vaihtele reittiä — uudet hajut väsyttävät koiraa enemmän kuin uudet kilometrit.",
      "Tarkista paikalliset säännöt ja vuodenaika; maassa pesivät linnut tarkoittavat kytkentäpakkoa keväällä lähes kaikkialla.",
      "Kysy, mitä menetelmiä he käyttävät. Palkintoperustainen, pienet ryhmät, ja sinun pitäisi saada seurata tuntia ennen ilmoittautumista.",
      "Rekisteröidy ennen kuin tarvitset sitä, ja kirjoita lähin päivystävä eläinklinikka ylös jääkaapin oveen.",
      "Pyydä näkemään, miten he kohtelevat arkaa koiraa. Hyvä trimmaaja tekee mielellään lyhyen ensikäynnin ilman leikkausta.",
      "Vakuutus, suosittelijat ja tapaaminen koiran ehdoilla. Kysy, montako koiraa he ulkoiluttavat kerralla.",
      "Vesikuppi ulkona on hyvä merkki; kuppi ja herkku tiskin takana on vielä parempi.",
      "Soita etukäteen — koiraystävällinen tarkoittaa usein vain terassia, ja se huomaa helmikuussa.",
      "Tarkista kauden uimakiellot koirilta, virtaukset ja sinilevävaroitukset ennen kuin koira pääsee uimaan.",
      "Paikka, joka tilaa ruokasi kotiin ja tuntee rotukohtaiset asiat, voittaa halvimman hyllyhinnan.",
    ],
    searching: (place: string) => `Katsotaan, mitä löytyy alueelta ${place}`,
    notReady: (place: string) =>
      `Meillä ei ole vielä varmennettuja paikkoja alueelle ${place}. Kerro meille, niin priorisoimme sen — alla oleva tarkistuslista toimii sitä ennen kaikkialla.`,
  },
  de: {
    lead: "Wir bauen die lokalen Übersichten Stadt für Stadt auf. Bis deine fertig ist, ist das hier, worauf wir selbst achten würden — dieselbe Checkliste, die wir auch benutzen.",
    tips: [
      "Eingezäunt, mit einem eigenen Bereich für kleine Hunde, und nie so voll, dass dein Hund einer Situation nicht ausweichen kann.",
      "Runden von 30-45 Minuten auf weichem Untergrund im Schatten. Wechsle die Route — neue Gerüche ermüden einen Hund mehr als neue Kilometer.",
      "Prüfe die lokalen Regeln und die Jahreszeit; Bodenbrüter bedeuten im Frühling fast überall Leinenpflicht.",
      "Frag, welche Methoden verwendet werden. Belohnungsbasiert, kleine Gruppen, und du solltest eine Stunde beobachten dürfen, bevor du buchst.",
      "Melde dich an, bevor du es brauchst, und notiere die nächste Notfallklinik außerhalb der Öffnungszeiten am Kühlschrank.",
      "Frag, wie sie mit einem nervösen Hund umgehen. Ein guter Hundefriseur macht gerne einen kurzen ersten Besuch ganz ohne Schneiden.",
      "Versicherung, Referenzen und ein Treffen nach den Bedingungen deines Hundes. Frag, wie viele Hunde gleichzeitig ausgeführt werden.",
      "Ein Wassernapf draußen ist ein gutes Zeichen; ein Napf und ein Leckerli hinter der Theke ist noch besser.",
      "Ruf vorher an — hundefreundlich bedeutet oft nur die Terrasse, und das macht im Februar einen Unterschied.",
      "Prüfe saisonale Badeverbote für Hunde, Strömungen und Blaualgen-Warnungen, bevor der Hund schwimmen darf.",
      "Ein Laden, der dein Futter bestellt und die rassespezifischen Dinge kennt, schlägt den billigsten Regalpreis.",
    ],
    searching: (place: string) => `Wir schauen uns in ${place} um`,
    notReady: (place: string) =>
      `Wir haben noch keine verifizierten Orte für ${place}. Sag uns Bescheid, dann priorisieren wir das — die Checkliste unten funktioniert in der Zwischenzeit überall.`,
  },
  fr: {
    lead: "Nous construisons les annuaires locaux ville par ville. En attendant que le vôtre soit prêt, voici ce que nous chercherions nous-mêmes — la même liste de critères que nous utilisons.",
    tips: [
      "Clôturé, avec une zone séparée pour les petits chiens, et jamais si bondé que votre chien ne puisse s'éloigner d'une situation.",
      "Des boucles de 30 à 45 minutes sur sol souple et à l'ombre. Variez l'itinéraire — de nouvelles odeurs fatiguent plus un chien que de nouveaux kilomètres.",
      "Vérifiez les règles locales et la saison ; la nidification au sol impose la laisse au printemps presque partout.",
      "Demandez quelles méthodes sont utilisées. Renforcement positif, petits groupes, et vous devriez pouvoir observer un cours avant de réserver.",
      "Inscrivez-vous avant d'en avoir besoin, et notez la clinique d'urgence la plus proche sur le frigo.",
      "Demandez à voir comment ils gèrent un chien anxieux. Un bon toiletteur fera volontiers une première visite courte, sans aucune tonte.",
      "Assurance, références et une rencontre selon les conditions de votre chien. Demandez combien de chiens ils promènent à la fois.",
      "Une gamelle d'eau dehors est bon signe ; une gamelle et une friandise derrière le comptoir, c'est encore mieux.",
      "Appelez avant d'y aller — « accepte les chiens » veut souvent dire seulement la terrasse, et cela compte en février.",
      "Vérifiez les interdictions de baignade saisonnières, les courants et les alertes cyanobactéries avant de laisser un chien nager.",
      "Un magasin qui commande votre nourriture et connaît les particularités de la race vaut mieux que le prix le plus bas en rayon.",
    ],
    searching: (place: string) => `À la découverte de ${place}`,
    notReady: (place: string) =>
      `Nous n'avons pas encore de lieux vérifiés pour ${place}. Dites-le-nous et nous en ferons une priorité — en attendant, la liste ci-dessous fonctionne partout.`,
  },
  nl: {
    lead: "We bouwen de lokale overzichten stad voor stad op. Tot die van jou klaar is, is dit waar we zelf op zouden letten — dezelfde checklist die we zelf gebruiken.",
    tips: [
      "Omheind, met een apart gedeelte voor kleine honden, en nooit zo druk dat je hond een situatie niet kan ontwijken.",
      "Rondjes van 30-45 minuten op zachte ondergrond en in de schaduw. Varieer de route — nieuwe geuren vermoeien een hond meer dan nieuwe kilometers.",
      "Check de lokale regels en het seizoen; broedende vogels op de grond betekenen bijna overal een aanlijnplicht in het voorjaar.",
      "Vraag welke methodes ze gebruiken. Beloningsgericht, kleine groepen, en je zou een les moeten mogen bijwonen voordat je boekt.",
      "Registreer je voordat je het nodig hebt, en noteer de dichtstbijzijnde 24-uursdierenkliniek op de koelkast.",
      "Vraag hoe ze omgaan met een nerveuze hond. Een goede trimsalon doet graag een kort eerste bezoek zonder te knippen.",
      "Verzekering, referenties en een kennismaking op de voorwaarden van je hond. Vraag hoeveel honden ze tegelijk uitlaten.",
      "Een waterbak buiten is een goed teken; een bak en een snoepje achter de toonbank is nog beter.",
      "Bel van tevoren — hondvriendelijk betekent vaak alleen het terras, en dat merk je in februari.",
      "Check seizoensgebonden zwemverboden voor honden, stromingen en blauwalgwaarschuwingen voordat je een hond laat zwemmen.",
      "Een winkel die je voer bestelt en de rasspecifieke dingen kent, wint het van de goedkoopste schapprijs.",
    ],
    searching: (place: string) => `We kijken rond in ${place}`,
    notReady: (place: string) =>
      `We hebben nog geen geverifieerde plekken voor ${place}. Laat het ons weten, dan geven we het voorrang — de checklist hieronder werkt intussen overal.`,
  },
} as const;

const RADIUS_STEPS = [10, 25, 50];

function makeToken(): string {
  const bytes = new Uint8Array(16);
  if (typeof crypto !== "undefined") crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
}

function Stars({ rating }: { rating: number }) {
  return (
    <span className="text-accent" aria-hidden>
      {"★".repeat(Math.round(rating))}
      <span className="text-muted-foreground">{"★".repeat(5 - Math.round(rating))}</span>
    </span>
  );
}

function DogLifePage() {
  const t = useT();
  const c = useCopy(tipCopy);
  const { locale } = useLocale();
  const p = getPlacesCopy(locale);

  const suggest = useServerFn(suggestPlaces);
  const findNearby = useServerFn(findNearbyPlaces);

  const [mounted, setMounted] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [tokenState, setToken] = useState(() => makeToken());
  const [loading, setLoading] = useState(false);
  const [locating, setLocating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [label, setLabel] = useState("");
  const [radiusKm, setRadiusKm] = useState(10);
  const [tab, setTab] = useState<PlaceCategory>("parks");
  const [activeId, setActiveId] = useState<string | null>(null);
  const [result, setResult] = useState<NearbyResult | null>(null);

  const chosenRef = useRef<string | null>(null);
  const requestRef = useRef(0);

  useEffect(() => setMounted(true), []);

  // Suggestions while typing, gently debounced and safe against stale answers.
  useEffect(() => {
    const text = query.trim();
    if (chosenRef.current === text) return;
    if (text.length < 2) {
      setSuggestions([]);
      return;
    }
    const id = ++requestRef.current;
    const timer = setTimeout(() => {
      void suggest({ data: { input: text, locale, sessionToken: tokenState } })
        .then((response) => {
          if (id === requestRef.current) setSuggestions(response.suggestions);
        })
        .catch(() => undefined);
    }, 300);
    return () => clearTimeout(timer);
  }, [query, locale, tokenState, suggest]);

  const runSearch = useCallback(
    async (input: {
      placeId?: string;
      query?: string;
      lat?: number;
      lng?: number;
      radius?: number;
      label?: string;
    }) => {
      setLoading(true);
      setError(null);
      setSuggestions([]);
      const radius = input.radius ?? radiusKm;
      try {
        const response = await findNearby({
          data: {
            locale,
            radiusKm: radius,
            ...(input.placeId ? { placeId: input.placeId, sessionToken: tokenState } : {}),
            ...(input.query ? { query: input.query } : {}),
            ...(typeof input.lat === "number" ? { lat: input.lat, lng: input.lng } : {}),
          },
        });
        if (!response.ok || !response.result) {
          setError(
            response.error === "not_found"
              ? p.notFound
              : response.error === "busy"
                ? p.busy
                : p.unavailable,
          );
          return;
        }
        setResult(response.result);
        setRadiusKm(radius);
        setLabel(input.label ?? response.label ?? input.query ?? p.yourLocation);
        setActiveId(null);
        if (input.placeId) setToken(makeToken());
      } catch {
        setError(p.unavailable);
      } finally {
        setLoading(false);
      }
    },
    [findNearby, locale, p, radiusKm, tokenState],
  );

  const useMyLocation = useCallback(() => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setError(p.geoDenied);
      return;
    }
    setLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocating(false);
        void runSearch({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          label: p.yourLocation,
        });
      },
      () => {
        setLocating(false);
        setError(p.geoDenied);
      },
      { enableHighAccuracy: false, timeout: 10000, maximumAge: 300000 },
    );
  }, [p, runSearch]);

  const list = result ? (result.places[tab] ?? []) : [];
  const nextRadius = RADIUS_STEPS.find((step) => step > radiusKm);

  return (
    <div className="pb-24">
      <section className="container-page py-14 md:py-20">
        <Eyebrow>{t.home.lifeEyebrow}</Eyebrow>
        <h1 className="display-lg mt-6 max-w-2xl">{t.dogLife.title}</h1>
        <ShareBar className="mt-6" />
        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">{t.dogLife.subtitle}</p>

        <form
          className="relative mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            const text = query.trim();
            if (text) void runSearch({ query: text });
          }}
        >
          <div className="relative flex-1">
            <label htmlFor="location" className="sr-only">
              {p.searchLabel}
            </label>
            <input
              id="location"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={p.placeholder}
              autoComplete="off"
              autoCapitalize="words"
              className="h-14 w-full rounded-full border border-border bg-card px-6 outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
            />
            {suggestions.length > 0 && (
              <ul className="absolute left-0 right-0 top-16 z-20 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
                {suggestions.map((item) => (
                  <li key={item.placeId}>
                    <button
                      type="button"
                      className="block w-full px-6 py-3 text-left text-sm transition-colors hover:bg-muted"
                      onClick={() => {
                        chosenRef.current = item.label;
                        requestRef.current += 1;
                        setSuggestions([]);
                        setQuery(item.label);
                        void runSearch({ placeId: item.placeId, label: item.label });
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <Button size="lg" type="submit" disabled={loading}>
            {loading ? p.searching : p.search}
          </Button>
        </form>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={useMyLocation}
            disabled={locating || loading}
            className="text-sm font-medium text-primary underline-offset-4 hover:underline disabled:opacity-60"
          >
            {locating ? p.locating : p.useMyLocation}
          </button>
          <p className="text-sm text-muted-foreground">{t.dogLife.optional}</p>
        </div>

        {error && <p className="mt-4 max-w-xl text-sm text-accent">{error}</p>}
      </section>

      <section className="container-page">
        <div className="overflow-hidden rounded-[2rem] border border-border">
          {mounted && result ? (
            <Suspense
              fallback={<div className="h-[22rem] w-full bg-ink md:h-[30rem]" aria-hidden />}
            >
              <PlacesMap
                center={result.center}
                places={list}
                activeId={activeId}
                onSelect={setActiveId}
                label={p.mapLabel}
                radiusKm={result.radiusKm}
                standardLabel={p.mapStandard}
                satelliteLabel={p.mapSatellite}
              />
            </Suspense>
          ) : (
            <div className="relative">
              <img
                src={dogLifeImage}
                alt="Aerial view of a park with walking paths at dawn"
                width={1600}
                height={1008}
                loading="lazy"
                className="h-[22rem] w-full object-cover md:h-[30rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/55 to-ink/15" />
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12">
                <p className="font-display text-2xl text-ivory drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
                  {pick({
                    en: "Wherever you are",
                    no: "Uansett hvor du er",
                    pl: "Gdziekolwiek jesteś",
                    dk: "Uanset hvor du er",
                    se: "Var du än är",
                    fi: "Missä ikinä oletkin",
                    de: "Wo auch immer du bist",
                    fr: "Où que vous soyez",
                    nl: "Waar je ook bent",
                  })}
                </p>
                <p className="mt-2 max-w-md text-sm text-ivory/90 drop-shadow-[0_1px_8px_rgba(0,0,0,0.5)]">
                  {c.lead}
                </p>
              </div>
            </div>
          )}
        </div>
      </section>

      <SavedPlacesPanel />

      {result && (

        <section className="container-page mt-10">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 className="font-display text-2xl tracking-tight">
              {label ? p.around(label) : p.yourLocation}
            </h2>
            <p className="text-sm text-muted-foreground">
              {p.results(list.length)} · {radiusKm} km
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2" role="tablist">
            {PLACE_CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={tab === category}
                onClick={() => {
                  setTab(category);
                  setActiveId(null);
                }}
                className={`rounded-full border px-5 py-2 text-sm transition-colors ${
                  tab === category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary"
                }`}
              >
                {p.tabs[category]}
              </button>
            ))}
          </div>

          {list.length > 0 ? (
            <ul className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
              {list.map((place) => (
                <li
                  key={place.id}
                  className={`bg-background p-6 transition-colors ${
                    activeId === place.id ? "bg-muted" : ""
                  }`}
                >
                  <button
                    type="button"
                    className="w-full text-left"
                    onClick={() => setActiveId(place.id)}
                  >
                    {place.partner && (
                      <span className="mb-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                        {p.verifiedPartner}
                      </span>
                    )}
                    <p className="font-display text-lg leading-tight tracking-tight">{place.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{place.address}</p>
                    <p className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                      {place.rating ? (
                        <span className="flex items-center gap-2">
                          <Stars rating={place.rating} />
                          <span className="text-muted-foreground">
                            {place.rating.toFixed(1)}
                            {place.ratingCount ? ` · ${p.ratings(place.ratingCount)}` : ""}
                          </span>
                        </span>
                      ) : (
                        <span className="text-muted-foreground">{p.noRating}</span>
                      )}
                      <span className="text-muted-foreground">
                        {p.away(place.distanceKm.toFixed(1))}
                      </span>
                      <span
                        className={
                          place.openNow === null
                            ? "text-muted-foreground"
                            : place.openNow
                              ? "text-primary"
                              : "text-accent"
                        }
                      >
                        {place.openNow === null
                          ? p.hoursUnknown
                          : place.openNow
                            ? p.openNow
                            : p.closedNow}
                      </span>
                    </p>
                    {place.partnerBenefit && (
                      <p className="mt-3 text-sm leading-relaxed">{place.partnerBenefit}</p>
                    )}
                  </button>
                  <a
                    className="mt-3 inline-block text-sm font-medium text-primary underline-offset-4 hover:underline"
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${place.name} ${place.address}`,
                    )}&query_place_id=${place.id}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {p.directions}
                  </a>
                  <PlaceSend place={place} />

                </li>
              ))}
            </ul>
          ) : (
            <div className="mt-8 rounded-2xl border border-border bg-card p-8">
              <p className="font-display text-xl tracking-tight">{p.emptyTitle}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {p.emptyBody}
              </p>
              {nextRadius ? (
                <Button
                  className="mt-6"
                  disabled={loading}
                  onClick={() =>
                    void runSearch({
                      lat: result.center.lat,
                      lng: result.center.lng,
                      radius: nextRadius,
                      label,
                    })
                  }
                >
                  {p.expand(nextRadius)}
                </Button>
              ) : (
                <p className="mt-6 text-sm text-muted-foreground">{p.widest}</p>
              )}
              <div className="mt-8 border-t border-border pt-6">
                <p className="font-display text-lg tracking-tight">{p.guidanceTitle}</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {p.guidance.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </section>
      )}

      <section className="container-page mt-16">
        <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {t.dogLife.categories.map((category, index) => (
            <li key={category} className="bg-background p-7">
              <p className="font-display text-lg leading-tight tracking-tight">{category}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {c.tips[index] ?? c.lead}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
