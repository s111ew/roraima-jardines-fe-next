import { useEffect, useRef } from "react";
import styles from "../styles/ImageCarousel.module.css";

export default function ImageCarousel({ cardNumber, images }) {
  const imageContainerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => addActiveStyle(`image-${cardNumber}-1`), 100)
    
    const options = {
      root: imageContainerRef.current,
      rootMargin: "0px",
      threshold: 0.5,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addActiveStyle(entry.target.id);
        }
      });
    }, options);

    const imageElements = document.querySelectorAll(`.${CSS.escape(styles.image)}[data-card="${cardNumber}"]`);
    imageElements.forEach((img) => observerRef.current.observe(img));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  function addActiveStyle(id) {
    const dotId = id.split("-")[2];
    const dotToTarget = document.querySelector(`#dot-${cardNumber}-${dotId}`);

    document.querySelectorAll(`.${CSS.escape(styles.active)}[data-card="${cardNumber}"]`).forEach((dot) => {
      dot.classList.remove(styles.active);
    });

    if (dotToTarget) {
      dotToTarget.classList.add(styles.active);
    }
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer} ref={imageContainerRef}>
        {images.map((image, index) => (
          <img
            id={`image-${cardNumber}-${index + 1}`}
            className={styles.image}
            data-card={cardNumber}
            key={image.key}
            src={image.src}
          />
        ))}
      </div>
      <div className={styles.legend}>
        {images.map((image, index) => (
          <div id={`dot-${cardNumber}-${index + 1}`} className={styles.dot} data-card={cardNumber} key={image.key}></div>
        ))}
      </div>
    </div>
  );
}
