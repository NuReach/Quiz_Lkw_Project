import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar';
import Footer from '../../Components/Footer/Footer';
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar';

export default function TeacherCourseEdit() {
    const [id, setId] = useState('C105D');
    const [title, setTitle] = useState('Database Management');
    const navigate = useNavigate();
  return (
    <div>
        <TeacherNavbar />
        <div className='flex'>
            <TeacherSidebar  path={"/teacher/course"} />
            <div className='w-full flex justify-center items-center p-3'>
                <div className='w-full md:w-1/2 lg:w-1/3 p-6 py-12 border-2 rounded-lg flex flex-col gap-3'>
                    <p className='font-bold text-lg '>Create Course</p>
                    <div>             
                            <label htmlFor="id" className="block mb-2 text-sm font-medium text-gray-900 ">ID</label>
                            <input value={id} onChange={(e)=>setId(e.target.value)} type="text" id="id" name="id" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg  sm:text-xs focus:ring-blue-500 focus:border-blue-500 " />
                    </div>
                    <div>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                            <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" id="title" name="description" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500 " />
                    </div>
                    <div className='w-full flex  justify-end gap-3'>
                        <button onClick={(e)=>{
                            e.preventDefault();
                            navigate("/teacher/course");
                        }} className='font-medium text-xs py-1 rounded-full px-4 text-white bg-slate-500  my-1 '>Back</button>
                        <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-black  my-1 '>Submit</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

