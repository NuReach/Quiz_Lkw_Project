import { useDispatch, useSelector } from 'react-redux';
import { addQuestion, filterItem, showDailog } from '../../Slice/functionSlice';
import { useQuery } from '@tanstack/react-query'
import { getAllQuestions } from '../../Api/ExamApi';
import { useState } from 'react';

export default function QuestionBank() {
    const selectedQuestion = useSelector((state)=>state.function.selectedQuestion);
    const [filterQuestions , setFilterQuestions] = useState([]);
    const dispatch = useDispatch()
    const show = (e)=>{
        e.preventDefault();
        dispatch(showDailog());
    }

    const addToSelectedQuestion = (e,item)=>{
        e.preventDefault();
        dispatch(addQuestion({item:item,selectedQuestion:selectedQuestion}))
    }

    const { data:questions } = useQuery({
        queryKey : ['questions'],
        queryFn : ()=>getAllQuestions()
    });

    const handleChange = (e)=>{
        setFilterQuestions(questions?.filter((item)=>item.question_prompt.includes(e.target.value)||item.question_type.includes(e.target.value)));
    }

  return (
        <div className='w-full'>
            <div className='flex w-full items-center justify-between'>
            <p className='font-bold text-sm'>Please Select Questions</p>
            <svg onClick={show} className='cursor-pointer font-bold' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"/></svg>
            </div>
            <div className=' relative mt-3 mb-1 max-w-96 w-full border-2 bg-white rounded-md sm:w-96 '>
                <input onChange={handleChange} type="text" className='border-none w-10/12 h-8 rounded-md focus:ring-0  placeholder:text-xs text-xs font-medium focus:border-gray-400 border-gray-400' placeholder={`Search for ${name} here`} />
                <svg xmlns="http://www.w3.org/2000/svg" className='text-gray-500 absolute top-0 right-2 ' width="24" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5q0-2.725 1.888-4.612T9.5 3q2.725 0 4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5q0-1.875-1.312-3.187T9.5 5Q7.625 5 6.313 6.313T5 9.5q0 1.875 1.313 3.188T9.5 14"/></svg>
            </div>
            <div className='max-h-96 overflow-y-auto scrollable'>
            {
                filterQuestions.length > 0 ?
                filterQuestions?.map((item,i)=>(
                    <div key={i} onClick={(e)=>addToSelectedQuestion(e,item)} className='font-bold text-sm flex flex-wrap  items-center my-6 border-b-2 pb-3 gap-3 cursor-pointer '>
                        <p className='w-6'>{i+1}</p>
                        <div className=''>
                        <p className=' font-medium text-gray-600 line-clamp-1 w-64 capitalize'>{item.question_prompt}</p>
                        </div>
                        <p className='  font-medium text-gray-600 line-clamp-1 w-24 capitalize'>{item.question_type}</p>
                        <p className=' font-medium text-gray-600 line-clamp-1 capitalize'>{item.question_level}</p>
                    </div>
                )) :
                <div>
                  {
                    questions?.map((item,i)=>(
                    <div key={i} onClick={(e)=>addToSelectedQuestion(e,item)} className='font-bold text-sm flex flex-wrap  items-center my-6 border-b-2 pb-3 gap-3 cursor-pointer '>
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
            }
            
            </div>
        </div>
  )
}
