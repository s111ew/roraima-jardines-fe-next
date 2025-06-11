import styles from "../styles/Historia.module.css"
import Image from "next/image"

export default function Historia() {
  return(
      <>
        <div className={`${styles.section} ${styles.first}`}>
          <div className={styles.contentContainer}>
            <h1 className={styles.pageTitle}>Nuestra Historia</h1>
            <p>Somos una pequeña empresa familiar con experiencia en la producción de plantas ornamentales, mantenimiento de áreas verdes, diseño de jardines y producción de tierras desde 1983.</p>
            <p>Nuestro trabajo está directamente relacionado con el cuidado y conservación del medio ambiente y éste es nuestro principal objetivo.</p>
            <div className={styles.imageContainerFirstParent}>
              <div className={styles.imageContainerFirstTop}>
                <Image
                  className={styles.image}
                  src='/historia_images/Story1.jpg'
                  height={122}
                  width={163}
                  alt=""
                />
              </div>
              <div className={styles.imageContainerFirstBottom}>
                <Image
                    className={styles.image}
                    src='/historia_images/Story4.jpg'
                    width={259}
                    height={253}
                    alt=""
                />
                <Image
                    className={styles.image}
                    src='/historia_images/Story3.jpg'
                    width={121}
                    height={216}
                    alt=""
                />
                <Image
                    className={styles.image}
                    src='/historia_images/Story2.jpg'
                    width={222}
                    height={391}
                    alt=""
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
                <Image
                    className={styles.image}
                    src='/historia_images/Story 5.jpg'
                    width={257}
                    height={238}
                    alt=""
                />
                <Image
                    className={styles.image}
                    src='/historia_images/Story 6.jpg'
                    width={185}
                    height={169}
                    alt=""
                />
                <Image
                    className={styles.image}
                    src='/historia_images/Story7.jpg'
                    width={208}
                    height={267}
                    alt=""
                />
                <Image
                    className={styles.image}
                    src='/historia_images/Story8.jpg'
                    width={204}
                    height={234}
                    alt=""
                />
              </div>
          </div>
        </div>
        <div className={`${styles.section} ${styles.third}`}>
          <div className={styles.contentContainer}>
            <p>El origen de nuestro nombre viene del monte Roraima en Venezuela, una de las formaciones geológicas más antiguas de la Tierra, cuyas plantas y animales son únicos en el mundo.</p>
            <div className={styles.imageContainerThird}>
              <Image
                className={styles.image}
                src='/historia_images/Story 10.jpg'
                width={613}
                height={407}
                alt=""
              />
            </div>
          </div>
        </div>
      </>
  )
}