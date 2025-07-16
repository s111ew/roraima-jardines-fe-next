import TestimonialCard from "../components/TestimonialCard";
import TestimonialCarousel from "./TestimonialCarousel";
import ImageCard from "./ImageCard";
import { useState, useEffect } from "react";

import styles from "@/styles/Testimonials.module.css"
import testimonialText from "@/public/data/text/testimonials";

function Testimonial() {
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
      className={styles.testimonials}
      style={{
        backgroundImage: `url(/Texture.png), var(--testimonial-background)`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, cover",
      }}>
      <h2 className={styles.title}>{testimonialText.title}</h2>
      <div className={styles.testimonialsContainer}>
        {
          pageWidth < 1200 ? (
            <TestimonialCarousel
              carouselId={1} 
              testimonials={testimonialText.testimonials.slice(0, 3)}
            />
          ) : (
            <>
              <TestimonialCard text={testimonialText.testimonials[0].text} logo={testimonialText.testimonials[0].logo} storeName={testimonialText.testimonials[0].storeName} ownerName={testimonialText.testimonials[0].ownerName} />
              <TestimonialCard text={testimonialText.testimonials[1].text} logo={testimonialText.testimonials[1].logo} storeName={testimonialText.testimonials[1].storeName} ownerName={testimonialText.testimonials[1].ownerName} />
              <TestimonialCard text={testimonialText.testimonials[2].text} logo={testimonialText.testimonials[2].logo} storeName={testimonialText.testimonials[2].storeName} ownerName={testimonialText.testimonials[2].ownerName} />
            </>
          )
        }
      </div>
      <div className={styles.testimonialImages}>
        {
          pageWidth < 1200 ? '' : (
            <ImageCard
              src={`/homepage_images/HP12.webp`}
              width={200}
              height={194}
              alt={'Cientos de plantas Mesen floreadas cubren el suelo creando un tapiz verde, naranja y violeta'}
              caption={'Mesen'}
              segment={3}
              direction={"down"}
              rateOfScroll={pageWidth < 1200 ? null : 1.035}
            />
          )
        }
        <ImageCard
          src={`/homepage_images/HP13.webp`}
          width={pageWidth < 1200 ? 170 : 262}
          height={pageWidth < 1200 ? 226 : 384}
          alt={'Primer plano de las flores violetas de las plantas Mesen'}
          caption={'Mesen'}
          segment={3}
          rateOfScroll={pageWidth < 1200 ? 1.015 : 1.035}
        />
        <ImageCard
          src={`/homepage_images/HP14.webp`}
          width={pageWidth < 1200 ? 121 : 186}
          height={pageWidth < 1200 ? 160 : 248}
          alt={'Primer plano de las flores violetas de las plantas Mesen'}
          caption={'Mesen'}
          segment={3}
          direction={"down"}
          rateOfScroll={pageWidth < 1200 ? 1.015 : 1.035}
        />
        {
          pageWidth < 1200 ? '' : (
            <ImageCard
              src={`/homepage_images/HP15.webp`}
              width={232}
              height={383}
              alt={'Plano general de las plantas Mesen con flores naranjas'}
              caption={'Mesen'}
              segment={3}
              rateOfScroll={pageWidth < 1200 ? null : 1.035}
            />
          )
        }
      </div>
      <div className={styles.testimonialsContainer}>
        {
          pageWidth < 1200 ? (
            <TestimonialCarousel
              carouselId={2} 
              testimonials={testimonialText.testimonials.slice(3)}
            />
          ) : (
            <>
              <TestimonialCard text={testimonialText.testimonials[3].text} logo={testimonialText.testimonials[3].logo} storeName={testimonialText.testimonials[3].storeName} ownerName={testimonialText.testimonials[3].ownerName} />
              <TestimonialCard text={testimonialText.testimonials[4].text} logo={testimonialText.testimonials[4].logo} storeName={testimonialText.testimonials[4].storeName} ownerName={testimonialText.testimonials[4].ownerName} />
              <TestimonialCard text={testimonialText.testimonials[5].text} logo={testimonialText.testimonials[5].logo} storeName={testimonialText.testimonials[5].storeName} ownerName={testimonialText.testimonials[5].ownerName} />
            </>
          )
        }
      </div>
    </section>
  )
}

export default Testimonial