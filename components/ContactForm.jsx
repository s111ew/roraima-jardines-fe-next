import Input from "./Input";
import Button from "./Button";
import styles from "../styles/ContactForm.module.css"
import { useState } from "react";
import { prefix } from '@/public/data/prefix';

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    setIsSent(true);

    setTimeout(() => setIsSent(false), 5000)
  }

  return(
    <form onSubmit={(e) => handleSubmit(e)} className={styles.form} action="">
      <div className={`${styles.successMessage} ${isSent ? styles.visible : ''}`}>
        <div className={styles.messageContainer}>
          <img className={styles.messageImage} src={`${prefix}/LogoBlk.svg`}></img>
          <div className={styles.messageText}>
            <p>¡Gracias por tu mensaje!</p>
            <p>Hemos recibido tu consulta y te responderemos lo antes posible</p>
          </div>
        </div>
      </div>
      <Input text="Nombre*" isTextArea={false} />
      <Input text="Email*" isTextArea={false} />
      <Input text="Mensaje*" isTextArea={true} />
      <Button text="Enviar mensaje" colour='green' />
    </form>
  )
}