import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import ResultFilter from '../Components/Button/ResultFilter'
import ResultTableSm from '../Components/Table/ResultTableSm'
import ResultTableXl from '../Components/Table/ResultTableXl'
import Search from '../Components/Input/Search'
import { motion } from 'framer-motion'
import { containerMotion } from '../animation'

export default function Result() {
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
               className='w-full p-3'>
              <p className='text-xl font-bold mt-2 '>Result</p>
              <div>
                <Search />
                <ResultFilter />
              </div>
              <div>
                <ResultTableXl data={data} />
              </div>
              <div className='gap-3 flex flex-wrap'>
                {
                  data.map((item,i)=>(
                    <ResultTableSm index={i} />
                  ))
                }
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
