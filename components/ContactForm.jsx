import Input from "./Input";
import Button from "./Button";
import styles from "../styles/ContactForm.module.css";
import { useState } from "react";
import { prefix } from "@/public/data/prefix";

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [validName, setValidName] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validMessage, setValidMessage] = useState(false);
  const [displayError, setDisplayError] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setValidName(value.trim().length > 0);
    if (displayError) {
      setDisplayError(false)
    }
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    const emailRegex = /^\S+@\S+\.\S+$/;
    setValidEmail(emailRegex.test(value.trim()));

    if (displayError) {
      setDisplayError(false)
    }
  };

  const handleMessageChange = (e) => {
    const value = e.target.value;
    setMessage(value);

    setValidMessage(value.trim().length > 0)

    if (displayError) {
      setDisplayError(false)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validName && validEmail && validMessage) {
      // HANDLE MESSAGE SEND HERE
      setIsSent(true);
      setName('');
      setEmail('');
      setMessage('');
      setValidName(false);
      setValidEmail(false);
      setValidMessage(false);

      if (displayError) {
        setDisplayError(false);
      }

      setTimeout(() => setIsSent(false), 5000);
    } else {
      setDisplayError(true);
    }
  };

  const handleClose = () => {
    setIsSent(false)
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={`${styles.successMessage} ${isSent ? styles.visible : ''}`}>
        <p onClick={handleClose} className={styles.closeButton}>X</p>
        <div className={styles.messageContainer}>
          <img className={styles.messageImage} src={`${prefix}/LogoBlk.svg`} alt="Logo" />
          <div className={styles.messageText}>
            <p>¡Gracias por tu mensaje!</p>
            <p>Hemos recibido tu consulta y te responderemos lo antes posible</p>
          </div>
        </div>
      </div>
      <Input isErr={displayError && !validName} onChange={handleNameChange} value={name} text="Nombre*" isTextArea={false} />
      <Input isErr={displayError && !validEmail} onChange={handleEmailChange} value={email} text="Email*" isTextArea={false} />
      <Input isErr={displayError && !validMessage} onChange={handleMessageChange} value={message} text="Mensaje*" isTextArea={true} />
      <Button text="Enviar mensaje" colour="green" />
    </form>
  );
}
