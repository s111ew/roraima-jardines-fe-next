import TestimonialCard from "../components/TestimonialCard";
import ImageCard from "./ImageCard";

function Testimonial() {
  return(
    <section className="testimonials">
      <h2>Nuestros Clientes</h2>
      <div className="testimonials-container">
        <TestimonialCard text={"Gran calidad de los productos, precio adecuado y buen servicio de entrega a las tiendas."} logo='testimonial_images/flores-carmen.jpg' storeName={'Flores Carmen'} ownerName={'Nacho y Leticia'} />
        <TestimonialCard text={"Vendemos el sustrato de Roraima Jardines desde hace más de 15 años sabiendo que ofrecemos un producto de calidad. Quienes los prueban, repiten."} logo='testimonial_images/delicias.jpg' storeName={'Vivero Delicias'} ownerName={'Manuela'} />
        <TestimonialCard text={"La tierra es excepcional; su textura es perfecta para el drenaje y retener la humedad, lo que ha permitido que mis plantas crezcan sanas y vigorosas."} logo='testimonial_images/floristeria-el-valle.jpg' storeName={'Floritería El Valle'} ownerName={'Kellyng'} />
      </div>
      <div className="testimonial-images">
        <ImageCard
          src={'/homepage_images/HP12.jpg'}
          width={200}
          height={194}
          alt={'Cientos de plantas Mesen floreadas cubren el suelo creando un tapiz verde, naranja y violeta'}
          caption={'Mesen'}
          segment={3}
        />
        <ImageCard
          src={'/homepage_images/HP13.jpg'}
          width={262}
          height={384}
          alt={'Primer plano de las flores violetas de las plantas Mesen'}
          caption={'Mesen'}
          segment={3}
        />
        <ImageCard
          src={'/homepage_images/HP14.jpg'}
          width={186}
          height={248}
          alt={'Primer plano de las flores violetas de las plantas Mesen'}
          caption={'Mesen'}
          segment={3}
        />
        <ImageCard
          src={'/homepage_images/HP15.jpg'}
          width={232}
          height={383}
          alt={'Plano general de las plantas Mesen con flores naranjas'}
          caption={'Mesen'}
          segment={3}
        />
      </div>
      <div className="testimonials-container">
      <TestimonialCard text={"La calidad es excelente: es rica en nutrientes, tiene una textura ideal para trabajar y ha mejorado notablemente el crecimiento de mis plantas."} logo='testimonial_images/jardineria-vela.jpg' storeName={'Jardinería Vela'} ownerName={'Isabel'} />
      <TestimonialCard text={"Estoy súper contenta con la amabilidad y la presentación de productos. Las entregas son puntuales y los resultados son estupendos."} logo='testimonial_images/flores-benede.jpg' storeName={'Floristería Nieves'} ownerName={'Nieves'} />
      <TestimonialCard text={"Todos los clientes repiten después de haber probado otros. Para nosotros el servicio es estupendo, pides y enseguida te lo llevan."} logo='testimonial_images/rossiflor.jpg' storeName={'Rossiflor'} ownerName={'Begoña'} />
      </div>
    </section>
  )
}

export default Testimonial