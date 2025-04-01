import styles from "../styles/Productos.module.css"
import Button from "./Button"
import ImageCarousel from "./ImageCarousel"

export default function ProductCard({ images, title, description, sizes, }) {
  return(
    <div className={styles.card}>
      <ImageCarousel images={images}/>
      <div className={styles.informationContainer}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Presentaciones: {sizes}</p>
      </div>
      <div className={styles.accordionContainer}>

      </div>
      <div className={styles.buttonContainer}>
        <Button text='Puntos de venta'/>
        <Button text='Haz tu jardín'/>
      </div>
    </div>
  )
}