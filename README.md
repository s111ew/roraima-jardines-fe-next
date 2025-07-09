# Roraima Jardines

Static information website for Roraima Jardines.

## Tech Stack

- [Next.js](https://nextjs.org/) Routing and bundling
- [React](https://react.dev/) Component based development
- [Leaflet.js](https://leafletjs.com/) Rendering map components
- [Open Street Map](https://www.openstreetmap.org/) Open source mapping

## Project Structure

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

## Setup Instructions

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

## Build and deployment

A production build of the project can be built using Next.js in the `/out` folder using:

```
npm run build
```

The project is currently using Github Pages for deployment via the gh-pages npm package. It can be deployed using:

```
npm run deploy
```

This also triggers the `npm run build` script.
