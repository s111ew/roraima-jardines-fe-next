import { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Button from '../components/Button';
import styles from '../styles/Navbar.module.css'
import { prefix } from '@/public/data/prefix';

function Navbar() {
  const [pageWidth, setPageWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const prevWidthRef = useRef(0); // Track previous width

  useEffect(() => {
    function onResize() {
      const currentWidth = window.innerWidth;

      // Check for transition from <1200 to >=1200
      if (prevWidthRef.current < 1200 && currentWidth >= 1200 && isOpen) {
        setIsOpen(false);
      }

      setPageWidth(currentWidth);
      prevWidthRef.current = currentWidth;
    }

    // Initial setup
    setPageWidth(window.innerWidth);
    prevWidthRef.current = window.innerWidth;
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen]);

  function toggleOpen() {
    if (pageWidth < 1200) {
      setIsOpen((prev) => !prev);
    }
  }

  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  return (
    <nav 
      className={styles.navbar}
      style={isOpen && pageWidth < 1200 ? { height: "100vh" } : undefined}
    >
      <div className={styles.navContainer}>
        <Link 
          href='/' 
          style={{ position: 'relative', width: `${68}px`, height: `${68}px` }} 
          onClick={() => {
            if (pageWidth < 1200 && isOpen) {
              setIsOpen(false)
            }
          }}
        >
          <Image 
            src={`${prefix}/Logo.svg`}
            alt="Roraima Jardines logo" 
            fill
            style={{ objectFit: 'contain', transition: 'width 0.1s ease-out' }}
            priority
          />
        </Link>
        {
          pageWidth < 1200 && (
            <div 
              className={styles.burgerContainer}
              onClick={toggleOpen}
            >
              {isOpen ? <img src={`${prefix}/close.svg`}></img> : <img src={`${prefix}/burger.svg`}></img>}
            </div>
          )
        }
        {
          pageWidth >= 1200 && (
            <ul className={styles.linksContainer}>
              <li className={styles.link} onClick={toggleOpen} ><Link href='/productos'>Productos</Link></li>
              <li className={styles.link} onClick={toggleOpen} ><Link href='/jardin'>Haz tu Jardín</Link></li>
              <li className={styles.link} onClick={toggleOpen} ><Link href='/historia'>Nuestra Historia</Link></li>
              <li className={styles.link} onClick={toggleOpen} ><span onClick={scrollToBottom}>Contacto</span></li>
              <li className={`${styles.link} ${styles.buttonLink}`} onClick={toggleOpen}><Link href='/puntos_de_venta'><Button text={'Puntos de venta'} colour='green'/></Link></li>
            </ul>
          )
        }
      </div>
      {
        (pageWidth < 1200 && isOpen)  && (
          <ul className={styles.linksContainerVertical}>
            <li className={styles.link} onClick={toggleOpen} ><Link href='/productos'>Productos</Link></li>
            <li className={styles.link} onClick={toggleOpen} ><Link href='/jardin'>Haz tu Jardín</Link></li>
            <li className={styles.link} onClick={toggleOpen} ><Link href='/historia'>Nuestra Historia</Link></li>
            <li className={styles.link} onClick={toggleOpen} ><span onClick={scrollToBottom}>Contacto</span></li>
            <li className={styles.link} onClick={toggleOpen} ><Link href='/puntos_de_venta'><Button text={'Puntos de venta'} colour='green'/></Link></li>
          </ul>
        )
      }
    </nav>
  );
}

export default Navbar;
