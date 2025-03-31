import Head from "next/head";
import Hero from "@/components/Hero";
import ProductCards from "@/components/ProductCards";
import Testimonial from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Roraima Jardines</title>
        <meta name="description" content="Discover our amazing products!" />
      </Head>
      <Hero />
      <ProductCards />
      <Testimonial />
    </>
  );
}
