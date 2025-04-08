import styles from "../styles/PuntosDeVenta.module.css"
import Button from "./Button"
import Input from "./Input"
import { useState } from "react"

export default function PuntosDeVenta() {
  const [zipCode, updateZipCode] = useState(null)
  
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
            <Input text={'Código Postal'}/>
            <Button text={'Buscar'} />
        </div>
        <div className={styles.mapsContainer}>

        </div>
      </div>
    </>
  )
}