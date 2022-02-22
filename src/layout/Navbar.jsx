import React, { useState } from 'react'
import { useDataContext, useDataUpdateContext } from '../components/DataContext'

export default function Navbar() {
     const [searchData, setSearchData] = useState('');

     const { setCityName } = useDataContext();
     const { currantLocationWeather, getWeatherByCityName } = useDataUpdateContext();


     const onFormSubmit = e => {
          e.preventDefault()
          // setCityName(searchData)
          getWeatherByCityName(searchData)
          setSearchData('')
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
                         <input value={searchData} onChange={e => setSearchData(e.target.value)} name="search" type="text" className="border border-solid outline-none focus:border-orange-400 focus:border-2 rounded-md transition duration-150 ease-out hover:ease-in h-full w-50 hover:w-96 pr-6 pl-9 rounded-lgfocus:outline-none" placeholder="Search anything..." />
                         <div className="absolute top-2 left-2">
                              <i className="fa fa-search text-gray-400 z-20 "></i>
                         </div>

                    </form>
               </div>
               {/* Button */}
               <div>
                    <button onClick={currantLocationWeather} className='text-white font-medium px-3 cursor-pointer py-1 bg-orange-600 hover:bg-orange-700 rounded'>
                         Currant
                         <i className="pl-2 fa-solid fa-location-dot"></i>
                    </button>
               </div>
          </div>
     )
}
