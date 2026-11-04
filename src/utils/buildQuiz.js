import { shuffle } from './shuffle'

export function buildQuiz(allQuestions, amount) {
  return shuffle(allQuestions)
    .slice(0, amount)
    .map(({ id, category, difficulty, text, correct, incorrect }) => ({
      id,
      category,
      difficulty,
      text,
      correct,
      answers: shuffle([correct, ...incorrect]),
    }))
}
