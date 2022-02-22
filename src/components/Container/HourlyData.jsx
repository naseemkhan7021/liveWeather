import React, { useEffect, useMemo, useState } from 'react';
import Moment from 'react-moment';
import { getHourlyWeatherDataApi } from '../../api/getData';
import { dateFormat } from '../../helper/dateFormat';
// import Clock from '../../layout/Clock';
import HourlyDataChart from '../../layout/HourlyDataChart';
import EightDayDataTable from '../../layout/EightDayDataTable';
import { DATE_FORMATE_SHORT_DATE, DATE_FORMATE_TIME } from '../../veriable';
import { useDataContext } from '../DataContext';
import OneDay from '../../layout/OneDay';

export default function HourlyData() {
     const [hourlyFormatedData, setHourlyFormatedData] = useState([]);
     const [eightDaysData, setEightDaysData] = useState([])
     const { geoLocation, setOneDaySummery, oneDaySummery } = useDataContext();

     useEffect(() => {
          getHourlyWeatherDataApi(geoLocation).then(responce => {
               if (responce.error) {
                    console.log(responce.error);
               } else {
                    const { data } = responce
                    // console.log(data);
                    let temp_data = []
                    // setEightDaysData([])
                    setHourlyFormatedData([])
                    // format hourly Data
                    data.hourly.map((item => {
                         setHourlyFormatedData(oldData => [...oldData, { Temp: Number(item.temp), main: item.weather && item.weather[0].main, icon: item.weather && item.weather[0].icon, dt: new Date(dateFormat(item.dt, data.timezone_offset)).toLocaleString("en-IN", DATE_FORMATE_TIME) }])
                    }));
                    // format daily(8days) Data
                    temp_data = data.daily.map((item => (
                         { feels_like: item.feels_like, min_max_temp: { max: item.temp.max, min: item.temp.min }, main: item.weather && item.weather[0].main, icon: item.weather && item.weather[0].icon, dt: new Date(dateFormat(item.dt, data.timezone_offset)).toLocaleString("en-IN", DATE_FORMATE_SHORT_DATE) }
                    )));

                    // console.log('dddd -> ', eightDaysData);
                    setOneDaySummery(temp_data[0])

                    setEightDaysData(temp_data)
                    // setHourlyFormatedData(temp_data)
               }
          })
          //   return () => {
          //     clear
          //   }
     }, [geoLocation])

     return (
          <div className='mt-6'>
               <div className='md:grid-cols-3 grid-cols-1 grid gap-6'>
                    <div className='bg-yellow-20 md:col-span-2 '>
                         <HourlyDataChart data={hourlyFormatedData} />
                         <OneDay />
                    </div>
                    <div className='text-center bg-slate-40 border shadow-md rounded-lg dark:bg-slate-800 dark:text-white bg-white'>
                         {/* <Moment format={'hh:mm:ssa'} interval={1000} /> */}
                         <EightDayDataTable data={eightDaysData} />
                    </div>
               </div>
          </div>
     )
}
