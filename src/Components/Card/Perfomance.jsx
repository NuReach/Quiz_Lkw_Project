import React from 'react'

export default function Perfomance() {
  return (
    <div className='w-full p-6 shadow-lg rounded-lg border sm:w-60 lg:w-80 '>
    <p className='font-bold text-lg'>Performance </p>
    <div className='flex justify-center items-center space-x-3 flex-wrap '>
        <div className=' text-center mt-3'>
            <p className='font-bold text-gray-500 text-lg'>6.5% </p>
            <p className='text-gray-500 font-medium text-xs mt-2'>Increase</p>
        </div>
        <div className='' >
            <img className='w-28 h-28 object-cover' src="https://static.vecteezy.com/system/resources/previews/026/626/167/original/increase-icon-symbol-design-illustration-vector.jpg" alt="" />
        </div>
    </div>
    </div>
  )
}
