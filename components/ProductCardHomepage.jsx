import Button from "./Button"
import Link from "next/link"
import { useState } from "react"
import styles from "../styles/ProductCardHomepage.module.css"

export default function ProductCard({ src, src2, alt, title, desc, sectionToScrollTo }) {
  const [isHovered, setIsHovered] = useState(false)


  function onMouseEnter() {
    if (!isHovered) {
      setIsHovered(true)
    }
  }

  function onMouseLeave() {
    if (isHovered) {
      setIsHovered(false)
    }
  }

  return(
    <div className={styles.card} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className={styles.cardImagesContainer}>
        <img className={`${styles.cardImage} ${isHovered ? styles.hidden : ''}`} src={ src } alt={ alt } />
        <img className={styles.cardImage} src={ src2 } alt={ alt } />
      </div> 
      <div className={styles.cardText}>
        <div className={styles.cardTextContainer}>
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <Link href={`/productos${'#' + sectionToScrollTo}`}><Button text="Más Informatión" colour='green'/></Link>
      </div>
    </div>
  )
}