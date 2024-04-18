import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getResultStudentScoreApi } from '../../Api/SubmitExamApi';

export default function TeacherResultTable({id}) {
      
    const { data:examResult } = useQuery({
        queryKey : ['examResult',{id}],
        queryFn : ()=>getResultStudentScoreApi(id)
      });  

      console.log(examResult);
  return (
    <div className='border rounded-lg p-3 shadow-lg'>
        <header className='font-bold text-xs flex justify-between border-b pb-2'>
            <p className='sm:w-36'>Strudent</p>
            <p className='sm:w-36'>State</p>
            <p className='sm:w-14'>Marks</p>
            <p className='sm:w-20 text-center'>Grade</p>
        </header>
        {
            examResult?.map((item,i)=>(
                <div key={i} className='font-medium text-xs flex justify-between py-6 border-b '>
                    <p className='sm:w-36 line-clamp-1'>{item?.user}</p>
                    <p className='sm:w-36'>{item?.correct}/{item?.state}</p>
                    <p className='sm:w-14'>{item?.score}%</p>
                    {
                        item?.grade == 'A' ?
                        <div className='sm:w-20  text-white p-1 rounded-full text-center bg-green-500 ' >A</div> :
                        (item?.grade == 'B' ? <div className='sm:w-20  text-white p-1 rounded-full text-center bg-blue-500 ' >B</div> : (
                            item?.grade == 'C' ? <div className='sm:w-20  text-white p-1 rounded-full text-center bg-orange-500 ' >C</div> : (
                                item?.grade == 'D' ? <div className='sm:w-20  text-white p-1 rounded-full text-center bg-yellow-500 ' >D</div> :
                                <div className='sm:w-20  text-white p-1 rounded-full text-center bg-red-500 ' >E</div>
                            )
                        ))
                    }
                </div>
            ))
        }
    </div>
  )
}
