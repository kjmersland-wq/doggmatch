/**
 * The signature journey screen. Milestones are simply lesson ids in order,
 * so extending the path later means editing this list and nothing else.
 */
export const journeyMilestones = [
  { lessonId: "name", label: "Their name" },
  { lessonId: "sit", label: "Sit" },
  { lessonId: "settle", label: "Settling" },
  { lessonId: "recall", label: "Coming back" },
  { lessonId: "loose-leash", label: "Walking nicely" },
  { lessonId: "leave-it", label: "Leave it" },
  { lessonId: "calm-greetings", label: "Calm hellos" },
  { lessonId: "scent-game", label: "Nose work" },
] as const;
