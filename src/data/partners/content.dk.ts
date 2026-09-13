/**
 * Copy for the "Become a DoggMatch Partner" page.
 * English is the source language — a sibling file per locale keeps the same shape.
 * Voice: warm, honest, human. Never salesy.
 */
export type PartnerCategory = {
  id: string;
  label: string;
  blurb: string;
};

export const partnerCategories: PartnerCategory[] = [
  { id: "equipment", label: "Tilbehør og udstyr til hunde", blurb: "Hundeseler, snore, senge, legetøj og de daglige fornødenheder, der slides op." },
  { id: "grooming", label: "Pelspleje", blurb: "Saloner og mobile hundefrisører, der tager sig tid til nervøse hunde." },
  { id: "training", label: "Træning", blurb: "Hvalpehold, individuel hjælp og belønningsbaseret adfærdstræning." },
  { id: "vet", label: "Dyrlæge & sundhed", blurb: "Klinikker, fysioterapeuter, tandlæger og alle, der holder hunde sunde." },
  { id: "insurance", label: "Forsikring", blurb: "Dækning, der er klar omkring, hvad den dækker og ikke dækker." },
  { id: "boarding", label: "Pasning & dagspleje", blurb: "Kenneler, hjemmepasning, dagspleje og betroede hundepassere." },
  { id: "food", label: "Foder & ernæring", blurb: "Foder, godbidder og kosttilskud, som du selv ville give din egen hund." },
  { id: "travel", label: "Rejser & aktiviteter", blurb: "Hundevenlige overnatningssteder, biltilbehør, vandreture, svømning og udflugter." },
];

export const partnerBenefits = [
  {
    id: "exposure",
    title: "Nå ejere, der aktivt leder",
    body: "Folk kommer til DoggMatch, mens de vælger hund, falder til med en ny hund, eller søger hjælp til foder, træning og rejser. Du får en betænksom introduktion i det øjeblik, de virkelig har brug for dig.",
  },
  {
    id: "listing",
    title: "Din egen plads i Medlemsfordele",
    body: "En ordentlig profil inde i medlemsområdet: hvem du er, hvad du tilbyder, hvor det kan bruges, og et direkte link til dig. Mere brugbart end et logo i en mur af logoer.",
  },
  {
    id: "offer",
    title: "Et tilbud, du selv former",
    body: "En procentdel i rabat, en gratis første session, en opgradering eller en pakke – hvad end der føles rigtigt for din virksomhed. Du bestemmer alle detaljer, og du kan ændre eller sætte det på pause, når du vil.",
  },
  {
    id: "branding",
    title: "Partnerbranding, du kan bruge",
    body: "Et DoggMatch Partner-mærke til dit vindue, din hjemmeside og dine sociale kanaler, så kunderne kan genkende en virksomhed, vi er glade for at stå bag.",
  },
  {
    id: "verification",
    title: "Verifikation, der tager to sekunder",
    body: "Medlemmer bærer et DoggMatch+ kort med en QR-kode. Scan den, se om medlemskabet er aktivt, og byd dem velkommen ind. Ingen app, ingen login, intet papirarbejde.",
  },
  {
    id: "no-cost",
    title: "En fordel for dine kunder også",
    body: "Vi giver dine kunder 25% rabat på DoggMatch+ det første år. Det koster dig intet, og du bestemmer stadig fuldstændigt, hvilken fordel du vil tilbyde vores medlemmer. Der er ingen listningsgebyr eller provision.",
  },
] as const;

export const partnerSteps = [
  {
    no: "01",
    title: "Fortæl os om din virksomhed",
    body: "Den korte formular nedenfor er rigeligt til at starte. Fortæl os, hvem du er, hvor du holder til, og eventuelle tidlige tanker, du har om et tilbud – det behøver ikke være endeligt.",
  },
  {
    no: "02",
    title: "Vi tager en ordentlig snak",
    body: "En rigtig person læser din besked og svarer. Vi taler detaljerne igennem og sikrer os, at det føles som et godt match begge veje – for dig og for vores medlemmer.",
  },
  {
    no: "03",
    title: "Vi skriver din profil sammen",
    body: "Vi sammensætter ordene, tilbuddet og de praktiske detaljer sammen med dig. Du godkender alt, før det går live, og intet bliver offentliggjort uden din accept.",
  },
  {
    no: "04",
    title: "Vi introducerer dig til medlemmer",
    body: "Dit tilbud vises i Medlemsfordele, du modtager partner-mærket og din kundekode, og medlemmer kan vise deres QR-kort, når de besøger dig.",
  },
] as const;

export const partnerFaq = [
  {
    q: "Hvad koster det at blive partner?",
    a: "Intet. Der er intet listningsgebyr og ingen provision. Den rabat eller fordel, du giver medlemmerne, er det, du bidrager med.",
  },
  {
    q: "Hvad koster 25% rabat til mine kunder mig?",
    a: "Intet. Vi giver dine kunder rabat på DoggMatch+ det første år. Du bestemmer stadig fuldstændigt, hvilken fordel du ønsker at tilbyde vores medlemmer.",
  },
  {
    q: "Hvordan tjekker jeg, om nogen virkelig er medlem?",
    a: "Hvert DoggMatch+ medlem har et kort med en QR-kode. Når du scanner den, åbnes en side, der kun viser, om medlemskabet er aktivt og indtil hvornår – ingen personlige detaljer.",
  },
  {
    q: "Kan jeg ændre eller stoppe mit tilbud senere?",
    a: "Ja, når som helst du vil. Skriv til os, så opdaterer eller pauser vi din profil. Vi beder dig blot om at ære alt, hvad der allerede er lovet.",
  },
  {
    q: "Vi er ikke i Norge – kan vi stadig være med?",
    a: "Ja. DoggMatch bruges internationalt, og Medlemsfordele vises med det land, de gælder for. Onlinebutikker, der sender bredt, er også meget velkomne.",
  },
  {
    q: "Hvor mange medlemmer vil se det?",
    a: "Vi vil ikke opgive et tal, vi ikke kan stå inde for. DoggMatch+ er ungt og voksende, og vi vil hellere være ærlige omkring det end at sælge det for meget.",
  },
  {
    q: "Hvilken slags virksomheder siger I nej til?",
    a: "Alt, der bygger på aversive træningsmetoder, eller produkter, vi ikke ville være trygge ved at anbefale til en ven med en hund. Vi foretrækker en kort liste, vi stoler på.",
  },
] as const;
