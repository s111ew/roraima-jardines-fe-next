import { useEffect, useRef } from "react";
import styles from "../styles/TestimonialCarousel.module.css";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialCarousel({ testimonials }) {
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => addActiveStyle(`testimonial-2`), 100); // highlight 2nd by default

    const options = {
      root: containerRef.current,
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

    const testimonialElements = document.querySelectorAll(`.${CSS.escape(styles.card)}`);
    testimonialElements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  function addActiveStyle(id) {
    const parts = id.split("-");
    const index = parts[1]; // id = "testimonial-2", get 2
    const dotToActivate = document.querySelector(`#dot-${index}`);

    document.querySelectorAll(`.${CSS.escape(styles.dot)}.${CSS.escape(styles.active)}`)
      .forEach((dot) => {
        dot.classList.remove(styles.active);
      });

    if (dotToActivate) {
      dotToActivate.classList.add(styles.active);
    }
  }

  return (
    <div className={styles.carousel}>
      <div className={styles.cardContainer} ref={containerRef}>
        {testimonials.map((testimonial, index) => (
          <div
            id={`testimonial-${index + 1}`}
            className={styles.card}
            key={index}
          >
            <TestimonialCard
              text={testimonial.text}
              logo={testimonial.logo}
              storeName={testimonial.storeName}
              ownerName={testimonial.ownerName}
            />
          </div>
        ))}
      </div>
      <div className={styles.legend}>
        {testimonials.map((_, index) => (
          <div
            id={`dot-${index + 1}`}
            className={`${styles.dot}`}
            key={`dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
