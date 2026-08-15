import type { Breed } from "@/data/breeds";
import type { CareProfile, WeightEntry } from "@/lib/care/store";
import type { ContactBook, DogDetails, ImportantInfo, VetVisit } from "@/lib/care/records";
import type { WeekDay } from "@/lib/care/week";
import type { PortionResult } from "@/lib/care/portions";
import type { DogProfile } from "@/lib/training/store";
import type { Lesson } from "@/data/training/types";

export type Block =
  | { kind: "text"; text: string }
  | { kind: "note"; text: string }
  | { kind: "fields"; fields: { label: string; value?: string | undefined; wide?: boolean | undefined }[] }
  | { kind: "checklist"; items: string[]; columns?: number | undefined }
  | { kind: "week"; days: { name: string; items: string[] }[] }
  | { kind: "planner"; days: string[]; rows: string[] }
  | { kind: "lines"; count: number; label?: string | undefined };

export interface DocSection {
  heading: string;
  intro?: string;
  blocks: Block[];
  /** Start this section on a fresh sheet of paper. */
  newPage?: boolean | undefined;
}

export interface DocContext {
  dog?: DogProfile;
  breed?: Breed;
  breedName: string;
  details: DogDetails;
  care: CareProfile;
  contacts: ContactBook;
  info: ImportantInfo;
  visits: VetVisit[];
  weights: WeightEntry[];
  portions?: PortionResult;
  week: WeekDay[];
  /** The handful of skills the plan suggests working on right now. */
  skills: Lesson[];
  today: string;
}

export interface DocSpec {
  id: string;
  title: string;
  blurb: string;
  /** Reserved for DoggMatch+ later on. Everything is open for now. */
  premium?: boolean;
  build: (ctx: DocContext) => DocSection[];
}