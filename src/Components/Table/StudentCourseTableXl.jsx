import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import Dailog from '../Card/Dailog';
import { Link } from 'react-router-dom';
import JoinClassDailog from '../Card/JoinClassDailog';

export default function StudentCourseTableXl({data,studentCourse}) {
    
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
            modal ? <JoinClassDailog setModal={setModal} modal={modal} content = {content}  /> : ""
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
                        {
                            studentCourse?.filter((x)=>x.course.id == item.id).length >0 ? 
                            <button disabled  className='font-medium text-xs py-1 rounded-full px-4 text-white bg-purple-500 w-fit  my-1'>ENROLLED</button> :
                            <button onClick={(e)=>show(e,item.id,"course")} className='font-medium text-xs py-1 rounded-full px-4 text-white bg-green-500 w-fit  my-1'>JOIN</button> 

                        }
                    </div>
                </div>
            )) :
            <div className='w-full flex justify-center items-center min-h-96'>
                <p className='font-bold text-sm'>No Item !!</p>
            </div>
        }
    </div>
  )
}
