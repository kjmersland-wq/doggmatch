import type { TrainingCategory, TrainingGoal } from "./types";

export const trainingCategories: TrainingCategory[] = [
  {
    id: "puppy-foundations",
    title: "Podstawy dla szczeniaka",
    blurb: "Łagodne początki — twoje imię, twój głos i nauka, że ludzie to dobre towarzystwo.",
    covers: ["Imię", "Kontakt wzrokowy", "Siad", "Waruj", "Zostań", "Przywołanie", "Zostaw to", "Obsługa", "Uspokajanie się", "Nauka czystości", "Gryzienie", "Żucie", "Poznawanie świata"],
  },
  {
    id: "everyday-manners",
    title: "Codzienne maniery",
    blurb: "Drobiazgi, które ułatwiają zwykłe dni wam obojgu.",
    covers: ["Witanie ludzi", "Spokojne powitania", "Nieskakanie", "Czekanie", "Drzwi", "Pory posiłków", "Uspokajanie się", "Czekanie na swoją kolej"],
  },
  {
    id: "walking",
    title: "Wspólne spacery",
    blurb: "Spacer, który jest spacerem, a nie przeciąganiem liny.",
    covers: ["Luźna smycz", "Meldowanie się na zewnątrz", "Zatrzymywanie się", "Zawracanie", "Rozpraszacze", "Spokojne mijanie innych psów"],
  },
  {
    id: "home",
    title: "Życie w domu",
    blurb: "Odpoczynek, spokój i pies, który wie, jak się wyłączyć.",
    covers: ["Spokój w domu", "Bycie samemu", "Uspokajanie się", "Szczekanie", "Goście", "Codzienne rutyny"],
  },
  {
    id: "socialisation",
    title: "Poznawanie świata",
    blurb: "Nowe miejsca i nowe twarze, poznawane powoli i w tempie twojego psa.",
    covers: ["Ludzie", "Inne psy", "Nowe miejsca", "Dźwięki", "Podróże", "Dotyk", "Pielęgnacja"],
  },
  {
    id: "recall-safety",
    title: "Przywołanie i bezpieczeństwo",
    blurb: "Powrót do ciebie, nawet gdy dzieje się coś ciekawszego.",
    covers: ["Imię", "Uwaga", "Chodź", "Przywołanie awaryjne", "Zostaw to", "Puść"],
  },
  {
    id: "tricks-games",
    title: "Sztuczki i zabawy",
    blurb: "Ta zabawna część. A także, po cichu, jedne z najlepszych treningów, jakie zrobicie.",
    covers: ["Łapa", "Obrót", "Przewrót", "Dotknij", "Znajdź to", "Aportowanie", "Idź na miejsce", "Chowanego"],
  },
  {
    id: "mental-stimulation",
    title: "Rzeczy do przemyślenia",
    blurb: "Dziesięć minut węszenia i szukania może zmęczyć psa bardziej niż godzina biegania.",
    covers: ["Zabawy węchowe", "Układanki", "Szukanie", "Rozwiązywanie problemów", "Wzbogacanie środowiska", "Spokojne gry mentalne"],
  },
];

export const trainingGoals: TrainingGoal[] = [
  { id: "puppy-basics", label: "Podstawy dla szczeniaka", hint: "Tu zaczyna większość ludzi" },
  { id: "calm-at-home", label: "Spokój w domu", hint: "Nauka wyłączania się" },
  { id: "loose-leash", label: "Ładne chodzenie", hint: "Mniej ciągnięcia, więcej spacerowania" },
  { id: "recall", label: "Przychodzenie na wołanie", hint: "Jedna z najbardziej przydatnych umiejętności" },
  { id: "sit-down-stay", label: "Siad, waruj i zostań", hint: "Codzienne słowa" },
  { id: "potty-training", label: "Nauka czystości", hint: "Mniej wypadków, mniej stresu" },
  { id: "puppy-biting", label: "Gryzienie szczeniaka", hint: "Te ostre ząbki" },
  { id: "leave-it", label: "Zostaw to", hint: "Na rzeczy leżące na chodniku" },
  { id: "socialisation", label: "Poznawanie świata", hint: "Ludzie, psy, miejsca, dźwięki" },
  { id: "barking", label: "Szczekanie", hint: "Najpierw zrozumieć, potem łagodzić" },
  { id: "calmness", label: "Uspokajanie się", hint: "Odpoczynek to też umiejętność" },
  { id: "manners", label: "Codzienne maniery", hint: "Drzwi, goście, pora obiadu" },
  { id: "mental", label: "Coś do przemyślenia", hint: "Węszenie, szukanie, układanki" },
  { id: "tricks", label: "Sztuczki i zabawy", hint: "Bo to zabawa" },
];
