import './Button.css'

export default function Button({ children, onClick, disabled = false }) {
  return (
    <button className="button" type="button" onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
