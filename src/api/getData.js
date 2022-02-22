import axios from "axios"

// const baseUrl = `https://community-open-weather-map.p.rapidapi.com/`
const baseUrl = `https://api.openweathermap.org/data/2.5/`
// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// currant weather by Latitut and lontitute
export const getCurrentWeatherDataApi = async ({ lat, lon }) => {

     return await axios({
          baseURL: baseUrl,
          url: `weather`,
          method: 'GET',
          params: {
               lon,
               lat,
               appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
               units: 'metric', // standard, metric, imperial
               mode: 'json'
          }
     }).catch((error) => {
          console.log('error -> ', error.response.data.message);
          return { error: error.response.data.message }
     });
};
// currant weather by city name
export const getWeatherByCityNameApi = async (cityName) => {
     return await axios({
          baseURL: baseUrl,
          url: `weather`,
          method: 'GET',
          params: {
               q: cityName,
               appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
               mode: 'json',
               units: 'metric'
          }
     }).then(responce => responce)
          .catch(error => {
               console.log('error -> ', error.response.data.message);
               return { error: error.response.data.message }
          })
}


// onecall?lat=19.0975&lon=72.887&exclude=minutely,current&appid={APIKEY}
// hourly weather by Latitut and Lontitute
export const getHourlyWeatherDataApi = async ({ lat, lon }) => {
     return await axios({
          baseURL: baseUrl,
          url: `onecall`,
          method: 'GET',
          params: {
               lon,
               lat,
               exclude: 'minutely,current',
               appid: process.env.REACT_APP_OPEN_WEATHER_API_KEY,
               units: 'metric', // standard, metric, imperial
               mode: 'json'
          }
     }).then(responce => responce)
          .catch(error => {
               console.log('error -> ', error.response.data.message);
               return { error: error.response.data.message }
          });
};