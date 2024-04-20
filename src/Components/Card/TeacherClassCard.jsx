import React from 'react'

export default function TeacherClassCard({data,user}) {
    console.log(data);
  return (
    <div className='border-2  rounded-lg p-3 w-full items-center shadow-lg sm:w-80 md:w-96 xl:w-1/2 '>
        <p className='font-bold text-sm '>Your Last 3 Exam</p>
        {
            data.exam.map((item,i)=>(
            <div key={i} className='p-3 w-full flex-wrap rounded-lg border-2 flex justify-between mt-3'>
                <div>
                    <p className='font-bold text-sm w-64 '>{item.exam_title}</p>
                    <p className='text-xs font-medium text-gray-500'>Created At : {item.created_at.slice(0,10)}</p>
                    <p className='text-xs font-medium text-gray-500 capitalize'>Duration : {item.exam_duration} mn</p>
                    <p className='text-xs font-medium text-gray-500 capitalize'>Course : {item.course.course_title} mn</p>
                </div> 
                <div className='flex justify-center items-center flex-col'>
                    <p className='font-bold text-sm '>Questions</p>
                    <p className='text-lg font-bold text-gray-500  '>{item.questions.length}</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <p className='font-bold text-sm '>Passed</p>
                    <p className='text-lg font-bold text-gray-500 '>{item.exam_percentage}%</p>
                </div>
            </div>

            ))
        }
    </div>
  )
}
