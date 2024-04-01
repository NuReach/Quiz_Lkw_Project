import React, { useState } from 'react'
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar'
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar'
import Footer from '../../Components/Footer/Footer'
import Search from '../../Components/Input/Search'
import TeacherCourseTableSm from '../../Components/Table/TeacherCourseTableSm'
import TeacherCourseTableXl from '../../Components/Table/TeacherCourseTableXl'
import { useNavigate } from 'react-router-dom'
import Dailog from '../../Components/Card/Dailog'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { containerMotion } from '../../animation'
import { useQuery } from '@tanstack/react-query'
import { getCourses } from '../../Api/CourseApi'

function TeacherCourse() {
    const navigate = useNavigate();
    const dailog = useSelector((state)=>state.function.dailog);
    const text ="asdfgh";
    const [data,setData]=useState(text.split(""));
    const { isLoading , isError , data:courses } = useQuery({
        queryKey : ['courses'],
        queryFn : getCourses
    });

    if (isLoading) {
        return <p>Loading...</p>
    }
  return (
    <div>
        <TeacherNavbar />
        <div className='flex'>
            <TeacherSidebar />
            <motion.div
                variants={containerMotion}
                initial = "hidden"
                animate = "visible"
                exit= "exit" className='p-3 w-full'>
                <p className='font-bold text-lg '>Courses List</p>
                <div className='flex justify-between items-center flex-wrap'>
                    <Search />
                    <div onClick={
                        (e)=>{
                            e.preventDefault();
                            navigate("/teacher/course/create")
                        }
                    } className='flex justify-center  items-center gap-3 cursor-pointer hover:scale-105 transition'>
                        <p className='text-sm font-bold'>Create Course</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16"/></svg>
                    </div>
                </div>
                <div className='mt-3 gap-3 flex flex-wrap w-full justify-center'>
                    {
                        data.map((item,i)=>(
                             <TeacherCourseTableSm key={i} index={i} />
                        ))
                    }
                    <TeacherCourseTableXl data={data} />
                    <div className='w-full flex  justify-end'>
                        <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-black  my-1 xl:hidden'>Next</button>
                    </div>
                </div>
            </motion.div>

        </div>
        <Footer />
        {
            dailog  ? <Dailog /> : ""
        }
    </div>
  )
}

export default TeacherCourse