import Link from "next/link"
import styles from "../styles/Productos.module.css"
import Accordion from "./Accordion"
import Button from "./Button"
import ImageCarousel from "./ImageCarousel"
import { useState, useEffect } from "react"

export default function ProductCard({ cardNumber, images, altImages, title, description, sizes, accordionTitlePrimary, accordionContentPrimary, accordionTitleSecondary, accordionContentSecondary }) {
  const [pageWidth, setPageWidth] = useState(0);
      
  useEffect(() => {
    setPageWidth(window.innerWidth);

    function onResize() {
      setPageWidth(window.innerWidth);
    }

    window.addEventListener('resize', onResize);

    onResize()

    return () => {
      window.removeEventListener('resize', onResize);
    };

  }, []);

  return(
    <div id={`card-${cardNumber}`} className={styles.card}>
      <ImageCarousel cardNumber={cardNumber} images={pageWidth < 1200 && altImages ? altImages : images}/>
      <div className={styles.informationContainer}>
        <h2>{title}</h2>
        <p>{description}</p>
        {sizes ? <p>Presentaciones: {sizes}</p> : ''}
      </div>
      <div className={styles.accordionContainer}>
        <Accordion 
          isOpenDefault={false}
          title={accordionTitlePrimary}
          content={accordionContentPrimary}
          location='body'/>
        <Accordion 
          isOpenDefault={false}
          title={accordionTitleSecondary}
          content={accordionContentSecondary}
          location='body'/>
      </div>
      <div className={styles.buttonContainer}>
        <Link href='/puntos_de_venta'><Button text="Puntos de venta" colour='green' /></Link>
        <Link href='/jardin'><Button text="Haz tu jardín" colour='white' /></Link>
      </div>
    </div>
  )
}