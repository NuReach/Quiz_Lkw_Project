import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { deleteQuiz } from '../../Slice/functionSlice';

export default function OPquiz({number}) {
  const dispatch = useDispatch();
  const quizId = useSelector((state)=>state.function.quizId);
  const handleDelete = (e)=>{
    e.preventDefault();
    dispatch(deleteQuiz({quizId:quizId}))
  };
  return (
    <div className='w-14 md:w-40 bg-white shadow-lg  border rounded-lg mt-4 relative p-3 items-center cursor-pointer'>
        <svg className='absolute -right-6 -top-6 m-3 text-red-600 hover:scale-125 transition' onClick={handleDelete} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>
        <div className='bg-gray-300 text-xs p-2 text-center text-white font-medium ' >
        QUESTION {number+1} 
        </div>
        <div className='hidden md:flex space-x-3 mt-3 justify-between'>
            <div className='bg-red-600 text-white text-xs p-3 text-center font-medium'>OP1</div>
            <div className='bg-blue-600 text-white text-xs p-3 text-center font-medium'>OP2</div>
        </div>
        <div className='hidden md:flex space-x-3 mt-3 justify-between'>
            <div className='bg-yellow-400 text-white text-xs p-3 text-center font-medium'>OP3</div>
            <div className='bg-green-500 text-white text-xs p-3 text-center font-medium'>OP4</div>
        </div>
    </div>
  )
}
