import React from 'react'

export default function ResultTableSm({index}) {
  return (
<div className='border rounded-md p-3 text-xs w-full sm:w-full md:w-72 lg:w-96 xl:hidden '>
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
    <p className='w-48'>
                    {
                        index==0 ? <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-green-500 w-1/2  my-1'>Passed</button> : (
                            index == 1 ?  <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-red-500 w-1/2  my-1'>Falied</button> :  <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-yellow-400 w-1/2  my-1'>Passed</button>
                        ) 
                    }
     </p>
</div>
  )
}
