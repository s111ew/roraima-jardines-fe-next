import Head from "next/head";
import Products from "@/components/Products";

export default function Productos() {
  return (
    <>
      <Head>
        <title>Productos - Roraima Jardines</title>
        <meta name="Productos" content="" />
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
