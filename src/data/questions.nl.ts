import type { QuizQuestion } from "@/lib/matching/types";

/** De vragen in het Nederlands. Id's en waarden blijven ongewijzigd. */
export const questionsNl: QuizQuestion[] = [
  {
    id: "activity",
    eyebrow: "Uw dagen",
    title: "Hoe actief bent u op een gewone dag?",
    help: "Denk aan een doorsnee week, niet aan uw beste week.",
    options: [
      { value: "1", label: "Vrij rustig", hint: "Een rustig rondje om het blok, de meeste dagen" },
      { value: "2", label: "Redelijk actief", hint: "Een wandeling van 45 minuten door het park, ook op een natte dinsdag" },
      { value: "3", label: "Behoorlijk actief", hint: "Een uur of meer op de meeste dagen, en flink wat in het weekend" },
      { value: "4", label: "Altijd in beweging", hint: "Een stevige wandeling van twee uur, weer of geen weer" },
    ],
  },
  {
    id: "home",
    eyebrow: "Thuis",
    title: "Waar gaat uw hond wonen?",
    options: [
      { value: "apartment", label: "In een flat of appartement", hint: "Gedeelde trap of lift" },
      { value: "house", label: "Een huis, zonder tuin" },
      { value: "house-garden", label: "Een huis met tuin" },
      { value: "rural", label: "Op het platteland" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Uw dag",
    title: "Hoe lang zou uw hond meestal alleen zijn?",
    help: "Reken de hele dag realistisch mee — woon-werkverkeer en kantoordagen inbegrepen, niet alleen de uren achter uw bureau.",
    options: [
      { value: "0", label: "Bijna nooit alleen", hint: "Er is bijna altijd iemand thuis" },
      { value: "2", label: "Tot drie uur", hint: "Een korte reistijd rond thuiswerken, of een ochtend weg" },
      { value: "4", label: "Drie tot vijf uur", hint: "Een gewone kantoordag met een lunchpauze thuis" },
      { value: "6", label: "Zes uur of meer", hint: "Volledig woon-werkverkeer en een hele kantoordag, deur tot deur" },
    ],
  },
  {
    id: "experience",
    eyebrow: "Ervaring",
    title: "Heeft u eerder een hond gehad?",
    help: "Nog nooit een hond gehad? Geen zorgen. We wegen zaken als speelruimte in de opvoeding, geduld en tolerantie voor alleen zijn, zodat u niet voor verrassingen komt te staan.",
    options: [
      { value: "first", label: "Dit zou mijn eerste zijn" },
      { value: "some", label: "Een beetje", hint: "Opgegroeid met honden, of hielp er een verzorgen" },
      { value: "experienced", label: "Behoorlijk wat", hint: "Ik heb zelf honden opgevoed en getraind" },
    ],
  },
  {
    id: "size",
    eyebrow: "Wat u voor ogen heeft",
    title: "Heeft u een grootte in gedachten?",
    optional: true,
    options: [
      { value: "small", label: "Iets kleins" },
      { value: "medium", label: "Ergens tussenin" },
      { value: "large", label: "Een grote hond" },
      { value: "any", label: "Ik sta open voor alles" },
    ],
  },
  {
    id: "temperament",
    eyebrow: "Wat u voor ogen heeft",
    title: "Welk soort karakter zou u het meest waarderen?",
    options: [
      { value: "calm", label: "Rustig en makkelijk in de omgang" },
      { value: "affectionate", label: "Liefdevol en dicht bij u" },
      { value: "playful", label: "Speels en levendig" },
      { value: "independent", label: "Blij in eigen gezelschap" },
    ],
  },
  {
    id: "children",
    eyebrow: "Thuis",
    title: "Wie woont er nog meer thuis?",
    options: [
      { value: "none", label: "Alleen volwassenen" },
      { value: "older", label: "Oudere kinderen" },
      { value: "young", label: "Jonge kinderen" },
      { value: "visitors", label: "Volwassenen, en veel bezoek" },
    ],
  },
  {
    id: "pets",
    eyebrow: "Thuis",
    title: "Zijn er andere dieren in huis?",
    optional: true,
    options: [
      { value: "none", label: "Geen andere huisdieren" },
      { value: "dog", label: "Nog een hond" },
      { value: "cat", label: "Een kat" },
      { value: "small", label: "Kleinere dieren", hint: "Konijnen, vogels, knaagdieren" },
    ],
  },
  {
    id: "shedding",
    eyebrow: "Vacht en allergieën",
    title: "Wat vindt u van hondenharen in huis?",
    help: "Sommige rassen verharen minder, wat mensen met allergieën soms makkelijker vinden. Toch is geen enkele hond volledig allergievrij.",
    options: [
      { value: "fine", label: "Haren storen mij niet" },
      { value: "prefer-low", label: "Ik zou liever minder haren hebben" },
      { value: "must-low", label: "Iemand hier reageert op honden", hint: "Alleen rassen die weinig verharen, graag" },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Verzorging",
    title: "Hoeveel vachtverzorging wilt u op u nemen?",
    options: [
      { value: "minimal", label: "Zo min mogelijk" },
      { value: "moderate", label: "Regelmatig borstelen is prima" },
      { value: "high", label: "Bezoekjes aan de trimsalon vind ik geen probleem" },
    ],
  },
  {
    id: "physical",
    eyebrow: "Verzorging",
    title: "Hoeveel hond kunt u comfortabel aan?",
    help: "Trekkracht aan de lijn wordt door velen onderschat.",
    options: [
      { value: "light", label: "Niets groots of sterks", hint: "Een sterke hond zou te veel zijn" },
      { value: "moderate", label: "Een middelgrote hond is prima" },
      { value: "strong", label: "Ik kan een grote, sterke hond goed aan" },
    ],
  },
  {
    id: "energyLimit",
    eyebrow: "Eerlijk gezegd",
    title: "Zou u gelukkig kunnen leven met een hond vol energie?",
    help: "Wees hier eerlijk — we nemen u op uw woord.",
    options: [
      { value: "no", label: "Nee, ik zou een rustigere hond nodig hebben" },
      { value: "maybe", label: "Binnen redelijke grenzen" },
      { value: "yes", label: "Ja, ik zou graag een actieve hond willen" },
    ],
  },
  {
    id: "companionship",
    eyebrow: "Gezelschap",
    title: "Wat hoopt u dat een hond aan uw leven toevoegt?",
    options: [
      { value: "calm-company", label: "Rustig, stabiel gezelschap" },
      { value: "motivation", label: "Een reden om naar buiten te gaan" },
      { value: "active", label: "Iemand die mijn tempo kan bijhouden" },
      { value: "family", label: "Een hond voor het hele gezin" },
    ],
  },
  {
    id: "allergy",
    eyebrow: "Vacht en allergieën",
    title: "Heeft iemand bij u thuis een hondenallergie?",
    help: "Sommige rassen verharen minder en houden hun vacht, wat sommigen makkelijker vinden. Geen enkele hond is volledig allergievrij, en de gevoeligheid verschilt per persoon.",
    options: [
      { value: "none", label: "Nee, niemand reageert op honden" },
      { value: "mild", label: "Milde reacties", hint: "Een beetje een snotterige neus bij sommige honden" },
      { value: "significant", label: "Een aanzienlijke allergie", hint: "We zouden eerst goed allergieadvies willen" },
      { value: "unsure", label: "We weten het nog niet zeker" },
    ],
  },
  {
    id: "wellbeing",
    eyebrow: "Gezelschap en welzijn",
    title: "Hoezeer hoopt u op een rustige, hechte metgezel om u heen?",
    help: "Een hond is gezelschap, geen zorg. We kijken naar rust, sociaal gedrag en hoe mensgericht een ras doorgaans is.",
    options: [
      { value: "no", label: "Daar ben ik niet naar op zoek" },
      { value: "some", label: "Dat zou fijn zijn" },
      { value: "important", label: "Ja, dat vind ik belangrijk" },
      { value: "very", label: "Dat is het belangrijkste voor mij" },
    ],
  },
];
