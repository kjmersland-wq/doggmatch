import type { BreedTraits } from "@/data/breeds";
import type { Locale } from "@/i18n";

/** Reader-facing name of every breed trait, in all nine languages. */
export const traitLabels: Record<keyof BreedTraits, Record<Locale, string>> = {
  size: { en: "Size", no: "Størrelse", pl: "Rozmiar", dk: "Størrelse", se: "Storlek", fi: "Koko", de: "Größe", fr: "Taille", nl: "Grootte" },
  energy: { en: "Energy", no: "Energi", pl: "Energia", dk: "Energi", se: "Energi", fi: "Energia", de: "Energie", fr: "Énergie", nl: "Energie" },
  exerciseNeeds: { en: "Exercise needs", no: "Mosjonsbehov", pl: "Potrzeby ruchowe", dk: "Motionsbehov", se: "Motionsbehov", fi: "Liikunnan tarve", de: "Bewegungsbedarf", fr: "Besoin d'exercice", nl: "Behoefte aan beweging" },
  mentalStimulation: { en: "Mental stimulation", no: "Mental stimulering", pl: "Stymulacja umysłowa", dk: "Mental stimulering", se: "Mental stimulans", fi: "Henkinen aktivointi", de: "Geistige Auslastung", fr: "Stimulation mentale", nl: "Mentale prikkeling" },
  trainability: { en: "Trainability", no: "Lærevillighet", pl: "Podatność na szkolenie", dk: "Lærevillighed", se: "Lättlärdhet", fi: "Koulutettavuus", de: "Erziehbarkeit", fr: "Facilité d'éducation", nl: "Leerbaarheid" },
  learningAbility: { en: "Learning ability", no: "Læreevne", pl: "Zdolność uczenia się", dk: "Indlæringsevne", se: "Inlärningsförmåga", fi: "Oppimiskyky", de: "Lernfähigkeit", fr: "Capacité d'apprentissage", nl: "Leervermogen" },
  independence: { en: "Independence", no: "Selvstendighet", pl: "Niezależność", dk: "Selvstændighed", se: "Självständighet", fi: "Itsenäisyys", de: "Eigenständigkeit", fr: "Indépendance", nl: "Zelfstandigheid" },
  affection: { en: "Affection", no: "Kosete", pl: "Czułość", dk: "Kærlig", se: "Tillgivenhet", fi: "Hellyys", de: "Anhänglichkeit", fr: "Affection", nl: "Aanhankelijkheid" },
  sociability: { en: "Sociability", no: "Sosial med folk", pl: "Towarzyskość z ludźmi", dk: "Social med mennesker", se: "Social med människor", fi: "Sosiaalisuus ihmisten kanssa", de: "Geselligkeit mit Menschen", fr: "Sociabilité avec les gens", nl: "Sociaal met mensen" },
  goodWithChildren: { en: "Good with children", no: "Passer med barn", pl: "Dobrze z dziećmi", dk: "God med børn", se: "Bra med barn", fi: "Sopii lasten kanssa", de: "Kinderfreundlich", fr: "Bon avec les enfants", nl: "Goed met kinderen" },
  goodWithDogs: { en: "Good with other dogs", no: "Passer med andre hunder", pl: "Dobrze z innymi psami", dk: "God med andre hunde", se: "Bra med andra hundar", fi: "Tulee toimeen muiden koirien kanssa", de: "Verträgt sich mit anderen Hunden", fr: "Bon avec les autres chiens", nl: "Goed met andere honden" },
  goodWithPets: { en: "Good with other pets", no: "Passer med andre dyr", pl: "Dobrze z innymi zwierzętami", dk: "God med andre dyr", se: "Bra med andra djur", fi: "Tulee toimeen muiden lemmikkien kanssa", de: "Verträgt sich mit anderen Haustieren", fr: "Bon avec les autres animaux", nl: "Goed met andere huisdieren" },
  apartmentSuitability: { en: "Apartment suitability", no: "Passer i leilighet", pl: "Do mieszkania", dk: "Egnet til lejlighed", se: "Passar i lägenhet", fi: "Sopivuus kerrostaloon", de: "Wohnungstauglichkeit", fr: "Adapté à la vie en appartement", nl: "Geschikt voor een appartement" },
  aloneTolerance: { en: "Tolerance of being alone", no: "Tåler å være alene", pl: "Tolerancja samotności", dk: "Kan være alene", se: "Klarar att vara ensam", fi: "Yksinolon sietokyky", de: "Verträgt Alleinsein", fr: "Tolérance à la solitude", nl: "Verdraagt alleen zijn" },
  shedding: { en: "Shedding", no: "Pelsfelling", pl: "Linienie", dk: "Fældning", se: "Fällning", fi: "Karvanlähtö", de: "Fellwechsel", fr: "Perte de poils", nl: "Verharen" },
  grooming: { en: "Grooming", no: "Pelsstell", pl: "Pielęgnacja sierści", dk: "Pelspleje", se: "Pälsvård", fi: "Turkinhoito", de: "Fellpflege", fr: "Toilettage", nl: "Vachtverzorging" },
  drooling: { en: "Drooling", no: "Sikling", pl: "Ślinienie się", dk: "Savlen", se: "Dregling", fi: "Kuolaaminen", de: "Sabbern", fr: "Bave", nl: "Kwijlen" },
  barking: { en: "Barking", no: "Bjeffing", pl: "Szczekanie", dk: "Gøen", se: "Skällande", fi: "Haukkuminen", de: "Bellen", fr: "Aboiements", nl: "Blaffen" },
  firstTimeSuitability: { en: "First-time owner suitability", no: "Passer for førstegangseiere", pl: "Odpowiedni dla początkujących", dk: "Egnet til førstegangsejere", se: "Passar förstagångsägare", fi: "Sopivuus ensikertalaiselle", de: "Geeignet für Ersthundehalter", fr: "Adapté aux primo-adoptants", nl: "Geschikt voor beginners" },
  strengthRequired: { en: "Strength needed", no: "Krever styrke", pl: "Wymagana siła", dk: "Kræver styrke", se: "Kräver styrka", fi: "Vaatii voimaa", de: "Benötigte Kraft", fr: "Force nécessaire", nl: "Benodigde kracht" },
  heatTolerance: { en: "Heat tolerance", no: "Tåler varme", pl: "Tolerancja upału", dk: "Tåler varme", se: "Tål värme", fi: "Lämmönsieto", de: "Hitzeverträglichkeit", fr: "Tolérance à la chaleur", nl: "Verdraagt warmte" },
  coldTolerance: { en: "Cold tolerance", no: "Tåler kulde", pl: "Tolerancja zimna", dk: "Tåler kulde", se: "Tål kyla", fi: "Kylmänsieto", de: "Kälteverträglichkeit", fr: "Tolérance au froid", nl: "Verdraagt kou" },
};
