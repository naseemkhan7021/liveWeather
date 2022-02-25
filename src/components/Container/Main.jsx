import React from 'react'
import { DATE_FORMATE, ICON_URL } from '../../veriable'
import { useDataContext } from '../DataContext';
import Moment from 'react-moment';
import { dateFormat } from '../../helper/dateFormat';
import MapView from '../Map';

export default function Main({ children }) {

     const { cityName, geoLocation, weatherData } = useDataContext()
     const { weather, sys, main, wind } = weatherData

     return (
          <div className='px-2'>
               < div className="mb-3 mt-6 grid h-1/3 md:grid-cols-3  gap-x-6 " >
                    {/* show weather in nubmer  */}
                    < div className='dark:bg-slate-800 dark:text-white bg-white bg-red-40 dark: border shadow-md rounded-lg py-2 px-8 col-span-2 md:py-8 grid lg:grid-rows-1 gap-4 lg:grid-cols-2 md:grid-cols-1 md:grid-rows-1' >

                         <div className="">
                              <h2 className='md:text-6xl sm:text-5xl text-4xl'>{weatherData.name} <strong className='text-xl'>,</strong> {sys && sys.country}</h2>
                              {/* <p>{new Date(weatherData.dt * 1000 + weatherData.timezone).toLocaleString("US-un", DATE_FORMATE)}</p> */}
                              <Moment format='dddd MMM-YY hh:mma' >{dateFormat(weatherData.dt, weatherData.timezone)}</Moment>

                              <div className="text-center flex items-center justify-center my-3">
                                   <img className='z-0 top-3 right-1 lg:w-1/4 md:w-1/3 sm:w-1/4  w-3/12 object-cover' src={`${ICON_URL}${weather && weather[0].icon}@2x.png`} alt="teprature" />
                                   <h1 className='inline  md:text-5xl sm:text-4xl text-3xl bottom-1/4 font-normal'><span className='z-10'>{main && main.temp} <sup>°C</sup> </span>
                                        <span className='text-lg capitalize'>{weather && weather[0].main}</span>
                                   </h1>
                              </div>

                         </div>

                         <div className="lg:border-l-2 lg:border-t-0 lg:ml-3 lg:pl-5 lg:mt-0 lg:pt-0 md:mt-3 md:pt-5  md:border-t-2 border-gray-500 grid gap-4 grid-rows-2 grid-cols-4 place-items-center text-center">
                              <div>
                                   <p className='pb-0 text-2xl'>{main && main.temp_max}<sup>°C</sup></p>
                                   <small>High</small>

                              </div>
                              <div>
                                   <p className='pb-0 text-2xl'>{wind && Math.floor((wind.speed * 3.6))} <sub>km/h</sub></p>
                                   <small>Wind</small>
                              </div>
                              <div>
                                   <p className='pb-0 text-2xl'>{main && main.feels_like}<sup>°C</sup></p>
                                   <small>Feels like</small>
                              </div>
                              <div>
                                   <p className='pb-0 text-2xl'>
                                        {/* {24} */}
                                        <Moment format='hh:mm' >{dateFormat(sys && sys.sunrise, weatherData.timezone)}</Moment>
                                   </p>
                                   <small>Sunrise</small>
                              </div>
                              {/* </div> */}

                              {/* <div className="grid grid-cols-3 gap-x-4"> */}
                              <div>
                                   <p className='pb-0 text-2xl'>
                                        {main && main.temp_min}°C
                                   </p>
                                   <small>Low</small>
                              </div>
                              <div>
                                   <p className='pb-0 text-2xl'>{main && main.pressure} <sub>hPa</sub></p>
                                   <small>Pressure</small>
                              </div>

                              <div>
                                   <p className='pb-0 text-2xl'>{main && main.humidity}%</p>
                                   <small>Humidity</small>
                              </div>

                              <div>
                                   <p className='pb-0 text-2xl'>
                                        <Moment format='HH:mm' >{dateFormat(sys && sys.sunset, weatherData.timezone)}</Moment>
                                   </p>
                                   <small>Sunset</small>
                              </div>

                         </div>


                    </ div>
                    {/* location in map */}
                    <div className="bg-yellow-200 md:block hidden border shadow-md rounded-lg overflow-hidden" >
                         {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2640.4717874751123!2d72.88867030297722!3d19.093903108811112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c87b33c3b945%3A0x339e956866d7075c!2sManisha%20Restaurant%20%26%20Bar!5e0!3m2!1sen!2sin!4v1645277721140!5m2!1sen!2sin" width="100%" height="100%" style={{ border: '0' }} ></iframe> */}
                         <MapView />
                    </div >
               </div >

               {/* // more details */}
               {children}
          </div >
     )
}
