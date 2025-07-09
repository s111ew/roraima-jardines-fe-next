import styles from "../styles/PuntosDeVenta.module.css"
import Button from "./Button"
import Input from "./Input"
import React from "react"
import { useState, useEffect, useRef } from "react"
import StoreCard from "./StoreCard"
import stores from "@/public/data/stores"
import { prefix } from "@/public/data/prefix"
import locations from "@/public/data/locations"
import calculateDistance from "@/public/tools/tools"
import L, { map } from "leaflet"
import "leaflet/dist/leaflet.css"
import puntosText from "@/public/data/text/puntosDeVenta"

export default function PuntosDeVenta() {
  const [pageWidth, setPageWidth] = useState(0);
  const [zipCode, setZipCode] = useState(null);
  const [isValidZipCode, setIsValidZipCode] = useState(true);
  const [isSearched, setIsSearched] = useState(false);
  const [mapHeight, setMapHeight] = useState(undefined);
  const [storesToRender, setStoresToRender] = useState(stores);
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const cardRefs = useRef({});

  useEffect(() => {
    setPageWidth(window.innerWidth);

    function onResize() {
      setPageWidth(window.innerWidth);
    }

    window.addEventListener('resize', onResize);

    onResize();

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
      el.classList.add('animate');
    });

    if (!mapRef.current) {
      mapRef.current = L.map(mapContainerRef.current).setView([41.65222, -0.88073], 12);

      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
       attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(mapRef.current);
      const icon = L.icon({
        iconUrl: `${prefix}/marker.png`,
        iconSize: [25, 41],
        iconAnchor: [12, 41]
      })
      stores.forEach(store => {
        const marker = L.marker(store.coords, { icon }).addTo(mapRef.current);
    
        marker.bindPopup(`${store.name}, ${store.zip}`, { offset: L.point(1, -31) });

        marker.on("click", () => {
          const ref = cardRefs.current[store.index];

          const container = document.querySelector(`.${styles.storeCardContainer}`);
          const element = ref.current;
          if (container && element) {
            const containerTop = container.getBoundingClientRect().top;
            const elementTop = element.getBoundingClientRect().top;
            const scrollOffset = elementTop - containerTop;
            container.scrollTo({
              top: container.scrollTop + scrollOffset,
              behavior: "smooth",
            });
          }
        });
      });
    }

    if (pageWidth < 500 && mapContainerRef.current) {
      setMapHeight(mapContainerRef.current.offsetWidth);
    }

    return () => {
      window.removeEventListener('resize', onResize);
    };

  }, [pageWidth]);

  let storeCards = storesToRender.map(store => {

    if (!cardRefs.current[store.index]) {
      cardRefs.current[store.index] = React.createRef();
    }

    return (
      <div key={store.index} ref={cardRefs.current[store.index]}>
        <StoreCard
          storeName={store.name}
          distance={store.distance}
          address={store.street}
          zip={store.zip}
          phone={store.tel}
          isLink={store.isLink}
          email={store.email}
          hours={store.hours}
          sizes={store.products}
          link={store.mapsLink}
          isSearched={isSearched}
        />
      </div>
    );
  })

  const handleChange = (e) => {
    setZipCode(e.target.value);
    
    if (!isValidZipCode) {
      setIsValidZipCode(true);
    }
  }

  const handleClick = () => {
    if (zipCode.length === 5 && /^\d+$/.test(zipCode) && locations[zipCode] !== undefined) {
      const userCoords = locations[zipCode];

      const updatedStores = storesToRender.map((store) => ({
        ...store,
        distance: calculateDistance(store.coords, userCoords)
      }))

      updatedStores.sort((a, b) => a.distance - b.distance);

      setStoresToRender(updatedStores);

      mapRef.current.flyTo(userCoords, 14)

      setIsSearched(true);
    } else {
      setIsValidZipCode(false)
    }
  }

  const subtitleText = puntosText.subtitles.map((text, index) => {
      return(
        <p className="fade-in" style={{ animationDelay: `${(index + 1) * 0.25}s` }}>{text}</p>
      )
    })

  return(
    <>
      <div 
        className={`${styles.section} ${styles.intro}`}
        style={{
          backgroundImage: `url(${prefix}/Texture.png), var(--hero-background)`,
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "auto, cover",
        }}>
        <h1 className={`${styles.title} fade-in`}>{puntosText.title}</h1>
        <div className={styles.introTextContainer}>
          {subtitleText}
        </div>
      </div>
      <div 
        className={`${styles.section} ${styles.body}`}
        style={{
          backgroundImage: `url(${prefix}/Texture.png), var(--product-segment-2-background)`,
          backgroundRepeat: "repeat, no-repeat",
          backgroundSize: "auto, cover",
        }}>
        <div className={styles.inputWrapper}>
            <p>Código Postal</p>
            <div className={styles.inputContainer}>
              <Input isErr={!isValidZipCode} onChange={handleChange} />
              <Button onClick={handleClick} text={'Buscar'} colour='green'/>
            </div>
        </div>
        <div className={styles.mapsContainer}>
          <div className={styles.storeCardContainer}>
            {storeCards}
          </div>
          <div 
            ref={mapContainerRef} 
            className={styles.mapPlaceholder}
            style={pageWidth < 500 && mapHeight ? {height: `${mapHeight}px`} : undefined}
          ></div>
        </div>
      </div>
    </>
  )
}