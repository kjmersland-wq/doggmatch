import type { BreedId } from "./breeds";

/** Language-specific breed prose, attached to stable breed ids. */
export interface BreedContent {
  displayName: string;
  summary: string;
  strengths: string[];
  considerations: string[];
}

export const breedContentEn: Record<BreedId, BreedContent> = {
  "labrador-retriever": {
    displayName: "Labrador Retriever",
    summary:
      "An open-hearted, food-motivated working dog that has become the default family companion for good reason — and that still needs a real job to be content.",
    strengths: [
      "Loves being around people",
      "Learns quickly, especially for a treat",
      "Wonderful company, day to day",
      "Happy to join you on anything active",
      "Usually settles well into family life",
    ],
    considerations: [
      "Sheds all year round",
      "Needs a good amount of exercise every day",
      "Big and strong on the lead",
      "Gets bored without something to think about",
    ],
  },
  "golden-retriever": {
    displayName: "Golden Retriever",
    summary:
      "Gentle, biddable and endlessly patient. A Golden asks for company more than it asks for anything else.",
    strengths: [
      "Wonderfully gentle with children",
      "Loves to learn when there's a reward in it",
      "Friendly with people and other dogs",
      "Happiest outdoors in cooler weather",
    ],
    considerations: [
      "Sheds heavily a couple of times a year",
      "Needs a regular brush",
      "Finds hot weather hard",
      "Doesn't like long hours on their own",
    ],
  },
  poodle: {
    displayName: "Poodle (Standard)",
    summary:
      "An athletic, unusually intelligent dog behind an elegant coat. Thrives on problem-solving and close partnership.",
    strengths: [
      "Sheds very little",
      "Picks things up remarkably fast",
      "Fine in a flat, as long as they get out enough",
      "Playful without being chaotic",
    ],
    considerations: [
      "A trip to the groomer every 6–8 weeks",
      "Needs something to think about, not just walks",
      "Can get anxious if left alone a lot",
      "Grooming adds up over the years",
    ],
  },
  "french-bulldog": {
    displayName: "French Bulldog",
    summary:
      "A compact, comic and deeply attached city companion with modest exercise needs and real health considerations.",
    strengths: [
      "Very happy in a flat",
      "Doesn't need much exercise",
      "Affectionate, and always near you",
      "Quieter than most small dogs",
    ],
    considerations: [
      "Can struggle to breathe in heat or when working hard",
      "Vet bills tend to be higher over a lifetime",
      "Doesn't like being left alone",
      "Worth choosing a breeder who health-tests carefully",
    ],
  },
  "border-collie": {
    displayName: "Border Collie",
    summary:
      "The most trainable dog most people should not own. Brilliant, intense, and unhappy without daily work.",
    strengths: [
      "Learns almost anything you teach",
      "Brilliant at sport, scentwork and puzzles",
      "Deeply attached to their person",
      "At their best with genuinely active people",
    ],
    considerations: [
      "Needs a lot of exercise, and a lot to think about",
      "Rarely happy in a flat or a quiet routine",
      "May try to herd children or chase bikes",
      "Boredom turns into trouble quickly",
    ],
  },
  "cavalier-king-charles-spaniel": {
    displayName: "Cavalier King Charles Spaniel",
    summary:
      "A small, soft-natured companion that wants to be wherever you are. Calm company rather than a project.",
    strengths: [
      "Gentle with children and older people",
      "Perfectly content in a small home",
      "Gets on with other dogs and pets",
      "Doesn't need long walks",
    ],
    considerations: [
      "Some known inherited heart and neurological problems",
      "Rarely happy alone for long",
      "Ears and coat need regular care",
      "Always ask about health testing of the parents",
    ],
  },
  greyhound: {
    displayName: "Greyhound",
    summary:
      "A sprinter that sleeps most of the day. Quiet, clean and surprisingly well suited to calm homes.",
    strengths: [
      "Wonderfully calm indoors",
      "Easy coat, and rarely barks",
      "A couple of short bursts of running is plenty",
      "Often looking for a home through rescue",
    ],
    considerations: [
      "Strong urge to chase small animals",
      "Off-lead time needs a securely fenced space",
      "Feels the cold, so needs warmth and soft bedding",
      "Thin skin, so cuts and scrapes happen easily",
    ],
  },
  "shiba-inu": {
    displayName: "Shiba Inu",
    summary:
      "Independent, fastidious and self-contained. A Shiba respects you rather than obeys you.",
    strengths: [
      "Copes with time alone better than most",
      "Clean, almost cat-like",
      "Small but sturdy",
      "Often lives a long life",
    ],
    considerations: [
      "Independent, and recall takes real work",
      "Drops a huge amount of coat twice a year",
      "Often reserved with other dogs",
      "Not the easiest first dog",
    ],
  },
  "german-shepherd": {
    displayName: "German Shepherd",
    summary:
      "Serious, watchful and deeply loyal. A German Shepherd wants a job, a routine and someone worth working for.",
    strengths: [
      "Learns quickly and remembers",
      "Devoted to their own people",
      "Wonderful once properly socialised",
      "At their best with a daily job",
    ],
    considerations: [
      "Sheds all year, and heavily twice a year",
      "Needs an hour or more of real work each day",
      "Can be wary of strangers without early practice",
      "Hips and elbows are worth asking a breeder about",
    ],
  },
  "dachshund": {
    displayName: "Dachshund",
    summary:
      "Small, funny and braver than their legs suggest. A big personality that likes being close to you.",
    strengths: [
      "Fits happily into a small home",
      "Doesn't need long walks",
      "Bright and full of character",
      "Good company, always underfoot",
    ],
    considerations: [
      "Backs are fragile — no stairs or sofa jumps",
      "Likes the sound of their own voice",
      "Digs in and argues about training",
      "Puts on weight easily",
    ],
  },
  "beagle": {
    displayName: "Beagle",
    summary:
      "A nose on four legs. Cheerful, sociable and almost impossible to talk out of a good smell.",
    strengths: [
      "Genuinely friendly with everyone",
      "Sturdy and easy-going with children",
      "Loves other dogs",
      "Short coat, simple to keep",
    ],
    considerations: [
      "Recall is hard work — the nose usually wins",
      "Bays and howls when bored",
      "Will eat anything left out",
      "Needs a secure garden",
    ],
  },
  "cocker-spaniel": {
    displayName: "Cocker Spaniel",
    summary:
      "Soft-eyed, busy and endlessly willing. A Cocker is happiest when they're doing something with you.",
    strengths: [
      "Affectionate and keen to please",
      "Loves scentwork and games",
      "Manages town or country",
      "Good size for most homes",
    ],
    considerations: [
      "Ears need checking and cleaning often",
      "Coat mats without regular brushing",
      "Gets restless without something to do",
      "Doesn't like long hours alone",
    ],
  },
  "chihuahua": {
    displayName: "Chihuahua",
    summary:
      "Tiny, bold and completely devoted to one or two people. Small dog, full-sized opinions.",
    strengths: [
      "Perfect for a flat",
      "Very little exercise needed",
      "Long-lived, often into their teens",
      "Travels easily",
    ],
    considerations: [
      "Fragile — not a dog for rough handling",
      "Barks at anything unfamiliar",
      "Feels the cold badly",
      "Needs real socialising to stay relaxed",
    ],
  },
  "miniature-schnauzer": {
    displayName: "Miniature Schnauzer",
    summary:
      "Bearded, bright and quietly self-important. A terrier brain in a tidy, low-shedding coat.",
    strengths: [
      "Sheds very little",
      "Sharp and quick to learn",
      "Suits a flat or a house",
      "Sturdy for a small dog",
    ],
    considerations: [
      "Clipping every 6–8 weeks",
      "Barks at the door, the post, the wind",
      "Not keen on small pets",
      "Prone to weight gain",
    ],
  },
  "bernese-mountain-dog": {
    displayName: "Bernese Mountain Dog",
    summary:
      "Enormous, gentle and calm. A Berner is soft company for a family with space and a soft spot for hair.",
    strengths: [
      "Wonderfully patient with children",
      "Calm indoors for such a big dog",
      "Loves cold weather",
      "Kind-natured and steady",
    ],
    considerations: [
      "Shorter lives than most breeds",
      "A lot of coat, all over the house",
      "Costs more to feed, insure and treat",
      "Struggles badly in heat",
    ],
  },
  "australian-shepherd": {
    displayName: "Australian Shepherd",
    summary:
      "Quick, athletic and always watching. An Aussie needs a purpose more than a garden.",
    strengths: [
      "Brilliant at anything you teach",
      "Loves sport, tricks and scentwork",
      "Very attached to their person",
      "Handsome and hardy outdoors",
    ],
    considerations: [
      "Needs hours of activity, every day",
      "Herds children, bikes and joggers",
      "Bored quickly, and noisy about it",
      "Rarely suited to a flat",
    ],
  },
  "jack-russell-terrier": {
    displayName: "Jack Russell Terrier",
    summary:
      "Small, fast and utterly convinced of themselves. Great fun if you like a dog with an engine.",
    strengths: [
      "Tough, healthy and long-lived",
      "Fits in a small home",
      "Endlessly playful",
      "Copes with time alone better than most",
    ],
    considerations: [
      "Chases anything small and quick",
      "Digs, and means it",
      "Can be scrappy with other dogs",
      "Needs far more exercise than their size suggests",
    ],
  },
  "siberian-husky": {
    displayName: "Siberian Husky",
    summary:
      "Beautiful, friendly and built to run all day. A Husky rarely does what you want just because you asked.",
    strengths: [
      "Sociable with people and dogs",
      "Made for cold weather and long distances",
      "Rarely barks",
      "Clean, with little doggy smell",
    ],
    considerations: [
      "Escapes gardens and doesn't come back",
      "Recall is a lifelong project",
      "Blows coat twice a year, everywhere",
      "Suffers in warm climates",
    ],
  },
  "boxer": {
    displayName: "Boxer",
    summary:
      "A clown who never quite grows up. Boisterous, warm-hearted and always in the middle of things.",
    strengths: [
      "Marvellous with children",
      "Playful well into old age",
      "Short coat, easy to keep",
      "Learns well with kind, upbeat training",
    ],
    considerations: [
      "Bouncy and strong — jumps up",
      "Overheats quickly with a short nose",
      "Some serious health conditions in the breed",
      "Slobbers",
    ],
  },
  "rottweiler": {
    displayName: "Rottweiler",
    summary:
      "Powerful, level-headed and quietly confident. A Rottweiler needs an owner who knows what they're doing.",
    strengths: [
      "Steady and self-assured when well raised",
      "Learns quickly and works willingly",
      "Loyal and protective of family",
      "Easy coat",
    ],
    considerations: [
      "Very strong — training must be solid",
      "Needs careful socialising from day one",
      "Insurance and food cost more",
      "Some places restrict the breed",
    ],
  },
  "whippet": {
    displayName: "Whippet",
    summary:
      "A sofa dog with a sprinter's body. Quiet, affectionate and remarkably easy to live with.",
    strengths: [
      "Calm and undemanding at home",
      "Almost no grooming",
      "Two short sprints a day is enough",
      "Gentle and quiet",
    ],
    considerations: [
      "Chases anything that runs",
      "Needs fenced space for off-lead time",
      "Feels the cold — coats and blankets",
      "Thin skin tears easily",
    ],
  },
  "shih-tzu": {
    displayName: "Shih Tzu",
    summary:
      "Made to be a companion, and very good at it. Happy on a lap, happy in a small flat.",
    strengths: [
      "Ideal for city living",
      "Friendly with almost everyone",
      "Sheds very little",
      "Doesn't need long walks",
    ],
    considerations: [
      "Daily brushing, or clip it short",
      "Short nose means heat is dangerous",
      "Eyes need watching and wiping",
      "Housetraining can take patience",
    ],
  },
  "pug": {
    displayName: "Pug",
    summary:
      "Comic, affectionate and shadow-close. A Pug asks for company far more than exercise.",
    strengths: [
      "Loves everyone, dogs included",
      "Fine in the smallest home",
      "Easy-going and funny",
      "Little exercise needed",
    ],
    considerations: [
      "Breathing problems are common",
      "Heat can be dangerous",
      "Puts on weight very easily",
      "Wrinkles and eyes need daily care",
    ],
  },
  "bichon-frise": {
    displayName: "Bichon Frise",
    summary:
      "A small white cloud with a cheerful streak. Sociable, bright and happiest with people around.",
    strengths: [
      "Sheds very little",
      "Friendly with children and other dogs",
      "Suits flats and small gardens",
      "Learns quickly and loves praise",
    ],
    considerations: [
      "Groomer every 4–6 weeks",
      "Really doesn't cope with being left alone",
      "Skin and ears need attention",
      "Housetraining takes consistency",
    ],
  },
  "staffordshire-bull-terrier": {
    displayName: "Staffordshire Bull Terrier",
    summary:
      "Muscular, soft-hearted and famously fond of children. A Staffie loves their people without reservation.",
    strengths: [
      "Wonderful family dog when well raised",
      "Short coat, very easy care",
      "Sturdy and playful",
      "Eager to please",
    ],
    considerations: [
      "Can be difficult with other dogs",
      "Strong for their size on the lead",
      "Chews through soft toys and beds",
      "Restricted or misjudged in some places",
    ],
  },
  "vizsla": {
    displayName: "Vizsla",
    summary:
      "The velcro dog. Athletic, sensitive and never more than a metre away from you.",
    strengths: [
      "Beautiful, quiet and clean",
      "Brilliant running or hiking companion",
      "Very affectionate",
      "Almost no grooming",
    ],
    considerations: [
      "Cannot be left alone for long",
      "Needs an hour or two of hard exercise daily",
      "Sensitive to harsh voices",
      "Feels the cold on winter walks",
    ],
  },
  "samoyed": {
    displayName: "Samoyed",
    summary:
      "The smiling snow dog. Sociable, chatty and beautiful — and a great deal of coat.",
    strengths: [
      "Genuinely friendly with everyone",
      "Loves cold weather and snow",
      "Playful and family-minded",
      "Rarely aggressive",
    ],
    considerations: [
      "Sheds an astonishing amount",
      "Brushing several times a week",
      "Talks, howls and complains",
      "Overheats easily in summer",
    ],
  },
  "yorkshire-terrier": {
    displayName: "Yorkshire Terrier",
    summary:
      "Tiny, sharp and full of terrier. A Yorkie is bolder than anyone expects.",
    strengths: [
      "Barely sheds",
      "Perfect size for a flat",
      "Bright and quick to learn",
      "Often lives a long life",
    ],
    considerations: [
      "Coat needs daily care or a short clip",
      "Barks at everything",
      "Delicate — easily hurt underfoot",
      "Housetraining can be slow",
    ],
  },
};
