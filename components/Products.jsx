import styles from '../styles/Productos.module.css'
import ProductCard from './ProductCardProduct'

export default function Products() {
  const images1 = [
    {key: 1, src: 'product_showcase/Sustrato 1.png'},
    {key: 2, src: 'product_showcase/Sustrato 2.jpg'},
    {key: 3, src: 'product_showcase/Sustrato 3.png'},
    {key: 4, src: 'product_showcase/Sustrato 4.jpg'},
  ]
  return(
    <section className={styles.products}>
      <h1>Nuestros Productos</h1>
      <ProductCard 
        images={images1} 
        title='Sustrato Universal' 
        description='Nuestro sustrato contiene todos los nutrientes necesarios para que tus plantas en jardín o maceta puedan desarrollarse a plenitud y las disfrutes en su máximo esplendor'
        sizes='5l, 10l, 20l, 50l'
        />
    </section>
  )
}