import React, { useEffect, useState, useCallback, memo } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import type { PathOptions, Layer, LeafletMouseEvent } from 'leaflet';
import L from 'leaflet';
import { STATE_FACTS, NAME_TO_ABBR } from './funFacts';

const GEOJSON_URL =
  'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json';

// Deterministic color per state — spread hues evenly
const stateColors: Record<string, string> = {};
const SAT = '55%';
const LIT = '35%';
const HUE_STEP = 137; // ~golden angle to avoid adjacent similar hues

let hueIdx = 0;
function getStateColor(name: string): string {
  if (!stateColors[name]) {
    stateColors[name] = `hsl(${(hueIdx * HUE_STEP) % 360}, ${SAT}, ${LIT})`;
    hueIdx++;
  }
  return stateColors[name];
}

function getStateStyle(feature: any): PathOptions {
  const name: string = feature?.properties?.name || '';
  return {
    fillColor: getStateColor(name),
    fillOpacity: 0.55,
    color: '#1c1917',
    weight: 1,
  };
}

const hoverStyle: PathOptions = {
  fillOpacity: 0.85,
  color: '#292524',
  weight: 1.5,
};

const FitToBounds: React.FC<{ data: object }> = ({ data }) => {
  const map = useMap();
  useEffect(() => {
    const geoLayer = L.geoJSON(data as any);
    map.fitBounds(geoLayer.getBounds(), { padding: [20, 20] });
  }, [data, map]);
  return null;
};

const USMap: React.FC = () => {
  const [geoJsonData, setGeoJsonData] = useState<object | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(GEOJSON_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to load map data (HTTP ${res.status})`);
        return res.json();
      })
      .then(setGeoJsonData)
      .catch((err) => setError(err.message));
  }, []);

  const onEachFeature = useCallback(
    (feature: any, layer: Layer) => {
      const name: string = feature.properties?.name || '';
      const abbr = NAME_TO_ABBR[name];
      const info = abbr ? STATE_FACTS[abbr] : undefined;
      const factText = info?.fact || `${name} — no fact recorded`;
      const origColor = getStateColor(name);

      layer.on({
        mouseover: (e: LeafletMouseEvent) => {
          const l = e.target as L.Path;
          l.setStyle({ ...hoverStyle, fillColor: origColor });
          l.bindTooltip(
            `<strong>${info?.name || name}</strong><br/><em>${factText}</em>`,
            {
              direction: 'top',
              offset: [0, -8],
              sticky: true,
              className: 'state-tooltip',
            }
          );
          l.openTooltip(e.latlng);
        },
        mouseout: (e: LeafletMouseEvent) => {
          const l = e.target as L.Path;
          l.setStyle({ fillColor: origColor, fillOpacity: 0.55, color: '#1c1917', weight: 1 });
          l.unbindTooltip();
        },
      });
    },
    []
  );

  if (error) {
    return <div className="map-message map-error">{error}</div>;
  }

  if (!geoJsonData) {
    return <div className="map-message map-loading">Loading US map…</div>;
  }

  return (
    <MapContainer
      center={[39.8283, -98.5795]}
      zoom={4}
      className="leaflet-map"
      zoomControl={true}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <GeoJSON key="states" data={geoJsonData as any} style={getStateStyle} onEachFeature={onEachFeature} />
      <FitToBounds data={geoJsonData} />
    </MapContainer>
  );
};

export default memo(USMap);