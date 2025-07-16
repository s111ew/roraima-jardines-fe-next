import Head from "next/head";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <>
      <Head>
        <link rel="icon" href={`/Favicon.svg`}></link>
      </Head>
      <Navbar currentPage={currentPage} />
      <div className="content-wrapper">
        <Component {...pageProps} setCurrentPage={setCurrentPage} />
      </div>
      <Footer />
    </>
  );
}
