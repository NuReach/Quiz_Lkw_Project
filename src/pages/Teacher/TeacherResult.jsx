import React, { useEffect, useState } from 'react'
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar'
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar'
import Footer from '../../Components/Footer/Footer'
import Search from '../../Components/Input/Search'
import TeacherResultFilter from '../../Components/Button/TeacherResultFilter'
import TeacherResultTable from '../../Components/Table/TeacherResultTable'
import { containerMotion } from '../../animation'
import { motion } from 'framer-motion'
import { getExamList, getResultStudentScoreApi } from '../../Api/SubmitExamApi'
import { filterItem } from '../../Slice/functionSlice'
import { useQuery } from '@tanstack/react-query'
import { useSelector } from 'react-redux'
import LoadingPage from '../LoadingPage'

export default function TeacherResult() {
    const [id,setId] = useState(null);
    const [show,setShow] = useState(false);
    const handleClick = (e,id)=>{
        e.preventDefault();
        setId(id);
        setShow(!show);
        console.log(id);
    }

    const { isLoading  , isError , data:examList } = useQuery({
        queryKey : ['examList'],
        queryFn : ()=>getExamList()
      });

    if (isLoading) {
        return <LoadingPage />
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
                exit= "exit" className='p-3 w-full' >
                <div className='flex justify-center flex-col flex-wrap items-center gap-9 mt-3  w-full'>
                <p className='font-bold text-lg '>Result List</p>
                    {
                        examList?.map((item,i)=>(
                        <div key={i} className='flex flex-col w-full border-b pb-1 '>
                            <div onClick={(e)=>handleClick(e,i)}  className='flex  w-full justify-between items-center cursor-pointer'>
                                <div className=' flex items-end gap-3 flex-wrap'>
                                    <p className='font-bold text-sm uppercase'>{item.course.course_code} :</p>
                                    <p className='font-bold text-sm capitalize'>{item.exam_title}</p>
                                    <p className='font-bold text-xs text-gray-500 '>{item.created_at.slice(0,10)}</p>
                                </div>
                                {
                                    id == i && show == true ? 
                                    <div>
                                    <svg className='cursor-pointer rotate-180' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M128 192l128 128 128-128z" fill="currentColor"/></svg>
                                    </div> :
                                    <div>
                                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M128 192l128 128 128-128z" fill="currentColor"/></svg>
                                </div>
                                }
                             
                            </div>
                            {
                                id == i && show == true ? 
                                <div className='my-3 transition-all'>
                                    <TeacherResultTable id={item.id} />
                                </div>  : ""
                            }
                           
                        </div>
                            
                        ))
                    }
                </div>
            </motion.div>
        </div>
        <Footer />
    </div>
  )
}
