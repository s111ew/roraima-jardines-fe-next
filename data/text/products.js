import { prefix } from "@/out/data/prefix";

const productsText = {
  title: "Nuestros Productos",
  products: [
    {
      images: [
        { key: 1, src: `${prefix}/product_showcase/Sustrato1.webp` },
        { key: 2, src: `${prefix}/product_showcase/Sustrato2.webp` },
        { key: 3, src: `${prefix}/product_showcase/Sustrato3.webp` },
        { key: 4, src: `${prefix}/product_showcase/Sustrato4.webp` },
      ],
      title: "Sustrato Universal",
      desc: "Nuestro sustrato contiene todos los nutrientes necesarios para que tus plantas en jardín o maceta puedan desarrollarse a plenitud y las disfrutes en su máximo esplendor.",
      sizes: "5l, 10l, 20l, 50l",
      accordionTitlePrimary: "Propiedades Físicas",
      accordionContentPrimary: [
        "100% ecológico ya que es de origen orgánico",
        "Aporta los nutrientes necesarios para el desarrollo de plantas, arbustos, árboles, césped y gramíneas",
        "Ahorro de agua, por su estructura permite la retención de humedad y a la vez da salida al exceso de agua",
        "Aumenta la materia orgánica en el suelo. Reduce el uso de abonos de origen químico",
        "Mejora la permeabilidad del suelo",
        "Es suave al tacto",
      ],
      accordionTitleSecondary: "Producción",
      accordionContentSecondary: [
        "Vaporizada: Con este proceso se eliminan hongos, larvas, bacterias y pequeños insectos que perjudican el crecimiento de las plantas",
        "Envasada húmeda: ahorra agua desde el inicio",
      ],
    },
    {
      images: [
        { key: 1, src: `${prefix}/product_showcase/Huerto1.webp` },
        { key: 2, src: `${prefix}/product_showcase/Huerto2.webp` },
        { key: 3, src: `${prefix}/product_showcase/Huerto3.webp` },
        { key: 4, src: `${prefix}/product_showcase/Huerto4.webp` },
      ],
      title: "Huerto & Jardin",
      desc: "Nuestro abono permite aumentar la fertilidad del suelo, intensificando su capacidad para absorber los nutrientes necesarios para el desarrollo de las hortalizas.",
      sizes: "50l",
      accordionTitlePrimary: "Propiedades Físicas",
      accordionContentPrimary: [
        "100% ecológico ya que es de origen orgánico",
        "Aporta los nutrientes necesarios para el desarrollo de plantas, arbustos, árboles, césped y gramíneas",
        "Reduce las oscilaciones del PH del suelo.",
        "Favorece la aireación y oxigenación.",
        "Aumenta la retención de agua.",
      ],
      accordionTitleSecondary: "Producción",
      accordionContentSecondary: [
        "Vaporizada: Con este proceso se eliminan hongos, larvas, bacterias y pequeños insectos que perjudican el crecimiento de las plantas",
        "Envasada húmeda: ahorra agua desde el inicio",
      ],
    },
    {
      images: [
        { key: 1, src: `${prefix}/product_showcase/Plantas1.webp` },
        { key: 2, src: `${prefix}/product_showcase/Plantas2.webp` },
        { key: 3, src: `${prefix}/product_showcase/Plantas3.webp` },
        { key: 4, src: `${prefix}/product_showcase/Plantas4.webp` },
      ],
      imagesSmall: [
        { key: 1, src: `${prefix}/product_showcase/Plantas1small.webp` },
        { key: 2, src: `${prefix}/product_showcase/Plantas2.webp` },
        { key: 3, src: `${prefix}/product_showcase/Plantas3.webp` },
        { key: 4, src: `${prefix}/product_showcase/Plantas4small.webp` },
      ],
      title: "Plantas Ornamentales",
      desc: "Cultivamos variedades de plantas ornamentales poco comunes para hogares y jardines con nuestro sustrato. Disponible por encargo y próximamente en Etsy.",
      sizes: "",
      accordionTitlePrimary: "Variedades",
      accordionContentPrimary: [
        "Cáctus: Echinopsis, Arcoiris, Orejas de Conejo, Erizo, San Pedro, Mamillaria, Espiral, Aguja de Eva, Cacahuete...",
        "Suculentas: Jade, Aptenias, Mesen, Agaves, Aloe Vera, Euphorbia Meloformis, Yucca...",
        "Palmeras: Sago, Madagascar",
        "Arbustos espinosos: Coronas de Cristo",
        "Helechos",
      ],
      accordionTitleSecondary: "Producción",
      accordionContentSecondary: [
        "Todas nuestras plantas son producidas y cuidadas en Zaragoza, en sustrato o abono de Roraima Jardines.",
      ],
    },
  ],
};

export default productsText;
