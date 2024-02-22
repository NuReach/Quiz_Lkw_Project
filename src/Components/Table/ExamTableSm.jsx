import React from 'react'

export default function ExamTableSm({index}) {
  return (
    <div className='border rounded-md p-3 text-xs w-full sm:w-full md:w-64  lg:w-96 xl:hidden '>
        <div className='flex space-x-3'>
            <p className='font-medium w-12 '>Title</p>
            <p className='line-clamp-1'>{index+1}.Dabase Design and Technolog</p>
        </div>
        <div className='flex space-x-3'>
            <p className='font-medium w-12 '>Course</p>
            <p>CS101</p>
        </div>
        <div className='flex space-x-3'>
            <p className='font-medium w-12 '>Time</p>
            <p>8 am - 10 am</p>
        </div>
        <button className='font-medium text-xs py-1 rounded-md px-4 text-white bg-black w-1/2  my-1'>Take</button>
    </div>
  )
}
