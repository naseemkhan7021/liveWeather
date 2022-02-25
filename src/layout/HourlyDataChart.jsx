import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { useDataContext } from '../components/DataContext';


export default function HourlyDataChart({ data }) {
     const { cityName, colorThem } = useDataContext();

     return (
          <div className='dark:bg-slate-800 bg-white md:m-0 my-9 border shadow-md rounded-lg'>
               <h2 className='dark:text-white text-center mt-9 text-2xl'>48 Hourly Forecast</h2>
               <ResponsiveContainer width='100%' height={250}>

                    <AreaChart
                         data={data}
                         // height={400}
                         margin={{
                              top: 10,
                              right: 10,
                              left: 0,
                              bottom: 0
                         }}
                    >
                         {/* <CartesianGrid strokeDasharray="" /> */}
                         <XAxis stroke={colorThem === 'light' ? "#ffff" : 'black'} internval={0} dataKey="dt" tick={false}>
                              {/* stroke="#ffff" */}
                              <Label stroke={colorThem === 'light' ? "#ffff" : ''} tick={{ fontSize: 11 }} value={`${cityName}'s 48 Hours`} offset={10} position="insideBottom" />
                         </XAxis>
                         <YAxis dataKey="Temp" stroke={colorThem === 'light' ? "#ffff" : 'black'} tick={{ fontSize: 11 }}  >
                              {/* stroke="#ffff" */}
                              <Label value={`Tempreture`} angle={90} stroke={colorThem === 'light' ? "#ffff" : ''} />
                         </YAxis>
                         <Tooltip />
                         <Area dot type="monotone" activeDot={{ r: 8 }} dataKey="Temp" stroke="rgb(182, 73, 0)" fill="rgba(255, 154, 86, 0.336)" />
                    </AreaChart>
               </ResponsiveContainer>
          </div>
     )
}
