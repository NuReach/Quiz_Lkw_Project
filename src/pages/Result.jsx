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
import { getUserResultsList } from '../Api/SubmitExamApi'
import { useQuery } from '@tanstack/react-query'
import Loading from '../Components/Loading/Loading'
import LoadingPage from './LoadingPage'

export default function Result() {

  const { isLoading  , isError , data:userResultsList } = useQuery({
    queryKey : ['userResultsList'],
    queryFn : getUserResultsList
  });


  if (isLoading) {
    return <LoadingPage />
  }

  
  console.log(userResultsList);

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
                <ResultTableXl data={userResultsList} />
              </div>
            </motion.div>
        </div>
        <Footer />
    </div>
  )
}
