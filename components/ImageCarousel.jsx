import { useEffect, useRef } from "react";
import styles from "../styles/ImageCarousel.module.css";

export default function ImageCarousel({ images }) {
  const imageContainerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const options = {
      root: imageContainerRef.current,
      rootMargin: "0px",
      threshold: 1.0,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          addActiveStyle(entry.target.id);
        }
      });
    }, options);

    const imageElements = document.querySelectorAll(`.${styles.image}`);
    imageElements.forEach((img) => observerRef.current.observe(img));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  function addActiveStyle(id) {
    const dotId = id.split("-")[1];
    const dotToTarget = document.querySelector(`#dot-${dotId}`);

    document.querySelectorAll(`.${styles.active}`).forEach((dot) => {
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
            id={`image-${index + 1}`}
            className={styles.image}
            key={image.key}
            src={image.src}
          />
        ))}
      </div>
      <div className={styles.legend}>
        {images.map((image, index) => (
          <div id={`dot-${index + 1}`} className={styles.dot} key={image.key}></div>
        ))}
      </div>
    </div>
  );
}
