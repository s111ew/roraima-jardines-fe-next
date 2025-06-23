import styles from "../styles/Button.module.css"
import { prefix } from "@/public/data/prefix";
import { useState } from "react";

function Button({ text, onClick, colour }) {
  const [isMoused, setIsMoused] = useState(false);

  const onMouseEnter = () => {
    if (!isMoused) {
      setIsMoused(true)
    }
  }

  const onMouseLeave = () => {
    if (isMoused) {
      setIsMoused(false)
    }
  }

  return (
    <div 
      className={`${styles.buttonBorder} ${styles[colour]}`}
      >
      <button
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick} 
        className={`${styles.buttonMain} ${styles[colour]}`}
        >
        <span 
          className={`${styles.buttonText} ${styles[colour]}`}
          >
          {text}
          <div 
            className={styles.iconContainer}
            >
            <div
              className={styles.iconWrapper}
              >
              <img
                className={`${styles.icon} ${styles.top} ${isMoused ? styles.animating : ''}`} 
                src={colour === 'green' ? `${prefix}/arrow_white.svg` : `${prefix}/arrow_black.svg`} 
                style={colour === 'white' ? { transform: 'rotate(-90deg)' } : undefined} 
                alt="arrow" 
              />
              <img 
                className={`${styles.icon} ${styles.bottom} ${isMoused ? styles.animating : ''}`} 
                src={colour === 'green' ? `${prefix}/arrow_white.svg` : `${prefix}/arrow_black.svg`} 
                style={colour === 'white' ? { transform: 'rotate(-90deg)' } : undefined} 
                alt="arrow" 
              />
            </div>
          </div>
        </span>
      </button>
    </div>
  );
}

export default Button;