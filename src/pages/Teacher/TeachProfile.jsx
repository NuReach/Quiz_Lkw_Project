import React from 'react'
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar'
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar'
import Footer from '../../Components/Footer/Footer'
import InfomationCard from '../../Components/Card/InfomationCard'
import ChangePasswordCard from '../../Components/Card/ChangePasswordCard'
import ProfileCard from '../../Components/Card/ProfileCard'
import InformationDetail from '../../Components/Card/InformationDetail'
import { containerMotion } from '../../animation'
import { motion } from 'framer-motion'

export default function TeachProfile() {
    
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
             className='flex flex-wrap justify-center items-center w-full gap-6'>
                <div className='p-3 w-full sm:w-fit flex flex-col gap-6'>
                    <InfomationCard />
                    <ChangePasswordCard />
                </div>
                <div className='p-3 w-fit flex flex-col gap-6'>
                    <ProfileCard />
                    <InformationDetail />
                </div>
            </motion.div>
        </div>
        <Footer />
    </div>
  )
}
