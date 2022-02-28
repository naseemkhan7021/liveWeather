import React, { createContext, useContext, useEffect, useState } from 'react'
import { getCurrentWeatherDataApi, getWeatherByCityNameApi } from '../api/getData';

const DataContext = createContext();
const DataUpdateContext = createContext();

// costom hook start
// handel them
export const useDarkMode = () => {
     const [them, setThem] = useState('dark');
     const colorThem = them === 'dark' ? 'light' : 'dark';
     useEffect(() => {
          const root = window.document.documentElement;

          root.classList.remove(colorThem);
          root.classList.add(them);

          // return () => {
          //      second
          // }
     }, [them])
     return [setThem, colorThem]
}

export function useDataContext() {
     return useContext(DataContext)
}
export function useDataUpdateContext() {
     return useContext(DataUpdateContext)
}
// costom hook end



//  context provider
export function DataProvider({ children }) {
     const [weatherData, setWeatherData] = useState(0);
     const [cityName, setCityName] = useState('');
     const [geoLocation, setGeoLocation] = useState({});
     const [myGeoLocation, setMyGeoLocation] = useState({});
     const [oneDaySummery, setOneDaySummery] = useState({})
     const [error, setError] = useState(false);
     const [message, setMessage] = useState('');


     useEffect(() => {
          if (!weatherData) {
               navigator.geolocation.getCurrentPosition(async function (position) {
                    setGeoLocation({ lat: position.coords.latitude, lon: position.coords.longitude })
                    setMyGeoLocation({ lat: position.coords.latitude, lon: position.coords.longitude })
                    const { data } = await getCurrentWeatherDataApi({ lat: position.coords.latitude, lon: position.coords.longitude })
                    // console.log('data - > ', [position.coords.longitude, position.coords.latitude]);
                    setWeatherData(data)
                    setCityName(data.name)
               });
          }
          if (error) {
               setTimeout(() => {
                    setError(false)
                    setMessage('')
               }, 3000);
          }
     }, [weatherData, cityName, error]);

     const [setThem, colorThem] = useDarkMode();



     const currantLocationWeather = () => {
          getCurrentWeatherDataApi(myGeoLocation).then(responce => {
               const { data } = responce;
               setWeatherData(data)
               setGeoLocation(myGeoLocation)

          })
     }

     const getWeatherByCityName = (searchData) => {
          getWeatherByCityNameApi(searchData).then(responce => {
               if (responce.error) {
                    const { error } = responce;
                    // console.log('error -> ', error);
                    setError(true)
                    setMessage(error)
               } else {
                    const { data } = responce;
                    setWeatherData(data)
                    setGeoLocation({ lon: data.coord && data.coord.lon, lat: data.coord && data.coord.lat })
                    setCityName(searchData);
                    setError(false)
                    setMessage('')
               }
          })
     }

     return (

          <DataContext.Provider value={{ setThem, colorThem, weatherData, setCityName, cityName, geoLocation, oneDaySummery, setOneDaySummery, error, message }} >
               <DataUpdateContext.Provider value={{ currantLocationWeather, getWeatherByCityName }}>
                    {
                         children
                    }
               </DataUpdateContext.Provider>
          </DataContext.Provider>
     )
}
