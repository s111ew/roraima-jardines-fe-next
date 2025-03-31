function Input({ text, isTextArea }) {
  return (
    <div className="input-container">
      <label htmlFor={ text }>{ text }</label>
      { isTextArea ? <textarea id={ text } name={ text } rows='5' style={{resize: 'none'}}></textarea> : <input id={ text } name={ text } type="text" ></input> }
    </div>
  )
}

export default Input