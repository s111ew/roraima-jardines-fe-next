import ProductCard from "./ProductCardHomepage.jsx"
import ImageCard from "./ImageCard.jsx"
import { useState, useEffect } from "react";
import styles from "@/styles/ProductCardsHomepage.module.css"
import homepageProductsText from "@/public/data/text/homepageProducts.js";

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
      className={styles.cards}
      style={{
        backgroundImage: `url(/Texture.png), var(--product-cards-background)`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, cover",
      }}>
      <h2 className={styles.title}>{homepageProductsText.title}</h2>
      <div className={styles.cardContainer}>
        <ProductCard src={`/product_images/Sustrato 1.webp`} src2={`/product_images/Sustrato 2.webp`} alt="" title={homepageProductsText.cards[0].title} desc={homepageProductsText.cards[0].desc} sectionToScrollTo=''/>
        <ProductCard src={`/product_images/Huerto-1.webp`} src2={`/product_images/huerto2.webp`} alt="" title={homepageProductsText.cards[1].title} desc={homepageProductsText.cards[1].desc} sectionToScrollTo='section2'/>
        <ProductCard src={`/product_images/Plantas 1.webp`} src2={`/product_images/Plantas 2.webp`} alt="" title={homepageProductsText.cards[2].title} desc={homepageProductsText.cards[2].desc} sectionToScrollTo='section3'/>
      </div>
      <div className={styles.imageContainer}>
        <>
          { pageWidth > 520 &&
            <ImageCard
              src={`/homepage_images/HP11.webp`}
              width={pageWidth < 1200 ? 114 : 176}
              height={pageWidth < 1200 ? 147 : 225}
              alt={"Cáctus arcoiris"}
              caption={"Cáctus arcoiris"}
              segment={2}
              rateOfScroll={pageWidth < 521 ? 1.01 : 1.05}
            />
          }
          <ImageCard
            src={`/homepage_images/HP10.webp`}
            width={pageWidth < 1200 ? 117 : 180}
            height={pageWidth < 1200 ? 209 : 321}
            alt={"Diferentes variedades de cáctus y suculentas en diferentes tamaños plantados en el sustrato de Roraima Jardines"}
            caption={"Cáctus arcoiris"}
            rateOfScroll={pageWidth < 521 ? 1.05 : null}
            segment={2}
          />
          <ImageCard
            src={`/homepage_images/HP9.webp`}
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