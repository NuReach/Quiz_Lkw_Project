import React from 'react'
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar'
import Footer from '../../Components/Footer/Footer'
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar'
import TeacherProfileCard from '../../Components/Card/TeacherProfileCard'
import TeacherClassCard from '../../Components/Card/TeacherClassCard'
import TeacherCalendar from '../../Components/Card/TeacherCalendar'
import TeacherAddStudentCard from '../../Components/Card/TeacherAddStudentCard'
import TeacherCreateExamCard from '../../Components/Card/TeacherCreateExamCard'
import TeacherLiveCard from '../../Components/Card/TeacherLiveCard'
import { motion } from 'framer-motion'
import { containerMotion } from '../../animation'
import { getTeachDashboardDetail } from '../../Api/TeacherDashboardApi'
import { useQuery } from '@tanstack/react-query'

export default function TeacherDashboard() {
    const user = JSON.parse(localStorage.getItem('userData'));
    const { isLoading  , isError , data:data } = useQuery({
        queryKey : ['teacherDashboardDetail'],
        queryFn : ()=>getTeachDashboardDetail()
      });
   if (isLoading) {
     return <p>Loading...</p>
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
                exit= "exit"
                
                 className='w-full flex-col z-40 '>
                <div className='w-full p-6 mt-9 flex gap-3 justify-center flex-wrap'>
                    <TeacherProfileCard data={data} user={user} />
                    <TeacherClassCard data={data} />
                </div>
                <div className=' w-full p-6 flex justify-center flex-wrap gap-3  xl:gap-6 mb-6'>
                    <TeacherCalendar />
                    <TeacherAddStudentCard />
                    <TeacherLiveCard />
                    <TeacherCreateExamCard />
                </div>
            </motion.div>
        </div>
        <Footer />
    </div>
  )
}
