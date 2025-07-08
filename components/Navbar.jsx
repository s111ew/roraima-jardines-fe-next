import { useEffect, useRef, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Button from '../components/Button';
import styles from '../styles/Navbar.module.css'
import { prefix } from '@/public/data/prefix';

function Navbar({ currentPage }) {
  const [pageWidth, setPageWidth] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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

  function scrollToFooter() {
    const footer = document.getElementById('footer');
    if (footer) {
      footer.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleContactoClick() {
    toggleOpen();
    scrollToFooter();
  }



  function mouseEnter() {
    if (!isVisible) {
      setIsVisible(true)
    }
  }

  function mouseLeave() {
    if (isVisible) {
      setIsVisible(false)
    }
  }

  return (
    <nav 
      className={styles.navbar}
      style={{
        backgroundImage: `url(${prefix}/Texture.png), var(--navbar-background)`,
        backgroundRepeat: "repeat, no-repeat",
        backgroundSize: "auto, cover",
        ...(isOpen && pageWidth < 1200 ? { height: "100vh" } : {}),
      }}
    >
      <div className={styles.navContainer}>
        <Link 
          tabIndex={0}
          href='/' 
          className={`${styles.logoContainer} ${pageWidth < 1200 && isOpen ? styles.middle : ''}`}
          onMouseEnter={mouseEnter}
          onMouseLeave={mouseLeave}
          onClick={() => {
            if (pageWidth < 1200 && isOpen) {
              setIsOpen(false)
            }
          }}
        >
          <Image 
            src={`${prefix}/LogoCol.svg`}
            alt="Roraima Jardines logo"
            style={{zIndex: "10000", transition: "opacity 0.3s ease", opacity: isVisible ? "1" : "0"}} 
            fill
            priority
          />
          <Image 
            src={`${prefix}/Logo.svg`}
            alt="Roraima Jardines logo" 
            fill
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
              <li className={styles.link} onClick={toggleOpen} ><Link tabIndex={0} style={currentPage === 1 ? { fontWeight: "600" } : undefined } href='/productos'>Productos</Link></li>
              <li className={styles.link} onClick={toggleOpen} ><Link tabIndex={0} style={currentPage === 2 ? { fontWeight: "600" } : undefined } href='/jardin'>Haz tu Jardín</Link></li>
              <li className={styles.link} onClick={toggleOpen} ><Link tabIndex={0} style={currentPage === 3 ? { fontWeight: "600" } : undefined } href='/historia'>Nuestra Historia</Link></li>
              <li className={styles.link} onClick={toggleOpen} ><span tabIndex={0} onClick={scrollToFooter}>Contacto</span></li>
              <li className={`${styles.link} ${styles.buttonLink}`} onClick={toggleOpen}><Link tabIndex={0} href='/puntos_de_venta'><Button text={'Puntos de venta'} colour='green'/></Link></li>
            </ul>
          )
        }
      </div>
      {
        (pageWidth < 1200 && isOpen)  && (
          <ul className={styles.linksContainerVertical}>
            <Link style={currentPage === 1 ? { fontWeight: "600" } : undefined } href='/productos' onClick={toggleOpen}><li className={styles.link}>Productos</li></Link>
            <Link style={currentPage === 2 ? { fontWeight: "600" } : undefined } href='/jardin'  onClick={toggleOpen}><li className={styles.link}>Haz tu Jardín</li></Link>
            <Link style={currentPage === 3 ? { fontWeight: "600" } : undefined } href='/historia'  onClick={toggleOpen}><li className={styles.link}>Nuestra Historia</li></Link>
            <li className={styles.link} onClick={handleContactoClick}>Contacto</li>
            <li className={`${styles.link} ${styles.buttonLink}`} onClick={toggleOpen} ><Link href='/puntos_de_venta'><Button text={'Puntos de venta'} colour='green'/></Link></li>
          </ul>
        )
      }
    </nav>
  );  
}

export default Navbar;
