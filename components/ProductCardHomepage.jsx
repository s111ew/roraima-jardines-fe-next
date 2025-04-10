import Button from "./Button"
import Link from "next/link"
import { useState } from "react"

export default function ProductCard({ src, src2, alt, title, desc, sectionToScrollTo }) {
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
        <Link href={`/productos${'#' + sectionToScrollTo}`}><Button text="Más Informatión" /></Link>
      </div>
    </div>
  )
}