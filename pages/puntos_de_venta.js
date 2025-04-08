import Head from "next/head";
import PuntosDeVenta from "@/components/PuntosDeVenta";

export default function Puntos() {
  return (
    <>
      <Head>
        <title>Puntos de Venta - Roraima Jardines</title>
        <meta name="description" content="Discover our amazing products!" />
      </Head>
      <PuntosDeVenta />
    </>
  );
}
