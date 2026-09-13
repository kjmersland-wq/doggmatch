/**
 * Copy för sidan "Bli en DoggMatch-partner".
 * Engelska är källspråket — en systerfil per lokalitet behåller samma struktur.
 * Ton: varm, ärlig, mänsklig. Aldrig säljande.
 */
export type PartnerCategory = {
  id: string;
  label: string;
  blurb: string;
};

export const partnerCategories: PartnerCategory[] = [
  { id: "equipment", label: "Djurtillbehör & hundutrustning", blurb: "Hundselar, koppel, bäddar, leksaker och vardagliga saker som slits ut." },
  { id: "grooming", label: "Pälsvård", blurb: "Salonger och mobila hundfrisörer som tar sig tid med nervösa hundar." },
  { id: "training", label: "Träning", blurb: "Valpkurser, individuell hjälp och belöningsbaserad beteendeförändring." },
  { id: "vet", label: "Veterinär & hälsa", blurb: "Kliniker, fysioterapeuter, tandläkare och alla som håller hundar friska." },
  { id: "insurance", label: "Försäkring", blurb: "Skydd som är tydligt med vad det täcker och inte täcker." },
  { id: "boarding", label: "Pensionat & dagis", blurb: "Hundpensionat, hemmaboende hundvakter, dagis och pålitliga hundvakter." },
  { id: "food", label: "Foder & nutrition", blurb: "Foder, godis och kosttillskott som du skulle ge din egen hund." },
  { id: "travel", label: "Resor & aktiviteter", blurb: "Hundvänliga boenden, bilutrustning, vandringar, simning och dagsutflykter." },
];

export const partnerBenefits = [
  {
    id: "exposure",
    title: "Nå ägare som faktiskt letar",
    body: "Folk kommer till DoggMatch när de väljer hund, installerar en ny hund, eller söker hjälp med foder, träning och resor. Du får en genomtänkt introduktion i det ögonblick de verkligen behöver dig.",
  },
  {
    id: "listing",
    title: "Din egen plats i Medlemsförmåner",
    body: "En ordentlig presentation i medlemsområdet: vem du är, vad du erbjuder, var det kan användas, och en direktlänk till dig. Mer användbart än en logotyp i en vägg av logotyper.",
  },
  {
    id: "offer",
    title: "Erbjudande som du själv formar",
    body: "En procentuell rabatt, en gratis första session, en uppgradering eller ett paket – vad som än känns rätt för din verksamhet. Du bestämmer varje detalj, och du kan ändra eller pausa det när du vill.",
  },
  {
    id: "branding",
    title: "Partner-branding du kan använda",
    body: "En DoggMatch Partner-dekal för ditt fönster, din webbplats och dina sociala kanaler, så att kunderna kan känna igen en verksamhet vi är glada att stå bakom.",
  },
  {
    id: "verification",
    title: "Verifiering som tar två sekunder",
    body: "Medlemmar har ett DoggMatch+ kort med en QR-kod. Skanna den, se om medlemskapet är aktivt, och välkomna dem. Ingen app, ingen inloggning, inget pappersarbete.",
  },
  {
    id: "no-cost",
    title: "En förmån för dina kunder också",
    body: "Vi ger dina kunder 25% rabatt på DoggMatch+ under deras första år. Det kostar dig ingenting, och du bestämmer fortfarande helt vad du vill erbjuda våra medlemmar. Det finns ingen listningsavgift eller provision.",
  },
] as const;

export const partnerSteps = [
  {
    no: "01",
    title: "Berätta om din verksamhet",
    body: "Det korta formuläret nedan räcker gott för att börja. Berätta vem du är, var du finns, och eventuella tidiga tankar du har om ett erbjudande – det behöver inte vara slutgiltigt.",
  },
  {
    no: "02",
    title: "Vi har ett ordentligt samtal",
    body: "En riktig person läser ditt meddelande och svarar. Vi pratar igenom detaljerna och ser till att det känns som en bra matchning åt båda håll – för dig och för våra medlemmar.",
  },
  {
    no: "03",
    title: "Vi skriver din presentation tillsammans",
    body: "Vi sätter ihop orden, erbjudandet och de praktiska detaljerna tillsammans med dig. Du godkänner allt innan det publiceras, och inget publiceras utan ditt medgivande.",
  },
  {
    no: "04",
    title: "Vi presenterar dig för medlemmarna",
    body: "Ditt erbjudande visas i Medlemsförmåner, du får partner-dekalen och din kundkod, och medlemmarna kan visa sitt QR-kort när de besöker dig.",
  },
] as const;

export const partnerFaq = [
  {
    q: "Vad kostar det att bli partner?",
    a: "Ingenting. Det finns ingen listningsavgift och ingen provision. Den rabatt eller förmån du ger medlemmarna är det du bidrar med.",
  },
  {
    q: "Vad kostar 25% rabatt för mina kunder mig?",
    a: "Ingenting. Vi ger dina kunder en rabatt under första året på DoggMatch+. Du bestämmer fortfarande helt vilken förmån du vill erbjuda våra medlemmar.",
  },
  {
    q: "Hur kontrollerar jag att någon verkligen är medlem?",
    a: "Varje DoggMatch+ medlem har ett kort med en QR-kod. Att skanna den öppnar en sida som bara visar om medlemskapet är aktivt och till när – inga personliga detaljer.",
  },
  {
    q: "Kan jag ändra eller pausa mitt erbjudande senare?",
    a: "Ja, när du vill. Skriv till oss så uppdaterar eller pausar vi din presentation. Vi ber dig bara att hedra allt som redan har lovats.",
  },
  {
    q: "Vi finns inte i Sverige – kan vi ändå vara med?",
    a: "Ja. DoggMatch används internationellt och Medlemsförmåner visas med det land de gäller för. Onlinebutiker som skickar brett är också mycket välkomna.",
  },
  {
    q: "Hur många medlemmar kommer att se det?",
    a: "Vi kommer inte att ange en siffra som vi inte kan stå för. DoggMatch+ är ungt och växer, och vi vill hellre vara ärliga om det än att överdriva.",
  },
  {
    q: "Vilken typ av verksamheter säger ni nej till?",
    a: "Allt som bygger på aversiva träningsmetoder, eller produkter vi inte skulle känna oss bekväma med att rekommendera till en vän med hund. Vi föredrar en kort lista vi litar på.",
  },
] as const;
