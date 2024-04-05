import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { AnimatePresence } from 'framer-motion'
import Dailog from '../Card/Dailog';

export default function TeacherQuestionTableXl({data}) {
    
    const [modal,setModal] = useState(false);
    const [content,setContent] = useState(null);
    const navigate = useNavigate();
    const show = (e,id,name)=>{
        e.preventDefault();
        setContent({id,name})
        setModal(!modal);
    }
  return (
    <>
    <AnimatePresence>
        {
            modal ? <Dailog setModal={setModal} modal={modal} content = {content}  /> : ""
        }
    </AnimatePresence>
    <div className='p-6 mt-3 border rounded-lg shadow-lg  w-full'>
        <header className='font-bold text-sm flex justify-between'>
            <p className='w-12'>ID</p>
            <p className='lg:w-72 w-36'>Question</p>
            <p className='lg:w-48 hidden lg:block '>Type</p>
            <p className='lg:w-48 hidden lg:block'>Difficulty</p>
            <p className='w-40 flex justify-end'>State</p>
        </header>
        {
            data.data.length > 0 ?
            data.data.map((item,i)=>(
                <div key={i} className='font-bold text-sm flex justify-between items-center my-6 border-b-2 pb-3'>
                    <p className='w-12'>{i+1}</p>
                    <div className='lg:w-72 capitalize'>
                    <p className=' font-medium text-gray-600 line-clamp-1 w-36'>{item.question_prompt}</p>
                    <p className='font-normal line-clamp-1 text-xs text-gray-500 mt-3'>{item.created_at.slice(0,10)}</p>
                    </div>
                    <p className='lg:w-48 hidden lg:block font-medium text-gray-600 line-clamp-1 capitalize'>{item.question_type}</p>
                    <p className='lg:w-48 hidden lg:block font-medium text-gray-600 line-clamp-1 capitalize'>{item.question_level}</p>
                    <div className='w-40 gap-3 flex flex-wrap justify-end'>
                    <button onClick={(e)=>navigate(`/teacher/questionbank/update/${item.id}?type=${item.question_type}`)} className='font-medium text-xs py-1 rounded-full px-4 text-white bg-yellow-400 w-fit  my-1'>Edit</button>
                    <button onClick={(e)=>show(e,item.id,"question")} className='font-medium text-xs py-1 rounded-full px-4 text-white bg-red-500 w-fit  my-1'>Delete</button> 
                    </div>
                </div>
            )) :
            <div className='w-full flex justify-center items-center min-h-96'>
                <p className='font-bold text-sm'>No Item !!</p>
            </div>
        }
        <div className='w-full flex justify-end'>
           <Pagination name="questionbank" lastPage = { data.last_page} total = { data.total } size = {data.to} currentPage = {data.current_page} />
        </div>
    </div>
    </>
  )
}
