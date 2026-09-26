import type { BreedId } from "./breeds";
import type { BreedContent } from "./breed-content.en";

/**
 * The editorial deep-dive fields (purpose, health, poor match, trade-offs)
 * for the original breed profiles, which were written before these fields
 * existed. Merged over the base prose in `breedContent()`.
 */
export type BreedDeepDive = Pick<
  BreedContent,
  "originalPurpose" | "healthConsiderations" | "poorMatchFor" | "keyTradeoffs"
>;

export const breedDeepDiveEn: Partial<Record<BreedId, BreedDeepDive>> = {
  "labrador-retriever": {
    originalPurpose:
      "Labs began with the water dogs of Newfoundland and were polished in Britain into gundogs that would happily fetch from land or icy water, which explains the love of a swim.",
    healthConsiderations:
      "A good breeder will gladly show you hip and elbow scores, plus DNA results for progressive retinal atrophy (prcd-PRA) and exercise-induced collapse. The thing to watch day to day is weight: many Labradors carry a gene linked to a bigger appetite, so measuring meals keeps them fit for longer.",
    poorMatchFor: [
      "You're dreaming of a sofa without dog hair",
      "A daily walk and a little training would be hard to fit into your week",
      "Your dog would be home alone for a full working day, most days",
    ],
    keyTradeoffs: [
      "Wonderfully easy to train because food matters so much to them, and that same appetite means keeping an eye on the waistline",
      "They'll greet nearly everyone as a friend: lovely company, not much of a guard dog",
    ],
  },
  "french-bulldog": {
    originalPurpose:
      "Frenchies descend from little English bulldogs that lace makers took to France in the 1800s. Parisians fell for them, and they've been companion dogs ever since.",
    healthConsiderations:
      "That sweet flat face can make breathing hard (BOAS), so it's worth asking whether the parents were graded for airway function, and choosing a puppy with nicely open nostrils. Backs, skin folds and ears need a bit of care, and many litters are born by caesarean. Budget for good insurance, and keep them cool on warm days.",
    poorMatchFor: [
      "You're hoping for a running, hiking or hot-summer buddy",
      "A surprise vet bill of a few thousand euros would put real strain on you",
      "Your home gets hot in summer and there's no easy way to cool it",
    ],
    keyTradeoffs: [
      "Small, quiet and content with short strolls, though keeping them healthy can cost more than almost any other breed",
      "The face that wins everyone over is also behind most of their health worries",
    ],
  },
  "border-collie": {
    originalPurpose:
      "Border Collies come from the hills where England meets Scotland, where they gathered sheep across wide slopes and took their cues from a shepherd far away.",
    healthConsiderations:
      "Happily, they're a sturdy breed. Ask to see hip scores, an eye examination and DNA tests for Collie Eye Anomaly, trapped neutrophil syndrome and neuronal ceroid lipofuscinosis. Epilepsy does occur, and many are sensitive to loud noises, so a calm home helps.",
    poorMatchFor: [
      "You'd like a family pet that's happy with walks and doesn't need a job for its brain",
      "You live on a busy road where passing cars and bikes would be hard to resist chasing",
      "Lazy weekends on the sofa are your idea of perfect",
    ],
    keyTradeoffs: [
      "Possibly the most trainable dog in the world, and if you don't give them something to do, they'll find their own projects",
      "Their sensitivity makes them brilliant partners, and it also means a noisy, hectic home can wear them down",
    ],
  },
  "cavalier-king-charles-spaniel": {
    originalPurpose:
      "Cavaliers were brought back in 1920s England to match the little spaniels in paintings from Charles II's court, and they've been devoted lap dogs from the start.",
    healthConsiderations:
      "Heart problems are commonly seen in the breed, often from middle age, so ask the breeder what heart checks both parents had. Syringomyelia is another condition commonly discussed with Cavaliers, so ask about that too. Read the breed profile and ask a vet what checks make sense. General guidance, not a vet.",
    poorMatchFor: [
      "Your Cavalier would be on their own for most of each weekday",
      "Regular heart check-ups, and perhaps lifelong medication, wouldn't fit the budget",
      "You'd like a dog that lets you know when someone's at the door",
    ],
    keyTradeoffs: [
      "One of the gentlest, easiest natures you'll find, alongside one of the more demanding health profiles",
      "They love everyone they meet, which is lovely at home and hopeless for guarding",
    ],
  },
  "german-shepherd": {
    originalPurpose:
      "The breed was set down in Germany in 1899 as an all-round herding dog, and before long it was guiding, searching and working alongside police and soldiers.",
    healthConsiderations:
      "Ask for hip and elbow scores and a DNA test for degenerative myelopathy. Bloat, exocrine pancreatic insufficiency and a sensitive stomach or skin can turn up. It's kinder to choose lines with a level, balanced build rather than a steeply sloping back.",
    poorMatchFor: [
      "This is your first dog and you don't yet have a plan for training and socialising",
      "You'd like a dog that's naturally easy-going with strangers",
      "Lots of dog hair and a strong dog on the lead would wear you out",
    ],
    keyTradeoffs: [
      "Deeply loyal and protective, and steady socialising keeps that protective streak in proportion",
      "A joy to train, and genuinely unhappy without regular work to do",
    ],
  },
  dachshund: {
    originalPurpose:
      "Dachshunds were bred in Germany to follow badgers (Dachs) underground: small, fearless hunters with a bark big enough to carry out of a burrow.",
    healthConsiderations:
      "Back problems (IVDD) affect a good number of Dachshunds and can be serious, so the kindest things you can do are keep them slim, carry them on stairs and gently discourage jumping. Wire-haired lines tend to have fewer back issues. Some varieties have DNA tests for eye disease (cord1-PRA) and Lafora disease.",
    poorMatchFor: [
      "You're several flights up with no lift",
      "You need a quiet dog in a building with thin walls",
      "Little ones at home would love to scoop the dog up and carry it about",
    ],
    keyTradeoffs: [
      "Small enough to take anywhere, with the voice and confidence of a much bigger dog",
      "Clever and independent-minded, so recall and house-training usually take a bit more patience",
    ],
  },
  beagle: {
    originalPurpose:
      "Beagles are British pack hounds, bred to follow the scent of hares while their people followed on foot. That nose is still running the show.",
    healthConsiderations:
      "Good news: they're generally healthy and long-lived. Epilepsy, an underactive thyroid and back problems can occur, and there's a DNA test for Musladin-Lueke syndrome. Beagles gain weight easily, and those lovely long ears need a regular check.",
    poorMatchFor: [
      "You'd love a dog you can trust off the lead anywhere",
      "Your neighbours would mind some baying while you're out",
      "Your garden isn't securely fenced",
    ],
    keyTradeoffs: [
      "Friendly with people and dogs alike, though the nose usually wins over whatever you just asked for",
      "Compact enough for most homes, with the stamina of a working hound",
    ],
  },
  "cocker-spaniel": {
    originalPurpose:
      "Cockers are British gundogs, bred to bustle woodcock out of thick cover and bring them back, which is where their name comes from.",
    healthConsiderations:
      "Ears are the everyday job, so drying and checking them often saves a lot of discomfort. Ask for hip scores and DNA tests for progressive retinal atrophy (prcd-PRA) and familial nephropathy, a kidney condition. Working and show lines differ a lot in energy, so ask which you're meeting.",
    poorMatchFor: [
      "Regular brushing and trims would slip down the list",
      "Your Cocker would be alone through long working days",
      "You'd like a laid-back dog but have fallen for a working-line puppy",
    ],
    keyTradeoffs: [
      "Merry and eager to please, and working lines are much busier than that soft face suggests",
      "A beautiful coat that needs a groomer's help to stay beautiful",
    ],
  },
  chihuahua: {
    originalPurpose:
      "Named after the Mexican state, Chihuahuas are thought to descend from the little companion dogs of ancient Mexico, and have been bred as companions since the late 1800s.",
    healthConsiderations:
      "Teeth need the most care, so daily brushing and the odd professional clean make a real difference. Kneecap and heart valve problems can occur, and very tiny puppies can struggle with low blood sugar. On the bright side, 15 years or more is quite normal.",
    poorMatchFor: [
      "You have toddlers or young children at home",
      "You'd like a dog that's calm and quiet when visitors come",
      "Your winters are cold and you'd rather not dress a dog for walks",
    ],
    keyTradeoffs: [
      "Tiny in space and cost, and delicate enough to need gentle handling",
      "Utterly devoted to their person, and often wary or chatty with everyone else",
    ],
  },
  "bernese-mountain-dog": {
    originalPurpose:
      "Berners were farm dogs in the Swiss canton of Bern, pulling milk carts, moving cattle and keeping a kindly eye on the yard.",
    healthConsiderations:
      "The hardest part of loving a Berner is how short their lives can be, and cancers, histiocytic sarcoma in particular, are sadly common. Ask for hip and elbow scores and a DNA test for degenerative myelopathy, and learn the signs of bloat.",
    poorMatchFor: [
      "You live somewhere hot, or on a top floor without a lift",
      "Seven to ten years together would feel too short",
      "A big dog's vet and food bills would stretch your budget",
    ],
    keyTradeoffs: [
      "A gentle, patient giant, with less time together than you'd wish",
      "Calm as an adult after a long, bouncy adolescence, and there's fur on everything all year round",
    ],
  },
};
