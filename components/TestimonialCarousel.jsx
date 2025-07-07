import { useEffect, useRef } from "react";
import styles from "../styles/TestimonialCarousel.module.css";
import TestimonialCard from "./TestimonialCard";

export default function TestimonialCarousel({ carouselId, testimonials }) {
  const containerRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {

    function addActiveStyle(index) {
      const dotToActivate = containerRef.current?.querySelector(`#dot-${carouselId}-${index}`);

      containerRef.current?.querySelectorAll(`.${styles.dot}.${styles.active}`)
        .forEach((dot) => dot.classList.remove(styles.active));

      if (dotToActivate) {
        dotToActivate.classList.add(styles.active);
      }
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1,
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const parts = entry.target.id.split("-");
          const index = parts[2];
          addActiveStyle(index);
        }
      });
    }, options);

    const testimonialElements = containerRef.current.querySelectorAll(`.${styles.card}`);
    testimonialElements.forEach((el) => observerRef.current.observe(el));

    // Set 2nd dot active by default (after a brief delay)
    setTimeout(() => {
      const cardContainer = containerRef.current.querySelector(`.${styles.cardContainer}`);
      const testimonialCards = containerRef.current.querySelectorAll(`.${styles.card}`);

      if (cardContainer && testimonialCards.length >= 2) {
        const secondCard = testimonialCards[0]; // index 1 = second
        const scrollAmount = secondCard.offsetLeft;

        cardContainer.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        })
      }
    }, 100);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className={styles.carousel} ref={containerRef}>
      <div className={styles.cardContainer}>
        {testimonials.map((testimonial, index) => (
          <div
            id={`testimonial-${carouselId}-${index + 1}`}
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
            id={`dot-${carouselId}-${index + 1}`}
            className={styles.dot}
            key={`dot-${carouselId}-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
