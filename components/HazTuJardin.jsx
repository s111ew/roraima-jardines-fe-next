import styles from "../styles/HazTuJardin.module.css"
import Link from "next/link"
import SelectAccordion from "./SelectAccordion"
import Accordion from "./Accordion"
import Table from "./Table"
import Button from "./Button"
import ButtonAlt from "./ButtonAlt"
import { useState, useEffect } from "react"
import seasons from "@/public/data/seasons"
import { prefix } from "@/public/data/prefix"
import jardinText from "@/public/data/text/hazTuJardin"

export default function HazTuJardin() {
  const [currentSeason, setCurrentSeason] = useState("primavera")

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
          el.classList.add('animate');
        });
  }, [])

  let currentSeasonIndex

  switch (currentSeason) {
    case "primavera":
      currentSeasonIndex = seasons[0]
      break;
    case "verano":
      currentSeasonIndex = seasons[1]
      break;
    case "otono":
      currentSeasonIndex = seasons[2]
      break;
    case "invierno":
      currentSeasonIndex = seasons[3]
      break;
  }

  function generateAccordionContent(content, list) {
    const items = content.map(item => <p>{item}</p>)

    const listItems = list?.map(listItem => <li>{listItem}</li>)

    return(
      <div className={styles.accordionContent}>
        {items}
        {list ? 
          <ul>
            {listItems}
          </ul> : ''}
      </div>
    )
  }

  // TODO: EXTRACT PDF TO hazTuJardin.js
  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = `${prefix}/files/Guía_Roraima_Jardines.pdf`;
    link.download = 'Guía_Roraima_Jardines.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return(
    <>
      <div 
        className={`${styles.section} ${styles.intro}`}
        style={{
          backgroundImage: `url(${prefix}/Texture.png), var(--hero-background)`,
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "auto, cover",
        }}>
        <div className={styles.contentContainerIntro}>
          <h1 className={`${styles.title} fade-in`}>{jardinText.title}</h1>
          <div className={styles.introTextContainer}>
            <p className="fade-in" style={{ animationDelay: '0.5s' }}>{jardinText.subTitle}</p>
          </div>
        </div>
      </div>
      <div className={`${styles.section} ${styles.body} ${styles[currentSeasonIndex.name]}`}>
        <div className={styles.contentContainer}>
          <div className={styles.legendContainer}>
            <p className={styles.label}>{jardinText.selectLabel}</p>
            <SelectAccordion name="season" options={jardinText.selectOptions} setCurrentSeason={setCurrentSeason} />
            <div className={styles.legend}>
              <div className={styles.legendInner}>
                <div className={`${styles.dot} ${styles.black}`}></div>
                <p>{jardinText.legendValues[0]}</p>
              </div>
              <div className={styles.legendInner}>
                <div className={`${styles.dot} ${styles.green}`}></div>
                <p>{jardinText.legendValues[1]}</p>
              </div>
            </div>
          </div>
          <div className={styles.tableContainer}>
            <Table rows={currentSeasonIndex.rows} columns={currentSeasonIndex.columns}/>
          </div>
          <div className={styles.accordionContainer}>
            <Accordion
              isOpenDefault={true} 
              title={jardinText.accordions[0].title}
              content={generateAccordionContent(jardinText.accordions[0].content)}
              location='body'
            />
            <Accordion 
              isOpenDefault={false}
              title={jardinText.accordions[1].title}
              content={generateAccordionContent(jardinText.accordions[1].content, jardinText.accordions[1].list)}
              location='body'
            />
            <Accordion 
              isOpenDefault={false}
              title={jardinText.accordions[2].title}
              content={generateAccordionContent(jardinText.accordions[2].content)}
              location='body'
            />
          </div>
          <div className={styles.buttonContainer}>
            <Link href='/puntos_de_venta'><Button text='Encuentra un Punto de Venta' colour='green'/></Link>
            <ButtonAlt text='Descarga la guía en PDF' onClick={downloadPDF} />
          </div>
        </div>
      </div>
    </>
  )
}