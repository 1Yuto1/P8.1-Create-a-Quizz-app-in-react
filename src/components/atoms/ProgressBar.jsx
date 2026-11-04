import './ProgressBar.css'

export default function ProgressBar({ value, max }) {
  const percentage = max > 0 ? (value / max) * 100 : 0

  return (
    <div
      className="progress-bar__track"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
    >
      <div className="progress-bar__fill" style={{ width: `${percentage}%` }} />
    </div>
  )
}
