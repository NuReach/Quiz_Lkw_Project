import React from 'react'
import { useNavigate } from 'react-router-dom';
import QuestionBank from '../Table/QuestionBank';
import { useDispatch, useSelector } from 'react-redux';
import { showDailog } from '../../Slice/functionSlice';
import SelectedQuestion from '../Table/SelectedQuestion';


export default function CreateExamStep3() {
    const navigate = useNavigate();
    const dailog = useSelector((state)=>state.function.dailog);
    const selectedQuestion = useSelector((state)=>state.function.selectedQuestion);
    const dispatch = useDispatch()
    const show = (e)=>{
        e.preventDefault();
        dispatch(showDailog());
    }
    const exam = useSelector((state)=>state.function.exam);
    console.log(exam,selectedQuestion);
    return (
      <div className='w-full p-6 flex flex-col justify-center items-center'>
        <div className='w-full md:w-1/2'>
        <p className='font-bold text-lg '>Create Question</p>
        <div className='flex justify-between items-center w-full mt-6'>  
            <div className='relative w-fit'>
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="60" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m0 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/></svg>
            <p className='text-xs font-bold absolute w-24 -left-1 hidden md:block'>Create Exam</p>
            </div>            
            <div className='h-1 w-full bg-black'></div>
            <div className='relative w-fit'>
            <svg className='' xmlns="http://www.w3.org/2000/svg" width="60" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m0 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/></svg>
            <p className='text-xs font-bold absolute w-24 -left-3 hidden md:block'>Create Section</p>
            </div> 
            <div className='h-1 w-full bg-black'></div>
            <div className='relative w-fit'>
            <svg className='text-green-400' xmlns="http://www.w3.org/2000/svg" width="60" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m0 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/></svg>
            <p className='text-xs font-bold absolute w-28 -left-3 hidden md:block text-green-400'>Create Question</p>
            </div>      
        </div>
        <div className='rounded-lg shadow-lg p-9 border-2  mt-16 gap-3 flex flex-col'>
            <p className='font-bold text-sm '>Choos Question</p>
            <div className='flex flex-wrap gap-6 my-3'>
                <div onClick={()=>navigate("/create/quiz")} className='flex flex-col items-center gap-1 cursor-pointer hover:text-gray-700'>
                    <p className='font-medium text-xs'>Add new question</p>
                    <svg  className='mt-1' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 20 20"><path fill="currentColor" d="M11 9V5H9v4H5v2h4v4h2v-4h4V9zm-1 11a10 10 0 1 1 0-20a10 10 0 0 1 0 20"/></svg>
                </div>
                <div onClick={show} className='flex flex-col items-center gap-1 cursor-pointer hover:text-gray-700'>
                    <p className='font-medium text-xs'>Load from question bank</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path fill="currentColor" d="M9.75 12a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 0 0-4.5 0"/><path fill="currentColor" fillRule="evenodd" d="M3.778 18.326C4.787 19 6.19 19 9 19h6c2.809 0 4.213 0 5.222-.674a4.003 4.003 0 0 0 1.104-1.104C22 16.213 22 14.81 22 12c0-2.809 0-4.213-.674-5.222a4.002 4.002 0 0 0-1.104-1.104C19.213 5 17.81 5 15 5H9c-2.809 0-4.213 0-5.222.674a4 4 0 0 0-1.104 1.104C2 7.787 2 9.19 2 12c0 2.809 0 4.213.674 5.222a4 4 0 0 0 1.104 1.104M12 15.75a3.75 3.75 0 1 1 0-7.5a3.75 3.75 0 0 1 0 7.5m-6.5 0a.75.75 0 0 1-.75-.75V9a.75.75 0 0 1 1.5 0v6a.75.75 0 0 1-.75.75M17.75 15a.75.75 0 0 0 1.5 0V9a.75.75 0 0 0-1.5 0z" clipRule="evenodd"/></svg>
                </div>

            </div>
            <div>
            <SelectedQuestion />        
            </div>
            <div>
            {
                dailog ?  <QuestionBank /> : ""
            }
            </div>
           
            <div className='w-full flex justify-start'>
            <button onClick={()=>{
               alert("submit")
            }} className='font-medium text-xs py-2 w-full md:w-1/3 rounded-md  px-4 text-white bg-black  my-1 '>Submit</button>
        </div>
        </div>
        </div>         
    </div>
    )
}
