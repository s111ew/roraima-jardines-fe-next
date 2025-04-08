import { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Button from '../components/Button';
import styles from '../styles/Navbar.module.css'

function Navbar() {
  const [scrollValue, setScrollValue] = useState(0)
  
  useEffect(() => {
    function onScroll() {
      setScrollValue(window.scrollY);
      console.log(scrollValue)
    }

    window.addEventListener('scroll', onScroll);
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
  });
  }

  // const logoSize = Math.max(68, 150 - scrollValue)
  const logoSize = 68

  return (
    <nav className={styles.navbar}>
      <Link href='/' style={{ position: 'relative', width: `${logoSize}px`, height: `${logoSize}px` }}>
        <Image 
          src="/Logo.svg" 
          alt="Roraima Jardines logo" 
          fill
          style={{ objectFit: 'contain', transition: 'width 0.1s ease-out' }}
          priority
        />
      </Link>
      <ul className={styles.linksContainer}>
        <li className={styles.link}><Link href='/productos'>Productos</Link></li>
        <li className={styles.link}><Link href='/jardin'>Haz tu Jardín</Link></li>
        <li className={styles.link}><Link href='/historia'>Nuestra Historia</Link></li>
        <li className={styles.link}><span onClick={scrollToBottom}>Contacto</span></li>
        <li className={styles.link}><Link href='/puntos_de_venta'><Button text={'Puntos de venta'} /></Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;