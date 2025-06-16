import Button from "../components/Button"
import Link from "next/link"
import ImageCard from "./ImageCard"
import { useState, useEffect } from "react";
import { prefix } from "@/public/data/prefix";

function Hero() {
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
    <section className="hero">
      <ImageCard
        src={`${prefix}/homepage_images/HP0.webp`}
        alt={"Primer plano de una planta suculenta madre perla floreando"}
        caption={"Suculenta madre perla"}
        width={pageWidth < 1200 ? 202 : 230}
        height={pageWidth < 1200 ? 152 : 173}
        segment={1}
        style={{
          position: "absolute",
          right: pageWidth < 521 ? "20px"  : "95px",
          top: pageWidth < 1200 ? (pageWidth < 521 ? "200px"  : "218px") : "143px"
        }}
      />
      <ImageCard
        src={`${prefix}/homepage_images/HP1.webp`}
        alt={"Planta Jade adulta rodeada por plantas similares de menor tamaño"}
        caption={"Jade"}
        width={pageWidth < 1200 ? 90 : 122}
        height={pageWidth < 1200 ? 118 : 160}
        segment={1}
        style={{
          position: "absolute",
          left: "16px",
          top: pageWidth < 1200 ? (pageWidth < 521 ? "571px"  : "441px") : "466px"
        }}
      />
      <ImageCard
        src={`${prefix}/homepage_images/HP2.webp`}
        alt={"Primer plano de las hojas de una planta Jade con los bordes rojizos"}
        caption={"Jade"}
        width={pageWidth < 1200 ? 190 : 257}
        height={pageWidth < 1200 ? 107 : 144}
        segment={1}
        style={{
          position: "absolute",
          left: pageWidth < 521 ? "120px"  : "25px",
          top: pageWidth < 1200 ? (pageWidth < 521 ? "648px"  : "578px") : "650px"
        }}
      />
      <ImageCard
        src={`${prefix}/homepage_images/HP3.webp`}
        alt={"Una planta aptenia con flores rosadas de cerca"}
        caption={"Aptenia"}
        width={pageWidth < 1200 ? 127 : 216}
        height={pageWidth < 1200 ? 96 : 163}
        segment={1}
        style={{
          position: "absolute",
          right: pageWidth < 521 ? "46px"  : "109px",
          top: pageWidth < 1200 ? (pageWidth < 521 ? "1078px"  : "571px") : "626px"
        }}
      />
      <ImageCard
        src={`${prefix}/homepage_images/HP4.webp`}
        alt={"Varias plantas aptenias floreadas de tamaño mediano"}
        caption={"Aptenias"}
        width={pageWidth < 1200 ? 97 : 165}
        height={pageWidth < 1200 ? 117 : 199}
        segment={1}
        style={{
          position: "absolute",
          right: pageWidth < 521 ? "17px"  : "27px",
          top: pageWidth < 1200 ? (pageWidth < 521 ? "1188px"  : "683px") : "812px"
        }}
      />
      <div className="hero-main-container">
        <h1 className="hero-title">Sustrato y abono<br></br> 100% ecológico</h1>
        <div className="hero-call-to-action">
          <p>Para plantas más sanas y frutos y vegetales más sabrosos</p>
          <Link className="hero-call-to-action-link" href='/puntos_de_venta'><Button text="Encuentra un punto de venta" colour='green'/></Link>
        </div>
        <div className="hero-information-container">
        <div className="hero-information">
          <h2>100% Ecológico</h2>
          <p>Evita la dependencia de abonos de origen químico.</p>
        </div>
        <div className="hero-information">
          <h2>Ahorra agua</h2>
          <p>Gracias a su alto contenido en materia orgánica.</p>
        </div>
        <div className="hero-information">
          <h2>Hecho en Aragón</h2>
          <p>Producico y envasado en Pinseque, Zaragoza.</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default Hero