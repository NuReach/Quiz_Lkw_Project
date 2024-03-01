import React from 'react'
import { useSelector } from 'react-redux';

export default function SelectedQuestion() {
    const selectedQuestion = useSelector((state)=>state.function.selectedQuestion);
  return (
    <div>
        <p className='font-semibold text-xs'>Selectd Question</p>
        {
            selectedQuestion.length === 0 ? <p className=' text-xs text-black'>No selected item</p> : ""
        }
        <div>
          {
                selectedQuestion.map((item,i)=>(
                    <div className='font-bold text-sm flex flex-wrap  items-center my-6 border-b-2 pb-3 gap-3 cursor-pointer '>
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
