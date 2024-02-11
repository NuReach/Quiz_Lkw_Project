import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { prevPage } from '../../Slice/functionSlice';

export default function PreviousQuestion() {
  const dispatch = useDispatch();
  const page = useSelector((state)=>state.function.page);
  const handleClick = (e)=>{
    e.preventDefault();
    dispatch(prevPage())
  };
  return (
    <div>
        <button hidden={page==0} onClick={handleClick} className='px-4 py-2 mt-3 text-white font-medium text-sm rounded-md bg-yellow-400  hover:scale-105 transition'>Back</button>   
    </div>
  )
}
