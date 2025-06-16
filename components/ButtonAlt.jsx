import styles from "../styles/ButtonAlt.module.css"
import { prefix } from "@/public/data/prefix"

export default function ButtonAlt({ text, onClick }) {
  return(
    <button onClick={onClick} className={styles.button}>
      <span className={styles.buttonText} >{ text }<img src={`${prefix}/download_pdf.svg`} alt="Download PDF"></img></span>
    </button>
  )
}