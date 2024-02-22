import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import ResultFilter from '../Components/Button/ResultFilter'
import ResultSearch from '../Components/Input/ResultSearch'
import ResultTableSm from '../Components/Table/ResultTableSm'
import ResultTableXl from '../Components/Table/ResultTableXl'

export default function Result() {
  const text ="asdfgh";
  const [data,setData]=useState(text.split(""));
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <div className='w-full p-3'>
              <p className='text-xl font-bold mt-2 '>Result</p>
              <div>
                <ResultSearch />
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
              <div className='w-full flex p-6 justify-end'>
                <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-black  my-1 xl:hidden'>Next</button>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
