import { useEffect, useState } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import Button from '../components/Button';

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

  // const logoSize = Math.max(68, 150 - scrollValue)
  const logoSize = 68

  return (
    <nav className='navbar'>
      <Link href='/' style={{ position: 'relative', width: `${logoSize}px`, height: `${logoSize}px` }}>
        <Image 
          src="/Logo.svg" 
          alt="Roraima Jardines logo" 
          fill
          style={{ objectFit: 'contain', transition: 'width 0.1s ease-out' }}
          priority
        />
      </Link>
      <ul className='links-container'>
        <li className='link'><Link href='/productos/'>Productos</Link></li>
        <li className='link'><Link href='/jardin'>Haz tu Jardín</Link></li>
        <li className='link'><Link href='/historia'>Nuestra Historia</Link></li>
        <li className='link'><Link href='/contacto'>Contacto</Link></li>
        <li className='link'><Button text={'Puntos de venta'} /></li>
      </ul>
    </nav>
  );
}

export default Navbar;