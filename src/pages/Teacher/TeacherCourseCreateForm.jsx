import React, { useState } from 'react'
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar'
import Footer from '../../Components/Footer/Footer'
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { containerMotion } from '../../animation';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createCourse } from '../../Api/CourseApi';
import { toast } from 'sonner';

export default function TeacherCourseCreateForm() {
    const navigate = useNavigate();
    const {register , handleSubmit , formState: { errors }  } = useForm();
    const queryClient = useQueryClient();
    const onsubmit = async (data)=>{
        await createCourseFunc(data);
    };

    const { mutateAsync : createCourseFunc , isPending , data   } = useMutation({
        mutationFn : createCourse,
        onSuccess : ()=>{
          toast.success("Course Created Successfully")
          navigate('/teacher/course/create');
          queryClient.invalidateQueries(['courses']);
        },
        onError : ()=>{
            toast.error("Sorry, Something went wrong !!")
        }
      })
    
    
  return (
    <div>
        <TeacherNavbar />
        <div className='flex'>
            <TeacherSidebar  path={"/teacher/course"} />
            <motion.div
                variants={containerMotion}
                initial = "hidden"
                animate = "visible"
                exit= "exit"
                 className='w-full flex justify-center items-center p-3'>
                <form onSubmit={handleSubmit(onsubmit)} className='w-full md:w-1/2 lg:w-1/3 p-6 py-12 border-2 rounded-lg flex flex-col gap-3'>
                    <p className='font-bold text-lg '>Create Course</p>
                    <div className='mt-3'>             
                            <label htmlFor="code" className="block mb-2 text-sm font-medium text-gray-900 ">CODE</label>
                            <input {...register("code", { required : "Code is required"} ) } type="text" id="code" name="code" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg  sm:text-xs focus:ring-blue-500 focus:border-blue-500 " />
                            <div className='h-3 mt-1'>
                                {errors.code && <div className='text-xs text-red-600'>{errors.code.message}</div> }
                            </div>
                    </div>
                    <div>
                            <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 ">Title</label>
                            <input {...register("title", { required : "Title is required" })} type="text" id="title" name="title" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500 " />
                            <div className='h-3 mt-1'>
                                {errors.title && <div className='text-xs text-red-600'>{errors.title.message}</div> }
                            </div>
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
                            <input type='submit' className='font-medium text-xs py-1 rounded-full px-4 text-white bg-black  my-1 cursor-pointer hover:scale-105 transition' /> 
                        }
                        
                    </div>
                </form>
            </motion.div>
        </div>
        <Footer />
    </div>
  )
}
