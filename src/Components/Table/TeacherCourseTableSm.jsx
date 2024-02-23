import React from 'react'

export default function TeacherCourseTableSm({index}) {
  return (
    <div className='border rounded-md p-3 text-xs w-full sm:w-full md:w-64  lg:w-96 lg:hidden '>
    <div className='flex space-x-3'>
        <p className='font-medium w-12 '>Title</p>
        <p className='line-clamp-1'>{index+1}.Dabase Design and Technolog</p>
    </div>
    <div className='flex gap-3'>
    <button className='font-medium text-xs py-1 rounded-md px-4 text-white bg-black w-fit my-1'>Edit</button>
    <button className='font-medium text-xs py-1 rounded-md px-4 text-white bg-black w-fit  my-1'>Delete</button>
    </div>
</div>
  )
}
