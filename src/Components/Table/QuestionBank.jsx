import React, { useState } from 'react'
import { question } from '../../Data'
import Search from '../Input/Search';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion, showDailog } from '../../Slice/functionSlice';

export default function QuestionBank() {
    const [data,setData] = useState(question);
    const selectedQuestion = useSelector((state)=>state.function.selectedQuestion);
    const dispatch = useDispatch()
    const show = (e)=>{
        e.preventDefault();
        dispatch(showDailog());
    }

    const addToSelectedQuestion = (e,item)=>{
        e.preventDefault();
        dispatch(addQuestion({item:item,selectedQuestion:selectedQuestion}))
    }

  return (
        <div className='w-full'>
            <div className='flex w-full items-center justify-between'>
            <Search />
            <svg onClick={show} className='cursor-pointer font-bold' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"/></svg>
            </div>
            <div className='max-h-96 overflow-y-auto scrollable'>
            {
                data.map((item,i)=>(
                    <div onClick={(e)=>addToSelectedQuestion(e,item)} className='font-bold text-sm flex flex-wrap  items-center my-6 border-b-2 pb-3 gap-3 cursor-pointer '>
                        <p className='w-6'>{i+1}</p>
                        <div className=''>
                        <p className=' font-medium text-gray-600 line-clamp-1'>Introdcution to computer science</p>
                        </div>
                        <p className='  font-medium text-gray-600 line-clamp-1'>Multiple Choice</p>
                        <p className=' font-medium text-gray-600 line-clamp-1'>Hard</p>
                    </div>
                ))
            }
            </div>
        </div>
  )
}
