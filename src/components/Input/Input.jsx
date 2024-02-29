export default function Input({type, id, name, label, error}) {
  return (
    <div className="control">
        <label className="control-row" htmlFor={id}>{label}</label>
        <input type={type} id={id}name={name} required/>
        <div className="control-error">{error && <p>{error}</p>}</div>
    </div>
  )
}