# US State Fun Facts Map 🗺️

An interactive US map built with **Leaflet + OpenStreetMap** — hover over any state to learn a fun fact.

**Live demo:** https://jacoblbagent.github.io/us-fun-facts-map/

## Features

- **OpenStreetMap tiles** — real map with zoom and pan
- **US state polygons** — styled GeoJSON state boundaries
- **Hover to learn** — tooltip shows state name + fun fact
- **Dark theme** — deep stone background, green state fills

## Fun Facts

All 50 states have a unique fact, from *"Alaska has more coastline than all other states combined"* to *"Texas has its own power grid"*.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Leaflet** / **react-leaflet** (interactive map)
- **GeoJSON** — US state polygons from PublicaMundi
- **OpenStreetMap** tile layer

## Project Structure

```
src/
├── features/map/
│   ├── USMap.tsx      # Leaflet map with GeoJSON state layer
│   └── funFacts.ts    # Fun facts for all 50 states
├── App.tsx            # Shell layout
├── App.css            # Styling (dark theme + tooltip overrides)
└── main.tsx           # Entry point
```

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 (or next available port).

## Deployment

```bash
npm run build
npx gh-pages -d dist
```

Deployed to GitHub Pages at `/us-fun-facts-map/`.