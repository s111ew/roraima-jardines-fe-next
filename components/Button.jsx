import styles from "../styles/Button.module.css"

function Button({ text, onClick, colour }) {
  return (
    <div className={`${styles.buttonBorder} ${styles[colour]}`}>
      <button onClick={onClick} className={`${styles.buttonMain} ${styles[colour]}`}>
        <span className={`${styles.buttonText} ${styles[colour]}`}>
          {text} <img src={colour === 'green' ? 'arrow_white.svg' : 'arrow_black.svg'} style={colour === 'white' ? { transform: 'rotate(-90deg)' } : undefined} alt="arrow" />
        </span>
      </button>
    </div>
  );
}

export default Button;