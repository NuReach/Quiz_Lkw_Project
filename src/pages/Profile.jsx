import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Sidebar from '../Components/Sidebar/Sidebar'
import InfomationCard from '../Components/Card/InfomationCard'
import InformationDetail from '../Components/Card/InformationDetail'
import ProfileCard from '../Components/Card/ProfileCard'
import ChangePasswordCard from '../Components/Card/ChangePasswordCard'
import { motion } from 'framer-motion'
import { containerMotion } from '../animation'
import { getUser } from '../Api/Authentication'
import { useQuery } from '@tanstack/react-query'
import LoadingPage from './LoadingPage'

export default function Profile() {
  const [token,setToken] = useState("");

  useEffect(()=>{
    const userData = JSON.parse(localStorage.getItem('userData'));
    setToken( userData?.token)
  },[])

  const { isLoading  , isError , data:user } = useQuery({
    queryKey : ['user'],
    queryFn : getUser
  });


  if (isLoading) {
    return <LoadingPage />
  }
    
  return (
    <div>
        <Navbar/>
        <div className='flex'>
            <Sidebar />
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
