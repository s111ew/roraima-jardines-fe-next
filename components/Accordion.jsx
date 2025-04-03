import { useState } from 'react'
import styles from '../styles/Accordion.module.css'

export default function Accordion({ title, content, location }) {
  const [isOpen, setIsOpen] = useState(false)

  function handleClick() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return(
    <div className={`${styles.accordion} ${styles[location] || ''}`} onClick={handleClick}>
      <div className={styles.accordionTop}>
        <p>{title}</p>
        <img src="/arrow_black.svg" alt="" style={isOpen ? {transform: 'rotateX(180deg)'} : null}/>
      </div>
      {isOpen ? content : ''}
    </div>
  )
}