import TestimonialCard from "../components/TestimonialCard";
import TestimonialCarousel from "./TestimonialCarousel";
import ImageCard from "./ImageCard";
import { useState, useEffect } from "react";
import { prefix } from "@/public/data/prefix";

function Testimonial() {
  const [pageWidth, setPageWidth] = useState(0);

  const testimonials1 = [
    {
      text: "Gran calidad de los productos, precio adecuado y buen servicio de entrega a las tiendas.",
      logo: 'testimonial_images/flores-carmen.webp', 
      storeName: 'Flores Carmen', 
      ownerName: 'Nacho y Leticia'
    },
    {
      text: "Vendemos el sustrato de Roraima Jardines desde hace más de 15 años sabiendo que ofrecemos un producto de calidad. Quienes los prueban, repiten.",
      logo: 'testimonial_images/delicias.webp', 
      storeName: 'Vivero Delicias', 
      ownerName: 'Manuela'
    },
    {
      text: "La tierra es excepcional; su textura es perfecta para el drenaje y retener la humedad, lo que ha permitido que mis plantas crezcan sanas y vigorosas.",
      logo: 'testimonial_images/floristeria-el-valle.webp', 
      storeName: 'Floritería El Valle', 
      ownerName: 'Kellyng'
    }
  ]

  const testimonials2 = [
    {
      text: "La calidad es excelente: es rica en nutrientes, tiene una textura ideal para trabajar y ha mejorado notablemente el crecimiento de mis plantas.",
      logo: 'testimonial_images/jardineria-vela.webp', 
      storeName: 'Jardinería Vela', 
      ownerName: 'Isabel'
    },
    {
      text: "Estoy súper contenta con la amabilidad y la presentación de productos. Las entregas son puntuales y los resultados son estupendos.",
      logo: 'testimonial_images/flores-benede.webp', 
      storeName: 'Floristería Nieves', 
      ownerName: 'Nieves'
    },
    {
      text: "Todos los clientes repiten después de haber probado otros. Para nosotros el servicio es estupendo, pides y enseguida te lo llevan.",
      logo: 'testimonial_images/rossiflor.webp', 
      storeName: 'Rossiflor', 
      ownerName: 'Begoña'
    }
  ]
  
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
    <section className="testimonials">
      <h2>Nuestros Clientes</h2>
      <div className="testimonials-container">
        {
          pageWidth < 1200 ? (
            <TestimonialCarousel
              carouselId={1} 
              testimonials={testimonials1}
            />
          ) : (
            <>
              <TestimonialCard text={"Gran calidad de los productos, precio adecuado y buen servicio de entrega a las tiendas."} logo='testimonial_images/flores-carmen.webp' storeName={'Flores Carmen'} ownerName={'Nacho y Leticia'} />
              <TestimonialCard text={"Vendemos el sustrato de Roraima Jardines desde hace más de 15 años sabiendo que ofrecemos un producto de calidad. Quienes los prueban, repiten."} logo='testimonial_images/delicias.webp' storeName={'Vivero Delicias'} ownerName={'Manuela'} />
              <TestimonialCard text={"La tierra es excepcional; su textura es perfecta para el drenaje y retener la humedad, lo que ha permitido que mis plantas crezcan sanas y vigorosas."} logo='testimonial_images/floristeria-el-valle.webp' storeName={'Floritería El Valle'} ownerName={'Kellyng'} />
            </>
          )
        }
      </div>
      <div className="testimonial-images">
        {
          pageWidth < 1200 ? '' : (
            <ImageCard
              src={`${prefix}/homepage_images/HP12.webp`}
              width={200}
              height={194}
              alt={'Cientos de plantas Mesen floreadas cubren el suelo creando un tapiz verde, naranja y violeta'}
              caption={'Mesen'}
              segment={3}
            />
          )
        }
        <ImageCard
          src={`${prefix}/homepage_images/HP13.webp`}
          width={pageWidth < 1200 ? 170 : 262}
          height={pageWidth < 1200 ? 226 : 384}
          alt={'Primer plano de las flores violetas de las plantas Mesen'}
          caption={'Mesen'}
          segment={3}
          rateOfScroll={pageWidth < 1200 ? null : 1.03}
        />
        <ImageCard
          src={`${prefix}/homepage_images/HP14.webp`}
          width={pageWidth < 1200 ? 121 : 186}
          height={pageWidth < 1200 ? 160 : 248}
          alt={'Primer plano de las flores violetas de las plantas Mesen'}
          caption={'Mesen'}
          segment={3}
        />
        {
          pageWidth < 1200 ? '' : (
            <ImageCard
              src={`${prefix}/homepage_images/HP15.webp`}
              width={232}
              height={383}
              alt={'Plano general de las plantas Mesen con flores naranjas'}
              caption={'Mesen'}
              segment={3}
              rateOfScroll={pageWidth < 1200 ? null : 1.03}
            />
          )
        }
      </div>
      <div className="testimonials-container">
        {
          pageWidth < 1200 ? (
            <TestimonialCarousel
              carouselId={2} 
              testimonials={testimonials2}
            />
          ) : (
            <>
              <TestimonialCard text={"La calidad es excelente: es rica en nutrientes, tiene una textura ideal para trabajar y ha mejorado notablemente el crecimiento de mis plantas."} logo='testimonial_images/jardineria-vela.webp' storeName={'Jardinería Vela'} ownerName={'Isabel'} />
              <TestimonialCard text={"Estoy súper contenta con la amabilidad y la presentación de productos. Las entregas son puntuales y los resultados son estupendos."} logo='testimonial_images/flores-benede.webp' storeName={'Floristería Nieves'} ownerName={'Nieves'} />
              <TestimonialCard text={"Todos los clientes repiten después de haber probado otros. Para nosotros el servicio es estupendo, pides y enseguida te lo llevan."} logo='testimonial_images/rossiflor.webp' storeName={'Rossiflor'} ownerName={'Begoña'} />
            </>
          )
        }
      </div>
    </section>
  )
}

export default Testimonial