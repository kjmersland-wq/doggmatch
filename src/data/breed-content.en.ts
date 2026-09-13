import type { BreedId } from "./breeds";
import { breedContentNewEn } from "./breed-content-new.en";

/** Language-specific breed prose, attached to stable breed ids. */
export interface BreedContent {
  displayName: string;
  summary: string;
  strengths: string[];
  considerations: string[];
  originalPurpose?: string;
  healthConsiderations?: string;
  poorMatchFor?: string[];
  keyTradeoffs?: string[];
}

export const breedContentEn = {
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
      "Sheds year-round — you'll want a decent hoover",
      "Needs a proper walk every single day, not just at weekends",
      "Big and strong on the lead until they're taught otherwise",
      "Bored quickly without a job, and a bored Lab finds mischief",
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
      "Sheds heavily twice a year — expect tumbleweeds of fur",
      "Needs a proper brush most weeks or the coat gets matted",
      "Struggles in hot weather, so summer walks want early starts",
      "Genuinely dislikes being left for long stretches",
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
      "A trip to the groomer every 6–8 weeks, and it isn't cheap",
      "Needs puzzles and training, not just miles on the lead",
      "Can get genuinely anxious if left alone too often",
      "Grooming costs add up steadily over the years",
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
      "Can struggle to breathe in heat or after any real effort",
      "Vet bills tend to run higher over a lifetime",
      "Doesn't cope well left alone for a full working day",
      "Worth insisting on a breeder who health-tests properly",
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
      "Needs serious daily exercise and something to think about too",
      "Rarely settles happily in a flat or a quiet routine",
      "May try to herd children, cyclists or the cat",
      "An under-stimulated Collie turns that brain to trouble fast",
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
      "Some well-known inherited heart and neurological conditions",
      "Rarely happy left alone for long — a proper velcro dog",
      "Ears and coat need regular checking and care",
      "Always ask to see health testing on both parents",
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
      "A strong urge to chase anything small and fast",
      "Off-lead time needs a properly, securely fenced space",
      "Feels the cold badly, so a coat and soft bedding are non-negotiable",
      "Thin skin means cuts and scrapes happen more easily than you'd think",
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
      "Independent by nature — recall takes real, patient work",
      "Blows a huge amount of coat twice a year, everywhere",
      "Often reserved or standoffish with other dogs",
      "Not the most forgiving first dog if you're new to training",
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
      "Sheds year-round, then heavily twice a year on top",
      "Needs an hour or more of real work each day, not just a stroll",
      "Can be wary of strangers without early, deliberate socialising",
      "Worth asking any breeder about hip and elbow health testing",
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
      "Backs are genuinely fragile — no stairs or jumping off the sofa",
      "Likes the sound of their own voice, often at the doorbell",
      "Can be stubborn about training — expect to negotiate",
      "Puts on weight easily, which is hard on that long back",
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
      "Recall is hard work — the nose usually wins the argument",
      "Bays and howls when bored or left alone too long",
      "Will eat absolutely anything left within reach",
      "Needs a genuinely secure garden, not just a low fence",
    ],
  },
  "cocker-spaniel": {
    displayName: "Cocker Spaniel",
    summary:
      "Soft-eyed, busy and endlessly willing. A Cocker is happiest when they're doing something with you.",
    strengths: [
      "Affectionate and keen to please",
      "Loves scentwork and games",
      "Manages town or country living",
      "Good size for most homes",
    ],
    considerations: [
      "Ears need checking and cleaning often, or infections follow",
      "Coat mats quickly without a regular, proper brush",
      "Gets fidgety and restless without a job to do",
      "Doesn't cope well with long hours alone",
    ],
  },
  "chihuahua": {
    displayName: "Chihuahua",
    summary:
      "Tiny, bold and completely devoted to one or two people. Small dog, full-sized opinions.",
    strengths: [
      "Perfect for a flat",
      "Very little exercise needed",
      "Long-lived, often well into their teens",
      "Travels easily",
    ],
    considerations: [
      "Genuinely fragile — not a dog for boisterous handling",
      "Tends to bark at anything unfamiliar, delivery drivers included",
      "Feels the cold badly and needs a coat in winter",
      "Needs real, deliberate socialising to stay relaxed and not snappy",
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
      "Clipping every 6–8 weeks, which adds up in cost",
      "Tends to bark at the door, the post and the wind",
      "Not always keen on smaller pets in the house",
      "Prone to putting on weight, so portions matter",
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
      "A shorter lifespan than most breeds — an honest heartbreak to weigh up",
      "A lot of coat, all over the house, most of the year",
      "Costs noticeably more to feed, insure and treat",
      "Struggles badly once the weather turns warm",
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
      "Needs hours of real activity, every single day",
      "Will herd children, bikes and joggers if under-exercised",
      "Gets bored quickly, and noisy about it when they are",
      "Rarely a good fit for flat living",
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
      "Chases anything small and quick, squirrels included",
      "Digs, and means it — your lawn is not safe",
      "Can be scrappy with other dogs, especially unfamiliar ones",
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
      "Escapes gardens with real determination and doesn't reliably come back",
      "Recall is a lifelong project, not a weekend fix",
      "Blows their coat twice a year — everywhere, for weeks",
      "Genuinely suffers in warm climates or a hot summer",
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
      "Bouncy and strong — jumping up needs early training",
      "Overheats quickly given that short nose",
      "Some serious inherited health conditions in the breed",
      "A confirmed slobberer — keep a cloth handy",
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
      "Very strong — lead training has to be solid from the start",
      "Needs careful, deliberate socialising from day one",
      "Insurance and food cost noticeably more",
      "Some places and insurers restrict the breed — worth checking first",
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
      "Chases anything that runs, cats and joggers included",
      "Needs securely fenced space for any off-lead time",
      "Feels the cold — a coat isn't optional in winter",
      "Thin skin tears more easily than you'd expect",
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
      "Daily brushing, or a short clip to keep on top of it",
      "That short nose makes heat genuinely dangerous",
      "Eyes need daily watching and wiping",
      "Housetraining can take real patience",
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
      "Breathing problems are common in the breed",
      "Heat can turn dangerous surprisingly fast",
      "Puts on weight very easily — portions matter a lot",
      "Wrinkles and eyes need proper daily care",
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
      "A groomer visit every 4–6 weeks, and it isn't optional",
      "Really doesn't cope with being left alone for long",
      "Skin and ears need regular attention",
      "Housetraining needs real consistency to stick",
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
      "Can be difficult around other dogs without careful early handling",
      "Surprisingly strong for their size on the lead",
      "Chews through soft toys and beds with real enthusiasm",
      "Unfairly restricted or misjudged in some places — worth knowing before you commit",
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
      "Struggles badly if left alone for full working days",
      "Needs an hour or two of proper hard exercise daily",
      "Sensitive to a raised voice — kind training only",
      "Feels the cold sharply on winter walks",
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
      "Sheds an honestly astonishing amount",
      "Needs brushing several times a week to keep on top of it",
      "Talks, howls and voices an opinion regularly",
      "Overheats easily once summer arrives",
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
      "Coat needs daily care, or a short clip to keep it simple",
      "Tends to bark at everything, delivery drivers included",
      "Delicate underfoot — easy to hurt without meaning to",
      "Housetraining can be slower than you'd expect",
    ],
  },
  ...breedContentNewEn,
} as Record<BreedId, BreedContent>;
