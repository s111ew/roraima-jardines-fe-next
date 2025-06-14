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

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return(
      <>
        <div className={`${styles.section} ${styles.first}`}>
          <div className={styles.contentContainer}>
            <h1 className={styles.pageTitle}>Nuestra Historia</h1>
            <p>Somos una pequeña empresa familiar con experiencia en la producción de plantas ornamentales, mantenimiento de áreas verdes, diseño de jardines y producción de tierras desde 1983.</p>
            <p>Nuestro trabajo está directamente relacionado con el cuidado y conservación del medio ambiente y éste es nuestro principal objetivo.</p>
            <div className={styles.imageContainerFirstParent}>
              <div className={styles.imageContainerFirstTop}>
                <ImageCard
                  src='/historia_images/Story1.jpg'
                  height={122}
                  width={163}
                  alt="Primer plano de flores de Echinopsis"
                  caption="Cáctus Echinopsis"
                  segment={1}
                />
              </div>
              <div className={styles.imageContainerFirstBottom}>
                <ImageCard
                    src='/historia_images/Story3.jpg'
                    width={121}
                    height={216}
                    alt="Primer plano de dos flores de Echinopsis blancas saliendo del mismo cáctus"
                    caption="Cáctus Echinopsis"
                    segment={1}
                />
                <ImageCard
                    className={styles.image}
                    src='/historia_images/Story11.jpg'
                    width={479}
                    height={222}
                    alt="Grupo de cáctus Echinopsis de diferentes tamaños con flores blancas y rosadas abiertas hacia el sol"
                    caption="Cáctus Echinopsis"
                    segment={1}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.second}`}>
          <div className={styles.contentContainer}>
            <p>Queremos contribuir a crear zonas verdes con un mínimo de impacto ambiental y un mayor ahorro de de agua. </p>
            <p>Por eso desarrollamos productos 100% ecológicos, y así también equilibrar el desgaste que genera el abuso de abonos de origen químico.</p>
            <div className={styles.imageContainerSecond}>
              {pageWidth >= 1200 ? (
                <>
                  <ImageCard
                      className={styles.image}
                      src='/historia_images/Story 5.jpg'
                      width={257}
                      height={238}
                      alt="Diferentes variedades de cáctus y suculentas en diferentes tamaños plantados en el sustrato de Roraima Jardines"
                      caption="Cáctus espiral"
                      segment={2}
                  />
                  <ImageCard
                      className={styles.image}
                      src='/historia_images/Story 6.jpg'
                      width={185}
                      height={169}
                      alt="Cáctus arcoiris"
                      caption="Cáctus arcoiris"
                      segment={2}
                  />
                  <ImageCard
                      className={styles.image}
                      src='/historia_images/Story7.jpg'
                      width={208}
                      height={267}
                      alt="Suculenta Euphorbia Meloformis de la variedad 'Variegata'"
                      caption="Euphorbia meloformis"
                      segment={2}
                  />
                  <ImageCard
                      className={styles.image}
                      src='/historia_images/Story8.jpg'
                      width={204}
                      height={234}
                      alt="Vista superior de un cáctus 'Eriocyse senilis' con espinas largas rizadas y flores rosadas"
                      caption="Eriocyse senilis"
                      segment={2}
                  />
                </>
              ) : (
                <>
                  <div className={styles.imageContainerSecondTop}>
                    <ImageCard
                        className={styles.image}
                        src='/historia_images/Story 5.jpg'
                        width={257}
                        height={238}
                        alt="Diferentes variedades de cáctus y suculentas en diferentes tamaños plantados en el sustrato de Roraima Jardines"
                        caption="Cáctus espiral"
                        segment={2}
                    />
                    <ImageCard
                        className={styles.image}
                        src='/historia_images/Story 6.jpg'
                        width={185}
                        height={169}
                        alt="Cáctus arcoiris"
                        caption="Cáctus arcoiris"
                        segment={2}
                    />
                  </div>
                  <div className={styles.imageContainerSecondBottom}>
                    <ImageCard
                        className={styles.image}
                        src='/historia_images/Story7.jpg'
                        width={208}
                        height={267}
                        alt="Suculenta Euphorbia Meloformis de la variedad 'Variegata'"
                        caption="Euphorbia meloformis"
                        segment={2}
                    />
                    <ImageCard
                        className={styles.image}
                        src='/historia_images/Story8.jpg'
                        width={204}
                        height={234}
                        alt="Vista superior de un cáctus 'Eriocyse senilis' con espinas largas rizadas y flores rosadas"
                        caption="Eriocyse senilis"
                        segment={2}
                    />
                  </div>
                </>
              )}
              </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.third}`}>
          <div className={styles.contentContainer}>
            <p>El origen de nuestro nombre viene del monte Roraima en Venezuela, una de las formaciones geológicas más antiguas de la Tierra, cuyas plantas y animales son únicos en el mundo.</p>
            <div className={styles.imageContainerThird}>
              <ImageCard
                className={styles.image}
                src='/historia_images/Story 10.jpg'
                width={613}
                height={407}
                alt="Monte Roraima en el Parque Nacional Canaima en Venezuela"
                caption="Monte Roraima, Venezuela"
                segment={3}
              />
            </div>
          </div>
        </div>
      </>
  )
}