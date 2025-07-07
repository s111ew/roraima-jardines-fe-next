import { prefix } from '@/public/data/prefix'
import styles from '../styles/Productos.module.css'
import ProductCard from './ProductCardProduct'
import { useState, useEffect } from 'react';

export default function Products() {
  const [pageWidth, setPageWidth] = useState(0);
    
      useEffect(() => {
        setPageWidth(window.innerWidth);
    
        function onResize() {
          setPageWidth(window.innerWidth);
        }
    
        window.addEventListener('resize', onResize);
    
        onResize();

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
          el.classList.add('animate');
        });
    
        return () => {
          window.removeEventListener('resize', onResize);
        };
      }, []);

  const images = [
    [
      {key: 1, src: `${prefix}/product_showcase/Sustrato1.webp`},
      {key: 2, src: `${prefix}/product_showcase/Sustrato2.webp`},
      {key: 3, src: `${prefix}/product_showcase/Sustrato3.webp`},
      {key: 4, src: `${prefix}/product_showcase/Sustrato4.webp`}
    ],
    [
      {key: 1, src: `${prefix}/product_showcase/Huerto1.webp`},
      {key: 2, src: `${prefix}/product_showcase/Huerto2.webp`},
      {key: 3, src: `${prefix}/product_showcase/Huerto3.webp`},
      {key: 4, src: `${prefix}/product_showcase/Huerto4.webp`}
    ],
    [
      {key: 1, src: pageWidth < 1200 ? `${prefix}/product_showcase/Plantas1small.webp` : `${prefix}/product_showcase/Plantas1.webp`},
      {key: 2, src: `${prefix}/product_showcase/Plantas2.webp`},
      {key: 3, src: `${prefix}/product_showcase/Plantas3.webp`},
      {key: 4, src: pageWidth < 1200 ? `${prefix}/product_showcase/Plantas4small.webp` : `${prefix}/product_showcase/Plantas4.webp`}
    ]
  ]
  return(
    <section className={styles.products}>
      <div 
        className={`${styles.segment} ${styles.first}`}
        style={{
        backgroundImage: `url(${prefix}/Texture.png), var(--hero-background)`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, cover",
      }}>
        <h2 className={`${styles.title} fade-in`}>Nuestros Productos</h2>
        <div className={styles.cardWrapper}>
          <ProductCard
            isTitle={true}
            cardNumber={'1'}
            images={images[0]} 
            title='Sustrato Universal' 
            description='Nuestro sustrato contiene todos los nutrientes necesarios para que tus plantas en jardín o maceta puedan desarrollarse a plenitud y las disfrutes en su máximo esplendor.'
            sizes='5l, 10l, 20l, 50l'
            accordionTitlePrimary='Propiedades Físicas'
            accordionContentPrimary={
              <ul>
                <li>100% ecológico ya que es de origen orgánico</li>
                <li>Aporta los nutrientes necesarios para el desarrollo de plantas, arbustos, árboles, césped y gramíneas</li>
                <li>Ahorro de agua, por su estructura permite la retención de humedad y a la vez da salida al exceso de agua</li>
                <li>Aumenta la materia orgánica en el suelo. Reduce el uso de abonos de origen químico</li>
                <li>Mejora la permeabilidad del suelo</li>
                <li>Es suave al tacto</li>
              </ul>
            }
            accordionContentSecondary={
              <ul>
                <li>Vaporizada: Con este proceso se eliminan hongos, larvas, bacterias y pequeños insectos que perjudican el crecimiento de las plantas</li>
                <li>Envasada húmeda: ahorra agua desde el inicio</li>
              </ul>
            }
          />
          <div id='section2'></div>
        </div>
      </div>
      <div 
        className={`${styles.segment} ${styles.second}`}
        style={{
          backgroundImage: `url(${prefix}/Texture.png), var(--product-segment-2-background)`,
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "auto, cover",
        }}>
        <div className={styles.cardWrapper}>
          <ProductCard 
            isTitle={false}
            cardNumber={'2'}
            images={images[1]} 
            title='Huerto & Jardin' 
            description='Nuestro abono permite aumentar la fertilidad del suelo, intensificando su capacidad para absorber los nutrientes necesarios para el desarrollo de las hortalizas.'
            sizes='50l'
            accordionTitlePrimary='Propiedades Físicas'
            accordionContentPrimary={
              <ul>
                <li>100% ecológico ya que es de origen orgánico</li>
                <li>Aporta los nutrientes necesarios para el buen crecimiento de tus hortalizas. A la vez, si añades otros tipos de abonos minerales o líquidos, éstos llegarán con mayor facilidad al sistema radicular, permitiendo una absición más rápida y efectiva.</li>
                <li>Reduce las oscilaciones del PH del suelo.</li>
                <li>Favorece la aireación y oxigenación.</li>
                <li>Aumenta la retención de agua.</li>
              </ul>
            }
            accordionContentSecondary={
              <ul>
                <li>Vaporizada: Con este proceso se eliminan hongos, larvas, bacterias y pequeños insectos que perjudican el crecimiento de las plantas</li>
                <li>Envasada húmeda: ahorra agua desde el inicio</li>
              </ul>
            }
          />
          <div id='section3'></div>
        </div>
      </div>
      <div 
        className={`${styles.segment} ${styles.third}`}
        style={{
          backgroundImage: `url(${prefix}/Texture.png), var(--product-segment-3-background)`,
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "auto, cover",
        }}>
        <div className={styles.cardWrapper}>
          <ProductCard
            isTitle={false}
            cardNumber={'3'}
            images={images[2]} 
            title='Plantas Ornamentales' 
            description='Cultivamos variedades de plantas ornamentales poco comunes para hogares y jardines con nuestro sustrato. Disponible por encargo y próximamente en Etsy.'
            sizes=''
            accordionTitlePrimary={'Variedades'}
            accordionContentPrimary={
              <ul>
                <li>Cáctus: Echinopsis, Arcoiris, Orejas de Conejo, Erizo, San Pedro, Mamillaria, Espiral, Aguja de Eva, Cacahuete...</li>
                <li>Suculentas: Jade, Aptenias, Mesen, Agaves, Aloe Vera, Euphorbia Meloformis, Yucca...</li>
                <li>Palmeras: Sago, Madagascar</li>
                <li>Arbustos espinosos: Coronas de Cristo</li>
                <li>Helechos</li>
              </ul>
            }
            accordionContentSecondary={
              <ul>
                <li>Todas nuestras plantas son producidas y cuidadas en Zaragoza, en sustrato o abono de Roraima Jardines. </li>
              </ul>
            }
          />
        </div>
      </div>
    </section>
  )
}