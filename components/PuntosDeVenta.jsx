import styles from "../styles/PuntosDeVenta.module.css"
import Button from "./Button"
import Input from "./Input"
import { useState } from "react"
import StoreCard from "./StoreCard"
import stores from "@/public/data/stores"

export default function PuntosDeVenta() {
  const [zipCode, updateZipCode] = useState(null)
  const storeCards = stores.map(store =>
    <StoreCard
      key={store.index}
      index={store.index}
      storeName={store.name}
      distance={'0'}
      address={store.street}
      zip={store.zip}
      phone={store.tel}
      isLink={store.isLink}
      email={store.email}
      hours={store.hours}
      sizes={store.products}
      link={store.mapsLink}
    />
  )

  return(
    <>
      <div className={`${styles.section} ${styles.intro}`}>
        <h1>Puntos De Venta</h1>
        <div className={styles.introTextContainer}>
          <p>Estamos en venta exclusivamente en los siguientes pequeños comercios y viveros.</p>
          <p>Introduce tu código postal en el buscador para encontrar tu tienda más próxima.</p>
        </div>
      </div>
      <div className={`${styles.section} ${styles.body}`}>
        <div className={styles.inputContainer}>
            <Input text={'Código Postal'} />
            <Button text={'Buscar'} />
        </div>
        <div className={styles.mapsContainer}>
          <div className={styles.storeCardContainer}>
            {storeCards}
          </div>
          <div className={styles.mapPlaceholder}></div>
        </div>
      </div>
    </>
  )
}