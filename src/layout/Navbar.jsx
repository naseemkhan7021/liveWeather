import React, { useState } from 'react'
import { useDataContext, useDataUpdateContext } from '../components/DataContext'

export default function Navbar() {
     const [searchData, setSearchData] = useState('');

     const { setCityName, setThem, colorThem } = useDataContext();
     const { currantLocationWeather, getWeatherByCityName } = useDataUpdateContext();

     const onFormSubmit = e => {
          e.preventDefault()
          // setCityName(searchData)
          getWeatherByCityName(searchData)
          setSearchData('')
     }
     // <FontAwesomeIcon icon="fa-light fa-brightness" />
     const themClick = () => {
          setThem(colorThem)
     }

     return (
          <div className='shadow-sm dark:bg-slate-800 bg-white shadow-orange-200 p-3 flex justify-between'>
               {/* logo */}
               <div className=" h-auto">
                    <img className='w-9 inline-block' src="/img/brand/logo.png" alt="" />
                    <strong className='md:inline-block dark:text-white hidden'>Today Weather</strong>
               </div>

               {/* search input */}
               <div className="">
                    <form onSubmit={onFormSubmit} className='h-full relative'>
                         <input value={searchData} onChange={e => setSearchData(e.target.value)} name="search" type="text" className="border border-solid outline-none focus:border-orange-400 focus:border-2 rounded-md transition duration-150 ease-out hover:ease-in h-full w-50 hover:w-96 pr-6 pl-9 rounded-lgfocus:outline-none" placeholder="Search city..." />
                         <div className="absolute top-2 left-2">
                              <i className="fa fa-search text-gray-400 z-20 "></i>
                         </div>

                    </form>
               </div>
               {/* Button */}
               <div className='flex'>
                    <div onClick={themClick} className="flex items-center mr-3 cursor-pointer rounded-lg bg-slate-200 hover:bg-slate-300 py-1 px-3 dark:bg-slate-600 dark:hover:bg-slate-500">
                         {
                              colorThem === 'light' ? (

                                   <i class="fa-solid fa-sun text-yellow-500"></i>
                              ) :


                                   <i className="fa-solid fa-moon text-blue-300 "></i>
                         }
                         <span className={`ml-1 ${colorThem === 'light' ? 'text-white' : ''}`} ><strong>{colorThem === 'light' ? 'Light' : 'Dark'}</strong></span>
                    </div>

                    <button onClick={currantLocationWeather} className='text-white font-medium px-3 cursor-pointer py-1 bg-orange-600 hover:bg-orange-700 rounded'>
                         Currant
                         <i className="pl-2 fa-solid fa-location-dot"></i>
                    </button>
               </div>
          </div>
     )
}
