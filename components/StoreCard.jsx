import styles from "../styles/StoreCard.module.css"
import Accordion from "./Accordion"
import Button from "./Button"

export default function StoreCard({ index, storeName, distance, address, zip, phone, isLink, email, hours, sizes, link }) {
  let emailContent
  if (!email) {
    emailContent = ''
  } else if (email && !isLink) {
    emailContent = <p className={styles.email}>{email}</p>
  } else if (email && isLink) {
    emailContent = <a className={styles.emailLink} href={email}><p className={styles.email}>{email}</p></a>
  }
  return(
    <div className={styles.storeCard}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>
          <div className={styles.bubble}>{index + 1}</div>
          <h2 className={styles.name}>{storeName}</h2>
        </div>
        {distance ? <p className={styles.distance}>a {distance}km de distancia</p> : ''}
      </div>
      <div className={styles.locationContainer}>
        <p className={styles.address}>{address}</p>
        <p className={styles.zip}>{zip}</p>
      </div>
      <p className={styles.phone}>{phone}</p>
      {emailContent}
      <Accordion
        isOpenDefault={false} 
        title='Horario' 
        location='body' 
        content={
          <div className={styles.hours}>
            <div className={styles.day}>
              <p>Lunes:</p>
              <p>{hours.lunes}</p>
            </div>
            <div className={styles.day}>
              <p>Martes:</p>
              <p>{hours.martes}</p>
            </div>
            <div className={styles.day}>
              <p>Miercoles:</p>
              <p>{hours.miercoles}</p>
            </div>
            <div className={styles.day}>
              <p>Jueves:</p>
              <p>{hours.jueves}</p>
            </div>
            <div className={styles.day}>
              <p>Viernes:</p>
              <p>{hours.viernes}</p>
            </div>
            <div className={styles.day}>
              <p>Sabado:</p>
              <p>{hours.sabado}</p>
            </div>
            <div className={styles.day}>
              <p>Domingo:</p>
              <p>{hours.domingo}</p>
            </div>
          </div>
        }
        />
      <div className={styles.sizeContainer}>
        <p>Productos disonibles</p>
        <div className={styles.sizes}>
          {sizes[0] ? <div className={styles.sustrato}>
            <div className={styles.sustratoKey}>
              <div className={`${styles.dot} ${styles.green}`}></div>
              <p>Sustrato</p>
            </div>
            <p>{sizes[0]}</p>
          </div> : ''}
          {sizes[1] ? <div className={styles.huerto}>
            <div className={styles.huertoKey}>
              <div className={`${styles.dot} ${styles.black}`}></div>
              <p>Huerto</p>
            </div>
            <p>{sizes[1]}</p>
          </div> : ''}
        </div>
      </div>
      <a className={styles.link} href={link} target="_blank">
        <Button text='Cómo llegar' />
      </a>
    </div>
  )
}