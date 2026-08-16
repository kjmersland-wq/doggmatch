/**
 * Norwegian copy for the "Bli DoggMatch-partner"-siden.
 * Samme struktur og rekkefølge som content.en.ts.
 */
import type { PartnerCategory } from "./content.en";

export const partnerCategories: PartnerCategory[] = [
  { id: "equipment", label: "Utstyr til hund", blurb: "Seler, bånd, senger, leker og alt det hverdagslige som til slutt slites ut." },
  { id: "grooming", label: "Klipp og stell", blurb: "Salonger og mobile groomere som tar seg tid med nervøse hunder." },
  { id: "training", label: "Trening", blurb: "Valpekurs, en-til-en-hjelp og belønningsbasert atferdsarbeid." },
  { id: "vet", label: "Veterinær og helse", blurb: "Klinikker, fysioterapeuter, tannbehandling og alle som holder hunder friske." },
  { id: "insurance", label: "Forsikring", blurb: "Dekning som er tydelig på hva den faktisk dekker — og ikke." },
  { id: "boarding", label: "Hundepensjonat og dagpass", blurb: "Pensjonater, privatpassere, dagtilbud og folk du kan stole på." },
  { id: "food", label: "Mat og ernæring", blurb: "Mat, godbiter og tilskudd du selv ville gitt din egen hund." },
  { id: "travel", label: "Reise og aktiviteter", blurb: "Hundevennlige overnattinger, biltilbehør, turer, bading og dager ute." },
];

export const partnerBenefits = [
  {
    id: "exposure",
    title: "Nå eiere som faktisk leter",
    body: "Folk kommer til DoggMatch mens de velger hund, venner den til i nytt hjem, eller finner ut av mat, trening og reise. De bruker allerede penger — du får rett og slett være butikken de finner.",
  },
  {
    id: "listing",
    title: "Din egen plass i Medlemsfordeler",
    body: "En ordentlig omtale i medlemsområdet: hvem du er, hva du tilbyr, hvor det kan brukes, og en lenke rett til deg. Ikke bare en logo i en vegg av logoer.",
  },
  {
    id: "offer",
    title: "Et tilbud du selv former",
    body: "Prosentavslag, gratis første time, en oppgradering, en pakke — det som gir mening for din bedrift. Du bestemmer, og du kan endre eller sette det på pause når du vil.",
  },
  {
    id: "branding",
    title: "Partnermerking du kan bruke",
    body: "Et DoggMatch-partnermerke til vinduet, nettsiden og sosiale medier, slik at kundene kjenner deg igjen før de går inn døra.",
  },
  {
    id: "verification",
    title: "Verifisering som tar to sekunder",
    body: "Medlemmer har et DoggMatch+-kort med en QR-kode. Skann den, se om medlemskapet er aktivt, og betjen kunden. Ingen app, ingen innlogging, ingen papirarbeid.",
  },
  {
    id: "no-cost",
    title: "Ingen oppføringsavgift, ingen provisjon",
    body: "Vi tar ikke betalt for å liste deg, og vi tar ingen kutt av salget ditt. Tilbudet du gir medlemmene er hele avtalen.",
  },
] as const;

export const partnerSteps = [
  {
    no: "01",
    title: "Fortell oss om bedriften din",
    body: "Det korte skjemaet under holder til å komme i gang. Hvem du er, hvor du holder til, og omtrent hva du ønsker å tilby.",
  },
  {
    no: "02",
    title: "Vi tar en ordentlig prat",
    body: "En ekte person leser den og svarer. Vi stiller noen spørsmål og sørger for at det passer begge veier — for deg og for medlemmene våre.",
  },
  {
    no: "03",
    title: "Vi skriver omtalen din sammen",
    body: "Du godkjenner ordlyden, tilbudet og detaljene før noe publiseres. Ingenting går ut uten at du har sagt ja.",
  },
  {
    no: "04",
    title: "Medlemmene begynner å komme",
    body: "Tilbudet ditt dukker opp i Medlemsfordeler, du får partnermerket, og du skanner kort ved disken etter hvert som folk kommer innom.",
  },
] as const;

export const partnerFaq = [
  {
    q: "Hva koster det å bli partner?",
    a: "Ingenting. Det er ingen oppføringsavgift og ingen provisjon. Rabatten eller fordelen du gir medlemmene er ditt bidrag.",
  },
  {
    q: "Hvordan sjekker jeg at noen faktisk er medlem?",
    a: "Alle DoggMatch+-medlemmer har et kort med en QR-kode. Skanner du den, åpnes en side som bare viser om medlemskapet er aktivt og hvor lenge — ingen personopplysninger.",
  },
  {
    q: "Kan jeg endre eller stoppe tilbudet mitt senere?",
    a: "Ja, når du vil. Skriv til oss så oppdaterer eller pauser vi omtalen din. Vi ber bare om at du holder det du allerede har lovet.",
  },
  {
    q: "Vi holder ikke til i Norge — kan vi bli med likevel?",
    a: "Ja. DoggMatch brukes internasjonalt, og medlemsfordeler vises sammen med landet de gjelder for. Nettbutikker som sender vidt er også svært velkomne.",
  },
  {
    q: "Hvor mange medlemmer kommer til å se det?",
    a: "Vi gir deg ikke et tall vi ikke kan stå inne for. DoggMatch+ er ungt og voksende, og vi vil heller være ærlige om det enn å love for mye.",
  },
  {
    q: "Hva slags bedrifter sier dere nei til?",
    a: "Alt som bygger på aversive treningsmetoder, eller produkter vi ikke ville følt oss komfortable med å anbefale til en venn med hund. Vi vil heller ha en kort liste vi stoler på.",
  },
] as const;
