import styles from "../styles/TestimonialCard.module.css"

function TestimonalCard({text, logo, storeName, ownerName}) {
  return(
    <div className={styles.card}>
      <div className={styles.top}>
        <img className={`${styles.quote} ${styles.start}`} src='quoteIcon.svg' alt="" style={{transform: 'rotate(180deg)'}} />
        <p className={styles.body}>{text}</p>
        <img className={`${styles.quote} ${styles.end}`} src='quoteIcon.svg' alt="" />
      </div>
      <div className={styles.bottom}>
        <img className={styles.photo} src={logo} alt="" />
        <div className={styles.info}>
          <h3 className={styles.name}>{ownerName}</h3>
          <p className={styles.store}>{storeName}</p>
        </div>
      </div>
    </div>
  )
}

export default TestimonalCard