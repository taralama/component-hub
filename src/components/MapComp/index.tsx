import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
  useMap,
} from 'react-leaflet';
import L from 'leaflet';
import 'leaflet-routing-machine';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import 'leaflet/dist/leaflet.css';
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet-control-geocoder';

import { useEffect, useState } from 'react';

interface RoutingFoundEvent {
  routes: Array<{
    summary: {
      totalDistance: number;
      totalTime: number;
    };
    coordinates: L.LatLng[];
  }>;
}

const MapComp = ({
  location,
}: {
  location: { lat: number; lng: number } | null;
}) => {
  // function Routing() {
  //   const map = useMap();

  //   // Add routing control when map is ready
  //   L?.Routing?.control({
  //     waypoints: [
  //       L.latLng(27.7172, 85.324), // Kathmandu
  //       L.latLng(27.6986, 85.205), // Patan
  //     ],
  //     routeWhileDragging: true,
  //   }).addTo(map);

  //   return null;
  // }

  const [routeDistance, setRouteDistance] = useState<string | undefined>();

  const SearchControl = () => {
    const map = useMap();

    useEffect(() => {
      type ControlWithGeocoder = typeof L.Control & {
        geocoder: (options?: {
          defaultMarkGeocode?: boolean;
          position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
        }) => L.Control;
      };

      const geocoder = (L.Control as unknown as ControlWithGeocoder)
        .geocoder({
          defaultMarkGeocode: true, // automatically place a marker
          position: 'topleft',
        })
        .addTo(map);

      return () => {
        map.removeControl(geocoder);
      };
    }, [map]);

    return null;
  };

  const AddScaleToMap = () => {
    const map = useMap();

    useEffect(() => {
      const scaleControl = L.control.scale({ position: 'bottomleft' });
      scaleControl.addTo(map);

      return () => {
        map.removeControl(scaleControl); // cleanup when map unmounts
      };
    }, [map]);

    return null;
  };

  const AddMarkerOnClick = () => {
    useMapEvent('click', (e) => {
      setMarkers((prev) => [
        ...prev,
        { id: crypto.randomUUID(), lat: e.latlng.lat, lng: e.latlng.lng },
      ]);
    });
    return null;
  };

  const [markers, setMarkers] = useState<
    { id: string; lat: number; lng: number }[]
  >([]);

  console.log(markers);

  function Routing() {
    const map = useMap();

    // Add routing control when map is ready
    const control = L?.Routing?.control({
      waypoints: markers,
      routeWhileDragging: true,
      lineOptions: {
        styles: [
          {
            color: '#0d53ff',
            opacity: 0.5,
            weight: 4,
          },
        ],
      },
      show: false,
    }).addTo(map);

    control.on('routesfound', (e: RoutingFoundEvent) => {
      const route = e.routes[0];
      const distanceMeters = route.summary.totalDistance;
      const distanceKm = (distanceMeters / 1000).toFixed(2);
      setRouteDistance(distanceKm);
      console.log(distanceKm);
    });

    return null;
  }
  // const AddMarkerOnClick = () => {
  //   useMapEvent('click', (e) => {
  //     console.log('e', e);
  //     setMarkers((prev) => [...prev, e.latlng]);
  //   });
  //   return null;
  // };

  const myLocation = `<div class='my-location'></div>`;

  const my_location = L.divIcon({
    html: myLocation,
    className: '', // remove default leaflet styles
    iconSize: [30, 30],
    iconAnchor: [15, 30], // point of the icon which will correspond to marker's location
  });

  return (
    <>
      <div className="relative h-96 w-full overflow-hidden">
        <div className="absolute h-96 w-full ">
          <MapContainer
            center={[27.54, 85.33]}
            zoom={13}
            // style={{ height: '100vh', width: '100%' }} // FULL HEIGHT & WIDTH
            scrollWheelZoom={true}
            className="h-full w-full"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <AddScaleToMap />
            <AddMarkerOnClick />
            <SearchControl />
            {/* <MarkerClusterGroup key={markers.length}>
              {markers.map((position, idx) => (
                <Marker
                  key={idx}
                  position={[position.lat, position.lng]}
                  draggable={true}
                  eventHandlers={{
                    dragend: (e) => {
                      const marker = e.target;

                      const newPos = marker.getLatLng();

                      setMarkers((prev) => {
                        const updated = [...prev];
                        updated[idx] = { lat: newPos.lat, lng: newPos.lng };
                        return updated;
                      });
                    },
                  }}
                >
                  <Popup>Marker {idx + 1}</Popup>
                </Marker>
              ))}
            </MarkerClusterGroup> */}

            <MarkerClusterGroup>
              {markers.map((marker) => (
                <Marker
                  key={marker.id} // use unique ID
                  position={[marker.lat, marker.lng]}
                  draggable={true}
                  eventHandlers={{
                    dragend: (e) => {
                      const newPos = e.target.getLatLng();
                      setMarkers((prev) =>
                        prev.map((m) =>
                          m.id === marker.id
                            ? { ...m, lat: newPos.lat, lng: newPos.lng }
                            : m,
                        ),
                      );
                    },
                  }}
                >
                  <Popup>Marker {marker.id}</Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>

            {location && (
              <Marker position={location} icon={my_location}>
                <Popup> Your Location</Popup>
              </Marker>
            )}

            <Routing />
          </MapContainer>
        </div>
      </div>
      Distance {routeDistance} KM
      <div>
        {markers.map((item, index) => (
          <div key={index}>{item.lat}</div>
        ))}
      </div>
    </>
  );
};

export default MapComp;
