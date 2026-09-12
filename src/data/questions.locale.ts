import { pick } from "@/i18n";
import type { QuizQuestion } from "@/lib/matching/types";
import { questions } from "./questions";
import { questionsNo } from "./questions.no";
import { questionsPl } from "./questions.pl";
import { questionsDk } from "./questions.dk";
import { questionsSe } from "./questions.se";
import { questionsFi } from "./questions.fi";

/** The quiz in the reader's language. */
export function quizQuestions(): QuizQuestion[] {
  return pick({
    en: questions,
    no: questionsNo,
    pl: questionsPl,
    dk: questionsDk,
    se: questionsSe,
    fi: questionsFi,
  });
}
