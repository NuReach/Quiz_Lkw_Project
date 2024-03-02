import React from 'react'

export default function TeacherQuestionTableSm({index}) {
  return (
    
    <div className='border rounded-md p-3 text-xs w-full sm:w-full md:w-64 lg:w-96 xl:hidden '>
        <div className='flex space-x-3'>
            <p className='font-medium w-12 '>Question</p>
            <p className='line-clamp-1'>{index+1}.Dabase Design and Technolog</p>
        </div>
        <div className='flex space-x-3'>
            <p className='font-medium w-12 '>Type</p>
            <p className='line-clamp-1'>Multiple Choice</p>
        </div>
        <div className='flex space-x-3'>
            <p className='font-medium w-12 '>Difficulty</p>
            <p className='line-clamp-1'>Hard</p>
        </div>
        <div className='w-48 gap-3 flex'>
            <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-yellow-400 w-fit  my-1'>Edit</button>
            <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-red-500 w-fit  my-1'>Delete</button> 
        </div>
    </div>
  )
}
