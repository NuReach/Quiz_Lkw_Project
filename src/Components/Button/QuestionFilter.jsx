import React, { useState } from 'react'

export default function QuestionFilter() {
    const [filter,setFilter] = useState(false);
    const handleClick = (e)=>{
      e.preventDefault();
      setFilter(!filter)
    }
    const clickFilter = (e,slug)=>{
      e.preventDefault();
      alert(slug);
    }
  return (
    <div className='flex items-center flex-wrap relative'>
        <button onClick={(e)=>clickFilter(e,"all")} className='rounded-full mr-3 my-1 border-2 py-1 px-8 bg-white font-medium text-xs cursor-pointer hover:scale-105 transition'>ALL</button>
        <button onClick={(e)=>clickFilter(e,"recent")} className='rounded-full mr-3 my-1 border-2 py-1 px-8 bg-white font-medium text-xs cursor-pointer hover:scale-105 transition'>Recent</button>
        <div className= {filter ? 'flex flex-wrap items-center' : 'hidden' }>
            <button onClick={(e)=>clickFilter(e,"mlChoice")} className='rounded-full mr-3 my-1 border-2 py-1 px-8 bg-white font-medium text-xs cursor-pointer hover:scale-105 transition'>Multiple Choice</button>
            <button onClick={(e)=>clickFilter(e,"tf")} className='rounded-full mr-3 my-1 border-2 py-1 px-8 bg-white font-medium text-xs cursor-pointer hover:scale-105 transition'>True False</button>
            <button onClick={(e)=>clickFilter(e,"easy")} className='rounded-full mr-3 my-1 border-2 py-1 px-8 bg-white font-medium text-xs cursor-pointer hover:scale-105 transition'>Easy</button>
            <button onClick={(e)=>clickFilter(e,"medium")} className='rounded-full mr-3 my-1 border-2 py-1 px-8 bg-white font-medium text-xs cursor-pointer hover:scale-105 transition'>Medium</button>
            <button onClick={(e)=>clickFilter(e,"hard")} className='rounded-full mr-3 my-1 border-2 py-1 px-8 bg-white font-medium text-xs cursor-pointer hover:scale-105 transition'>Hard</button>
        </div>
        <div onClick={handleClick} className='flex mr-3 my-1 items-center space-x-1 cursor-pointer hover:scale-105 transition'>
            <svg className='font-medium' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round"><path d="M10 8h10M4 16h10"/><circle cx="7" cy="8" r="3" transform="rotate(90 7 8)"/><circle cx="17" cy="16" r="3" transform="rotate(90 17 16)"/></g></svg>
            <p className='font-medium text-xs'>Filter</p>
        </div>
    </div>
  )
}
