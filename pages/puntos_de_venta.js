import Head from "next/head";
import PuntosDeVenta from "@/components/PuntosDeVenta";

export default function Puntos() {
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
      <PuntosDeVenta />
    </>
  );
}
