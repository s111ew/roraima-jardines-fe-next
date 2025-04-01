import styles from "../styles/ImageCarousel.module.css"

export default function ImageCarousel({ images }) {
  const imagesToDisplay = images.map(image => (
    <img className={styles.image} key={image.key} src={image.src}></img>
  ))

  const dots = images.map(image => (
    <div className={styles.dot} key={image.key}></div>
  ))

  return(
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        {imagesToDisplay}
      </div>
      <div className={styles.legend}>
        {dots}
      </div>
    </div>
  )
}