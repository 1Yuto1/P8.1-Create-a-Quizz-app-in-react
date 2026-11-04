import Badge from '../atoms/Badge'
import './QuestionHeader.css'

export default function QuestionHeader({ id, category, difficulty, text }) {
  return (
    <div className="question-header">
      <div className="question-header__badges">
        <Badge>{category}</Badge>
        <Badge>{difficulty}</Badge>
      </div>
      <h2 className="question-header__text" id={id}>{text}</h2>
    </div>
  )
}
