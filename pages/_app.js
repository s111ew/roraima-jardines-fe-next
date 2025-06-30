import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [currentPage, setCurrentPage] = useState(0);
  return (
    <>
      <Navbar currentPage={currentPage} />
      <div className="content-wrapper">
        <Component {...pageProps} setCurrentPage={setCurrentPage} />
      </div>
      <Footer />
    </>
  );
}
