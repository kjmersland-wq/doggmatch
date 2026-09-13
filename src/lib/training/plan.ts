import { getLessons } from "@/data/training/lessons";
import type { Lesson, SkillStatus } from "@/data/training/types";
import { breedById } from "@/data/breeds";
import { isMixedDog, knownBreedIds } from "@/lib/dogs/profile";
import { pick } from "@/i18n";
import type { DogProfile } from "./store";

/**
 * Deterministic, explainable recommendations — no model, no API call.
 * The same dog, the same progress and the same day always produce the same
 * plan, and every point of the score can be traced back to a reason.
 */
export interface ScoredLesson {
  lesson: Lesson;
  score: number;
  /** Short, human reason we put this in front of you today. */
  reason: string;
}

const levelOrder = ["beginner", "building", "intermediate", "advanced"] as const;

export function scoreLesson(
  lesson: Lesson,
  dog: DogProfile | undefined,
  progress: Record<string, SkillStatus>,
): ScoredLesson {
  const t = planCopy();
  let score = 10;
  let reason = t.startingPoint;

  const status = progress[lesson.id] ?? "not-started";
  if (status === "learned") score -= 30;
  if (status === "getting-there") score += 6;
  if (status === "practising") score += 10;

  if (dog) {
    if ((dog.goals ?? []).some((g) => lesson.goals.includes(g))) {
      score += 24;
      reason = t.yourGoal;
    }
    if (lesson.ageStages.includes(dog.ageStage)) {
      score += 10;
      if (reason === t.startingPoint) reason = ageReason(dog.ageStage);
    } else {
      score -= 14;
    }

    const gap = levelOrder.indexOf(lesson.level) - levelOrder.indexOf(dog.level);
    if (gap === 0) score += 8;
    else if (gap === 1) score += 4;
    else if (gap > 1) score -= 12;

    if (dog.experience === "first-dog" && lesson.level === "beginner") score += 5;

    const relevantBreed = knownBreedIds(dog).find((id) => lesson.breedRelevance?.includes(id));
    if (relevantBreed) {
      // A mix only gets part of the nudge — the breeds behind it are background, not a label.
      score += isMixedDog(dog) ? 4 : 8;
      const breed = breedById[relevantBreed];
      if (breed) {
        reason = isMixedDog(dog)
          ? pick({
              en: `Often useful with ${breed.name} in the mix, though every dog is their own dog`,
              no: `Ofte nyttig når det er ${breed.name} i blandingen, men hver hund er sin egen`,
              pl: `Często przydatne, gdy w mieszance jest ${breed.name}, choć każdy pies jest inny`,
              dk: `Ofte nyttigt, når der er ${breed.name} i blandingen, men hver hund er sin egen`,
              se: `Ofta bra när det finns ${breed.name} i blandningen, men varje hund är sin egen`,
              fi: `Usein hyödyllinen, kun sekoituksessa on ${breed.name}, mutta jokainen koira on omanlaisensa`,
              de: `Oft hilfreich, wenn ${breed.name} in der Mischung steckt, doch jeder Hund ist sein eigener Hund`,
              fr: `Souvent utile quand il y a du ${breed.name} dans le mélange, mais chaque chien reste unique`,
              nl: `Vaak nuttig als er ${breed.name} in de mix zit, al is elke hond zijn eigen hond`,
            })
          : pick({
              en: `Often suits a ${breed.name}, though every dog is their own dog`,
              no: `Passer ofte en ${breed.name}, men hver hund er sin egen`,
              pl: `Często pasuje do ${breed.name}, choć każdy pies jest inny`,
              dk: `Passer ofte en ${breed.name}, men hver hund er sin egen`,
              se: `Passar ofta en ${breed.name}, men varje hund är sin egen`,
              fi: `Sopii usein rodulle ${breed.name}, mutta jokainen koira on omanlaisensa`,
              de: `Passt oft zu einem ${breed.name}, doch jeder Hund ist sein eigener Hund`,
              fr: `Convient souvent à un ${breed.name}, mais chaque chien reste unique`,
              nl: `Past vaak bij een ${breed.name}, al is elke hond zijn eigen hond`,
            });
      }
    }
    if (status === "practising") reason = t.inProgress;
  }

  return { lesson, score, reason };
}

export function rankLessons(
  dog: DogProfile | undefined,
  progress: Record<string, SkillStatus>,
): ScoredLesson[] {
  return getLessons()
    .map((l) => scoreLesson(l, dog, progress))
    .sort((a, b) => b.score - a.score || a.lesson.id.localeCompare(b.lesson.id));
}

/** One to three short sessions for today. Rotates gently, day by day. */
export function todaysPlan(
  dog: DogProfile | undefined,
  progress: Record<string, SkillStatus>,
  day: string,
): ScoredLesson[] {
  const ranked = rankLessons(dog, progress);
  const pool = ranked.slice(0, 6);
  if (pool.length === 0) return [];
  const offset = dayIndex(day) % pool.length;
  const rotated = [...pool.slice(offset), ...pool.slice(0, offset)];
  return rotated.slice(0, 3);
}

function dayIndex(day: string): number {
  return day.split("-").reduce((sum, part) => sum + Number(part), 0);
}

function ageReason(stage: DogProfile["ageStage"]): string {
  const t = planCopy();
  return t.age[stage] ?? t.age.adult;
}

/** Reasons shown next to today's suggestions, in the reader's language. */
function planCopy() {
  return pick({
    en: {
      startingPoint: "A good place to start",
      yourGoal: "You said you'd like to work on this",
      inProgress: "You're in the middle of this one",
      age: {
        puppy: "Worth doing early, while everything is new",
        adolescent: "The age where this one really pays off",
        adult: "Useful at any age",
        senior: "Gentle, and lovely for an older dog",
      } as Record<DogProfile["ageStage"], string>,
    },
    no: {
      startingPoint: "Et fint sted å begynne",
      yourGoal: "Du sa at dere har lyst til å jobbe med dette",
      inProgress: "Denne står dere midt oppi nå",
      age: {
        puppy: "Verdt å ta tidlig, mens alt er nytt",
        adolescent: "Alderen der denne virkelig lønner seg",
        adult: "Nyttig i alle aldre",
        senior: "Rolig, og fin for en eldre hund",
      } as Record<DogProfile["ageStage"], string>,
    },
    pl: {
      startingPoint: "Dobre miejsce, by zacząć",
      yourGoal: "Wspomnieliście, że chcielibyście nad tym popracować",
      inProgress: "Jesteście w trakcie tego właśnie teraz",
      age: {
        puppy: "Warto zająć się tym wcześnie, gdy wszystko jest nowe",
        adolescent: "Wiek, w którym to naprawdę się opłaca",
        adult: "Przydatne w każdym wieku",
        senior: "Łagodne i miłe dla starszego psa",
      } as Record<DogProfile["ageStage"], string>,
    },
    dk: {
      startingPoint: "Et godt sted at starte",
      yourGoal: "I sagde, at I gerne ville arbejde med det her",
      inProgress: "Det her er I midt i lige nu",
      age: {
        puppy: "Værd at gøre tidligt, mens alt er nyt",
        adolescent: "Alderen hvor det her virkelig betaler sig",
        adult: "Nyttigt i alle aldre",
        senior: "Roligt, og dejligt for en ældre hund",
      } as Record<DogProfile["ageStage"], string>,
    },
    se: {
      startingPoint: "Ett bra ställe att börja på",
      yourGoal: "Ni sa att ni ville jobba med det här",
      inProgress: "Det här håller ni på med just nu",
      age: {
        puppy: "Värt att göra tidigt, medan allt är nytt",
        adolescent: "Åldern där det här verkligen lönar sig",
        adult: "Användbart i alla åldrar",
        senior: "Lugnt, och skönt för en äldre hund",
      } as Record<DogProfile["ageStage"], string>,
    },
    fi: {
      startingPoint: "Hyvä paikka aloittaa",
      yourGoal: "Kerroit haluavasi harjoitella juuri tätä",
      inProgress: "Tätä harjoittelette parhaillaan",
      age: {
        puppy: "Kannattaa aloittaa varhain, kun kaikki on vielä uutta",
        adolescent: "Ikävaihe, jossa tästä on eniten hyötyä",
        adult: "Hyödyllinen missä iässä tahansa",
        senior: "Rauhallinen ja mukava vanhemmalle koiralle",
      } as Record<DogProfile["ageStage"], string>,
    },
    de: {
      startingPoint: "Ein guter Ausgangspunkt",
      yourGoal: "Sie sagten, daran möchten Sie gerne arbeiten",
      inProgress: "Daran arbeiten Sie gerade",
      age: {
        puppy: "Lohnt sich früh, solange alles noch neu ist",
        adolescent: "Das Alter, in dem sich das wirklich auszahlt",
        adult: "Nützlich in jedem Alter",
        senior: "Sanft, und schön für einen älteren Hund",
      } as Record<DogProfile["ageStage"], string>,
    },
    fr: {
      startingPoint: "Un bon point de départ",
      yourGoal: "Vous avez dit vouloir travailler là-dessus",
      inProgress: "Vous êtes en plein dedans en ce moment",
      age: {
        puppy: "Utile à faire tôt, pendant que tout est encore nouveau",
        adolescent: "L'âge où cela porte vraiment ses fruits",
        adult: "Utile à tout âge",
        senior: "En douceur, et agréable pour un chien plus âgé",
      } as Record<DogProfile["ageStage"], string>,
    },
    nl: {
      startingPoint: "Een goed startpunt",
      yourGoal: "U zei hier graag aan te willen werken",
      inProgress: "Hier bent u nu middenin bezig",
      age: {
        puppy: "De moeite waard om vroeg te doen, terwijl alles nog nieuw is",
        adolescent: "De leeftijd waarop dit echt zijn vruchten afwerpt",
        adult: "Nuttig op elke leeftijd",
        senior: "Rustig, en fijn voor een oudere hond",
      } as Record<DogProfile["ageStage"], string>,
    },
  });
}

type AgeFocus = Record<DogProfile["ageStage"], { title: string; body: string; points: string[] }>;

const ageFocusEn: AgeFocus = {
  puppy: {
    title: "Puppyhood",
    body: "Everything is new, and most of what you do now is simply showing your puppy that the world is a friendly place.",
    points: ["Confidence", "Meeting the world gently", "Learning to talk to each other", "House training", "Being handled", "Sleep and calm"],
  },
  adolescent: {
    title: "The teenage months",
    body: "Things that worked last month may stop working for a while. It passes. Consistency and patience carry you through.",
    points: ["Waiting and self-control", "Working around distractions", "Recall, again and again", "Walking nicely", "Staying consistent"],
  },
  adult: {
    title: "The grown-up years",
    body: "Now it's about making good habits reliable, and keeping life interesting.",
    points: ["Reliability", "Everyday manners", "New skills for fun", "Enrichment"],
  },
  senior: {
    title: "The older years",
    body: "Older dogs still love to learn. Keep it short, gentle and kind to stiff joints.",
    points: ["Gentle brain games", "Clear communication", "Activities that suit their body", "Keeping familiar skills alive"],
  },
};

const ageFocusNo: AgeFocus = {
  puppy: {
    title: "Valpetiden",
    body: "Alt er nytt, og det meste du gjør nå handler rett og slett om å vise valpen at verden er et vennlig sted.",
    points: ["Trygghet", "Møte verden rolig", "Lære å snakke sammen", "Renslighet", "Bli håndtert", "Søvn og ro"],
  },
  adolescent: {
    title: "Ungdomsmånedene",
    body: "Ting som fungerte forrige måned kan slutte å virke en stund. Det går over. Forutsigbarhet og tålmodighet bærer dere gjennom.",
    points: ["Vente og styre seg", "Jobbe med forstyrrelser rundt", "Innkalling, om og om igjen", "Gå pent i bånd", "Være konsekvent"],
  },
  adult: {
    title: "De voksne årene",
    body: "Nå handler det om å gjøre gode vaner pålitelige, og holde livet interessant.",
    points: ["Pålitelighet", "Hverdagsmanerer", "Nye ting for moro skyld", "Berikelse"],
  },
  senior: {
    title: "De eldre årene",
    body: "Eldre hunder elsker fortsatt å lære. Hold det kort, rolig og skånsomt for stive ledd.",
    points: ["Rolige hjernespill", "Tydelig kommunikasjon", "Aktiviteter som passer kroppen", "Holde kjente ferdigheter ved like"],
  },
};

const ageFocusPl: AgeFocus = {
  puppy: {
    title: "Czas szczenięcy",
    body: "Wszystko jest nowe, a większość tego, co robisz teraz, to po prostu pokazywanie szczeniakowi, że świat jest przyjaznym miejscem.",
    points: ["Pewność siebie", "Łagodne poznawanie świata", "Uczenie się wzajemnego porozumiewania", "Nauka czystości", "Oswajanie z dotykiem", "Sen i spokój"],
  },
  adolescent: {
    title: "Miesiące dorastania",
    body: "To, co działało w zeszłym miesiącu, może przez jakiś czas przestać działać. To mija. Konsekwencja i cierpliwość pomogą przez to przejść.",
    points: ["Czekanie i samokontrola", "Praca przy rozproszeniach", "Przywoływanie, wciąż od nowa", "Ładne chodzenie na smyczy", "Zachowanie konsekwencji"],
  },
  adult: {
    title: "Lata dorosłości",
    body: "Teraz chodzi o to, by dobre nawyki stały się pewne, i by życie pozostawało ciekawe.",
    points: ["Niezawodność", "Codzienne maniery", "Nowe umiejętności dla przyjemności", "Wzbogacanie dnia"],
  },
  senior: {
    title: "Lata seniora",
    body: "Starsze psy nadal uwielbiają się uczyć. Trzymaj się krótkich, łagodnych sesji, oszczędzających sztywne stawy.",
    points: ["Łagodne zagadki umysłowe", "Jasna komunikacja", "Aktywności dopasowane do ciała", "Podtrzymywanie znanych umiejętności"],
  },
};

const ageFocusDk: AgeFocus = {
  puppy: {
    title: "Hvalpetiden",
    body: "Alt er nyt, og det meste af det, du gør nu, handler simpelthen om at vise din hvalp, at verden er et venligt sted.",
    points: ["Tryghed", "At møde verden roligt", "At lære at tale sammen", "Renlighedstræning", "At blive håndteret", "Søvn og ro"],
  },
  adolescent: {
    title: "Teenageperioden",
    body: "Ting, der virkede sidste måned, kan holde op med at virke et stykke tid. Det går over. Konsekvens og tålmodighed bærer jer igennem.",
    points: ["At vente og styre sig selv", "At arbejde med forstyrrelser omkring", "Indkald, igen og igen", "At gå pænt i snor", "At være konsekvent"],
  },
  adult: {
    title: "De voksne år",
    body: "Nu handler det om at gøre gode vaner pålidelige og holde livet interessant.",
    points: ["Pålidelighed", "Hverdagsmanerer", "Nye færdigheder for sjov", "Berigelse"],
  },
  senior: {
    title: "De ældre år",
    body: "Ældre hunde elsker stadig at lære. Hold det kort, roligt og skånsomt for stive led.",
    points: ["Rolige hjernelege", "Tydelig kommunikation", "Aktiviteter der passer til kroppen", "At holde kendte færdigheder ved lige"],
  },
};

const ageFocusSe: AgeFocus = {
  puppy: {
    title: "Valptiden",
    body: "Allt är nytt, och det mesta du gör nu handlar helt enkelt om att visa din valp att världen är en vänlig plats.",
    points: ["Trygghet", "Att möta världen lugnt", "Att lära sig prata med varandra", "Renlighetsträning", "Att bli hanterad", "Sömn och lugn"],
  },
  adolescent: {
    title: "Tonårsmånaderna",
    body: "Sådant som fungerade förra månaden kan sluta fungera ett tag. Det går över. Konsekvens och tålamod bär er igenom.",
    points: ["Att vänta och styra sig själv", "Att jobba med distraktioner runt omkring", "Inkallning, om och om igen", "Att gå fint i koppel", "Att vara konsekvent"],
  },
  adult: {
    title: "De vuxna åren",
    body: "Nu handlar det om att göra bra vanor pålitliga, och hålla livet intressant.",
    points: ["Pålitlighet", "Vardagsmanér", "Nya färdigheter för skojs skull", "Berikning"],
  },
  senior: {
    title: "De äldre åren",
    body: "Äldre hundar älskar fortfarande att lära sig. Håll det kort, lugnt och skonsamt för stela leder.",
    points: ["Lugna hjärnlekar", "Tydlig kommunikation", "Aktiviteter som passar kroppen", "Att hålla kända färdigheter vid liv"],
  },
};

const ageFocusFi: AgeFocus = {
  puppy: {
    title: "Pentuaika",
    body: "Kaikki on uutta, ja suurin osa siitä, mitä teet nyt, on yksinkertaisesti sen näyttämistä pennulle, että maailma on ystävällinen paikka.",
    points: ["Itseluottamus", "Maailmaan tutustuminen rauhassa", "Keskinäisen kommunikoinnin opettelu", "Siisteyskasvatus", "Käsittelyyn totuttelu", "Uni ja rauhoittuminen"],
  },
  adolescent: {
    title: "Murrosikäkuukaudet",
    body: "Se, mikä toimi viime kuussa, saattaa lakata toimimasta hetkeksi. Se menee ohi. Johdonmukaisuus ja kärsivällisyys vievät teidät läpi.",
    points: ["Odottaminen ja itsehillintä", "Työskentely häiriötekijöiden keskellä", "Takaisinkutsu, yhä uudelleen", "Kaunis kävely hihnassa", "Johdonmukaisena pysyminen"],
  },
  adult: {
    title: "Aikuisvuodet",
    body: "Nyt on kyse hyvien tapojen vakiinnuttamisesta ja elämän pitämisestä mielenkiintoisena.",
    points: ["Luotettavuus", "Arjen käytöstavat", "Uusia taitoja huvin vuoksi", "Virikkeellisyys"],
  },
  senior: {
    title: "Vanhat vuodet",
    body: "Vanhemmatkin koirat rakastavat oppimista. Pidä harjoitukset lyhyinä, rauhallisina ja jäykille nivelille sopivina.",
    points: ["Rauhalliset aivopelit", "Selkeä viestintä", "Keholle sopivat aktiviteetit", "Tuttujen taitojen ylläpito"],
  },
};

const ageFocusDe: AgeFocus = {
  puppy: {
    title: "Die Welpenzeit",
    body: "Alles ist neu, und das meiste, was Sie jetzt tun, zeigt Ihrem Welpen einfach, dass die Welt ein freundlicher Ort ist.",
    points: ["Selbstvertrauen", "Der Welt sanft begegnen", "Miteinander kommunizieren lernen", "Stubenreinheit", "Sich anfassen lassen", "Schlaf und Ruhe"],
  },
  adolescent: {
    title: "Die Flegeljahre",
    body: "Was letzten Monat funktionierte, klappt vielleicht eine Weile nicht mehr. Das geht vorbei. Konsequenz und Geduld tragen Sie hindurch.",
    points: ["Warten und Selbstbeherrschung", "Arbeiten bei Ablenkung", "Rückruf, wieder und wieder", "Locker an der Leine gehen", "Konsequent bleiben"],
  },
  adult: {
    title: "Die erwachsenen Jahre",
    body: "Jetzt geht es darum, gute Gewohnheiten verlässlich zu machen und das Leben interessant zu halten.",
    points: ["Zuverlässigkeit", "Alltagsmanieren", "Neue Fähigkeiten zum Spaß", "Beschäftigung"],
  },
  senior: {
    title: "Die späteren Jahre",
    body: "Ältere Hunde lieben es weiterhin zu lernen. Halten Sie es kurz, sanft und schonend für steife Gelenke.",
    points: ["Sanfte Denkspiele", "Klare Kommunikation", "Aktivitäten, die zum Körper passen", "Vertraute Fähigkeiten lebendig halten"],
  },
};

const ageFocusFr: AgeFocus = {
  puppy: {
    title: "La période chiot",
    body: "Tout est nouveau, et l'essentiel de ce que vous faites maintenant consiste simplement à montrer à votre chiot que le monde est un endroit accueillant.",
    points: ["Confiance", "Découvrir le monde en douceur", "Apprendre à se comprendre", "Propreté", "Se laisser manipuler", "Sommeil et calme"],
  },
  adolescent: {
    title: "Les mois d'adolescence",
    body: "Ce qui fonctionnait le mois dernier peut cesser de fonctionner pendant un moment. Cela passe. La constance et la patience vous portent.",
    points: ["Attendre et se maîtriser", "Travailler malgré les distractions", "Le rappel, encore et encore", "Marcher calmement en laisse", "Rester cohérent"],
  },
  adult: {
    title: "Les années adultes",
    body: "Il s'agit maintenant de rendre les bonnes habitudes fiables, et de garder la vie intéressante.",
    points: ["Fiabilité", "Bonnes manières au quotidien", "Nouvelles compétences pour le plaisir", "Enrichissement"],
  },
  senior: {
    title: "Les années seniors",
    body: "Les chiens âgés adorent toujours apprendre. Restez bref, doux, et ménagez les articulations raides.",
    points: ["Jeux de réflexion en douceur", "Communication claire", "Activités adaptées à leur corps", "Entretenir les compétences acquises"],
  },
};

const ageFocusNl: AgeFocus = {
  puppy: {
    title: "De puppytijd",
    body: "Alles is nieuw, en het meeste wat u nu doet, laat uw puppy simpelweg zien dat de wereld een vriendelijke plek is.",
    points: ["Zelfvertrouwen", "Rustig kennismaken met de wereld", "Leren communiceren met elkaar", "Zindelijkheid", "Wennen aan aanraking", "Slaap en rust"],
  },
  adolescent: {
    title: "De puberteitsmaanden",
    body: "Dingen die vorige maand werkten, werken misschien een tijdje niet meer. Het gaat over. Consequent en geduldig zijn helpt u erdoorheen.",
    points: ["Wachten en zelfbeheersing", "Werken met afleiding", "Terugroepen, keer op keer", "Netjes aan de lijn lopen", "Consequent blijven"],
  },
  adult: {
    title: "De volwassen jaren",
    body: "Nu draait het om goede gewoonten betrouwbaar maken en het leven interessant houden.",
    points: ["Betrouwbaarheid", "Dagelijkse manieren", "Nieuwe vaardigheden voor de lol", "Verrijking"],
  },
  senior: {
    title: "De oudere jaren",
    body: "Oudere honden leren nog steeds graag. Houd het kort, zacht en vriendelijk voor stijve gewrichten.",
    points: ["Rustige denkspelletjes", "Duidelijke communicatie", "Activiteiten die bij het lichaam passen", "Bekende vaardigheden levend houden"],
  },
};

/** Age guidance in the reader's language — call inside render. */
export function getAgeFocus(): AgeFocus {
  return pick({
    en: ageFocusEn,
    no: ageFocusNo,
    pl: ageFocusPl,
    dk: ageFocusDk,
    se: ageFocusSe,
    fi: ageFocusFi,
    de: ageFocusDe,
    fr: ageFocusFr,
    nl: ageFocusNl,
  });
}
