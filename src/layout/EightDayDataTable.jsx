import React from 'react'
import { useDataContext } from '../components/DataContext';
import { ICON_URL } from '../veriable'

export default function EightDayDataTable({ data }) {

     const { setOneDaySummery, oneDaySummery } = useDataContext();

     const dayCliked = index => {
          setOneDaySummery(data[index])
     }

     return (
          <div className='px-5 '>
               <h2 className='text-center mt-9 mb-5 text-2xl'>8 day's FORECAST</h2>
               <table className="w-full table-auto border-collapse">
                    <thead>
                         <tr className=' border-b-2 border-slate-300'>
                              <th className=''>Day</th>
                              <th>Temp <sub>(min/max)</sub></th>
                              <th>Weather</th>
                         </tr>
                    </thead>
                    <tbody className='max-h-32 h-8'>
                         {
                              data.map((item, index) => (
                                   <tr onClick={() => dayCliked(index)} key={`${index}-day`} className='dark:hover:text-black mb-5 last:mb-0 border-b border-slate-300 hover:bg-orange-200 cursor-pointer'>
                                        <td className='text-left pl-3'>{item.dt}</td>
                                        <td className='text-right flex justify-center items-center'>
                                             <div className="w-2/12">
                                                  <img className='w-full object-cover' src={`${ICON_URL}${item.icon}@2x.png`} alt="teprature" />
                                             </div>
                                             <div>
                                                  {item.min_max_temp && `${item.min_max_temp.min}/${item.min_max_temp.max}°C`}
                                             </div>
                                        </td>
                                        <td className='text-right pr-3'>{item.main}</td>
                                   </tr>
                              ))
                         }
                    </tbody>
               </table>
          </div>
     )
}
