import styles from "../styles/ButtonAlt.module.css"

export default function ButtonAlt({ text, onClick }) {
  return(
    <button onClick={onClick} className={styles.button}>
      <span className={styles.buttonText} >{ text }<img src='download_pdf.svg' alt="Download PDF"></img></span>
    </button>
  )
}