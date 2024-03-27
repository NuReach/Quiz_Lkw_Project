import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import Search from '../Components/Input/Search'
import Filter from '../Components/Button/Filter'
import ExamTableSm from '../Components/Table/ExamTableSm'
import ExamTableXl from '../Components/Table/ExamTableXl'
import NextQuestion from '../Components/Button/NextQuestion'
import { containerMotion } from '../animation'
import { motion } from 'framer-motion'

export default function Exam() {
  const text ="asdfgh";
  const [data,setData]=useState(text.split(""));
  
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <motion.div
                variants={containerMotion}
                initial = "hidden"
                animate = "visible"
                exit= "exit"
               className='w-full p-3' >
                <p className='text-xl font-bold mt-2 '>Exam</p>
                <div className='flex items-center justify-between flex-wrap'>
                  <Search />
                  <Filter />
                </div>
                <div  className=' flex flex-wrap gap-3 mt-3  '>
                {
                  data.map((item,i)=>(
                  <ExamTableSm key={i} index={i} />
                  ))
                }
                </div>
                <div>
                  <ExamTableXl data={data} />
                </div>
                <div className='w-full flex p-6 justify-between'>
                <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-black  my-1 xl:hidden'>Back</button>
                <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-black  my-1 xl:hidden'>Next</button>
                </div>
            </motion.div>
        </div>
        <Footer />
    </div>
  )
}
