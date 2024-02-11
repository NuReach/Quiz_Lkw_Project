import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startPlaying } from '../../Slice/functionSlice';

export default function StartBtn() {
    const dispatch = useDispatch();
    const start = useSelector((state)=>state.function.start);
    const handleClick = (e)=>{
        e.preventDefault();
        dispatch(startPlaying());
    }
    console.log(start);
    return (
        <div>
            <button onClick={handleClick} className='px-3 py-1 mt-3 text-white font-medium text-sm rounded-md bg-purple-600  hover:scale-105 transition'>Start</button>   
        </div>
    )
}
