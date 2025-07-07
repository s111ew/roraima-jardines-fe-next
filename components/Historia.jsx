import { prefix } from "@/public/data/prefix";
import styles from "../styles/Historia.module.css"
import ImageCard from "./ImageCard"
import { useState, useEffect } from "react"

export default function Historia() {
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
      <>
        <div 
          className={`${styles.section} ${styles.first}`}
          style={{
            backgroundImage: `url(${prefix}/Texture.png), var(--hero-background)`,
            backgroundRepeat: "repeat, no-repeat",
            backgroundSize: "auto, cover",
          }}>
          <div className={styles.contentContainer}>
            <h1 className={`${styles.pageTitle} fade-in`}>Nuestra Historia</h1>
            <p className="fade-in" style={{ animationDelay: "0.25s" }}>Somos una pequeña empresa familiar con experiencia en la producción de plantas ornamentales, mantenimiento de áreas verdes, diseño de jardines y producción de tierras desde 1983.</p>
            <p className="fade-in" style={{ animationDelay: "0.5s" }}>Nuestro trabajo está directamente relacionado con el cuidado y conservación del medio ambiente y éste es nuestro principal objetivo.</p>
              <div className={styles.imageContainerFirst}>
                <ImageCard
                    src={`${prefix}/historia_images/Story3.webp`}
                    width={pageWidth < 1200 ? 121/1.5 : 121}
                    height={pageWidth < 1200 ? 216/1.5 : 216}
                    alt="Primer plano de dos flores de Echinopsis blancas saliendo del mismo cáctus"
                    caption="Cáctus Echinopsis"
                    segment={1}
                    rateOfScroll={1.1}
                />
                  { pageWidth < 650 ? "" :
                    <ImageCard
                    className={styles.image}
                    src={`${prefix}/historia_images/Story11.webp`}
                    width={pageWidth < 1200 ? 479/1.5 : 479}
                    height={pageWidth < 1200 ? 222/1.5 : 222}
                    alt="Grupo de cáctus Echinopsis de diferentes tamaños con flores blancas y rosadas abiertas hacia el sol"
                    caption="Cáctus Echinopsis"
                    segment={1}
                  />}
                <ImageCard
                  src={`${prefix}/historia_images/Story1.webp`}
                  width={pageWidth < 1200 ? 163/1.5 : 163}
                  height={pageWidth < 1200 ? 122/1.5 : 122}
                  alt="Primer plano de flores de Echinopsis"
                  caption="Cáctus Echinopsis"
                  segment={1}
                  rateOfScroll={1.1}
                  direction={"down"}
                />
              </div>
            </div>
          </div>
        <div 
          className={`${styles.section} ${styles.second}`}
          style={{
            backgroundImage: `url(${prefix}/Texture.png), var(--product-segment-2-background)`,
            backgroundRepeat: "repeat, no-repeat",
            backgroundSize: "auto, cover",
          }}>
          <div className={styles.contentContainer}>
            <p className="fade-in" style={{ animationDelay: "0.75s" }}>Queremos contribuir a crear zonas verdes con un mínimo de impacto ambiental y un mayor ahorro de de agua. </p>
            <p className="fade-in" style={{ animationDelay: "1s" }}>Por eso desarrollamos productos 100% ecológicos, y así también equilibrar el desgaste que genera el abuso de abonos de origen químico.</p>
            <div className={styles.imageContainerSecond}>
              { pageWidth < 1200 ? '' :
                <ImageCard
                  className={styles.image}
                  src={`${prefix}/historia_images/Story 5.webp`}
                  width={257}
                  height={238}
                  alt="Diferentes variedades de cáctus y suculentas en diferentes tamaños plantados en el sustrato de Roraima Jardines"
                  caption="Cáctus espiral"
                  segment={2}
                  rateOfScroll={1.03}
                />
              }
              <ImageCard
                className={styles.image}
                src={`${prefix}/historia_images/Story 6.webp`}
                width={pageWidth < 1200 ? 185/1.5 : 185}
                height={pageWidth < 1200 ? 169/1.5 : 169}
                alt="Cáctus arcoiris"
                caption="Cáctus arcoiris"
                segment={2}
                direction={"down"}
                rateOfScroll={1.03}
              />
              { pageWidth < 521 ? '' :
                <ImageCard
                  className={styles.image}
                  src={`${prefix}/historia_images/Story7.webp`}
                  width={pageWidth < 1200 ? 208/1.5 : 208}
                  height={pageWidth < 1200 ? 267/1.5 : 267}
                  alt="Suculenta Euphorbia Meloformis de la variedad 'Variegata'"
                  caption="Euphorbia meloformis"
                  segment={2}
                  rateOfScroll={pageWidth < 1200 ? null : 1.03}
                />
              }
              <ImageCard
                className={styles.image}
                src={`${prefix}/historia_images/Story8.webp`}
                width={pageWidth < 1200 ? 204/1.5 : 204}
                height={pageWidth < 1200 ? 234/1.5 : 234}
                alt="Vista superior de un cáctus 'Eriocyse senilis' con espinas largas rizadas y flores rosadas"
                caption="Eriocyse senilis"
                segment={2}
                direction={pageWidth < 1200 ? null : "down"}
                rateOfScroll={1.03}
              />
            </div>
          </div>
        </div>
        <div 
          className={`${styles.section} ${styles.third}`}
          style={{
            backgroundImage: `url(${prefix}/Texture.png), var(--product-segment-3-background)`,
            backgroundRepeat: "repeat, no-repeat",
            backgroundSize: "auto, cover",
          }}>
          <div className={styles.contentContainer}>
            <p className="fade-in" style={{ animationDelay: "1.25s" }}>El origen de nuestro nombre viene del monte Roraima en Venezuela, una de las formaciones geológicas más antiguas de la Tierra, cuyas plantas y animales son únicos en el mundo.</p>
            <div className={styles.imageContainerThird}>
              <ImageCard
                className={styles.image}
                src={`${prefix}/historia_images/Story 10.webp`}
                width={613}
                height={407}
                alt="Monte Roraima en el Parque Nacional Canaima en Venezuela"
                caption="Monte Roraima, Venezuela"
                segment={3}
                isLink={true}
                href={"https://nikonites.com/forum/threads/roraima-tepuy.8488/#axzz3Qi5aOCHZ"}
              />
            </div>
          </div>
        </div>
      </>
  )
}