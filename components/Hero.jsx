import Button from "../components/Button"
import Link from "next/link"
import ImageCard from "./ImageCard"
import { useState, useEffect } from "react";

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
        src={"/homepage_images/HP0.jpg"}
        alt={"Primer plano de una planta suculenta madre perla floreando"}
        caption={"Suculenta madre perla"}
        width={pageWidth < 1200 ? 202 : 230}
        height={pageWidth < 1200 ? 152 : 173}
        segment={1}
        style={{
          position: "absolute",
          right: "95px",
          top: pageWidth < 1200 ? "218px" : "143px"
        }}
      />
      <ImageCard
        src={"/homepage_images/HP1.jpg"}
        alt={"Planta Jade adulta rodeada por plantas similares de menor tamaño"}
        caption={"Jade"}
        width={pageWidth < 1200 ? 90 : 122}
        height={pageWidth < 1200 ? 118 : 160}
        segment={1}
        style={{
          position: "absolute",
          left: "16px",
          top: pageWidth < 1200 ? "441px" : "466px"
        }}
      />
      <ImageCard
        src={"/homepage_images/HP2.jpg"}
        alt={"Primer plano de las hojas de una planta Jade con los bordes rojizos"}
        caption={"Jade"}
        width={pageWidth < 1200 ? 190 : 257}
        height={pageWidth < 1200 ? 107 : 144}
        segment={1}
        style={{
          position: "absolute",
          left: "25px",
          top: pageWidth < 1200 ? "578px" : "650px"
        }}
      />
      <ImageCard
        src={"/homepage_images/HP3.jpg"}
        alt={"Una planta aptenia con flores rosadas de cerca"}
        caption={"Aptenia"}
        width={pageWidth < 1200 ? 127 : 216}
        height={pageWidth < 1200 ? 96 : 163}
        segment={1}
        style={{
          position: "absolute",
          right: "109px",
          top: pageWidth < 1200 ? "571px" : "626px"
        }}
      />
      <ImageCard
        src={"/homepage_images/HP4.jpg"}
        alt={"Varias plantas aptenias floreadas de tamaño mediano"}
        caption={"Aptenias"}
        width={pageWidth < 1200 ? 97 : 165}
        height={pageWidth < 1200 ? 117 : 199}
        segment={1}
        style={{
          position: "absolute",
          right: "27px",
          top: pageWidth < 1200 ? "683px" : "812px"
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