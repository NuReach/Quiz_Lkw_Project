import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function ResultTableXl({data}) {
    const navigate = useNavigate();
  return (
    <div className='p-6 mt-3 border rounded-lg shadow-lg hidden xl:block'>
        <header className='font-bold text-sm flex justify-between'>
            <p className='w-12'>ID</p>
            <p className='w-72'>Exam</p>
            <p className='w-48'>Course</p>
            <p className='w-48'>Score</p>
            <p className='w-48'>State</p>
        </header>
        {
            data.map((item,i)=>(
                <div className='font-bold text-sm flex justify-between items-center my-6 border-b-2 pb-3'>
                    <p className='w-12'>{i+1}</p>
                    <div className='w-72'>
                    <p className='w-72 font-medium text-gray-600 line-clamp-1 capitalize'>{item.exam_title}</p>
                    </div>
                    <p className='w-48 font-medium text-gray-600 line-clamp-1 capitalize'>{item.course_title}</p>
                    <p className='w-48 font-medium text-gray-600 line-clamp-1'>{(item.correct_choices_count / item.total_choices_count * 100).toFixed(2) } %</p>
                    <p className='w-48'>
                        <button onClick={()=>{
                            navigate(`/exam/answer/preview?exam=${item.exam_id}`)
                        }}  className='font-medium text-xs py-1 rounded-full px-4 text-white bg-green-500 w-1/2  my-1'>Preview</button>
                    </p>
                </div>
            ))
        }
    </div>
    )
}
