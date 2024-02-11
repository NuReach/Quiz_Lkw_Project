import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function SubmitAnswerBtn() {
    const page = useSelector((state)=>state.function.page);
    const dispatch = useDispatch();
    const handleClick = (e)=>{
      e.stopPropagation();
      alert("Do you want to submit");
    };
  return (
    <div>
    <button onClick={handleClick} className='px-4 py-2 mt-3 text-white font-medium text-sm rounded-md bg-purple-600  hover:scale-105 transition'>Submit</button> 
    </div>
  )
}
