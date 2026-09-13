import type { TrainingCategory, TrainingGoal } from "./types";

export const trainingCategories: TrainingCategory[] = [
  {
    id: "puppy-foundations",
    title: "Valpens grunder",
    blurb: "De milda första stegen — ditt namn, din röst och att lära sig att människor är gott sällskap.",
    covers: ["Namn", "Ögonkontakt", "Sitt", "Ligg", "Stanna", "Inkallning", "Lämna", "Hantering", "Ro", "Renlighetsträning", "Bitande", "Tuggande", "Möta världen"],
  },
  {
    id: "everyday-manners",
    title: "Vardagsvett",
    blurb: "De små sakerna som gör vanliga dagar lättare för er båda.",
    covers: ["Hälsa på folk", "Lugna hälsningar", "Att inte hoppa upp", "Att vänta", "Dörrar", "Måltider", "Ro", "Att vänta på sin tur"],
  },
  {
    id: "walking",
    title: "Att gå tillsammans",
    blurb: "En promenad som känns som en promenad, inte en dragkamp.",
    covers: ["Lös koppel", "Kolla in utomhus", "Att stanna", "Att svänga", "Distraktioner", "Att passera andra hundar lugnt"],
  },
  {
    id: "home",
    title: "Livet hemma",
    blurb: "Vila, ro och en hund som vet hur man kopplar av.",
    covers: ["Lugn hemma", "Att vara ensam", "Ro", "Skällande", "Besökare", "Vardagsrutiner"],
  },
  {
    id: "socialisation",
    title: "Möta världen",
    blurb: "Nya platser och nya ansikten, i lugn takt och efter din hunds tempo.",
    covers: ["Människor", "Andra hundar", "Nya platser", "Ljud", "Resande", "Att bli hanterad", "Pälsvård"],
  },
  {
    id: "recall-safety",
    title: "Inkallning & säkerhet",
    blurb: "Att komma tillbaka till dig, även när något mer spännande pågår.",
    covers: ["Namn", "Uppmärksamhet", "Kom", "Nödinkallning", "Lämna", "Släpp"],
  },
  {
    id: "tricks-games",
    title: "Trick & lekar",
    blurb: "Den roliga delen. Också, i tysthet, en del av den bästa träningen du gör.",
    covers: ["Tass", "Snurra", "Rulla runt", "Rör", "Hitta", "Hämta", "Gå till din plats", "Kurragömma"],
  },
  {
    id: "mental-stimulation",
    title: "Saker att fundera på",
    blurb: "Tio minuters sniffande och sökande kan trötta ut en hund mer än en timmes springande.",
    covers: ["Doftlekar", "Pussel", "Sökande", "Problemlösning", "Berikning", "Lugna hjärnlekar"],
  },
];

export const trainingGoals: TrainingGoal[] = [
  { id: "puppy-basics", label: "Valpens grunder", hint: "Där de flesta börjar" },
  { id: "calm-at-home", label: "Lugn hemma", hint: "Att lära sig koppla av" },
  { id: "loose-leash", label: "Gå fint i koppel", hint: "Mindre drag, mer promenad" },
  { id: "recall", label: "Att komma när man blir kallad", hint: "En av de mest användbara av alla" },
  { id: "sit-down-stay", label: "Sitt, ligg & stanna", hint: "Vardagsorden" },
  { id: "potty-training", label: "Renlighetsträning", hint: "Färre olyckor, mindre stress" },
  { id: "puppy-biting", label: "Valpbitande", hint: "De där nåltänderna" },
  { id: "leave-it", label: "Lämna", hint: "För sakerna på trottoaren" },
  { id: "socialisation", label: "Möta världen", hint: "Människor, hundar, platser, ljud" },
  { id: "barking", label: "Skällande", hint: "Att förstå det, sedan lindra det" },
  { id: "calmness", label: "Ro", hint: "Vila är också en färdighet" },
  { id: "manners", label: "Vardagsvett", hint: "Dörrar, besökare, middagstid" },
  { id: "mental", label: "Något att fundera på", hint: "Sniffande, sökande, pussel" },
  { id: "tricks", label: "Trick & lekar", hint: "För att det är roligt" },
];
