import { pick } from "@/i18n";
import type { CareState } from "@/lib/care/store";
import type { DogProfile } from "@/lib/training/store";
import { resolveDogTraits } from "@/lib/dogs/profile";

/**
 * A gentle nudge, not a nagging list. Every interval below is a rough rhythm
 * for a healthy dog, worked out from what the owner has told us. Nothing here
 * is a deadline, and nothing here is medical advice.
 */

export interface CareTask {
  id: string;
  label: string;
  everyDays: number;
  /** Where to go to actually do it. */
  to?: string;
  topicId?: string;
}

export interface CareDue extends CareTask {
  lastDone?: string;
  daysSince?: number;
  due: boolean;
  /** Warm, plain-spoken line shown to the owner. */
  line: string;
}

export function careTasks(dog: DogProfile | undefined): CareTask[] {
  const grooming = resolveDogTraits(dog).traits.grooming;
  return [
    { id: "dental", label: pick({ en: "Teeth", no: "Tenner", pl: "Zęby", dk: "Tænder", se: "Tänder", fi: "Hampaat", de: "Zähne", fr: "Dents", nl: "Tanden" }), everyDays: 2, topicId: "dental" },
    { id: "coat", label: pick({ en: "A proper brush", no: "En skikkelig børsting", pl: "Porządne szczotkowanie", dk: "En ordentlig børstning", se: "En ordentlig borstning", fi: "Hyvä harjaus", de: "Eine ordentliche Fellpflege", fr: "Un bon brossage", nl: "Een goede borstelbeurt" }), everyDays: grooming >= 4 ? 2 : grooming === 3 ? 4 : 7, topicId: "coat" },
    { id: "paws", label: pick({ en: "Nails and paws", no: "Klør og poter", pl: "Pazury i łapy", dk: "Negle og poter", se: "Klor och tassar", fi: "Kynnet ja tassut", de: "Krallen und Pfoten", fr: "Ongles et pattes", nl: "Nagels en poten" }), everyDays: 21, topicId: "paws" },
    { id: "ears", label: pick({ en: "Ear check", no: "Sjekk ørene", pl: "Sprawdzenie uszu", dk: "Ørerengøring", se: "Öronkontroll", fi: "Korvien tarkistus", de: "Ohrenkontrolle", fr: "Vérification des oreilles", nl: "Orencontrole" }), everyDays: 14, topicId: "ears" },
    { id: "everyday-check", label: pick({ en: "Nose-to-tail check", no: "Sjekk fra snute til hale", pl: "Przegląd od nosa po ogon", dk: "Snude-til-hale-tjek", se: "Nos-till-svans-kontroll", fi: "Nenästä-häntään-tarkistus", de: "Gesundheitscheck von Kopf bis Schwanz", fr: "Contrôle de la tête à la queue", nl: "Neus-tot-staart-check" }), everyDays: 7, topicId: "everyday-check" },
    { id: "weight", label: pick({ en: "Weigh-in", no: "Veiing", pl: "Ważenie", dk: "Vægt", se: "Vägning", fi: "Punnitus", de: "Wiegen", fr: "Pesée", nl: "Wegen" }), everyDays: 30, to: "/my-dog/weight" },
  ];
}

function daysBetween(from: string, to: Date): number {
  const a = new Date(`${from}T00:00:00`);
  return Math.max(0, Math.round((to.getTime() - a.getTime()) / 86_400_000));
}

export function careDue(
  dog: DogProfile | undefined,
  state: CareState,
  now = new Date(),
): CareDue[] {
  const name = dog?.name ?? pick({ en: "your dog", no: "hunden din", pl: "Twój pies", dk: "din hund", se: "din hund", fi: "koirasi", de: "dein Hund", fr: "votre chien", nl: "uw hond" });
  const done = (dog && state.lastDone[dog.id]) || {};
  return careTasks(dog).map((task) => {
    const last = task.id === "weight" ? lastWeightDay(dog, state) : done[task.id];
    const daysSince = last ? daysBetween(last, now) : undefined;
    const due = daysSince === undefined || daysSince >= task.everyDays;
    return {
      ...task,
      ...(last ? { lastDone: last } : {}),
      ...(daysSince === undefined ? {} : { daysSince }),
      due,
      line: line(task, name, daysSince),
    };
  });
}

function lastWeightDay(dog: DogProfile | undefined, state: CareState): string | undefined {
  const entries = (dog && state.weights[dog.id]) || [];
  return entries.length ? entries[entries.length - 1]!.day : undefined;
}

function line(task: CareTask, name: string, daysSince?: number): string {
  if (daysSince === undefined) {
    switch (task.id) {
      case "dental":
        return pick({
          en: `Whenever you're ready to start on ${name}'s teeth.`,
          no: `Når du er klar til å begynne med tennene til ${name}.`,
          pl: `Kiedy tylko będziesz gotowy, zajmij się zębami ${name}.`,
          dk: `Når du er klar til at gå i gang med ${name}'s tænder.`,
          se: `När du är redo att ta tag i ${name}:s tänder.`,
          fi: `Kun olet valmis aloittamaan ${name}:n hampaiden hoidon.`,
          de: `Wann immer du bereit bist, dich um die Zähne von ${name} zu kümmern.`,
          fr: `Dès que vous êtes prêt à vous occuper des dents de ${name}.`,
          nl: `Wanneer je er klaar voor bent om aan de tanden van ${name} te beginnen.`,
        });
      case "weight":
        return pick({
          en: `Pop ${name} on the scales when you get a chance.`,
          no: `Sett ${name} på vekta når du får sjansen.`,
          pl: `Postaw ${name} na wadze, gdy tylko będzie okazja.`,
          dk: `Sæt ${name} på vægten, når du får en chance.`,
          se: `Ställ ${name} på vågen när du får en chans.`,
          fi: `Nosta ${name} vaa'alle, kun sinulla on tilaisuus.`,
          de: `Setze ${name} auf die Waage, wenn du die Gelegenheit dazu hast.`,
          fr: `Mettez ${name} sur la balance quand vous en avez l'occasion.`,
          nl: `Zet ${name} op de weegschaal wanneer je de kans krijgt.`,
        });
      default:
        return pick({
          en: `Nothing noted yet — tick it off once you've done it.`,
          no: `Ingenting notert ennå — huk av når du har gjort det.`,
          pl: `Nic jeszcze nie zanotowano — odhacz, gdy to zrobisz.`,
          dk: `Intet noteret endnu — afkryds, når du har gjort det.`,
          se: `Inget noterat än — bocka av när du har gjort det.`,
          fi: `Ei vielä merkintöjä – rastita, kun olet tehnyt sen.`,
          de: `Noch nichts vermerkt – hake es ab, sobald du es getan hast.`,
          fr: `Rien de noté pour l'instant – cochez-le une fois que vous l'avez fait.`,
          nl: `Nog niets genoteerd – vink het aan zodra je het hebt gedaan.`,
        });
    }
  }
  if (daysSince < task.everyDays) {
    if (daysSince === 0) return pick({ en: "Done today. Lovely.", no: "Gjort i dag. Fint.", pl: "Zrobione dzisiaj. Świetnie.", dk: "Klar i dag. Dejligt.", se: "Klar idag. Härligt.", fi: "Tehty tänään. Ihanaa.", de: "Heute erledigt. Wunderbar.", fr: "Fait aujourd'hui. Super.", nl: "Vandaag gedaan. Fijn." });
    return pick({
      en: `Done ${daysSince} day${daysSince === 1 ? "" : "s"} ago.`,
      no: `Gjort for ${daysSince} ${daysSince === 1 ? "dag" : "dager"} siden.`,
      pl: `Zrobione ${daysSince} ${daysSince === 1 ? "dzień" : "dni"} temu.`,
      dk: `Klar for ${daysSince} ${daysSince === 1 ? "dag" : "dage"} siden.`,
      se: `Klar för ${daysSince} ${daysSince === 1 ? "dag" : "dagar"} sedan.`,
      fi: `Tehty ${daysSince} ${daysSince === 1 ? "päivä" : "päivää"} sitten.`,
      de: `Erledigt vor ${daysSince} ${daysSince === 1 ? "Tag" : "Tagen"}.`,
      fr: `Fait il y a ${daysSince} ${daysSince === 1 ? "jour" : "jours"}.`,
      nl: `Gedaan ${daysSince} ${daysSince === 1 ? "dag" : "dagen"} geleden.`,
    });
  }
  switch (task.id) {
    case "paws":
      return pick({
        en: `${name}'s nails may be due for a trim.`,
        no: `Klørne til ${name} trenger kanskje en klipp.`,
        pl: `Pazury ${name} mogą być gotowe do przycięcia.`,
        dk: `${name}'s kløer trænger måske til en klipning.`,
        se: `${name}:s klor kan behöva klippas.`,
        fi: `${name}:n kynnet saattavat kaivata leikkausta.`,
        de: `Die Krallen von ${name} müssen vielleicht geschnitten werden.`,
        fr: `Les griffes de ${name} pourraient avoir besoin d'être coupées.`,
        nl: `De nagels van ${name} zijn mogelijk aan een knipbeurt toe.`,
      });
    case "dental":
      return pick({
        en: `It's been a few days since ${name}'s teeth.`,
        no: `Det er noen dager siden tennene til ${name} ble pusset.`,
        pl: `Minęło już kilka dni od czyszczenia zębów ${name}.`,
        dk: `Det er et par dage siden, du sidst børstede ${name}'s tænder.`,
        se: `Det var några dagar sedan du senast borstade ${name}:s tänder.`,
        fi: `On kulunut muutama päivä ${name}:n hampaiden pesusta.`,
        de: `Es ist ein paar Tage her, seit du ${name}s Zähne geputzt hast.`,
        fr: `Cela fait quelques jours depuis le dernier brossage des dents de ${name}.`,
        nl: `Het is een paar dagen geleden sinds de laatste keer dat de tanden van ${name} zijn gepoetst.`,
      });
    case "coat":
      return pick({
        en: `${name} could probably do with a brush.`,
        no: `${name} har nok godt av en børsting.`,
        pl: `${name} przydałoby się porządne szczotkowanie.`,
        dk: `${name} kunne sikkert godt bruge en børstning.`,
        se: `${name} skulle nog må bra av att bli borstad.`,
        fi: `${name} kaipaisi todennäköisesti harjausta.`,
        de: `${name} könnte wahrscheinlich eine Fellpflege gebrauchen.`,
        fr: `${name} pourrait probablement bénéficier d'un bon brossage.`,
        nl: `${name} kan waarschijnlijk wel een borstelbeurt gebruiken.`,
      });
    case "ears":
      return pick({
        en: `Worth a quick look in ${name}'s ears.`,
        no: `Verdt en rask titt i ørene til ${name}.`,
        pl: `Warto zerknąć w uszy ${name}.`,
        dk: `Det er værd at kigge ${name} hurtigt i ørerne.`,
        se: `Det är värt att snabbt titta i ${name}:s öron.`,
        fi: `Kannattaa tarkistaa ${name}:n korvat nopeasti.`,
        de: `Es lohnt sich, einen schnellen Blick in ${name}s Ohren zu werfen.`,
        fr: `Il est bon de jeter un coup d'œil rapide dans les oreilles de ${name}.`,
        nl: `Het is de moeite waard om even snel in de oren van ${name} te kijken.`,
      });
    case "weight":
      return pick({
        en: `It's been about a month since ${name} was weighed.`,
        no: `Det er omtrent en måned siden ${name} ble veid.`,
        pl: `Minął już około miesiąca od ostatniego ważenia ${name}.`,
        dk: `Det er cirka en måned siden, ${name} sidst blev vejet.`,
        se: `Det var ungefär en månad sedan ${name} vägdes.`,
        fi: `On kulunut noin kuukausi ${name}:n punnituksesta.`,
        de: `Es ist etwa einen Monat her, seit ${name} gewogen wurde.`,
        fr: `Cela fait environ un mois que ${name} n'a pas été pesé.`,
        nl: `Het is ongeveer een maand geleden dat ${name} is gewogen.`,
      });
    default:
      return pick({ en: `Worth a few minutes when you have them.`, no: `Verdt noen minutter når du har dem.`, pl: `Warto poświęcić kilka minut, kiedy będzie okazja.`, dk: `Værd et par minutter, når du har tid.`, se: `Värt några minuter när du har tid.`, fi: `Kannattaa käyttää muutama minuutti, kun sinulla on aikaa.`, de: `Ein paar Minuten wert, wenn du sie hast.`, fr: `Cela vaut quelques minutes quand vous en avez.`, nl: `De moeite waard voor een paar minuten als je tijd hebt.` });
  }
}
