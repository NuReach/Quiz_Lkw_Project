import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar';
import Footer from '../../Components/Footer/Footer';
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getCourseById, updateCourse } from '../../Api/CourseApi';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import Loading from '../../Components/Loading/Loading';
import LoadingPage from '../LoadingPage';

export default function TeacherCourseEdit() {
    const navigate = useNavigate();
    const {id} = useParams();
    const {register , handleSubmit , formState: { errors }  } = useForm();

    const queryClient = useQueryClient();
    
    const { isLoading , isError , data:courseById } = useQuery({
        queryKey : ['courseById',{id}],
        queryFn : () => getCourseById(id)
    });



    const onSubmit = async (data)=>{
        const course = { course_code : data.code , course_title : data.title , id : id };
        await updateCourseFunc(course);
    }

    const { mutateAsync : updateCourseFunc , isPending  } = useMutation({
        mutationFn : updateCourse,
        onSuccess : ()=>{
          toast.success("Course Updated Successfully")
          navigate('/teacher/course');
          queryClient.invalidateQueries(['courses']);
        },
        onError : ()=>{
            toast.error("Sorry, Something went wrong !!")
        }
      })

    if (isLoading) {
        return <LoadingPage />
    }

    
  return (
    <div>
        <TeacherNavbar />
        <div className='flex'>
            <TeacherSidebar  path={"/teacher/course"} />
            <div className='w-full flex justify-center items-center p-3'>
                {
                    isLoading ?
                    <div className='w-1/2'>
                    <Loading />
                    </div>
                     :
                    <form onSubmit={handleSubmit(onSubmit)} className='w-full md:w-1/2 lg:w-1/3 p-6 py-12 border-2 rounded-lg flex flex-col gap-3'>
                        <p className='font-bold text-lg '>Update Course</p>
                        <div>             
                                <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 ">CODE</label>
                                <input {...register("code", { required : "Code is required"} ) } defaultValue={courseById.course_code} type="text" id="code" name="code" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg  sm:text-xs focus:ring-blue-500 focus:border-blue-500 uppercase" />
                        </div>
                        <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                                <input {...register("title", { required : "Title is required" })} defaultValue={courseById.course_title} type="text" id="title" name="title" className="block capitalize w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500 " />
                        </div>
                        <div className='w-full flex  justify-end gap-3'>
                            <button onClick={(e)=>{
                                e.preventDefault();
                                navigate("/teacher/course");
                            }} className='font-medium text-xs py-1 rounded-full px-4 text-white bg-slate-500  my-1 '>Back</button>
                                                    {
                                isPending ?
                                <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-black  my-1 cursor-pointer hover:scale-105 transition'>Loading...</button>
                                :
                                <input type='submit' value="Update" readOnly className='font-medium text-xs py-1 rounded-full px-4 text-white bg-black  my-1 cursor-pointer hover:scale-105 transition' /> 
                            }
                        </div>
                    </form>
                }
            </div>
        </div>
        <Footer />
    </div>
  )
}

