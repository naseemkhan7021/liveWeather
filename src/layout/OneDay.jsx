import React, { useEffect, useMemo, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { useDataContext } from '../components/DataContext';
import { ICON_URL } from '../veriable';
// import { useDataContext } from '../components/DataContext';


export default function OneDay() {
     const [chartData, setChartData] = useState([])

     const { oneDaySummery, cityName } = useDataContext();
     const { feels_like } = oneDaySummery;
     // let dataf = []
     // console.log('key ->', Object.keys(feels_like));
     const dataFormating = (data) => {
          if (data) {
               let values = Object.values(data)
               let formatedData = Object.keys(data).map((key, index) => (
                    { day: key, temp: values[index] }
               ));
               setChartData(formatedData)
          }
          return
     };
     useMemo(() => {
          // console.log('feels_like', feels_like);
          dataFormating(feels_like)
     }, [feels_like]);

     // console.log('chartData -> ', chartData);
     return (
          <div className='dark:bg-slate-800 dark:text-white bg-white md:mt-6 md:my-0 my-9 border shadow-md rounded-lg'>
               {
                    oneDaySummery && (
                         <div className="flex justify-center">
                              <img className='object-cover ' src={`${ICON_URL}${oneDaySummery && oneDaySummery.icon}@2x.png`} alt="teprature" />
                              <h2 className='text-center mt-9 text-2xl'>{oneDaySummery.dt}'s Forecast <sub>{oneDaySummery.main}</sub> </h2>
                         </div>
                    )
               }
               <ResponsiveContainer width='100%' height={200}>

                    <AreaChart
                         data={chartData}
                         // height={400}
                         margin={{
                              top: 10,
                              right: 10,
                              left: 5,
                              bottom: 10
                         }}
                    >
                         {/* <CartesianGrid strokeDasharray="" /> */}
                         {/* fill: '#ffff' */}
                         <XAxis internval={0} dataKey="day" tick={{ fontSize: 11 }} >
                              <Label value={`${cityName}'s 1 Day's`} offset={-5} position="insideBottom" />
                         </XAxis>
                         {/* stroke={'#ffff'} */}
                         <YAxis dataKey="" tick={{ fontSize: 10 }} >
                              {/* stroke="#ffff" */}
                              <Label value={`Tempreture`} angle={90} />
                         </YAxis>
                         <Tooltip />
                         <Area dot type="monotone" activeDot={{ r: 8 }} dataKey="temp" stroke="rgb(182, 73, 0)" fill="rgba(255, 154, 86, 0.336)" />
                    </AreaChart>
               </ResponsiveContainer>
          </div>
     )
}
