import Input from "../components/Input"
import Button from "../components/Button"

function Footer() {
  return (
    <footer className="section">
      <h2>Consulta Con Nosotros</h2>
      <div className="form-container" >
        <p className="contact-info">
          <span>Si necesitas contactarnos por algo, escríbenos aquí y te responderemos lo antes posible.</span>
          <span>También puedes llamarnos o visitarnos:</span>
          <span>Teléfono<br></br>+34 616626407</span>
        </p>
        <form action="">
          <Input text="Nombre*" isTextArea={false} />
          <Input text="Email*" isTextArea={false} />
          <Input text="Mensaje*" isTextArea={true} />
          <Button text="Enviar mensaje" />
        </form>
      </div>
      <h2>Síguenos en redes</h2>
      <div className="social-media-container">
        <div className="social-media-link facebook">
          <img src='facebook_black.svg'></img>
          <span>Facebook</span>
        </div>
        <div className="social-media-link instagram">
          <img src='instagram_black.svg'></img>
          <span>Instagram</span>
        </div>
      </div>
      <div className="credit-container">
        <span>Copyright © 2025 Roraima Jardines</span>
        <div className="accordian-placeholder"></div>
      </div>
    </footer>
  )
}

export default Footer