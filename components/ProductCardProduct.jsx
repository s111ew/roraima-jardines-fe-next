import Link from "next/link"
import styles from "../styles/Productos.module.css"
import Accordion from "./Accordion"
import Button from "./Button"
import ImageCarousel from "./ImageCarousel"

export default function ProductCard({ isTitle, cardNumber, images, title, description, sizes, accordionTitlePrimary, accordionContentPrimary, accordionContentSecondary }) {
  return(
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
        <Link href='/puntos_de_venta'><Button text="Puntos de venta" colour='green' /></Link>
        <Link href='/jardin'><Button text="Haz tu jardín" colour='white' /></Link>
      </div>
    </div>
  )
}