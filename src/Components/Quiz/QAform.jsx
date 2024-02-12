import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateQuiz } from '../../Slice/functionSlice';

export default function QAform({quiz}) {
    const dispatch = useDispatch();
    const [question, setquestion] = useState(quiz?.quiz.question);
    const quizId = useSelector((state)=>state.function.quizId);
    const quizzes =  useSelector((state)=>state.function.quizzes);
    const handleSubmit = (e)=>{
        e.preventDefault(); 
      dispatch(updateQuiz({data:{id:quizId,type:"qna",quiz:{question:question}},quizzes:quizzes}))
    }

  return (
    <div className='w-80 md:w-96 border shadow-lg rounded-md  p-6'>
        <p className='font-medium text-sm'>QUESTION AND ANSWER </p>
        <form action="" onSubmit={handleSubmit}>
        <textarea className='my-3 rounded-sm focus:ring-purple-600 text-sm w-full h-36'  type="text" value={question} 
           onChange={(e)=>setquestion(e.target.value)}
           placeholder='Input your question here !' required >
          </textarea>
        <input type='submit' className='text-xs text-white font-medium py-2 px-4 bg-pink-500 rounded-md hover:scale-105 transition' ></input>
        </form>
    </div>
  )
}
