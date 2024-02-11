import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function TFform() {
  const [question, setQuestion] = useState("");
  const [op,setOp] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault();
  }



  return (
    <div className='w-80 md:w-96 border shadow-lg rounded-md  p-6'>
      <p className='font-medium text-sm'>TRUE OF FALSE QUESTION </p>
      <form action="" onSubmit={handleSubmit} >
      <textarea className='mt-2 rounded-sm focus:ring-purple-600 text-sm w-full h-16'  type="text" value={question} 
        onChange={(e)=>setQuestion(e.target.value)}
        placeholder='Input your question here !' required >
      </textarea>
      <div>
        <div className='bg-red-600 p-2 my-2 flex justify-between items-center px-2'>
            <div className=' w-40 md:w-auto text-white border-none focus:ring-0 bg-inherit outline-none placeholder:text-white' >
             True
            </div>
            <input type="radio" name='choice' value="op1" 
            onChange={(e)=>setOp(e.target.value)} className=' bg-green-500  checked:bg-green-500  border-2 border-white checked:border-2 checked:border-white' 
            checked={op === "op1"}
             required />
        </div>
        <div className='bg-blue-600 p-2 my-2 flex justify-between items-center px-2'>
           <div className=' w-40 md:w-auto text-white border-none focus:ring-0 bg-inherit outline-none placeholder:text-white' >
             False
            </div>
            <input type="radio" name='choice' value="op2" 
            onChange={(e)=>setOp(e.target.value)}  className='focus:bg-green-500 bg-green-500 checked:bg-green-500 border-2 border-white checked:border-white checked:border-2' 
            checked={op==="op2"}
            required/>
        </div>
      </div>
      <input type='submit' className='text-xs text-white font-medium py-2 px-4 bg-pink-500 rounded-md hover:scale-105 transition' ></input>
      </form>
  </div>
  )
}
