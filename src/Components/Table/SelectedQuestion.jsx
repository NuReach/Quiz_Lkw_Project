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
                    <div key={i} className='font-bold text-sm flex flex-wrap  items-center my-6 border-b-2 pb-3 gap-3 cursor-pointer '>
                        <p className='w-6'>{i+1}</p>
                        <div className=''>
                        <p className=' font-medium text-gray-600 line-clamp-1 w-64 capitalize'>{item.question_prompt}</p>
                        </div>
                        <p className='  font-medium text-gray-600 line-clamp-1 w-24 capitalize'>{item.question_type}</p>
                        <p className=' font-medium text-gray-600 line-clamp-1 capitalize'>{item.question_level}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}
