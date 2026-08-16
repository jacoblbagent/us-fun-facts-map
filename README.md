# US State Fun Facts Map 🗺️

An interactive SVG map of the United States — hover over any state to learn a random fun fact.

**Live demo:** https://jacoblbagent.github.io/us-fun-facts-map/

## Features

- **Interactive SVG map** — hover any state to see its name and a fun fact
- **All 50 states** — accurate SVG paths for every state
- **Dark theme** — easy on the eyes, green state fill on hover
- **Built with React + Redux** — state management for hover tracking and tooltip positioning

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** (build tool)
- **Redux Toolkit** (hover state management)
- **SVG** — hand-mapped state path data

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:5173 (or next available port).

## Project Structure

```
src/
├── app/               # Redux store + hooks
├── features/map/
│   ├── USMap.tsx      # SVG map component
│   ├── Tooltip.tsx    # Hover tooltip overlay
│   ├── funFacts.ts    # State name + fact data
│   ├── statePaths.ts  # SVG path data for each state
│   └── mapSlice.ts    # Redux slice for hover state
├── App.tsx
├── App.css
└── main.tsx
```

## Deployment

```bash
npm run build
npx gh-pages -d dist
```

Deployed to GitHub Pages at `/us-fun-facts-map/`.