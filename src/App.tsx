import { Provider } from 'react-redux';
import { store } from './app/store';
import USMap from './features/map/USMap';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <header className="app-header">
          <h1>US State Fun Facts</h1>
          <p className="subtitle">Hover over any state to learn something new</p>
        </header>
        <main className="map-container">
          <USMap />
        </main>
        <footer className="app-footer">
          <p>React + Redux &middot; SVG US Map</p>
        </footer>
      </div>
    </Provider>
  );
}

export default App;