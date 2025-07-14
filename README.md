# **_Roraima Jardines_**

Static information website for Roraima Jardines.

🇬🇧 NOTE: This README is available in Spanish in the file /README_ES.md
🇪🇸 NOTA: Este README está disponible en español en el archivo /README_ES.md

# Tech Stack

- [Next.js](https://nextjs.org/) Routing and bundling
- [React](https://react.dev/) Component based development
- [Leaflet.js](https://leafletjs.com/) Rendering map components
- [Open Street Map](https://www.openstreetmap.org/) Open source mapping

# Project Structure

- /pages - Route-based components mapped to site URLs (e.g. /productos/)
- /components - Reusable UI components
- /public - Static assets (e.g. images, fonts, text files)
- /styles - Modular CSS files to style each component
- /node_modules - Auto-generated folder containing project dependencies
- .gitignore
- eslint.config.mjs
- jsconfig.json
- next.config.mjs
- package-lock.json
- package.json
- README.md

# Setup Instructions

1. Clone repository

```
git clone git@github.com:s111ew/roraima-jardines-fe-next.git
cd roraima-jardines-fe-next
```

2. Install dependencies

```
npm install
```

3. Run development server

```
npm run dev
```

# Build and deployment

A production build of the project can be built using Next.js in the `/out` folder using:

```
npm run build
```

The project is currently using Github Pages for deployment via the `gh-pages` npm package, but this can be changed by removing the `gh-pages` dependancy from the `package.json` file and setting up your own deployment. It can be deployed using:

```
npm run deploy
```

This also triggers the `npm run build` script.

# Detailed Project Structure

## /Components

```
[components]
    ├── Accordion.jsx
    ├── Button.jsx
    ├── ButtonAlt.jsx
    ├── ContactForm.jsx
    ├── Err.jsx <- 404 Page
    ├── Footer.jsx
    ├── HazTuJardin.jsx <- Haz Tu Jardin Page
    ├── Hero.jsx
    ├── Historia.jsx <- Nuestra Historia Page
    ├── ImageCard.jsx
    ├── ImageCarousel.jsx
    ├── Input.jsx
    ├── Map.jsx
    ├── Navbar.jsx
    ├── ProductCardHomepage.jsx
    ├── ProductCardProduct.jsx
    ├── ProductCardsHomepage.jsx
    ├── Products.jsx <- Nuestra Productos Page
    ├── PuntosDeVenta.jsx <- Puntos de Venta Page
    ├── RollingText.jsx
    ├── SelectAccordion.jsx
    ├── StoreCard.jsx
    ├── Table.jsx
    ├── TestimonialCard.jsx
    ├── TestimonialCarousel.jsx
    └── Testimonials.jsx
```

Reusable UI elements used as building blocks for each page.

## /Pages

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

Page made up of components served at each route, corresponding to each file name. Contains `<head>` element for each page.

## /Styles

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

Modular CSS file corresponding to each component, used to style them.

## /Public

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

Static assets including fonts and images. Images are organised into files corresponding to each page and are in the format `.webp`.

There is no hard-coded text in the components, it all lives in a file in `public/data/text` - one for each page. This creates a 'mini CMS' where text can easily be edited/replaced without needing to dive into code.

# To Do:

## Connect contact form with email inbox

There is a contact form in the `Footer.jsx` component which has the following fields:

- Name
- Email Address
- Message

However, this is not yet hooked up to any email inbox and the code for this function will need to be added.

The relevant section is in the file `components/ContactForm.jsx` on line `49` within the function `handleSubmit()`. I have left a comment in the code (`// HANDLE MESSAGE SEND HERE`) to make this clearer.

# How To:

## Configure SEO

Each file in the `/pages/` folder represents an HTML page rendered. These files also contain the `<head>` element for each page. This is where the metadata for each page can be configured. For example, see below the `<head>` element for the Productos page at `/pages/productos.js`:

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
        <meta name="Productos" content="" /> /* EDIT PAGE METADATA HERE */
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

## Add a stockist

Stockist data lives in the file `public/data/stores.js` and is imported into the `PuntosDeVenta.jsx` component at build time.

These can be edited/removed/added by editing the array of `stores` objects in this file, making sure any new entries are a valid JS Object in the following format:

| Key      | Example                                                                                                                                                                                                                                                                | Description                                                                                                                                                                                    | Data Type  |
| -------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| index    | `0`                                                                                                                                                                                                                                                                    | Numeric key used to render the initial order of stores in the component - must be unique and sequential                                                                                        | int        |
| name     | `"Viveros Delicias"`                                                                                                                                                                                                                                                   | Name of stockist                                                                                                                                                                               | string     |
| street   | `"C/ La Estación S/N"`                                                                                                                                                                                                                                                 | Street address of stockist                                                                                                                                                                     | string     |
| zip      | `"50120 - Zaragoza"`                                                                                                                                                                                                                                                   | Zip code of store and optional city name                                                                                                                                                       | string     |
| tel      | `"692 99 37 52"`                                                                                                                                                                                                                                                       | Telephone number of store                                                                                                                                                                      | string     |
| isLink   | `true`                                                                                                                                                                                                                                                                 | Boolean value of whether store has a customer facing website (if the store has an email address instead of a website this should be `false` ) - used to render the website as a clickable link | bool       |
| email    | `"https://www.hortaldelcanal.es"`                                                                                                                                                                                                                                      | Website link OR Email address of store                                                                                                                                                         | string     |
| hours    | `{ lunes: "8:30 - 13:00, 16:00 - 19:00", martes: "8:30 - 13:00, 16:00 - 19:00", miercoles: "8:30 - 13:00, 16:00 - 19:00", jueves: "8:30 - 13:00, 16:00 - 19:00", viernes: "8:30 - 13:00, 16:00 - 19:00", sabado: "8:30 - 13:00, 16:00 - 19:00", domingo: "Cerrado", }` | Store's opening hours represented as an object with each day of the week as a key and the opening hours as a value (in string format)                                                          | Obj string |
| products | `["5L, 10L, 20L, 50L", "50L"]`                                                                                                                                                                                                                                         | List of item sizes that store stocks                                                                                                                                                           | arr string |
| mapsLink | `"https://maps.app.goo.gl/ze6MZumWBwxopo8x7"`                                                                                                                                                                                                                          | Link to store on Google Maps                                                                                                                                                                   | string     |
| coords   | `[41.69892, -0.97834]`                                                                                                                                                                                                                                                 | Stores location co-ordinates in the format `[Latitude, Longitude]` - available from Google Maps or Open Street Map                                                                             | arr float  |

Resulting in an object that looks like this:

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

Therefore, the information needed to fully populate a new store object is as follows:

- Store Name
- Store Address
- Store Telephone Number
- Store Website/Email Address
- Store Opening Hours
- Products stocked by store
- Link to store on Google Maps

## Add a testimonial

Testimonial data lives in the file `public/data/text/testimonials.js` and is imported into the `Testimonial.jsx` component at build time.

These can be edited/removed/added by editing the `testimonials` array in the `testimonialsText` object in this file, in the following format (NOTE: this component will only render a maximum of 6 testimonials so in order to add a new one, one must be removed):

| Key       | Example                                                                                      | Description                                                                                 | Data Type |
| --------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | --------- |
| text      | `"Gran calidad de los productos, precio adecuado y buen servicio de entrega a las tiendas."` | Body of testimonial/review                                                                  | string    |
| logo      | `"${prefix}/testimonial_images/flores-carmen.webp"`                                          | Path to image file of store's logo (NOTE: relative path must be prefixed with `${prefix}/`) | string    |
| storeName | `"Flores Carmen"`                                                                            | Name of store giving review                                                                 | string    |
| ownerName | `"Nacho y Leticia"`                                                                          | Name of owner(s) of store                                                                   | string    |

Resulting in an object that looks like this:

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

## Edit text

All content based text on the website lives in the folder `public/data/text/` and is split by page. This makes it easy to edit text without diving in to any of the component files - just search and replace.

The text is in the format of an Object for each page, with keys for each section. For example, the text on the title `<h1>` element on the Home page lives in `public/data/text/hero.js` and can be found at `heroText.title`:

```
const heroText = {
  title: "Sustrato y abono 100% ecológico",
  ...
```

Some text is in the form of arrays, for example the 3 informational paragraphs on the Home page can be found in `public/data/text/hero.js` at `heroText.information`, but editing these is the same process as above - just search and replace:

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
