import { useLayoutEffect } from 'react'
import styles from '../styles/Productos.module.css'
import ProductCard from './ProductCardProduct'

export default function Products() {
  const images = [
    [
      {key: 1, src: 'product_showcase/Sustrato 1.png'},
      {key: 2, src: 'product_showcase/Sustrato 2.jpg'},
      {key: 3, src: 'product_showcase/Sustrato 3.png'},
      {key: 4, src: 'product_showcase/Sustrato 4.jpg'}
    ],
    [
      {key: 1, src: 'product_showcase/Huerto 1.png'},
      {key: 2, src: 'product_showcase/Huerto 2.jpg'},
      {key: 3, src: 'product_showcase/Huerto 3.jpg'},
      {key: 4, src: 'product_showcase/Huerto 4.jpg'}
    ],
    [
      {key: 1, src: 'product_showcase/Plantas 1.png'},
      {key: 2, src: 'product_showcase/Plantas 2.jpg'},
      {key: 3, src: 'product_showcase/Plantas 3.png'},
      {key: 4, src: 'product_showcase/Plantas 4.jpg'}
    ]
  ]
  return(
    <section className={styles.products}>
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
      <ProductCard 
        isTitle={false}
        cardNumber={'2'}
        images={images[1]} 
        title='Huerto & Jardin' 
        description='Nuestro abono permite aumentar la fertilidad del suelo, intensificando su capacidad para absorber los nutrientes necesarios para el desarrollo de las hortalizas.'
        sizes='50l'
        />
      <ProductCard 
        isTitle={false}
        cardNumber={'3'}
        images={images[2]} 
        title='Plantas Ornamentales' 
        description='Cultivamos variedades de plantas ornamentales poco comunes para hogares y jardines con nuestro sustrato. Disponible por encargo y próximamente en Etsy.'
        sizes=''
        />
    </section>
  )
}