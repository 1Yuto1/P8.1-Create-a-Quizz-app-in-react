import Button from '../atoms/Button'
import './ScorePanel.css'

function getMessage(score, total) {
  if (score === total) return 'Perfect! You nailed it 🏆'
  if (score >= total / 2) return 'Good job! You almost have it 👏'
  return 'Keep practising, you can do it! 💪'
}

export default function ScorePanel({ score, total, onPlayAgain }) {
  return (
    <div className="score-panel">
      <h2 className="score-panel__score">Your score: {score} / {total}</h2>
      <p className="score-panel__message">{getMessage(score, total)}</p>
      <Button onClick={onPlayAgain}>Play again</Button>
    </div>
  )
}
