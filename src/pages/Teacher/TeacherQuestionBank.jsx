import React, { useState } from 'react'
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar'
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar'
import Footer from '../../Components/Footer/Footer'
import Search from '../../Components/Input/Search'
import QuestionFilter from '../../Components/Button/QuestionFilter'
import TeacherQuestionTableXl from '../../Components/Table/TeacherQuestionTableXl'
import { data } from 'autoprefixer'
import TeacherQuestionTableSm from '../../Components/Table/TeacherQuestionTableSm'
import Dailog from '../../Components/Card/Dailog'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function TeacherQuestionBank() {
    const text ="asdfgh";
    const [data,setData]=useState(text.split(""));
    const showDailog = useSelector((state)=>state.function.dailog);
    const navigate = useNavigate();
    console.log(showDailog);
  return (
    <div>
        <TeacherNavbar />
        <div className='flex'>
            <TeacherSidebar/>
            <div className='p-3 w-full'>
                <p className='font-bold text-lg '>Question List</p>
                <div className='flex justify-between items-center flex-wrap w-full'>
                    <Search />
                    <div onClick={(e)=>{
                        navigate("/teacher/questionbank/create")
                    }} className='flex justify-center  items-center gap-3 cursor-pointer hover:scale-105 transition'>
                        <p className='text-sm font-bold'>Create Question</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16"/></svg>
                    </div>
                </div>
                <div>
                    <QuestionFilter />
                </div>
                <div className='flex flex-wrap gap-3 w-full justify-center '>
                    <TeacherQuestionTableXl data={data} />
                </div>
                <div className='w-full flex  justify-end'>
                  <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-black  my-1 xl:hidden'>Next</button>
              </div>
            </div>
        </div>
        {
            showDailog ? <Dailog /> : ""
        }
        
        <Footer />
    </div>
  )
}
