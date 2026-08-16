import React, { useEffect, useState, useCallback, memo } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import type { PathOptions, Layer, LeafletMouseEvent } from 'leaflet';
import L from 'leaflet';
import { STATE_FACTS, NAME_TO_ABBR } from './funFacts';

const GEOJSON_URL =
  'https://raw.githubusercontent.com/PublicaMundi/MappingAPI/master/data/geojson/us-states.json';

const stateStyle: PathOptions = {
  fillColor: '#4a7c59',
  fillOpacity: 0.55,
  color: '#1c1917',
  weight: 1,
};

const hoverStyle: PathOptions = {
  fillColor: '#6aab7a',
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

      layer.on({
        mouseover: (e: LeafletMouseEvent) => {
          const l = e.target as L.Path;
          l.setStyle(hoverStyle);
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
          l.setStyle(stateStyle);
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
      <GeoJSON key="states" data={geoJsonData as any} style={stateStyle} onEachFeature={onEachFeature} />
      <FitToBounds data={geoJsonData} />
    </MapContainer>
  );
};

export default memo(USMap);