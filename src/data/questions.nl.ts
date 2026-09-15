import type { QuizQuestion } from "@/lib/matching/types";

/** De vragen in het Nederlands. Id's en waarden blijven hetzelfde. */
export const questionsNl: QuizQuestion[] = [
  {
    id: "activity",
    eyebrow: "Jouw dagen",
    title: "Hoe actief ben je op een gewone dag?",
    help: "Denk aan een doorsnee week, niet aan je beste week.",
    options: [
      { value: "1", label: "Vrij rustig", hint: "Een rustig rondje om de hoek, de meeste dagen" },
      { value: "2", label: "Redelijk actief", hint: "Een wandeling van 45 minuten in het park, ook op een natte dinsdag" },
      { value: "3", label: "Behoorlijk actief", hint: "Een uur of meer op de meeste dagen, en flink wat in het weekend" },
      { value: "4", label: "Altijd in beweging", hint: "Een stevige wandeling van twee uur, wat voor weer dan ook" },
    ],
  },
  {
    id: "home",
    eyebrow: "Thuis",
    title: "Waar gaat je hond wonen?",
    options: [
      { value: "apartment", label: "In een flat of appartement", hint: "Gedeelde trap of lift" },
      { value: "house", label: "Een huis, zonder tuin" },
      { value: "house-garden", label: "Een huis met tuin" },
      { value: "rural", label: "Buiten op het platteland" },
    ],
  },
  {
    id: "alone",
    eyebrow: "Jouw dag",
    title: "Hoe lang zou je hond meestal alleen zijn?",
    help: "Tel de hele dag realistisch mee — woon-werkverkeer en kantoordagen inbegrepen, niet alleen de uren achter je bureau.",
    options: [
      { value: "0", label: "Bijna nooit alleen", hint: "Er is bijna altijd iemand thuis" },
      { value: "2", label: "Tot drie uur", hint: "Een korte reistijd naast thuiswerken, of een ochtend weg" },
      { value: "4", label: "Drie tot vijf uur", hint: "Een gewone kantoordag met even naar huis tussen de middag" },
      { value: "6", label: "Zes uur of meer", hint: "Volledig woon-werkverkeer en een volle kantoordag, deur tot deur" },
    ],
  },
  {
    id: "experience",
    eyebrow: "Ervaring",
    title: "Heb je al eerder een hond gehad?",
    help: "Nog nooit een hond gehad? Geen zorgen. We houden rekening met dingen als speelruimte in opvoeding, geduld en hoe goed een hond alleen kan zijn, zodat je niet voor verrassingen komt te staan.",
    options: [
      { value: "first", label: "Dit zou mijn eerste zijn" },
      { value: "some", label: "Een beetje", hint: "Opgegroeid met honden, of geholpen er een te verzorgen" },
      { value: "experienced", label: "Heel wat", hint: "Ik heb zelf honden opgevoed en getraind" },
    ],
  },
  {
    id: "size",
    eyebrow: "Wat je zou willen",
    title: "Heb je een grootte in gedachten?",
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
    eyebrow: "Wat je zou willen",
    title: "Welk karakter zou je het fijnst vinden?",
    options: [
      { value: "calm", label: "Rustig en ontspannen" },
      { value: "affectionate", label: "Aanhankelijk en dicht bij je" },
      { value: "playful", label: "Speels en vol leven" },
      { value: "independent", label: "Blij in zijn eigen gezelschap" },
    ],
  },
  {
    id: "children",
    eyebrow: "Thuis",
    title: "Wie woont er verder nog thuis?",
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
    title: "Zijn er nog andere dieren in huis?",
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
    title: "Hoe voel je je bij hondenharen in huis?",
    help: "Sommige rassen verharen minder, wat mensen met allergieën soms makkelijker vinden. Geen enkele hond is helemaal allergievrij.",
    options: [
      { value: "fine", label: "Haren storen me niet" },
      { value: "prefer-low", label: "Ik heb liever zo min mogelijk" },
      { value: "must-low", label: "Iemand hier reageert op honden", hint: "Alleen rassen die weinig verharen, graag" },
    ],
  },
  {
    id: "grooming",
    eyebrow: "Verzorging",
    title: "Hoeveel verzorging wil je op je nemen?",
    options: [
      { value: "minimal", label: "Zo min mogelijk" },
      { value: "moderate", label: "Regelmatig borstelen is prima" },
      { value: "high", label: "Bezoekjes aan de trimsalon vind ik geen probleem" },
    ],
  },
  {
    id: "physical",
    eyebrow: "Verzorging",
    title: "Hoeveel hond kun je goed aan?",
    help: "Kracht aan de lijn wordt door veel mensen onderschat.",
    options: [
      { value: "light", label: "Niets groots of sterks", hint: "Een sterke hond zou te veel zijn" },
      { value: "moderate", label: "Een middelgrote hond past goed" },
      { value: "strong", label: "Ik kan een grote, sterke hond aan" },
    ],
  },
  {
    id: "energyLimit",
    eyebrow: "Eerlijk gezegd",
    title: "Zou je gelukkig kunnen leven met een hond vol energie?",
    help: "Wees hier gerust eerlijk — we nemen je bij je woord.",
    options: [
      { value: "no", label: "Nee, ik zou een rustigere hond nodig hebben" },
      { value: "maybe", label: "Binnen redelijke grenzen" },
      { value: "yes", label: "Ja, ik zou graag een actieve hond willen" },
    ],
  },
  {
    id: "companionship",
    eyebrow: "Gezelschap",
    title: "Wat hoop je dat een hond aan je leven toevoegt?",
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
    title: "Heeft iemand bij jou thuis een hondenallergie?",
    help: "Sommige rassen verharen minder en houden hun vacht, wat sommige mensen makkelijker vinden. Geen enkele hond is helemaal allergievrij, en gevoeligheid verschilt per persoon.",
    options: [
      { value: "none", label: "Nee, niemand reageert op honden" },
      { value: "mild", label: "Milde reacties", hint: "Een beetje snotterig bij sommige honden" },
      { value: "significant", label: "Een flinke allergie", hint: "We zouden eerst goed allergieadvies willen" },
      { value: "unsure", label: "We weten het nog niet zeker" },
    ],
  },
  {
    id: "wellbeing",
    eyebrow: "Gezelschap en welzijn",
    title: "Hoezeer hoop je op een rustige, hechte metgezel om je heen?",
    help: "Een hond is gezelschap, geen zorg. We kijken naar rust, socialiteit en hoe mensgericht een ras doorgaans is.",
    options: [
      { value: "no", label: "Daar ben ik niet naar op zoek" },
      { value: "some", label: "Dat zou fijn zijn" },
      { value: "important", label: "Ja, dat is belangrijk voor mij" },
      { value: "very", label: "Dat is het belangrijkste wat ik wil" },
    ],
  },
];
