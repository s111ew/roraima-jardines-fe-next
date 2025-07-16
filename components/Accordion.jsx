import { useState } from 'react'
import styles from '../styles/Accordion.module.css'


export default function Accordion({ isOpenDefault, title, content, location }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault)

  function handleClick() {
    isOpen ? setIsOpen(false) : setIsOpen(true)
  }

  return(
    <div className={`${styles.accordion} ${styles[location] || ''}`} onClick={handleClick}>
      <div className={styles.accordionTop}>
        <p>{title}</p>
        <div 
            className={styles.iconContainer}
            >
            <div
              className={styles.iconWrapper}
              >
              <img
                className={`${styles.icon} ${styles.top} ${isOpen ? styles.animating : ''}`} 
                src={`/arrow_black.svg`} 
                alt="arrow" 
              />
              <img 
                className={`${styles.icon} ${styles.bottom} ${isOpen ? styles.animating : ''}`} 
                src={`/arrow_black.svg`}
                alt="arrow"
              />
            </div>
          </div>
      </div>
        <div className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}>{content}</div>
    </div>
  )
}