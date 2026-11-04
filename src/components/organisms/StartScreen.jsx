import Button from '../atoms/Button'
import './StartScreen.css'

export default function StartScreen({ total, onStart }) {
  return (
    <div className="start-screen">
      <h1 className="start-screen__title">Web Development Quiz</h1>
      <p className="start-screen__text">
        Answer {total} random questions and find out how much you know.
      </p>
      <Button onClick={onStart}>Start</Button>
    </div>
  )
}
