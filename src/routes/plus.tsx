import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Arrow, ButtonLink, Badge, Eyebrow, Section } from "@/components/dogmatch/ui";
import { SectionHead } from "@/components/dogmatch/journey/parts";
import { JoinPlusButton } from "@/components/dogmatch/plus/join";
import { MemberCardShowcase } from "@/components/dogmatch/plus/card-showcase";
import { cn } from "@/lib/utils";
import { useCopy } from "@/i18n";
import heroImage from "@/assets/plus-hero.jpg";
import trainImage from "@/assets/train-recall.jpg";
import careImage from "@/assets/care-hero.jpg";
import foodImage from "@/assets/care-nutrition.jpg";
import dogLifeImage from "@/assets/dog-life.jpg";
import travelImage from "@/assets/travel-car.jpg";
import lunaImage from "@/assets/breed-labrador-retriever.jpg";
import maxImage from "@/assets/breed-cocker-spaniel.jpg";

const title = "DoggMatch+ | Premium Dog Life Membership";
const description =
  "DoggMatch+ brings your dog's training, health, nutrition, care, travel and everyday life together in one beautiful place.";
const url = "https://www.doggmatch.com/plus";

export const Route = createFileRoute("/plus")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: PlusPage,
});

/* ------------------------------------------------------------- small bits */

function Card({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background p-7 shadow-[var(--shadow-soft)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

function Rail({ children, label }: { children: ReactNode; label: string }) {
  return (
    <div
      aria-label={label}
      className="mt-12 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
    >
      {children}
    </div>
  );
}

function RailItem({ children }: { children: ReactNode }) {
  return <div className="w-[78vw] shrink-0 snap-start sm:w-auto">{children}</div>;
}

function Tick() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="mt-[3px] h-4 w-4 shrink-0 text-accent" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10.5 8 14.5 16 6" />
    </svg>
  );
}

function Stars({ filled, label }: { filled: number; label: string }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={label}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={cn("h-3.5 w-3.5", i < filled ? "text-accent" : "text-border-strong")} fill="currentColor" aria-hidden>
          <path d="m10 1.8 2.5 5.1 5.6.8-4 3.9 1 5.6-5.1-2.7-5 2.7 1-5.6-4.1-3.9 5.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

/* -------------------------------------------------------------- page data */

const copy = {
  en: {
    flow: [
      "Find your dog",
      "Understand your dog",
      "Prepare for your dog",
      "Live with your dog",
      "Look after your dog",
      "Enjoy life together",
    ],
    myDogSections: [
      { to: "/my-dog/care/everyday-check", label: "Health", line: "The quick daily once-over" },
      { to: "/my-dog/nutrition", label: "Food", line: "Portions and meals" },
      { to: "/train", label: "Training", line: "Today's short session" },
      { to: "/my-dog/care/dental", label: "Dental", line: "A minute a day" },
      { to: "/my-dog/care/coat", label: "Coat & care", line: "Brushing and bathing" },
      { to: "/my-dog/care/paws", label: "Paws & nails", line: "Pads and winter" },
      { to: "/my-dog/weight", label: "Weight", line: "A kind, simple record" },
      { to: "/my-dog/care/wellbeing", label: "Activity", line: "Movement and rest" },
      { to: "/train/library", label: "Behaviour", line: "One lesson at a time" },
      { to: "/my-dog/week", label: "My Week", line: "Your weekly rhythm" },
      { to: "/travel", label: "Travel", line: "Car, hikes and borders" },
      { to: "/my-dog/print", label: "Documents", line: "Paper for the fridge" },
    ],
    programmes: [
      { title: "Puppy basics", line: "The first weeks, gently" },
      { title: "Recall", line: "Coming back, every time you ask" },
      { title: "Loose-leash walking", line: "Walks without the tug of war" },
      { title: "Calm behaviour", line: "Settling on a mat" },
      { title: "Everyday manners", line: "Doors, greetings, waiting" },
      { title: "Focus", line: "Their name, their attention" },
      { title: "Stay", line: "A second longer each time" },
      { title: "Socialisation", line: "New places at their pace" },
    ],
    careItems: [
      { title: "Health journal", line: "Notice changes over weeks, not guesses." },
      { title: "Weight", line: "The hands-on check plus a simple log." },
      { title: "Dental", line: "Teeth and gums, thirty seconds at a time." },
      { title: "Coat & skin", line: "Coat type, brushing rhythm, lumps and mats." },
      { title: "Paws & nails", line: "Pads, nails, salt and hot pavement." },
      { title: "Care calendar", line: "Quiet nudges when something's due." },
      { title: "Vet notes", line: "What you asked, what you were told." },
      { title: "Health summary", line: "One page to take with you." },
    ],
    foodItems: [
      { title: "Food & feeding plan", line: "How much, roughly, for your dog." },
      { title: "Feeding routine", line: "Meals a day, times that suit you." },
      { title: "Food tracking", line: "What they eat, kept in one place." },
      { title: "Weight connection", line: "Portions that follow the weight log." },
      { title: "Treats", line: "Kept to a sensible slice of the day." },
      { title: "Water", line: "Clean and topped up, always." },
      { title: "Food safety", line: "Safe, careful or avoid — 55+ foods." },
    ],
    week: [
      { day: "Monday", items: ["Walk", "Training", "Dental"] },
      { day: "Tuesday", items: ["Walk", "Mental stimulation"] },
      { day: "Wednesday", items: ["Training", "Grooming"] },
      { day: "Thursday", items: ["Long walk", "Paw check"] },
      { day: "Friday", items: ["Walk", "Training", "Dental"] },
      { day: "Saturday", items: ["Adventure", "Weigh-in"] },
      { day: "Sunday", items: ["Sniffy walk", "Quiet time"] },
    ],
    dogLife: [
      "Parks",
      "Walking areas",
      "Dog-friendly places",
      "Trainers",
      "Groomers",
      "Vets",
      "Dog-friendly stays",
    ],
    travelItems: [
      "Car travel",
      "Long walks",
      "Hiking",
      "Holidays",
      "International travel",
      "Travel checklist",
      "Travel documents",
      "Country-to-country requirements",
    ],
    packContents: [
      "Dog profile",
      "Owner information",
      "Important contacts",
      "Travel checklist",
      "Health information",
      "Documents",
      "Emergency information",
    ],
    docs: [
      "Complete Dog Pack",
      "Health summary",
      "Training plan",
      "Food & feeding plan",
      "Weekly plan",
      "Important contacts",
      "Vet visit notes",
      "Travel pack",
      "Grooming checklist",
    ],
    journey: [
      "Thinking about a dog",
      "Find my dog",
      "Get ready",
      "Welcome home",
      "My Dog",
      "Train",
      "Feed",
      "Care",
      "Travel",
      "Enjoy life",
    ],
    freeList: [
      "Is a dog right for me?",
      "Find my dog",
      "Basic breed information",
      "Getting a dog guides",
      "Basic Dog Life",
      "Selected free guides",
    ],
    plusList: [
      "Everything in Free",
      "My Dog",
      "Complete training",
      "Health & care",
      "Food & feeding",
      "My Week",
      "Care calendar",
      "Advanced Dog Life",
      "Travel tools",
      "International travel checker",
      "Complete Dog Pack",
      "Printable documents",
      "Multiple dogs",
      "A fuller match report",
      "Progress over time",
    ],
    firstWeek: [
      { day: "Day 1", title: "Create My Dog", line: "Give your dog a place of their own." },
      { day: "Day 2", title: "Set up care", line: "Add feeding, dental, grooming and everyday routines." },
      { day: "Day 3", title: "Start training", line: "Choose a programme and take the first small step." },
      { day: "Day 4", title: "Build My Week", line: "Bring walks, training and care together." },
      { day: "Day 5", title: "Explore Dog Life", line: "Find places and services that fit your life with your dog." },
      { day: "Day 6", title: "Plan your next trip", line: "Get your travel checklist ready." },
      { day: "Day 7", title: "Create your Dog Pack", line: "Keep the important things together, on screen or on paper." },
    ],
    faqs: [
      {
        q: "What is DoggMatch+?",
        a: "It's the membership side of DoggMatch. Free helps you find the right dog. DoggMatch+ helps you look after that dog day to day — training, food, health, routines, travel and documents, all in one place.",
      },
      {
        q: "What do I get with DoggMatch+?",
        a: "My Dog, the full training programmes, health and care, food and feeding, My Week, the care calendar, travel tools, the complete Dog Pack and printable documents — plus a fuller match report.",
      },
      {
        q: "What stays free?",
        a: "Everything you need to find the right dog. Is a dog right for me?, Find my dog, breed information, the getting-a-dog guides, basic Dog Life and our free guides stay free.",
      },
      {
        q: "Can I use DoggMatch+ for more than one dog?",
        a: "Yes. You can keep a separate profile for each dog and switch between them, so nothing gets muddled.",
      },
      {
        q: "Can I print my dog's information?",
        a: "Yes. The Dog Pack and the individual documents — health summary, feeding plan, weekly plan, contacts, travel pack — are all made to print cleanly on A4 or save as a PDF.",
      },
      {
        q: "Can I use DoggMatch when travelling?",
        a: "Yes. There's car travel, hiking and holiday guidance, a country-to-country checker for travelling abroad, and a travel pack you can take with you on paper.",
      },
      {
        q: "Is DoggMatch veterinary advice?",
        a: "No. We offer general guidance about life with a dog. For anything medical, or if you're worried about your dog, please talk to your vet.",
      },
      {
        q: "Can I cancel my membership?",
        a: "Yes, whenever you like. Open your account page and you can change or cancel your membership yourself — it stays active until the end of the period you've already paid for.",
      },
      {
        q: "Can I choose monthly or yearly membership?",
        a: "Yes — €7.99 a month, or €59.99 a year, which works out at about €5 a month. You can switch between them later from your account.",
      },
      {
        q: "What happens when I join?",
        a: "You'll create My Dog, add a few details, and everything else on the site starts to fit around that dog. There's a gentle first week to walk you through it.",
      },
    ],
    starsLabel: (filled: number) => `${filled} of 5`,
    hero: {
      eyebrow: "Membership",
      lead: "More than finding your dog. A better life together.",
      body: "Your DoggMatch journey doesn't end when you find the right dog. Premium gives you the tools, plans and personal space to help you give your dog a happy, healthy and well-organised life.",
      heroAlt: "A woman resting her forehead against her labrador at sunset",
      exploreCta: "Explore DoggMatch+",
      seeAllCta: "See everything included",
    },
    coreMessage: "brings it all together.",
    myDog: {
      eyebrow: "The centre of it all",
      title: "Your dog. Your space.",
      body: "My Dog is your dog's personal home inside DoggMatch. Everything you keep track of lives here — and everything else on the site feeds into it.",
      lunaAlt: "Luna, a labrador retriever",
      lunaName: "Luna",
      lunaBreedAge: "Labrador Retriever · 3 years",
      today: "Today",
      sideTitle: "Everything about your dog, in one place",
      sideBody: "Health, food, training, dental, coat, paws, weight, activity, behaviour, your week, travel and documents. You don't have to fill it all in. Add what's useful, and the rest waits quietly until you need it.",
      cta: "See My Dog",
    },
    productMessage: {
      titleLine1: "Find your dog.",
      titleLine2: "Then live life together.",
      body: "Finding the right dog is only the beginning. DoggMatch+ gives you one place to look after the everyday things that matter — from training and feeding to health, travel, routines and the little moments in between.",
    },
    training: {
      trainAlt: "A man practising recall with his dog in a field",
      eyebrow: "Train together",
      title: "Small steps. Real progress.",
      body: "Structured programmes built from short, kind sessions you can actually fit into a normal day. No shouting, no gadgets, no promises about how fast it'll go.",
      lunaName: "Luna",
      recall: "Recall",
      progressNote: "4 sessions completed this week.",
      railLabel: "Training programmes",
      libraryCta: "Open the lesson library",
    },
    healthCare: {
      eyebrow: "Health & care",
      title: "Look after the little things",
      body: "Keep the important things together, notice changes over time, and stay organised. DoggMatch isn't a veterinary service — when something worries you, your vet is the right call.",
      careAlt: "An owner calmly checking over her dog at home",
    },
    food: {
      foodAlt: "A measured bowl of food being prepared for a waiting dog",
      eyebrow: "Feed well",
      title: "Make feeding easier to understand",
      body: "Portions worked out from your dog's weight, age and how active they are — then kept in step with the weight log. Sensible, evidence-informed, no fads.",
      portionsCta: "Food & portions",
      safetyCta: "Can my dog eat this?",
    },
    myWeek: {
      eyebrow: "My Week",
      title: "Your week with your dog",
      body: "Bring training, care, activity and everyday routines together, so nothing important quietly slips.",
      cta: "Open My Week",
    },
    dogLifeSection: {
      eyebrow: "Dog life",
      title: "Life beyond the home",
      body: "The everyday map of a dog's life near you — where to walk, where you're welcome and who to call.",
      cta: "Explore Dog Life",
      dogLifeAlt: "A dog and owner on a coastal path in the early morning",
    },
    travel: {
      travelAlt: "A dog safely harnessed in the back of a car before a trip",
      eyebrow: "Travel",
      title: "Take your dog with you",
      body: "From the school run to crossing a border. Rules are based on current official requirements and do change — always check with the authorities before you travel.",
      checkerEyebrow: "International travel checker",
      route: "Norway → Poland",
      checkerItems: ["Microchip", "Rabies vaccination", "Pet passport", "Destination requirements", "Return requirements"],
      checkCta: "Check your route",
    },
    print: {
      eyebrow: "Print & save",
      title: "Some things are better on paper.",
      body: "Keep the important information with you — at home, in the car, at the vet or when someone else is looking after your dog.",
      cardBrand: "DoggMatch",
      cardTitle: "Dog Travel Pack",
      cardDog: "Luna · Labrador Retriever",
      createCta: "Create travel pack",
      printCta: "See what you can print",
    },
    multipleDogs: {
      eyebrow: "Multiple dogs",
      title: "One home. Every dog.",
      body: "Premium supports more than one dog, each with their own profile, routines, training, health and documents. Switching between them takes one tap.",
      dogs: [
        { name: "Luna", breed: "Labrador Retriever" },
        { name: "Max", breed: "Cocker Spaniel" },
      ],
    },
    personalisation: {
      title: "Everything feels more relevant to your dog",
      body: "DoggMatch doesn't need clever machines to make this personal. Your dog's breed, age, size, activity, your lifestyle, your routines and whatever you choose to tell us quietly shape what you see — which lessons come up, how much food is roughly right, what your week suggests.",
    },
    journeySection: {
      eyebrow: "The whole journey",
      title: "From first thought to a long life together",
      closing: "— everything connected in one place.",
    },
    compare: {
      eyebrow: "Free and Premium",
      title: "What's free, and what comes with Premium",
      body: "Everything you need to find the right dog stays free. Premium is for the life that comes after.",
      freeLabel: "Free",
      freeHeadline: "For finding the right dog.",
      freeQuote: "\u201CFind the dog that's right for me.\u201D",
      plusLabel: "DoggMatch+",
      plusHeadline: "For life with your dog.",
      plusQuote: "\u201CNow help me give that dog a really good life.\u201D",
    },
    value: {
      eyebrow: "Why DoggMatch+",
      title: "Three simple reasons",
      items: [
        { title: "One place", body: "Everything about your dog's life, together." },
        { title: "Useful every day", body: "Not just something you visit once." },
        { title: "Built around your dog", body: "Your dog's information shapes the experience." },
      ],
    },
    firstWeekSection: {
      eyebrow: "Your first week with DoggMatch+",
      title: "A simple start to life with DoggMatch+.",
      body: "Nothing to rush. A little each day, and by the end of the week your dog has a home here.",
    },
    membership: {
      eyebrow: "Membership",
      body: "One membership, everything included. Choose the rhythm that suits you.",
      monthlyLabel: "Monthly",
      monthlyPrice: "€7.99",
      monthlyUnit: "/ month",
      monthlyBody: "Everything in DoggMatch+, month by month.",
      monthlyJoin: "Join monthly",
      yearlyLabel: "Yearly",
      bestValue: "Best value",
      yearlyPrice: "€59.99",
      yearlyUnit: "/ year",
      yearlyHighlight: "Just €5 a month when billed yearly",
      yearlyBody: "Save €35.89 a year compared with paying monthly.",
      yearlyJoin: "Join yearly — best value",
      openLine: "Membership is open.",
      openBody: "Payment is handled securely by Stripe. You can change or cancel your membership yourself at any time from your account.",
    },
    faqSection: {
      eyebrow: "Questions",
      title: "The things people usually ask",
      body: "Short, honest answers. If there's something else you'd like to know, just write to us.",
      stillWondering: "Still wondering about something?",
      getInTouch: "Get in touch",
    },
    finalCta: {
      title: "Your dog is more than a match.",
      body: "DoggMatch helps you find the dog that's right for you. DoggMatch+ helps you give that dog a really good life.",
      join: "Join DoggMatch+",
      find: "Find My Dog",
    },
  },
  no: {
    flow: [
      "Finn hunden din",
      "Bli kjent med hunden din",
      "Gjør deg klar for hunden din",
      "Lev med hunden din",
      "Ta vare på hunden din",
      "Nyt livet sammen",
    ],
    myDogSections: [
      { to: "/my-dog/care/everyday-check", label: "Helse", line: "Den raske daglige sjekken" },
      { to: "/my-dog/nutrition", label: "Mat", line: "Porsjoner og måltider" },
      { to: "/train", label: "Trening", line: "Dagens korte økt" },
      { to: "/my-dog/care/dental", label: "Tenner", line: "Ett minutt om dagen" },
      { to: "/my-dog/care/coat", label: "Pels & stell", line: "Børsting og bading" },
      { to: "/my-dog/care/paws", label: "Poter & klør", line: "Trynepute og vinter" },
      { to: "/my-dog/weight", label: "Vekt", line: "En enkel, snill oversikt" },
      { to: "/my-dog/care/wellbeing", label: "Aktivitet", line: "Bevegelse og hvile" },
      { to: "/train/library", label: "Atferd", line: "Én leksjon om gangen" },
      { to: "/my-dog/week", label: "Min uke", line: "Din ukentlige rytme" },
      { to: "/travel", label: "Reise", line: "Bil, turer og grenser" },
      { to: "/my-dog/print", label: "Dokumenter", line: "Papir til kjøleskapet" },
    ],
    programmes: [
      { title: "Valpebasics", line: "De første ukene, i rolig tempo" },
      { title: "Innkalling", line: "Kommer tilbake, hver gang du ber om det" },
      { title: "Gå fint i bånd", line: "Turer uten dragkamp" },
      { title: "Ro i kroppen", line: "Slappe av på et teppe" },
      { title: "Hverdagsmanerer", line: "Dører, hilsing, venting" },
      { title: "Fokus", line: "Navnet sitt, oppmerksomheten sin" },
      { title: "Bli", line: "Ett sekund lenger for hver gang" },
      { title: "Sosialisering", line: "Nye steder i hundens eget tempo" },
    ],
    careItems: [
      { title: "Helsejournal", line: "Legg merke til endringer over uker, ikke gjetting." },
      { title: "Vekt", line: "Den håndfaste sjekken pluss en enkel logg." },
      { title: "Tenner", line: "Tenner og tannkjøtt, tretti sekunder om gangen." },
      { title: "Pels & hud", line: "Pelstype, børsterytme, kuler og filt." },
      { title: "Poter & klør", line: "Trynepute, klør, salt og varm asfalt." },
      { title: "Stellkalender", line: "Stille påminnelser når noe er på tide." },
      { title: "Veterinærnotater", line: "Hva du spurte om, hva du fikk vite." },
      { title: "Helseoversikt", line: "Én side å ta med deg." },
    ],
    foodItems: [
      { title: "Mat- og fôringsplan", line: "Omtrent hvor mye, for din hund." },
      { title: "Fôringsrutine", line: "Måltider om dagen, tider som passer deg." },
      { title: "Matlogg", line: "Det hunden spiser, samlet ett sted." },
      { title: "Kobling til vekt", line: "Porsjoner som følger vektloggen." },
      { title: "Belønninger", line: "Holdt til en fornuftig del av dagen." },
      { title: "Vann", line: "Rent og fylt opp, alltid." },
      { title: "Mattrygghet", line: "Trygt, forsiktig eller unngå — 55+ matvarer." },
    ],
    week: [
      { day: "Mandag", items: ["Tur", "Trening", "Tenner"] },
      { day: "Tirsdag", items: ["Tur", "Mental stimulering"] },
      { day: "Onsdag", items: ["Trening", "Stell"] },
      { day: "Torsdag", items: ["Lang tur", "Potesjekk"] },
      { day: "Fredag", items: ["Tur", "Trening", "Tenner"] },
      { day: "Lørdag", items: ["Eventyr", "Veiing"] },
      { day: "Søndag", items: ["Snusetur", "Rolig stund"] },
    ],
    dogLife: [
      "Parker",
      "Turområder",
      "Hundevennlige steder",
      "Trenere",
      "Hundefrisører",
      "Veterinærer",
      "Hundevennlige overnattinger",
    ],
    travelItems: [
      "Bilreise",
      "Lange turer",
      "Fjellturer",
      "Ferier",
      "Utenlandsreise",
      "Reisesjekkliste",
      "Reisedokumenter",
      "Krav fra land til land",
    ],
    packContents: [
      "Hundeprofil",
      "Eierinformasjon",
      "Viktige kontakter",
      "Reisesjekkliste",
      "Helseinformasjon",
      "Dokumenter",
      "Nødinformasjon",
    ],
    docs: [
      "Komplett hundepakke",
      "Helseoversikt",
      "Treningsplan",
      "Mat- og fôringsplan",
      "Ukeplan",
      "Viktige kontakter",
      "Notater fra veterinærbesøk",
      "Reisepakke",
      "Stellsjekkliste",
    ],
    journey: [
      "Vurderer hund",
      "Finn min hund",
      "Gjør deg klar",
      "Velkommen hjem",
      "Min hund",
      "Trening",
      "Fôring",
      "Stell",
      "Reise",
      "Nyt livet",
    ],
    freeList: [
      "Er en hund riktig for meg?",
      "Finn min hund",
      "Grunnleggende raseinformasjon",
      "Guider for å skaffe hund",
      "Grunnleggende hundeliv",
      "Utvalgte gratis guider",
    ],
    plusList: [
      "Alt i Gratis",
      "Min hund",
      "Komplett trening",
      "Helse & stell",
      "Mat & fôring",
      "Min uke",
      "Stellkalender",
      "Utvidet hundeliv",
      "Reiseverktøy",
      "Sjekk for utenlandsreise",
      "Komplett hundepakke",
      "Utskrivbare dokumenter",
      "Flere hunder",
      "En fyldigere matchrapport",
      "Fremgang over tid",
    ],
    firstWeek: [
      { day: "Dag 1", title: "Opprett Min hund", line: "Gi hunden din et eget sted." },
      { day: "Dag 2", title: "Sett opp stell", line: "Legg til fôring, tenner, pels og hverdagsrutiner." },
      { day: "Dag 3", title: "Start trening", line: "Velg et program og ta det første lille steget." },
      { day: "Dag 4", title: "Bygg Min uke", line: "Samle turer, trening og stell på ett sted." },
      { day: "Dag 5", title: "Utforsk hundeliv", line: "Finn steder og tjenester som passer livet ditt med hund." },
      { day: "Dag 6", title: "Planlegg neste tur", line: "Gjør reisesjekklisten din klar." },
      { day: "Dag 7", title: "Lag hundepakken din", line: "Ha det viktigste samlet, på skjerm eller på papir." },
    ],
    faqs: [
      {
        q: "Hva er DoggMatch+?",
        a: "Det er medlemsdelen av DoggMatch. Gratis hjelper deg å finne riktig hund. DoggMatch+ hjelper deg å ta vare på den hunden dag for dag — trening, mat, helse, rutiner, reise og dokumenter, alt på ett sted.",
      },
      {
        q: "Hva får jeg med DoggMatch+?",
        a: "Min hund, de fullstendige treningsprogrammene, helse og stell, mat og fôring, Min uke, stellkalenderen, reiseverktøy, den komplette hundepakken og utskrivbare dokumenter — pluss en fyldigere matchrapport.",
      },
      {
        q: "Hva forblir gratis?",
        a: "Alt du trenger for å finne riktig hund. Er en hund riktig for meg?, Finn min hund, raseinformasjon, guidene for å skaffe hund, grunnleggende hundeliv og de gratis guidene våre forblir gratis.",
      },
      {
        q: "Kan jeg bruke DoggMatch+ for mer enn én hund?",
        a: "Ja. Du kan ha en egen profil for hver hund og bytte mellom dem, så ingenting blandes sammen.",
      },
      {
        q: "Kan jeg skrive ut informasjon om hunden min?",
        a: "Ja. Hundepakken og de enkelte dokumentene — helseoversikt, fôringsplan, ukeplan, kontakter, reisepakke — er alle laget for å skrives pent ut på A4 eller lagres som PDF.",
      },
      {
        q: "Kan jeg bruke DoggMatch på reise?",
        a: "Ja. Det finnes veiledning for bilreise, fjellturer og ferier, en sjekk for krav fra land til land ved utenlandsreise, og en reisepakke du kan ta med deg på papir.",
      },
      {
        q: "Er DoggMatch veterinærfaglig rådgivning?",
        a: "Nei. Vi gir generell veiledning om livet med hund. Ved alt medisinsk, eller hvis du er bekymret for hunden din, snakk med veterinæren din.",
      },
      {
        q: "Kan jeg si opp medlemskapet mitt?",
        a: "Ja, når du vil. Åpne kontosiden din, så kan du endre eller si opp medlemskapet ditt selv — det forblir aktivt ut perioden du allerede har betalt for.",
      },
      {
        q: "Kan jeg velge månedlig eller årlig medlemskap?",
        a: "Ja — 79 kr i måneden, eller 599 kr i året, som utgjør omtrent 50 kr i måneden. Du kan bytte mellom dem senere fra kontoen din.",
      },
      {
        q: "Hva skjer når jeg blir medlem?",
        a: "Du oppretter Min hund, legger til noen detaljer, og alt annet på siden begynner å tilpasse seg den hunden. Det er en rolig første uke som guider deg gjennom det.",
      },
    ],
    starsLabel: (filled: number) => `${filled} av 5`,
    hero: {
      eyebrow: "Medlemskap",
      lead: "Mer enn å finne hunden din. Et bedre liv sammen.",
      body: "DoggMatch-reisen din slutter ikke når du finner riktig hund. Premium gir deg verktøyene, planene og det personlige rommet du trenger for å gi hunden din et lykkelig, sunt og ryddig liv.",
      heroAlt: "En kvinne hviler pannen mot labradoren sin i solnedgangen",
      exploreCta: "Utforsk DoggMatch+",
      seeAllCta: "Se alt som er inkludert",
    },
    coreMessage: "samler alt på ett sted.",
    myDog: {
      eyebrow: "Midtpunktet i alt",
      title: "Din hund. Ditt rom.",
      body: "Min hund er hundens personlige hjem inne i DoggMatch. Alt du holder styr på bor her — og alt annet på siden spiller inn i det.",
      lunaAlt: "Luna, en labrador retriever",
      lunaName: "Luna",
      lunaBreedAge: "Labrador retriever · 3 år",
      today: "I dag",
      sideTitle: "Alt om hunden din, på ett sted",
      sideBody: "Helse, mat, trening, tenner, pels, poter, vekt, aktivitet, atferd, uken din, reise og dokumenter. Du trenger ikke fylle ut alt. Legg til det som er nyttig, resten venter stille til du trenger det.",
      cta: "Se Min hund",
    },
    productMessage: {
      titleLine1: "Finn hunden din.",
      titleLine2: "Lev så livet sammen.",
      body: "Å finne riktig hund er bare begynnelsen. DoggMatch+ gir deg ett sted å ta vare på hverdagsting som betyr noe — fra trening og fôring til helse, reise, rutiner og de små øyeblikkene innimellom.",
    },
    training: {
      trainAlt: "En mann trener innkalling med hunden sin på en eng",
      eyebrow: "Tren sammen",
      title: "Små steg. Ekte fremgang.",
      body: "Strukturerte program bygget av korte, snille økter du faktisk kan få inn i en vanlig dag. Ingen roping, ingen dingser, ingen løfter om hvor fort det går.",
      lunaName: "Luna",
      recall: "Innkalling",
      progressNote: "4 økter fullført denne uken.",
      railLabel: "Treningsprogrammer",
      libraryCta: "Åpne leksjonsbiblioteket",
    },
    healthCare: {
      eyebrow: "Helse & stell",
      title: "Ta vare på de små tingene",
      body: "Ha det viktige samlet, legg merke til endringer over tid, og hold orden. DoggMatch er ikke en veterinærtjeneste — når noe bekymrer deg, er veterinæren riktig valg.",
      careAlt: "En eier sjekker rolig over hunden sin hjemme",
    },
    food: {
      foodAlt: "En avmålt bolle med mat gjøres klar til en ventende hund",
      eyebrow: "Fôr riktig",
      title: "Gjør fôring enklere å forstå",
      body: "Porsjoner regnet ut fra hundens vekt, alder og aktivitetsnivå — holdt i takt med vektloggen. Fornuftig, kunnskapsbasert, ingen fluevekt-trender.",
      portionsCta: "Mat & porsjoner",
      safetyCta: "Kan hunden min spise dette?",
    },
    myWeek: {
      eyebrow: "Min uke",
      title: "Uken din med hunden din",
      body: "Samle trening, stell, aktivitet og hverdagsrutiner på ett sted, så ingenting viktig sniker seg unna.",
      cta: "Åpne Min uke",
    },
    dogLifeSection: {
      eyebrow: "Hundeliv",
      title: "Livet utenfor hjemmet",
      body: "Hverdagskartet over hundelivet i nærheten av deg — hvor du kan gå tur, hvor du er velkommen og hvem du skal ringe.",
      cta: "Utforsk hundeliv",
      dogLifeAlt: "En hund og eier på en kyststi tidlig om morgenen",
    },
    travel: {
      travelAlt: "En hund trygt sikret i baksetet før en tur",
      eyebrow: "Reise",
      title: "Ta hunden din med deg",
      body: "Fra skoleveien til å krysse en grense. Reglene bygger på gjeldende offisielle krav og endres — sjekk alltid med myndighetene før du reiser.",
      checkerEyebrow: "Sjekk for utenlandsreise",
      route: "Norge → Polen",
      checkerItems: ["Mikrochip", "Rabiesvaksine", "Kjæledyrpass", "Krav i mottakerland", "Krav ved retur"],
      checkCta: "Sjekk ruten din",
    },
    print: {
      eyebrow: "Skriv ut & lagre",
      title: "Noe er bedre på papir.",
      body: "Ha den viktige informasjonen med deg — hjemme, i bilen, hos veterinæren eller når noen andre passer hunden din.",
      cardBrand: "DoggMatch",
      cardTitle: "Hundens reisepakke",
      cardDog: "Luna · Labrador retriever",
      createCta: "Lag reisepakke",
      printCta: "Se hva du kan skrive ut",
    },
    multipleDogs: {
      eyebrow: "Flere hunder",
      title: "Ett hjem. Hver hund.",
      body: "Premium støtter mer enn én hund, hver med sin egen profil, rutiner, trening, helse og dokumenter. Å bytte mellom dem tar ett trykk.",
      dogs: [
        { name: "Luna", breed: "Labrador retriever" },
        { name: "Max", breed: "Cocker spaniel" },
      ],
    },
    personalisation: {
      title: "Alt føles mer relevant for hunden din",
      body: "DoggMatch trenger ikke smarte maskiner for å gjøre dette personlig. Hundens rase, alder, størrelse, aktivitet, livsstilen din, rutinene dine og alt du velger å fortelle oss former stille det du ser — hvilke leksjoner som dukker opp, omtrent hvor mye mat som er riktig, hva uken din foreslår.",
    },
    journeySection: {
      eyebrow: "Hele reisen",
      title: "Fra første tanke til et langt liv sammen",
      closing: "— alt koblet sammen på ett sted.",
    },
    compare: {
      eyebrow: "Gratis og Premium",
      title: "Hva som er gratis, og hva som følger med Premium",
      body: "Alt du trenger for å finne riktig hund forblir gratis. Premium er for livet som kommer etterpå.",
      freeLabel: "Gratis",
      freeHeadline: "For å finne riktig hund.",
      freeQuote: "\u201CFinn hunden som passer for meg.\u201D",
      plusLabel: "DoggMatch+",
      plusHeadline: "For livet med hunden din.",
      plusQuote: "\u201CNå hjelp meg å gi den hunden et virkelig godt liv.\u201D",
    },
    value: {
      eyebrow: "Hvorfor DoggMatch+",
      title: "Tre enkle grunner",
      items: [
        { title: "Ett sted", body: "Alt om hundens liv, samlet." },
        { title: "Nyttig hver dag", body: "Ikke bare noe du besøker én gang." },
        { title: "Bygget rundt hunden din", body: "Hundens informasjon former opplevelsen." },
      ],
    },
    firstWeekSection: {
      eyebrow: "Din første uke med DoggMatch+",
      title: "En enkel start på livet med DoggMatch+.",
      body: "Ingenting å skynde seg med. Litt hver dag, og innen uken er omme har hunden din et hjem her.",
    },
    membership: {
      eyebrow: "Medlemskap",
      body: "Ett medlemskap, alt inkludert. Velg rytmen som passer deg.",
      monthlyLabel: "Månedlig",
      monthlyPrice: "79 kr",
      monthlyUnit: "/ måned",
      monthlyBody: "Alt i DoggMatch+, måned for måned.",
      monthlyJoin: "Bli medlem månedlig",
      yearlyLabel: "Årlig",
      bestValue: "Best verdi",
      yearlyPrice: "599 kr",
      yearlyUnit: "/ år",
      yearlyHighlight: "Bare 50 kr i måneden ved årlig fakturering",
      yearlyBody: "Spar 359 kr i året sammenlignet med månedlig betaling.",
      yearlyJoin: "Bli medlem årlig — best verdi",
      openLine: "Medlemskapet er åpent.",
      openBody: "Betaling håndteres trygt av Stripe. Du kan endre eller si opp medlemskapet ditt selv, når som helst, fra kontoen din.",
    },
    faqSection: {
      eyebrow: "Spørsmål",
      title: "Det folk vanligvis lurer på",
      body: "Korte, ærlige svar. Hvis det er noe annet du lurer på, bare skriv til oss.",
      stillWondering: "Lurer du fortsatt på noe?",
      getInTouch: "Ta kontakt",
    },
    finalCta: {
      title: "Hunden din er mer enn en match.",
      body: "DoggMatch hjelper deg å finne hunden som passer for deg. DoggMatch+ hjelper deg å gi den hunden et virkelig godt liv.",
      join: "Bli medlem av DoggMatch+",
      find: "Finn min hund",
    },
  },
} as const;

/* ------------------------------------------------------------------- page */

function PlusPage() {
  const c = useCopy(copy);
  return (
    <div className="overflow-x-clip pb-24">
      {/* 2 — Hero */}
      <section className="container-page pt-24 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="animate-rise max-w-xl">
            <Eyebrow>{c.hero.eyebrow}</Eyebrow>
            <h1 className="display-xl mt-7">
              DoggMatch<span className="text-accent">+</span>
            </h1>
            <p className="mt-6 font-display text-2xl leading-snug tracking-tight md:text-3xl">
              {c.hero.lead}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {c.hero.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#included"
                className="group inline-flex h-14 select-none items-center justify-center gap-2.5 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[var(--shadow-lift)]"
              >
                {c.hero.exploreCta}
                <Arrow />
              </a>
              <a
                href="#compare"
                className="inline-flex h-14 select-none items-center justify-center rounded-full border border-border-strong px-8 text-base font-medium text-foreground transition-colors duration-300 hover:bg-surface"
              >
                {c.hero.seeAllCta}
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-surface">
            <img
              src={heroImage}
              alt={c.hero.heroAlt}
              width={1600}
              height={1104}
              fetchPriority="high"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3 — Core message */}
      <Section className="container-page">
        <div className="rounded-[2rem] border border-border bg-surface p-8 md:p-14">
          <ol className="grid gap-px overflow-hidden rounded-2xl bg-border sm:grid-cols-2 lg:grid-cols-3">
            {c.flow.map((step, i) => (
              <li key={step} className="bg-background p-7">
                <span className="font-display text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-lg leading-tight tracking-tight">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-center font-display text-2xl tracking-tight md:text-3xl">
            DoggMatch<span className="text-accent">+</span> {c.coreMessage}
          </p>
        </div>
      </Section>

      {/* 4 — My Dog */}
      <Section id="included" className="container-page scroll-mt-24 pt-0">
        <SectionHead
          eyebrow={c.myDog.eyebrow}
          title={c.myDog.title}
          body={c.myDog.body}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          {/* device mockup */}
          <div className="rounded-[2rem] border border-border bg-surface p-5 shadow-[var(--shadow-lift)] md:p-8">
            <div className="rounded-[1.4rem] border border-border bg-background p-6 md:p-8">
              <div className="flex items-center gap-3">
                <img
                  src={lunaImage}
                  alt={c.myDog.lunaAlt}
                  width={96}
                  height={96}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-lg leading-none tracking-tight">{c.myDog.lunaName}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{c.myDog.lunaBreedAge}</p>
                </div>
                <span className="ml-auto">
                  <Badge tone="accent">{c.myDog.today}</Badge>
                </span>
              </div>
              <ul className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-3">
                {c.myDogSections.map((s) => (
                  <li key={s.label} className="bg-background">
                    <Link
                      to={s.to}
                      className="block h-full p-4 transition-colors hover:bg-surface"
                    >
                      <span className="text-[0.9375rem] font-medium">{s.label}</span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                        {s.line}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-lg">
            <h3 className="display-md">{c.myDog.sideTitle}</h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              {c.myDog.sideBody}
            </p>
            <div className="mt-8">
              <ButtonLink to="/my-dog" size="lg">
                {c.myDog.cta}
                <Arrow />
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 4b — Central product message */}
      <Section className="container-page pt-0">
        <div className="rounded-[2rem] border border-border bg-surface p-8 md:p-14">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="display-lg">
              {c.productMessage.titleLine1}
              <br />
              {c.productMessage.titleLine2}
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              {c.productMessage.body}
            </p>
          </div>
        </div>
      </Section>

      {/* 5 — Training */}
      <Section className="bg-surface">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
            <div className="overflow-hidden rounded-[2rem]">
              <img
                src={trainImage}
                alt={c.training.trainAlt}
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <SectionHead eyebrow={c.training.eyebrow} title={c.training.title} body={c.training.body} />
              <Card className="mt-8 max-w-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg leading-none tracking-tight">{c.training.lunaName}</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">{c.training.recall}</p>
                  </div>
                  <Stars filled={4} label={c.starsLabel(4)} />
                </div>
                <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-surface-strong">
                  <div className="h-full w-[72%] rounded-full bg-accent" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{c.training.progressNote}</p>
              </Card>
            </div>
          </div>

          <Rail label={c.training.railLabel}>
            {c.programmes.map((p) => (
              <RailItem key={p.title}>
                <Card className="h-full">
                  <h3 className="font-display text-lg leading-tight tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.line}</p>
                </Card>
              </RailItem>
            ))}
          </Rail>
          <div className="mt-8">
            <ButtonLink to="/train/library" tone="outline" size="lg">
              {c.training.libraryCta}
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* 6 — Health & care */}
      <Section className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <SectionHead
              eyebrow={c.healthCare.eyebrow}
              title={c.healthCare.title}
              body={c.healthCare.body}
            />
            <ul className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {c.careItems.map((item) => (
                <li key={item.title} className="bg-background p-6">
                  <h3 className="text-[0.9375rem] font-medium">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.line}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={careImage}
              alt={c.healthCare.careAlt}
              width={1200}
              height={1400}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* 7 — Food */}
      <Section className="bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={foodImage}
              alt={c.food.foodAlt}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHead
              eyebrow={c.food.eyebrow}
              title={c.food.title}
              body={c.food.body}
            />
            <ul className="mt-9 space-y-3">
              {c.foodItems.map((f) => (
                <li key={f.title} className="flex gap-3">
                  <Tick />
                  <span className="text-[0.9375rem]">
                    <span className="font-medium">{f.title}</span>
                    <span className="text-muted-foreground"> — {f.line}</span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink to="/my-dog/nutrition" tone="outline">{c.food.portionsCta}</ButtonLink>
              <ButtonLink to="/my-dog/food" tone="outline">{c.food.safetyCta}</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 8 — My Week */}
      <Section className="container-page">
        <SectionHead
          eyebrow={c.myWeek.eyebrow}
          title={c.myWeek.title}
          body={c.myWeek.body}
        />
        <div className="mt-12 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-4 md:snap-none md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-7">
          {c.week.map((d) => (
            <div key={d.day} className="w-[62vw] shrink-0 snap-start md:w-auto">
              <Card className="h-full p-6">
                <p className="eyebrow">{d.day}</p>
                <ul className="mt-5 space-y-2.5">
                  {d.items.map((i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                      {i}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <ButtonLink to="/my-dog/week" size="lg">
            {c.myWeek.cta}
            <Arrow />
          </ButtonLink>
        </div>
      </Section>

      {/* 9 — Dog life */}
      <Section className="bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <SectionHead
              eyebrow={c.dogLifeSection.eyebrow}
              title={c.dogLifeSection.title}
              body={c.dogLifeSection.body}
            />
            <ul className="mt-9 flex flex-wrap gap-2.5">
              {c.dogLife.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-border-strong px-4 py-2 text-sm text-foreground"
                >
                  {d}
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <ButtonLink to="/dog-life" tone="outline" size="lg">
                {c.dogLifeSection.cta}
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={dogLifeImage}
              alt={c.dogLifeSection.dogLifeAlt}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* 10 — Travel */}
      <Section className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={travelImage}
              alt={c.travel.travelAlt}
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHead
              eyebrow={c.travel.eyebrow}
              title={c.travel.title}
              body={c.travel.body}
            />
            <ul className="mt-9 grid gap-2.5 sm:grid-cols-2">
              {c.travelItems.map((t) => (
                <li key={t} className="flex gap-3 text-[0.9375rem]">
                  <Tick />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Card className="mt-14 max-w-xl">
          <Eyebrow>{c.travel.checkerEyebrow}</Eyebrow>
          <p className="mt-5 font-display text-2xl tracking-tight">
            {c.travel.route}
          </p>
          <ul className="mt-6 space-y-3">
            {c.travel.checkerItems.map((r) => (
              <li key={r} className="flex gap-3 text-[0.9375rem]">
                <Tick />
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink to="/travel/abroad">
              {c.travel.checkCta}
              <Arrow />
            </ButtonLink>
          </div>
        </Card>
      </Section>

      {/* 11 + 12 — Travel pack and print */}
      <Section className="bg-surface">
        <div className="container-page">
          <SectionHead
            eyebrow={c.print.eyebrow}
            title={c.print.title}
            body={c.print.body}
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
            {/* travel pack preview */}
            <div className="rounded-[2rem] border border-border bg-background p-6 shadow-[var(--shadow-lift)] md:p-8">
              <div className="mx-auto max-w-sm rounded-lg border border-border bg-background p-7 shadow-[var(--shadow-soft)]">
                <p className="eyebrow">{c.print.cardBrand}</p>
                <p className="mt-4 font-display text-xl tracking-tight">{c.print.cardTitle}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.print.cardDog}</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                  {c.packContents.map((p) => (
                    <li key={p} className="flex items-center justify-between text-sm">
                      <span>{p}</span>
                      <span className="h-px w-16 bg-border" aria-hidden />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 text-center">
                <ButtonLink to="/my-dog/pack" size="lg">
                  {c.print.createCta}
                  <Arrow />
                </ButtonLink>
              </div>
            </div>

            <div>
              <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {c.docs.map((d) => (
                  <li key={d} className="bg-background p-6">
                    <span className="block h-10 w-8 rounded-[3px] border border-border-strong bg-surface" aria-hidden />
                    <p className="mt-4 text-[0.9375rem] font-medium">{d}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink to="/my-dog/print" tone="outline" size="lg">
                  {c.print.printCta}
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 13 — Multiple dogs */}
      <Section className="container-page">
        <SectionHead eyebrow={c.multipleDogs.eyebrow} title={c.multipleDogs.title} body={c.multipleDogs.body} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:max-w-3xl">
          {[
            { ...c.multipleDogs.dogs[0], img: lunaImage },
            { ...c.multipleDogs.dogs[1], img: maxImage },
          ].map((d) => (
            <Card key={d.name} className="flex items-center gap-5">
              <img
                src={d.img}
                alt={`${d.name}, a ${d.breed}`}
                width={160}
                height={160}
                loading="lazy"
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <p className="font-display text-xl leading-none tracking-tight">{d.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{d.breed}</p>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      {/* 14 — Personalisation */}
      <Section className="container-page pt-0">
        <div className="rounded-[2rem] border border-border bg-surface p-8 md:p-14">
          <div className="max-w-2xl">
            <h2 className="display-lg">{c.personalisation.title}</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              {c.personalisation.body}
            </p>
          </div>
        </div>
      </Section>

      {/* 14b — Member card and benefits */}
      <MemberCardShowcase />

      {/* 15 — Journey */}
      <Section className="container-page pt-0">
        <SectionHead eyebrow={c.journeySection.eyebrow} title={c.journeySection.title} />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {c.journey.map((j, i) => (
            <li key={j} className="bg-background p-6">
              <span className="font-display text-sm tabular-nums text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[0.9375rem] font-medium">{j}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 font-display text-2xl tracking-tight">
          DoggMatch<span className="text-accent">+</span> {c.journeySection.closing}
        </p>
      </Section>

      {/* 16 — Comparison */}
      <Section id="compare" className="bg-surface scroll-mt-24">
        <div className="container-page">
          <SectionHead eyebrow={c.compare.eyebrow} title={c.compare.title} body={c.compare.body} />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card>
              <p className="eyebrow">{c.compare.freeLabel}</p>
              <p className="mt-4 font-display text-xl tracking-tight">{c.compare.freeHeadline}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.compare.freeQuote}</p>
              <ul className="mt-7 space-y-3">
                {c.freeList.map((f) => (
                  <li key={f} className="flex gap-3 text-[0.9375rem]">
                    <Tick />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="border-border-strong">
              <p className="eyebrow text-accent">{c.compare.plusLabel}</p>
              <p className="mt-4 font-display text-xl tracking-tight">{c.compare.plusHeadline}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.compare.plusQuote}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {c.plusList.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.9375rem]">
                    <Tick />
                    {p}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* 17 — Value */}
      <Section className="container-page">
        <SectionHead eyebrow={c.value.eyebrow} title={c.value.title} />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
          {c.value.items.map((v) => (
            <li key={v.title} className="bg-background p-9">
              <h3 className="display-md">{v.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{v.body}</p>
            </li>
          ))}
        </ul>
      </Section>

      {/* 17b — Your first week */}
      <Section className="container-page pt-0">
        <SectionHead
          eyebrow={c.firstWeekSection.eyebrow}
          title={c.firstWeekSection.title}
          body={c.firstWeekSection.body}
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border md:grid-cols-2">
          {c.firstWeek.map((d, i) => (
            <li
              key={d.day}
              className={cn(
                "flex gap-6 bg-background p-7 md:p-9",
                i === c.firstWeek.length - 1 && "md:col-span-2",
              )}
            >
              <span className="mt-1 grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border-strong font-display text-sm tabular-nums text-accent">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="eyebrow">{d.day}</p>
                <h3 className="display-md mt-2">{d.title}</h3>
                <p className="mt-2 leading-relaxed text-muted-foreground">{d.line}</p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* 18 + 19 — Price */}
      <Section id="membership" className="container-page scroll-mt-24 pt-0">
        <div className="max-w-2xl">
          <Eyebrow>{c.membership.eyebrow}</Eyebrow>
          <h2 className="display-lg mt-6">
            DoggMatch<span className="text-accent">+</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            {c.membership.body}
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:max-w-4xl lg:grid-cols-2">
          <Card className="flex flex-col">
            <p className="eyebrow">{c.membership.monthlyLabel}</p>
            <p className="mt-6 font-display text-4xl tracking-tight">
              {c.membership.monthlyPrice} <span className="text-lg font-normal text-muted-foreground">{c.membership.monthlyUnit}</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {c.membership.monthlyBody}
            </p>
            <div className="mt-auto">
              <JoinPlusButton plan="monthly" tone="outline" label={c.membership.monthlyJoin} />
            </div>
          </Card>
          <Card className="relative flex flex-col border-border-strong bg-surface">
            <div className="flex items-center gap-3">
              <p className="eyebrow">{c.membership.yearlyLabel}</p>
              <Badge tone="accent">{c.membership.bestValue}</Badge>
            </div>
            <p className="mt-6 font-display text-4xl tracking-tight">
              {c.membership.yearlyPrice} <span className="text-lg font-normal text-muted-foreground">{c.membership.yearlyUnit}</span>
            </p>
            <p className="mt-4 font-display text-lg tracking-tight text-accent">
              {c.membership.yearlyHighlight}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {c.membership.yearlyBody}
            </p>
            <div className="mt-auto">
              <JoinPlusButton plan="yearly" label={c.membership.yearlyJoin} />
            </div>
          </Card>
        </div>
        <div className="mt-8 max-w-xl">
          <p className="font-display text-lg tracking-tight">{c.membership.openLine}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {c.membership.openBody}
          </p>
        </div>
      </Section>

      {/* 19c — FAQ */}
      <Section className="container-page pt-0">
        <SectionHead
          eyebrow={c.faqSection.eyebrow}
          title={c.faqSection.title}
          body={c.faqSection.body}
        />
        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-border">
          {c.faqs.map((f) => (
            <details key={f.q} className="group border-b border-border bg-background last:border-b-0">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-5 p-6 md:p-8">
                <h3 className="font-display text-lg leading-snug tracking-tight md:text-xl">{f.q}</h3>
                <span
                  aria-hidden="true"
                  className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border-strong text-accent transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-6 pb-7 leading-relaxed text-muted-foreground md:px-8 md:pb-9 md:pr-16">
                {f.a}
              </p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-[0.9375rem] text-muted-foreground">
          {c.faqSection.stillWondering}{" "}
          <Link to="/contact" className="underline underline-offset-4 hover:text-foreground">
            {c.faqSection.getInTouch}
          </Link>
          .
        </p>
      </Section>

      {/* 20 — Final CTA */}
      <Section className="container-page pt-0">
        <div className="rounded-[2rem] bg-primary p-10 text-primary-foreground md:p-16">
          <div className="max-w-2xl">
            <h2 className="display-lg">{c.finalCta.title}</h2>
            <p className="mt-6 text-lg leading-relaxed opacity-80">
              {c.finalCta.body}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#membership"
                className="group inline-flex h-14 w-full select-none items-center justify-center gap-2.5 rounded-full bg-accent px-6 text-center text-[0.9375rem] font-medium text-accent-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[var(--shadow-lift)] sm:w-auto sm:px-8 sm:text-base"
              >
                {c.finalCta.join}
                <Arrow />
              </a>
              <ButtonLink
                to="/find-my-dog"
                size="lg"
                className="w-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                tone="ghost"
              >
                {c.finalCta.find}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
