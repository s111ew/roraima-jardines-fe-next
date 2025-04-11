import styles from '../styles/Footer.module.css'
import { useState, useEffect } from 'react'

export default function RollingText({ words }) {
  const [index, setIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length)
        setAnimating(false)
      }, 300)
    }, 5000)

    return () => clearInterval(interval)
  }, [words.length])

  return (
    <div className={styles.rollingText}>
      <h3 className={`${styles.word} ${animating ? styles.animate : ''}`}>
        {words[index]}
      </h3>
    </div>
  )
}