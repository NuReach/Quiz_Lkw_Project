import React, { useState } from 'react'
import { question } from '../../Data'
import Search from '../Input/Search';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion, showDailog } from '../../Slice/functionSlice';
import { getSearchQuestions } from '../../Api/QuestionApi';
import { useQuery } from '@tanstack/react-query'
import Pagination from '../Pagination/Pagination';
import { getAllQuestions } from '../../Api/ExamApi';

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

    const { isLoading : questionsLoading , isError:questionsError , data:questions } = useQuery({
        queryKey : ['questions'],
        queryFn : ()=>getAllQuestions()
    });


  return (
        <div className='w-full'>
            <div className='flex w-full items-center justify-between'>
            <p className='font-bold text-sm'>Please Select Questions</p>
            <svg onClick={show} className='cursor-pointer font-bold' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"/></svg>
            </div>
            <div className='max-h-96 overflow-y-auto scrollable'>
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
        </div>
  )
}
