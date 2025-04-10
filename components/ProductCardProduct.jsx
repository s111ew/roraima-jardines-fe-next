import Link from "next/link"
import styles from "../styles/Productos.module.css"
import Accordion from "./Accordion"
import Button from "./Button"
import ImageCarousel from "./ImageCarousel"

export default function ProductCard({ isTitle, cardNumber, images, title, description, sizes, accordionTitlePrimary, accordionContentPrimary, accordionContentSecondary }) {
  return(
    <div id={`${title.split(' ')[0].toLowerCase()}`} className={styles.cardContainer}>
      {isTitle ? <h1 className={styles.title}>Nuestros Productos</h1> : ''}
      <div id={`card-${cardNumber}`} className={styles.card}>
        <ImageCarousel cardNumber={cardNumber} images={images}/>
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
            title='Producción'
            content={accordionContentSecondary}
            location='body'/>
        </div>
        <div className={styles.buttonContainer}>
          <Link href='/puntos_de_venta'><Button text="Puntos de venta" /></Link>
          <Link href='/jardin'><Button text="Haz tu jardín" /></Link>
        </div>
      </div>
    </div>
  )
}