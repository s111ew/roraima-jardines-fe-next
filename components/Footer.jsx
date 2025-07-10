import styles from "../styles/Footer.module.css"
import RollingText from "./RollingText"
import Accordion from "./Accordion"
import { prefix } from "@/public/data/prefix"
import ContactForm from "./ContactForm"
import footerText from "@/public/data/text/footer"

function Footer() {

  const bodyText = footerText.bodyText.map(text => {
    return(
      <span>{text}</span>
    )
  })

  const creditText = footerText.credit.map(credit => {
    return(
      <p>{credit.title}<a href={credit.link} target="_blank" noreferrer="true">{credit.linkBody}</a></p>
    )
  })

  return (
    <footer 
      id="footer" 
      className={`${styles.footer} section`}
      style={{
        backgroundImage: `url(${prefix}/Texture.png), var(--footer-background)`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, cover",
      }}>
      <div className={styles.content}>
        <div className={styles.top}>
          <h3>{footerText.pre}<RollingText words={footerText.rollingText} /></h3>
        </div>
        <div className={styles.middle}>
          <h4 className={styles.subtitle}>{footerText.title}</h4>
          <div className={styles.formContainer} >
            <p className={styles.contactInfo}>
              {bodyText}
              <a className={styles.link} href={`https://wa.me/${footerText.telNum.replace(/\D/g, '')}`} target="_blank">
                {footerText.telNum}
              </a>
            </p>
            <ContactForm />
            </div>
          </div>
        <div className={styles.socialMediaContainer}>
          <h2>{footerText.subtitle}</h2>
          <div className={styles.socialMediaLinks}>
            <a href={footerText.facebookLink} target="_blank" noreferrer="true" className={styles.socialMediaLink}>
              <img src={`${prefix}/facebook_black.svg`}></img>
              <span>Facebook</span>
            </a>
            <a href={footerText.instagramLink} target="_blank" noreferrer="true" className={styles.socialMediaLink}>
              <img src={`${prefix}/instagram_black.svg`}></img>
              <span>Instagram</span>
            </a>
          </div>
        </div>
        <div className={styles.creditContainer}>
          <span>{footerText.copyright}</span>
          <Accordion
            isOpenDefault={false}
            title='Créditos de página web' 
            content={
              <>
                {creditText}
              </>
            }
            location="footer"/>
        </div>
      </div>
    </footer>
  )
}

export default Footer