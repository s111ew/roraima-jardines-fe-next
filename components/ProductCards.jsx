import ProductCard from "../components/ProductCard.jsx"

function ProductCards() {
  return(
    <section className="product-cards">
      <h2>Nuestros Productos</h2>
      <div className="product-card-container">
        <ProductCard src='product_images/Sustrato 1.jpg' src2='product_images/Sustrato 2.jpg' alt="" title="Sustrato Universal" desc="Para uso en macetas y jardinería" />
        <ProductCard src='product_images/Huerto-1.jpg' src2='product_images/Huerto-2.jpg"' alt="" title="Huerto & Jardin" desc="Para uso exterior" />
        <ProductCard src='product_images/Plantas 1.jpg' src2='product_images/Plantas 2.jpg' alt="" title="Plantas ornamentales" desc="Variedades de cactus, aptenias y mesen" />
      </div>
      <div className="images-container">
        <img className="homepage-image" id="homepage-img-11" src='homepage_images/HP11.jpg' alt="" />
        <img className="homepage-image" id="homepage-img-10" src='homepage_images/HP10.jpg' alt="" />
        <img className="homepage-image" id="homepage-img-9" src='homepage_images/HP9.jpg' alt="" />
      </div>
    </section>
  )
}

export default ProductCards