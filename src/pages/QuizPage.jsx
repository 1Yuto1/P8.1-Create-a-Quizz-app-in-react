import { useState } from 'react'
import { questions as allQuestions } from '@/data/questions'
import { buildQuiz } from '@/utils/buildQuiz'
import StartScreen from '@/components/organisms/StartScreen'
import QuestionCard from '@/components/organisms/QuestionCard'
import ScorePanel from '@/components/organisms/ScorePanel'
import ProgressBar from '@/components/atoms/ProgressBar'
import Button from '@/components/atoms/Button'
import './QuizPage.css'

const QUIZ_SIZE = 5

export default function QuizPage() {
  // State
  const [phase, setPhase] = useState('start') // 'start' | 'playing' | 'finished'
  const [questions, setQuestions] = useState(() => buildQuiz(allQuestions, QUIZ_SIZE))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState({}) // { [questionId]: answer }

  // Calculated values (not stored)
  const question = questions[currentIndex]
  const selected = userAnswers[question.id] ?? null
  const isLast = currentIndex === questions.length - 1
  const score = questions.filter((q) => userAnswers[q.id] === q.correct).length

  // Handlers
  function handleSelect(questionId, answer) {
    setUserAnswers((prev) => ({ ...prev, [questionId]: answer }))
  }

  function handleNext() {
    if (isLast) {
      setPhase('finished')
    } else {
      setCurrentIndex((i) => i + 1)
    }
  }

  function startGame() {
    setQuestions(buildQuiz(allQuestions, QUIZ_SIZE))
    setCurrentIndex(0)
    setUserAnswers({})
    setPhase('playing')
  }

  return (
    <main className="quiz-page">
      <div className="quiz-page__card">
        {phase === 'start' && (
          <StartScreen total={questions.length} onStart={startGame} />
        )}

        {phase === 'playing' && (
          <>
            <div className="quiz-page__progress">
              <p className="quiz-page__progress-label">
                Question {currentIndex + 1} of {questions.length}
              </p>
              <ProgressBar value={currentIndex + 1} max={questions.length} />
            </div>

            <QuestionCard
              key={question.id}
              question={question}
              selected={selected}
              locked={selected !== null}
              onSelect={handleSelect}
            />

            <div className="quiz-page__footer">
              <Button onClick={handleNext} disabled={selected === null}>
                {isLast ? 'See results' : 'Next'}
              </Button>
            </div>
          </>
        )}

        {phase === 'finished' && (
          <ScorePanel score={score} total={questions.length} onPlayAgain={startGame} />
        )}
      </div>
    </main>
  )
}
