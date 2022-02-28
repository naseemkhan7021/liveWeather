import React from 'react'

export default function Alert({ error }) {
     return (
          <div className='absolute left-1/2 md:w-1/2 w-4/5' style={{ transform: 'translate(-50%, -50%)', top: '5rem' }}>
               <div className='dark:bg-yellow-400 dark:text-black bg-orange-600 text-white w-1/2 m-auto px-8 py-2 rounded-lg' >
                    <p className='capitalize text-center'><strong>Alert!</strong> {error}</p>
               </div>
          </div>
     )
}
