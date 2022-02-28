import React, { useRef, useEffect, useState } from 'react';
import 'mapbox-gl/dist/mapbox-gl.css'
import Map, { Marker, MapRef } from "!react-map-gl";
// import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import './tem.css';
import { useDataContext } from './DataContext';

export default function MapView() {
     const { cityName, geoLocation, colorThem } = useDataContext();
     const { lat, lon } = geoLocation;

     let refs;
     // Setting up the state for the map
     const [viewport, setViewport] = useState({
          // center: [lat, lon],
          latitude: lat,
          longitude: lon,
          zoom: 10,
          bearing: 0,
          pitch: 0,
          width: "100%",
          height: "100%",
          attributionControl: false
     });

     // Map viewport updates whenever the
     // latitude and longitude changes

     useEffect(() => {
          setViewport({
               center: [lat, lon],
               // latitude: lat,
               // longitude: lon,
               // zoom: 10,
               width: "100%",
               height: "100%",
          });
          refs && refs.flyTo && refs.flyTo({ center: [lon, lat], zoom: 11, speed: 0.7 })
     }, [lat, lon]);

     return (
          <>
               <Map
                    ref={(e) => refs = e}

                    mapboxAccessToken={process.env.REACT_APP_MAPBOX_KEY}
                    // {...viewport}

                    initialViewState={viewport}
                    onViewportChange={(viewport) => setViewport(viewport)}
                    // mapStyle="mapbox://styles/mapbox/streets-v11"
                    mapStyle={colorThem === 'light' ? 'mapbox://styles/mapbox/dark-v10' : 'mapbox://styles/mapbox/streets-v10'}
               //{/*mapbox://styles/mapbox/satellite-v9 */}
               >
                    <Marker latitude={lat} longitude={lon}>
                         <i className="pl-2 fa-solid fa-location-dot fa-bounce text-red-500 text-xl"></i>
                    </Marker>
               </Map>
          </>
     );
}