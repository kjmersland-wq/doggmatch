/**
 * The source registry.
 *
 * Every factual, educational claim on DoggMatch should be traceable to a real,
 * named organisation. This file is the single place we keep them, so new
 * sources and new review dates can be added without touching any screen.
 *
 * Rules for adding a source:
 *  - It must be a real, checkable organisation: veterinary bodies, peer-reviewed
 *    science, government authorities, recognised kennel clubs, established
 *    welfare organisations.
 *  - Link to the page that actually supports the information, not the homepage
 *    where we can avoid it.
 *  - Never add a source we haven't opened and read.
 */
import { pick } from "@/i18n";

export type SourceKind = "veterinary" | "science" | "authority" | "kennel" | "welfare";

export interface SourceEntry {
  id: string;
  /** Organisation name, shown as the clickable link text. */
  org: string;
  /** What we use it for. */
  what: { en: string; no: string };
  url: string;
  kind: SourceKind;
  /** ISO date we last opened the page and checked it still says this. */
  lastReviewed: string;
}

export interface SourceCategory {
  id: string;
  title: { en: string; no: string };
  blurb: { en: string; no: string };
  /** Where on the site this knowledge shows up. */
  usedOn: { en: string; no: string };
  sources: SourceEntry[];
}

const REVIEWED = "2026-08-16";

export const sourceCategories: SourceCategory[] = [
  {
    id: "breeds",
    title: { en: "Breeds and breed standards", no: "Raser og rasestandarder" },
    blurb: {
      en: "Breed descriptions, typical size and coat, and what a breed was originally bred to do.",
      no: "Rasebeskrivelser, typisk størrelse og pels, og hva rasen opprinnelig ble avlet for.",
    },
    usedOn: { en: "Breed pages, compare, matching", no: "Rasesider, sammenligning, matching" },
    sources: [
      { id: "fci", org: "Fédération Cynologique Internationale (FCI)", url: "https://www.fci.be/en/Nomenclature/", kind: "kennel", lastReviewed: REVIEWED,
        what: { en: "International breed nomenclature and breed standards.", no: "Internasjonal rasenomenklatur og rasestandarder." } },
      { id: "nkk", org: "Norsk Kennel Klub", url: "https://www.nkk.no/", kind: "kennel", lastReviewed: REVIEWED,
        what: { en: "Norwegian breed standards, breeding rules and health schemes.", no: "Norske rasestandarder, avlsregler og helseprogrammer." } },
      { id: "tkc", org: "The Kennel Club (UK)", url: "https://www.thekennelclub.org.uk/breed-standards/", kind: "kennel", lastReviewed: REVIEWED,
        what: { en: "Breed standards and breed-specific health information.", no: "Rasestandarder og rasespesifikk helseinformasjon." } },
      { id: "vetcompass", org: "RVC VetCompass", url: "https://www.rvc.ac.uk/vetcompass", kind: "science", lastReviewed: REVIEWED,
        what: { en: "Large-scale veterinary records research on breed health and lifespan.", no: "Storskala forskning på rasehelse og levealder fra veterinærjournaler." } },
    ],
  },
  {
    id: "behaviour",
    title: { en: "Behaviour and training", no: "Atferd og trening" },
    blurb: {
      en: "How dogs learn, what reward-based training looks like, and where a behaviour problem needs a professional.",
      no: "Hvordan hunder lærer, hva belønningsbasert trening er, og når atferd trenger fagfolk.",
    },
    usedOn: { en: "Train your dog, lessons, journey", no: "Trening, leksjoner, treningsreisen" },
    sources: [
      { id: "avsab", org: "American Veterinary Society of Animal Behavior (AVSAB)", url: "https://avsab.org/resources/position-statements/", kind: "veterinary", lastReviewed: REVIEWED,
        what: { en: "Position statements on humane, reward-based training and socialisation.", no: "Posisjonsuttalelser om skånsom, belønningsbasert trening og sosialisering." } },
      { id: "dacvb", org: "American College of Veterinary Behaviorists", url: "https://www.dacvb.org/", kind: "veterinary", lastReviewed: REVIEWED,
        what: { en: "Veterinary behaviour specialists and owner-facing behaviour guidance.", no: "Veterinære atferdsspesialister og atferdsveiledning for eiere." } },
      { id: "dogstrust", org: "Dogs Trust", url: "https://www.dogstrust.org.uk/dog-advice", kind: "welfare", lastReviewed: REVIEWED,
        what: { en: "Everyday training and behaviour advice for owners.", no: "Hverdagsråd om trening og atferd for eiere." } },
      { id: "rspca-behaviour", org: "RSPCA", url: "https://www.rspca.org.uk/adviceandwelfare/pets/dogs/behaviour", kind: "welfare", lastReviewed: REVIEWED,
        what: { en: "Behaviour and company needs from a welfare perspective.", no: "Atferd og selskapsbehov sett fra et dyrevelferdsperspektiv." } },
    ],
  },
  {
    id: "health",
    title: { en: "Health, dental and preventive care", no: "Helse, tenner og forebygging" },
    blurb: {
      en: "Vaccination, parasites, dental care, life stages and the signs that mean a vet visit.",
      no: "Vaksinasjon, parasitter, tannstell, livsfaser og tegn som betyr en tur til veterinæren.",
    },
    usedOn: { en: "My Dog, care topics, vet summary", no: "Min hund, stelltemaer, veterinærsammendrag" },
    sources: [
      { id: "wsava-vacc", org: "WSAVA Vaccination Guidelines", url: "https://wsava.org/global-guidelines/vaccination-guidelines/", kind: "veterinary", lastReviewed: REVIEWED,
        what: { en: "Global veterinary guidance on core and non-core vaccination.", no: "Global veterinærveiledning om kjerne- og tilleggsvaksiner." } },
      { id: "wsava-dental", org: "WSAVA Global Dental Guidelines", url: "https://wsava.org/global-guidelines/global-dental-guidelines/", kind: "veterinary", lastReviewed: REVIEWED,
        what: { en: "Tooth brushing, dental disease and what home care can and can't do.", no: "Tannpuss, tannsykdom og hva hjemmestell kan og ikke kan gjøre." } },
      { id: "aaha-stage", org: "AAHA Canine Life Stage Guidelines", url: "https://www.aaha.org/resources/2019-aaha-canine-life-stage-guidelines/", kind: "veterinary", lastReviewed: REVIEWED,
        what: { en: "What puppies, adults and older dogs need at each stage.", no: "Hva valper, voksne og eldre hunder trenger i hver fase." } },
      { id: "esccap", org: "ESCCAP", url: "https://www.esccap.org/guidelines/", kind: "veterinary", lastReviewed: REVIEWED,
        what: { en: "European guidance on worms, ticks and fleas.", no: "Europeisk veiledning om orm, flått og lopper." } },
      { id: "avma", org: "American Veterinary Medical Association", url: "https://www.avma.org/resources-tools/pet-owners", kind: "veterinary", lastReviewed: REVIEWED,
        what: { en: "General owner-facing veterinary information.", no: "Generell veterinærinformasjon for eiere." } },
    ],
  },
  {
    id: "nutrition",
    title: { en: "Food, portions and food safety", no: "Fôr, porsjoner og matsikkerhet" },
    blurb: {
      en: "Energy needs, body condition, and which human foods are risky for dogs.",
      no: "Energibehov, hold, og hvilke menneskematvarer som er risikable for hund.",
    },
    usedOn: { en: "Food & portions, Can my dog eat this?, weight", no: "Fôr og porsjoner, Kan hunden spise dette?, vekt" },
    sources: [
      { id: "wsava-nutri", org: "WSAVA Global Nutrition Guidelines", url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/", kind: "veterinary", lastReviewed: REVIEWED,
        what: { en: "Resting energy requirement, body condition scoring and nutritional assessment.", no: "Hvileenergibehov, holdvurdering og ernæringsvurdering." } },
      { id: "fediaf", org: "FEDIAF Nutritional Guidelines", url: "https://europeanpetfood.org/self-regulation/nutritional-guidelines/", kind: "authority", lastReviewed: REVIEWED,
        what: { en: "European nutrient requirements for complete dog food.", no: "Europeiske næringskrav til fullfôr for hund." } },
      { id: "aspca-food", org: "ASPCA Animal Poison Control", url: "https://www.aspca.org/pet-care/animal-poison-control/people-foods-avoid-feeding-your-pets", kind: "welfare", lastReviewed: REVIEWED,
        what: { en: "Human foods that are toxic or risky for dogs.", no: "Menneskemat som er giftig eller risikabel for hund." } },
      { id: "waltham", org: "WALTHAM Petcare Science Institute", url: "https://www.waltham.com/resources", kind: "science", lastReviewed: REVIEWED,
        what: { en: "Peer-reviewed research on canine nutrition and weight management.", no: "Fagfellevurdert forskning på hundeernæring og vektkontroll." } },
    ],
  },
  {
    id: "grooming",
    title: { en: "Coat, skin and paws", no: "Pels, hud og poter" },
    blurb: {
      en: "Coat types and how much work they are, plus paw and nail care.",
      no: "Pelstyper og hvor mye arbeid de er, samt pote- og klostell.",
    },
    usedOn: { en: "Care topics, breed pages, matching", no: "Stelltemaer, rasesider, matching" },
    sources: [
      { id: "pdsa-grooming", org: "PDSA", url: "https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/puppies-dogs", kind: "veterinary", lastReviewed: REVIEWED,
        what: { en: "Practical grooming, coat and nail care advice from a veterinary charity.", no: "Praktiske råd om pelsstell, pels og klor fra en veterinærstiftelse." } },
      { id: "tkc-grooming", org: "The Kennel Club (UK)", url: "https://www.thekennelclub.org.uk/health-and-dog-care/", kind: "kennel", lastReviewed: REVIEWED,
        what: { en: "Coat care expectations by breed type.", no: "Forventet pelsstell etter rasetype." } },
    ],
  },
  {
    id: "exercise",
    title: { en: "Exercise and everyday activity", no: "Mosjon og hverdagsaktivitet" },
    blurb: {
      en: "How much movement dogs need, growing joints, and heat and cold.",
      no: "Hvor mye bevegelse hunder trenger, ledd i vekst, og varme og kulde.",
    },
    usedOn: { en: "My week, outdoors, breed pages", no: "Min uke, friluft, rasesider" },
    sources: [
      { id: "bva", org: "British Veterinary Association", url: "https://www.bva.co.uk/take-action/our-policies/companion-animal-welfare/", kind: "veterinary", lastReviewed: REVIEWED,
        what: { en: "Veterinary positions on companion animal welfare, including heat risk.", no: "Veterinære posisjoner om velferd for familiedyr, inkludert varmerisiko." } },
      { id: "pdsa-paw", org: "PDSA Animal Wellbeing (PAW) Report", url: "https://www.pdsa.org.uk/what-we-do/pdsa-animal-wellbeing-report", kind: "science", lastReviewed: REVIEWED,
        what: { en: "Annual survey data on how dogs are actually exercised and cared for.", no: "Årlige undersøkelsesdata om hvordan hunder faktisk mosjoneres og stelles." } },
    ],
  },
  {
    id: "welfare",
    title: { en: "Welfare and responsible ownership", no: "Dyrevelferd og ansvarlig hundehold" },
    blurb: {
      en: "The legal and ethical baseline for keeping a dog, and time alone.",
      no: "Den juridiske og etiske grunnlinjen for hundehold, og tid alene.",
    },
    usedOn: { en: "Get a dog, readiness, guides", no: "Skaffe hund, readiness, guider" },
    sources: [
      { id: "dyrevelferdsloven", org: "Lov om dyrevelferd (Lovdata)", url: "https://lovdata.no/dokument/NL/lov/2009-06-19-97", kind: "authority", lastReviewed: REVIEWED,
        what: { en: "Norwegian Animal Welfare Act — the legal duty of care.", no: "Dyrevelferdsloven — den lovpålagte omsorgsplikten." } },
      { id: "hundeloven", org: "Hundeloven (Lovdata)", url: "https://lovdata.no/dokument/NL/lov/2003-07-04-74", kind: "authority", lastReviewed: REVIEWED,
        what: { en: "Norwegian rules on leads, control and the lead-law season.", no: "Norske regler om bånd, kontroll og båndtvang." } },
      { id: "mattilsynet-welfare", org: "Mattilsynet", url: "https://www.mattilsynet.no/dyr/kjaeledyr-og-konkurransedyr/hund", kind: "authority", lastReviewed: REVIEWED,
        what: { en: "Norwegian authority guidance on keeping dogs.", no: "Norske myndigheters veiledning om hundehold." } },
      { id: "dyrebeskyttelsen", org: "Dyrebeskyttelsen Norge", url: "https://www.dyrebeskyttelsen.no/", kind: "welfare", lastReviewed: REVIEWED,
        what: { en: "Rehoming and welfare guidance in Norway.", no: "Omplassering og velferdsveiledning i Norge." } },
      { id: "rspca-welfare", org: "RSPCA", url: "https://www.rspca.org.uk/adviceandwelfare/pets/dogs", kind: "welfare", lastReviewed: REVIEWED,
        what: { en: "The five welfare needs applied to dogs.", no: "De fem velferdsbehovene anvendt på hund." } },
    ],
  },
  {
    id: "travel",
    title: { en: "Travel and border rules", no: "Reise og grenseregler" },
    blurb: {
      en: "Pet passports, rabies and tapeworm rules, and travelling by car or plane.",
      no: "Pass for kjæledyr, rabies- og bendelormregler, og reise med bil eller fly.",
    },
    usedOn: { en: "Travel, country-to-country check, travel document", no: "Reise, land-til-land-sjekk, reisedokument" },
    sources: [
      { id: "eu-pets", org: "European Commission — Movement of pets", url: "https://food.ec.europa.eu/animals/movement-pets_en", kind: "authority", lastReviewed: REVIEWED,
        what: { en: "EU pet travel scheme: passport, microchip and rabies requirements.", no: "EUs reiseordning: pass, microchip og rabieskrav." } },
      { id: "mattilsynet-travel", org: "Mattilsynet — Reise med kjæledyr", url: "https://www.mattilsynet.no/dyr/kjaeledyr-og-konkurransedyr/reise-med-kjaeledyr", kind: "authority", lastReviewed: REVIEWED,
        what: { en: "Norwegian entry rules, including tapeworm treatment.", no: "Norske innførselsregler, inkludert bendelormbehandling." } },
      { id: "gov-uk-pets", org: "GOV.UK — Take your pet abroad", url: "https://www.gov.uk/take-pet-abroad", kind: "authority", lastReviewed: REVIEWED,
        what: { en: "UK entry and exit requirements for dogs.", no: "Britiske inn- og utreisekrav for hund." } },
      { id: "iata", org: "IATA Live Animals Regulations", url: "https://www.iata.org/en/programs/cargo/live-animals/pets/", kind: "authority", lastReviewed: REVIEWED,
        what: { en: "Airline rules for carriers and flying with dogs.", no: "Flyselskapenes regler for transportbur og flyreise med hund." } },
    ],
  },
];

/** Locale-aware flattened view, handy for rendering. */
export interface ResolvedSource { id: string; org: string; what: string; url: string; kind: SourceKind; lastReviewed: string }
export interface ResolvedCategory { id: string; title: string; blurb: string; usedOn: string; sources: ResolvedSource[] }

export function resolvedSourceCategories(): ResolvedCategory[] {
  return sourceCategories.map((cat) => ({
    id: cat.id,
    title: pick(cat.title),
    blurb: pick(cat.blurb),
    usedOn: pick(cat.usedOn),
    sources: cat.sources.map((s) => ({ ...s, what: pick(s.what) })),
  }));
}

export function sourceCategory(id: string): ResolvedCategory | undefined {
  return resolvedSourceCategories().find((c) => c.id === id);
}

/** Newest review date across the registry, shown on the page. */
export function lastReviewedAll(): string {
  return sourceCategories
    .flatMap((c) => c.sources.map((s) => s.lastReviewed))
    .sort()
    .at(-1)!;
}
