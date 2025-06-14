import styles from "../styles/ImageCard.module.css"
import { useState } from "react"
import Image from "next/image"

export default function ImageCard ({ src, alt, width, height, caption, segment, style}) {
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseEnter = () => {
    if (!isMouseEntered) {
      setIsMouseEntered(true)
    }
  }

  const handleMouseLeave = () => {
    if (isMouseEntered) {
      setIsMouseEntered(false)
    }
  }

  return (
    <div
      className={`${styles.container} ${segment === 1 ? styles.boxShadow1 : ''} ${segment === 2 ? styles.boxShadow2 : ''} ${segment === 3 ? styles.boxShadow3 : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: `${width}px`, 
        height: `${height}px`,
        ...style
      }}
    >
      <Image
        className={styles.image}
        src={src}
        alt={alt}
        width={width}
        height={height}
      />
      <div
        className={`${styles.caption} ${!isMouseEntered ? styles.hidden : ''} ${isMouseEntered ? styles.visible : ''}`}
        aria-hidden="true"
      >
        <p
          className={styles.captionText}
        >{caption}</p>
      </div>
    </div>
  )
}