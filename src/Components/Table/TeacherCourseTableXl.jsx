import React, { useState } from 'react'
import Dailog from '../Card/Dailog'
import { useDispatch } from 'react-redux';
import { deleteItem, showDailog } from '../../Slice/functionSlice';
import { Link } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { AnimatePresence } from 'framer-motion';

export default function TeacherCourseTableXl({data}) {

    const [modal,setModal] = useState(false);
    const [content,setContent] = useState(null);
    const show = (e,id,name)=>{
        e.preventDefault();
        setContent({id,name})
        setModal(!modal);

    }
  return (
    <div className='p-6 mt-3 border rounded-lg shadow-lg  lg:block w-full'>
        <AnimatePresence>
        {
            modal ? <Dailog setModal={setModal} modal={modal} content = {content}  /> : ""
        }
        </AnimatePresence>
        <header className='font-bold text-sm flex justify-between'>
            <p className='w-12'>ID</p>
            <p className='lg:w-60 w-24'>Course</p>
            <p className='lg:w-48 hidden lg:block'>Code</p>
            <p className='lg:w-48 w-24 flex justify-end'>State</p>
        </header>
        {
            data?.data.length > 0 ?
            data?.data.map((item,i)=>(
                <div key={i}  className='font-bold text-sm flex justify-between items-center my-6 border-b-2 pb-3'>
                    <p className='w-12'>{i+1}</p>
                    <div className='lg:w-60 w-24'>
                    <p className=' font-medium text-gray-600 line-clamp-1 capitalize'>{item.course_title}</p>
                    <p className='hidden lg:block  font-normal line-clamp-1 text-xs text-gray-500 mt-3'>Asign {item.created_at.slice(0,10)}</p>
                    </div>
                    <p className='lg:w-48 hidden uppercase text-xs text-gray-500 font-medium lg:block'>{item.course_code}</p>
                    <div className='lg:w-48 gap-3 flex flex-col justify-end items-end w-24 lg:flex-row'>
                        <Link to={`/teacher/course/update/${item.id}`}  className='font-medium text-xs py-1 rounded-full px-4 text-white bg-yellow-400 w-fit  my-1'>Edit</Link>
                        <button onClick={(e)=>show(e,item.id,"course")} className='font-medium text-xs py-1 rounded-full px-4 text-white bg-red-500 w-fit  my-1'>Delete</button> 
                    </div>
                </div>
            )) :
            <div className='w-full flex justify-center items-center min-h-96'>
                <p className='font-bold text-sm'>No Item !!</p>
            </div>
        }
        <div className='w-full flex justify-end'>
           <Pagination name="course" lastPage = { data.last_page} total = { data.total } size = {data.to} currentPage = {data.current_page} />
        </div>
    </div>
  )
}
