import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


export default function QCMform() {
  const [question, setQuestion] = useState("");
  const [op,setOp] = useState("");
  const [anw1,setAnw1] = useState("");
  const [anw2,setAnw2] = useState("");
  const [anw3,setAnw3] = useState("");
  const [anw4,setAnw4] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(anw2,anw3);
  };



  return (
    <div className='w-80 md:w-96 border shadow-lg rounded-md  p-6'>
         <p className='font-medium text-sm'>QCM QUESTION </p>
         <form action="" onSubmit={handleSubmit} >
         <textarea className='mt-2 rounded-sm focus:ring-purple-600 text-sm w-full h-16'  type="text" value={question} 
           onChange={(e)=>setQuestion(e.target.value)}
           placeholder='Input your question here !' required >
          </textarea>
          <div>
            <div className='bg-red-600 p-1 px-2 my-2 flex justify-between items-center'>
                <input type="text" value={anw1} onChange={(e)=>setAnw1(e.target.value)} placeholder='QCM I' className=' w-40 md:w-auto text-white border-none focus:ring-0 bg-inherit outline-none placeholder:text-white' />
                <input type="radio" name='choice' value="op1" 
                onChange={(e)=>setOp(e.target.value)} className=' bg-green-500  checked:bg-green-500  border-2 border-white checked:border-2 checked:border-white' 
                checked={op === "op1"}
                required />
            </div>
            <div className='bg-blue-600 p-1 px-2 my-2 flex justify-between items-center'>
                <input type="text" value={anw2} onChange={(e)=>setAnw2(e.target.value)}  placeholder='QCM II' className=' w-40 md:w-auto text-white border-none focus:ring-0 bg-inherit outline-none placeholder:text-white' />
                <input type="radio" name='choice' value="op2" 
                onChange={(e)=>setOp(e.target.value)} className=' bg-green-500  checked:bg-green-500  border-2 border-white checked:border-2 checked:border-white' 
                checked={op === "op2"}
                required />
            </div>
            <div className='bg-yellow-400 p-1 px-2 my-2 flex justify-between items-center'>
                <input type="text" value={anw3}  onChange={(e)=>setAnw3(e.target.value)}  placeholder='QCM III' className=' w-40 md:w-auto text-white border-none focus:ring-0 bg-inherit outline-none placeholder:text-white' />
                <input type="radio" name='choice' value="op3" 
                onChange={(e)=>setOp(e.target.value)} className=' bg-green-500  checked:bg-green-500  border-2 border-white checked:border-2 checked:border-white' 
                checked={op === "op3"}
                required />
            </div>
            <div className='bg-green-500 p-1 px-2 my-2 flex justify-between items-center'>
                <input type="text" value={anw4}  onChange={(e)=>setAnw4(e.target.value)}  placeholder='QCM IV' className=' w-40 md:w-auto text-white border-none focus:ring-0 bg-inherit outline-none placeholder:text-white' />
                <input type="radio" name='choice' value="op4" 
                onChange={(e)=>setOp(e.target.value)} className=' bg-green-500  checked:bg-green-500  border-2 border-white checked:border-2 checked:border-white' 
                checked={op === "op4"}
                required />
            </div>
          </div>
          <input type='submit' className='text-xs text-white font-medium py-2 px-4 bg-pink-500 rounded-md hover:scale-105 transition' ></input>
         </form>
    </div>
  )
}
