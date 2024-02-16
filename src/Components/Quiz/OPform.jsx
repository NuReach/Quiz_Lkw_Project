import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateQuiz } from '../../Slice/functionSlice';

export default function OPform({quiz}) {
  const [question, setquestion] = useState(quiz?.quiz.question);
  const [anw1,setAnw1] = useState(quiz?.quiz.anw1);
  const [anw2,setAnw2] = useState(quiz?.quiz.anw2);
  const [anw3,setAnw3] = useState(quiz?.quiz.anw3);
  const [anw4,setAnw4] = useState(quiz?.quiz.anw4);
  const [answers,setAnswers] = useState([]);
  const [checked,setChecked] = useState([]);
  const dispatch = useDispatch();
  const quizId = useSelector((state)=>state.function.quizId);
  const quizzes =  useSelector((state)=>state.function.quizzes);
  const handleChange=(e)=>{
    const { value, checked } = e.target;
    setAnswers((prev)=>
    checked ? [ ...prev, value ] :
    prev.filter((item)=>item != value) 
    )
  };
  const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(updateQuiz({data:{id:quizId,type:"op",quiz:{question:question,anw1,anw2,anw3,anw4,answer:answers}},quizzes:quizzes}))
  };
  

  return (
    <div className='w-80 md:w-96 border shadow-lg rounded-md  p-6'>
    <p className='font-medium text-sm'>OPTION QUESTION </p>
    <form action="" onSubmit={handleSubmit} >
    <textarea className='mt-2 rounded-sm focus:ring-purple-600 text-sm w-full h-16'  type="text" value={question} 
      onChange={(e)=>setquestion(e.target.value)}
      placeholder='Input your question here !' required >
     </textarea>
     <div>
       <div className='bg-red-600 p-1 my-2 flex justify-between items-center pr-4'>
           <input type="text" value={anw1} placeholder='OPTION I' className=' w-40 md:w-auto text-white border-none focus:ring-0 bg-inherit outline-none placeholder:text-white'  onChange={(e)=>setAnw1(e.target.value)}  />
           <input type="checkbox" value="anw1" name='answers' onChange={handleChange} checked={answers.find((item)=>item=="anw1") }   />
       </div>
       <div className='bg-blue-500 p-1 my-2 flex justify-between items-center pr-4'>
           <input type="text" value={anw2} placeholder='OPTION II' className=' w-40 md:w-auto text-white border-none focus:ring-0 bg-inherit outline-none placeholder:text-white'  onChange={(e)=>setAnw2(e.target.value)} />
           <input type="checkbox" value="anw2" name='answers' onChange={handleChange} checked={answers.find((item)=>item=="anw2")}  />
       </div>
       <div className='bg-yellow-400 p-1 my-2 flex justify-between items-center pr-4'>
           <input type="text" value={anw3} placeholder='OPTION III' className=' w-40 md:w-auto text-white border-none focus:ring-0 bg-inherit outline-none placeholder:text-white' onChange={(e)=>setAnw3(e.target.value)}  />
           <input type="checkbox" value="anw3" name='answers' onChange={handleChange} checked={answers.find((item)=>item=="anw3")}  />
       </div>
       <div className='bg-green-500 p-1 my-2 flex justify-between items-center pr-4'>
           <input type="text" value={anw4} placeholder='OPTIO IV' className=' w-40 md:w-auto text-white border-none focus:ring-0 bg-inherit outline-none placeholder:text-white' onChange={(e)=>setAnw4(e.target.value)} />
           <input type="checkbox" value="anw4" name='answers' onChange={handleChange} checked={answers.find((item)=>item=="anw4")}  />
       </div>
     </div>
     <input type='submit' className='text-xs w-full my-3 text-white font-medium py-2 px-4 bg-pink-500 rounded-md hover:scale-105 transition' ></input>
    </form>
</div>
  )
}
