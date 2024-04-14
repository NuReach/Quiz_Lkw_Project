import React, { useState } from 'react'
import { insertUserAnswer } from '../../Slice/functionSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function QCMplaying({item,number,quizId}) {
  const userAnswers = useSelector((state)=>state.function.userAnswers);
  const id = item.id+quizId;
  const [answer, setAnswer] = useState((userAnswers?.filter((x)=>x.id==id)[0])?.answer);
  const dispatch = useDispatch();
  const handleClick = (e,choice)=>{
    e.preventDefault();
    setAnswer(choice);
    dispatch(insertUserAnswer({data:{id:id,question_id:item.id,exam_id:quizId,choice_id:choice},userAnswers:userAnswers}))
  }
  return (
    <div className=' w-full md:w-96 lg:w-1/3'>
      <div className=''>
      <p className='my-2 text-sm font-medium capitalize'>{number}.{item?.question_prompt}</p>
      </div>
      <div className='flex flex-col gap-3 justify-center items-center mt-3  '>
          <div onClick={(e)=>handleClick(e,item.choices[0].id)} className={answer === item.choices[0].id ? 'w-full p-2 border-2 rounded-lg border-blue-500 text-xs bg-black bg-opacity-5 hover:bg-opacity-0 transition' :'w-full p-2 text-xs border-2 border-gray-300 rounded-lg bg-black bg-opacity-5 hover:bg-opacity-0 transition '}>
            <div className='flex items-center space-x-3 p-1'>
              {
                answer == item.choices[0].id ? <svg className='text-blue-500 font-medium' xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"/></svg>
             : <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="currentColor"/></svg>
              
              }
              <p className='font-medium capitalize'> {item.choices[0].text}</p>
            </div>
          </div>
          <div onClick={(e)=>handleClick(e,item.choices[1].id)} className={ answer === item.choices[1].id ? 'w-full p-2 border-2 rounded-lg border-blue-500 text-xs bg-black bg-opacity-5 hover:bg-opacity-0 transition' :'w-full p-2 text-xs border-2 border-gray-300 rounded-lg bg-black bg-opacity-5 hover:bg-opacity-0 transition '}>
          <div className='flex items-center space-x-3 p-1'>
              {
                answer == item.choices[1].id ? <svg className='text-blue-500 font-mediu capitalizem' xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"/></svg>
             : <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="currentColor"/></svg>
              
              }
              <p className='font-medium capitalize'> {item.choices[1].text}</p>
            </div>
          </div>
          <div onClick={(e)=>handleClick(e,item.choices[2].id)} className={ answer === item.choices[2].id ? 'w-full p-2 border-2 rounded-lg border-blue-500 text-xs bg-black bg-opacity-5 hover:bg-opacity-0 transition' :'w-full p-2 text-xs border-2 border-gray-300 rounded-lg bg-black bg-opacity-5 hover:bg-opacity-0 transition '}>
          <div className='flex items-center space-x-3 p-1'>
              {
                answer == item.choices[2].id ? <svg className='text-blue-500 font-medium' xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"/></svg>
             : <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="currentColor"/></svg>
              
              }
              <p className='font-medium capitalize'> {item.choices[2].text}</p>
            </div>
          </div>
          <div onClick={(e)=>handleClick(e,item.choices[3].id)} className={answer === item.choices[3].id ? 'w-full p-2 border-2 rounded-lg border-blue-500 text-xs bg-black bg-opacity-5 hover:bg-opacity-0 transition' :'w-full p-2 text-xs border-2 border-gray-300 rounded-lg bg-black bg-opacity-5 hover:bg-opacity-0 transition '}>
          <div className='flex items-center space-x-3 p-1'>
              {
                answer == item.choices[3].id ? <svg className='text-blue-500 font-medium' xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"/></svg>
             : <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="currentColor"/></svg>
              
              }
              <p className='font-medium capitalize'> {item.choices[3].text}</p>
            </div>
          </div>
      </div>
  </div>
  )
}
