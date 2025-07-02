import Head from "next/head";
import dynamic from "next/dynamic";
import { useEffect } from "react";

const PuntosDeVentaNoSSR = dynamic(() => import("@/components/PuntosDeVenta"), {
  ssr: false,
});

export default function Puntos({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage(4);
  }, []);

  return (
    <>
      <Head>
        <title>Puntos de Venta - Roraima Jardines</title>
        <meta name="description" content="Discover our amazing products!" />
        <meta name="theme-color" content="#1e3321" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <PuntosDeVentaNoSSR />
    </>
  );
}
