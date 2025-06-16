import Head from "next/head";
import Historia from "@/components/Historia";

export default function NuestraHistoria() {
  return (
    <>
      <Head>
        <title>Historia - Roraima Jardines</title>
        <meta name="description" content="Discover our amazing products!" />
        <meta name="theme-color" content="#1e3321" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </Head>
      <Historia />
    </>
  );
}
