import styles from "../styles/Footer.module.css"
import RollingText from "./RollingText"
import Accordion from "./Accordion"
import { prefix } from "@/public/data/prefix"
import ContactForm from "./ContactForm"

function Footer() {
  const rollingWords = ['plantas', 'rosales', 'siembras', 'vegetales', 'frutos', 'jardín']

  return (
    <footer className={`${styles.footer} section`}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h3>Damos vida a tus <RollingText words={rollingWords} /></h3>
        </div>
        <div className={styles.middle}>
          <h4 className={styles.subtitle}>Consulta Con Nosotros</h4>
          <div className={styles.formContainer} >
            <p className={styles.contactInfo}>
              <span>Si necesitas contactarnos por algo, escríbenos aquí y te responderemos lo antes posible.</span>
              <span>También puedes llamarnos o visitarnos:</span>
              <span>Teléfono<br></br>+34 616626407</span>
            </p>
            <ContactForm />
            </div>
          </div>
        <div className={styles.socialMediaContainer}>
          <h2>Síguenos en redes</h2>
          <div className={styles.socialMediaLinks}>
            <div className={styles.socialMediaLink}>
              <img src={`${prefix}/facebook_black.svg`}></img>
              <span>Facebook</span>
            </div>
            <div className={styles.socialMediaLink}>
              <img src={`${prefix}/instagram_black.svg`}></img>
              <span>Instagram</span>
            </div>
          </div>
        </div>
        <div className={styles.creditContainer}>
          <span>Copyright © 2025 Roraima Jardines</span>
          <Accordion
            isOpenDefault={false}
            title='Créditos de página web' 
            content={
              <>
                <p>Diseño: <a href="" target="_blank" noreferrer>suh.ai</a></p>
                <p>Desarrollo: <a href="" target="_blank" noreferrer>sam.tips</a></p>
                <p>Desarrollo y mantenimiento: <a href="https://esmarketingzaragoza.es/" target="_blank" noreferrer>esmarketingzaragoza</a></p>
              </>
            }
            location="footer"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer