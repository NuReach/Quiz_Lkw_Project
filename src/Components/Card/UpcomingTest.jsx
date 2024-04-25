import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UpcomingTest({data,userResults}) {
    const navigate = useNavigate();
    const handleClick = (e,id)=>{
        e.preventDefault();
        navigate(`/quiz/playing/${id}`);
    }
  return (
    <div className=' relative p-6 shadow-lg rounded-lg border sm:w-60 lg:w-80 items-center xl:h-full   '>
        <div className=' absolute -top-9 left-0 '>
            <p className='text-xl font-bold '>Dashboard</p>
        </div>
        <p className='font-bold text-lg'>Upcoming Tests</p>
        <div className='flex flex-col justify-center items-center mt-3 text-center'>
            <img  className='w-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpfF9JQ8S-3yextczkPpYtj7yi660mfH9kBLtj564KgPfq2_DrAbayHSI8XtqUTiI9T8&usqp=CAU" alt="" />
            <p className='text-xs font-bold mt-3 capitalize'>{data[0]?.exam_title}</p>
            <p className='text-gray-500 font-medium text-xs mt-2 capitalize'>{data[0]?.course_title}</p>
            <p className='text-xs font-bold mt-3'>Deadline:17/02/2024</p>
        </div>
        <div>
            <button onClick={(e)=>handleClick(e,data[0]?.id)} className='text-white bg-black rounded-md my-6 text-xs py-2 font-medium w-full'>Take Test</button>
        </div>
        <div className=''>
            <p className='font-bold text-lg'>Recent Test Result</p>
            {
                userResults?.slice(0.3).map((item,i)=>(
                <div key={i} className='-space-y-2 border-b'>
                    <p className='text-xs font-bold mt-1 capitalize'>{item.exam_title}</p>
                    <div className='flex justify-between'>
                    <p className='text-gray-500 font-medium text-xs mt-2 capitalize'>{item.course_title} ({(item.correct_choices_count/item.total_choices_count).toFixed(2) * 100})%</p>
                    <p className='text-gray-500 font-medium text-xs mt-2'>{item.created_at.slice(0,10)}</p>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
  )
}
