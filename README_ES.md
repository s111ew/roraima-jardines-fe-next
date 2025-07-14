# **_Roraima Jardines_**

Información estática de la página web de Roraima Jardines.

# Pila de tecnología

- [Next.js](https://nextjs.org/) Routing y agrupación
- [React](https://react.dev/) Desarrollo basado en componentes
- [Leaflet.js](https://leafletjs.com/) Representación de componentes del mapa
- [Open Street Map](https://www.openstreetmap.org/) Mapa de Open Source

# Estructura del proyecto

- /pages - Componentes basados ​​en rutas asignados a las URL de la página (e.g. /productos/)
- /components - Componentes de interfaz de usuario reutilizables
- /public - Recursos estáticos (e.g imágenes, fuentes, archivos de texto)
- /styles - Archivos CSS modulares para aplicar estilo a cada componente
- /node_modules - Carpeta autogenerada que contiene las dependencias del proyecto
- .gitignore
- eslint.config.mjs
- jsconfig.json
- next.config.mjs
- package-lock.json
- package.json
- README.md

# Instrucciones de configuración

1. Clonar repositorio

```
git clone git@github.com:s111ew/roraima-jardines-fe-next.git
cd roraima-jardines-fe-next
```

2. Instalar dependencias

```
npm install
```

3. Ejecutar servidor de desarrollo

```
npm run dev
```

# Construcción e implementación

Se puede crear una compilación de producción del proyecto utilizando Next.js en la carpeta `/out` usando:

```
npm run build
```

El proyecto utiliza actualmente Github Pages para la implementación mediante el paquete npm `gh-pages`, pero puede cambiarse eliminando la dependencia `gh-pages` del archivo `package.json` y configurando una implementación propia. Se puede implementar mediante:

```
npm run deploy
```

Esto también activa el script `npm run build`.

# Estructura detallada del proyecto

## /components

```
[components]
    ├── Accordion.jsx
    ├── Button.jsx
    ├── ButtonAlt.jsx
    ├── ContactForm.jsx
    ├── Err.jsx <- 404 Página
    ├── Footer.jsx
    ├── HazTuJardin.jsx <- Haz Tu Jardin Página
    ├── Hero.jsx
    ├── Historia.jsx <- Nuestra Historia Página
    ├── ImageCard.jsx
    ├── ImageCarousel.jsx
    ├── Input.jsx
    ├── Map.jsx
    ├── Navbar.jsx
    ├── ProductCardHomepage.jsx
    ├── ProductCardProduct.jsx
    ├── ProductCardsHomepage.jsx
    ├── Products.jsx <- Nuestra Productos Página
    ├── PuntosDeVenta.jsx <- Puntos de Venta Página
    ├── RollingText.jsx
    ├── SelectAccordion.jsx
    ├── StoreCard.jsx
    ├── Table.jsx
    ├── TestimonialCard.jsx
    ├── TestimonialCarousel.jsx
    └── Testimonials.jsx
```

Elementos de interfaz de usuario reutilizables que se utilizan como bloques de construcción para cada página.

## /pages

```
[pages]
    ├── 404.js
    ├── _app.js
    ├── historia.js
    ├── index.js
    ├── jardin.js
    ├── productos.js
    └── puntos_de_venta.js
```

Página compuesta por los componentes servidos en cada ruta, correspondientes a cada nombre de archivo. Contiene el elemento `<head>` para cada página.

## /styles

```
[styles]
    ├── Accordion.module.css
    ├── Button.module.css
    ├── ButtonAlt.module.css
    ├── ContactForm.module.css
    ├── Err.module.css
    ├── Footer.module.css
    ├── HazTuJardin.module.css
    ├── Hero.module.css
    ├── Historia.module.css
    ├── ImageCard.module.css
    ├── ImageCarousel.module.css
    ├── Input.module.css
    ├── Navbar.module.css
    ├── ProductCardHomepage.module.css
    ├── ProductCardsHomepage.module.css
    ├── Productos.module.css
    ├── PuntosDeVenta.module.css
    ├── SelectAccordion.module.css
    ├── StoreCard.module.css
    ├── Table.module.css
    ├── TestimonialCard.module.css
    ├── TestimonialCarousel.module.css
    ├── Testimonials.module.css
    └── globals.css <- Global styles contained here such as colour variables
```

Archivo CSS modular correspondiente a cada componente.

## /public

```
[public]
    ├── ErrorIcon.svg
    ├── Favicon.svg
    ├── Logo.svg
    ├── LogoBlk.svg
    ├── LogoCol.svg
    ├── Sen_variable.woff2
    ├── Texture.png
    ├── arrow_black.svg
    ├── arrow_white.svg
    ├── burger.svg
    ├── close.svg
    ├── [data]
        ├── locations.js
        ├── prefix.js
        ├── seasons.js
        ├── stores.js
        └── [text]
            ├── hazTuJardin.js
            ├── hero.js
            ├── historia.js
            ├── homepageProducts.js
            ├── notFound.js
            ├── products.js
            ├── puntosDeVenta.js
            └── testimonials.js
    ├── download_pdf.svg
    ├── facebook_black.svg
    ├── [files]
        └── Guía_Roraima_Jardines.pdf
    ├── [historia_images]
        ├── Story 10.webp
        ├── Story 5.webp
        ├── Story 6.webp
        ├── Story1.webp
        ├── Story11.webp
        ├── Story2.webp
        ├── Story3.webp
        ├── Story4.webp
        ├── Story7.webp
        └── Story8.webp
    ├── [homepage_images]
        ├── HP0.webp
        ├── HP1.webp
        ├── HP10.webp
        ├── HP11.webp
        ├── HP12.webp
        ├── HP13.webp
        ├── HP14.webp
        ├── HP15.webp
        ├── HP2.webp
        ├── HP3.webp
        ├── HP4.webp
        ├── HP5.webp
        ├── HP6.webp
        ├── HP8.webp
        └── HP9.webp
    ├── instagram_black.svg
    ├── marker.png
    ├── [not_found_images]
        ├── NF1.webp
        ├── NF2.webp
        ├── NF3.webp
        └── NF4.webp
    ├── [product_images]
        ├── Huerto-1.webp
        ├── Huerto-2.webp
        ├── Plantas 1.webp
        ├── Plantas 2.webp
        ├── Sustrato 1.webp
        ├── Sustrato 2.webp
        └── huerto2.webp
    ├── [product_showcase]
        ├── Huerto1.webp
        ├── Huerto2.webp
        ├── Huerto3.webp
        ├── Huerto4.webp
        ├── Plantas1.webp
        ├── Plantas1small.webp
        ├── Plantas2.webp
        ├── Plantas3.webp
        ├── Plantas4.webp
        ├── Plantas4small.webp
        ├── Plantas5.webp
        ├── Sustrato1.webp
        ├── Sustrato2.webp
        ├── Sustrato3.webp
        └── Sustrato4.webp
    ├── quoteIcon.svg
    ├── [testimonial_images]
        ├── delicias.webp
        ├── flores-benede.webp
        ├── flores-carmen.webp
        ├── floristeria-el-valle.webp
        ├── jardineria-vela.webp
        └── rossiflor.webp
    └── [tools]
        └── tools.js
```

Recursos estáticos, incluyendo fuentes e imágenes. Las imágenes se organizan en archivos correspondientes a cada página y tienen el formato `.webp`.

Los componentes no contienen texto codificado; todo reside en un archivo en `public/data/text`, uno por cada página. Esto crea un "mini CMS" donde el texto se puede editar y reemplazar fácilmente sin necesidad de profundizar en el código.

# Próximos pasos:

## Conectar el formulario de contacto con la bandeja de entrada de correo electrónico

Hay un formulario de contacto en el componente `Footer.jsx` que contiene los siguientes campos:

- Nombre
- Correo electrónico
- Mensaje

Sin embargo, esto aún no está conectado a ninguna bandeja de entrada de correo electrónico y será necesario agregar el código para esta función.

La sección correspondiente se encuentra en el archivo `components/ContactForm.jsx`, en la línea `49`, dentro de la función `handleSubmit()`. He dejado un comentario en el código (`// HANDLE MESSAGE SEND HERE`) para encontrarlo fácilmente.

# Cómo hacer cambios o añadir contenido:

## Configurar SEO

Cada archivo en la carpeta `/pages/` representa una página HTML renderizada. Estos archivos también contienen el elemento `<head>` para cada página. Aquí es donde se pueden configurar los metadatos de cada página.
Como ejemplo, puedes leer a continuación el elemento `<head>` para la página Productos en `/pages/productos.js`:

```
import Head from "next/head";
import Products from "@/components/Products";
import { useEffect } from "react";

export default function Productos({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  return (
    <>
      <Head>
        <title>Productos - Roraima Jardines</title>
        <meta name="Productos" content="" /> /* EDITAR METADATOS DE LA PÁGINA AQUÍ */
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
```

## Añadir un punto de venta

Los datos de las tiendas se encuentran en el archivo `public/data/stores.js` y se importan al componente `PuntosDeVenta.jsx` durante la compilación.

Estos datos se pueden editar, eliminar o añadir editando la matriz de objetos `stores` en este archivo, asegurándose de que las nuevas entradas sean un objeto JS válido con el siguiente formato:

| Clave    | Ejemplo                                                                                                                                                                                                                                                                | Descripción                                                                                                                                                             | Tipo de datos |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| index    | `0`                                                                                                                                                                                                                                                                    | Clave numérica usada para renderizar el orden inicial de las tiendas en el componente. Debe ser única y secuencial.                                                     | int           |
| name     | `"Viveros Delicias"`                                                                                                                                                                                                                                                   | Nombre del punto de venta                                                                                                                                               | string        |
| street   | `"C/ La Estación S/N"`                                                                                                                                                                                                                                                 | Dirección del punto de venta                                                                                                                                            | string        |
| zip      | `"50120 - Zaragoza"`                                                                                                                                                                                                                                                   | Código postal de la tienda y el nombre de la ciudad                                                                                                                     | string        |
| tel      | `"692 99 37 52"`                                                                                                                                                                                                                                                       | Número de teléfono de la tienda                                                                                                                                         | string        |
| isLink   | `true`                                                                                                                                                                                                                                                                 | Valor booleano que indica si la tienda tiene una página web dirigida al cliente (si tiene solo email, debe ser `false`). Se usa para renderizar el enlace como clicable | bool          |
| email    | `"https://www.hortaldelcanal.es"`                                                                                                                                                                                                                                      | Enlace al sitio web o dirección de correo electrónico de la tienda                                                                                                      | string        |
| hours    | `{ lunes: "8:30 - 13:00, 16:00 - 19:00", martes: "8:30 - 13:00, 16:00 - 19:00", miercoles: "8:30 - 13:00, 16:00 - 19:00", jueves: "8:30 - 13:00, 16:00 - 19:00", viernes: "8:30 - 13:00, 16:00 - 19:00", sabado: "8:30 - 13:00, 16:00 - 19:00", domingo: "Cerrado", }` | Horario de apertura de la tienda representado como un objeto con cada día de la semana como clave y el horario como valor (formato string)                              | Obj string    |
| products | `["5L, 10L, 20L, 50L", "50L"]`                                                                                                                                                                                                                                         | Lista de tamaños de productos disponibles en la tienda                                                                                                                  | arr string    |
| mapsLink | `"https://maps.app.goo.gl/ze6MZumWBwxopo8x7"`                                                                                                                                                                                                                          | Enlace a la tienda en Google Maps                                                                                                                                       | string        |
| coords   | `[41.69892, -0.97834]`                                                                                                                                                                                                                                                 | Coordenadas de ubicación de la tienda en formato `[Latitud, Longitud]`, disponibles en Google Maps u Open Street Map                                                    | arr float     |

Dando como resultado un objeto que se ve así:

```
const stores = [
  {
    index: 0,
    name: "Viveros Delicias",
    street: "C/ La Estación S/N",
    zip: "50120 - Zaragoza",
    tel: "692 99 37 52",
    isLink: false,
    email: "",
    hours: {
      lunes: "8:30 - 13:00, 16:00 - 19:00",
      martes: "8:30 - 13:00, 16:00 - 19:00",
      miercoles: "8:30 - 13:00, 16:00 - 19:00",
      jueves: "8:30 - 13:00, 16:00 - 19:00",
      viernes: "8:30 - 13:00, 16:00 - 19:00",
      sabado: "8:30 - 13:00, 16:00 - 19:00",
      domingo: "Cerrado",
    },
    products: ["5L, 10L, 20L, 50L", "50L"],
    mapsLink: "https://maps.app.goo.gl/ze6MZumWBwxopo8x7",
    coords: [41.69892, -0.97834],
  },
  ...
```

Por lo tanto, la información que Jose Luis te debe dar para rellenar correctamente un nuevo objeto de tienda es la siguiente:
| Información |
| --- |
| Nombre de la tienda |
| Dirección de la tienda |
| Teléfono de la tienda |
| Sitio web/Correo electrónico de la tienda |
| Horario de la tienda |
| Productos disponibles en la tienda |
| Enlace a la tienda en Google Maps |

## Añadir un testimonio

Los datos de los testimonios se encuentran en el archivo `public/data/text/testimonials.js` y se importan al componente `Testimonial.jsx` durante la compilación.

Estos datos se pueden editar, eliminar o añadir editando la matriz `testimonials` en el objeto `testimonialsText` de este archivo, con el siguiente formato (NOTA: este componente solo mostrará un máximo de 6 testimonios, por lo que para añadir uno nuevo, Jose Luis tiene que eliminar uno):

| Clave     | Ejemplo                                                                                      | Descripción                                                                                                 | Tipo de datos |
| --------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | ------------- |
| text      | `"Gran calidad de los productos, precio adecuado y buen servicio de entrega a las tiendas."` | Cuerpo del testimonio o reseña                                                                              | string        |
| logo      | `"${prefix}/testimonial_images/flores-carmen.webp"`                                          | Ruta al archivo de imagen del logo de la tienda (NOTA: la ruta relativa debe tener el prefijo `${prefix}/`) | string        |
| storeName | `"Flores Carmen"`                                                                            | Nombre de la tienda que emite la reseña                                                                     | string        |
| ownerName | `"Nacho y Leticia"`                                                                          | Nombre del propietario o propietarios de la tienda                                                          | string        |

Dando como resultado un objeto que se ve así:

```
...
testimonials: [
    {
      text: "Gran calidad de los productos, precio adecuado y buen servicio de entrega a las tiendas.",
      logo: `${prefix}/testimonial_images/flores-carmen.webp`,
      storeName: "Flores Carmen",
      ownerName: "Nacho y Leticia",
    },
    ...
```

## Editar texto

Todo el texto de la página web se encuentra en la carpeta `public/data/text/` y está dividido por página. Esto facilita la edición del texto sin tener que revisar los archivos de los componentes; simplemente busca y reemplaza.

El texto tiene el formato de un objeto para cada página, con claves para cada sección. Por ejemplo, el texto del elemento de título `<h1>` de la página de inicio se encuentra en `public/data/text/hero.js` y se puede encontrar en `heroText.title`.

```
const heroText = {
  title: "Sustrato y abono 100% ecológico",
  ...
```

Algunos textos están en forma de matrices, por ejemplo, los 3 párrafos informativos de la página de inicio se pueden encontrar en `public/data/text/hero.js` en `heroText.information`, pero editarlos es el mismo proceso que el anterior, solo buscar y reemplazar:

```
...
information: [
    {
      title: "100% Ecológico",
      subtitle: "Evita la dependencia de abonos de origen químico.",
    },
    {
      title: "Ahorra agua",
      subtitle: "Gracias a su alto contenido en materia orgánica.",
    },
    {
      title: "Hecho en Aragón",
      subtitle: "Producico y envasado en Pinseque, Zaragoza.",
    },
  ],
};
```
