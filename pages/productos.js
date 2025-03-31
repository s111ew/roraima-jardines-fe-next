import Head from "next/head";
import Products from "@/components/Products";

export default function Productos() {
  return (
    <>
      <Head>
        <title>Productos - Roraima Jardines</title>
        <meta name="description" content="Discover our amazing products!" />
      </Head>
      <Products />
    </>
  );
}
