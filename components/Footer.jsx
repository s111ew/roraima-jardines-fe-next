import styles from "../styles/Footer.module.css"
import RollingText from "./RollingText"
import Accordion from "./Accordion"
import { prefix } from "@/public/data/prefix"
import ContactForm from "./ContactForm"
import footerText from "@/public/data/text/footer"
import { useEffect, useState } from "react"

function Footer() {
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

  const bodyText = footerText.bodyText.map(text => {
    return(
      <p>{text}</p>
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
            <div className={styles.contactInfo}>
              { pageWidth > 1199 ? (
                <div className={styles.contactText}>
                  {bodyText}
                </div>) : (
                <p>
                  {footerText.bodyText[1]}
                </p>
                ) }
              <div className={styles.contactLinks}>
                <a className={styles.contactLink} href={`https://wa.me/${footerText.telNum.replace(/\D/g, '')}`} target="_blank">
                  <img src={`${prefix}/whatsapp_black.svg`}></img>
                  <span>WhatsApp</span>
                </a>
                <a className={styles.contactLink} href={footerText.facebookLink} target="_blank" noreferrer="true">
                  <img src={`${prefix}/facebook_black.svg`}></img>
                  <span>Facebook</span>
                </a>
                <a className={styles.contactLink} href={footerText.instagramLink} target="_blank" noreferrer="true">
                  <img src={`${prefix}/instagram_black.svg`}></img>
                  <span>Instagram</span>
                </a>
          </div>
            </div>
            <ContactForm />
            { pageWidth < 1200 && <p>{footerText.bodyText[0]}</p> }
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