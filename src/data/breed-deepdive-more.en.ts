import type { BreedId } from "./breeds";
import type { BreedDeepDive } from "./breed-deepdive.en";

/**
 * Deep-dive fields for the next twenty breeds (purpose, health, poor match,
 * trade-offs), merged over the base profiles in `breedContent()` exactly like
 * `breed-deepdive.en.ts`. Health lines say what is commonly seen, point to the
 * breed profile and a vet, and never quote a statistic.
 */
const G = "General guidance, not a vet.";
const h = (text: string) => `${text} ${G}`;

export const breedDeepDiveMoreEn: Partial<Record<BreedId, BreedDeepDive>> = {
  whippet: {
    originalPurpose:
      "Whippets were bred in the north of England in the 1800s by mill and mining families who wanted a small, fast dog for racing and rabbit coursing — the 'poor man's racehorse'.",
    healthConsiderations: h(
      "Whippets are generally a sturdy, long-lived breed, but the thin skin tears easily and a lean body feels the cold, so a coat on frosty days is a kindness. Sighthounds can react differently to anaesthetic, so it's worth mentioning the breed to any vet. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "You'd let your dog off the lead near rabbits, cats or traffic and hope for the best",
      "You want a dog that's happy left outside or in a chilly house",
      "Your garden isn't fenced and there's nowhere safe for a proper sprint",
    ],
    keyTradeoffs: [
      "Calm and clean indoors, astonishing outdoors — you need both a sofa and a safe field",
      "Gentle and quiet, with a chase instinct that no amount of training completely switches off",
    ],
  },
  greyhound: {
    originalPurpose:
      "Greyhounds are one of the oldest types of sighthound, bred for thousands of years to run down hares by sight. More recently they've been racing dogs, and many retired racers now find homes as pets.",
    healthConsiderations: h(
      "Greyhounds are lean, with thin skin and little body fat, so they feel the cold and can get pressure sores on hard floors — a soft bed matters. Teeth often need regular care, and deep-chested dogs like this are commonly watched for bloat. Retired racers may bring old injuries, so ask the rescue what they know and talk to your vet.",
    ),
    poorMatchFor: [
      "You'd like to let your dog off the lead in an unfenced park",
      "You live with a cat or small pets and can't keep them apart",
      "You want a dog that stays warm outside on a winter day",
    ],
    keyTradeoffs: [
      "One of the gentlest, quietest dogs around, asleep on the sofa for much of the day, and built to sprint the moment something small runs",
      "A big dog in a calm body: easy indoors, and a lot of dog on the end of the lead if they bolt",
    ],
  },
  poodle: {
    originalPurpose:
      "The Poodle began as a German water retriever fetching ducks for hunters, and became a much-loved companion in France, where it's the best-known dog of all. The famous show clip is said to have started as a practical one for swimming.",
    healthConsiderations: h(
      "Hips, eyes and skin are the usual things to ask about, and deep-chested dogs like the Standard are commonly watched for bloat. The coat mats without regular brushing, and the ears need a look too. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "A groomer every six to eight weeks and brushing most days wouldn't fit your life",
      "You'd like a dog that's content to be ignored for a day",
      "You'd rather not spend time giving a clever dog things to think about",
    ],
    keyTradeoffs: [
      "Quick, eager to please and low-shedding, with a coat that needs real, regular care",
      "A serious thinker: brilliant to train, and inventive when bored",
    ],
  },
  "bichon-frise": {
    originalPurpose:
      "Bichons descend from small water dogs of the Mediterranean, and for centuries they've been kept as companions across southern Europe.",
    healthConsiderations: h(
      "Teeth, skin and kneecaps are the usual places to look in a small white-coated breed: dental care is a routine, and skin allergies are commonly seen. A short, regular grooming routine matters. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "You'd struggle to keep up with brushing and a professional groom every six to eight weeks",
      "Your dog would be alone for a long working day, most days",
      "You'd like a dog that's happy to be left to itself",
    ],
    keyTradeoffs: [
      "Cheerful, friendly and low-shedding, with a coat that never stops needing attention",
      "Happiest wherever you are, and unhappiest when you leave",
    ],
  },
  maltese: {
    originalPurpose:
      "The Maltese is one of the oldest toy companions in Europe, kept for centuries as a lap dog and treasured for its long white coat and its devotion to its person.",
    healthConsiderations: h(
      "Teeth, kneecaps and tear staining are commonly seen in small white-coated dogs, and the fine coat tangles quickly. A tiny dog also tires and chills quicker than you'd expect. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "Daily brushing wouldn't fit your routine",
      "You'd like a dog that stays quiet when the doorbell goes",
      "Your dog would be alone for long stretches",
    ],
    keyTradeoffs: [
      "Tiny, gentle and very loyal, with a bark that's bigger than they are",
      "A coat that looks effortless and takes daily effort",
    ],
  },
  havanese: {
    originalPurpose:
      "The Havanese is Cuba's national dog, descended from small bichon-type dogs that came to the island and became companions in well-off homes.",
    healthConsiderations: h(
      "Kneecaps, eyes and hips are the usual things to ask about in a small, long-lived breed, and the silky coat tangles without regular brushing. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "Your dog would be alone for most of a working day",
      "You don't have time for regular brushing",
      "You'd like a dog that's happy in the background while you get on with your day",
    ],
    keyTradeoffs: [
      "Sociable, quick to learn and cheerful company — and it truly wants your company all day",
      "Light on the lead and easy to carry, with a coat that needs a real routine",
    ],
  },
  "italian-greyhound": {
    originalPurpose:
      "The Italian Greyhound is a miniature sighthound, kept as a companion for centuries and especially popular in the courts of Renaissance Italy.",
    healthConsiderations: h(
      "The legs are very fine, so ask a vet how to keep jumping and rough play safe, and think about stairs and sofas. Teeth need regular care, and a thin coat means proper cold-weather kit. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "You have small children who'd love to pick the dog up or roughhouse",
      "You'd like a dog that takes a cold, wet walk in its stride",
      "You'd leave the dog alone for long days",
    ],
    keyTradeoffs: [
      "Small, quiet and sweetly affectionate, and more delicate than it looks",
      "Loves a lap and a blanket, and a chase across a field just the same",
    ],
  },
  pug: {
    originalPurpose:
      "Pugs come from China, where small flat-faced dogs were kept as companions by emperors, and later reached Europe with Dutch traders and became lap dogs in many royal houses.",
    healthConsiderations: h(
      "Flat-faced dogs commonly have breathing trouble and struggle in warm weather — heat risk is one of the welfare concerns the British Veterinary Association raises — and eyes, skin folds and weight need regular attention. If you go ahead, choose a puppy with open nostrils and a longer muzzle, budget for insurance, and read the breed profile and ask a vet.",
    ),
    poorMatchFor: [
      "Your summers are hot and there's no cool room for the dog",
      "A surprise vet bill of a few thousand euros would put real strain on you",
      "You'd like a dog that will run or hike with you",
    ],
    keyTradeoffs: [
      "Funny, affectionate and content with short walks, and often carrying real breathing and heat worries",
      "The squashed face that wins every heart is also behind most of the health worries",
    ],
  },
  "shih-tzu": {
    originalPurpose:
      "Shih Tzus were bred as companions for the Chinese imperial court, with Tibetan roots, and the name means 'lion dog'. They've been lap dogs for a very long time.",
    healthConsiderations: h(
      "As a flat-faced breed, breathing and heat need care — heat risk is one of the welfare concerns the British Veterinary Association raises — and the large eyes, ears and skin under the coat need regular checks. The long coat mats fast, which is why many owners choose a short trim. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "Regular grooming, or a short trim every few weeks, wouldn't fit your routine",
      "You live somewhere hot with no cool corner",
      "You'd like a dog that's quick and easy to house-train",
    ],
    keyTradeoffs: [
      "A cheerful, people-loving lap dog, with a coat and a face that both ask for daily care",
      "A stubborn streak inside the fluffy coat: patient, food-led training works best",
    ],
  },
  "golden-retriever": {
    originalPurpose:
      "Goldens were developed in the Scottish Highlands in the 1800s to retrieve shot birds from rough ground and cold water, and the gentle mouth and eagerness to please come from that job.",
    healthConsiderations: h(
      "Hips, elbows, eyes and heart are the usual things to ask about, and cancer is commonly seen in the breed — one reason a good breeder is so worth waiting for. Coats and ears need regular care, and weight matters. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "You'd like a dog that stays clean and sheds little",
      "Your dog would be home alone for a full working day, most days",
      "You want a guard dog",
    ],
    keyTradeoffs: [
      "Friendly to nearly everyone and eager to please, which makes them lovely family dogs and poor guards",
      "Easy to train and always keen to carry something in their mouth, so mouthiness needs gentle guiding",
    ],
  },
  "boston-terrier": {
    originalPurpose:
      "The Boston Terrier began in Boston in the late 1800s, from crosses of English bulldogs and terriers, and became one of America's first home-grown companion breeds.",
    healthConsiderations: h(
      "It's a short-nosed breed, so breathing, heat and eyes need attention — heat risk is one of the welfare concerns the British Veterinary Association raises — and many litters need help arriving. Kneecaps and skin allergies are also worth asking about. Choose a puppy with open nostrils and a longer muzzle where you can, and read the breed profile and ask a vet.",
    ),
    poorMatchFor: [
      "It gets very hot at home in summer and you can't keep the dog cool",
      "You'd rather not share a bedroom with snoring",
      "A run or a hot-weather hike is what you're after",
    ],
    keyTradeoffs: [
      "Lively, friendly and neat, with a short nose that limits how much heat and exercise they can take",
      "Playful and clownish, and not quite as rugged as the bouncy nature suggests",
    ],
  },
  papillon: {
    originalPurpose:
      "Papillons are toy spaniels from continental Europe, named for their butterfly-shaped ears, and they appear in many old paintings as companions of noble families.",
    healthConsiderations: h(
      "It's a small, often long-lived breed, and kneecaps, teeth and eyes are the usual things to ask about. Their light frames mean jumping off furniture is worth managing. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "You'd like a dog that stays quiet at the door or the window",
      "Your dog would be alone for long days",
      "You'd rather not do regular training to keep a busy mind occupied",
    ],
    keyTradeoffs: [
      "Bright, trainable and lively for their size, and quick to bark at every sound",
      "Small enough to carry, clever enough to get bored if you don't give them something to do",
    ],
  },
  "lhasa-apso": {
    originalPurpose:
      "The Lhasa Apso comes from Tibet, where small dogs served as indoor sentinels in homes and monasteries — quiet most of the day, and quick to sound the alarm.",
    healthConsiderations: h(
      "Eyes, skin, and the ears and feet under the long coat need regular checks, and the coat tangles quickly unless it's brushed, which is why many owners choose a trim. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "Barking at every knock and noise would drive you or your neighbours mad",
      "You wouldn't keep up with brushing",
      "You want a dog that adores strangers",
    ],
    keyTradeoffs: [
      "A dignified, devoted little watchdog, with opinions about visitors",
      "Independent and sometimes stubborn: rewards and patience beat repetition",
    ],
  },
  "miniature-schnauzer": {
    originalPurpose:
      "The Miniature Schnauzer was bred in Germany in the late 1800s from smaller Schnauzers as a farm dog and ratter, which explains the alert, bouncy, bark-first nature.",
    healthConsiderations: h(
      "Eyes and urinary stones are commonly discussed with the breed, and rich, fatty treats can upset the pancreas, so a plain diet and a steady weight matter. The wiry coat needs regular grooming. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "You'd like a quiet dog that leaves the neighbours' comings and goings alone",
      "Regular grooming and a trim wouldn't fit your routine",
      "You'd rather not manage a small dog's bark",
    ],
    keyTradeoffs: [
      "Sturdy, clever and low-shedding, with a bark that arrives before the doorbell",
      "Great at learning, and a terrier at heart: not shy of an opinion",
    ],
  },
  labradoodle: {
    originalPurpose:
      "The Labradoodle is a Labrador–Poodle cross first bred in Australia in the late 1980s, intended to combine a guide dog's temperament with a lower-shedding coat. It's a cross, not a recognised breed, and litters vary.",
    healthConsiderations: h(
      "A mix isn't automatically healthier: a Labradoodle can inherit from either side, so hips, elbows, eyes, ears and skin are worth asking about. Coats vary a lot, and many need regular brushing and grooming. Ask the breeder what health checks both parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "You need a guaranteed low-shedding or allergy-friendly coat",
      "You'd struggle to groom a curly coat regularly",
      "You'd like a dog that's easy to predict from a breed description",
    ],
    keyTradeoffs: [
      "Friendly, bright and often easy to live with, and every litter is a little different",
      "Bounces like a Lab and thinks like a Poodle: energy that needs a daily outlet",
    ],
  },
  cavapoo: {
    originalPurpose:
      "The Cavapoo is a Cavalier King Charles Spaniel–Poodle cross, popular as a small, cuddly companion since the early 2000s. It's a cross, not a recognised breed, and litters vary.",
    healthConsiderations: h(
      "A Cavapoo can inherit from either side, so ask what health checks both parents had — heart, eyes, kneecaps and coat are all worth asking about. The coat mats without regular brushing. Read the breed profile and ask a vet.",
    ),
    poorMatchFor: [
      "Your dog would be alone for a full working day",
      "You'd like a dog whose coat type and size you can predict",
      "You'd like to skip regular grooming",
    ],
    keyTradeoffs: [
      "Affectionate and sociable, and often very keen on company — sometimes too keen to be left",
      "Sweet-natured and clever, with a coat that needs a real routine",
    ],
  },
  "yorkshire-terrier": {
    originalPurpose:
      "Yorkshire Terriers were developed in the 1800s by mill workers in Yorkshire and Lancashire to catch rats. It's a long way from there to the silky-coated lap dog, but the terrier is still in there.",
    healthConsiderations: h(
      "Kneecaps, teeth and a collar-sensitive windpipe are the usual small-dog things to ask about, so many owners use a harness. The fine coat needs regular brushing or a trim. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "You'd like a dog that leaves other dogs alone, whatever their size",
      "You'd rather not brush or trim regularly",
      "You'd like a quiet dog that isn't tempted to bark",
    ],
    keyTradeoffs: [
      "A small dog with a big-dog attitude: brave, bright and confident",
      "Silky, low-shedding and a full-time terrier",
    ],
  },
  "siberian-husky": {
    originalPurpose:
      "Huskies were bred by the Chukchi people of north-eastern Siberia as sled dogs, built to pull light loads over long distances in bitter cold, and they still love to run.",
    healthConsiderations: h(
      "It's a fairly robust breed; eyes and hips are the usual things to ask about, and a thick coat means heat is a real concern in warm weather. They also shed heavily twice a year. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "You'd like a dog that comes back every time when off the lead",
      "Your home is hot, or your days are short on time for running",
      "You want a quiet dog that's easy to keep in a flat",
    ],
    keyTradeoffs: [
      "Friendly, striking and full of stamina, and a real escape artist that howls rather than barks",
      "Loves running with you, and needs a lot of it, whatever the weather",
    ],
  },
  "pembroke-welsh-corgi": {
    originalPurpose:
      "Pembroke Welsh Corgis come from Pembrokeshire in Wales, where they herded cattle by nipping at heels and ducking the kicks, and that low, quick, bossy streak hasn't gone away.",
    healthConsiderations: h(
      "A long back and short legs mean weight and jumping deserve attention, and hips and eyes are the usual things to ask about. They shed a lot, all year. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "Stairs, jumping and weight gain wouldn't sit well with a long back",
      "You'd like a dog that leaves ankles and children alone",
      "You don't want dog hair on everything",
    ],
    keyTradeoffs: [
      "Clever, cheerful and tougher than they look, and a herder that may try to herd you and the children",
      "Loves food and games, and extra weight is hard on that long back",
    ],
  },
  "shiba-inu": {
    originalPurpose:
      "The Shiba Inu is a small, spitz-type Japanese breed, originally used for hunting birds and small game in the mountains, and it still has a proud, independent, cat-like way about it.",
    healthConsiderations: h(
      "Allergies, eyes, kneecaps and hips are the usual things to ask about in the breed, and they shed heavily twice a year. Ask the breeder what health checks the parents had, and read the breed profile.",
    ),
    poorMatchFor: [
      "You'd like a dog that comes when called and can be off the lead",
      "You'd like a dog that loves being handled by everyone",
      "You'd rather not spend time on patient, reward-based training",
    ],
    keyTradeoffs: [
      "Clean, dignified and quietly affectionate, with a will of its own",
      "Independent to the point of stubborn: training is a conversation, not a command",
    ],
  },
};
