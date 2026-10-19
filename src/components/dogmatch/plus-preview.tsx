import { CalendarDays, Utensils } from "lucide-react";
import { interpolate, useCopy } from "@/i18n";
import { withLangPrefix } from "@/lib/localized-path";
import { estimatePortions } from "@/lib/care/portions";
import { track } from "@/lib/analytics";
import { PURCHASES_ENABLED } from "@/lib/purchases";
import type { Breed } from "@/data/breeds";
import type { UserProfile } from "@/lib/matching/types";
import { Arrow, ButtonLink } from "./ui";

/**
 * A short, personal sample of what DoggMatch+ does, built only from the quiz
 * answers and the matched breed: one first week and one example day of food.
 * Everything here is deterministic — the same answers always give the same text.
 */

const copy = {
  en: {
    title: "A small taste of DoggMatch+, made for your {breed}",
    intro: "Built from your own answers. This is what two of the tools would hand you on day one.",
    weekTitle: "Your first week, in three steps",
    days: ["Days 1–2", "Days 3–5", "Days 6–7"],
    settleKids: "Teach gentle handling and give the dog a resting spot the children leave alone.",
    settleFirst: "Learn the dog's name and a calm sit in 5-minute sessions, with rewards only.",
    settleOther: "Set up a safe resting spot and a steady routine for meals, walks and sleep.",
    moveHigh:
      "Two walks a day plus a 10-minute sniffing or search game, to use up energy and brain.",
    moveLow: "Short, calm walks and plenty of rest — this breed doesn't need to be worn out.",
    aloneLong:
      "Practise being alone in tiny steps: a minute out of sight first, then build slowly toward your real working hours.",
    aloneShort: "Practise short separations anyway, so being alone is never a surprise later.",
    mealTitle: "An example day of food",
    meal: "A full-grown {breed} typically weighs about {kg} kg. At your activity level that is around {kcal} kcal a day — roughly {grams} g of a typical dry food, split into {meals} meals.",
    mealNote:
      "A starting estimate to talk through with your vet, not a prescription. DoggMatch+ adjusts it to your actual dog and food.",
    cta: "See what else is in DoggMatch+",
    ctaNote: "Optional — your match and everything above stays free.",
  },
  no: {
    title: "En liten smakebit av DoggMatch+, laget for din {breed}",
    intro: "Bygget på dine egne svar. Dette er to av verktøyene du ville fått fra dag én.",
    weekTitle: "Din første uke, i tre steg",
    days: ["Dag 1–2", "Dag 3–5", "Dag 6–7"],
    settleKids: "Lær mild håndtering, og gi hunden en hvileplass som barna lar være i fred.",
    settleFirst:
      "Lær hunden navnet sitt og et rolig «sitt» i økter på 5 minutter, bare med belønning.",
    settleOther: "Sett opp en trygg hvileplass og en jevn rutine for måltider, turer og søvn.",
    moveHigh:
      "To turer om dagen pluss en 10 minutters snuse- eller søkelek, for å bruke opp både energi og hode.",
    moveLow: "Korte, rolige turer og masse hvile — denne rasen trenger ikke å bli sliten ut.",
    aloneLong:
      "Tren på å være alene i små steg: først ett minutt utenfor syne, så bygg sakte opp mot arbeidsdagen din.",
    aloneShort:
      "Øv på korte adskillelser likevel, så det aldri blir en overraskelse å være alene senere.",
    mealTitle: "Et eksempel på en dag med mat",
    meal: "En voksen {breed} veier typisk rundt {kg} kg. Med din aktivitetsnivå blir det omtrent {kcal} kcal om dagen — ca. {grams} g vanlig tørrfôr, fordelt på {meals} måltider.",
    mealNote:
      "Et startestimat du kan snakke med veterinæren om, ikke en forskrivning. DoggMatch+ tilpasser det til din faktiske hund og ditt fôr.",
    cta: "Se hva mer som ligger i DoggMatch+",
    ctaNote: "Valgfritt — matchen din og alt over er fortsatt gratis.",
  },
  pl: {
    title: "Mała próbka DoggMatch+, stworzona dla rasy {breed}",
    intro: "Na podstawie Twoich odpowiedzi. Tyle dostajesz od pierwszego dnia z dwóch narzędzi.",
    weekTitle: "Twój pierwszy tydzień w trzech krokach",
    days: ["Dni 1–2", "Dni 3–5", "Dni 6–7"],
    settleKids:
      "Naucz delikatnego dotyku i daj psu miejsce odpoczynku, którego dzieci nie ruszają.",
    settleFirst: "Ucz imienia i spokojnego „siad” w 5-minutowych sesjach, tylko nagrodami.",
    settleOther:
      "Przygotuj bezpieczne miejsce do odpoczynku i stały rytm posiłków, spacerów i snu.",
    moveHigh:
      "Dwa spacery dziennie i 10-minutowa zabawa w węszenie lub szukanie, by zużyć energię i głowę.",
    moveLow:
      "Krótkie, spokojne spacery i dużo odpoczynku — ta rasa nie musi być zmęczona do granic.",
    aloneLong:
      "Ćwicz zostawanie samemu małymi krokami: najpierw minuta poza zasięgiem wzroku, potem powoli w stronę Twojego czasu pracy.",
    aloneShort:
      "Ćwicz krótkie rozstania mimo to, by samotność nigdy nie była później niespodzianką.",
    mealTitle: "Przykładowy dzień jedzenia",
    meal: "Dorosły pies rasy {breed} waży zwykle około {kg} kg. Przy Twoim poziomie aktywności to około {kcal} kcal dziennie — mniej więcej {grams} g typowej suchej karmy, w {meals} posiłkach.",
    mealNote:
      "Wstępne oszacowanie do omówienia z weterynarzem, a nie zalecenie. DoggMatch+ dopasowuje je do Twojego psa i karmy.",
    cta: "Zobacz, co jeszcze jest w DoggMatch+",
    ctaNote: "Opcjonalnie — Twoje dopasowanie i wszystko powyżej pozostaje bezpłatne.",
  },
  dk: {
    title: "En lille smagsprøve på DoggMatch+, lavet til din {breed}",
    intro: "Bygget på dine egne svar. Det her er to af værktøjerne, du ville få fra dag ét.",
    weekTitle: "Din første uge i tre skridt",
    days: ["Dag 1–2", "Dag 3–5", "Dag 6–7"],
    settleKids: "Lær blid håndtering, og giv hunden en hvileplads, som børnene lader være i fred.",
    settleFirst:
      "Lær hunden sit navn og et roligt «sid» i sessioner på 5 minutter, kun med belønning.",
    settleOther: "Gør en tryg hvileplads klar og en fast rytme for måltider, ture og søvn.",
    moveHigh:
      "To ture om dagen plus en snuse- eller søgelek på 10 minutter, så både energi og hjerne bliver brugt.",
    moveLow:
      "Korte, rolige ture og masser af hvile — denne race behøver ikke at blive trættet helt ud.",
    aloneLong:
      "Træn at være alene i små skridt: først et minut uden for syne, og byg så langsomt op mod din arbejdsdag.",
    aloneShort:
      "Øv korte adskillelser alligevel, så det aldrig bliver en overraskelse at være alene senere.",
    mealTitle: "Et eksempel på en dag med mad",
    meal: "En fuldvoksen {breed} vejer typisk omkring {kg} kg. Med dit aktivitetsniveau bliver det cirka {kcal} kcal om dagen — omkring {grams} g almindeligt tørfoder fordelt på {meals} måltider.",
    mealNote:
      "Et startestimat, du kan tale med dyrlægen om, ikke en ordination. DoggMatch+ tilpasser det til din faktiske hund og dit foder.",
    cta: "Se, hvad der ellers er i DoggMatch+",
    ctaNote: "Valgfrit — dit match og alt ovenfor er stadig gratis.",
  },
  se: {
    title: "Ett litet smakprov på DoggMatch+, gjort för din {breed}",
    intro: "Byggt på dina egna svar. Det här är två av verktygen du skulle få från dag ett.",
    weekTitle: "Din första vecka i tre steg",
    days: ["Dag 1–2", "Dag 3–5", "Dag 6–7"],
    settleKids: "Lär ut mild hantering och ge hunden en viloplats som barnen låter vara i fred.",
    settleFirst:
      "Lär hunden sitt namn och ett lugnt «sitt» i pass på 5 minuter, bara med belöning.",
    settleOther: "Ordna en trygg viloplats och en jämn rutin för måltider, promenader och sömn.",
    moveHigh:
      "Två promenader om dagen plus en nos- eller sökleken på 10 minuter, så både energi och hjärna används.",
    moveLow: "Korta, lugna promenader och gott om vila — den här rasen behöver inte tröttas ut.",
    aloneLong:
      "Träna på att vara ensam i små steg: först en minut utom synhåll, sedan långsamt mot din arbetsdag.",
    aloneShort:
      "Öva korta separationer ändå, så att det aldrig blir en överraskning att vara ensam senare.",
    mealTitle: "Ett exempel på en dag med mat",
    meal: "En fullvuxen {breed} väger vanligtvis omkring {kg} kg. Med din aktivitetsnivå blir det ungefär {kcal} kcal om dagen — cirka {grams} g vanligt torrfoder fördelat på {meals} måltider.",
    mealNote:
      "En startuppskattning att prata om med veterinären, inte en ordination. DoggMatch+ anpassar den efter din faktiska hund och ditt foder.",
    cta: "Se vad mer som finns i DoggMatch+",
    ctaNote: "Valfritt — din match och allt ovan är fortfarande gratis.",
  },
  fi: {
    title: "Pieni maistiainen DoggMatch+:sta, tehty rodulle {breed}",
    intro:
      "Rakennettu omien vastaustesi pohjalta. Nämä kaksi työkalua saisit heti ensimmäisestä päivästä.",
    weekTitle: "Ensimmäinen viikkosi kolmessa vaiheessa",
    days: ["Päivät 1–2", "Päivät 3–5", "Päivät 6–7"],
    settleKids:
      "Opeta lempeä käsittely ja anna koiralle lepopaikka, jonka lapset jättävät rauhaan.",
    settleFirst:
      "Opettele koiran nimi ja rauhallinen istu 5 minuutin harjoituksissa, vain palkkioilla.",
    settleOther:
      "Järjestä turvallinen lepopaikka ja tasainen rytmi ruokailulle, lenkeille ja unelle.",
    moveHigh:
      "Kaksi lenkkiä päivässä ja 10 minuutin nuuskittelu- tai etsintäleikki, jotta sekä energia että aivot saavat työtä.",
    moveLow:
      "Lyhyitä, rauhallisia lenkkejä ja paljon lepoa — tätä rotua ei tarvitse väsyttää loppuun.",
    aloneLong:
      "Harjoittele yksinoloa pienin askelin: ensin minuutti poissa näkyvistä, sitten hitaasti kohti työpäivääsi.",
    aloneShort: "Harjoittele lyhyitä eroja silti, jotta yksinolo ei myöhemmin tule yllätyksenä.",
    mealTitle: "Esimerkki ruokapäivästä",
    meal: "Täysikasvuinen {breed} painaa tyypillisesti noin {kg} kg. Aktiivisuustasollasi se tarkoittaa noin {kcal} kcal päivässä — suunnilleen {grams} g tavallista kuivaruokaa, jaettuna {meals} ateriaan.",
    mealNote:
      "Lähtöarvio, josta voi keskustella eläinlääkärin kanssa, ei määräys. DoggMatch+ sovittaa sen oikeaan koiraasi ja ruokaasi.",
    cta: "Katso, mitä muuta DoggMatch+ sisältää",
    ctaNote: "Vapaaehtoinen — osumasi ja kaikki yllä pysyy ilmaisena.",
  },
  de: {
    title: "Ein kleiner Vorgeschmack auf DoggMatch+, gemacht für deinen {breed}",
    intro:
      "Aus deinen eigenen Antworten gebaut. Das bekämst du mit zwei der Werkzeuge ab Tag eins.",
    weekTitle: "Deine erste Woche in drei Schritten",
    days: ["Tag 1–2", "Tag 3–5", "Tag 6–7"],
    settleKids:
      "Übe sanften Umgang und gib dem Hund einen Ruheplatz, den die Kinder in Ruhe lassen.",
    settleFirst: "Übe den Namen und ein ruhiges Sitz in 5-Minuten-Einheiten, nur mit Belohnung.",
    settleOther:
      "Richte einen sicheren Ruheplatz und einen festen Rhythmus für Mahlzeiten, Spaziergänge und Schlaf ein.",
    moveHigh:
      "Zwei Spaziergänge am Tag plus ein 10-minütiges Schnüffel- oder Suchspiel, damit Energie und Kopf ausgelastet sind.",
    moveLow:
      "Kurze, ruhige Spaziergänge und viel Ruhe — diese Rasse muss nicht ausgepowert werden.",
    aloneLong:
      "Übe das Alleinsein in kleinen Schritten: erst eine Minute außer Sicht, dann langsam in Richtung deiner Arbeitszeiten.",
    aloneShort: "Übe trotzdem kurze Trennungen, damit Alleinsein später nie eine Überraschung ist.",
    mealTitle: "Ein Beispieltag beim Futter",
    meal: "Ein ausgewachsener {breed} wiegt typischerweise etwa {kg} kg. Bei deinem Aktivitätsniveau sind das rund {kcal} kcal am Tag — ungefähr {grams} g übliches Trockenfutter, verteilt auf {meals} Mahlzeiten.",
    mealNote:
      "Eine erste Schätzung zum Besprechen mit der Tierärztin oder dem Tierarzt, keine Verordnung. DoggMatch+ passt sie an deinen echten Hund und dein Futter an.",
    cta: "Sieh, was DoggMatch+ noch enthält",
    ctaNote: "Freiwillig — dein Ergebnis und alles oben bleibt kostenlos.",
  },
  fr: {
    title: "Un avant-goût de DoggMatch+, pensé pour votre {breed}",
    intro:
      "Construit à partir de vos réponses. Voilà ce que deux des outils vous offriraient dès le premier jour.",
    weekTitle: "Votre première semaine en trois étapes",
    days: ["Jours 1–2", "Jours 3–5", "Jours 6–7"],
    settleKids:
      "Apprenez les manipulations en douceur et donnez au chien un coin de repos que les enfants laissent tranquille.",
    settleFirst:
      "Apprenez-lui son nom et un « assis » calme en séances de 5 minutes, avec des récompenses seulement.",
    settleOther:
      "Installez un coin de repos sûr et une routine régulière pour les repas, les sorties et le sommeil.",
    moveHigh:
      "Deux promenades par jour et un jeu de flair ou de recherche de 10 minutes, pour dépenser l'énergie et occuper la tête.",
    moveLow:
      "Des promenades courtes et calmes et beaucoup de repos — cette race n'a pas besoin d'être épuisée.",
    aloneLong:
      "Entraînez-vous à rester seul par petites étapes : d'abord une minute hors de vue, puis progressivement vers vos vraies heures de travail.",
    aloneShort:
      "Faites quand même de courtes séparations, pour que la solitude ne soit jamais une surprise plus tard.",
    mealTitle: "Un exemple de journée de repas",
    meal: "Un {breed} adulte pèse en général environ {kg} kg. À votre niveau d'activité, cela représente près de {kcal} kcal par jour — environ {grams} g de croquettes classiques, en {meals} repas.",
    mealNote:
      "Une estimation de départ à discuter avec votre vétérinaire, pas une prescription. DoggMatch+ l'ajuste à votre vrai chien et à son alimentation.",
    cta: "Voir ce que contient d'autre DoggMatch+",
    ctaNote: "Facultatif — votre résultat et tout ce qui précède restent gratuits.",
  },
  nl: {
    title: "Een voorproefje van DoggMatch+, gemaakt voor jouw {breed}",
    intro:
      "Gebouwd op je eigen antwoorden. Dit krijg je met twee van de hulpmiddelen vanaf dag één.",
    weekTitle: "Je eerste week in drie stappen",
    days: ["Dag 1–2", "Dag 3–5", "Dag 6–7"],
    settleKids:
      "Oefen rustig aanraken en geef de hond een rustplek waar de kinderen van afblijven.",
    settleFirst: "Leer de naam en een rustige zit in sessies van 5 minuten, alleen met beloning.",
    settleOther:
      "Richt een veilige rustplek in en een vast ritme voor maaltijden, wandelingen en slaap.",
    moveHigh:
      "Twee wandelingen per dag plus een snuffel- of zoekspel van 10 minuten, zodat energie en hoofd gebruikt worden.",
    moveLow: "Korte, rustige wandelingen en veel rust — dit ras hoeft niet uitgeput te worden.",
    aloneLong:
      "Oefen alleen zijn in kleine stappen: eerst een minuut buiten beeld, bouw daarna langzaam op richting je werkdag.",
    aloneShort: "Oefen toch korte scheidingen, zodat alleen zijn later nooit een verrassing is.",
    mealTitle: "Een voorbeeld van een dag eten",
    meal: "Een volwassen {breed} weegt meestal ongeveer {kg} kg. Bij jouw activiteitsniveau is dat rond {kcal} kcal per dag — ongeveer {grams} g gewone droogvoer, verdeeld over {meals} maaltijden.",
    mealNote:
      "Een startschatting om met de dierenarts te bespreken, geen voorschrift. DoggMatch+ stemt het af op je echte hond en voer.",
    cta: "Bekijk wat DoggMatch+ nog meer biedt",
    ctaNote: "Optioneel — je match en alles hierboven blijft gratis.",
  },
} as const;

/** Typical adult weight for the breed's size class (1 = tiny … 5 = giant), in kg. */
const ADULT_KG: Record<number, number> = { 1: 4, 2: 9, 3: 18, 4: 30, 5: 50 };
/** Energy density of a typical dry food, kcal per 100 g. */
const DRY_FOOD_KCAL = 360;

const round10 = (n: number) => Math.round(n / 10) * 10;

/** The deterministic content of the preview, before any wording is chosen. */
function previewFacts(breed: Breed, profile: UserProfile) {
  const alone = Number(profile["alone"] ?? 0);
  const activity = Number(profile["activity"] ?? 2);
  const size = Math.min(5, Math.max(1, Math.round(breed.traits.size)));
  const kg = ADULT_KG[size] ?? 18;
  const portion = estimatePortions(kg, "adult", {
    neutered: true,
    activity: activity >= 4 ? "busy" : activity <= 1 ? "gentle" : "moderate",
    foodEnergy: DRY_FOOD_KCAL,
    mealsPerDay: 2,
  });
  return {
    settle:
      profile["children"] === "young"
        ? ("settleKids" as const)
        : profile["experience"] === "first"
          ? ("settleFirst" as const)
          : ("settleOther" as const),
    move: breed.traits.exerciseNeeds >= 4 ? ("moveHigh" as const) : ("moveLow" as const),
    alone: alone >= 4 ? ("aloneLong" as const) : ("aloneShort" as const),
    kg,
    kcal: portion ? round10(portion.dailyKcal) : undefined,
    grams: portion?.gramsPerDay ? round10(portion.gramsPerDay) : undefined,
    meals: portion?.mealsPerDay ?? 2,
  };
}

export function PlusPreview({
  breed,
  breedName,
  profile,
}: {
  breed: Breed;
  breedName: string;
  profile: UserProfile;
}) {
  const c = useCopy(copy);
  const facts = previewFacts(breed, profile);
  const steps = [facts.settle, facts.move, facts.alone] as const;

  return (
    <div className="mt-10 rounded-2xl border border-border bg-card p-6 md:p-8">
      <h3 className="font-display text-xl leading-tight tracking-tight">
        {interpolate(c.title, { breed: breedName })}
      </h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{c.intro}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
            <CalendarDays className="h-4 w-4 text-accent" aria-hidden="true" />
            {c.weekTitle}
          </p>
          <ol className="mt-4 space-y-3">
            {steps.map((key, index) => (
              <li key={key} className="flex gap-3 text-[0.9375rem] leading-relaxed">
                <span className="w-16 shrink-0 font-display text-sm tabular-nums text-accent">
                  {c.days[index]}
                </span>
                <span>{c[key]}</span>
              </li>
            ))}
          </ol>
        </div>

        {facts.kcal && facts.grams && (
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
              <Utensils className="h-4 w-4 text-accent" aria-hidden="true" />
              {c.mealTitle}
            </p>
            <p className="mt-4 text-[0.9375rem] leading-relaxed">
              {interpolate(c.meal, {
                breed: breedName,
                kg: facts.kg,
                kcal: facts.kcal,
                grams: facts.grams,
                meals: facts.meals,
              })}
            </p>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{c.mealNote}</p>
          </div>
        )}
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:gap-5">
        <ButtonLink
          to={withLangPrefix("/plus")}
          hash={PURCHASES_ENABLED ? "membership" : "waitlist"}
          tone="outline"
          onClick={() =>
            track("plus_cta_clicked", {
              source: "quiz_result_preview",
              purchases_open: PURCHASES_ENABLED,
            })
          }
        >
          {c.cta}
          <Arrow />
        </ButtonLink>
        <p className="text-xs leading-relaxed text-muted-foreground">{c.ctaNote}</p>
      </div>
    </div>
  );
}
