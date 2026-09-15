import { pick } from "@/i18n";
import type { Breed } from "@/data/breeds";
import { healthNote } from "@/lib/breeds/everyday";
import type { DocSection } from "@/lib/print/types";
import {
  TEMPERAMENT_KEYS,
  breederQuestions,
  contractGuide,
  firstYearEstimate,
  temperamentLabel,
} from "./content";

const headings = {
  temperament: {
    en: "Detailed temperament breakdown",
    no: "Detaljert temperamentoversikt",
    pl: "Szczegółowy przegląd temperamentu",
    dk: "Detaljeret temperamentoverblik",
    se: "Detaljerad temperamentöversikt",
    fi: "Yksityiskohtainen luonnekatsaus",
    de: "Detaillierte Temperamentübersicht",
    fr: "Analyse détaillée du tempérament",
    nl: "Gedetailleerd temperamentoverzicht",
  },
  health: {
    en: "Health risk overview",
    no: "Oversikt over helserisiko",
    pl: "Przegląd ryzyka zdrowotnego",
    dk: "Oversigt over sundhedsrisiko",
    se: "Översikt över hälsorisker",
    fi: "Terveysriskien yleiskatsaus",
    de: "Überblick über Gesundheitsrisiken",
    fr: "Aperçu des risques de santé",
    nl: "Overzicht van gezondheidsrisico's",
  },
  cost: {
    en: "First-year cost estimator",
    no: "Kostnadsoverslag for første år",
    pl: "Szacunek kosztów pierwszego roku",
    dk: "Omkostningsoverslag for første år",
    se: "Kostnadsberäkning för första året",
    fi: "Ensimmäisen vuoden kustannusarvio",
    de: "Kostenschätzung für das erste Jahr",
    fr: "Estimation des coûts de la première année",
    nl: "Kostenraming eerste jaar",
  },
  breeder: {
    en: "Breeder question checklist",
    no: "Sjekkliste med spørsmål til oppdretter",
    pl: "Lista pytań do hodowcy",
    dk: "Tjekliste med spørgsmål til opdrætteren",
    se: "Checklista med frågor till uppfödaren",
    fi: "Tarkistuslista kasvattajalle esitettävistä kysymyksistä",
    de: "Checkliste mit Fragen an den Züchter",
    fr: "Liste de questions pour l'éleveur",
    nl: "Checklist met vragen voor de fokker",
  },
  contract: {
    en: "Contract preparation guide",
    no: "Guide til kjøpekontrakten",
    pl: "Przewodnik po przygotowaniu umowy",
    dk: "Guide til købskontrakten",
    se: "Guide till köpekontraktet",
    fi: "Opas kauppasopimuksen valmisteluun",
    de: "Leitfaden zur Vertragsvorbereitung",
    fr: "Guide de préparation du contrat",
    nl: "Gids voor het voorbereiden van het contract",
  },
  costTotal: {
    en: "Estimated total, first year",
    no: "Anslått totalt, første år",
    pl: "Szacowany koszt całkowity, pierwszy rok",
    dk: "Anslået i alt, første år",
    se: "Uppskattat totalt, första året",
    fi: "Arvioitu kokonaismäärä, ensimmäinen vuosi",
    de: "Geschätzte Gesamtkosten, erstes Jahr",
    fr: "Total estimé, première année",
    nl: "Geschat totaal, eerste jaar",
  },
  costOngoing: {
    en: "Ongoing annual cost after that",
    no: "Løpende årlig kostnad etterpå",
    pl: "Bieżący roczny koszt później",
    dk: "Løbende årlig omkostning derefter",
    se: "Löpande årskostnad därefter",
    fi: "Jatkuva vuosikustannus sen jälkeen",
    de: "Laufende Jahreskosten danach",
    fr: "Coût annuel récurrent ensuite",
    nl: "Doorlopende jaarlijkse kosten daarna",
  },
} as const;

/** The five sections of the paid Complete Breed & Puppy Buyer Dossier, ready for `DocPaper`. */
export function dossierSections(breed: Breed): DocSection[] {
  const [lo, hi] = firstYearEstimate(breed);
  return [
    {
      heading: pick(headings.temperament),
      blocks: [
        {
          kind: "fields",
          fields: TEMPERAMENT_KEYS.map((key) => ({
            label: temperamentLabel(key),
            value: `${breed.traits[key]} / 5`,
          })),
        },
      ],
    },
    {
      heading: pick(headings.health),
      blocks: [{ kind: "text", text: healthNote(breed.traits) }],
    },
    {
      heading: pick(headings.cost),
      blocks: [
        {
          kind: "fields",
          fields: [
            { label: pick(headings.costTotal), value: `€${lo}–${hi}` },
            {
              label: pick(headings.costOngoing),
              value: `€${breed.annualCost[0]}–${breed.annualCost[1]}`,
            },
          ],
        },
      ],
    },
    {
      heading: pick(headings.breeder),
      blocks: [{ kind: "checklist", items: [...breederQuestions()] }],
      newPage: true,
    },
    {
      heading: pick(headings.contract),
      blocks: [{ kind: "checklist", items: [...contractGuide()] }],
    },
  ];
}
