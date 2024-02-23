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

export default function TeacherDashboard() {
  return (
    <div>
        <TeacherNavbar />
        <div className='flex'>
            <TeacherSidebar />
            <div className='w-full flex-col '>
                <div className='w-full p-6 mt-9 flex gap-3 justify-center flex-wrap'>
                    <TeacherProfileCard />
                    <TeacherClassCard />
                </div>
                <div className=' w-full p-6 flex justify-center flex-wrap gap-3  xl:gap-6 mb-6'>
                    <TeacherCalendar />
                    <TeacherAddStudentCard />
                    <TeacherLiveCard />
                    <TeacherCreateExamCard />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
