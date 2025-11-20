import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapContainer.current && !mapRef.current) {
      mapRef.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11', // style or layer
        center: [85.324, 27.7172], // [lng, lat]
        zoom: 12,
      });

      // Optional: add a marker
      new mapboxgl.Marker().setLngLat([85.324, 27.7172]).addTo(mapRef.current);
    }

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '500px' }} />;
};

export default Map;
