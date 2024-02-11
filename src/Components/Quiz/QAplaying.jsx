import React, { useState } from 'react'
import Clock from '../Clock/Clock'

export default function QAplaying({item,number}) {
  const [answer, setAnswer] = useState("");
  return (
    <div className=' border shadow-lg rounded-md w-full lg:w-8/12  p-6 min-h-96'>
        <div className='flex flex-col justify-center items-center shadow-lg border p-3 rounded-sm'>
        <p className='font-medium text-sm'>QUESTION AND ANSWER </p>
        <p className='my-2 text-sm'>{number}.{item.question}</p>
        </div>
        <div className='my-3 flex justify-center'>
          <img className='object-cover h-80 w-96' src="https://i.pinimg.com/736x/b9/ec/98/b9ec98be9295ec71c409334e5102adea.jpg" alt="" />
        </div>
        <div className='px-7'>
          <div className='w-full border my-3 '>
          </div>
        </div>
        <textarea className='w-full my-1  ' name="" id="" onChange={(e)=>setAnswer(e.target.value)} placeholder='Enter your answer here !' >{answer}</textarea>
    </div>
    )
}
