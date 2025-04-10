import styles from "../styles/HazTuJardin.module.css"
import Link from "next/link"
import SelectAccordion from "./SelectAccordion"
import Accordion from "./Accordion"
import Table from "./Table"
import Button from "./Button"
import ButtonAlt from "./ButtonAlt"
import { useState } from "react"
import seasons from "@/public/data/seasons"

export default function HazTuJardin() {
  const [currentSeason, setCurrentSeason] = useState("primavera")

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

  const [accordionText, setAccordionText] = useState(
      <>
        <p>Elige una maceta acorde al tamaño de la planta, ya que tendrá una altura y grosor considerables. De lo contrario, sus frutos serán más pequeños que los de cultivo en suelo.</p>
        <p>Para la siembra te recomendamos colocar:</p>
        <ul>
          <li>Grava o piedras para el drenaje.</li>
          <li>Rellenar la maceta con Sustrato Universal</li>
          <li>Colocar el cepellón de la planta y terminar de llenar con abono Huerto & Jardín.</li>
        </ul>
      </>
  )

  const options = [
    {
      key: 0,
      value: "primavera",
      text: "Primavera"
    },
    {
      key: 1,
      value: "verano",
      text: "Verano"
    },
    {
      key: 2,
      value: "otono",
      text: "Otoño"
    },
    {
      key: 3,
      value: "invierno",
      text: "Invierno"
    },
  ]

  const downloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/files/haz-tu-jardin.pdf';
    link.download = 'haz-tu-jardin.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return(
    <>
      <div className={`${styles.section} ${styles.intro}`}>
        <div className={styles.contentContainer}>
          <h1 className={styles.title}>Haz Tu Jardín</h1>
          <div className={styles.introTextContainer}>
            <p>Sigue nuestro calendario de preparaciones, sembrado, abonado y mantenimiento para sacarle el mejor partido a tu jardín durante todo el año. </p>
          </div>
        </div>
      </div>
      <div className={`${styles.section} ${styles.body} ${styles[currentSeasonIndex.name]}`}>
        <div className={styles.contentContainer}>
          <div className={styles.legendContainer}>
            <SelectAccordion name="season" options={options} setCurrentSeason={setCurrentSeason} />
            <div className={styles.legend}>
              <div className={styles.legendInner}>
                <div className={`${styles.dot} ${styles.black}`}></div>
                <p>Huerto & Jardin</p>
              </div>
              <div className={styles.legendInner}>
                <div className={`${styles.dot} ${styles.green}`}></div>
                <p>Sustrato</p>
              </div>
            </div>
          </div>
          <div className={styles.tableContainer}>
            <Table rows={currentSeasonIndex.rows} columns={currentSeasonIndex.columns}/>
          </div>
          <div className={styles.accordionContainer}>
            <Accordion
              isOpenDefault={true} 
              title='Consideraciones'
              content={
                <div className={styles.accordionContent}>
                  <p>Cuando planifiques tu jardín ten en cuenta la compatibilidad de las plantas, para evitar la competecia por nutrientes entre las ellas.</p>
                  <p>Así obtendrás un crecimiento armónico de todas ellas y crear un jardín más sostenible.</p>
                </div>
              }
              location='body'
            />
            <Accordion 
              isOpenDefault={false}
              title='Cultivo en maceta'
              content={
                <div className={styles.accordionContent}>
                  {accordionText}
                </div>
              }
              location='body'
            />
            <Accordion 
              isOpenDefault={false}
              title='Trasplantar en maceta'
              content={
                <div className={styles.accordionContent}>
                  <p>Para trasplantar elije una maceta más grande que la actual.</p>
                  <p>Coloca una capa de drenaje de 1 a 2 cm en el fondo seguido de otra capa de sustrato. </p>
                  <p>Saca la planta cuidadosamente de la maceta y colócala el cepellón en el centro de la nueva maceta, rellena alrededor del cepellón con sustrato, presionando ligeramente.</p>
                </div>
              }
              location='body'
            />
          </div>
          <div className={styles.buttonContainer}>
            <Link href='/puntos_de_venta'><Button text='Encuentra un Punto de Venta' /></Link>
            <ButtonAlt text='Descarga la guía en PDF' onClick={downloadPDF} />
          </div>
        </div>
      </div>
    </>
  )
}