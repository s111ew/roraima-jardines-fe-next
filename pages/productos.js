import Head from "next/head";
import Products from "@/components/Products";
import { useEffect } from "react";

export default function Productos({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <>
      <Head>
        <title>Productos - Roraima Jardines</title>
        <meta
          name="description"
          content="Enceuntra la información mas detallada sobre todos nuestros productos y cómo usarlos."
        />
        <meta name="theme-color" content="#1e3321" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <Products />
    </>
  );
}
