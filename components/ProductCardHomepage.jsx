import Button from "./Button"
import Link from "next/link"
import { useState, useEffect } from "react"
import styles from "../styles/ProductCardHomepage.module.css"
import Image from "next/image"

export default function ProductCard({ src, src2, alt, title, desc, sectionToScrollTo }) {
  const [isHovered, setIsHovered] = useState(false)
    const [pageWidth, setPageWidth] = useState(0);
    
      useEffect(() => {
        setPageWidth(window.innerWidth);
    
        function onResize() {
          setPageWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', onResize);
    
        onResize();
    
        return () => {
          window.removeEventListener('resize', onResize);
        };
      }, []);


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
      <Link href={`/productos${'#' + sectionToScrollTo}`} className={styles.cardImagesContainer}>
        <Image className={`${styles.cardImage} ${isHovered ? styles.hidden : ''}`} src={ src } alt={ alt } width={pageWidth > 1199 ? 407 : 303} height={pageWidth > 1199 ? 337 : 203.5} />
        <Image className={styles.cardImage} src={ src2 } alt={ alt } width={pageWidth > 1199 ? 407 : 303} height={pageWidth > 1199 ? 337 : 203.5} /> 
      </Link>  
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