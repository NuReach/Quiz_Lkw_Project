import React, { useState } from 'react'
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar'
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar'
import Footer from '../../Components/Footer/Footer'
import Search from '../../Components/Input/Search'
import TeacherCourseTableXl from '../../Components/Table/TeacherCourseTableXl'
import { useLocation, useNavigate } from 'react-router-dom'
import Dailog from '../../Components/Card/Dailog'
import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { containerMotion } from '../../animation'
import { useQuery } from '@tanstack/react-query'
import { getCourses, getSearchCourse } from '../../Api/CourseApi'
import Loading from '../../Components/Loading/Loading'

function TeacherCourse() {
    const navigate = useNavigate();
    const dailog = useSelector((state)=>state.function.dailog);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page= queryParams.get('page');
    const search = useSelector((state)=>state.function.search);

    const { isLoading , isError , data:courses } = useQuery({
        queryKey : ['courses'],
        queryFn : ()=>getCourses(page)
    });

    const { isLoading : searchCourseLoading , isError:searchCourseError , data:searchCourses } = useQuery({
        queryKey : ['searchCourses',{search}],
        queryFn : ()=>getSearchCourse(search)
    });

    console.log(searchCourses);
    console.log(courses);
  return (
    <div>
        <TeacherNavbar />
        <div className='flex'>
            <TeacherSidebar  path={`/teacher/course/update/${courses?.current_page}`} />
            <motion.div
                variants={containerMotion}
                initial = "hidden"
                animate = "visible"
                exit= "exit" className='p-3 w-full'>
                <p className='font-bold text-3xl '>Courses List</p>
                <div className='flex justify-between items-center flex-wrap'>
                    <Search name={"course"} />
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
                        isLoading ? 
                        <Loading />
                        :
                        <TeacherCourseTableXl  data={ searchCourses && searchCourses.data.length> 0 ? searchCourses : courses} />
                    }
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