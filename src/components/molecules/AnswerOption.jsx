import './AnswerOption.css'

export default function AnswerOption({
  name,
  text,
  checked,
  status = 'idle',
  disabled,
  onSelect,
}) {
  const className = [
    'answer-option',
    checked && 'answer-option--selected',
    status === 'correct' && 'answer-option--correct',
    status === 'wrong' && 'answer-option--wrong',
    disabled && 'answer-option--disabled',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <label className={className}>
      <input
        className="answer-option__input"
        type="radio"
        name={name}
        value={text}
        checked={checked}
        disabled={disabled}
        onChange={() => onSelect(text)}
      />
      <span className="answer-option__text">{text}</span>
    </label>
  )
}
