import ProductCard from "./ProductCardHomepage.jsx"
import ImageCard from "./ImageCard.jsx"
import { useState, useEffect } from "react";

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
    <section className="product-cards">
      <h2>Nuestros Productos</h2>
      <div className="product-card-container">
        <ProductCard src='product_images/Sustrato 1.jpg' src2='product_images/Sustrato 2.jpg' alt="" title="Sustrato Universal" desc="Para uso en macetas y jardinería" sectionToScrollTo=''/>
        <ProductCard src='product_images/Huerto-1.jpg' src2='product_images/huerto2.webp' alt="" title="Huerto & Jardin" desc="Para uso exterior" sectionToScrollTo='image-2-1'/>
        <ProductCard src='product_images/Plantas 1.jpg' src2='product_images/Plantas 2.jpg' alt="" title="Plantas ornamentales" desc="Variedades de cactus, aptenias y mesen" sectionToScrollTo='image-3-1'/>
      </div>
      <div className="images-container">
        <ImageCard
          src={"/homepage_images/HP11.jpg"}
          width={pageWidth < 1200 ? 114 : 176}
          height={pageWidth < 1200 ? 147 : 225}
          alt={"Cáctus arcoiris"}
          caption={"Cáctus arcoiris"}
          segment={2}
        />
        <ImageCard
          src={"/homepage_images/HP10.jpg"}
          width={pageWidth < 1200 ? 117 : 180}
          height={pageWidth < 1200 ? 209 : 321}
          alt={"Diferentes variedades de cáctus y suculentas en diferentes tamaños plantados en el sustrato de Roraima Jardines"}
          caption={"Cáctus arcoiris"}
          segment={2}
        />
        <ImageCard
          src={"/homepage_images/HP9.jpg"}
          width={pageWidth < 1200 ? 143 : 220}
          height={pageWidth < 1200 ? 179 : 275}
          alt={"Suculenta Euphorbia Meloformis de la variedad 'Variegata'"}
          caption={"Euphorbia meloformis"}
          segment={2}
        />
      </div>
    </section>
  )
}

export default ProductCards