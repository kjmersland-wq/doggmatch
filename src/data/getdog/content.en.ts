/**
 * Everything the Get A Dog journey says out loud, in the DoggMatch voice.
 * Kept out of the components so it can be translated later without touching
 * a single piece of layout.
 */

export interface JourneyStep {
  id: string;
  no: string;
  title: string;
  body: string;
  to: string;
}

export const journey: JourneyStep[] = [
  { id: "ready", no: "01", title: "Is a dog right for me?", body: "A few honest questions about your days, your home and the people around you.", to: "/get-a-dog/ready" },
  { id: "find", no: "02", title: "Find my dog", body: "See which breeds tend to suit a life like yours — and why.", to: "/find-my-dog" },
  { id: "choose", no: "03", title: "Choose carefully", body: "Puppy or adult, breeder or rescue, and what to ask before you say yes.", to: "/get-a-dog/choose" },
  { id: "costs", no: "04", title: "Understand the commitment", body: "What a dog really costs, before they arrive and every month after.", to: "/get-a-dog/costs" },
  { id: "prepare", no: "05", title: "Get ready", body: "The shopping, the vet, the insurance — and getting your home sorted.", to: "/get-a-dog/prepare" },
  { id: "welcome", no: "06", title: "Welcome home", body: "The first day and the first week, taken gently.", to: "/get-a-dog/welcome-home" },
  { id: "mydog", no: "07", title: "My Dog", body: "Their whole life in one place — food, training, health, walks and paperwork.", to: "/my-dog" },
];

/* ------------------------------------------------------------ Puppy / adult */

export const puppyVsAdult = {
  title: "Puppy, or a dog who's already grown up?",
  body: "Neither is better. They're two quite different first years, and the right one depends far more on your life than on the dog.",
  puppy: {
    title: "A puppy",
    lead: "You get to shape almost everything — and you pay for it in sleep.",
    good: [
      "You see every stage of who they become",
      "Socialising and habits start with you",
      "Usually easier to introduce to other pets and children",
      "A long life ahead of you together",
    ],
    hard: [
      "Broken nights, toilet training and chewing, for months",
      "Needs company for most of the day at first",
      "Personality is still a guess, even with a careful breeder",
      "Vaccinations, neutering and early vet costs land in year one",
    ],
  },
  adult: {
    title: "An adult dog",
    lead: "Much more of what you see is what you get.",
    good: [
      "Size, coat and temperament are already clear",
      "Many are house-trained and can settle alone",
      "Often calmer from day one",
      "Rescues usually come with an honest assessment of the dog",
    ],
    hard: [
      "They arrive with a history you may only partly know",
      "Some habits take patience to change",
      "Fewer years together, especially with an older dog",
      "Settling in can take weeks, not days",
    ],
  },
  closing:
    "If your days are already full, an adult dog who knows how to be a dog is often the kinder choice — for you and for them.",
};

/* -------------------------------------------------------------- The source */

export const sources = {
  title: "Where will your dog come from?",
  body: "Both routes can bring you a wonderful dog. Both are worth a few careful questions. Neither is automatically the right answer.",
  breeder: {
    title: "A responsible breeder",
    good: [
      "You meet the mother and see how the puppies are being raised",
      "Health testing relevant to the breed has usually been done",
      "You get a fairly clear idea of adult size, coat and temperament",
      "A good breeder stays in touch for the dog's whole life",
    ],
    check: [
      "Are the puppies raised in a home, around normal household life?",
      "What health testing has been done, and can you see the results?",
      "How many litters do they have, and of how many breeds?",
      "Will they take the dog back if your circumstances ever change?",
    ],
  },
  rescue: {
    title: "Adoption or rescue",
    good: [
      "Adult dogs come with a personality you can actually meet",
      "Good rescues assess and describe their dogs honestly",
      "Often already vaccinated, chipped and neutered",
      "Support after adoption is usually part of the deal",
    ],
    check: [
      "What do they know about the dog's history and previous home?",
      "How does the dog behave around children, other dogs and cats?",
      "What health information comes with them?",
      "What help is there if the first weeks are hard?",
    ],
  },
};

export const breederQuestions = [
  "Can I meet the mother?",
  "Can I see where the puppies are being raised?",
  "What health testing has been done for this breed?",
  "What veterinary care have the puppies had so far?",
  "How have they been socialised — what have they met and heard?",
  "What support is there after I take the puppy home?",
  "What documentation will I receive?",
  "Can I take a few days to decide?",
];

export const breederRedFlags = [
  "You're pressed to pay or decide immediately",
  "You can't see where the puppies live, or meet the mother",
  "Health or vaccination documentation is missing or vague",
  "Straightforward questions get evasive answers",
  "An unusually large number of unrelated litters, or many breeds at once",
  "A puppy looks unwell, or is extremely fearful of ordinary things",
  "The story changes between conversations",
];

export const adoptionConsiderations = [
  { title: "History", body: "Some dogs arrive with a full story, others with almost none. A good rescue will tell you honestly which one this is." },
  { title: "Temperament", body: "Ask what they've actually seen: with strangers, on the lead, in the car, left alone for an hour." },
  { title: "Health", body: "Ask for the vet notes, not a summary. Ongoing conditions are manageable when you know about them." },
  { title: "Behaviour", body: "Most 'problems' are a dog who hasn't been taught, or is frightened. Ask what help is available." },
  { title: "Your home", body: "Stairs, children, cats, a busy street — say all of it out loud. A good match matters more than a quick one." },
  { title: "Afterwards", body: "Ask what support exists in week two, when the first excitement has worn off and the real dog appears." },
];

/* -------------------------------------------------------------- The costs */

export interface CostGroup {
  id: string;
  title: string;
  body: string;
  items: { label: string; note: string }[];
}

export const costGroups: CostGroup[] = [
  {
    id: "before",
    title: "Before your dog arrives",
    body: "The one-off spend. Most of it happens in a single fortnight, which is why it surprises people.",
    items: [
      { label: "Purchase or adoption fee", note: "Varies enormously by breed, country and route" },
      { label: "Bed and a crate if you use one", note: "Buy the size they'll grow into" },
      { label: "Bowls, collar, harness, lead, ID tag", note: "Legal ID requirements differ by country" },
      { label: "Grooming kit", note: "Brush, comb, nail clippers, toothbrush" },
      { label: "Toys and chews", note: "Fewer than you think, replaced more often than you think" },
      { label: "First vet visit", note: "Check-up, vaccinations, microchip where not already done" },
    ],
  },
  {
    id: "monthly",
    title: "Every month",
    body: "The steady cost. Worth writing down honestly before you commit, not after.",
    items: [
      { label: "Food", note: "The single biggest monthly line, and it scales with size" },
      { label: "Treats and chews", note: "Training runs on them in year one" },
      { label: "Insurance", note: "Cheaper the younger and healthier they are" },
      { label: "Grooming", note: "From nothing to a salon visit every six weeks" },
      { label: "Routine care", note: "Worming, flea and tick treatment, nail trims" },
      { label: "Help while you work", note: "A walker or day care, if your days are long" },
    ],
  },
  {
    id: "unexpected",
    title: "Something to be ready for",
    body: "The part nobody budgets for. A little put aside each month makes these bearable.",
    items: [
      { label: "Unexpected veterinary treatment", note: "Injuries and illness rarely arrive conveniently" },
      { label: "Dental care", note: "Very common in middle age, and not cheap" },
      { label: "Emergency and out-of-hours care", note: "Costs more than a planned appointment" },
      { label: "Replacing things", note: "Beds, leads and one or two items you were fond of" },
    ],
  },
];

/* ---------------------------------------------------------------- Your home */

export const homeScenarios = [
  { id: "apartment", title: "A flat", body: "Perfectly workable. Think about stairs or a lift, neighbours, and where you'll go for the first walk of the day." },
  { id: "house", title: "A house", body: "Space indoors matters less than you'd expect. What matters is the walking within ten minutes of your door." },
  { id: "garden", title: "A garden", body: "Lovely to have, and not a substitute for a walk. Check the fence, the gate and anything growing that shouldn't be eaten." },
  { id: "city", title: "City", body: "Busy pavements, traffic, lifts and cafés. City dogs need to be comfortable with noise more than anything else." },
  { id: "suburb", title: "Suburb", body: "Usually the easiest of all: quiet streets, green space nearby, and somewhere to let off steam at the weekend." },
  { id: "rural", title: "Rural", body: "Space and freedom, with livestock, wildlife and a longer drive to the vet to think about." },
];

export const homeFactors = [
  "Stairs, and whether your dog could manage them at both ends of life",
  "A lift, and whether they'll be comfortable in one",
  "Outdoor space, and how secure it really is",
  "Green areas within an easy walk",
  "Somewhere safe to let a dog run",
  "Cafés, shops and transport that welcome dogs",
];

export const lifeScenarios = [
  { id: "quiet", title: "Quiet homebody", body: "Steady routines and short, regular walks. A calmer dog will be happier here than an athlete." },
  { id: "outdoors", title: "Active outdoors", body: "Weekends on trails, weather no object. A fit dog who can build up distance with you." },
  { id: "city", title: "City life", body: "Pavements, transport, crowds. Confidence around noise matters more than size." },
  { id: "family", title: "Family life", body: "Noise, visitors, school runs. Tolerance and a place to retreat to are what count." },
  { id: "home-office", title: "Working from home", body: "Wonderful for a dog — as long as they also learn to be alone sometimes." },
  { id: "retired", title: "Retired or flexible", body: "Time and routine, which is most of what a dog wants. Think about strength on the lead." },
  { id: "travel", title: "Frequent traveller", body: "Entirely possible with a plan: a regular sitter, or a dog who travels well with you." },
];

/* ------------------------------------------------------------- Preparation */

export interface ChecklistItem {
  id: string;
  label: string;
  note?: string;
}

export const arrivalChecklist: ChecklistItem[] = [
  { id: "food", label: "Food", note: "Start with whatever they're already eating, then change slowly" },
  { id: "bowls", label: "Bowls", note: "One for food, one always full of water" },
  { id: "collar", label: "Collar" },
  { id: "tag", label: "ID tag", note: "Your phone number, at minimum" },
  { id: "harness", label: "Harness" },
  { id: "lead", label: "Lead" },
  { id: "bed", label: "Bed", note: "Somewhere quiet, out of the through-traffic of the house" },
  { id: "toys", label: "A few toys" },
  { id: "grooming", label: "Grooming supplies" },
  { id: "toothbrush", label: "Toothbrush and dog toothpaste" },
  { id: "waste", label: "Waste bags" },
  { id: "cleaning", label: "Cleaning supplies", note: "An enzyme cleaner, for the accidents that will happen" },
  { id: "travel", label: "Safe travel equipment", note: "For the journey home as well as afterwards" },
  { id: "vet", label: "Vet appointment booked" },
  { id: "insurance", label: "Insurance arranged" },
  { id: "microchip", label: "Microchip details", note: "Registered in your name, with your current phone number" },
  { id: "emergency", label: "Emergency contacts written down", note: "Your vet, and the nearest out-of-hours clinic" },
];

export const firstDay = [
  { title: "Keep it quiet", body: "No welcome party. Just the people who live here, speaking normally." },
  { title: "Show them their bed", body: "Take them to the place that's theirs, and let them come back to it in their own time." },
  { title: "Water, then food", body: "Water straight away. Food when they've settled a little, and the same food they had before." },
  { title: "Let them explore", body: "One room at a time, off the lead, with you nearby and not hovering." },
  { title: "Keep the world small", body: "The house and the garden are plenty for one day. Everything else can wait." },
  { title: "Start watching", body: "When they need out, where they choose to sleep, what makes them uneasy. This is the beginning of knowing them." },
];

export const firstWeek = [
  { title: "A gentle routine", body: "Same times for food, walks and bed. Predictability is what settles a dog fastest." },
  { title: "Their name", body: "Say it, and reward them for looking at you. Nothing more complicated than that yet." },
  { title: "The first small lessons", body: "Coming when called, and being comfortable alone for a few minutes at a time." },
  { title: "Toilet routine", body: "Outside after sleeping, eating and playing. Praise the moment it happens, never scold the accidents." },
  { title: "Sleep", body: "New dogs sleep an enormous amount. Let them. Puppies need most of the day." },
  { title: "Meeting the world", body: "At a pace that suits their age, and in line with your vet's advice on vaccinations." },
  { title: "Being together", body: "Sitting quietly in the same room does more for a bond than any exercise." },
  { title: "Noticing", body: "Appetite, toilet habits, energy. You'll know what's normal for them faster than you think." },
];