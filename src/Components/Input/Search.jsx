import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterItem } from '../../Slice/functionSlice';

export default function Search() {
  const search = useSelector((state)=>state.function.search);
  const dispatch = useDispatch();
  const submit = (e)=>{
    if (e.key == "Enter") {
      dispatch(filterItem({search:e.target.value}));
      alert(search);
    }
  }
  return (
    <div className=' relative mt-3 mb-1 max-w-96 w-full border-2 bg-white rounded-md sm:w-96 '>
        <input onKeyDown={submit} type="text" className='border-none w-10/12 h-8 rounded-md focus:ring-0  placeholder:text-xs text-xs font-medium focus:border-gray-400 border-gray-400' placeholder='Search for exam here'  />
        <svg xmlns="http://www.w3.org/2000/svg" className='text-gray-500 absolute top-0 right-2 ' width="24" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"/></svg>
    </div>
  )
}
