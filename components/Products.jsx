
import styles from '../styles/Productos.module.css'
import ProductCard from './ProductCardProduct'
import { useEffect } from 'react';
import productsText from '@/public/data/text/products';

export default function Products() {

  useEffect(() => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      el.classList.add('animate');
    });
  }, []);

  function generateAccordionItems(textArr) {
    const items = textArr.map(item => <li>{item}</li>)
    return(
      <ul>
        {items}
      </ul>
    )
  }
  return(
    <section className={styles.products}>
      <div 
        className={`${styles.segment} ${styles.first}`}
        style={{
        backgroundImage: `url(/Texture.png), var(--hero-background)`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, cover",
      }}>
        <h2 className={`${styles.title} fade-in`}>{productsText.title}</h2>
        <div className={styles.cardWrapper}>
          <ProductCard
            isTitle={true}
            cardNumber={'1'}
            images={productsText.products[0].images} 
            title={productsText.products[0].title}
            description={productsText.products[0].desc}
            sizes={productsText.products[0].sizes}
            accordionTitlePrimary={productsText.products[0].accordionTitlePrimary}
            accordionContentPrimary={generateAccordionItems(productsText.products[0].accordionContentPrimary)}
            accordionTitleSecondary={productsText.products[0].accordionTitleSecondary}
            accordionContentSecondary={generateAccordionItems(productsText.products[0].accordionContentSecondary)}
          />
          <div id='section2'></div>
        </div>
      </div>
      <div 
        className={`${styles.segment} ${styles.second}`}
        style={{
          backgroundImage: `url(/Texture.png), var(--product-segment-2-background)`,
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "auto, cover",
        }}>
        <div className={styles.cardWrapper}>
          <ProductCard 
            isTitle={false}
            cardNumber={'2'}
            images={productsText.products[1].images}
            title={productsText.products[1].title}
            description={productsText.products[1].desc}
            sizes={productsText.products[1].sizes}
            accordionTitlePrimary={productsText.products[1].accordionTitlePrimary}
            accordionContentPrimary={generateAccordionItems(productsText.products[1].accordionContentPrimary)}
            accordionTitleSecondary={productsText.products[1].accordionTitleSecondary}
            accordionContentSecondary={generateAccordionItems(productsText.products[1].accordionContentSecondary)}
          />
          <div id='section3'></div>
        </div>
      </div>
      <div 
        className={`${styles.segment} ${styles.third}`}
        style={{
          backgroundImage: `url(/Texture.png), var(--product-segment-3-background)`,
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "auto, cover",
        }}>
        <div className={styles.cardWrapper}>
          <ProductCard
            isTitle={false}
            cardNumber={'3'}
            images={productsText.products[2].images}
            altImages={productsText.products[2].imagesSmall}
            title={productsText.products[2].title}
            description={productsText.products[2].desc}
            sizes={productsText.products[2].sizes}
            accordionTitlePrimary={productsText.products[2].accordionTitlePrimary}
            accordionContentPrimary={generateAccordionItems(productsText.products[2].accordionContentPrimary)}
            accordionTitleSecondary={productsText.products[2].accordionTitleSecondary}
            accordionContentSecondary={generateAccordionItems(productsText.products[2].accordionContentSecondary)}
          />
        </div>
      </div>
    </section>
  )
}