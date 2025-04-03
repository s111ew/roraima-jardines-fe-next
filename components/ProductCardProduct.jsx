import styles from "../styles/Productos.module.css"
import Accordion from "./Accordion"
import Button from "./Button"
import ImageCarousel from "./ImageCarousel"

export default function ProductCard({ isTitle, cardNumber, images, title, description, sizes, accordionTitlePrimary, accordionContentPrimary, accordionContentSecondary }) {
  return(
    <div className={styles.cardContainer}>
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
            title={accordionTitlePrimary}
            content={accordionContentPrimary}
            location='body'/>
          <Accordion 
            title='Producción'
            content={accordionContentSecondary}
            location='body'/>
        </div>
        <div className={styles.buttonContainer}>
          <Button text='Puntos de venta'/>
          <Button text='Haz tu jardín'/>
        </div>
      </div>
    </div>
  )
}