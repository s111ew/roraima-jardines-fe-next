
import styles from "../styles/Input.module.css"

function Input({ text, isTextArea, isErr, value, onChange }) {
  return (
    <div className={`${styles.inputContainer} ${isErr ? styles.error : ''}`}>
      <label className={styles.label} htmlFor={text}>{text}</label>
      {isTextArea ? (
        <textarea
          id={text}
          name={text}
          rows="5"
          style={{ resize: 'none' }}
          value={value}
          onChange={onChange}
          aria-invalid={isErr}
        />
      ) : (
        <input
          id={text}
          name={text}
          type="text"
          value={value}
          onChange={onChange}
          aria-invalid={isErr}
        />
      )}
      { isErr ? 
        <div className={styles.errContainer}>
          <img className={styles.errIcon} src={`/ErrorIcon.svg`} alt="error icon" />
          <p className={styles.errMessage}>Información inválida</p>
        </div> : ''
      }
    </div>
  );
}

export default Input;
