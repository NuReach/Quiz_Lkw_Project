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
import { useQuery } from '@tanstack/react-query'
import { getUser } from '../../Api/Authentication'

export default function TeachProfile() {
    
  const { isLoading  , isError , data:user } = useQuery({
    queryKey : ['user'],
    queryFn : ()=>getUser()
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
             className='flex flex-wrap justify-center items-center w-full gap-6'>
                <div className='p-3 w-full sm:w-fit flex flex-col gap-6'>
                    <InfomationCard user={user} />
                    <ChangePasswordCard user={user} />
                </div>
                <div className='p-3 w-fit flex flex-col gap-6'>
                    <ProfileCard user={user} />
                    <InformationDetail user={user} />
                </div>
            </motion.div>
        </div>
        <Footer />
    </div>
  )
}
