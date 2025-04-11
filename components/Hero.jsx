import Button from "../components/Button"
import Link from "next/link"

function Hero() {
  return(
    <section className="hero">
      <div className="hero-main-container">
        <h1>Sustrato y abono<br></br> 100% ecológico</h1>
        <div className="hero-call-to-action">
          <p>Para plantas más sanas y frutos y vegetales más sabrosos</p>
          <Link className="hero-call-to-action-link" href='/puntos_de_venta'><Button text="Encuentra un punto de venta" colour='green'/></Link>
        </div>
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
    </section>
  )
}

export default Hero