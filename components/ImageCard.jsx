import styles from "../styles/ImageCard.module.css"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function ImageCard({ src, alt, width, height, caption, segment, style, rateOfScroll }) {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    if (!rateOfScroll) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxOffset = scrollY * (rateOfScroll - 1);
      setOffsetY(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [rateOfScroll]);

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
  };

  return (
    <div
      className={`${styles.container} ${segment === 1 ? styles.boxShadow1 : ''} ${segment === 2 ? styles.boxShadow2 : ''} ${segment === 3 ? styles.boxShadow3 : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        ...style,
        transform: rateOfScroll ? `translateY(${-offsetY}px)` : undefined,
        willChange: rateOfScroll ? 'transform' : undefined,
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
        <p className={styles.captionText}>{caption}</p>
      </div>
    </div>
  );
}
