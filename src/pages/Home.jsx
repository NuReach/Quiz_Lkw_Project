import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import ProfileCard from '../Components/Card/ProfileCard'
import UpcomingTest from '../Components/Card/UpcomingTest'
import Perfomance from '../Components/Card/Perfomance'
import LastTest from '../Components/Card/LastTest'
import Task from '../Components/Card/Task'
import SmallTask from '../Components/Card/SmallTask'
import { motion } from 'framer-motion'
import { containerMotion } from '../animation'
import LoadingPage from './LoadingPage'
import { useQuery } from '@tanstack/react-query'
import { getUserDashbooardApi } from '../Api/TeacherDashboardApi'

export default function Home() {

    const { isLoading  , isError , data:detail } = useQuery({
        queryKey : ['detail'],
        queryFn : getUserDashbooardApi
      });

      if (isLoading) {
        return <LoadingPage/>
      }

      console.log(detail);
          
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
                 className=' flex flex-col p-9 w-full '>
                <div className='flex flex-wrap  gap-6 sm:justify-center mt-9 '>
                        <section className='w-full sm:w-fit'>
                            <UpcomingTest data={detail?.userExamList} userResults={detail?.userResults} />
                            <SmallTask data={detail?.enrollments} />
                        </section>
                        <section className='w-full gap-6 flex flex-col sm:w-fit'>
                            <Perfomance results = {detail?.userResults} />
                            <LastTest data = {detail?.userResults}  />
                        </section>
                        {/* sm:hidden */}
                       <Task data={detail?.enrollments} />
                </div>
            </motion.div>
        </div>
        <Footer />
    </div>
  )
}
