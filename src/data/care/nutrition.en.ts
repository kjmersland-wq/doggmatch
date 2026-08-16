import type { FoodItem } from "./types";

const poisonLine = {
  label: "Toxic food guidance for dogs",
  org: "Animal Poison Line / VPIS",
} as const;

/**
 * A calm, searchable answer to "can my dog eat this?".
 * `avoid` = known to be harmful. `care` = fine in some situations, with caveats.
 * Nothing here replaces a phone call to a vet if a dog has already eaten something.
 */
export const foodItemsEn: FoodItem[] = [
  // ---------------------------------------------------------------- avoid
  { id: "chocolate", name: "Chocolate", safety: "avoid", body: "Contains theobromine, which dogs can't clear the way we do. Dark and baking chocolate are the worst; milk chocolate still counts.", warning: "Ring your vet straight away with the type, the amount and roughly when. Don't wait for symptoms.", source: poisonLine },
  { id: "xylitol", name: "Xylitol / birch sugar", safety: "avoid", body: "A sweetener in sugar-free gum, mints, some peanut butters, baked goods and some medicines. Very small amounts can cause a dangerous drop in blood sugar.", warning: "This is an emergency. Call a vet immediately.", source: poisonLine },
  { id: "grapes", name: "Grapes, raisins, sultanas, currants", safety: "avoid", body: "Can cause kidney failure in some dogs, and nobody can predict which dogs or what amount. That includes mince pies, fruit cake and granola.", warning: "Any amount is a same-day vet call.", source: poisonLine },
  { id: "onion", name: "Onion, garlic, leeks, chives", safety: "avoid", body: "The whole allium family damages red blood cells, raw, cooked, dried or powdered. Watch out for gravy, stock, curry and leftovers.", warning: "Signs can take days to show. Call your vet.", source: poisonLine },
  { id: "macadamia", name: "Macadamia nuts", safety: "avoid", body: "Cause weakness, wobbliness, tremors and vomiting, often within twelve hours.", warning: "Call your vet.", source: poisonLine },
  { id: "alcohol", name: "Alcohol", safety: "avoid", body: "Dogs are far more sensitive than people. Includes unbaked dough and some desserts.", warning: "Call a vet urgently.", source: poisonLine },
  { id: "caffeine", name: "Coffee, tea, energy drinks", safety: "avoid", body: "Caffeine causes a racing heart, restlessness and tremors. Coffee grounds and tea bags in a bin are a common culprit.", warning: "Call your vet.", source: poisonLine },
  { id: "dough", name: "Raw bread dough", safety: "avoid", body: "Rises in the warm stomach and the yeast produces alcohol. Painful and genuinely dangerous.", warning: "This is an emergency.", source: poisonLine },
  { id: "cooked-bones", name: "Cooked bones", safety: "avoid", body: "Splinter into sharp pieces that can damage or block the gut. That includes chicken, chop and rib bones.", warning: "If your dog has eaten one, call your vet for advice." },
  { id: "corn-cob", name: "Corn on the cob", safety: "avoid", body: "The kernels are fine; the cob is one of the most common causes of a surgical blockage in dogs.", warning: "Call your vet the same day." },
  { id: "mouldy", name: "Mouldy food & compost", safety: "avoid", body: "Mould can produce toxins that cause severe tremors and seizures. Keep compost bins properly closed.", warning: "Call a vet urgently.", source: poisonLine },
  { id: "stone-fruit-pits", name: "Peach, plum & cherry stones", safety: "avoid", body: "The flesh is fine in small amounts, the stones aren't — a choking and blockage risk, and they contain cyanide compounds." },
  { id: "mushrooms-wild", name: "Wild mushrooms", safety: "avoid", body: "Some are deadly and telling them apart in a field is not realistic. Shop-bought mushrooms in a meal are a different matter.", warning: "If your dog eats a wild mushroom, call a vet and photograph it if you can." },
  { id: "salt", name: "Very salty food", safety: "avoid", body: "Large amounts of salt cause serious problems. Salt dough decorations and swallowing lots of seawater are the usual causes." },
  { id: "rhubarb", name: "Rhubarb leaves", safety: "avoid", body: "The leaves are toxic. Worth knowing if you grow it in the garden." },
  { id: "nutmeg", name: "Nutmeg", safety: "avoid", body: "In quantity it causes disorientation and tremors. A dusting on something isn't usually a crisis, but don't offer it." },
  { id: "hops", name: "Hops", safety: "avoid", body: "Relevant if anyone in the house brews beer. Causes a dangerous rise in body temperature." },

  // ------------------------------------------------------------------ care
  { id: "peanut-butter", name: "Peanut butter", safety: "care", body: "Fine as an occasional treat — but only if it doesn't contain xylitol or birch sugar. Read the label every single time, even on a brand you know.", serving: "A teaspoon smeared in a lick mat", warning: "Xylitol-free only." },
  { id: "cheese", name: "Cheese", safety: "care", body: "Excellent training currency, but rich and salty. Plenty of dogs don't handle dairy well.", serving: "Pea-sized pieces, not a slice" },
  { id: "yoghurt", name: "Plain yoghurt", safety: "care", body: "Small amounts of plain, unsweetened yoghurt suit some dogs. Never anything sweetened — check for xylitol.", serving: "A spoonful" },
  { id: "milk", name: "Milk", safety: "care", body: "Many adult dogs are lactose intolerant and it usually shows up as an upset stomach. Water is a better idea." },
  { id: "bread", name: "Bread", safety: "care", body: "Plain baked bread isn't harmful but it's empty calories. Avoid anything with raisins, onion, garlic or seeds." },
  { id: "popcorn", name: "Popcorn", safety: "care", body: "Plain, air-popped and unsalted is fine as an occasional snack. Butter, salt and sweet coatings aren't. Unpopped kernels can break teeth." },
  { id: "ham", name: "Ham, bacon & processed meat", safety: "care", body: "Very salty and fatty. Fatty foods are a well-known trigger for pancreatitis, which is painful and serious." },
  { id: "avocado", name: "Avocado", safety: "care", body: "The flesh is much less of a problem for dogs than for birds, but it's high in fat and the stone is a real blockage risk. Easier to just skip." },
  { id: "tomato", name: "Tomato", safety: "care", body: "Ripe tomato flesh is fine in small amounts. Green tomatoes, leaves and stems aren't." },
  { id: "nuts", name: "Nuts (general)", safety: "care", body: "High in fat, easy to choke on, often salted. Macadamias are toxic. Best avoided as a habit." },
  { id: "raw-potato", name: "Raw potato", safety: "care", body: "Green or sprouting potatoes are toxic. Plain cooked potato without butter or salt is fine occasionally." },
  { id: "sweetcorn", name: "Sweetcorn kernels", safety: "care", body: "Kernels off the cob are harmless in small amounts. The cob is the danger." },
  { id: "citrus", name: "Oranges & citrus", safety: "care", body: "A small piece of peeled orange won't hurt, though most dogs aren't keen. Skip the peel, pith and pips." },
  { id: "ice-cream", name: "Ice cream", safety: "care", body: "Sugary, often dairy-heavy, and sometimes contains xylitol or chocolate. Frozen plain yoghurt or a frozen carrot is a better treat on a hot day." },
  { id: "raw-fish", name: "Raw fish", safety: "care", body: "Carries a parasite and bacteria risk, and some raw fish interferes with vitamin absorption. Cooked and boneless is the safer version." },
  { id: "liver", name: "Liver", safety: "care", body: "A brilliant training treat, but very high in vitamin A. Keep it to small amounts rather than a regular meal." },
  { id: "eggs-raw", name: "Raw egg", safety: "care", body: "Salmonella risk, and raw whites can interfere with a B vitamin. Cooked plain egg is the easy alternative." },
  { id: "honey", name: "Honey", safety: "care", body: "Not toxic, just sugar. A tiny amount now and then is fine for healthy adult dogs; skip it for diabetic dogs and puppies." },
  { id: "coconut", name: "Coconut", safety: "care", body: "Small amounts of flesh or oil aren't harmful, but it's fatty and can loosen stools." },
  { id: "spinach", name: "Spinach & kale", safety: "care", body: "Fine in small amounts as part of a meal. Large quantities aren't ideal for dogs with kidney issues." },
  { id: "table-scraps", name: "Table scraps", safety: "care", body: "The problem is rarely one mouthful — it's the sauces, onion, salt and fat, and the calories nobody's counting. Keep treats to about a tenth of the day's food." },

  // ------------------------------------------------------------------ safe
  { id: "carrot", name: "Carrot", safety: "safe", body: "Crunchy, cheap and low in calories. A cold carrot is a decent thing for a teething puppy to gnaw.", serving: "Raw sticks or cooked chunks" },
  { id: "apple", name: "Apple", safety: "safe", body: "Sweet, crunchy and popular. Take the core and pips out.", serving: "A few slices" },
  { id: "banana", name: "Banana", safety: "safe", body: "Fine in small amounts. Sugary, so not every day.", serving: "A couple of coins of banana" },
  { id: "blueberries", name: "Blueberries", safety: "safe", body: "Small, easy to hand out and most dogs love them.", serving: "A small handful" },
  { id: "watermelon", name: "Watermelon", safety: "safe", body: "Refreshing on a hot day. Remove the seeds and rind.", serving: "A few cubes, or frozen" },
  { id: "strawberries", name: "Strawberries", safety: "safe", body: "Fine fresh, in small amounts. Nothing tinned or in syrup.", serving: "One or two" },
  { id: "pumpkin", name: "Plain pumpkin", safety: "safe", body: "Plain cooked or tinned pumpkin (not pie filling) is gentle on the stomach and often suggested for firming up loose stools.", serving: "A spoonful or two" },
  { id: "green-beans", name: "Green beans", safety: "safe", body: "Filling and low in calories — genuinely useful if your dog is on a diet.", serving: "A small handful, plain" },
  { id: "cucumber", name: "Cucumber", safety: "safe", body: "Mostly water. A good hot-weather nibble.", serving: "A few slices" },
  { id: "chicken", name: "Plain cooked chicken", safety: "safe", body: "Skinless, boneless and unseasoned. One of the best training treats there is.", serving: "Small pieces" },
  { id: "turkey", name: "Plain cooked turkey", safety: "safe", body: "Same rules as chicken: no skin, no bones, no seasoning, no gravy.", serving: "Small pieces" },
  { id: "fish-cooked", name: "Cooked white fish & salmon", safety: "safe", body: "Well cooked and thoroughly boned. A good source of protein and omega-3.", serving: "A small portion" },
  { id: "rice", name: "Plain cooked rice", safety: "safe", body: "Bland and easy to digest — often part of what a vet suggests after an upset stomach.", serving: "Mixed into a meal" },
  { id: "egg", name: "Cooked egg", safety: "safe", body: "Scrambled without butter or salt, or hard-boiled.", serving: "Part of an egg, depending on your dog's size" },
  { id: "sweet-potato", name: "Cooked sweet potato", safety: "safe", body: "Plain and cooked. Most dogs are very keen.", serving: "A small amount, no butter" },
  { id: "peas", name: "Peas", safety: "safe", body: "Fresh or frozen, plain. Skip tinned peas — too much salt.", serving: "A spoonful" },
  { id: "broccoli", name: "Broccoli", safety: "safe", body: "Fine in small amounts. A lot can cause gas and stomach irritation.", serving: "A couple of small florets" },
  { id: "courgette", name: "Courgette", safety: "safe", body: "Low calorie and easy on the stomach, raw or cooked plain.", serving: "A few pieces" },
  { id: "celery", name: "Celery", safety: "safe", body: "Crunchy and very low in calories. Chop it small.", serving: "Small chopped pieces" },
  { id: "pear", name: "Pear", safety: "safe", body: "Fine without the core and pips.", serving: "A few pieces" },
  { id: "melon", name: "Cantaloupe melon", safety: "safe", body: "Sweet and hydrating. Remove the rind and seeds.", serving: "A few cubes" },
  { id: "mango", name: "Mango", safety: "safe", body: "Peeled, stone removed. Sugary, so keep it small.", serving: "A couple of pieces" },
  { id: "pineapple", name: "Pineapple", safety: "safe", body: "Fresh only, skin and core removed. Not the tinned sugary kind.", serving: "A small piece" },
  { id: "oats", name: "Plain cooked oats", safety: "safe", body: "Plain porridge made with water. No sugar, no sweeteners, no milk.", serving: "A spoonful" },
  { id: "sardines", name: "Sardines in water", safety: "safe", body: "Tinned in water, not oil or brine. A good source of omega-3.", serving: "Part of a tin, occasionally" },
  { id: "cauliflower", name: "Cauliflower", safety: "safe", body: "Plain and in small amounts. Can cause gas, as it does for us.", serving: "A small floret" },
  { id: "lettuce", name: "Lettuce", safety: "safe", body: "Harmless and mostly water. Not exciting, but fine.", serving: "A little, chopped" },
  { id: "beetroot", name: "Cooked beetroot", safety: "safe", body: "Plain cooked beetroot is fine in small amounts — not the pickled kind.", serving: "A small piece" },
];

export const nutritionSectionsEn = [
  {
    title: "Read the label, not the packaging",
    body: "The front of the bag is marketing. What matters is a statement saying the food is complete and balanced for your dog's life stage, and a feeding guide you can actually follow.",
    points: [
      "\"Complete\" means it can be fed on its own. \"Complementary\" means it can't",
      "Check it's for the right life stage — puppy, adult or all life stages",
      "Feeding guides are a starting point, not a rule. Adjust to your dog",
      "Brands with vets and nutritionists on staff, running feeding trials, are a safer bet",
    ],
  },
  {
    title: "How much, really",
    body: "Every guide on every bag is an average. Two dogs of the same weight can need noticeably different amounts, and the honest answer is to feed, watch, and adjust every few weeks.",
    points: [
      "Weigh the food rather than using a scoop — scoops drift",
      "Count treats and chews. They add up faster than anyone expects",
      "Check body condition monthly and adjust by around 10% at a time",
      "Neutered dogs often need a bit less than they used to",
    ],
  },
  {
    title: "How often",
    body: "Puppies need frequent small meals; adults do well on two. Splitting the day's food into two meals suits most dogs' routines better than one big bowl.",
    points: [
      "Under 4 months: three or four meals a day",
      "4 to 6 months: three meals",
      "6 months and up: two meals",
      "Deep-chested dogs: avoid hard exercise right around mealtimes",
    ],
  },
  {
    title: "Changing food",
    body: "Sudden changes upset most dogs' stomachs. Take about a week over it.",
    points: [
      "Days 1–2: a quarter new, three quarters old",
      "Days 3–4: half and half",
      "Days 5–6: three quarters new",
      "Day 7: all new food",
      "If things get loose, slow down rather than pushing on",
    ],
  },
  {
    title: "Water",
    body: "Fresh water, always available, in a clean bowl. It sounds obvious, and it's still the thing most often forgotten on hot days and long journeys.",
  },
  {
    title: "Raw and home-cooked",
    body: "Both can be done well, and both are easy to get wrong. Home-cooked diets in particular are very often unbalanced unless a veterinary nutritionist has formulated them.",
    points: [
      "Raw feeding carries a bacterial risk to your dog and your household",
      "Home-cooked needs a proper recipe and supplements to be complete",
      "Talk to your vet before switching, especially for puppies and older dogs",
      "This is a genuine decision to make with a professional, not from a forum",
    ],
  },
] as const;
