import type { Block, DocContext, DocSection, DocSpec } from "./types";
import { contactGroups, infoFields } from "@/lib/care/records";
import { pick } from "@/i18n";

/**
 * One place where every printable DoggMatch document is described.
 * Document type -> data -> sections -> the shared DoggMatch page template.
 * Adding a new printable means adding one entry here; nothing else changes.
 */

const ageWordsEn: Record<string, string> = {
  puppy: "Puppy",
  adolescent: "Adolescent",
  adult: "Adult",
  senior: "Senior",
};

const ageWordsNo: Record<string, string> = {
  puppy: "Valp",
  adolescent: "Ungdom",
  adult: "Voksen",
  senior: "Eldre",
};

const ageWordsPl: Record<string, string> = {
  puppy: "Szczenię",
  adolescent: "Młodzik",
  adult: "Dorosły",
  senior: "Senior",
};

function ageWords(): Record<string, string> {
  return pick({ en: ageWordsEn, no: ageWordsNo, pl: ageWordsPl, dk: "Hundehvalp", se: "Valp", fi: "Pentua", de: "Welpe", fr: "Chiot", nl: "Pup" });
}

function dogFields(ctx: DocContext): Block {
  const words = ageWords();
  return {
    kind: "fields",
    fields: [
      { label: pick({ en: "Name", no: "Navn", pl: "Imię", dk: "Navn", se: "Namn", fi: "Nimi", de: "Name", fr: "Nom", nl: "Naam" }), value: ctx.dog?.name },
      { label: pick({ en: "Breed", no: "Rase", pl: "Rasa", dk: "Race", se: "Rasa", fi: "Rotu", de: "Rasse", fr: "Race", nl: "Ras" }), value: ctx.breedName },
      { label: pick({ en: "Age", no: "Alder", pl: "Wiek", dk: "Alder", se: "Ålder", fi: "Ikä", de: "Alter", fr: "Âge", nl: "Leeftijd" }), value: ctx.dog ? words[ctx.dog.ageStage] : undefined },
      { label: pick({ en: "Born", no: "Født", pl: "Data urodzenia", dk: "Født", se: "Född", fi: "Syntynyt", de: "Geboren", fr: "Né(e)", nl: "Geboren" }), value: ctx.details.dob },
      {
        label: pick({ en: "Sex", no: "Kjønn", pl: "Płeć", dk: "Køn", se: "Kön", fi: "Sukupuoli", de: "Geschlecht", fr: "Sexe", nl: "Geslacht" }),
        value:
          ctx.dog?.sex === "female"
            ? pick({ en: "Female", no: "Tispe", pl: "Suka", dk: "Tæve", se: "Tik", fi: "Narttu", de: "Hündin", fr: "Femelle", nl: "Teefje" })
            : ctx.dog?.sex === "male"
              ? pick({ en: "Male", no: "Hannhund", pl: "Pies (samiec)", dk: "Hund", se: "Hane", fi: "Uros", de: "Rüde", fr: "Mâle", nl: "Reutje" })
              : undefined,
      },
      { label: pick({ en: "Colour", no: "Farge", pl: "Umaszczenie", dk: "Farve", se: "Färg", fi: "Väri", de: "Farbe", fr: "Couleur", nl: "Kleur" }), value: ctx.details.colour },
      { label: pick({ en: "Weight", no: "Vekt", pl: "Waga", dk: "Vægt", se: "Vikt", fi: "Paino", de: "Gewicht", fr: "Poids", nl: "Gewicht" }), value: ctx.care.weightKg ? `${ctx.care.weightKg} kg` : undefined },
      { label: pick({ en: "Microchip", no: "ID-merking", pl: "Mikroczip", dk: "Chip", se: "Chipmärkning", fi: "Mikrosiru", de: "Mikrochip", fr: "Puce", nl: "Chip" }), value: ctx.details.microchip },
      { label: pick({ en: "Insurance", no: "Forsikring", pl: "Ubezpieczenie", dk: "Forsikring", se: "Försäkring", fi: "Vakuutus", de: "Versicherung", fr: "Assurance", nl: "Verzekering" }), value: ctx.details.insurer },
      { label: pick({ en: "Policy number", no: "Forsikringsnummer", pl: "Numer polisy", dk: "Policenummer", se: "Försäkringsnummer", fi: "Vakuutusnumero", de: "Policennummer", fr: "Numéro de police", nl: "Polisnummer" }), value: ctx.details.policy },
    ],
  };
}

function contactBlocks(ctx: DocContext): DocSection[] {
  return contactGroups.map((group) => ({
    heading: group.title,
    blocks: [
      {
        kind: "fields",
        fields: group.fields.map((f) => ({
          label: f.label,
          value: ctx.contacts[group.id]?.[f.key],
        })),
      } as Block,
    ],
  }));
}

function infoSection(ctx: DocContext): DocSection {
  return {
    heading: pick({ en: "Worth knowing about this dog", no: "Verdt å vite om denne hunden", pl: "Warto wiedzieć o tym psie", dk: "Værd at vide om denne hund", se: "Värt att veta om den här hunden", fi: "Hyvä tietää tästä koirasta", de: "Wissenswertes über diesen Hund", fr: "Bon à savoir sur ce chien", nl: "Handig om te weten over deze hond" }),
    intro: pick({
      en: "Written down by the owner, so nobody has to remember it under pressure.",
      no: "Skrevet ned av eieren, så ingen trenger å huske det under press.",
      pl: "Spisane przez właściciela, żeby nikt nie musiał tego pamiętać pod presją.",
      dk: "Skrevet ned af ejeren, så ingen behøver at huske det under pres.",
      se: "Nedskrivet av ägaren, så ingen behöver komma ihåg det under press.",
      fi: "Omistajan kirjoittama, jotta kenenkään ei tarvitse muistaa sitä paineen alla.",
      de: "Vom Besitzer aufgeschrieben, damit sich niemand unter Druck daran erinnern muss.",
      fr: "Écrit par le propriétaire, pour que personne n'ait à s'en souvenir sous la pression.",
      nl: "Opgeschreven door de eigenaar, zodat niemand het onder druk hoeft te onthouden."
    }),
    blocks: infoFields.map((field) => ({
      kind: "fields",
      fields: [{ label: field.label, value: ctx.info[field.key], wide: true }],
    })),
  };
}

function feedingSection(ctx: DocContext): DocSection {
  const p = ctx.portions;
  return {
    heading: pick({ en: "Food & feeding", no: "Mat og fôring", pl: "Jedzenie i karmienie", dk: "Mad & fodring", se: "Mat & utfodring", fi: "Ruoka & ruokinta", de: "Futter & Fütterung", fr: "Nourriture & alimentation", nl: "Voeding & voeding" }),
    intro: p
      ? pick({
          en: "The amounts below are a starting point worked out from weight, age and how busy your days are — not a prescription. Watch your dog's shape and adjust.",
          no: "Mengdene under er et utgangspunkt, regnet ut fra vekt, alder og hvor travle dagene dine er — ikke en fasit. Følg med på hundens form og juster.",
          pl: "Podane niżej ilości to punkt wyjścia, wyliczony na podstawie wagi, wieku i tego, jak zajęte są twoje dni — nie sztywna reguła. Obserwuj sylwetkę psa i dostosowuj.",
          dk: "Mængderne herunder er et udgangspunkt, beregnet ud fra vægt, alder og hvor travle dine dage er — ikke en recept. Hold øje med din hunds form og juster.",
          se: "Mängderna nedan är en utgångspunkt, beräknad utifrån vikt, ålder och hur dina dagar är — inte ett recept. Håll koll på din hunds form och justera.",
          fi: "Alla määrät ovat lähtökohta, laskettu painon, iän ja päiviesi kiireellisyyden perusteella – ei resepti. Tarkkaile koirasi kuntoa ja säädä.",
          de: "Die unten aufgeführten Mengen sind ein Ausgangspunkt, berechnet aus Gewicht, Alter und wie beschäftigt Ihre Tage sind – keine Vorschrift. Beobachten Sie die Form Ihres Hundes und passen Sie sie an.",
          fr: "Les quantités ci-dessous sont un point de départ calculé à partir du poids, de l'âge et de l'activité de vos journées – pas une prescription. Surveillez la forme de votre chien et ajustez.",
          nl: "De onderstaande hoeveelheden zijn een startpunt, berekend op basis van gewicht, leeftijd en hoe druk uw dagen zijn – geen voorschrift. Houd de vorm van uw hond in de gaten en pas aan."
        })
      : pick({
          en: "Fill in what your dog eats, so anyone looking after them gets it right.",
          no: "Fyll inn hva hunden din spiser, så alle som passer den får det riktig.",
          pl: "Wpisz, co je twój pies, żeby każdy, kto się nim zajmuje, robił to dobrze.",
          dk: "Udfyld hvad din hund spiser, så alle, der passer den, får det rigtigt.",
          se: "Fyll i vad din hund äter, så att alla som tar hand om den gör rätt.",
          fi: "Täytä, mitä koirasi syö, jotta kuka tahansa sitä hoitava tekee sen oikein.",
          de: "Füllen Sie ein, was Ihr Hund frisst, damit jeder, der sich um ihn kümmert, es richtig macht.",
          fr: "Indiquez ce que votre chien mange, afin que quiconque s'en occupe le fasse correctement.",
          nl: "Vul in wat uw hond eet, zodat iedereen die voor hem zorgt het goed doet."
        }),
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: pick({ en: "Food", no: "Mat", pl: "Karma", dk: "Mad", se: "Foder", fi: "Ruoka", de: "Futter", fr: "Nourriture", nl: "Voer" }), value: ctx.care.foodType },
          {
            label: pick({ en: "Energy on the bag", no: "Energi på posen", pl: "Energia na opakowaniu", dk: "Energi på posen", se: "Energi på påsen", fi: "Energia pussissa", de: "Energie auf der Packung", fr: "Énergie sur le sac", nl: "Energie op de zak" }),
            value: ctx.care.foodEnergy ? `${ctx.care.foodEnergy} kcal / 100 g` : undefined,
          },
          {
            label: pick({ en: "Meals a day", no: "Måltider per dag", pl: "Posiłki dziennie", dk: "Måltider om dagen", se: "Måltider per dag", fi: "Aterioita päivässä", de: "Mahlzeiten pro Tag", fr: "Repas par jour", nl: "Maaltijden per dag" }),
            value: p ? String(p.mealsPerDay) : ctx.care.mealsPerDay ? String(ctx.care.mealsPerDay) : undefined,
          },
          {
            label: pick({ en: "Roughly per day", no: "Omtrent per dag", pl: "W przybliżeniu dziennie", dk: "Cirka pr. dag", se: "Ungefär per dag", fi: "Noin päivässä", de: "Ungefähr pro Tag", fr: "Environ par jour", nl: "Ongeveer per dag" }),
            value: p
              ? p.gramsPerDay
                ? `${p.gramsPerDay} g (${pick({ en: "about", no: "omtrent", pl: "około", dk: "ca.", se: "ungefär", fi: "noin", de: "ca.", fr: "environ", nl: "ongeveer" })} ${p.dailyKcal} kcal)`
                : `${p.dailyKcal} kcal`
              : undefined,
          },
          { label: pick({ en: "Roughly per meal", no: "Omtrent per måltid", pl: "W przybliżeniu na posiłek", dk: "Cirka pr. måltid", se: "Ungefär per måltid", fi: "Noin ateriaa kohden", de: "Ungefähr pro Mahlzeit", fr: "Environ par repas", nl: "Ongeveer per maaltijd" }), value: p?.gramsPerMeal ? `${p.gramsPerMeal} g` : undefined },
          {
            label: pick({ en: "Treats", no: "Godbiter", pl: "Przysmaki", dk: "Godbidder", se: "Godis", fi: "Herkut", de: "Leckerlis", fr: "Friandises", nl: "Snoepjes" }),
            value: p ? pick({ en: `Keep under about ${p.treatKcal} kcal a day`, no: `Hold deg under omtrent ${p.treatKcal} kcal om dagen`, pl: `Trzymaj się poniżej około ${p.treatKcal} kcal dziennie`, dk: `Hold dig under ca. ${p.treatKcal} kcal om dagen`, se: `Håll dig under ca ${p.treatKcal} kcal per dag`, fi: `Pidä alle noin ${p.treatKcal} kcal päivässä`, de: `Halten Sie sich unter ca. ${p.treatKcal} kcal pro Tag`, fr: `Gardez moins d'environ ${p.treatKcal} kcal par jour`, nl: `Houd het onder ongeveer ${p.treatKcal} kcal per dag` }) : undefined,
          },
          { label: pick({ en: "Feeding times", no: "Fôringstider", pl: "Pory karmienia", dk: "Fodringstider", se: "Matningstider", fi: "Ruoka-ajat", de: "Fütterungszeiten", fr: "Heures de repas", nl: "Voedingstijden" }) },
          { label: pick({ en: "Fresh water", no: "Rent vann", pl: "Świeża woda", dk: "Frisk vand", se: "Färskt vatten", fi: "Raikas vesi", de: "Frisches Wasser", fr: "Eau fraîche", nl: "Vers water" }), value: pick({ en: "Topped up and clean, always", no: "Fylt opp og rent, alltid", pl: "Zawsze uzupełniona i czysta", dk: "Fyldt op og rent, altid", se: "Fyllt på och rent, alltid", fi: "Aina täytetty ja puhdas", de: "Immer aufgefüllt und sauber", fr: "Remplie et propre, toujours", nl: "Aangevuld en schoon, altijd" }) },
          { label: pick({ en: "Notes", no: "Notater", pl: "Notatki", dk: "Noter", se: "Anteckningar", fi: "Muistiinpanot", de: "Notizen", fr: "Notes", nl: "Notities" }), wide: true },
        ],
      },
      {
        kind: "week",
        days: ctx.week.map((d) => ({ name: d.name, items: [pick({ en: "Breakfast", no: "Frokost", pl: "Śniadanie", dk: "Morgenmad", se: "Frukost", fi: "Aamiainen", de: "Frühstück", fr: "Petit-déjeuner", nl: "Ontbijt" }), pick({ en: "Dinner", no: "Middag", pl: "Obiadokolacja", dk: "Aftensmad", se: "Middag", fi: "Päivällinen", de: "Abendessen", fr: "Dîner", nl: "Avondeten" })] })),
      },
      {
        kind: "note",
        text: pick({
          en: "Any amount here is an estimate to start from. If your dog is losing or gaining weight, or you're unsure, your vet is the best person to ask.",
          no: "Alle mengder her er anslag å starte med. Går hunden opp eller ned i vekt, eller du er usikker, er veterinæren den beste å spørre.",
          pl: "Każda podana tu ilość to szacunek na start. Jeśli pies chudnie lub tyje, albo masz wątpliwości, najlepiej zapytać weterynarza.",
          dk: "Enhver mængde her er et estimat at starte med. Hvis din hund taber sig eller tager på i vægt, eller du er usikker, er din dyrlæge den bedste at spørge.",
          se: "Varje mängd här är en uppskattning att börja med. Om din hund går ner eller upp i vikt, eller om du är osäker, är din veterinär den bästa att fråga.",
          fi: "Kaikki tässä olevat määrät ovat arvioita aloitukseen. Jos koirasi laihtuu tai lihoo, tai olet epävarma, eläinlääkäri on paras henkilö kysyä.",
          de: "Jede hier angegebene Menge ist ein Schätzwert für den Anfang. Wenn Ihr Hund ab- oder zunimmt oder Sie sich unsicher sind, ist Ihr Tierarzt die beste Anlaufstelle.",
          fr: "Toute quantité ici est une estimation pour commencer. Si votre chien perd ou prend du poids, ou si vous n'êtes pas sûr, votre vétérinaire est la meilleure personne à consulter.",
          nl: "Elke hoeveelheid hier is een schatting om mee te beginnen. Als uw hond gewicht verliest of aankomt, of als u twijfelt, is uw dierenarts de beste persoon om te vragen."
        }),
      },
    ],
  };
}

function weekSection(ctx: DocContext): DocSection {
  return {
    heading: pick({ en: "Our week", no: "Vår uke", pl: "Nasz tydzień", dk: "Vores uge", se: "Vår vecka", fi: "Viikkoni", de: "Unsere Woche", fr: "Notre semaine", nl: "Onze week" }),
    intro: pick({
      en: "Built from what you've told us about your dog. Change anything that doesn't suit your days.",
      no: "Satt sammen ut fra det du har fortalt oss om hunden din. Endre alt som ikke passer dagene dine.",
      pl: "Ułożone na podstawie tego, co nam powiedziałeś o swoim psie. Zmień wszystko, co nie pasuje do twoich dni.",
      dk: "Bygget op ud fra, hvad du har fortalt os om din hund. Ændr alt, der ikke passer til dine dage.",
      se: "Byggd på vad du har berättat för oss om din hund. Ändra allt som inte passar dina dagar.",
      fi: "Koottu siitä, mitä olet kertonut meille koirastasi. Muuta mitä tahansa, mikä ei sovi päivääsi.",
      de: "Aufgebaut auf dem, was Sie uns über Ihren Hund erzählt haben. Ändern Sie alles, was nicht zu Ihren Tagen passt.",
      fr: "Construit à partir de ce que vous nous avez dit sur votre chien. Changez tout ce qui ne convient pas à vos journées.",
      nl: "Opgebouwd uit wat u ons over uw hond heeft verteld. Verander alles wat niet bij uw dagen past."
    }),
    blocks: [
      {
        kind: "week",
        days: ctx.week.map((d) => ({ name: d.name, items: d.items.map((i) => i.label) })),
      },
    ],
  };
}

function trainingSection(ctx: DocContext): DocSection {
  return {
    heading: pick({ en: "Training", no: "Trening", pl: "Trening", dk: "Træning", se: "Träning", fi: "Koulutus", de: "Training", fr: "Entraînement", nl: "Training" }),
    intro: pick({
      en: "A few short sessions beat one long one. Tick things off as you go.",
      no: "Noen korte økter slår én lang. Kryss av etter hvert som du går.",
      pl: "Kilka krótkich sesji jest lepszych niż jedna długa. Odhaczaj po kolei.",
      dk: "Et par korte sessioner slår én lang. Kryds af, som du går.",
      se: "Några korta pass slår ett långt. Bocka av allt eftersom.",
      fi: "Muutama lyhyt harjoitus on parempi kuin yksi pitkä. Rastita suoritetut tehtävät.",
      de: "Ein paar kurze Trainingseinheiten sind besser als eine lange. Haken Sie die Dinge ab, während Sie fortfahren.",
      fr: "Quelques courtes sessions valent mieux qu'une longue. Cochez les éléments au fur et à mesure.",
      nl: "Een paar korte sessies zijn beter dan één lange. Vink dingen af terwijl u bezig bent."
    }),
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: pick({ en: "Where we're at", no: "Hvor vi står", pl: "Gdzie jesteśmy", dk: "Hvor vi er", se: "Var vi befinner oss", fi: "Missä olemme", de: "Wo wir stehen", fr: "Où nous en sommes", nl: "Waar we staan" }), value: ctx.dog?.level },
          {
            label: pick({ en: "What we're working on", no: "Det vi jobber med", pl: "Nad czym pracujemy", dk: "Hvad vi arbejder på", se: "Vad vi arbetar med", fi: "Mitä työstämme", de: "Woran wir arbeiten", fr: "Ce sur quoi nous travaillons", nl: "Waar we aan werken" }),
            value: ctx.skills.map((s) => s.title).join(", ") || undefined,
            wide: true,
          },
        ],
      },
      { kind: "checklist", items: ctx.skills.map((s) => s.title), columns: 1 },
      { kind: "lines", count: 6, label: pick({ en: "How it went", no: "Hvordan det gikk", pl: "Jak poszło", dk: "Hvordan det gik", se: "Hur det gick", fi: "Miten meni", de: "Wie es lief", fr: "Comment ça s'est passé", nl: "Hoe het ging" }) },
    ],
  };
}

function healthSection(ctx: DocContext): DocSection {
  const recent = ctx.weights.slice(-6);
  return {
    heading: pick({ en: "Health", no: "Helse", pl: "Zdrowie", dk: "Sundhed", se: "Hälsa", fi: "Terveys", de: "Gesundheit", fr: "Santé", nl: "Gezondheid" }),
    intro: pick({ en: "Owner-kept notes. Nothing here is a diagnosis.", no: "Notater ført av eieren. Ingenting her er en diagnose.", pl: "Notatki prowadzone przez właściciela. Nic tu nie jest diagnozą.", dk: "Ejers noter. Intet her er en diagnose.", se: "Ägarens anteckningar. Ingenting här är en diagnos.", fi: "Omistajan pitämät muistiinpanot. Mikään tässä ei ole diagnoosi.", de: "Vom Besitzer geführte Notizen. Nichts hier ist eine Diagnose.", fr: "Notes tenues par le propriétaire. Rien ici n'est un diagnostic.", nl: "Door de eigenaar bijgehouden notities. Niets hier is een diagnose." }),
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: pick({ en: "Weight now", no: "Vekt nå", pl: "Waga teraz", dk: "Vægt nu", se: "Vikt nu", fi: "Paino nyt", de: "Gewicht jetzt", fr: "Poids actuel", nl: "Gewicht nu" }), value: ctx.care.weightKg ? `${ctx.care.weightKg} kg` : undefined },
          { label: pick({ en: "Body shape", no: "Holdfasong", pl: "Kondycja ciała", dk: "Kropsform", se: "Kroppsform", fi: "Kehon kunto", de: "Körperform", fr: "Condition corporelle", nl: "Lichaamsconditie" }), value: ctx.care.bodyCondition },
          {
            label: pick({ en: "Neutered", no: "Kastrert", pl: "Wykastrowany/wysterylizowana", dk: "Kastreret", se: "Kastrerad", fi: "Steriloitu", de: "Kastriert", fr: "Stérilisé(e)", nl: "Gesteriliseerd" }),
            value: ctx.care.neutered === undefined ? undefined : ctx.care.neutered ? pick({ en: "Yes", no: "Ja", pl: "Tak", dk: "Ja", se: "Ja", fi: "Kyllä", de: "Ja", fr: "Oui", nl: "Ja" }) : pick({ en: "No", no: "Nei", pl: "Nie", dk: "Nej", se: "Nej", fi: "Ei", de: "Nein", fr: "Non", nl: "Nee" }),
          },
          { label: pick({ en: "Medication", no: "Medisiner", pl: "Leki", dk: "Medicin", se: "Medicin", fi: "Lääkitys", de: "Medikamente", fr: "Médicaments", nl: "Medicatie" }), value: ctx.info.medication, wide: true },
          { label: pick({ en: "Allergies and sensitivities", no: "Allergier og sensitivitet", pl: "Alergie i nadwrażliwości", dk: "Allergier og følsomheder", se: "Allergier och känsligheter", fi: "Allergiat ja herkkyydet", de: "Allergien und Empfindlichkeiten", fr: "Allergies et sensibilités", nl: "Allergieën en gevoeligheden" }), value: ctx.info.allergies, wide: true },
          { label: pick({ en: "Health worth knowing about", no: "Helse verdt å vite om", pl: "Zdrowie, o którym warto wiedzieć", dk: "Sundhed værd at vide om", se: "Hälsa värd att veta om", fi: "Terveys, josta on hyvä tietää", de: "Gesundheit, die man kennen sollte", fr: "Santé à connaître", nl: "Gezondheid om te weten" }), value: ctx.info.health, wide: true },
        ],
      },
      ...(recent.length
        ? [
            {
              kind: "fields",
              fields: recent.map((w) => ({ label: w.day, value: `${w.kg} kg` })),
            } as Block,
          ]
        : [{ kind: "lines", count: 4, label: pick({ en: "Weight log", no: "Vektlogg", pl: "Dziennik wagi", dk: "Vægtlog", se: "Viktlogg", fi: "Painoloki", de: "Gewichtsprotokoll", fr: "Journal de poids", nl: "Gewichtslogboek" }) } as Block]),
      {
        kind: "note",
        text: pick({
          en: "If you're worried about a change in your dog's health, your veterinarian is the best person to ask.",
          no: "Er du bekymret for en endring i hundens helse, er veterinæren den beste å spørre.",
          pl: "Jeśli martwi cię zmiana w zdrowiu psa, najlepiej zapytać weterynarza.",
          dk: "Hvis du er bekymret for en ændring i din hunds sundhed, er din dyrlæge den bedste at spørge.",
          se: "Om du är orolig för en förändring i din hunds hälsa, är din veterinär den bästa att fråga.",
          fi: "Jos olet huolissasi koirasi terveydentilan muutoksesta, eläinlääkäri on paras henkilö kysyä.",
          de: "Wenn Sie sich Sorgen über eine Veränderung der Gesundheit Ihres Hundes machen, ist Ihr Tierarzt die beste Anlaufstelle.",
          fr: "Si vous êtes inquiet d'un changement dans la santé de votre chien, votre vétérinaire est la meilleure personne à consulter.",
          nl: "Als u zich zorgen maakt over een verandering in de gezondheid van uw hond, is uw dierenarts de beste persoon om te raadplegen."
        }),
      },
    ],
  };
}

function groomingSection(ctx: DocContext): DocSection {
  return {
    heading: pick({ en: "Grooming & everyday care", no: "Stell og daglig pleie", pl: "Pielęgnacja i codzienna opieka", dk: "Pelspleje & daglig pleje", se: "Pälsvård & daglig skötsel", fi: "Turkinhoito & päivittäinen hoito", de: "Fellpflege & tägliche Pflege", fr: "Toilettage & soins quotidiens", nl: "Vachtverzorging & dagelijkse verzorging" }),
    intro: pick({ en: "The small things that keep a dog comfortable.", no: "De små tingene som holder en hund komfortabel.", pl: "Drobiazgi, dzięki którym psu jest wygodnie.", dk: "De små ting, der holder en hund komfortabel.", se: "De små sakerna som håller en hund bekväm.", fi: "Pienet asiat, jotka pitävät koiran mukavana.", de: "Die kleinen Dinge, die einen Hund bequem halten.", fr: "Les petites choses qui rendent un chien confortable.", nl: "De kleine dingen die een hond comfortabel houden." }),
    blocks: [
      {
        kind: "week",
        days: ctx.week.map((d) => ({
          name: d.name,
          items: d.items.filter((i) => i.kind === "care").map((i) => i.label),
        })),
      },
      {
        kind: "checklist",
        items: pick({
          en: ["Teeth", "Brush through", "Nails", "Ears", "Eyes", "Paws and pads", "Skin and lumps", "Bath (only when needed)"],
          no: ["Tenner", "Børste gjennom", "Klør", "Ører", "Øyne", "Poter og trynepute", "Hud og kuler", "Bad (kun ved behov)"],
          pl: ["Zęby", "Wyszczotkowanie", "Pazury", "Uszy", "Oczy", "Łapy i poduszki", "Skóra i guzki", "Kąpiel (tylko w razie potrzeby)"],
          dk: ["Tænder", "Børst igennem", "Negle", "Ører", "Øjne", "Poter og trædepuder", "Hud og knuder", "Bad (kun når nødvendigt)"],
          se: ["Tänder", "Borsta igenom", "Klor", "Öron", "Ögon", "Tassar och trampdynor", "Hud och knölar", "Bad (endast vid behov)"],
          fi: ["Hampaat", "Harjaus", "Kynnet", "Korvat", "Silmät", "Tassut ja anturat", "Iho ja kyhmyt", "Kylpy (vain tarvittaessa)"],
          de: ["Zähne", "Durchbürsten", "Krallen", "Ohren", "Augen", "Pfoten und Ballen", "Haut und Knoten", "Baden (nur bei Bedarf)"],
          fr: ["Dents", "Brossage", "Ongles", "Oreilles", "Yeux", "Pattes et coussinets", "Peau et bosses", "Bain (uniquement si nécessaire)"],
          nl: ["Tanden", "Doorborstelen", "Nagels", "Oren", "Ogen", "Poten en voetzolen", "Huid en bultjes", "Bad (alleen indien nodig)"]
        }),
        columns: 2,
      },
      { kind: "lines", count: 4, label: pick({ en: "Notes", no: "Notater", pl: "Notatki", dk: "Noter", se: "Anteckningar", fi: "Muistiinpanot", de: "Notizen", fr: "Notes", nl: "Notities" }) },
    ],
  };
}

function vetSection(ctx: DocContext): DocSection {
  const latest = ctx.visits[0];
  return {
    heading: pick({ en: "For the vet", no: "Til veterinæren", pl: "Dla weterynarza", dk: "Til dyrlægen", se: "För veterinären", fi: "Eläinlääkärille", de: "Für den Tierarzt", fr: "Pour le vétérinaire", nl: "Voor de dierenarts" }),
    intro: pick({
      en: "This information is written down by the owner to help organise observations and questions for a veterinary visit.",
      no: "Denne informasjonen er skrevet ned av eieren for å organisere observasjoner og spørsmål til et veterinærbesøk.",
      pl: "Te informacje spisał właściciel, by uporządkować obserwacje i pytania na wizytę u weterynarza.",
      dk: "Denne information er skrevet ned af ejeren for at hjælpe med at organisere observationer og spørgsmål til et dyrlægebesøg.",
      se: "Denna information är nedskriven av ägaren för att hjälpa till att organisera observationer och frågor inför ett veterinärbesök.",
      fi: "Tämä tieto on omistajan kirjoittama, jotta havaintojen ja kysymysten järjestäminen eläinlääkärikäyntiä varten olisi helpompaa.",
      de: "Diese Informationen werden vom Besitzer aufgeschrieben, um Beobachtungen und Fragen für einen Tierarztbesuch zu organisieren.",
      fr: "Ces informations sont écrites par le propriétaire pour aider à organiser les observations et les questions pour une visite vétérinaire.",
      nl: "Deze informatie wordt door de eigenaar opgeschreven om observaties en vragen voor een dierenartsbezoek te helpen organiseren."
    }),
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: pick({ en: "Date", no: "Dato", pl: "Data", dk: "Dato", se: "Datum", fi: "Päivämäärä", de: "Datum", fr: "Date", nl: "Datum" }), value: latest?.date },
          { label: pick({ en: "Why we're going", no: "Hvorfor vi skal dit", pl: "Powód wizyty", dk: "Hvorfor vi skal derhen", se: "Varför vi ska dit", fi: "Miksi menemme", de: "Warum wir gehen", fr: "Pourquoi nous y allons", nl: "Waarom we gaan" }), value: latest?.reason, wide: true },
          {
            label: pick({ en: "Weight", no: "Vekt", pl: "Waga", dk: "Vægt", se: "Vikt", fi: "Paino", de: "Gewicht", fr: "Poids", nl: "Gewicht" }),
            value: latest?.weightKg ? `${latest.weightKg} kg` : ctx.care.weightKg ? `${ctx.care.weightKg} kg` : undefined,
          },
          { label: pick({ en: "What I want to ask", no: "Det jeg vil spørre om", pl: "O co chcę zapytać", dk: "Hvad jeg vil spørge om", se: "Vad jag vill fråga om", fi: "Mitä haluan kysyä", de: "Was ich fragen möchte", fr: "Ce que je veux demander", nl: "Wat ik wil vragen" }), value: latest?.questions, wide: true },
          { label: pick({ en: "What we were told", no: "Det vi fikk vite", pl: "Co nam powiedziano", dk: "Hvad vi fik at vide", se: "Vad vi fick veta", fi: "Mitä meille kerrottiin", de: "Was uns gesagt wurde", fr: "Ce qu'on nous a dit", nl: "Wat ons verteld werd" }), value: latest?.notes, wide: true },
          { label: pick({ en: "Follow-up", no: "Oppfølging", pl: "Dalsze kroki", dk: "Opfølgning", se: "Uppföljning", fi: "Jatkohoito", de: "Nachsorge", fr: "Suivi", nl: "Vervolg" }), value: latest?.followUp, wide: true },
          { label: pick({ en: "Next appointment", no: "Neste time", pl: "Następna wizyta", dk: "Næste aftale", se: "Nästa besök", fi: "Seuraava aika", de: "Nächster Termin", fr: "Prochain rendez-vous", nl: "Volgende afspraak" }), value: latest?.next },
        ],
      },
      { kind: "lines", count: 8, label: pick({ en: "Room for notes on the day", no: "Plass til notater på dagen", pl: "Miejsce na notatki z dnia wizyty", dk: "Plads til noter på dagen", se: "Utrymme för anteckningar på dagen", fi: "Tilaa muistiinpanoille päivän aikana", de: "Platz für Notizen am Tag", fr: "Espace pour les notes du jour", nl: "Ruimte voor notities op de dag" }) },
    ],
  };
}

function emergencySection(ctx: DocContext): DocSection {
  const name = ctx.dog?.name ?? pick({ en: "our dog", no: "hunden vår", pl: "nasz pies", dk: "vores hund", se: "vår hund", fi: "koiramme", de: "unser Hund", fr: "notre chien", nl: "onze hond" });
  return {
    heading: pick({ en: "In an emergency", no: "Ved en nødsituasjon", pl: "W nagłym wypadku", dk: "I en nødsituation", se: "Vid en nödsituation", fi: "Hätätilanteessa", de: "Im Notfall", fr: "En cas d'urgence", nl: "In geval van nood" }),
    intro: pick({
      en: `Stick this on the fridge and keep a copy in the car. Everything someone would need in the first two minutes if something happens to ${name}.`,
      no: `Heng dette på kjøleskapet og ha en kopi i bilen. Alt noen trenger de første to minuttene hvis noe skjer med ${name}.`,
      pl: `Powieś to na lodówce i miej kopię w samochodzie. Wszystko, czego ktoś potrzebuje w pierwszych dwóch minutach, jeśli coś stanie się ${name}.`,
      dk: `Sæt dette på køleskabet og hav en kopi i bilen. Alt, hvad nogen har brug for i de første to minutter, hvis der sker noget med ${name}.`,
      se: `Sätt detta på kylskåpet och ha en kopia i bilen. Allt någon skulle behöva under de första två minuterna om något händer ${name}.`,
      fi: `Kiinnitä tämä jääkaappiin ja pidä kopio autossa. Kaikki, mitä joku tarvitsee ensimmäisten kahden minuutin aikana, jos jotain tapahtuu ${name}.`,
      de: `Hängen Sie dies an den Kühlschrank und bewahren Sie eine Kopie im Auto auf. Alles, was jemand in den ersten zwei Minuten benötigt, wenn Ihrem ${name} etwas passiert.`,
      fr: `Accrochez ceci sur le réfrigérateur et gardez une copie dans la voiture. Tout ce dont quelqu'un aurait besoin dans les deux premières minutes si quelque chose arrive à ${name}.`,
      nl: `Hang dit op de koelkast en bewaar een kopie in de auto. Alles wat iemand nodig heeft in de eerste twee minuten als er iets met ${name} gebeurt.`
    }),
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: pick({ en: "Dog", no: "Hund", pl: "Pies", dk: "Hund", se: "Hund", fi: "Koira", de: "Hund", fr: "Chien", nl: "Hond" }), value: ctx.dog?.name },
          { label: pick({ en: "Breed", no: "Rase", pl: "Rasa", dk: "Race", se: "Rasa", fi: "Rotu", de: "Rasse", fr: "Race", nl: "Ras" }), value: ctx.breedName },
          { label: pick({ en: "Weight", no: "Vekt", pl: "Waga", dk: "Vægt", se: "Vikt", fi: "Paino", de: "Gewicht", fr: "Poids", nl: "Gewicht" }), value: ctx.care.weightKg ? `${ctx.care.weightKg} kg` : undefined },
          { label: pick({ en: "Microchip", no: "ID-merking", pl: "Mikroczip", dk: "Chip", se: "Chipmärkning", fi: "Mikrosiru", de: "Mikrochip", fr: "Puce", nl: "Chip" }), value: ctx.details.microchip },
          { label: pick({ en: "Owner", no: "Eier", pl: "Właściciel", dk: "Ejer", se: "Ägare", fi: "Omistaja", de: "Besitzer", fr: "Propriétaire", nl: "Eigenaar" }), value: ctx.contacts["owner"]?.["name"] },
          { label: pick({ en: "Owner phone", no: "Eiers telefon", pl: "Telefon właściciela", dk: "Ejerens telefon", se: "Ägarens telefon", fi: "Omistajan puhelin", de: "Telefon des Besitzers", fr: "Téléphone du propriétaire", nl: "Telefoon eigenaar" }), value: ctx.contacts["owner"]?.["phone"] },
          { label: pick({ en: "Vet", no: "Veterinær", pl: "Weterynarz", dk: "Dyrlæge", se: "Veterinär", fi: "Eläinlääkäri", de: "Tierarzt", fr: "Vétérinaire", nl: "Dierenarts" }), value: ctx.contacts["vet"]?.["clinic"] },
          { label: pick({ en: "Vet phone", no: "Veterinærens telefon", pl: "Telefon do weterynarza", dk: "Dyrlægens telefon", se: "Veterinärens telefon", fi: "Eläinlääkärin puhelin", de: "Telefon des Tierarztes", fr: "Téléphone du vétérinaire", nl: "Telefoon dierenarts" }), value: ctx.contacts["vet"]?.["phone"] },
          { label: pick({ en: "Out-of-hours vet", no: "Vakttelefon veterinær", pl: "Weterynarz dyżurny", dk: "Vagtdyrlæge", se: "Jourhavande veterinär", fi: "Päivystävä eläinlääkäri", de: "Tierarzt außerhalb der Sprechzeiten", fr: "Vétérinaire de garde", nl: "Dierenarts buiten openingstijden" }), value: ctx.contacts["emergency-vet"]?.["clinic"] },
          { label: pick({ en: "Out-of-hours phone", no: "Vakttelefon", pl: "Telefon dyżurny", dk: "Vagttelefon", se: "Jourhavande telefon", fi: "Päivystyspuhelin", de: "Notrufnummer", fr: "Téléphone d'urgence", nl: "Noodtelefoon" }), value: ctx.contacts["emergency-vet"]?.["phone"] },
          { label: pick({ en: "Second contact", no: "Andre kontakt", pl: "Druga osoba kontaktowa", dk: "Anden kontaktperson", se: "Andra kontaktperson", fi: "Toinen yhteyshenkilö", de: "Zweiter Kontakt", fr: "Deuxième contact", nl: "Tweede contactpersoon" }), value: ctx.contacts["sitter"]?.["name"] },
          { label: pick({ en: "Second contact phone", no: "Telefon til andre kontakt", pl: "Telefon drugiej osoby", dk: "Telefon til anden kontaktperson", se: "Andra kontaktpersonens telefon", fi: "Toisen yhteyshenkilön puhelin", de: "Telefon des zweiten Kontakts", fr: "Téléphone du deuxième contact", nl: "Telefoon tweede contactpersoon" }), value: ctx.contacts["sitter"]?.["phone"] },
          { label: pick({ en: "Medication", no: "Medisiner", pl: "Leki", dk: "Medicin", se: "Medicin", fi: "Lääkitys", de: "Medikamente", fr: "Médicaments", nl: "Medicatie" }), value: ctx.info.medication, wide: true },
          { label: pick({ en: "Allergies", no: "Allergier", pl: "Alergie", dk: "Allergier", se: "Allergier", fi: "Allergiat", de: "Allergien", fr: "Allergies", nl: "Allergieën" }), value: ctx.info.allergies, wide: true },
          { label: pick({ en: "Insurance and policy number", no: "Forsikring og polisenummer", pl: "Ubezpieczenie i numer polisy", dk: "Forsikring og policenummer", se: "Försäkring och försäkringsnummer", fi: "Vakuutus ja vakuutusnumero", de: "Versicherung und Policennummer", fr: "Assurance et numéro de police", nl: "Verzekering en polisnummer" }), value: [ctx.details.insurer, ctx.details.policy].filter(Boolean).join(" · ") || undefined, wide: true },
        ],
      },
      {
        kind: "checklist",
        items: pick({
          en: [
            "Phone the vet before setting off, so they're ready",
            "Say the breed, weight and what happened",
            "Bring the packet or plant if something was swallowed",
            "Muzzle or towel a dog in pain, gently — pain makes any dog bite",
            "Keep them warm and still on the way",
            "Take this sheet with you",
          ],
          no: [
            "Ring veterinæren før du drar, så de er klare",
            "Si rase, vekt og hva som har skjedd",
            "Ta med pakningen eller planten hvis noe er spist",
            "Munnkurv eller håndkle på en hund med smerter, forsiktig — smerte får enhver hund til å bite",
            "Hold den varm og i ro på veien",
            "Ta med dette arket",
          ],
          pl: [
            "Zadzwoń do weterynarza przed wyjazdem, żeby był gotowy",
            "Podaj rasę, wagę i to, co się stało",
            "Zabierz opakowanie lub roślinę, jeśli pies coś połknął",
            "Delikatnie załóż kaganiec lub ręcznik psu w bólu — ból sprawia, że każdy pies może ugryźć",
            "W drodze trzymaj go w cieple i spokoju",
            "Zabierz tę kartkę ze sobą",
          ],
          dk: [
            "Ring til dyrlægen, før du tager afsted, så de er klar",
            "Sig race, vægt og hvad der er sket",
            "Medbring pakken eller planten, hvis noget er blevet slugt",
            "Brug mundkurv eller håndklæde på en hund i smerte, forsigtigt — smerte får enhver hund til at bide",
            "Hold den varm og stille på vejen",
            "Tag dette ark med dig",
          ],
          se: [
            "Ring veterinären innan ni åker, så de är redo",
            "Ange ras, vikt och vad som har hänt",
            "Ta med förpackningen eller växten om något har svalts",
            "Mundra eller handduk en hund i smärta, försiktigt – smärta får vilken hund som helst att bita",
            "Håll den varm och stilla på vägen",
            "Ta med detta papper",
          ],
          fi: [
            "Soita eläinlääkärille ennen lähtöä, jotta he ovat valmiina",
            "Kerro rotu, paino ja mitä on tapahtunut",
            "Tuo pakkaus tai kasvi, jos jotain on nielty",
            "Käytä kuonokoppaa tai pyyhettä kivuissa olevalle koiralle varovasti – kipu saa minkä tahansa koiran puremaan",
            "Pidä hänet lämpimänä ja paikallaan matkalla",
            "Ota tämä arkki mukaasi",
          ],
          de: [
            "Rufen Sie den Tierarzt an, bevor Sie losfahren, damit er bereit ist",
            "Nennen Sie Rasse, Gewicht und was passiert ist",
            "Bringen Sie die Packung oder Pflanze mit, wenn etwas verschluckt wurde",
            "Maulen oder handtuchartig einen Hund in Schmerzen, sanft – Schmerz lässt jeden Hund beißen",
            "Halten Sie ihn auf dem Weg warm und ruhig",
            "Nehmen Sie dieses Blatt mit",
          ],
          fr: [
            "Appelez le vétérinaire avant de partir, pour qu'il soit prêt",
            "Indiquez la race, le poids et ce qui s'est passé",
            "Apportez le paquet ou la plante si quelque chose a été avalé",
            "Mettez une muselière ou une serviette à un chien qui a mal, doucement – la douleur fait mordre n'importe quel chien",
            "Gardez-le au chaud et immobile en chemin",
            "Emportez cette feuille avec vous",
          ],
          nl: [
            "Bel de dierenarts voordat u vertrekt, zodat ze klaar zijn",
            "Geef de ras, het gewicht en wat er is gebeurd",
            "Neem de verpakking of plant mee als er iets is ingeslikt",
            "Snuit of handdoek een hond met pijn, voorzichtig – pijn zorgt ervoor dat elke hond bijt",
            "Houd hem warm en stil onderweg",
            "Neem dit blad mee"
          ]
        }),
        columns: 1,
      },
      {
        kind: "note",
        text: pick({
          en: "This sheet is owner-kept information, not medical advice. If you are unsure whether something is serious, phone a vet — they would always rather hear from you early.",
          no: "Dette arket er informasjon ført av eieren, ikke medisinske råd. Er du usikker på om noe er alvorlig, ring veterinær — de vil alltid heller høre fra deg tidlig.",
          pl: "Ta kartka to informacje prowadzone przez właściciela, nie porada medyczna. Jeśli nie masz pewności, czy to poważne, zadzwoń do weterynarza — zawsze woli usłyszeć o sprawie wcześniej.",
          dk: "Dette ark er ejerens egne oplysninger, ikke medicinske råd. Hvis du er usikker på, om noget er alvorligt, ring til en dyrlæge — de vil altid hellere høre fra dig tidligt.",
          se: "Det här pappret är ägarens egna uppgifter, inte medicinska råd. Om du är osäker på om något är allvarligt, ring en veterinär – de vill alltid hellre höra från dig tidigt.",
          fi: "Tämä arkki on omistajan pitämää tietoa, ei lääketieteellistä neuvontaa. Jos olet epävarma, onko jokin vakavaa, soita eläinlääkärille – he kuulevat mieluummin sinulta ajoissa.",
          de: "Dieses Blatt sind vom Besitzer geführte Informationen, keine medizinischen Ratschläge. Wenn Sie sich nicht sicher sind, ob etwas ernst ist, rufen Sie einen Tierarzt an – er hört lieber früh von Ihnen.",
          fr: "Cette feuille contient des informations tenues par le propriétaire, pas des conseils médicaux. Si vous n'êtes pas sûr si quelque chose est grave, appelez un vétérinaire – ils préféreront toujours vous entendre tôt.",
          nl: "Dit blad is door de eigenaar bijgehouden informatie, geen medisch advies. Als u niet zeker weet of iets ernstig is, bel dan een dierenarts – zij horen liever vroeg van u."
        }),
      },
    ],
  };
}

function travelSection(ctx: DocContext): DocSection {
  return {
    heading: pick({ en: "Travel checklist", no: "Reisesjekkliste", pl: "Lista podróżna", dk: "Rejsecheckliste", se: "Resechecklista", fi: "Matkustuslista", de: "Reisecheckliste", fr: "Liste de voyage", nl: "Reischecklijst" }),
    intro: pick({
      en: "Fill in the trip at the top, then work down the list the evening before. Rules differ by country — check the official requirements for where you're going in good time.",
      no: "Fyll inn turen øverst, og jobb deg nedover listen kvelden før. Reglene varierer fra land til land — sjekk de offisielle kravene for dit du skal i god tid.",
      pl: "Wpisz szczegóły wyjazdu na górze, a potem przejdź listę wieczorem wcześniej. Przepisy różnią się w zależności od kraju — sprawdź oficjalne wymagania dla celu podróży z wyprzedzeniem.",
      dk: "Udfyld turen øverst, og arbejd dig ned ad listen aftenen før. Reglerne varierer fra land til land — tjek de officielle krav for, hvor du skal hen, i god tid.",
      se: "Fyll i resan högst upp, och arbeta dig sedan nerför listan kvällen innan. Reglerna skiljer sig åt mellan länder – kontrollera de officiella kraven för vart du ska i god tid.",
      fi: "Täytä matka ylhäällä, ja käy sitten lista läpi edellisenä iltana. Säännökset vaihtelevat maittain – tarkista viralliset vaatimukset määränpäähäsi hyvissä ajoin.",
      de: "Füllen Sie die Reise oben aus und arbeiten Sie sich am Abend zuvor durch die Liste. Die Regeln unterscheiden sich je nach Land – prüfen Sie rechtzeitig die offiziellen Anforderungen für Ihr Reiseziel.",
      fr: "Remplissez le voyage en haut, puis parcourez la liste la veille au soir. Les règles diffèrent selon les pays – vérifiez les exigences officielles pour votre destination bien à l'avance.",
      nl: "Vul de reis bovenaan in, en werk dan de avond ervoor de lijst af. De regels verschillen per land – controleer ruim van tevoren de officiële vereisten voor uw bestemming."
    }),
    blocks: [
      {
        kind: "fields",
        fields: [
          { label: pick({ en: "Dog", no: "Hund", pl: "Pies", dk: "Hund", se: "Hund", fi: "Koira", de: "Hund", fr: "Chien", nl: "Hond" }), value: ctx.dog?.name },
          { label: pick({ en: "Where we're going", no: "Hvor vi skal", pl: "Dokąd jedziemy", dk: "Hvor vi skal hen", se: "Vart vi ska", fi: "Minne menemme", de: "Wohin wir reisen", fr: "Où nous allons", nl: "Waar we naartoe gaan" }) },
          { label: pick({ en: "Dates", no: "Datoer", pl: "Daty", dk: "Datoer", se: "Datum", fi: "Päivämäärät", de: "Daten", fr: "Dates", nl: "Data" }) },
          { label: pick({ en: "How we're travelling", no: "Hvordan vi reiser", pl: "Jak podróżujemy", dk: "Hvordan vi rejser", se: "Hur vi reser", fi: "Miten matkustamme", de: "Wie wir reisen", fr: "Comment nous voyageons", nl: "Hoe we reizen" }) },
          { label: pick({ en: "Where we're staying", no: "Hvor vi bor", pl: "Gdzie się zatrzymujemy", dk: "Hvor vi bor", se: "Var vi bor", fi: "Missä majatumme", de: "Wo wir übernachten", fr: "Où nous séjournons", nl: "Waar we verblijven" }), wide: true },
          { label: pick({ en: "Vet at the destination", no: "Veterinær på reisemålet", pl: "Weterynarz na miejscu", dk: "Dyrlæge på destinationen", se: "Veterinär på destinationen", fi: "Eläinlääkäri määränpäässä", de: "Tierarzt am Zielort", fr: "Vétérinaire à destination", nl: "Dierenarts op bestemming" }), wide: true },
        ],
      },
      {
        kind: "checklist",
        items: pick({
          en: [
            "Pet passport or health certificate, in date",
            "Microchip number matches the paperwork",
            "Rabies vaccination valid for the whole trip",
            "Tapeworm treatment if the destination requires it",
            "Insurance covers travel, and the policy number is written down",
            "Vet's phone number saved, plus one at the destination",
            "ID tag with a phone number that works abroad",
          ],
          no: [
            "Pass eller helseattest, gyldig",
            "Chipnummeret stemmer med papirene",
            "Rabiesvaksine gyldig hele turen",
            "Bendelormbehandling hvis reisemålet krever det",
            "Forsikringen dekker reise, og polisenummeret er skrevet ned",
            "Veterinærens telefonnummer lagret, pluss ett på reisemålet",
            "ID-brikke med et telefonnummer som virker i utlandet",
          ],
          pl: [
            "Paszport lub świadectwo zdrowia, ważne",
            "Numer mikroczipa zgadza się z dokumentami",
            "Szczepienie na wściekliznę ważne przez cały wyjazd",
            "Odrobaczenie na tasiemca, jeśli kraj docelowy tego wymaga",
            "Ubezpieczenie obejmuje podróż, a numer polisy jest zapisany",
            "Numer do weterynarza zapisany, plus jeden na miejscu",
            "Adresówka z numerem telefonu działającym za granicą",
          ],
          dk: [
            "Kæledyrspas eller sundhedscertifikat, gyldigt",
            "Chipnummeret stemmer overens med papirerne",
            "Rabiesvaccination gyldig for hele turen",
            "Bændelormbehandling, hvis destinationen kræver det",
            "Forsikringen dækker rejse, og policenummeret er skrevet ned",
            "Dyrlægens telefonnummer gemt, plus et på destinationen",
            "ID-mærke med et telefonnummer, der virker i udlandet",
          ],
          se: [
            "Husdjurspass eller hälsocertifikat, giltigt",
            "Chipnummeret stämmer med papperen",
            "Rabiesvaccination giltig för hela resan",
            "Bandmaskbehandling om destinationen kräver det",
            "Försäkringen täcker resa, och försäkringsnumret är nedskrivet",
            "Veterinärens telefonnummer sparat, plus ett på destinationen",
            "ID-bricka med ett telefonnummer som fungerar utomlands",
          ],
          fi: [
            "Lemmikkieläinpassi tai terveystodistus, voimassa",
            "Mikrosirun numero vastaa papereita",
            "Rabiesrokote voimassa koko matkan ajan",
            "Heisimatolääkitys, jos määränpää sitä vaatii",
            "Vakuutus kattaa matkan, ja vakuutusnumero on kirjattu",
            "Eläinlääkärin puhelinnumero tallennettu, sekä yksi määränpäässä",
            "ID-merkki puhelinnumerolla, joka toimii ulkomailla",
          ],
          de: [
            "Heimtierausweis oder Gesundheitszeugnis, gültig",
            "Mikrochipnummer stimmt mit den Papieren überein",
            "Tollwutimpfung gültig für die gesamte Reise",
            "Bandwurmkur, falls das Reiseziel dies erfordert",
            "Versicherung deckt die Reise ab, und die Policennummer ist aufgeschrieben",
            "Telefonnummer des Tierarztes gespeichert, plus eine am Zielort",
            "ID-Tag mit einer Telefonnummer, die im Ausland funktioniert",
          ],
          fr: [
            "Passeport pour animaux de compagnie ou certificat de santé, en cours de validité",
            "Le numéro de puce correspond aux documents",
            "Vaccination antirabique valide pour tout le voyage",
            "Traitement contre le ténia si la destination l'exige",
            "L'assurance couvre le voyage, et le numéro de police est écrit",
            "Numéro de téléphone du vétérinaire enregistré, plus un à destination",
            "Plaque d'identification avec un numéro de téléphone qui fonctionne à l'étranger",
          ],
          nl: [
            "Huisdierenpaspoort of gezondheidscertificaat, geldig",
            "Chipnummer komt overeen met de papieren",
            "Rabiësvaccinatie geldig voor de hele reis",
            "Lintwormbehandeling indien de bestemming dit vereist",
            "Verzekering dekt reizen, en het polisnummer is opgeschreven",
            "Telefoonnummer van de dierenarts opgeslagen, plus één op de bestemming",
            "ID-tag met een telefoonnummer dat in het buitenland werkt"
          ]
        }),
        columns: 1,
      },
      {
        kind: "checklist",
        items: pick({
          en: [
            "Food for the whole trip, measured out",
            "Bowls and a water bottle",
            "Lead, spare lead, harness",
            "Bed or blanket that smells of home",
            "Crate or car harness, fitted",
            "Poo bags, towel, brush",
            "Medication and a small first-aid kit",
            "Two favourite toys and a chew",
          ],
          no: [
            "Mat til hele turen, oppmålt",
            "Skåler og en vannflaske",
            "Bånd, reservebånd, sele",
            "Seng eller teppe som lukter hjem",
            "Bur eller bilsele, tilpasset",
            "Poser, håndkle, børste",
            "Medisiner og et lite førstehjelpssett",
            "To favorittleker og et tyggebein",
          ],
          pl: [
            "Karma na cały wyjazd, odmierzona",
            "Miski i butelka na wodę",
            "Smycz, zapasowa smycz, szelki",
            "Legowisko albo koc pachnący domem",
            "Transporter lub pas samochodowy, dopasowany",
            "Woreczki, ręcznik, szczotka",
            "Leki i mała apteczka",
            "Dwie ulubione zabawki i gryzak",
          ],
          dk: [
            "Mad til hele turen, afmålt",
            "Skåle og en vandflaske",
            "Line, reserve line, sele",
            "Seng eller tæppe, der lugter af hjem",
            "Transportbur eller sele til bilen, tilpasset",
            "Poser, håndklæde, børste",
            "Medicin og et lille førstehjælpskit",
            "To yndlingslegetøj og et tyggeben",
          ],
          se: [
            "Foder för hela resan, avmätt",
            "Skålar och en vattenflaska",
            "Koppel, reservkoppel, sele",
            "Säng eller filt som luktar hemma",
            "Bur eller bilsele, anpassad",
            "Bajspåsar, handduk, borste",
            "Mediciner och ett litet första hjälpen-kit",
            "Två favoritleksaker och ett tuggben",
          ],
          fi: [
            "Ruokaa koko matkalle, mitattuna",
            "Kupit ja vesipullo",
            "Hihna, varahihna, valjaat",
            "Sänky tai viltti, joka tuoksuu kodilta",
            "Kuljetuskoppa tai turvavaljaat autoon, asennettu",
            "Pissapussit, pyyhe, harja",
            "Lääkkeet ja pieni ensiapulaukku",
            "Kaksi suosikkilelua ja puruluu",
          ],
          de: [
            "Futter für die gesamte Reise, abgemessen",
            "Näpfe und eine Wasserflasche",
            "Leine, Ersatzleine, Geschirr",
            "Bett oder Decke, die nach Zuhause riecht",
            "Transportbox oder Autogeschirr, angepasst",
            "Kotbeutel, Handtuch, Bürste",
            "Medikamente und ein kleines Erste-Hilfe-Set",
            "Zwei Lieblingsspielzeuge und ein Kauspielzeug",
          ],
          fr: [
            "Nourriture pour tout le voyage, mesurée",
            "Gamelles et une bouteille d'eau",
            "Laisse, laisse de rechange, harnais",
            "Lit ou couverture qui sent la maison",
            "Caisse de transport ou harnais de voiture, ajusté",
            "Sacs à déjections, serviette, brosse",
            "Médicaments et une petite trousse de premiers secours",
            "Deux jouets préférés et une friandise à mâcher",
          ],
          nl: [
            "Voer voor de hele reis, afgemeten",
            "Bakjes en een waterfles",
            "Lijn, reserve lijn, tuigje",
            "Mand of deken die naar huis ruikt",
            "Reismand of autotuigje, passend",
            "Poepzakjes, handdoek, borstel",
            "Medicijnen en een kleine EHBO-kit",
            "Twee favoriete speeltjes en een kauwspeeltje"
          ]
        }),
        columns: 2,
      },
      {
        kind: "note",
        text: pick({
          en: "On the road: a break every two hours, water at every stop, and never leave a dog in a parked car in warm weather — it takes minutes, not hours.",
          no: "På veien: pause annenhver time, vann ved hvert stopp, og aldri la en hund være igjen i en parkert bil i varmt vær — det tar minutter, ikke timer.",
          pl: "W drodze: przerwa co dwie godziny, woda na każdym postoju i nigdy nie zostawiaj psa w zaparkowanym aucie w ciepły dzień — wystarczą minuty, nie godziny.",
          dk: "På vejen: en pause hver anden time, vand ved hvert stop, og lad aldrig en hund være alene i en parkeret bil i varmt vejr — det tager minutter, ikke timer.",
          se: "På vägen: en paus varannan timme, vatten vid varje stopp, och lämna aldrig en hund i en parkerad bil i varmt väder – det tar minuter, inte timmar.",
          fi: "Matkalla: tauko kahden tunnin välein, vettä jokaisella pysähdyksellä, ja älä koskaan jätä koiraa pysäköityyn autoon lämpimällä säällä – se vie minuutteja, ei tunteja.",
          de: "Unterwegs: alle zwei Stunden eine Pause, bei jedem Stopp Wasser, und lassen Sie einen Hund bei warmem Wetter niemals in einem geparkten Auto – das dauert Minuten, keine Stunden.",
          fr: "Sur la route : une pause toutes les deux heures, de l'eau à chaque arrêt, et ne laissez jamais un chien dans une voiture garée par temps chaud – cela prend des minutes, pas des heures.",
          nl: "Onderweg: elke twee uur een pauze, water bij elke stop, en laat een hond bij warm weer nooit achter in een geparkeerde auto – het duurt minuten, geen uren."
        }),
      },
      { kind: "lines", count: 5, label: pick({ en: "Anything else to remember", no: "Annet å huske", pl: "Co jeszcze zapamiętać", dk: "Andet at huske", se: "Något annat att komma ihåg", fi: "Muuta muistettavaa", de: "Sonstiges zu beachten", fr: "Autre chose à retenir", nl: "Nog iets om te onthouden" }) },
    ],
  };
}

function handoverSections(ctx: DocContext): DocSection[] {
  const name = ctx.dog?.name ?? pick({ en: "our dog", no: "hunden vår", pl: "nasz pies", dk: "vores hund", se: "vår hund", fi: "koiramme", de: "unser Hund", fr: "notre chien", nl: "onze hond" });
  return [
    {
      heading: pick({ en: `Caring for ${name}`, no: `Å passe ${name}`, pl: `Opieka nad ${name}`, dk: `At passe ${name}`, se: `Att ta hand om ${name}`, fi: `Hoitaa ${name}`, de: `Pflege von ${name}`, fr: `Prendre soin de ${name}`, nl: `Zorgen voor ${name}` }),
      intro: pick({
        en: "Everything someone would need if they're looking after your dog for a day or a fortnight.",
        no: "Alt noen trenger hvis de skal passe hunden din en dag eller to uker.",
        pl: "Wszystko, czego ktoś potrzebuje, jeśli zajmuje się twoim psem przez dzień albo dwa tygodnie.",
        dk: "Alt, hvad nogen har brug for, hvis de passer din hund i en dag eller fjorten dage.",
        se: "Allt någon skulle behöva om de tar hand om din hund i en dag eller en vecka.",
        fi: "Kaikki, mitä joku tarvitsee, jos hän hoitaa koiraasi päivän tai kaksi viikkoa.",
        de: "Alles, was jemand braucht, wenn er sich einen Tag oder zwei Wochen lang um Ihren Hund kümmert.",
        fr: "Tout ce dont quelqu'un aurait besoin s'il s'occupe de votre chien pendant une journée ou une quinzaine.",
        nl: "Alles wat iemand nodig heeft als hij of zij een dag of twee weken voor uw hond zorgt."
      }),
      blocks: [dogFields(ctx)],
    },
    feedingSection(ctx),
    { ...weekSection(ctx), heading: pick({ en: "A normal day and week", no: "En vanlig dag og uke", pl: "Zwykły dzień i tydzień", dk: "En normal dag og uge", se: "En vanlig dag och vecka", fi: "Normaali päivä ja viikko", de: "Ein normaler Tag und eine normale Woche", fr: "Une journée et une semaine normales", nl: "Een normale dag en week" }) },
    infoSection(ctx),
    ...contactBlocks(ctx).filter((s) =>
      [pick({ en: "Owner", no: "Eier", pl: "Właściciel", dk: "Ejer", se: "Ägare", fi: "Omistaja", de: "Besitzer", fr: "Propriétaire", nl: "Eigenaar" }), pick({ en: "Our vet", no: "Vår veterinær", pl: "Nasz weterynarz", dk: "Vores dyrlæge", se: "Vår veterinär", fi: "Meidän eläinlääkäri", de: "Unser Tierarzt", fr: "Notre vétérinaire", nl: "Onze dierenarts" }), pick({ en: "Out-of-hours vet", no: "Vakttelefon veterinær", pl: "Weterynarz dyżurny", dk: "Vagtdyrlæge", se: "Jourhavande veterinär", fi: "Päivystävä eläinlääkäri", de: "Tierarzt außerhalb der Sprechzeiten", fr: "Vétérinaire de garde", nl: "Dierenarts buiten openingstijden" })].includes(
        s.heading,
      ),
    ),
  ];
}

export const documents: DocSpec[] = [
  {
    id: "profile",
    get title() { return pick({ en: "Dog profile card", no: "Profilkort for hunden", pl: "Karta profilu psa", dk: "Hundeprofilkort", se: "Hundprofilkort", fi: "Koiran profiilikortti", de: "Hundeprofilkarte", fr: "Carte de profil du chien", nl: "Hondenprofielkaart" }); },
    get blurb() { return pick({ en: "One page with the essentials. Handy for sitters, boarding and travelling.", no: "Én side med det viktigste. Praktisk for hundepassere, hundepensjonat og reise.", pl: "Jedna strona z najważniejszymi informacjami. Przydatna dla opiekunów, hotelu dla psów i w podróży.", dk: "Én side med det vigtigste. Praktisk for hundepassere, hundepensionat og rejser.", se: "En sida med det viktigaste. Praktiskt för hundvakter, pensionat och resor.", fi: "Yksi sivu tärkeimmistä tiedoista. Kätevä hoitajille, majoitukseen ja matkustamiseen.", de: "Eine Seite mit dem Wesentlichen. Praktisch für Hundesitter, Pensionen und Reisen.", fr: "Une page avec l'essentiel. Pratique pour les gardiens, les pensions et les voyages.", nl: "Eén pagina met het essentiële. Handig voor oppassers, pensions en reizen." }); },
    build: (ctx) => [
      { heading: pick({ en: "My dog", no: "Min hund", pl: "Mój pies", dk: "Min hund", se: "Min hund", fi: "Minun koirani", de: "Mein Hund", fr: "Mon chien", nl: "Mijn hond" }), blocks: [dogFields(ctx)] },
      {
        heading: pick({ en: "In an emergency", no: "Ved en nødsituasjon", pl: "W nagłym wypadku", dk: "I en nødsituation", se: "Vid en nödsituation", fi: "Hätätilanteessa", de: "Im Notfall", fr: "En cas d'urgence", nl: "In geval van nood" }),
        blocks: [
          {
            kind: "fields",
            fields: [
              { label: pick({ en: "Owner", no: "Eier", pl: "Właściciel", dk: "Ejer", se: "Ägare", fi: "Omistaja", de: "Besitzer", fr: "Propriétaire", nl: "Eigenaar" }), value: ctx.contacts["owner"]?.["name"] },
              { label: pick({ en: "Phone", no: "Telefon", pl: "Telefon", dk: "Telefon", se: "Telefon", fi: "Puhelin", de: "Telefon", fr: "Téléphone", nl: "Telefoon" }), value: ctx.contacts["owner"]?.["phone"] },
              { label: pick({ en: "Vet", no: "Veterinær", pl: "Weterynarz", dk: "Dyrlæge", se: "Veterinär", fi: "Eläinlääkäri", de: "Tierarzt", fr: "Vétérinaire", nl: "Dierenarts" }), value: ctx.contacts["vet"]?.["clinic"] },
              { label: pick({ en: "Vet phone", no: "Veterinærens telefon", pl: "Telefon do weterynarza", dk: "Dyrlægens telefon", se: "Veterinärens telefon", fi: "Eläinlääkärin puhelin", de: "Telefon des Tierarztes", fr: "Téléphone du vétérinaire", nl: "Telefoon dierenarts" }), value: ctx.contacts["vet"]?.["phone"] },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "contacts",
    get title() { return pick({ en: "Important contacts", no: "Viktige kontakter", pl: "Ważne kontakty", dk: "Vigtige kontakter", se: "Viktiga kontakter", fi: "Tärkeät yhteystiedot", de: "Wichtige Kontakte", fr: "Contacts importants", nl: "Belangrijke contacten" }); },
    get blurb() { return pick({ en: "The people who help look after your dog, all on one sheet.", no: "Alle som hjelper til med å passe hunden din, på ett ark.", pl: "Wszyscy, którzy pomagają zajmować się twoim psem, na jednej kartce.", dk: "Alle, der hjælper med at passe din hund, på ét ark.", se: "Personerna som hjälper till att ta hand om din hund, allt på ett papper.", fi: "Ihmiset, jotka auttavat hoitamaan koiraasi, kaikki yhdellä arkilla.", de: "Die Leute, die helfen, sich um Ihren Hund zu kümmern, alles auf einem Blatt.", fr: "Les personnes qui aident à s'occuper de votre chien, tout sur une seule feuille.", nl: "De mensen die helpen zorgen voor uw hond, allemaal op één vel." }); },
    build: (ctx) => [{ heading: pick({ en: "My dog", no: "Min hund", pl: "Mój pies", dk: "Min hund", se: "Min hund", fi: "Minun koirani", de: "Mein Hund", fr: "Mon chien", nl: "Mijn hond" }), blocks: [dogFields(ctx)] }, ...contactBlocks(ctx)],
  },
  {
    id: "food",
    get title() { return pick({ en: "Food & feeding plan", no: "Mat- og fôringsplan", pl: "Plan jedzenia i karmienia", dk: "Mad- og fodringsplan", se: "Mat- och utfodringsplan", fi: "Ruoka- ja ruokintasuunnitelma", de: "Futter- und Fütterungsplan", fr: "Plan de nourriture et d'alimentation", nl: "Voedings- en voerplan" }); },
    get blurb() { return pick({ en: "What your dog eats, roughly how much, and a simple week to tick off.", no: "Hva hunden din spiser, omtrent hvor mye, og en enkel uke å krysse av.", pl: "Co je twój pies, mniej więcej ile, i prosty tydzień do odhaczania.", dk: "Hvad din hund spiser, cirka hvor meget, og en simpel uge at krydse af.", se: "Vad din hund äter, ungefär hur mycket, och en enkel vecka att bocka av.", fi: "Mitä koirasi syö, suunnilleen kuinka paljon, ja yksinkertainen viikko rastitettavaksi.", de: "Was Ihr Hund frisst, ungefähr wie viel, und eine einfache Woche zum Abhaken.", fr: "Ce que votre chien mange, à peu près combien, et une semaine simple à cocher.", nl: "Wat uw hond eet, ongeveer hoeveel, en een eenvoudige week om af te vinken." }); },
    build: (ctx) => [feedingSection(ctx)],
  },
  {
    id: "health",
    get title() { return pick({ en: "Health summary", no: "Helseoversikt", pl: "Podsumowanie zdrowia", dk: "Sundhedsoversigt", se: "Hälsosammanfattning", fi: "Terveyskatsaus", de: "Gesundheitsübersicht", fr: "Résumé de santé", nl: "Gezondheidsoverzicht" }); },
    get blurb() { return pick({ en: "Weight, medication and the things you'd want to remember.", no: "Vekt, medisiner og tingene du vil huske.", pl: "Waga, leki i sprawy, które warto zapamiętać.", dk: "Vægt, medicin og de ting, du vil huske.", se: "Vikt, medicin och de saker du vill komma ihåg.", fi: "Paino, lääkitys ja asiat, jotka haluat muistaa.", de: "Gewicht, Medikamente und die Dinge, an die Sie sich erinnern möchten.", fr: "Poids, médicaments et les choses dont vous voudriez vous souvenir.", nl: "Gewicht, medicijnen en de dingen die u wilt onthouden." }); },
    build: (ctx) => [healthSection(ctx)],
  },
  {
    id: "grooming",
    get title() { return pick({ en: "Grooming checklist", no: "Stellsjekkliste", pl: "Lista pielęgnacyjna", dk: "Pelspleje checkliste", se: "Pälsvårdschecklista", fi: "Turkinhoitoluettelo", de: "Fellpflege-Checkliste", fr: "Liste de toilettage", nl: "Vachtverzorgingschecklijst" }); },
    get blurb() { return pick({ en: "Teeth, coat, nails, ears — the everyday care rhythm.", no: "Tenner, pels, klør, ører — den daglige stellrytmen.", pl: "Zęby, sierść, pazury, uszy — codzienny rytm pielęgnacji.", dk: "Tænder, pels, kløer, ører — den daglige plejerutine.", se: "Tänder, päls, klor, öron – den dagliga skötselrytmen.", fi: "Hampaat, turkki, kynnet, korvat – päivittäinen hoitorytmi.", de: "Zähne, Fell, Krallen, Ohren – der tägliche Pflege-Rhythmus.", fr: "Dents, pelage, griffes, oreilles – le rythme de soins quotidiens.", nl: "Tanden, vacht, nagels, oren – het dagelijkse verzorgingsritme." }); },
    build: (ctx) => [groomingSection(ctx)],
  },
  {
    id: "training",
    get title() { return pick({ en: "Training plan", no: "Treningsplan", pl: "Plan treningowy", dk: "Træningsplan", se: "Träningsplan", fi: "Koulutussuunnitelma", de: "Trainingsplan", fr: "Plan d'entraînement", nl: "Trainingsplan" }); },
    get blurb() { return pick({ en: "This week's skills, with room to write how each session went.", no: "Ukens ferdigheter, med plass til å skrive hvordan hver økt gikk.", pl: "Umiejętności na ten tydzień, z miejscem na zapisanie, jak poszła każda sesja.", dk: "Ugens færdigheder, med plads til at skrive, hvordan hver session gik.", se: "Veckans färdigheter, med utrymme att skriva hur varje pass gick.", fi: "Tämän viikon taidot, tilaa kirjoittaa, miten kukin harjoitus sujui.", de: "Die Fähigkeiten dieser Woche, mit Platz, um zu schreiben, wie jede Sitzung verlief.", fr: "Les compétences de la semaine, avec de la place pour écrire comment chaque séance s'est déroulée.", nl: "De vaardigheden van deze week, met ruimte om te schrijven hoe elke sessie verliep." }); },
    build: (ctx) => [trainingSection(ctx)],
  },
  {
    id: "week",
    get title() { return pick({ en: "Weekly dog plan", no: "Ukentlig hundeplan", pl: "Tygodniowy plan dla psa", dk: "Ugentlig hundesplan", se: "Veckoplan för hunden", fi: "Viikoittainen koiraohjelma", de: "Wöchentlicher Hundplan", fr: "Plan hebdomadaire du chien", nl: "Wekelijkse hondenplan" }); },
    get blurb() { return pick({ en: "Your week at a glance — walks, training, food and care.", no: "Uken din på ett blikk — turer, trening, mat og stell.", pl: "Twój tydzień w jednym spojrzeniu — spacery, trening, jedzenie i pielęgnacja.", dk: "Din uge på et øjeblik — gåture, træning, mad og pleje.", se: "Din vecka i ett ögonkast – promenader, träning, mat och skötsel.", fi: "Viikkosi yhdellä silmäyksellä – kävelyt, koulutus, ruoka ja hoito.", de: "Ihre Woche im Überblick – Spaziergänge, Training, Futter und Pflege.", fr: "Votre semaine en un coup d'œil – promenades, entraînement, nourriture et soins.", nl: "Uw week in één oogopslag – wandelingen, training, voeding en verzorging." }); },
    build: (ctx) => [weekSection(ctx)],
  },
  {
    id: "planner",
    get title() { return pick({ en: "Blank weekly planner", no: "Tom ukeplanlegger", pl: "Pusty planer tygodniowy", dk: "Tom ugeplan", se: "Tom veckoplanerare", fi: "Tyhjä viikko-ohjelma", de: "Leerer Wochenplaner", fr: "Planificateur hebdomadaire vierge", nl: "Lege weekplanner" }); },
    get blurb() { return pick({ en: "Morning, afternoon, evening. Made for the fridge door.", no: "Morgen, ettermiddag, kveld. Laget for kjøleskapsdøren.", pl: "Rano, popołudnie, wieczór. Stworzony na drzwi lodówki.", dk: "Morgen, eftermiddag, aften. Lavet til køleskabsdøren.", se: "Morgon, eftermiddag, kväll. Gjort för kylskåpsdörren.", fi: "Aamu, iltapäivä, ilta. Tehty jääkaapin oveen.", de: "Morgen, Nachmittag, Abend. Für die Kühlschranktür gemacht.", fr: "Matin, après-midi, soir. Fait pour la porte du réfrigérateur.", nl: "Ochtend, middag, avond. Gemaakt voor op de koelkastdeur." }); },
    build: (ctx) => [
      {
        heading: pick({ en: "Our week", no: "Vår uke", pl: "Nasz tydzień", dk: "Vores uge", se: "Vår vecka", fi: "Viikkoni", de: "Unsere Woche", fr: "Notre semaine", nl: "Onze week" }),
        intro: pick({ en: "Write it in however suits you.", no: "Skriv det inn slik det passer deg.", pl: "Wpisz to tak, jak ci pasuje.", dk: "Skriv det ind, som det passer dig.", se: "Skriv in det som passar dig.", fi: "Kirjoita se niin kuin sinulle sopii.", de: "Schreiben Sie es so ein, wie es Ihnen passt.", fr: "Écrivez-le comme bon vous semble.", nl: "Schrijf het in zoals het u uitkomt." }),
        blocks: [
          {
            kind: "planner",
            days: ctx.week.map((d) => d.name),
            rows: pick({ en: ["Morning", "Afternoon", "Evening"], no: ["Morgen", "Ettermiddag", "Kveld"], pl: ["Rano", "Popołudnie", "Wieczór"], dk: ["Morgen", "Eftermiddag", "Aften"], se: ["Morgon", "Eftermiddag", "Kväll"], fi: ["Aamu", "Iltapäivä", "Ilta"], de: ["Morgen", "Nachmittag", "Abend"], fr: ["Matin", "Après-midi", "Soir"], nl: ["Ochtend", "Middag", "Avond"] }),
          },
        ],
      },
    ],
  },
  {
    id: "vet",
    get title() { return pick({ en: "Vet visit notes", no: "Notater fra veterinærbesøk", pl: "Notatki z wizyty u weterynarza", dk: "Noter fra dyrlægebesøg", se: "Anteckningar från veterinärbesök", fi: "Eläinlääkärikäynnin muistiinpanot", de: "Notizen zum Tierarztbesuch", fr: "Notes de visite vétérinaire", nl: "Notities dierenartsbezoek" }); },
    get blurb() { return pick({ en: "Questions to ask and space for what you're told. Take it with you.", no: "Spørsmål å stille og plass til det du får vite. Ta det med deg.", pl: "Pytania do zadania i miejsce na to, co usłyszysz. Zabierz to ze sobą.", dk: "Spørgsmål at stille og plads til, hvad du får at vide. Tag det med dig.", se: "Frågor att ställa och utrymme för vad du får höra. Ta med det.", fi: "Kysyttävät asiat ja tilaa sille, mitä sinulle kerrotaan. Ota se mukaasi.", de: "Fragen, die Sie stellen können, und Platz für das, was Ihnen gesagt wird. Nehmen Sie es mit.", fr: "Questions à poser et espace pour ce qu'on vous dit. Emportez-le avec vous.", nl: "Vragen om te stellen en ruimte voor wat u te horen krijgt. Neem het mee." }); },
    build: (ctx) => [vetSection(ctx)],
  },
  {
    id: "emergency",
    get title() { return pick({ en: "Emergency contacts", no: "Nødkontakter", pl: "Kontakty awaryjne", dk: "Nødkontakter", se: "Nödkontakter", fi: "Hätäyhteystiedot", de: "Notfallkontakte", fr: "Contacts d'urgence", nl: "Noodcontacten" }); },
    get blurb() { return pick({ en: "One sheet for the fridge and the car: who to call, and what to say.", no: "Ett ark til kjøleskapet og bilen: hvem du skal ringe, og hva du skal si.", pl: "Jedna kartka na lodówkę i do auta: do kogo dzwonić i co powiedzieć.", dk: "Ét ark til køleskabet og bilen: hvem du skal ringe til, og hvad du skal sige.", se: "Ett papper för kylskåpet och bilen: vem du ska ringa, och vad du ska säga.", fi: "Yksi arkki jääkaappiin ja autoon: kenelle soittaa ja mitä sanoa.", de: "Ein Blatt für den Kühlschrank und das Auto: wen Sie anrufen und was Sie sagen sollen.", fr: "Une feuille pour le réfrigérateur et la voiture : qui appeler et quoi dire.", nl: "Eén vel voor de koelkast en de auto: wie te bellen en wat te zeggen." }); },
    build: (ctx) => [emergencySection(ctx)],
  },
  {
    id: "travel",
    get title() { return pick({ en: "Travel checklist", no: "Reisesjekkliste", pl: "Lista podróżna", dk: "Rejsecheckliste", se: "Resechecklista", fi: "Matkustuslista", de: "Reisecheckliste", fr: "Liste de voyage", nl: "Reischecklijst" }); },
    get blurb() { return pick({ en: "Papers, packing and the car — everything to tick off before you leave.", no: "Papirer, pakking og bilen — alt du krysser av før du drar.", pl: "Dokumenty, pakowanie i auto — wszystko do odhaczenia przed wyjazdem.", dk: "Papirer, pakning og bilen — alt du skal krydse af, før du tager afsted.", se: "Papper, packning och bilen – allt att bocka av innan du åker.", fi: "Paperit, pakkaaminen ja auto – kaikki rastitettavaksi ennen lähtöä.", de: "Papiere, Packen und das Auto – alles zum Abhaken, bevor Sie losfahren.", fr: "Papiers, bagages et la voiture – tout à cocher avant de partir.", nl: "Papieren, bagage en de auto – alles om af te vinken voordat u vertrekt." }); },
    build: (ctx) => [travelSection(ctx)],
  },
  {
    id: "info",
    get title() { return pick({ en: "Important information", no: "Viktig informasjon", pl: "Ważne informacje", dk: "Vigtig information", se: "Viktig information", fi: "Tärkeät tiedot", de: "Wichtige Informationen", fr: "Informations importantes", nl: "Belangrijke informatie" }); },
    get blurb() { return pick({ en: "Allergies, medication, fears, favourites and special instructions.", no: "Allergier, medisiner, frykt, favoritter og spesielle instrukser.", pl: "Alergie, leki, lęki, ulubione rzeczy i specjalne wskazówki.", dk: "Allergier, medicin, frygt, favoritter og særlige instruktioner.", se: "Allergier, medicin, rädslor, favoriter och särskilda instruktioner.", fi: "Allergiat, lääkitys, pelot, suosikit ja erityisohjeet.", de: "Allergien, Medikamente, Ängste, Vorlieben und besondere Anweisungen.", fr: "Allergies, médicaments, peurs, favoris et instructions spéciales.", nl: "Allergieën, medicijnen, angsten, favorieten en speciale instructies." }); },
    build: (ctx) => [infoSection(ctx)],
  },
  {
    id: "handover",
    get title() { return pick({ en: "Caring for my dog", no: "Å passe hunden min", pl: "Opieka nad moim psem", dk: "At passe min hund", se: "Att ta hand om min hund", fi: "Koirani hoitaminen", de: "Pflege meines Hundes", fr: "Prendre soin de mon chien", nl: "Zorgen voor mijn hond" }); },
    get blurb() { return pick({ en: "For family, a friend, a sitter or boarding. Everything they'd need.", no: "For familie, en venn, hundepasser eller pensjonat. Alt de trenger.", pl: "Dla rodziny, przyjaciela, opiekuna albo hotelu dla psów. Wszystko, czego potrzebują.", dk: "For familie, en ven, en hundepasser eller pensionat. Alt, hvad de har brug for.", se: "För familj, en vän, en hundvakt eller pensionat. Allt de skulle behöva.", fi: "Perheelle, ystävälle, hoitajalle tai majoitukseen. Kaikki, mitä he tarvitsevat.", de: "Für Familie, Freunde, Hundesitter oder Pension. Alles, was sie brauchen.", fr: "Pour la famille, un ami, un gardien ou une pension. Tout ce dont ils auraient besoin.", nl: "Voor familie, een vriend, een oppas of pension. Alles wat ze nodig hebben." }); },
    build: handoverSections,
  },
];

export const documentsById: Record<string, DocSpec> = Object.fromEntries(
  documents.map((d) => [d.id, d]),
);

/** The complete pack, in the order it reads best on paper. */
export const packOrder = ["profile", "contacts", "emergency", "food", "health", "grooming", "training", "week", "vet", "travel", "info"];

export function buildDocument(ids: string[], ctx: DocContext): DocSection[] {
  const ordered = packOrder
    .filter((id) => ids.includes(id))
    .concat(ids.filter((id) => !packOrder.includes(id)));
  return ordered.flatMap((id, index) => {
    const spec = documentsById[id];
    if (!spec) return [];
    return spec.build(ctx).map((section, i) => ({
      ...section,
      newPage: section.newPage ?? (i === 0 && index > 0),
    }));
  });
}
