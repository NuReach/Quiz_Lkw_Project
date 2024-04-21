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
import { getUserExamsList, getUserResultsList } from '../Api/SubmitExamApi'
import Loading from '../Components/Loading/Loading'
import { useQuery } from '@tanstack/react-query'
import LoadingPage from './LoadingPage'

export default function Exam() {

  const { isLoading : ld  , isError : er , data:userResultsList } = useQuery({
    queryKey : ['userResultsList'],
    queryFn : getUserResultsList
  });

  const { isLoading  , isError , data:userexamsList } = useQuery({
    queryKey : ['userexamsList'],
    queryFn : getUserExamsList
  });

  console.log(userexamsList);
  if (isLoading) {
    return <LoadingPage />
  }
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
                <div>
                  <ExamTableXl data={userexamsList} result={userResultsList} />
                </div>
            </motion.div>
        </div>
        <Footer />
    </div>
  )
}
