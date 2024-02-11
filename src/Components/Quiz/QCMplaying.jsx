import React, { useState } from 'react'

export default function QCMplaying({item,number}) {
  const [answer, setAnswer] = useState("");
  const handleClick = (e,choice)=>{
    e.preventDefault();
    setAnswer(choice);
  }
  return (
    <div className=' border shadow-lg rounded-md w-full lg:w-8/12  p-6 min-h-96'>
      <div className='flex flex-col justify-center items-center shadow-lg border p-3 rounded-sm'>
      <p className='font-medium text-sm'> QCM QUESTION </p>
      <p className='my-2 text-sm'>{number}.{item.quiz.question}</p>
      </div>
      <div className='my-3 flex justify-center'>
        <img className='object-cover h-80 w-96' src="https://i.pinimg.com/736x/b9/ec/98/b9ec98be9295ec71c409334e5102adea.jpg" alt="" />
      </div>
      <div className='px-7'>
        <div className='w-full border my-3 '>
        </div>
      </div>
      <div className='flex flex-wrap justify-center items-center  '>
          <div onClick={(e)=>handleClick(e,"op1")} className={answer == "op1" ?'bg-red-600 border-8 border-green-300 cursor-pointer m-1 text-white text-sm p-3 flex items-center space-x-3 w-96 h-24 font-medium rounded-sm':'bg-red-600 cursor-pointer m-1 text-white text-sm p-3 flex items-center space-x-3 w-96 h-24 font-medium rounded-sm'}>
              <div className='p-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M1 21h22L12 2"/></svg>
              </div>
              <p> {item.quiz.anw1}</p>
          </div>
          <div onClick={(e)=>handleClick(e,"op2")} className={ answer == "op2" ?'bg-blue-600 m-1 border-8 border-green-300 cursor-pointer text-white text-sm p-3 flex space-x-3 items-center w-96 h-24 font-medium rounded-sm' :'bg-blue-600 m-1 cursor-pointer text-white text-sm p-3 flex space-x-3 items-center w-96 h-24 font-medium rounded-sm'}>
            <div className='p-4'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21V3h18v18z"/></svg>
            </div>
            <p>{item.quiz.anw2}</p>
          </div>
          <div onClick={(e)=>handleClick(e,"op3")} className={ answer == "op3" ?'bg-yellow-400 cursor-pointer border-8 border-green-300 m-1 text-white text-sm p-3 flex items-center space-x-3 w-96 h-24 font-medium rounded-sm': 'bg-yellow-400 cursor-pointer m-1 text-white text-sm p-3 flex items-center space-x-3 w-96 h-24 font-medium rounded-sm'}>
              <div className='p-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"/></svg>
              </div>
              <p> {item.quiz.anw3}</p>
          </div>
          <div onClick={(e)=>handleClick(e,"op4")} className={answer == 'op4' ? 'bg-green-500 m-1 cursor-pointer border-8 border-green-300 text-white text-sm p-3 flex space-x-3 items-center w-96 h-24 font-medium rounded-sm' : 'bg-green-500 m-1 cursor-pointer text-white text-sm p-3 flex space-x-3 items-center w-96 h-24 font-medium rounded-sm'}>
            <div className='p-4 rotate-45'>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21V3h18v18z"/></svg>
            </div>
            <p>{item.quiz.anw4}</p>
          </div>
      </div>
  </div>
  )
}
