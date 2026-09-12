import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { BrandLock, BrandMark } from "@/components/dogmatch/brand-logo";
import { useCopy } from "@/i18n";
import coverPhoto from "@/assets/brochure-cover.jpg";

/**
 * The DoggMatch A5 flyer (148 × 210 mm, single page) made for counters in
 * pet shops, groomers, trainers and vet clinics. Print-first: large type,
 * generous margins, one accent colour, and nothing that needs a screen.
 */

const SITE = "https://www.doggmatch.com";

const copy = {
  en: {
    badge: "Find your dog",
    headline: "Find the dog that fits your life.",
    coverLead:
      "A calm, honest way to work out which kind of dog suits your home, your days and the people around you.",
    cta: "Try DoggMatch — free",
    url: "doggmatch.com",
    scan: "Scan to start",
    scanBack: "Scan with your phone camera",
    howEyebrow: "How it works",
    howTitle: "You answer. We show our work.",
    howLead:
      "You tell us about your everyday life — activity level, experience, family and children, time for training, grooming, size, allergies in the household and a few other things that matter. Then you get breeds that tend to suit a life like yours, and the reasons behind each one.",
    points: [
      {
        title: "No AI decides anything",
        body: "The result comes from a fixed, transparent algorithm. Same answers, same result, every time.",
      },
      {
        title: "You can see why",
        body: "Every match is explained dimension by dimension, including where a breed is a poorer fit for you.",
      },
      {
        title: "Purebred and mixed breeds",
        body: "Known crosses combine the traits of both parents — shown as guidance, never a guarantee.",
      },
      {
        title: "Useful once you have a dog",
        body: "Training, health, food and travel tools that stay with you long after the choice is made.",
      },
    ],
    toolsEyebrow: "What's inside",
    toolsTitle: "Everything in one calm place.",
    tools: [
      { title: "Find your dog", body: "The compatibility questions, answered in a few minutes." },
      { title: "Compare breeds", body: "Side by side, on the things that actually change daily life." },
      { title: "Mixed breeds", body: "Combine two parent breeds and see the likely middle ground." },
      { title: "Training", body: "Short, kind lessons that build in a sensible order." },
      { title: "Health & wellbeing", body: "Coat, teeth, paws, weight — checked without the panic." },
      { title: "Food & nutrition", body: "Portion guidance and a plain list of what dogs shouldn't eat." },
      { title: "Travel", body: "Country-to-country rules, car safety and days outdoors." },
      { title: "My Dog", body: "Your dog's own record: weight, vet visits, contacts, the week ahead." },
    ],
    plusTitle: "DoggMatch+",
    plusBody:
      "An optional membership for people who want more: extra tools, printable pages for the fridge or the vet, a personal member card, and benefits with partners as they arrive.",
    backTitle: "Take five minutes. It's a decision for the next fifteen years.",
    backBody:
      "Free to try, nothing to install. Answer the questions on your phone and see what suits your life — with the reasoning shown, in English or Norwegian.",
    backNote:
      "DoggMatch is guidance, not veterinary or medical advice. Always speak with a vet about health, and get professional advice about allergies.",
    madeBy: "Made in Kristiansand, Norway by KM TECH LABS",
    printTitle: "A5 brochure",
    printLead:
      "One A5 page (148 × 210 mm), print-ready. Print to PDF with margins set to none and background graphics on. Ask the printer for 3 mm bleed.",
    printBtn: "Print / save as PDF",
    qrAlt: "QR code to doggmatch.com",
  },
  no: {
    badge: "Finn din hund",
    headline: "Finn hunden som passer ditt liv.",
    coverLead:
      "En rolig og ærlig måte å finne ut hvilken type hund som passer hjemmet ditt, dagene dine og menneskene rundt deg.",
    cta: "Prøv DoggMatch gratis",
    url: "doggmatch.com",
    scan: "Skann for å starte",
    scanBack: "Skann med kameraet på mobilen",
    howEyebrow: "Slik fungerer det",
    howTitle: "Du svarer. Vi viser regnestykket.",
    howLead:
      "Du forteller om hverdagen din — aktivitetsnivå, erfaring, familie og barn, tid til trening, pelsstell, størrelse, allergihensyn i husstanden og noen andre ting som betyr noe. Så får du raser som ofte passer et liv som ditt, og begrunnelsen bak hver enkelt.",
    points: [
      {
        title: "Ingen AI bestemmer noe",
        body: "Resultatet kommer fra en fast, transparent algoritme. Samme svar gir samme resultat, hver gang.",
      },
      {
        title: "Du ser hvorfor",
        body: "Hver match forklares punkt for punkt — også der en rase passer dårligere for deg.",
      },
      {
        title: "Renrasede og blandingshunder",
        body: "Kjente krysninger kombinerer egenskapene til begge foreldrene — som veiledning, aldri en garanti.",
      },
      {
        title: "Nyttig når du allerede har hund",
        body: "Verktøy for trening, helse, mat og reise som blir med deg lenge etter at valget er tatt.",
      },
    ],
    toolsEyebrow: "Dette får du",
    toolsTitle: "Alt samlet ett rolig sted.",
    tools: [
      { title: "Finn din hund", body: "Spørsmålene om hverdagen din, besvart på noen minutter." },
      { title: "Sammenlign raser", body: "Side om side, på det som faktisk endrer hverdagen." },
      { title: "Blandingshund", body: "Kombiner to raser og se den sannsynlige mellomtingen." },
      { title: "Trening", body: "Korte, vennlige leksjoner i en fornuftig rekkefølge." },
      { title: "Helse og velvære", body: "Pels, tenner, poter og vekt — sjekket uten panikk." },
      { title: "Mat og ernæring", body: "Veiledende porsjoner og en tydelig liste over det hunder ikke tåler." },
      { title: "Reise med hund", body: "Regler fra land til land, sikkerhet i bil og dager ute." },
      { title: "Min hund", body: "Hundens egen journal: vekt, veterinærbesøk, kontakter og uken som kommer." },
    ],
    plusTitle: "DoggMatch+",
    plusBody:
      "Et valgfritt medlemskap for deg som vil ha mer: ekstra verktøy, utskrifter til kjøleskapet eller veterinæren, personlig medlemskort, og medlemsfordeler etter hvert som de kommer.",
    backTitle: "Bruk fem minutter. Det er et valg for de neste femten årene.",
    backBody:
      "Gratis å prøve, ingenting å installere. Svar på spørsmålene på mobilen og se hva som passer livet ditt — med begrunnelsen synlig, på norsk eller engelsk.",
    backNote:
      "DoggMatch er veiledning, ikke veterinærfaglige eller medisinske råd. Snakk alltid med veterinær om helse, og søk profesjonell hjelp ved allergi.",
    madeBy: "Laget i Kristiansand, Norge av KM TECH LABS",
    printTitle: "A5-brosjyre",
    printLead:
      "Én A5-side (148 × 210 mm), klar for trykk. Skriv ut til PDF med marger satt til ingen og bakgrunnsgrafikk på. Be trykkeriet om 3 mm utfall.",
    printBtn: "Skriv ut / lagre som PDF",
    qrAlt: "QR-kode til doggmatch.com",
  },
  pl: {
    badge: "Znajdź swojego psa",
    headline: "Znajdź psa, który pasuje do twojego życia.",
    coverLead:
      "Spokojny i szczery sposób, by odkryć, jaki rodzaj psa pasuje do twojego domu, twoich dni i ludzi wokół ciebie.",
    cta: "Wypróbuj DoggMatch — za darmo",
    url: "doggmatch.com",
    scan: "Zeskanuj, by zacząć",
    scanBack: "Zeskanuj aparatem telefonu",
    howEyebrow: "Jak to działa",
    howTitle: "Ty odpowiadasz. My pokazujemy nasze wyliczenia.",
    howLead:
      "Opowiadasz o swojej codzienności — poziomie aktywności, doświadczeniu, rodzinie i dzieciach, czasie na trening, pielęgnacji, rozmiarze, alergiach w domu i kilku innych ważnych sprawach. Potem otrzymujesz rasy, które zwykle pasują do życia takiego jak twoje, wraz z uzasadnieniem dla każdej z nich.",
    points: [
      {
        title: "Żadna sztuczna inteligencja o niczym nie decyduje",
        body: "Wynik pochodzi ze stałego, przejrzystego algorytmu. Te same odpowiedzi dają ten sam wynik, za każdym razem.",
      },
      {
        title: "Widzisz, dlaczego",
        body: "Każde dopasowanie jest wyjaśnione punkt po punkcie — również tam, gdzie dana rasa pasuje do ciebie gorzej.",
      },
      {
        title: "Rasy czyste i mieszańce",
        body: "Znane krzyżówki łączą cechy obojga rodziców — pokazywane jako wskazówka, nigdy jako gwarancja.",
      },
      {
        title: "Przydatne, gdy pies już z tobą mieszka",
        body: "Narzędzia do treningu, zdrowia, jedzenia i podróży, które zostają z tobą długo po dokonaniu wyboru.",
      },
    ],
    toolsEyebrow: "Co znajdziesz w środku",
    toolsTitle: "Wszystko w jednym spokojnym miejscu.",
    tools: [
      { title: "Znajdź swojego psa", body: "Pytania o twoją codzienność, na które odpowiesz w kilka minut." },
      { title: "Porównaj rasy", body: "Obok siebie, w kwestiach, które naprawdę zmieniają codzienność." },
      { title: "Mieszańce", body: "Połącz dwie rasy rodziców i zobacz prawdopodobny środek." },
      { title: "Trening", body: "Krótkie, łagodne lekcje budowane w sensownej kolejności." },
      { title: "Zdrowie i dobrostan", body: "Sierść, zęby, łapy, waga — sprawdzone bez paniki." },
      { title: "Jedzenie i żywienie", body: "Wskazówki dotyczące porcji i jasna lista tego, czego psy nie powinny jeść." },
      { title: "Podróże", body: "Przepisy kraj po kraju, bezpieczeństwo w samochodzie i dni na dworze." },
      { title: "Mój pies", body: "Własna kartoteka twojego psa: waga, wizyty u weterynarza, kontakty, nadchodzący tydzień." },
    ],
    plusTitle: "DoggMatch+",
    plusBody:
      "Opcjonalne członkostwo dla tych, którzy chcą więcej: dodatkowe narzędzia, strony do wydruku na lodówkę lub do weterynarza, osobista karta członkowska oraz korzyści od partnerów w miarę ich pojawiania się.",
    backTitle: "Poświęć pięć minut. To decyzja na najbliższe piętnaście lat.",
    backBody:
      "Bezpłatny do wypróbowania, nic do instalowania. Odpowiedz na pytania na telefonie i zobacz, co pasuje do twojego życia — z widocznym uzasadnieniem, po polsku lub angielsku.",
    backNote:
      "DoggMatch to wskazówki, a nie porada weterynaryjna ani medyczna. W sprawach zdrowia zawsze rozmawiaj z weterynarzem, a w kwestii alergii skorzystaj z porady specjalisty.",
    madeBy: "Stworzone w Kristiansand w Norwegii przez KM TECH LABS",
    printTitle: "Broszura A5",
    printLead:
      "Jedna strona A5 (148 × 210 mm), gotowa do druku. Wydrukuj do PDF z marginesami ustawionymi na brak i włączoną grafiką tła. Poproś drukarnię o 3 mm spadu.",
    printBtn: "Drukuj / zapisz jako PDF",
    qrAlt: "Kod QR do doggmatch.com",
  },
  dk: {
    badge: "Find din hund",
    headline: "Find hunden, der passer til dit liv.",
    coverLead:
      "En rolig og ærlig måde at finde ud af, hvilken slags hund der passer til dit hjem, dine dage og menneskene omkring dig.",
    cta: "Prøv DoggMatch — gratis",
    url: "doggmatch.com",
    scan: "Scan for at starte",
    scanBack: "Scan med kameraet på din telefon",
    howEyebrow: "Sådan virker det",
    howTitle: "Du svarer. Vi viser vores arbejde.",
    howLead:
      "Du fortæller os om din hverdag — aktivitetsniveau, erfaring, familie og børn, tid til træning, pelspleje, størrelse, allergier i husstanden og et par andre ting, der betyder noget. Så får du racer, der plejer at passe til et liv som dit, og begrundelsen bag hver enkelt.",
    points: [
      {
        title: "Ingen AI bestemmer noget",
        body: "Resultatet kommer fra en fast, gennemsigtig algoritme. Samme svar, samme resultat, hver gang.",
      },
      {
        title: "Du kan se hvorfor",
        body: "Hvert match forklares dimension for dimension, også der hvor en race passer dårligere til dig.",
      },
      {
        title: "Racerene og blandingshunde",
        body: "Kendte krydsninger kombinerer begge forældres egenskaber — vist som vejledning, aldrig en garanti.",
      },
      {
        title: "Nyttigt, når du har fået hund",
        body: "Værktøjer til træning, sundhed, mad og rejser, som bliver hos dig længe efter valget er truffet.",
      },
    ],
    toolsEyebrow: "Det får du",
    toolsTitle: "Alt samlet ét roligt sted.",
    tools: [
      { title: "Find din hund", body: "Kompatibilitetsspørgsmålene, besvaret på få minutter." },
      { title: "Sammenlign racer", body: "Side om side, på det der faktisk ændrer hverdagen." },
      { title: "Blandingshunde", body: "Kombinér to forældreracer og se den sandsynlige mellemting." },
      { title: "Træning", body: "Korte, venlige lektioner bygget op i en fornuftig rækkefølge." },
      { title: "Sundhed og trivsel", body: "Pels, tænder, poter, vægt — tjekket uden panik." },
      { title: "Mad og ernæring", body: "Vejledning om portioner og en klar liste over, hvad hunde ikke bør spise." },
      { title: "Rejser", body: "Regler fra land til land, sikkerhed i bilen og dage udendørs." },
      { title: "Min hund", body: "Din hunds egen journal: vægt, dyrlægebesøg, kontakter, ugen der kommer." },
    ],
    plusTitle: "DoggMatch+",
    plusBody:
      "Et valgfrit medlemskab til dig, der vil have mere: ekstra værktøjer, udskriftsvenlige sider til køleskabet eller dyrlægen, et personligt medlemskort og fordele hos partnere, efterhånden som de kommer til.",
    backTitle: "Brug fem minutter. Det er en beslutning for de næste femten år.",
    backBody:
      "Gratis at prøve, intet at installere. Svar på spørgsmålene på din telefon, og se hvad der passer til dit liv — med begrundelsen synlig, på engelsk eller norsk.",
    backNote:
      "DoggMatch er vejledning, ikke dyrlæge- eller lægefaglig rådgivning. Tal altid med en dyrlæge om sundhed, og søg professionel rådgivning om allergi.",
    madeBy: "Lavet i Kristiansand, Norge af KM TECH LABS",
    printTitle: "A5-brochure",
    printLead:
      "Én A5-side (148 × 210 mm), klar til print. Udskriv til PDF med margener sat til ingen, og baggrundsgrafik slået til. Bed trykkeriet om 3 mm beskæring.",
    printBtn: "Udskriv / gem som PDF",
    qrAlt: "QR-kode til doggmatch.com",
  },
  se: {
    badge: "Hitta din hund",
    headline: "Hitta hunden som passar ditt liv.",
    coverLead:
      "Ett lugnt och ärligt sätt att ta reda på vilken typ av hund som passar ditt hem, dina dagar och människorna omkring dig.",
    cta: "Prova DoggMatch — gratis",
    url: "doggmatch.com",
    scan: "Skanna för att starta",
    scanBack: "Skanna med kameran i din telefon",
    howEyebrow: "Så fungerar det",
    howTitle: "Du svarar. Vi visar våra uträkningar.",
    howLead:
      "Du berättar om din vardag — aktivitetsnivå, erfarenhet, familj och barn, tid för träning, pälsvård, storlek, allergier i hushållet och några andra saker som spelar roll. Sedan får du raser som brukar passa ett liv som ditt, och anledningarna bakom varje förslag.",
    points: [
      {
        title: "Ingen AI bestämmer något",
        body: "Resultatet kommer från en fast, transparent algoritm. Samma svar ger samma resultat, varje gång.",
      },
      {
        title: "Du ser varför",
        body: "Varje matchning förklaras dimension för dimension, även där en ras passar dig sämre.",
      },
      {
        title: "Rasrena hundar och blandraser",
        body: "Kända korsningar kombinerar båda föräldrarnas egenskaper — visas som vägledning, aldrig som garanti.",
      },
      {
        title: "Användbart när hunden väl finns hos dig",
        body: "Verktyg för träning, hälsa, mat och resor som stannar kvar långt efter att valet är gjort.",
      },
    ],
    toolsEyebrow: "Det här ingår",
    toolsTitle: "Allt samlat på ett lugnt ställe.",
    tools: [
      { title: "Hitta din hund", body: "Kompatibilitetsfrågorna, besvarade på några minuter." },
      { title: "Jämför raser", body: "Sida vid sida, i det som faktiskt förändrar vardagen." },
      { title: "Blandraser", body: "Kombinera två föräldraraser och se den sannolika mellannivån." },
      { title: "Träning", body: "Korta, snälla lektioner byggda i en klok ordning." },
      { title: "Hälsa och välmående", body: "Päls, tänder, tassar, vikt — kontrollerat utan panik." },
      { title: "Mat och näring", body: "Vägledning om portioner och en tydlig lista över vad hundar inte bör äta." },
      { title: "Resor", body: "Regler land för land, säkerhet i bilen och dagar utomhus." },
      { title: "Min hund", body: "Din hunds egen journal: vikt, veterinärbesök, kontakter, veckan som kommer." },
    ],
    plusTitle: "DoggMatch+",
    plusBody:
      "Ett valfritt medlemskap för dig som vill ha mer: extra verktyg, utskriftsvänliga sidor för kylskåpet eller veterinären, ett personligt medlemskort och förmåner hos partners allteftersom de tillkommer.",
    backTitle: "Ta fem minuter. Det är ett beslut för de kommande femton åren.",
    backBody:
      "Gratis att prova, inget att installera. Svara på frågorna i telefonen och se vad som passar ditt liv — med resonemanget synligt, på engelska eller norska.",
    backNote:
      "DoggMatch är vägledning, inte veterinärmedicinsk eller medicinsk rådgivning. Prata alltid med en veterinär om hälsofrågor, och sök professionell rådgivning vid allergi.",
    madeBy: "Gjord i Kristiansand, Norge av KM TECH LABS",
    printTitle: "A5-broschyr",
    printLead:
      "En A5-sida (148 × 210 mm), klar för tryck. Skriv ut till PDF med marginaler satta till inga och bakgrundsgrafik påslagen. Be tryckeriet om 3 mm utfall.",
    printBtn: "Skriv ut / spara som PDF",
    qrAlt: "QR-kod till doggmatch.com",
  },
  fi: {
    badge: "Löydä koirasi",
    headline: "Löydä koira, joka sopii elämääsi.",
    coverLead:
      "Rauhallinen ja rehellinen tapa selvittää, minkälainen koira sopisi kotiisi, arkeesi ja ihmisiin ympärilläsi.",
    cta: "Kokeile DoggMatchia — ilmaiseksi",
    url: "doggmatch.com",
    scan: "Skannaa aloittaaksesi",
    scanBack: "Skannaa puhelimen kameralla",
    howEyebrow: "Näin se toimii",
    howTitle: "Sinä vastaat. Me näytämme laskelmamme.",
    howLead:
      "Kerrot meille arjestasi — aktiivisuustasosi, kokemuksesi, perheesi ja lapsesi, ajan jonka voit käyttää koulutukseen, turkinhoidon, koon, kotitalouden allergiat ja muutaman muun tärkeän asian. Sen jälkeen saat rodut, jotka yleensä sopivat kaltaisellesi elämälle, sekä perustelut kunkin taustalla.",
    points: [
      {
        title: "Mikään tekoäly ei päätä mitään",
        body: "Tulos syntyy kiinteästä, läpinäkyvästä algoritmista. Samat vastaukset antavat aina saman tuloksen.",
      },
      {
        title: "Näet, miksi",
        body: "Jokainen osuma selitetään ulottuvuus kerrallaan, myös silloin kun rotu sopii sinulle huonommin.",
      },
      {
        title: "Rotukoirat ja sekarotuiset",
        body: "Tunnetut risteytykset yhdistävät molempien vanhempien ominaisuudet — näytetään suuntaa antavana, ei koskaan takeena.",
      },
      {
        title: "Hyödyllinen vielä koiran saavuttua",
        body: "Työkalut koulutukseen, terveyteen, ruokintaan ja matkustamiseen, jotka pysyvät mukana kauan valinnan jälkeen.",
      },
    ],
    toolsEyebrow: "Tämä sisältyy",
    toolsTitle: "Kaikki yhdessä rauhallisessa paikassa.",
    tools: [
      { title: "Löydä koirasi", body: "Yhteensopivuuskysymykset, joihin vastaat muutamassa minuutissa." },
      { title: "Vertaile rotuja", body: "Rinnakkain, niissä asioissa, jotka oikeasti vaikuttavat arkeen." },
      { title: "Sekarotuiset", body: "Yhdistä kaksi vanhempien rotua ja katso todennäköinen välimuoto." },
      { title: "Koulutus", body: "Lyhyitä, ystävällisiä oppitunteja, jotka etenevät järkevässä järjestyksessä." },
      { title: "Terveys ja hyvinvointi", body: "Turkki, hampaat, tassut, paino — tarkistettuna ilman paniikkia." },
      { title: "Ruoka ja ravitsemus", body: "Annosohjeet ja selkeä lista siitä, mitä koirien ei pitäisi syödä." },
      { title: "Matkustaminen", body: "Maasta toiseen vaihtuvat säännöt, turvallisuus autossa ja päivät ulkona." },
      { title: "Oma koirani", body: "Koirasi oma seurantatieto: paino, eläinlääkärikäynnit, yhteystiedot, tuleva viikko." },
    ],
    plusTitle: "DoggMatch+",
    plusBody:
      "Valinnainen jäsenyys niille, jotka haluavat enemmän: lisätyökaluja, tulostettavia sivuja jääkaappiin tai eläinlääkärille, henkilökohtainen jäsenkortti ja kumppanietuja sitä mukaa kun niitä tulee.",
    backTitle: "Käytä viisi minuuttia. Tämä on päätös seuraaviksi viideksitoista vuodeksi.",
    backBody:
      "Ilmainen kokeilla, ei mitään asennettavaa. Vastaa kysymyksiin puhelimella ja katso, mikä sopii elämääsi — perustelut näkyvissä, englanniksi tai norjaksi.",
    backNote:
      "DoggMatch tarjoaa opastusta, ei eläinlääkärin tai lääketieteellistä neuvontaa. Terveysasioissa keskustele aina eläinlääkärin kanssa, ja allergioissa hae ammattilaisen apua.",
    madeBy: "Tehty Kristiansandissa, Norjassa, KM TECH LABSin toimesta",
    printTitle: "A5-esite",
    printLead:
      "Yksi A5-sivu (148 × 210 mm), painovalmis. Tulosta PDF-tiedostoksi marginaalit nollaan asetettuna ja taustagrafiikat päällä. Pyydä painotalolta 3 mm leikkuuvara.",
    printBtn: "Tulosta / tallenna PDF:nä",
    qrAlt: "QR-koodi osoitteeseen doggmatch.com",
  },
} as const;

function useQr(text: string, size = 640) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    let alive = true;
    void QRCode.toDataURL(text, {
      margin: 0,
      width: size,
      errorCorrectionLevel: "M",
      color: { dark: "#071A2FFF", light: "#FFFFFFFF" },
    }).then((url) => alive && setSrc(url));
    return () => {
      alive = false;
    };
  }, [text, size]);
  return src;
}

export function BrochureSheet() {
  const c = useCopy(copy);
  const qr = useQr(SITE);

  return (
    <div className="br-sheet">
      <article className="br-page br-one">
        <div className="br-cover-photo">
          <img src={coverPhoto} alt="" width={1024} height={1408} />
          <div className="br-cover-badge">
            <BrandLock markClassName="h-6 w-6" wordmarkClassName="text-base" />
          </div>
        </div>

        <div className="br-one-body">
          <p className="br-eyebrow">{c.badge}</p>
          <h1 className="br-display">{c.headline}</h1>
          <p className="br-lead br-muted">{c.coverLead}</p>

          <div className="br-points">
            {c.points.slice(0, 3).map((p, i) => (
              <div className="br-point" key={p.title}>
                <span className="br-point-no">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="br-tools">
            {c.tools.slice(0, 4).map((t) => (
              <div className="br-tool" key={t.title}>
                <h3>{t.title}</h3>
              </div>
            ))}
          </div>

          <div className="br-cta">
            <div className="br-cta-text">
              <span className="br-button">{c.cta}</span>
              <span style={{ display: "flex", alignItems: "center", gap: "2.5mm" }}>
                <BrandMark className="h-6 w-6" />
                <span className="br-url">{c.url}</span>
              </span>
              <span className="br-footnote br-muted">{c.madeBy}</span>
            </div>
            <figure className="br-qr br-qr-lg">
              {qr && <img src={qr} alt={c.qrAlt} width={34} height={34} />}
              <figcaption>{c.scan}</figcaption>
            </figure>
          </div>

          <p className="br-footnote br-muted br-one-note">{c.backNote}</p>
        </div>
      </article>
    </div>
  );
}

export function useBrochureCopy() {
  return useCopy(copy);
}
