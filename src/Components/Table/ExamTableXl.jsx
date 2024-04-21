import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ExamTableXl({data,result}) {
    const navigate = useNavigate();
  return (
    <div className='p-6 mt-3 border rounded-lg shadow-lg '>
        <header className='font-bold text-sm flex justify-between'>
            <p className='w-12'>ID</p>
            <p className='lg:w-72'>Title</p>
            <p className='w-48  hidden lg:block'>Course</p>
            <p className='w-48  hidden lg:block'>Time</p>
            <p className='lg:w-48'>State</p>
        </header>
        {
            data.map((item,i)=>(
                <div className='font-bold text-sm flex justify-between items-center my-6 border-b-2 pb-3'>
                    <p className='w-12'>{i+1}</p>
                    <div className='lg:w-72'>
                    <p className=' font-medium text-gray-600 line-clamp-1 capitalize'>{item.exam_title}</p>
                    </div>
                    <p className='w-48 font-medium text-gray-600 line-clamp-1 capitalize  hidden lg:block'>{item.course_title}</p>
                    <p className='w-48 font-medium text-gray-600 line-clamp-1  hidden lg:block'>{item.exam_duration} mn</p>
                    <p className='lg:w-48'>    
                    {
                       result.find((ex)=>ex.exam_id == item.id) ? 
                            <button disabled  className='font-medium text-xs py-1 rounded-md px-4 text-white bg-red-500 my-1'>Taken</button> :
                            <button onClick={(e)=>{
                            e.preventDefault();
                            navigate(`/quiz/playing/${item.id}`)
                            }}  className='font-medium text-xs py-1 rounded-md px-4 text-white bg-black my-1'>Take</button>
                    } 
                    </p>
                    </div>
            ))
         }
    </div>
  )
}
