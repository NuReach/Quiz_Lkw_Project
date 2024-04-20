import React, { useEffect, useState } from 'react'
import { filterItem } from '../Slice/functionSlice';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteStudentCourseApi, getSearchCourse, getSearchCourseByStudent, getStudentCourse } from '../Api/CourseApi';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoadingPage from './LoadingPage';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import Search from '../Components/Input/Search';
import Filter from '../Components/Button/Filter';
import Loading from '../Components/Loading/Loading';
import TeacherCourseTableXl from '../Components/Table/TeacherCourseTableXl';
import Footer from '../Components/Footer/Footer';
import Dailog from '../Components/Card/Dailog';
import { motion } from 'framer-motion';
import { containerMotion } from '../animation';
import StudentCourseTableXl from '../Components/Table/StudentCourseTableXl';
import { toast } from 'sonner';

export default function CoursePage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const dailog = useSelector((state)=>state.function.dailog);
    const queryParams = new URLSearchParams(location.search);
    const page= queryParams.get('page');
    const search = useSelector((state)=>state.function.search);
    const [sort,setSort] = useState({sortBy:"created_at",sortDir:"asc"});
    const queryClient = useQueryClient();
    useEffect(()=>{
        dispatch(filterItem({search:"all"}));
      },[])

    const { isLoading : searchCourseLoading , isError:searchCourseError , data:searchCourses } = useQuery({
        queryKey : ['searchCourses',{search,sortBy:sort.sortBy,sortDir:sort.sortDir,page}],
        queryFn : ()=>getSearchCourseByStudent(search,sort.sortBy,sort.sortDir,page)
    });

    const {  data:studentCourse } = useQuery({
        queryKey : ['studentCourse'],
        queryFn : ()=>getStudentCourse()
    });


    if (searchCourseError) {
        toast.error("Something went wrong");
        dispatch(filterItem({search:"all"}));
        navigate("/teacher/dashboard");
    }
    
    const leftBtn = async (e,course_id)=>{
        e.preventDefault();
        await deleteStudentCourseMutation(course_id);
    }
    const { mutateAsync : deleteStudentCourseMutation   } = useMutation({
        mutationFn : deleteStudentCourseApi,
        onSuccess : ()=>{
          toast.success("Left Course Successfully")
          queryClient.invalidateQueries(['studentCourse']);
        },
        onError : ()=>{
            toast.error("Sorry, Something went wrong !!")
        }
      })
 
    
  return (
    <div>
    <Navbar />
    <div className='flex'>
        <Sidebar  path={`/courses`} />
        <motion.div
            variants={containerMotion}
            initial = "hidden"
            animate = "visible"
            exit= "exit" className='p-3 w-full'>
            <p className='font-bold text-3xl '>Your Course List</p>
                <div className='flex flex-wrap gap-9 mt-3'>
                    {
                        studentCourse?.map((item,i)=>(
                            <div key={i} class="relative w-80 cursor-pointer dark:text-white">
                                <div className="relative p-4 bg-white dark:bg-gray-800 border-2 border-indigo-500 dark:border-gray-300 rounded-lg hover:scale-105 transition duration-500">
                                    <p className="my-2 text-sm  capitalize font-bold text-gray-800 dark:text-white truncate">{item.course.course_title}</p>
                                    <div className='flex gap-3'>
                                        <p className="text-gray-600 dark:text-gray-300 text-xs capitalize font-bold w-16">
                                            code
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300 text-xs uppercase font-bold">
                                            {item.course.course_code}
                                        </p>
                                    </div>
                                    <div className='flex gap-3'>
                                        <p className="text-gray-600 dark:text-gray-300 text-xs capitalize font-bold w-16">
                                            Teacher
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300 text-xs uppercase font-bold">
                                            {item.course.user.name}
                                        </p>
                                    </div>
                                    <button onClick={(e)=>leftBtn(e,item.course.id)}  className='font-medium  text-xs py-1 rounded-sm mt-3 px-4 text-white bg-red-500 w-fit  my-1'>LEFT</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            <p className='font-bold text-3xl mt-3'>Courses List</p>
            <div className='flex justify-between items-center flex-wrap'>
                <Search name={"course"} />
                <div onClick={
                    (e)=>{
                        e.preventDefault();
                        navigate("/teacher/course/create")
                    }
                } className='flex justify-center  items-center gap-3 cursor-pointer hover:scale-105 transition'>
                </div>
            </div>
            <Filter setSort={setSort} />
            <div className='mt-3 gap-3 flex flex-wrap w-full justify-center'>
                {
                    searchCourseLoading ? 
                    <Loading />
                    :
                    <StudentCourseTableXl  data={ searchCourses} studentCourse={studentCourse} />
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
