import Button from "./Button"
import { useState } from "react"

export default function ProductCard({ src, src2, alt, title, desc }) {
  const [currentSrc, setCurrentSrc] = useState(src)


  function onMouseEnter() {
    setCurrentSrc(src2)
  }

  function onMouseLeave() {
    setCurrentSrc(src)
  }

  return(
    <div className="product-card" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img className="product-card-image" src={ currentSrc } alt={ alt } />
      <div className="product-card-text">
        <div className="product-card-text-container">
          <h2>{title}</h2>
          <p>{desc}</p>
        </div>
        <Button text={"Más Informatión"} />
      </div>
    </div>
  )
}