import Head from "next/head";
import HazTuJardin from "@/components/HazTuJardin";
import { useEffect } from "react";

export default function Jardin({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage(2);
  }, []);

  return (
    <>
      <Head>
        <title>Jardín - Roraima Jardines</title>
        <meta
          name="description"
          content="Sigue nuestro calendario de preparaciones, sembrado, abonado y mantenimiento para sacarle el mejor partido a tu jardín durante todo el año. "
        />
        <meta name="theme-color" content="#1e3321" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <HazTuJardin />
    </>
  );
}
