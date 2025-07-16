import Head from "next/head";
import Hero from "@/components/Hero";
import ProductCards from "@/components/ProductCardsHomepage";
import Testimonial from "@/components/Testimonials";
import { useEffect } from "react";

export default function Home({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage(0);
  }, []);

  return (
    <>
      <Head>
        <title>Roraima Jardines</title>
        <meta
          name="description"
          content="Sustrato y abono 100% ecológico, hecho en Aragón. Para plantas, jardín o huerto. Notarás la diferencia en la salud de tus plantas y el sabor de tus frutos."
        />
        <meta name="theme-color" content="#1e3321" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <Hero />
      <ProductCards />
      <Testimonial />
    </>
  );
}
