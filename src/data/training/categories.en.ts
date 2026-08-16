import type { TrainingCategory, TrainingGoal } from "./types";

export const trainingCategories: TrainingCategory[] = [
  {
    id: "puppy-foundations",
    title: "Puppy foundations",
    blurb: "The gentle beginnings — your name, your voice, and learning that people are good company.",
    covers: ["Name", "Eye contact", "Sit", "Down", "Stay", "Recall", "Leave it", "Handling", "Settling", "House training", "Biting", "Chewing", "Meeting the world"],
  },
  {
    id: "everyday-manners",
    title: "Everyday manners",
    blurb: "The small things that make ordinary days easier for both of you.",
    covers: ["Greeting people", "Calm hellos", "Not jumping up", "Waiting", "Doorways", "Mealtimes", "Settling", "Waiting your turn"],
  },
  {
    id: "walking",
    title: "Walking together",
    blurb: "A walk that feels like a walk, not a tug of war.",
    covers: ["Loose leash", "Checking in outdoors", "Stopping", "Turning", "Distractions", "Passing other dogs calmly"],
  },
  {
    id: "home",
    title: "Life at home",
    blurb: "Rest, quiet and a dog who knows how to switch off.",
    covers: ["Calm at home", "Being alone", "Settling", "Barking", "Visitors", "Everyday routines"],
  },
  {
    id: "socialisation",
    title: "Meeting the world",
    blurb: "New places and new faces, taken slowly and at your dog's pace.",
    covers: ["People", "Other dogs", "New places", "Sounds", "Travel", "Being handled", "Grooming"],
  },
  {
    id: "recall-safety",
    title: "Recall & safety",
    blurb: "Coming back to you, even when something more interesting is happening.",
    covers: ["Name", "Attention", "Come", "Emergency recall", "Leave it", "Drop it"],
  },
  {
    id: "tricks-games",
    title: "Tricks & games",
    blurb: "The fun part. Also, quietly, some of the best training you'll do.",
    covers: ["Paw", "Spin", "Roll over", "Touch", "Find it", "Fetch", "Go to your place", "Hide and seek"],
  },
  {
    id: "mental-stimulation",
    title: "Things to think about",
    blurb: "Ten minutes of sniffing and searching can tire a dog more than an hour of running.",
    covers: ["Scent games", "Puzzles", "Searching", "Problem solving", "Enrichment", "Calm brain games"],
  },
];

export const trainingGoals: TrainingGoal[] = [
  { id: "puppy-basics", label: "Puppy basics", hint: "Where most people start" },
  { id: "calm-at-home", label: "Calm at home", hint: "Learning to switch off" },
  { id: "loose-leash", label: "Walking nicely", hint: "Less pulling, more walking" },
  { id: "recall", label: "Coming when called", hint: "One of the most useful of all" },
  { id: "sit-down-stay", label: "Sit, down & stay", hint: "The everyday words" },
  { id: "potty-training", label: "House training", hint: "Fewer accidents, less stress" },
  { id: "puppy-biting", label: "Puppy biting", hint: "Those needle teeth" },
  { id: "leave-it", label: "Leave it", hint: "For the things on the pavement" },
  { id: "socialisation", label: "Meeting the world", hint: "People, dogs, places, sounds" },
  { id: "barking", label: "Barking", hint: "Understanding it, then easing it" },
  { id: "calmness", label: "Settling", hint: "Rest is a skill too" },
  { id: "manners", label: "Everyday manners", hint: "Doors, visitors, dinner time" },
  { id: "mental", label: "Something to think about", hint: "Sniffing, searching, puzzles" },
  { id: "tricks", label: "Tricks & games", hint: "Because it's fun" },
];
