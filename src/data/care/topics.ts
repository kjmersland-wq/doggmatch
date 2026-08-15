import type { CareTopic } from "./types";

const vetOrgs = {
  wsava: { label: "Global nutrition and dental guidelines", org: "World Small Animal Veterinary Association" },
  avdc: { label: "Home dental care guidance", org: "American Veterinary Dental College" },
  rspca: { label: "Everyday dog care advice", org: "RSPCA" },
  aaha: { label: "Life stage and preventive care guidelines", org: "American Animal Hospital Association" },
  bva: { label: "Owner guidance on health and welfare", org: "British Veterinary Association" },
} as const;

export const careTopics: CareTopic[] = [
  /* ------------------------------------------------------------- Dental */
  {
    id: "dental",
    title: "A healthy mouth matters",
    promise: "A few gentle minutes, a few times a week, and your dog's mouth stays a lot more comfortable.",
    category: "dental",
    intro: [
      "Most dogs have some sort of dental trouble by the time they're a few years old, and it's easy to miss because dogs rarely make a fuss about it.",
      "The good news: brushing is the single most useful thing you can do at home, and almost every dog can learn to enjoy it if you take it slowly.",
    ],
    steps: [
      {
        title: "Let them look at it first",
        body: "Put the toothbrush on the floor and let your dog sniff it. Nothing else happens. This part matters more than it sounds.",
        visual: "brush-1",
      },
      {
        title: "Touch the lips, then the teeth",
        body: "Lift a lip for a second, praise, let go. Then a finger along the outside of the teeth. Keep it short and cheerful.",
        visual: "brush-1",
      },
      {
        title: "Add dog toothpaste",
        body: "Let them lick a little off your finger — most are meat or poultry flavoured, and dogs generally like them. Never use human toothpaste; it isn't made to be swallowed.",
      },
      {
        title: "Brush a few teeth",
        body: "Small circles along the outside surfaces, where plaque builds up most. The big teeth at the back and the canines matter most. The inside surfaces can wait — they get less build-up and most dogs dislike it.",
        visual: "brush-2",
      },
      {
        title: "Finish before they've had enough",
        body: "Thirty seconds is a good session at first. Stop while your dog still thinks this is fine, and build up from there.",
      },
    ],
    routine: [
      { day: "Day 1", body: "Let your dog sniff the toothbrush. That's the whole session." },
      { day: "Day 2", body: "Touch their lips gently for a second or two, then a treat." },
      { day: "Day 3", body: "A taste of dog-safe toothpaste from your finger." },
      { day: "Day 4", body: "Run a finger or brush along a few front teeth." },
      { day: "Day 5", body: "Brush one side of the mouth, briefly." },
      { day: "Day 6", body: "Both sides, still short. Praise as you go." },
      { day: "Day 7", body: "A normal little session. Then keep it going, most days if you can." },
    ],
    sections: [
      {
        title: "What actually helps",
        body: "Brushing is the thing with the strongest evidence behind it. Everything else is a useful extra, not a replacement.",
        points: [
          "A soft brush, a finger brush or even gauze — whatever your dog tolerates",
          "Dog toothpaste only",
          "Daily is ideal, a few times a week still helps",
          "Chews and diets carrying a veterinary dental seal can help alongside brushing",
        ],
      },
      {
        title: "About bones and hard chews",
        body: "Hard chewing does not reliably clean teeth, and very hard objects are a common cause of fractured teeth — antlers, hooves, hard nylon, cooked bones, ice cubes.",
        points: [
          "A rough guide: if you couldn't dent it with a thumbnail, it's probably too hard",
          "Cooked bones can splinter and should be avoided",
          "Supervise any chew, and take it away when it gets small enough to swallow",
          "Your vet can tell you which chews they see causing problems locally",
        ],
      },
      {
        title: "Professional cleaning",
        body: "Some build-up can only be removed under anaesthetic, with x-rays to see what's happening below the gumline. It isn't a failure on your part — it's part of normal care for a lot of dogs.",
      },
    ],
    watchFor: [
      "Breath that's persistently bad, not just doggy",
      "Red, puffy or bleeding gums",
      "Chewing on one side, or dropping food",
      "A broken or discoloured tooth",
      "More drooling than usual",
      "Pawing at the mouth, or turning away when you touch the face",
      "Swelling on the face or under an eye",
    ],
    whenToAskVet:
      "If you notice any of these, it's worth booking a look. Dental pain is easy to miss because most dogs keep eating right through it.",
    ageNotes: {
      puppy: "Puppies lose their baby teeth from around four months. Start the handling now — a puppy who thinks toothbrushes are normal is a gift to your future self.",
      senior: "Older mouths need checking more often, and dental pain is a common reason an older dog seems slower or grumpier.",
    },
    sources: [vetOrgs.avdc, vetOrgs.wsava],
  },

  /* --------------------------------------------------------- Coat & skin */
  {
    id: "coat",
    title: "Coat & skin",
    promise: "Get to know what's normal for your dog, and you'll notice quickly when it isn't.",
    category: "coat",
    intro: [
      "Brushing isn't only about looks. It's how most people first notice a lump, a sore patch, a tick or a mat forming somewhere awkward.",
      "How often depends far more on the coat than the breed name on the paperwork — and mixed-breed dogs can land anywhere.",
    ],
    sections: [
      {
        title: "Short, smooth coats",
        body: "A quick brush once a week with a rubber mitt or bristle brush keeps loose hair down and feels good to most dogs.",
        points: ["Sheds year round, often more than people expect", "Bath only when actually dirty", "Skin is easy to see — use that"],
      },
      {
        title: "Long coats",
        body: "Needs proper brushing several times a week, right down to the skin rather than skimming the top.",
        points: ["Mats form behind ears, under legs and around the collar", "A comb tells you the truth a brush won't", "Trims around feet and rear keep things clean"],
      },
      {
        title: "Curly coats",
        body: "Curls don't shed much, which means the loose hair stays in the coat and mats quietly.",
        points: ["Brush and comb every day or two", "Regular grooming appointments, usually every six to eight weeks", "Mats pull on skin and hurt — get them out early"],
      },
      {
        title: "Double coats",
        body: "A soft undercoat under a coarser topcoat. It blows out heavily twice a year and you'll find it everywhere.",
        points: ["An undercoat rake earns its keep in spring and autumn", "Don't shave a double coat unless a vet advises it", "Plenty of brushing beats frequent bathing"],
      },
      {
        title: "Wire coats",
        body: "Harsh, weather-resistant coats that keep their texture with hand-stripping rather than clipping.",
        points: ["Comb through the beard and legs", "Clipping softens the coat over time", "A groomer who knows the coat type is worth finding"],
      },
    ],
    steps: [
      {
        title: "Start with your hands",
        body: "Run your hands over your dog before the brush comes out. You're feeling for lumps, scabs, sore spots and anything stuck in the coat.",
      },
      {
        title: "Brush in sections",
        body: "Work in small patches, right down to the skin. Hold the hair above a mat so you aren't tugging at the skin while you work.",
      },
      {
        title: "Check the awkward places",
        body: "Behind the ears, armpits, the back of the legs, the tail and under the collar. Mats almost always start where things rub.",
      },
      {
        title: "Finish with something nice",
        body: "A treat, a scratch, a game. Grooming should be a thing your dog leans into, not endures.",
      },
    ],
    watchFor: [
      "Scratching, licking or chewing that's new or constant",
      "Red skin, spots, scabs or a hot patch",
      "Hair thinning or coming out in patches",
      "A smell that wasn't there before",
      "Flakiness or greasy skin",
      "Lumps, or a lump that has changed",
    ],
    whenToAskVet:
      "Itching has a lot of possible causes — parasites, allergies, infections, sometimes something else entirely. If it's persistent, your vet can work out which, rather than you guessing at shampoos.",
    ageNotes: {
      puppy: "Puppy coats change as they grow. Brushing now is mostly about teaching them that being handled is pleasant.",
      senior: "Older dogs often groom themselves less and get flakier or lumpier skin. Gentle, frequent brushing beats long sessions.",
    },
    sources: [vetOrgs.rspca, vetOrgs.bva],
  },

  /* ---------------------------------------------------------- Paws & nails */
  {
    id: "paws",
    title: "Paws & nails",
    promise: "Thirty seconds after a walk catches most of the small problems before they become sore ones.",
    category: "paws",
    intro: [
      "Paws take a beating and dogs are stoic about them. A quick look after walks is one of the easiest habits to build.",
      "Nails that are too long change how a dog stands and can make walking uncomfortable, so they're worth staying on top of.",
    ],
    steps: [
      {
        title: "Hold the paw gently",
        body: "Support it from underneath rather than gripping. If your dog pulls away, let them — then try again later with a treat in your other hand.",
        visual: "paw-check",
      },
      {
        title: "Look between the pads",
        body: "Grass seeds, grit, road salt and small stones love it in there. In winter, rinse and dry the paws after gritted pavements.",
        visual: "paw-check",
      },
      {
        title: "Feel the pads",
        body: "They should be supple. Cracks, splits, redness or a paw that's warmer than the others are worth a closer look.",
      },
      {
        title: "Check the fur between the pads",
        body: "In hairy-footed dogs it mats and picks things up. A careful trim level with the pads helps a lot with grip too.",
      },
      {
        title: "Trim tiny amounts",
        body: "Take off just the tip, then stop. Little and often is far safer than one big session, and reward calmly all the way through.",
        visual: "nails",
      },
    ],
    sections: [
      {
        title: "Nails, without the drama",
        body: "If you can hear clicking on a hard floor, they're probably a bit long. Most dogs need a trim every three to six weeks.",
        points: [
          "Touch the paws every day so clippers aren't a surprise",
          "Trim the very tip only — the quick sits further down than people think",
          "Dark nails: take smaller slices and stop when the cut surface looks chalky",
          "Stop if your dog gets distressed. Nothing about this is worth a fight",
          "A groomer or vet nurse can do it, and there's no shame in that at all",
        ],
      },
      {
        title: "Pavements and weather",
        body: "Press the back of your hand on the pavement for seven seconds. If you can't hold it there, it's too hot for paws — walk early or late instead.",
        points: ["Winter salt and grit irritate pads — rinse and dry after", "Long walks on rough ground can wear pads sore", "Deep snow packs into ice balls in furry feet"],
      },
    ],
    watchFor: [
      "Limping, or licking one paw over and over",
      "A cracked, bleeding or swollen pad",
      "A nail that's torn or broken back",
      "Redness or a bad smell between the toes",
      "Reluctance to walk on a surface they were fine with before",
    ],
    whenToAskVet:
      "A torn nail, a deep cut or persistent limping is a call worth making. If you cut a nail too short and it bleeds, styptic powder and gentle pressure usually settle it — ring your vet if it doesn't.",
    sources: [vetOrgs.rspca, vetOrgs.aaha],
  },

  /* -------------------------------------------------------------- Ears */
  {
    id: "ears",
    title: "Ears",
    promise: "Have a look, have a sniff. That's most of ear care.",
    category: "health",
    intro: [
      "Healthy ears are pale pink inside, without much smell. Knowing that baseline is the whole trick.",
      "Ears don't need deep cleaning as a routine. Poking around inside a healthy ear tends to cause the problems it's meant to prevent.",
    ],
    sections: [
      {
        title: "The weekly look",
        body: "Lift the flap, look inside, take a sniff. A few seconds while you're already sitting together.",
        points: ["Pale pink, no strong smell, no discharge", "A little wax is normal", "Dry the ears after swimming or a bath"],
      },
      {
        title: "If your vet has given you cleaner",
        body: "Use their product and their instructions. Never push cotton buds down the ear canal — you'll pack debris further in.",
      },
      {
        title: "Ears that need more attention",
        body: "Floppy ears, hairy canals and dogs who swim a lot are more prone to trouble. That's about the individual dog, not just the breed.",
      },
    ],
    watchFor: [
      "A yeasty or sour smell",
      "Redness or swelling inside the flap",
      "Brown, yellow or bloody discharge",
      "Scratching at an ear, or rubbing it along the sofa",
      "Head shaking or tilting",
      "Flinching when you touch the ear",
    ],
    whenToAskVet:
      "Ear infections are painful and rarely clear up on their own. If something looks or smells off, get it seen rather than trying drops you have in a drawer.",
    sources: [vetOrgs.rspca],
  },

  /* -------------------------------------------------------------- Eyes */
  {
    id: "eyes",
    title: "Eyes",
    promise: "Bright, clear and equal. That's what you're looking for.",
    category: "health",
    intro: [
      "A quick look at your dog's eyes while you're saying hello in the morning is enough for most days.",
      "Eyes can go from mildly irritated to seriously painful quickly, so they're one of the things worth being a bit cautious about.",
    ],
    sections: [
      {
        title: "What normal looks like",
        body: "Clear and bright, whites that aren't bloodshot, pupils the same size, no squinting. A little clear or grey tear matter in the corners is usually nothing.",
      },
      {
        title: "Everyday care",
        body: "Wipe away crust with damp cotton wool and clean water, one wipe per eye. Keep long hair trimmed back out of the eyes. Don't use human eye drops.",
      },
      {
        title: "Flat-faced dogs",
        body: "Prominent eyes are more exposed to knocks, drying and ulcers. If your dog has a short muzzle, look a bit more often.",
      },
    ],
    watchFor: [
      "Squinting or holding an eye closed",
      "Redness that stays",
      "Green or yellow discharge",
      "Cloudiness or a change in colour",
      "Rubbing the face along the ground",
      "Any sudden change, or bumping into things",
    ],
    whenToAskVet:
      "A painful or suddenly changed eye is a same-day call. Vision problems get better outcomes when they're seen early.",
    sources: [vetOrgs.bva],
  },

  /* ---------------------------------------------------- Body condition */
  {
    id: "body-condition",
    title: "Body condition",
    promise: "The number on the scales matters less than how your dog looks and feels under your hands.",
    category: "weight",
    intro: [
      "Two dogs of the same weight can be in completely different shape. Body condition is how vets judge it, and you can learn it in about a minute.",
      "This is a guide, not a diagnosis. Breed and build change what 'right' looks like — a Greyhound and a Labrador in perfect condition look nothing alike.",
    ],
    steps: [
      {
        title: "Feel the ribs",
        body: "Run your fingertips along your dog's side. You should feel the ribs easily under a thin layer, a bit like feeling the bones on the back of your hand.",
        visual: "body-condition",
      },
      {
        title: "Look from above",
        body: "Standing over your dog, look for a gentle narrowing behind the ribs. A straight or bulging outline suggests a bit extra.",
        visual: "body-condition",
      },
      {
        title: "Look from the side",
        body: "The belly should tuck up towards the back legs rather than running level with the chest.",
      },
      {
        title: "Do it monthly",
        body: "Changes creep up slowly. Doing this on the same day each month makes the drift obvious while it's still small.",
      },
    ],
    sections: [
      {
        title: "A little heavy",
        body: "Ribs hard to feel, waist hard to see, belly running flat. Small changes work: measure the food, count the treats, add ten minutes of walking.",
      },
      {
        title: "About right",
        body: "Ribs easy to feel, visible waist, belly tucked. Keep doing what you're doing.",
      },
      {
        title: "A little thin",
        body: "Ribs, spine or hips standing out, very little cover. Worth a vet check rather than just more food — unexplained weight loss deserves a look.",
      },
    ],
    whenToAskVet:
      "Your vet can help you check body condition properly, and can talk through a plan if there's weight to lose. Sudden or unexplained changes in weight always deserve a conversation.",
    sources: [vetOrgs.wsava, vetOrgs.aaha],
  },

  /* -------------------------------------------------------- Wellbeing */
  {
    id: "wellbeing",
    title: "A good day for a dog",
    promise: "A walk, a little play, some food, plenty of sleep and time with you counts for a lot.",
    category: "wellbeing",
    intro: [
      "A good life for a dog doesn't have to be complicated or expensive. Most of it is routine, company and enough rest.",
      "If you only change one thing, it's usually sleep. A lot of 'behaviour problems' are a tired dog who never gets the chance to properly switch off.",
    ],
    sections: [
      {
        title: "Sleep",
        body: "Dogs sleep far more than most people expect. Puppies often need 18 to 20 hours a day, adults somewhere around 12 to 14, and older dogs usually more again.",
        points: ["A quiet spot away from the front door and the traffic of the house", "Naps in the day are normal, not laziness", "Constant stimulation is exhausting for a dog, not enriching"],
      },
      {
        title: "Sniffing and thinking",
        body: "Ten minutes of proper sniffing can settle a dog more than an hour of running. Let walks be slow sometimes.",
        points: ["Scatter dinner in the grass", "Hide treats around a room and let them search", "A food puzzle or a rolled towel with kibble inside", "New, calm places to explore"],
      },
      {
        title: "Company",
        body: "Dogs are social. Most struggle with long stretches alone, and being alone is a skill that has to be taught gradually rather than assumed.",
      },
      {
        title: "Predictable days",
        body: "Roughly regular walks, meals and bedtimes make life easier to read. It doesn't need to be to the minute.",
      },
      {
        title: "Quiet time",
        body: "Time when nothing is being asked of them — no training, no visitors, no games. Every dog needs some of that in the day.",
      },
    ],
    ageNotes: {
      puppy: "Puppies get overtired quickly and it looks like naughtiness — biting, zooming, ignoring everything. More sleep usually fixes it.",
      adolescent: "Teenage dogs need real outlets: sniffing, chewing, training, play. Boredom shows up as chewing your things instead.",
      senior: "Shorter, more frequent walks, softer bedding and gentle brain games suit older dogs better than long outings.",
    },
    sources: [vetOrgs.rspca],
  },

  /* --------------------------------------------------- Everyday check */
  {
    id: "everyday-check",
    title: "Know what's normal for your dog",
    promise: "You'll notice a change long before anyone else does. That's genuinely valuable.",
    category: "health",
    intro: [
      "You don't need to examine your dog. You just need a rough sense of their normal — how much they eat, drink, move and sleep.",
      "When something changes, being able to say 'this started on Tuesday' helps your vet enormously.",
    ],
    sections: [
      {
        title: "Appetite",
        body: "Most dogs are fairly predictable eaters. Skipping one meal happens; going off food for a day or more is worth attention.",
      },
      {
        title: "Drinking",
        body: "A clear increase or decrease in drinking is one of the more useful early signs there is. If you're unsure, measure what goes in the bowl for a couple of days.",
      },
      {
        title: "Energy",
        body: "Slowing down isn't only age. Reluctance on stairs, stiffness after resting or less interest in walks is often discomfort.",
      },
      {
        title: "Toilet habits",
        body: "Note changes in frequency, straining, or loose stools that last more than a day. Not a pleasant topic, but a useful one.",
      },
      {
        title: "Weight and coat",
        body: "Monthly weight, monthly hands-on check. Coat quality often changes before anything else does.",
      },
      {
        title: "Behaviour",
        body: "Hiding, clinginess, irritability or restlessness at night can all be signs of pain rather than mood.",
      },
    ],
    whenToAskVet:
      "One small change on one day is usually nothing. A change that lasts more than a day or two, or several changes at once, is worth a phone call.",
    sources: [vetOrgs.aaha],
  },

  /* -------------------------------------------- Something seems different */
  {
    id: "something-different",
    title: "Something seems different?",
    promise: "A calm place to work out whether this is a wait-and-see, or a ring-the-vet.",
    category: "health",
    intro: [
      "This is general information, not a diagnosis. Some changes are harmless and some aren't, and the difference often isn't obvious from the outside.",
      "If you're worried, or the change came on suddenly or severely, contact your vet. Worry on its own is a good enough reason to call.",
    ],
    sections: [
      {
        title: "Off their food",
        body: "One skipped meal in an otherwise bright dog is common. Ring your vet if it's more than about 24 hours, if a puppy skips meals, or if there's vomiting, lethargy or a swollen belly alongside it.",
      },
      {
        title: "Drinking a lot more or less",
        body: "A clear change that lasts more than a couple of days is worth investigating rather than watching. Take a note of roughly how much.",
      },
      {
        title: "Vomiting",
        body: "One vomit, then back to normal, often settles. Call if it's repeated, if they can't keep water down, if there's blood, if they're trying to be sick without producing anything, or if they may have swallowed something.",
      },
      {
        title: "Diarrhoea",
        body: "Mild and short-lived is common. Call if it lasts beyond a day or two, contains blood, or comes with vomiting, pain or a flat, tired dog — and sooner for puppies and older dogs, who dehydrate quickly.",
      },
      {
        title: "Coughing",
        body: "An occasional cough after pulling on a lead is different from a cough that keeps going. Persistent coughing, coughing at night, or any breathing difficulty needs a vet.",
      },
      {
        title: "Itching",
        body: "Constant scratching, licking or chewing is uncomfortable and usually has a cause worth finding — parasites, skin infection or allergy. It rarely resolves with shampoo alone.",
      },
      {
        title: "Limping",
        body: "Mild limping that settles within a day with rest can be watched. Non-weight-bearing lameness, obvious pain, swelling or a limp that lasts should be seen.",
      },
      {
        title: "Unusual tiredness",
        body: "A quiet day happens. A dog who won't get up, is unsteady, or is much flatter than usual should be seen promptly.",
      },
    ],
    whenToAskVet:
      "Your vet would rather hear from you early than late. Describing what changed, when it started and what's different from normal is exactly what they need.",
    sources: [vetOrgs.bva, vetOrgs.aaha],
  },

  /* ---------------------------------------------------------- Emergency */
  {
    id: "emergency",
    title: "When it can't wait",
    promise: "The short list of things that mean ringing a vet straight away, at any hour.",
    category: "health",
    intro: [
      "Keep your vet's number and your nearest out-of-hours clinic somewhere you can find them without thinking. Save them in your phone now.",
      "In these situations, call first and go in. Don't wait to see how things develop, and don't try home remedies.",
    ],
    sections: [
      {
        title: "Call a vet immediately",
        body: "Any of these means urgent professional help, day or night.",
        points: [
          "Difficulty breathing, choking, or blue or very pale gums",
          "Collapse, unconsciousness, or sudden weakness",
          "Bleeding that won't stop",
          "Suspected poisoning, or eating something they shouldn't have",
          "A seizure, or repeated seizures",
          "Being hit by a car, a fall, or any serious injury",
          "Straining to urinate and producing nothing",
          "A swollen, hard belly with retching and no vomit",
          "Heatstroke signs: heavy panting, distress, collapse in the heat",
          "Sudden severe pain, or a dog who can't settle at all",
        ],
      },
      {
        title: "Suspected poisoning",
        body: "Ring your vet or an animal poison line immediately, and tell them what, how much and when. Take the packaging with you. Do not try to make your dog sick unless a vet tells you to — with some substances that causes more harm.",
      },
      {
        title: "On the way",
        body: "Keep your dog quiet, warm and still. Drive carefully. Phone ahead so the clinic is ready for you.",
      },
    ],
    whenToAskVet:
      "If you're reading this and wondering whether it counts, ring. Nobody at a veterinary practice minds a call that turns out to be nothing.",
    sources: [vetOrgs.bva, vetOrgs.rspca],
  },
];

export const careTopicsById: Record<string, CareTopic> = Object.fromEntries(
  careTopics.map((t) => [t.id, t]),
);

export function getCareTopic(id: string): CareTopic | undefined {
  return careTopicsById[id];
}
