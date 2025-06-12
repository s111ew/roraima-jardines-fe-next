import styles from "../styles/Input.module.css"

function Input({ text, isTextArea }) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={ text }>{ text }</label>
      { isTextArea ? <textarea id={ text } name={ text } rows='5' style={{resize: 'none'}}></textarea> : <input id={ text } name={ text } type="text" ></input> }
    </div>
  )
}

export default Input