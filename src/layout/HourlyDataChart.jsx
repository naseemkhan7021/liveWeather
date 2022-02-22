import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, Label } from 'recharts';
import { useDataContext } from '../components/DataContext';


export default function HourlyDataChart({ data }) {
     const { cityName } = useDataContext();

     return (
          <div className='dark:bg-slate-800 dark:text-white bg-white md:m-0 my-9 border shadow-md rounded-lg'>
               <h2 className='text-center mt-9 text-2xl'>48 Hourly Forecast</h2>
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
                         <XAxis internval={0} dataKey="dt" tick={false}>
                              <Label stroke="#ffff" tick={{ fontSize: 11, fill: '#ffff' }} value={`${cityName}'s 48 Hours`} offset={10} position="insideBottom" />
                         </XAxis>
                         <YAxis dataKey="Temp" tick={{ fontSize: 11, fill: '#ffff' }}  >
                              <Label stroke="#ffff" value={`Tempreture`} angle={90} />
                         </YAxis>
                         <Tooltip />
                         <Area dot type="monotone" activeDot={{ r: 8 }} dataKey="Temp" stroke="rgb(182, 73, 0)" fill="rgba(255, 154, 86, 0.336)" />
                    </AreaChart>
               </ResponsiveContainer>
          </div>
     )
}
