import { createFileRoute, Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Arrow, ButtonLink, Badge, Eyebrow, Section } from "@/components/dogmatch/ui";
import { SectionHead } from "@/components/dogmatch/journey/parts";
import { JoinPlusButton } from "@/components/dogmatch/plus/join";
import { MemberCardShowcase } from "@/components/dogmatch/plus/card-showcase";
import { cn } from "@/lib/utils";
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

function Stars({ filled }: { filled: number }) {
  return (
    <span className="flex gap-0.5" role="img" aria-label={`${filled} of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={cn("h-3.5 w-3.5", i < filled ? "text-accent" : "text-border-strong")} fill="currentColor" aria-hidden>
          <path d="m10 1.8 2.5 5.1 5.6.8-4 3.9 1 5.6-5.1-2.7-5 2.7 1-5.6-4.1-3.9 5.6-.8z" />
        </svg>
      ))}
    </span>
  );
}

/* -------------------------------------------------------------- page data */

const flow = [
  "Find your dog",
  "Understand your dog",
  "Prepare for your dog",
  "Live with your dog",
  "Look after your dog",
  "Enjoy life together",
];

const myDogSections: { to: string; label: string; line: string }[] = [
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
];

const programmes = [
  { title: "Puppy basics", line: "The first weeks, gently" },
  { title: "Recall", line: "Coming back, every time you ask" },
  { title: "Loose-leash walking", line: "Walks without the tug of war" },
  { title: "Calm behaviour", line: "Settling on a mat" },
  { title: "Everyday manners", line: "Doors, greetings, waiting" },
  { title: "Focus", line: "Their name, their attention" },
  { title: "Stay", line: "A second longer each time" },
  { title: "Socialisation", line: "New places at their pace" },
];

const careItems = [
  { title: "Health journal", line: "Notice changes over weeks, not guesses." },
  { title: "Weight", line: "The hands-on check plus a simple log." },
  { title: "Dental", line: "Teeth and gums, thirty seconds at a time." },
  { title: "Coat & skin", line: "Coat type, brushing rhythm, lumps and mats." },
  { title: "Paws & nails", line: "Pads, nails, salt and hot pavement." },
  { title: "Care calendar", line: "Quiet nudges when something's due." },
  { title: "Vet notes", line: "What you asked, what you were told." },
  { title: "Health summary", line: "One page to take with you." },
];

const foodItems = [
  { title: "Food & feeding plan", line: "How much, roughly, for your dog." },
  { title: "Feeding routine", line: "Meals a day, times that suit you." },
  { title: "Food tracking", line: "What they eat, kept in one place." },
  { title: "Weight connection", line: "Portions that follow the weight log." },
  { title: "Treats", line: "Kept to a sensible slice of the day." },
  { title: "Water", line: "Clean and topped up, always." },
  { title: "Food safety", line: "Safe, careful or avoid — 55+ foods." },
];

const week = [
  { day: "Monday", items: ["Walk", "Training", "Dental"] },
  { day: "Tuesday", items: ["Walk", "Mental stimulation"] },
  { day: "Wednesday", items: ["Training", "Grooming"] },
  { day: "Thursday", items: ["Long walk", "Paw check"] },
  { day: "Friday", items: ["Walk", "Training", "Dental"] },
  { day: "Saturday", items: ["Adventure", "Weigh-in"] },
  { day: "Sunday", items: ["Sniffy walk", "Quiet time"] },
];

const dogLife = [
  "Parks",
  "Walking areas",
  "Dog-friendly places",
  "Trainers",
  "Groomers",
  "Vets",
  "Dog-friendly stays",
];

const travelItems = [
  "Car travel",
  "Long walks",
  "Hiking",
  "Holidays",
  "International travel",
  "Travel checklist",
  "Travel documents",
  "Country-to-country requirements",
];

const packContents = [
  "Dog profile",
  "Owner information",
  "Important contacts",
  "Travel checklist",
  "Health information",
  "Documents",
  "Emergency information",
];

const docs = [
  "Complete Dog Pack",
  "Health summary",
  "Training plan",
  "Food & feeding plan",
  "Weekly plan",
  "Important contacts",
  "Vet visit notes",
  "Travel pack",
  "Grooming checklist",
];

const journey = [
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
];

const freeList = [
  "Is a dog right for me?",
  "Find my dog",
  "Basic breed information",
  "Getting a dog guides",
  "Basic Dog Life",
  "Selected free guides",
];

const plusList = [
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
];

const firstWeek = [
  { day: "Day 1", title: "Create My Dog", line: "Give your dog a place of their own." },
  { day: "Day 2", title: "Set up care", line: "Add feeding, dental, grooming and everyday routines." },
  { day: "Day 3", title: "Start training", line: "Choose a programme and take the first small step." },
  { day: "Day 4", title: "Build My Week", line: "Bring walks, training and care together." },
  { day: "Day 5", title: "Explore Dog Life", line: "Find places and services that fit your life with your dog." },
  { day: "Day 6", title: "Plan your next trip", line: "Get your travel checklist ready." },
  { day: "Day 7", title: "Create your Dog Pack", line: "Keep the important things together, on screen or on paper." },
];

const faqs: { q: string; a: string }[] = [
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
];

/* ------------------------------------------------------------------- page */

function PlusPage() {
  return (
    <div className="overflow-x-clip pb-24">
      {/* 2 — Hero */}
      <section className="container-page pt-24 md:pt-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="animate-rise max-w-xl">
            <Eyebrow>Membership</Eyebrow>
            <h1 className="display-xl mt-7">
              DoggMatch<span className="text-accent">+</span>
            </h1>
            <p className="mt-6 font-display text-2xl leading-snug tracking-tight md:text-3xl">
              More than finding your dog. A better life together.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Your DoggMatch journey doesn't end when you find the right dog. Premium gives you the
              tools, plans and personal space to help you give your dog a happy, healthy and
              well-organised life.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#included"
                className="group inline-flex h-14 select-none items-center justify-center gap-2.5 rounded-full bg-primary px-8 text-base font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[var(--shadow-lift)]"
              >
                Explore DoggMatch+
                <Arrow />
              </a>
              <a
                href="#compare"
                className="inline-flex h-14 select-none items-center justify-center rounded-full border border-border-strong px-8 text-base font-medium text-foreground transition-colors duration-300 hover:bg-surface"
              >
                See everything included
              </a>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] bg-surface">
            <img
              src={heroImage}
              alt="A woman resting her forehead against her labrador at sunset"
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
            {flow.map((step, i) => (
              <li key={step} className="bg-background p-7">
                <span className="font-display text-sm tabular-nums text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 font-display text-lg leading-tight tracking-tight">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-10 text-center font-display text-2xl tracking-tight md:text-3xl">
            DoggMatch<span className="text-accent">+</span> brings it all together.
          </p>
        </div>
      </Section>

      {/* 4 — My Dog */}
      <Section id="included" className="container-page scroll-mt-24 pt-0">
        <SectionHead
          eyebrow="The centre of it all"
          title="Your dog. Your space."
          body="My Dog is your dog's personal home inside DoggMatch. Everything you keep track of lives here — and everything else on the site feeds into it."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          {/* device mockup */}
          <div className="rounded-[2rem] border border-border bg-surface p-5 shadow-[var(--shadow-lift)] md:p-8">
            <div className="rounded-[1.4rem] border border-border bg-background p-6 md:p-8">
              <div className="flex items-center gap-3">
                <img
                  src={lunaImage}
                  alt="Luna, a labrador retriever"
                  width={96}
                  height={96}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-lg leading-none tracking-tight">Luna</p>
                  <p className="mt-1 text-xs text-muted-foreground">Labrador Retriever · 3 years</p>
                </div>
                <span className="ml-auto">
                  <Badge tone="accent">Today</Badge>
                </span>
              </div>
              <ul className="mt-7 grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-3">
                {myDogSections.map((s) => (
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
            <h3 className="display-md">Everything about your dog, in one place</h3>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Health, food, training, dental, coat, paws, weight, activity, behaviour, your week,
              travel and documents. You don't have to fill it all in. Add what's useful, and the
              rest waits quietly until you need it.
            </p>
            <div className="mt-8">
              <ButtonLink to="/my-dog" size="lg">
                See My Dog
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
              Find your dog.
              <br />
              Then live life together.
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground">
              Finding the right dog is only the beginning. DoggMatch<span className="text-accent">+</span>{" "}
              gives you one place to look after the everyday things that matter — from training and
              feeding to health, travel, routines and the little moments in between.
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
                alt="A man practising recall with his dog in a field"
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div>
              <SectionHead eyebrow="Train together" title="Small steps. Real progress." body="Structured programmes built from short, kind sessions you can actually fit into a normal day. No shouting, no gadgets, no promises about how fast it'll go." />
              <Card className="mt-8 max-w-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg leading-none tracking-tight">Luna</p>
                    <p className="mt-1.5 text-sm text-muted-foreground">Recall</p>
                  </div>
                  <Stars filled={4} />
                </div>
                <div className="mt-5 h-[3px] w-full overflow-hidden rounded-full bg-surface-strong">
                  <div className="h-full w-[72%] rounded-full bg-accent" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground">4 sessions completed this week.</p>
              </Card>
            </div>
          </div>

          <Rail label="Training programmes">
            {programmes.map((p) => (
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
              Open the lesson library
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* 6 — Health & care */}
      <Section className="container-page">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <SectionHead
              eyebrow="Health & care"
              title="Look after the little things"
              body="Keep the important things together, notice changes over time, and stay organised. DoggMatch isn't a veterinary service — when something worries you, your vet is the right call."
            />
            <ul className="mt-9 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {careItems.map((c) => (
                <li key={c.title} className="bg-background p-6">
                  <h3 className="text-[0.9375rem] font-medium">{c.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.line}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={careImage}
              alt="An owner calmly checking over her dog at home"
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
              alt="A measured bowl of food being prepared for a waiting dog"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHead
              eyebrow="Feed well"
              title="Make feeding easier to understand"
              body="Portions worked out from your dog's weight, age and how active they are — then kept in step with the weight log. Sensible, evidence-informed, no fads."
            />
            <ul className="mt-9 space-y-3">
              {foodItems.map((f) => (
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
              <ButtonLink to="/my-dog/nutrition" tone="outline">Food &amp; portions</ButtonLink>
              <ButtonLink to="/my-dog/food" tone="outline">Can my dog eat this?</ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/* 8 — My Week */}
      <Section className="container-page">
        <SectionHead
          eyebrow="My Week"
          title="Your week with your dog"
          body="Bring training, care, activity and everyday routines together, so nothing important quietly slips."
        />
        <div className="mt-12 -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 md:mx-0 md:grid md:grid-cols-4 md:snap-none md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-7">
          {week.map((d) => (
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
            Open My Week
            <Arrow />
          </ButtonLink>
        </div>
      </Section>

      {/* 9 — Dog life */}
      <Section className="bg-surface">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center">
          <div>
            <SectionHead
              eyebrow="Dog life"
              title="Life beyond the home"
              body="The everyday map of a dog's life near you — where to walk, where you're welcome and who to call."
            />
            <ul className="mt-9 flex flex-wrap gap-2.5">
              {dogLife.map((d) => (
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
                Explore Dog Life
              </ButtonLink>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src={dogLifeImage}
              alt="A dog and owner on a coastal path in the early morning"
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
              alt="A dog safely harnessed in the back of a car before a trip"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <SectionHead
              eyebrow="Travel"
              title="Take your dog with you"
              body="From the school run to crossing a border. Rules are based on current official requirements and do change — always check with the authorities before you travel."
            />
            <ul className="mt-9 grid gap-2.5 sm:grid-cols-2">
              {travelItems.map((t) => (
                <li key={t} className="flex gap-3 text-[0.9375rem]">
                  <Tick />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Card className="mt-14 max-w-xl">
          <Eyebrow>International travel checker</Eyebrow>
          <p className="mt-5 font-display text-2xl tracking-tight">
            Norway <span className="text-accent">→</span> Poland
          </p>
          <ul className="mt-6 space-y-3">
            {["Microchip", "Rabies vaccination", "Pet passport", "Destination requirements", "Return requirements"].map((r) => (
              <li key={r} className="flex gap-3 text-[0.9375rem]">
                <Tick />
                {r}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink to="/travel/abroad">
              Check your route
              <Arrow />
            </ButtonLink>
          </div>
        </Card>
      </Section>

      {/* 11 + 12 — Travel pack and print */}
      <Section className="bg-surface">
        <div className="container-page">
          <SectionHead
            eyebrow="Print &amp; save"
            title="Some things are better on paper."
            body="Keep the important information with you — at home, in the car, at the vet or when someone else is looking after your dog."
          />

          <div className="mt-14 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start">
            {/* travel pack preview */}
            <div className="rounded-[2rem] border border-border bg-background p-6 shadow-[var(--shadow-lift)] md:p-8">
              <div className="mx-auto max-w-sm rounded-lg border border-border bg-background p-7 shadow-[var(--shadow-soft)]">
                <p className="eyebrow">DoggMatch</p>
                <p className="mt-4 font-display text-xl tracking-tight">Dog Travel Pack</p>
                <p className="mt-1 text-xs text-muted-foreground">Luna · Labrador Retriever</p>
                <ul className="mt-6 space-y-2.5 border-t border-border pt-5">
                  {packContents.map((p) => (
                    <li key={p} className="flex items-center justify-between text-sm">
                      <span>{p}</span>
                      <span className="h-px w-16 bg-border" aria-hidden />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 text-center">
                <ButtonLink to="/my-dog/pack" size="lg">
                  Create travel pack
                  <Arrow />
                </ButtonLink>
              </div>
            </div>

            <div>
              <ul className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
                {docs.map((d) => (
                  <li key={d} className="bg-background p-6">
                    <span className="block h-10 w-8 rounded-[3px] border border-border-strong bg-surface" aria-hidden />
                    <p className="mt-4 text-[0.9375rem] font-medium">{d}</p>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <ButtonLink to="/my-dog/print" tone="outline" size="lg">
                  See what you can print
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 13 — Multiple dogs */}
      <Section className="container-page">
        <SectionHead eyebrow="Multiple dogs" title="One home. Every dog." body="Premium supports more than one dog, each with their own profile, routines, training, health and documents. Switching between them takes one tap." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:max-w-3xl">
          {[
            { name: "Luna", breed: "Labrador Retriever", img: lunaImage },
            { name: "Max", breed: "Cocker Spaniel", img: maxImage },
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
            <h2 className="display-lg">Everything feels more relevant to your dog</h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              DoggMatch doesn't need clever machines to make this personal. Your dog's breed, age,
              size, activity, your lifestyle, your routines and whatever you choose to tell us
              quietly shape what you see — which lessons come up, how much food is roughly right,
              what your week suggests.
            </p>
          </div>
        </div>
      </Section>

      {/* 15 — Journey */}
      {/* 14b — Member card and benefits */}
      <MemberCardShowcase />

      <Section className="container-page pt-0">
        <SectionHead eyebrow="The whole journey" title="From first thought to a long life together" />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {journey.map((j, i) => (
            <li key={j} className="bg-background p-6">
              <span className="font-display text-sm tabular-nums text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-3 text-[0.9375rem] font-medium">{j}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 font-display text-2xl tracking-tight">
          DoggMatch<span className="text-accent">+</span> — everything connected in one place.
        </p>
      </Section>

      {/* 16 — Comparison */}
      <Section id="compare" className="bg-surface scroll-mt-24">
        <div className="container-page">
          <SectionHead eyebrow="Free and Premium" title="What's free, and what comes with Premium" body="Everything you need to find the right dog stays free. Premium is for the life that comes after." />
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <Card>
              <p className="eyebrow">Free</p>
              <p className="mt-4 font-display text-xl tracking-tight">For finding the right dog.</p>
              <p className="mt-2 text-sm text-muted-foreground">“Find the dog that's right for me.”</p>
              <ul className="mt-7 space-y-3">
                {freeList.map((f) => (
                  <li key={f} className="flex gap-3 text-[0.9375rem]">
                    <Tick />
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
            <Card className="border-border-strong">
              <p className="eyebrow text-accent">DoggMatch+</p>
              <p className="mt-4 font-display text-xl tracking-tight">For life with your dog.</p>
              <p className="mt-2 text-sm text-muted-foreground">“Now help me give that dog a really good life.”</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                {plusList.map((p) => (
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
        <SectionHead eyebrow="Why DoggMatch+" title="Three simple reasons" />
        <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border lg:grid-cols-3">
          {[
            { title: "One place", body: "Everything about your dog's life, together." },
            { title: "Useful every day", body: "Not just something you visit once." },
            { title: "Built around your dog", body: "Your dog's information shapes the experience." },
          ].map((v) => (
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
          eyebrow="Your first week with DoggMatch+"
          title="A simple start to life with DoggMatch+."
          body="Nothing to rush. A little each day, and by the end of the week your dog has a home here."
        />
        <ol className="mt-12 grid gap-px overflow-hidden rounded-[1.75rem] border border-border bg-border md:grid-cols-2">
          {firstWeek.map((d, i) => (
            <li
              key={d.day}
              className={cn(
                "flex gap-6 bg-background p-7 md:p-9",
                i === firstWeek.length - 1 && "md:col-span-2",
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
          <Eyebrow>Membership</Eyebrow>
          <h2 className="display-lg mt-6">
            DoggMatch<span className="text-accent">+</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            One membership, everything included. Choose the rhythm that suits you.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:max-w-4xl lg:grid-cols-2">
          <Card className="flex flex-col">
            <p className="eyebrow">Monthly</p>
            <p className="mt-6 font-display text-4xl tracking-tight">
              €7.99 <span className="text-lg font-normal text-muted-foreground">/ month</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Everything in DoggMatch+, month by month.
            </p>
            <div className="mt-auto">
              <JoinPlusButton plan="monthly" tone="outline" label="Join monthly" />
            </div>
          </Card>
          <Card className="relative flex flex-col border-border-strong bg-surface">
            <div className="flex items-center gap-3">
              <p className="eyebrow">Yearly</p>
              <Badge tone="accent">Best value</Badge>
            </div>
            <p className="mt-6 font-display text-4xl tracking-tight">
              €59.99 <span className="text-lg font-normal text-muted-foreground">/ year</span>
            </p>
            <p className="mt-4 font-display text-lg tracking-tight text-accent">
              Just €5 a month when billed yearly
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Save €35.89 a year compared with paying monthly.
            </p>
            <div className="mt-auto">
              <JoinPlusButton plan="yearly" label="Join yearly — best value" />
            </div>
          </Card>
        </div>
        <div className="mt-8 max-w-xl">
          <p className="font-display text-lg tracking-tight">Membership is open.</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Payment is handled securely by Stripe. You can change or cancel your membership yourself
            at any time from your account.
          </p>
        </div>
      </Section>

      {/* 19c — FAQ */}
      <Section className="container-page pt-0">
        <SectionHead
          eyebrow="Questions"
          title="The things people usually ask"
          body="Short, honest answers. If there's something else you'd like to know, just write to us."
        />
        <div className="mt-12 overflow-hidden rounded-[1.75rem] border border-border">
          {faqs.map((f) => (
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
          Still wondering about something?{" "}
          <Link to="/contact" className="underline underline-offset-4 hover:text-foreground">
            Get in touch
          </Link>
          .
        </p>
      </Section>

      {/* 20 — Final CTA */}
      <Section className="container-page pt-0">
        <div className="rounded-[2rem] bg-primary p-10 text-primary-foreground md:p-16">
          <div className="max-w-2xl">
            <h2 className="display-lg">Your dog is more than a match.</h2>
            <p className="mt-6 text-lg leading-relaxed opacity-80">
              DoggMatch helps you find the dog that's right for you. DoggMatch+ helps you give that
              dog a really good life.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="#membership"
                className="group inline-flex h-14 w-full select-none items-center justify-center gap-2.5 rounded-full bg-accent px-6 text-center text-[0.9375rem] font-medium text-accent-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[var(--shadow-lift)] sm:w-auto sm:px-8 sm:text-base"
              >
                Join DoggMatch+
                <Arrow />
              </a>
              <ButtonLink
                to="/find-my-dog"
                size="lg"
                className="w-full border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
                tone="ghost"
              >
                Find My Dog
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
