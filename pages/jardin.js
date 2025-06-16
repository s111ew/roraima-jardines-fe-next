import Head from "next/head";
import HazTuJardin from "@/components/HazTuJardin";

export default function Jardin() {
  return (
    <>
      <Head>
        <title>Jardín - Roraima Jardines</title>
        <meta name="description" content="Discover our amazing products!" />
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
