import type { Lesson } from "./types";

/**
 * A small library of lessons we actually stand behind, rather than a big one
 * padded out. Every lesson is a self-contained object — adding the hundredth
 * lesson needs no change to any screen.
 */
export const lessons: Lesson[] = [
  {
    id: "recall",
    title: "Come when called",
    promise: "Help your dog learn that coming back to you is always worth it.",
    category: "recall-safety",
    goals: ["recall"],
    level: "beginner",
    ageStages: ["puppy", "adolescent", "adult", "senior"],
    duration: 8,
    equipment: ["A few small, soft treats", "A quiet room or garden", "A little patience"],
    steps: [
      {
        title: "Start close",
        body: "Sit or crouch a couple of steps away from your dog. Say their name, then \"come\" in a bright, happy voice. That's it — no repeating, no stern tone.",
        visual: "recall-1",
      },
      {
        title: "Welcome them in",
        body: "The moment your dog turns towards you, smile and open your arms. Keep the encouragement going the whole way in, so coming back feels like the good part.",
        visual: "recall-2",
      },
      {
        title: "Reward straight away",
        body: "As your dog reaches you, give the treat and a bit of fuss. Reward while they're right next to you, not as they wander off again.",
        visual: "recall-3",
      },
      {
        title: "Stop while it's still fun",
        body: "Five or six goes is plenty. Short sessions usually work better than asking for too much at once. Finish, have a play, and leave them wanting more.",
        visual: "settle-1",
      },
    ],
    stages: [
      { label: "Indoors, close by", body: "Same room, no distractions, lots of praise." },
      { label: "From another room", body: "Call from out of sight and celebrate the arrival." },
      { label: "A short way outdoors", body: "A garden or quiet space, still on a long line." },
      { label: "With a little going on", body: "A few smells and sounds, nothing overwhelming." },
      { label: "With more going on", body: "Busier places, still somewhere safe and enclosed." },
      { label: "Part of everyday life", body: "Practised now and then, rewarded for years." },
    ],
    oneThing: {
      title: "One important thing",
      body: "Never call your dog to you for something they'd rather avoid — a bath, the end of a walk, being told off. We want them to learn one simple thing: coming back to you is always a good moment.",
    },
    breedRelevance: ["labrador-retriever", "golden-retriever", "border-collie", "shiba-inu", "greyhound"],
    nextLessonId: "name",
  },
  {
    id: "sit",
    title: "Teach sit",
    promise: "A calm, easy way to ask for a pause — useful a hundred times a week.",
    category: "puppy-foundations",
    goals: ["sit-down-stay", "puppy-basics"],
    level: "beginner",
    ageStages: ["puppy", "adolescent", "adult", "senior"],
    duration: 5,
    equipment: ["A few small treats", "A non-slip floor"],
    steps: [
      {
        title: "Treat near the nose",
        body: "Hold a small treat just in front of your dog's nose, close enough that they can smell it but not snatch it.",
        visual: "sit-1",
      },
      {
        title: "Slowly up and back",
        body: "Move your hand gently upward and a little back over their head. Their nose follows, and their bottom usually drifts towards the floor.",
        visual: "sit-2",
      },
      {
        title: "Say it, then reward",
        body: "The moment their bottom touches the floor, say \"sit\" and give the treat. Say the word as it happens, not before.",
        visual: "sit-3",
      },
      {
        title: "A few goes, then a break",
        body: "Three or four repetitions, then stop. If your dog jumps at your hand, lower it a little — the treat is probably too high.",
        visual: "settle-1",
      },
    ],
    oneThing: {
      title: "If it isn't working",
      body: "Nothing has gone wrong. Try smaller movements, a tastier treat, or a quieter room. Some dogs need a few sessions before it clicks, and that's completely normal.",
    },
    nextLessonId: "settle",
  },
  {
    id: "name",
    title: "Your dog's name",
    promise: "Turn your dog's name into the happiest word they know.",
    category: "puppy-foundations",
    goals: ["puppy-basics", "recall"],
    level: "beginner",
    ageStages: ["puppy", "adolescent", "adult", "senior"],
    duration: 5,
    equipment: ["A handful of small treats", "A quiet moment"],
    steps: [
      { title: "Say it once", body: "Wait until your dog isn't looking at you, then say their name once, warmly.", visual: "recall-1" },
      { title: "Mark the look", body: "The second they glance at you, say \"yes\" and give a treat. The look is the whole exercise.", visual: "recall-3" },
      { title: "Keep it precious", body: "Use their name for good things only. Not for telling off, not fifteen times in a row.", visual: "settle-1" },
    ],
    oneThing: {
      title: "Why this matters",
      body: "Almost everything else — recall, walking, safety — starts with your dog choosing to look at you. It's worth a few minutes a day.",
    },
    nextLessonId: "recall",
  },
  {
    id: "loose-leash",
    title: "Walking on a loose leash",
    promise: "Fewer sore arms, and a walk you both look forward to.",
    category: "walking",
    goals: ["loose-leash"],
    level: "building",
    ageStages: ["puppy", "adolescent", "adult", "senior"],
    duration: 10,
    equipment: ["A well-fitted harness", "A standard lead, not extendable", "Treats you can reach quickly"],
    steps: [
      { title: "Start before the door", body: "Clip the lead on and just stand still until your dog is calm. Excitement at the door tends to come along for the whole walk.", visual: "greeting-1" },
      { title: "Reward the slack", body: "Whenever the lead hangs loose, say \"yes\" and reward at your side. You're paying for the position, not correcting the pulling.", visual: "leash-1" },
      { title: "Stop when it tightens", body: "If the lead goes tight, simply stop. No pulling back. Wait for the lead to soften, then walk on again.", visual: "leash-1" },
      { title: "Change direction", body: "Turn calmly and walk the other way now and then. It teaches your dog to keep an eye on where you're going.", visual: "leash-1" },
    ],
    stages: [
      { label: "In the hallway", body: "A few metres, no distractions at all." },
      { label: "Your own street", body: "Familiar smells, short and slow." },
      { label: "A quiet park", body: "More going on, more rewarding for checking in." },
      { label: "Busier pavements", body: "People, bikes, other dogs at a distance." },
      { label: "Passing calmly", body: "Walking past another dog without a fuss." },
    ],
    oneThing: {
      title: "Go slower than feels natural",
      body: "Most pulling comes from a dog who has learned that pulling gets them there faster. A few very short, very slow walks teach the opposite, quickly.",
    },
    breedRelevance: ["labrador-retriever", "golden-retriever", "border-collie"],
    nextLessonId: "calm-greetings",
  },
  {
    id: "settle",
    title: "Settling on a mat",
    promise: "Give your dog a place where nothing is expected of them.",
    category: "home",
    goals: ["calm-at-home", "calmness"],
    level: "beginner",
    ageStages: ["puppy", "adolescent", "adult", "senior"],
    duration: 8,
    equipment: ["A mat, blanket or bed", "A few treats", "Something quiet to do yourself"],
    steps: [
      { title: "Make the mat pay", body: "Drop a treat on the mat whenever your dog steps on it. Say nothing — let them work out that the mat is a good place.", visual: "settle-1" },
      { title: "Reward lying down", body: "When they lie down, calmly place a treat between their front paws. Low energy rewards keep the mood low energy.", visual: "settle-1" },
      { title: "Sit down yourself", body: "Read, scroll, have a coffee. Every couple of minutes, quietly drop another treat while they rest.", visual: "settle-1" },
      { title: "Let them get up", body: "Rest shouldn't feel like being trapped. Let them leave when they want, and welcome them back later.", visual: "recall-3" },
    ],
    oneThing: {
      title: "Rest is a skill",
      body: "Plenty of dogs who seem hyperactive are simply short on sleep. Learning to switch off is training too — often the most useful kind.",
    },
    nextLessonId: "alone-time",
  },
  {
    id: "calm-greetings",
    title: "Saying hello without jumping",
    promise: "Four paws on the floor, even when someone lovely walks in.",
    category: "everyday-manners",
    goals: ["manners"],
    level: "building",
    ageStages: ["puppy", "adolescent", "adult"],
    duration: 8,
    equipment: ["A helpful friend", "Treats", "A lead, if it helps at first"],
    steps: [
      { title: "Set it up calmly", body: "Ask your visitor to come in slowly and ignore your dog at first. No high voices, no leaning over.", visual: "greeting-1" },
      { title: "Reward four paws down", body: "Every second your dog keeps all four paws on the floor, quietly drop a treat down by their feet.", visual: "greeting-1" },
      { title: "Hello happens low", body: "When your dog is settled, your visitor can crouch and say hello gently. If the jumping starts, they simply stand up again.", visual: "recall-3" },
      { title: "Practise little and often", body: "Two minutes at the door a few times a week does more than one long session.", visual: "settle-1" },
    ],
    oneThing: {
      title: "Jumping is friendliness",
      body: "It isn't rudeness or dominance — it's a dog trying to get to your face. Show them a calmer way to say hello and reward it generously.",
    },
    nextLessonId: "leave-it",
  },
  {
    id: "leave-it",
    title: "Leave it",
    promise: "For the chicken bone on the pavement, and the sock on the stairs.",
    category: "recall-safety",
    goals: ["leave-it", "puppy-basics"],
    level: "building",
    ageStages: ["puppy", "adolescent", "adult", "senior"],
    duration: 6,
    equipment: ["Two kinds of treats — ordinary and very good", "A quiet room"],
    steps: [
      { title: "Closed hand", body: "Hold an ordinary treat in a closed fist. Let your dog sniff and nudge. Wait, quietly.", visual: "sit-1" },
      { title: "Pay the moment they stop", body: "The instant they back off or look away, say \"yes\" and reward from your other hand with the better treat.", visual: "sit-3" },
      { title: "Add the words", body: "Once they're backing off quickly, start saying \"leave it\" just before you present your hand.", visual: "recall-3" },
      { title: "Make it worth it", body: "Always pay with something better than the thing they left. That's the deal that makes it work outdoors.", visual: "settle-1" },
    ],
    oneThing: {
      title: "Never chase or grab",
      body: "Chasing your dog for something in their mouth teaches them to swallow it quickly. Trade instead — a treat scattered on the floor works wonders.",
    },
    safetyNote:
      "If your dog stiffens, freezes or growls over food or objects, please stop and speak to a qualified, reward-based trainer or behaviourist. That's a job for someone who can see your dog in person.",
    nextLessonId: "scent-game",
  },
  {
    id: "scent-game",
    title: "Find it",
    promise: "Ten minutes of sniffing that leaves your dog genuinely content.",
    category: "mental-stimulation",
    goals: ["mental", "calmness"],
    level: "beginner",
    ageStages: ["puppy", "adolescent", "adult", "senior"],
    duration: 10,
    equipment: ["A handful of your dog's food or treats", "A room or a patch of grass"],
    steps: [
      { title: "Let them watch", body: "Show your dog a treat and place it on the floor a step away. Say \"find it\" and let them get it.", visual: "recall-1" },
      { title: "Scatter a few", body: "Toss a small handful across the floor or grass and let them work slowly through the smells.", visual: "settle-1" },
      { title: "Hide them properly", body: "Once they've got the idea, hide treats behind chair legs and under cushions while they wait in another room.", visual: "settle-1" },
      { title: "Finish with a rest", body: "Sniffing is real work. Most dogs will take themselves off for a good sleep afterwards.", visual: "settle-1" },
    ],
    oneThing: {
      title: "Good on rainy days",
      body: "Perfect for bad weather, recovery from an injury, or an older dog whose legs are slowing down but whose nose certainly isn't.",
    },
    breedRelevance: ["labrador-retriever", "border-collie", "poodle", "shiba-inu"],
    nextLessonId: "paw",
  },
  {
    id: "paw",
    title: "Give a paw",
    promise: "A little party trick that quietly builds handling and trust.",
    category: "tricks-games",
    goals: ["tricks"],
    level: "beginner",
    ageStages: ["puppy", "adolescent", "adult", "senior"],
    duration: 5,
    equipment: ["Small treats", "Your dog in a sit"],
    steps: [
      { title: "Treat in a loose fist", body: "With your dog sitting, hold a treat in a loose fist near their chest and wait.", visual: "sit-1" },
      { title: "Wait for the paw", body: "Most dogs paw at your hand eventually. The moment they do, say \"yes\" and open your hand.", visual: "photo-tricks" },
      { title: "Name it", body: "Once the paw comes reliably, start saying \"paw\" as they lift it. Then try with an empty hand.", visual: "sit-3" },
    ],
    oneThing: {
      title: "Why tricks are worth it",
      body: "A dog who is comfortable having their paws handled makes nail trims, vet visits and muddy walks far easier for everyone.",
    },
    nextLessonId: "settle",
  },
  {
    id: "alone-time",
    title: "Being happily alone",
    promise: "Short, calm absences that teach your dog you always come back.",
    category: "home",
    goals: ["calm-at-home", "calmness", "barking"],
    level: "building",
    ageStages: ["puppy", "adolescent", "adult"],
    duration: 10,
    equipment: ["A comfortable bed", "Something to chew", "A watch or timer"],
    steps: [
      { title: "Start with seconds", body: "Step out of the room and come straight back in. Make both the leaving and the returning completely unremarkable.", visual: "settle-1" },
      { title: "Build slowly", body: "Ten seconds. Thirty. A minute. Vary it, so your dog can't predict a long absence.", visual: "settle-1" },
      { title: "Watch how they settle", body: "Film a few minutes on your phone. A dog who lies down and sighs is fine; a dog who paces or cries needs a shorter step.", visual: "recall-3" },
      { title: "Keep goodbyes boring", body: "No long farewells and no big reunions. Calm comings and goings are the whole message.", visual: "settle-1" },
    ],
    oneThing: {
      title: "Go at your dog's pace",
      body: "If ten seconds is too long today, five is a perfectly good place to start. Progress here is measured in weeks, not days.",
    },
    safetyNote:
      "If your dog panics when left — constant barking, drooling, destruction or trying to escape — please don't push on alone. Separation distress responds well to help from a qualified behaviourist, and your vet is a good first call.",
    nextLessonId: "settle",
  },
];

export const lessonsById: Record<string, Lesson> = Object.fromEntries(
  lessons.map((l) => [l.id, l]),
);

export function getLesson(id: string): Lesson | undefined {
  return lessonsById[id];
}
