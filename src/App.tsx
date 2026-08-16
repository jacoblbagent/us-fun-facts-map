import USMap from './features/map/USMap';
import './App.css';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>US State Fun Facts</h1>
        <p className="subtitle">Hover over any state to learn something new</p>
      </header>
      <main className="map-container">
        <USMap />
      </main>
      <footer className="app-footer">
        <p>React + Leaflet &middot; US States GeoJSON &middot; OpenStreetMap</p>
      </footer>
    </div>
  );
}

export default App;