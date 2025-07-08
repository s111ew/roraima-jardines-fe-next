import Button from "../components/Button"
import Link from "next/link"
import ImageCard from "./ImageCard"
import { useState, useEffect } from "react";
import { prefix } from "@/public/data/prefix";
import heroText from "@/public/data/text/hero";
import styles from "@/styles/Hero.module.css"

function Hero() {
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
      className={styles.hero}
      style={{
        backgroundImage: `url(${prefix}/Texture.png), var(--hero-background)`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, cover",
      }}>
      <ImageCard
        src={`${prefix}/homepage_images/HP3.webp`}
        alt={"Una planta aptenia con flores rosadas de cerca"}
        caption={"Aptenia"}
        width={pageWidth < 1200 ? 144 : 216}
        height={pageWidth < 1200 ? 109 : 163}
        segment={1}
        rateOfScroll={pageWidth < 1200 ? 1.1 : 1.2}
        direction={pageWidth < 1200 ? "down" : null}
        style={{
          position: "absolute",
          right: pageWidth < 521 ? "35px" : "259px",
          top: pageWidth < 1200 ? "215px" : "176px"
        }}
      />
      <ImageCard
        src={`${prefix}/homepage_images/HP4.webp`}
        alt={"Varias plantas aptenias floreadas de tamaño mediano"}
        caption={"Aptenias"}
        width={122}
        height={147}
        segment={1}
        rateOfScroll={pageWidth < 521 ? 1.1 : 1.25}
        direction={"down"}
        style={{
          position: "absolute",
          right: pageWidth < 521 ? "45px"  : "117px",
          top: pageWidth < 1200 ? (pageWidth < 521 ? "1245px"  : "683px") : "276px"
        }}
      />
      <ImageCard
        src={`${prefix}/homepage_images/HP1.webp`}
        alt={"Planta Jade adulta rodeada por plantas similares de menor tamaño"}
        caption={"Jade"}
        width={122}
        height={160}
        segment={1}
        rateOfScroll={pageWidth < 521 ? 1.1 : 1.15}
        style={{
          position: "absolute",
          left: pageWidth < 521 ? "55px" : "64px",
          top: pageWidth < 1200 ? (pageWidth < 521 ? "626px"  : "641px") : "516px"
        }}
      />
      <ImageCard
        src={`${prefix}/homepage_images/HP2.webp`}
        alt={"Primer plano de las hojas de una planta Jade con los bordes rojizos"}
        caption={"Jade"}
        width={145}
        height={205}
        segment={1}
        rateOfScroll={pageWidth < 1200 ? 1.1 : 1.05}
        direction={pageWidth < 1200 ? null : "down"}
        style={{
          position: "absolute",
          left: pageWidth < 1200 ? pageWidth < 521 ? "35px" : "75px" : undefined,
          right: pageWidth < 1200 ? undefined  : "75px",
          top: pageWidth < 1200 ? (pageWidth < 521 ? "1450px"  : "1083px") : "782px"
        }}
      />
      <div className={styles.mainContainer}>
        <h1 className={`${styles.title} fade-in`} style={{ animationDelay: '0s' }}>{heroText.title}</h1>
        <div className={styles.callToAction}>
          <p className="fade-in" style={{ animationDelay: '0.5s' }}>{heroText.subtitle}</p>
          <Link className={styles.callToActionLink} href='/puntos_de_venta'><Button text={heroText.buttonText} colour='green'/></Link>
        </div>
        <div className={`${styles.informationContainer} fade-in`} style={{ animationDelay: '1s' }}>
          <div className={styles.information}>
            <h2>{heroText.information[0].title}</h2>
            <p>{heroText.information[0].subtitle}</p>
          </div>
          <div className={styles.information}>
            <h2>{heroText.information[1].title}</h2>
            <p>{heroText.information[1].subtitle}</p>
          </div>
          <div className={styles.information}>
            <h2>{heroText.information[2].title}</h2>
            <p>{heroText.information[2].subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero