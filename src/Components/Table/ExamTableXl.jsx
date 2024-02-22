import React from 'react'

export default function ExamTableXl({data}) {
  return (
    <div className='p-6 mt-3 border rounded-lg shadow-lg hidden xl:block'>
        <header className='font-bold text-sm flex justify-between'>
            <p className='w-12'>ID</p>
            <p className='w-72'>Title</p>
            <p className='w-48'>Course</p>
            <p className='w-48'>Time</p>
            <p className='w-48'>State</p>
        </header>
        {
            data.map((item,i)=>(
                <div className='font-bold text-sm flex justify-between items-center my-6 border-b-2 pb-3'>
                    <p className='w-12'>{i+1}</p>
                    <div className='w-72'>
                    <p className='w-72 font-medium text-gray-600 line-clamp-1'>Introdcution to computer science</p>
                    <p className='w-72 font-normal line-clamp-1 text-xs text-gray-500 mt-3'>Asign 2h ago</p>
                    </div>
                    <p className='w-48 font-medium text-gray-600 line-clamp-1'>CSC101</p>
                    <p className='w-48 font-medium text-gray-600 line-clamp-1'>8 am - 10 am</p>
                    <p className='w-48'>  <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-black w-1/2  my-1'>Take</button></p>
                </div>
            ))
        }
        <div className='w-full flex justify-end'>
            <button className='font-medium text-xs py-1 rounded-md px-4 text-white bg-black  my-1 hidden xl:block'>Next</button>
        </div>
    </div>
  )
}
