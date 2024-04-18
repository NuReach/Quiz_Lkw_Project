import React from 'react'

export default function TeacherClassCard({data,user}) {
  return (
    <div className='border-2  rounded-lg p-3 w-full items-center shadow-lg sm:w-80 md:w-96 xl:w-1/2 '>
        <p className='font-bold text-sm '>Your Last 3 Exam</p>
        {
            data.exam.map((item,i)=>(
            <div key={i} className='p-3 w-full flex-wrap rounded-lg border-2 flex justify-between mt-3'>
                <div>
                    <p className='font-bold text-sm w-36 truncate'>{item.exam_title}</p>
                    <p className='text-xs font-medium text-gray-500'>{item.created_at.slice(0,10)}</p>
                    <p className='text-xs font-medium text-gray-500'>Duration {item.exam_duration} mn</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <p className='font-bold text-sm '>Questions</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 22l-.25-3h-.25q-3.55 0-6.025-2.475T3 10.5t2.475-6.025T11.5 2q1.775 0 3.313.662t2.7 1.825t1.824 2.7T20 10.5q0 1.875-.612 3.6t-1.676 3.2t-2.525 2.675T12 22m-.525-6.025q.425 0 .725-.3t.3-.725t-.3-.725t-.725-.3t-.725.3t-.3.725t.3.725t.725.3M10.75 12.8h1.5q0-.75.15-1.05t.95-1.1q.45-.45.75-.975t.3-1.125q0-1.275-.862-1.913T11.5 6q-1.1 0-1.85.613T8.6 8.1l1.4.55q.125-.425.475-.837T11.5 7.4t1.013.375t.337.825q0 .425-.25.763t-.6.687q-.875.75-1.062 1.188T10.75 12.8"/></svg>
                    <p className='text-sm font-medium text-gray-500 '>{item.questions.length}</p>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <p className='font-bold text-sm '>Passed</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-3h3v-2h-3V9h-2v3H8v2h3zm1 5q-1.875 0-3.512-.712t-2.85-1.925q-1.213-1.213-1.925-2.85T3 13q0-1.875.713-3.512t1.924-2.85q1.213-1.213 2.85-1.925T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.712 3.513t-1.925 2.85q-1.213 1.212-2.85 1.925T12 22M5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75zM12 20q2.925 0 4.963-2.037T19 13q0-2.925-2.037-4.962T12 6Q9.075 6 7.038 8.038T5 13q0 2.925 2.038 4.963T12 20"/></svg>
                    <p className='text-sm font-medium text-gray-500'>{item.exam_percentage}%</p>
                </div>
            </div>

            ))
        }
    </div>
  )
}
