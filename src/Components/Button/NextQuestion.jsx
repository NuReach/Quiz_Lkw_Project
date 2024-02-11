import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { nextPage } from '../../Slice/functionSlice';

export default function NextQuestion({quizzes}) {
  const page = useSelector((state)=>state.function.page);
  const dispatch = useDispatch();
  const handleClick = (e)=>{
    e.stopPropagation();
    dispatch(nextPage());
  };
    return (
      <div>
          <button hidden={page==quizzes.length-1} onClick={handleClick} className='px-4 py-2 mt-3 text-white font-medium text-sm rounded-md bg-purple-600  hover:scale-105 transition'>Next</button> 
      </div>
    )
}
