/** One place that describes the whole site, used by the header on every screen size. */
export type NavItem = { to: string; label: string; hint: string };
export type NavGroup = { id: string; label: string; blurb: string; items: NavItem[] };

export const navGroups: NavGroup[] = [
  {
    id: "get-a-dog",
    label: "Get a dog",
    blurb: "Thinking about it? Start here and take your time.",
    items: [
      { to: "/get-a-dog", label: "The whole journey", hint: "From first thought to first night" },
      { to: "/get-a-dog/ready", label: "Am I ready?", hint: "An honest look at your everyday life" },
      { to: "/find-my-dog", label: "Find my dog", hint: "Two minutes, no account needed" },
      { to: "/get-a-dog/choose", label: "Choosing well", hint: "Puppy or adult, breeder or rescue" },
      { to: "/get-a-dog/costs", label: "What it costs", hint: "Before, monthly and the surprises" },
      { to: "/get-a-dog/prepare", label: "Getting ready", hint: "Your home, your days, your list" },
      { to: "/get-a-dog/welcome-home", label: "Welcome home", hint: "The first day and the first week" },
    ],
  },
  {
    id: "breeds",
    label: "Breeds",
    blurb: "Every breed described honestly — the lovely bits and the hard bits.",
    items: [
      { to: "/breeds", label: "All breeds", hint: "Browse and filter" },
      { to: "/compare", label: "Compare two", hint: "Side by side, no spin" },
      { to: "/dog-life", label: "Dog life near you", hint: "Walks, weather and everyday places" },
      { to: "/guides", label: "Guides", hint: "Calm reading on living with a dog" },
    ],
  },
  {
    id: "my-dog",
    label: "My Dog",
    blurb: "The home for your own dog's everyday life.",
    items: [
      { to: "/my-dog", label: "Today", hint: "What's worth doing today" },
      { to: "/my-dog/week", label: "My week", hint: "A gentle weekly rhythm" },
      { to: "/my-dog/nutrition", label: "Food & portions", hint: "How much, roughly" },
      { to: "/my-dog/food", label: "Can my dog eat this?", hint: "Safe, careful, avoid" },
      { to: "/my-dog/weight", label: "Weight & body", hint: "Track it kindly" },
      { to: "/my-dog/vet", label: "Vet & contacts", hint: "Visits and phone numbers" },
      { to: "/my-dog/print", label: "Print & save", hint: "Paper you can stick on the fridge" },
    ],
  },
  {
    id: "train",
    label: "Train",
    blurb: "Short, kind sessions you can actually do yourself.",
    items: [
      { to: "/train", label: "Today's session", hint: "Five minutes is plenty" },
      { to: "/train/library", label: "Lesson library", hint: "Step by step, with pictures" },
      { to: "/train/journey", label: "Your journey", hint: "How far you've come" },
      { to: "/train/setup", label: "Your dog's details", hint: "Age, breed, what you're working on" },
    ],
  },
  {
    id: "travel",
    label: "Travel",
    blurb: "Car trips, hikes and crossing borders — safely.",
    items: [
      { to: "/travel", label: "Travel & adventures", hint: "Where you're heading" },
      { to: "/travel/car", label: "In the car", hint: "Safe setups and car sickness" },
      { to: "/travel/outdoors", label: "Outdoors", hint: "Hikes, paws, heat and cold" },
      { to: "/travel/abroad", label: "Travelling abroad", hint: "Country to country checker" },
    ],
  },
];
