import Button from "../components/Button"
import Link from "next/link"
import ImageCard from "./ImageCard"

function Hero() {
  return(
    <section className="hero">
      <ImageCard
        src={"/homepage_images/HP0.jpg"}
        alt={"Primer plano de una planta suculenta madre perla floreando"}
        caption={"Suculenta madre perla"}
        width={230}
        height={173}
        segment={1}
        style={{
          position: "absolute",
          right: "95px",
          top: "143px"
        }}
      />
      <ImageCard
        src={"/homepage_images/HP1.jpg"}
        alt={"Planta Jade adulta rodeada por plantas similares de menor tamaño"}
        caption={"Jade"}
        width={122}
        height={160}
        segment={1}
        style={{
          position: "absolute",
          left: "16px",
          top: "466px"
        }}
      />
      <ImageCard
        src={"/homepage_images/HP2.jpg"}
        alt={"Primer plano de las hojas de una planta Jade con los bordes rojizos"}
        caption={"Jade"}
        width={257}
        height={144}
        segment={1}
        style={{
          position: "absolute",
          left: "25px",
          top: "650px"
        }}
      />
      <ImageCard
        src={"/homepage_images/HP3.jpg"}
        alt={"Una planta aptenia con flores rosadas de cerca"}
        caption={"Aptenia"}
        width={216}
        height={163}
        segment={1}
        style={{
          position: "absolute",
          right: "109px",
          top: "626px"
        }}
      />
      <ImageCard
        src={"/homepage_images/HP4.jpg"}
        alt={"Varias plantas aptenias floreadas de tamaño mediano"}
        caption={"Aptenias"}
        width={165}
        height={199}
        segment={1}
        style={{
          position: "absolute",
          right: "27px",
          top: "812px"
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