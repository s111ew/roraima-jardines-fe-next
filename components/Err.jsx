import Button from "../components/Button"
import Link from "next/link"
import ImageCard from "./ImageCard"
import { useState, useEffect } from "react";
import { prefix } from "@/public/data/prefix";
import styles from "../styles/Err.module.css"
import notFoundText from "@/public/data/text/notFound";

function Error() {
  const [pageWidth, setPageWidth] = useState(0);
  
    useEffect(() => {
      setPageWidth(window.innerWidth);
  
      function onResize() {
        setPageWidth(window.innerWidth);
      }
  
      window.addEventListener('resize', onResize);
  
      onResize();

      const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
          el.classList.add('animate');
        });
  
      return () => {
        window.removeEventListener('resize', onResize);
      };
    }, []);

  return(
    <section 
      className={styles.err}
      style={{
        backgroundImage: `url(${prefix}/Texture.png), var(--hero-background)`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, cover",
      }}>
      <div className={styles.mainContainer}>
        <h1 className={`fade-in ${styles.title}`} style={{ animationDelay: '0s' }}>{notFoundText.title}</h1>
        <p className={`fade-in ${styles.subTitle}`} style={{ animationDelay: '0.5s' }}>{notFoundText.subtitle}</p>
        <Link className={styles.link} href='/productos'><Button text="Nuestros productos" colour='green'/></Link>
      </div>
      <div className={styles.imageContainer}>
        { pageWidth < 670 ? "" :
          <>
            <ImageCard
              src={`${prefix}/not_found_images/NF4.webp`}
              alt={"Plantas aptenias en diferentes etapas de crecimiento en macetas pequeñas con Sustrato Universal"}
              caption={"Aptenias"}
              width={pageWidth < 1200 ? 173 : 259}
              height={pageWidth < 1200 ? 155 : 233}
              segment={1}
              rateOfScroll={1.1}
            />
            <ImageCard
              src={`${prefix}/not_found_images/NF3.webp`}
              alt={"Sustrato Universal"}
              caption={"Sustrato Universal"}
              width={pageWidth < 1200 ? 127 : 190}
              height={pageWidth < 1200 ? 177 : 265}
              segment={1}
              rateOfScroll={1.1}
              direction={"down"}
            />
          </>
        }
        <ImageCard
          src={`${prefix}/not_found_images/NF2.webp`}
          alt={"Aptenias en una bandeja de plántulas"}
          caption={"Aptenias"}
          width={pageWidth < 1200 ? 124 : 187}
          height={pageWidth < 1200 ? 172 : 258}
          segment={1}
          rateOfScroll={1.1}
        />
        <ImageCard
          src={`${prefix}/not_found_images/NF1.webp`}
          alt={"Aptenias recién plantadas en una bandeja de plántulas"}
          caption={"Aptenias"}
          width={pageWidth < 1200 ? 137 : 205}
          height={pageWidth < 1200 ? 209 : 313}
          segment={1}
          rateOfScroll={1.1}
          direction={"down"}
        />
      </div>
    </section>
  )
}

export default Error