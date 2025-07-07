import ProductCard from "./ProductCardHomepage.jsx"
import ImageCard from "./ImageCard.jsx"
import { useState, useEffect } from "react";
import { prefix } from "@/public/data/prefix.js";

function ProductCards() {
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
    <section 
      className="product-cards"
      style={{
        backgroundImage: `url(${prefix}/Texture.png), var(--product-cards-background)`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, cover",
      }}>
      <h2>Nuestros Productos</h2>
      <div className="product-card-container">
        <ProductCard src={`${prefix}/product_images/Sustrato 1.webp`} src2={`${prefix}/product_images/Sustrato 2.webp`} alt="" title="Sustrato Universal" desc="Para uso en macetas y jardinería" sectionToScrollTo=''/>
        <ProductCard src={`${prefix}/product_images/Huerto-1.webp`} src2={`${prefix}/product_images/huerto2.webp`} alt="" title="Huerto & Jardin" desc="Para uso exterior" sectionToScrollTo='section2'/>
        <ProductCard src={`${prefix}/product_images/Plantas 1.webp`} src2={`${prefix}/product_images/Plantas 2.webp`} alt="" title="Plantas ornamentales" desc="Variedades de cactus, aptenias y mesen" sectionToScrollTo='section3'/>
      </div>
      <div className="images-container">
        <>
          { pageWidth > 520 &&
            <ImageCard
              src={`${prefix}/homepage_images/HP11.webp`}
              width={pageWidth < 1200 ? 114 : 176}
              height={pageWidth < 1200 ? 147 : 225}
              alt={"Cáctus arcoiris"}
              caption={"Cáctus arcoiris"}
              segment={2}
              rateOfScroll={pageWidth < 521 ? 1.01 : 1.05}
            />
          }
          <ImageCard
            src={`${prefix}/homepage_images/HP10.webp`}
            width={pageWidth < 1200 ? 117 : 180}
            height={pageWidth < 1200 ? 209 : 321}
            alt={"Diferentes variedades de cáctus y suculentas en diferentes tamaños plantados en el sustrato de Roraima Jardines"}
            caption={"Cáctus arcoiris"}
            rateOfScroll={pageWidth < 521 ? 1.05 : null}
            segment={2}
          />
          <ImageCard
            src={`${prefix}/homepage_images/HP9.webp`}
            width={pageWidth < 1200 ? 143 : 220}
            height={pageWidth < 1200 ? 179 : 275}
            alt={"Suculenta Euphorbia Meloformis de la variedad 'Variegata'"}
            caption={"Euphorbia meloformis"}
            segment={2}
            rateOfScroll={pageWidth < 521 ? 1.01 : 1.05}
            direction={"down"}
          />
        </>
      </div>
    </section>
  )
}

export default ProductCards