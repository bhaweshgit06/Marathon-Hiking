import React from 'react';
import { useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const MapComponent = () => {
  const [map, setMap] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const initializeMap = async () => {
      try {
        let map = new Map({
            container: 'map',
            center: [-122.420679, 37.772537],
            zoom: 13,
            // style: style_object,
            hash: true,
            transformRequest: (url, resourceType)=> {
              if(resourceType === 'Source' && url.startsWith('http://myHost')) {
                return {
                 url: url.replace('http', 'https'),
                 headers: { 'my-custom-header': true},
                
               }
              }
            }
          });

        setMap(map);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    initializeMap();
    if(map){
      initMap();
    }

    // Clean up map instance on unmount or if dependencies change
    return () => {
      if (map) {
        map.remove();
      }
    };
  }, []); // Ensure dependencies are managed properly here
  const initMap = () => {
    map.on('load', () => {
      // Once the map has finished loading,
      // add a new layer
      map.addLayer({
        id: 'points-of-interest',
        source: {
          type: 'vector',
          url: 'https://maplibre.org/maplibre-style-spec/'
        },
        'source-layer': 'poi_label',
        type: 'circle',
        paint: {
          // MapLibre Style Specification paint properties
        },
        layout: {
          // MapLibre Style Specification layout properties
        }
      });
    });

  };
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  if (map) console.log('No map data', map);
  return (
    <div id="map" style={{ width: '100%', height: '400px' }}>
    </div>
  );
};

export default MapComponent;
