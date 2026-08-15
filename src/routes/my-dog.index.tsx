import { createFileRoute, Link } from "@tanstack/react-router";
import { Arrow, ButtonLink, Eyebrow, Section } from "@/components/dogmatch/ui";
import { CareTile, Panel, RoutineRow, Stat, TopicCard, VetNote } from "@/components/dogmatch/care/parts";
import { CareCalendar, DogSwitcher, WeekStrip } from "@/components/dogmatch/care/hub";
import { careImages, categoryImages } from "@/data/care/images";
import { careTopics, getCareTopic } from "@/data/care/topics";
import { estimatePortions, weightTrend } from "@/lib/care/portions";
import {
  careStore,
  todayKey,
  useCareProfile,
  useMyDog,
  useTodayRoutine,
  useWeights,
  type RoutineId,
} from "@/lib/care/store";
import { breedById } from "@/data/breeds";
import { breedImages } from "@/data/breed-images";
import { buildWeek } from "@/lib/care/week";
import { useWeekOverride } from "@/lib/care/records";
import { useProgress } from "@/lib/training/store";

const title = "My Dog — Everyday health, food and care | DoggMatch";
const description =
  "A calm, personal place to look after your dog properly: food and portions, weight, teeth, coat, paws and the little daily things that add up.";

export const Route = createFileRoute("/my-dog/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/my-dog" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/my-dog" }],
  }),
  component: MyDogHome,
});

const routineItems: { id: RoutineId; label: string; hint: string }[] = [
  { id: "fresh-water", label: "Fresh water", hint: "Clean bowl, topped up" },
  { id: "measured-meals", label: "Meals measured", hint: "Weighed, not guessed" },
  { id: "walk", label: "A proper walk", hint: "With time to sniff" },
  { id: "play", label: "A bit of play", hint: "Ten minutes counts" },
  { id: "teeth", label: "Teeth", hint: "Even thirty seconds helps" },
  { id: "brush", label: "Quick brush", hint: "And a feel for lumps or mats" },
  { id: "paw-check", label: "Paw check", hint: "After the walk" },
  { id: "quiet-time", label: "Quiet time", hint: "Nothing asked of them" },
];

/** Every part of a dog's life, in one place. Each one points at what already exists. */
const sections: { to: string; label: string; line: string }[] = [
  { to: "/my-dog/week", label: "My week", line: "Walks, training, food and care, day by day" },
  { to: "/train", label: "Training", line: "Today's short session and what you're working on" },
  { to: "/my-dog/nutrition", label: "Food", line: "Portions, meals and switching food safely" },
  { to: "/my-dog/care/everyday-check", label: "Health", line: "The quick once-over that catches things early" },
  { to: "/my-dog/care/dental", label: "Dental", line: "Teeth and gums, in under a minute a day" },
  { to: "/my-dog/care/coat", label: "Coat & care", line: "Brushing, bathing and knowing the coat type" },
  { to: "/my-dog/care/paws", label: "Paws & nails", line: "Pads, nails and what winter does to them" },
  { to: "/my-dog/weight", label: "Weight", line: "The hands-on check, and a simple record" },
  { to: "/my-dog/care/wellbeing", label: "Activity", line: "Movement, sniffing and enough rest" },
  { to: "/train/library", label: "Behaviour", line: "Pulling, jumping, barking — one lesson at a time" },
  { to: "/dog-life", label: "Dog life", line: "Places to go and things to do nearby" },
  { to: "/my-dog/print", label: "Documents", line: "Print the plan, the pack or a note for the sitter" },
];

function MyDogHome() {
  const dog = useMyDog();
  const profile = useCareProfile(dog?.id);
  const weights = useWeights(dog?.id);
  const done = useTodayRoutine(dog?.id);
  const progress = useProgress(dog?.id);
  const override = useWeekOverride(dog?.id);
  const week = buildWeek(dog, profile, progress, override);
  const todayIndex = (new Date().getDay() + 6) % 7;
  const portions = estimatePortions(profile.weightKg, dog?.ageStage ?? "adult", profile);
  const trend = weightTrend(weights);
  const breed = dog?.breedId ? breedById[dog.breedId] : undefined;
  const portrait = dog?.breedId ? breedImages[dog.breedId] : careImages.careHero;
  const ageLabel =
    dog?.ageStage === "puppy"
      ? "Puppy"
      : dog?.ageStage === "adolescent"
        ? "Adolescent"
        : dog?.ageStage === "senior"
          ? "Senior"
          : "Adult";

  return (
    <div className="pb-24">
      {/* ------------------------------------------------------------ hero */}
      <section className="relative">
        <div className="container-page pt-28 md:pt-36">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-16">
            <div className="animate-rise">
              <Eyebrow>My Dog</Eyebrow>
              {dog ? (
                <>
                  <p className="mt-6 text-sm uppercase tracking-[0.18em] text-accent">
                    {breed ? `${breed.name} · ` : ""}
                    {ageLabel}
                    {profile.weightKg ? ` · ${profile.weightKg} kg` : ""}
                  </p>
                  <h1 className="display-xl mt-3">{dog.name}</h1>
                  <p className="mt-4 text-2xl leading-snug">
                    Let's take good care of {dog.name}.
                  </p>
                </>
              ) : (
                <h1 className="display-xl mt-6">Looking after your dog, properly</h1>
              )}
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {dog
                  ? "Food, weight, teeth, coat, paws and the small daily things. Everything in one calm place."
                  : "Tell us a little about your dog and we'll work out food portions, keep an eye on weight, and show you what everyday care actually looks like."}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <ButtonLink to="/my-dog/setup" size="lg">
                  {dog ? `${dog.name}'s details` : "Set up my dog"}
                  <Arrow />
                </ButtonLink>
                <ButtonLink to="/my-dog/food" tone="outline" size="lg">
                  Can my dog eat this?
                </ButtonLink>
              </div>
              <div className="mt-6">
                <DogSwitcher {...(dog ? { active: dog } : {})} />
              </div>
            </div>
            <div className="animate-rise overflow-hidden rounded-[2rem] border border-border">
              <img
                src={portrait}
                alt={dog ? `${dog.name}, ${breed ? breed.name : "your dog"}` : "A person sitting on the floor with their dog resting against them"}
                width={1400}
                height={1000}
                className="aspect-[7/5] w-full object-cover"
              />
            </div>
          </div>

          {/* ------------------------------------------------- section map */}
          <nav aria-label="My Dog sections" className="mt-14">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {sections.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="group rounded-[1.2rem] border border-border bg-surface p-5 transition-colors hover:border-border-strong"
                >
                  <span className="flex items-center justify-between gap-3">
                    <span className="text-[1.05rem] font-medium">{s.label}</span>
                    <span className="text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      <Arrow />
                    </span>
                  </span>
                  <span className="mt-1.5 block text-sm leading-relaxed text-muted-foreground">
                    {s.line}
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </section>

      {/* --------------------------------------------------------- today */}
      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Panel
            title="Today"
            action={
              <span className="text-sm tabular-nums text-muted-foreground">
                {done.length} of {routineItems.length}
              </span>
            }
          >
            <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
              None of this has to be perfect. Tick off what you've done — it resets tomorrow.
            </p>
            <div className="grid gap-2 sm:grid-cols-2">
              {routineItems.map((item) => (
                <RoutineRow
                  key={item.id}
                  label={item.label}
                  hint={item.hint}
                  done={done.includes(item.id)}
                  onToggle={() => dog && careStore.toggleRoutine(dog.id, item.id, todayKey())}
                />
              ))}
            </div>
            {!dog && (
              <p className="mt-5 text-sm text-muted-foreground">
                <Link to="/my-dog/setup" className="text-accent underline-offset-4 hover:underline">
                  Add your dog
                </Link>{" "}
                to save this from day to day.
              </p>
            )}
          </Panel>

          <div className="grid content-start gap-6">
            <Panel title="Where things stand">
              <div className="grid gap-3 sm:grid-cols-2">
                <Stat
                  label="Weight"
                  value={profile.weightKg ? `${profile.weightKg} kg` : "—"}
                  {...(trend
                    ? {
                        hint:
                          trend.direction === "steady"
                            ? `Steady over ${trend.days} days`
                            : `${trend.changeKg > 0 ? "+" : ""}${trend.changeKg} kg over ${trend.days} days`,
                      }
                    : { hint: "Add a weight to start tracking" })}
                />
                <Stat
                  label="Food a day"
                  value={
                    portions?.gramsPerDay
                      ? `${portions.gramsPerDay} g`
                      : portions
                        ? `${portions.dailyKcal} kcal`
                        : "—"
                  }
                  hint={portions ? `Roughly, across ${portions.mealsPerDay} meals` : "Add a weight and food"}
                />
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                <ButtonLink to="/my-dog/weight" tone="outline" size="md">
                  Weight & shape
                </ButtonLink>
                <ButtonLink to="/my-dog/nutrition" tone="outline" size="md">
                  Food & portions
                </ButtonLink>
              </div>
            </Panel>

            <VetNote>
              Everything here is general guidance to help you look after your dog day to day. It
              doesn't replace your vet, who knows your dog. If something worries you, ring them —
              they'd always rather hear from you early.
            </VetNote>
          </div>
        </div>
      </Section>

      {/* ----------------------------------------------------------- week */}
      <Section className="container-page">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Panel
            title={dog ? `${dog.name}'s week` : "Your week"}
            action={
              <Link to="/my-dog/week" className="text-sm text-accent underline-offset-4 hover:underline">
                See the whole week
              </Link>
            }
          >
            <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
              The next few days, worked out from your dog's age, breed and how busy your days are.
            </p>
            <WeekStrip week={week} todayIndex={todayIndex} />
          </Panel>

          <Panel title="Coming round again">
            <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
              A gentle nudge, never a telling-off. Tick something off once it's done.
            </p>
            <CareCalendar {...(dog ? { dog } : {})} />
          </Panel>
        </div>
      </Section>

      {/* ------------------------------------------------------ paper & people */}
      <Section className="container-page">
        <div className="grid gap-6 md:grid-cols-3">
          <Panel title="Print & save">
            <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              A profile card for the sitter, a feeding plan for the fridge, or the whole Dog Pack in
              one go.
            </p>
            <ButtonLink to="/my-dog/print" tone="outline" size="md" className="mt-5">
              Make something to print
            </ButtonLink>
          </Panel>
          <Panel title="Contacts & information">
            <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              Your vet's number, the microchip, the allergies — all the things you'd hate to be
              hunting for in a hurry.
            </p>
            <ButtonLink to="/my-dog/contacts" tone="outline" size="md" className="mt-5">
              Fill in the details
            </ButtonLink>
          </Panel>
          <Panel title="Vet visits">
            <p className="-mt-2 text-[0.9375rem] leading-relaxed text-muted-foreground">
              Write down what you've noticed and what you want to ask, then take it with you.
            </p>
            <ButtonLink to="/my-dog/vet" tone="outline" size="md" className="mt-5">
              Prepare for a visit
            </ButtonLink>
          </Panel>
        </div>
      </Section>

      {/* -------------------------------------------------------- the areas */}
      <Section className="container-page">
        <Eyebrow>Everyday care</Eyebrow>
        <h2 className="display-lg mt-5 max-w-2xl">The things that make the biggest difference</h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Short, clear and doable. Pick one and start there.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CareTile
            to="/my-dog/nutrition"
            image={categoryImages.nutrition}
            title="Food & portions"
            body="How much to feed, how often, and how to change food without upsetting anyone's stomach."
            meta="Works out a daily amount for your dog"
          />
          <CareTile
            to="/my-dog/weight"
            image={categoryImages.weight}
            title="Weight & shape"
            body="Learn the hands-on check vets use, and keep a simple record over time."
            meta="Takes about a minute a month"
          />
          <CareTile
            to="/my-dog/food"
            image={categoryImages.nutrition}
            title="Can my dog eat this?"
            body="A calm, searchable answer for the moment something falls on the kitchen floor."
            meta="Search any food"
          />
          {["dental", "coat", "paws", "ears", "eyes", "wellbeing", "everyday-check", "something-different", "emergency"]
            .map((id) => getCareTopic(id))
            .filter((t): t is NonNullable<typeof t> => Boolean(t))
            .map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
        </div>
      </Section>

      {/* --------------------------------------------------------- closing */}
      <Section className="container-page">
        <div className="rounded-[2rem] border border-border bg-surface p-10 md:p-14">
          <h2 className="display-md max-w-2xl">Training and care go together</h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            A dog who's comfortable being handled is easier to brush, check and take to the vet.
            The handling lessons in Train Your Dog make all of this easier.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink to="/train" size="lg">
              Train Your Dog
              <Arrow />
            </ButtonLink>
            <ButtonLink to="/guides" tone="outline" size="lg">
              Read the guides
            </ButtonLink>
          </div>
        </div>
      </Section>

      <p className="container-page mt-4 text-sm text-muted-foreground">
        {careTopics.length} care guides · written to be read in a few minutes
      </p>
    </div>
  );
}
