import QuestionHeader from '../molecules/QuestionHeader'
import AnswerOption from '../molecules/AnswerOption'
import './QuestionCard.css'

function getStatus(answer, question, selected, locked) {
  if (!locked) return 'idle'
  if (answer === question.correct) return 'correct'
  if (answer === selected) return 'wrong'
  return 'idle'
}

export default function QuestionCard({ question, selected, locked, onSelect }) {
  const headerId = `question-${question.id}`
  const isCorrect = selected === question.correct

  return (
    <fieldset className="question-card" disabled={locked} aria-labelledby={headerId}>
      <QuestionHeader
        id={headerId}
        category={question.category}
        difficulty={question.difficulty}
        text={question.text}
      />

      <div className="question-card__answers">
        {question.answers.map((answer) => (
          <AnswerOption
            key={answer}
            name={headerId}
            text={answer}
            checked={selected === answer}
            status={getStatus(answer, question, selected, locked)}
            disabled={locked}
            onSelect={(text) => onSelect(question.id, text)}
          />
        ))}
      </div>

      {locked && (
        <p
          className={`question-card__feedback ${
            isCorrect ? 'question-card__feedback--correct' : 'question-card__feedback--wrong'
          }`}
          role="status"
        >
          {isCorrect ? 'Correct!' : `The right answer was: ${question.correct}`}
        </p>
      )}
    </fieldset>
  )
}
