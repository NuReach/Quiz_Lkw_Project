import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Sidebar from '../Components/Sidebar/Sidebar'
import InfomationCard from '../Components/Card/InfomationCard'
import InformationDetail from '../Components/Card/InformationDetail'
import ProfileCard from '../Components/Card/ProfileCard'
import ChangePasswordCard from '../Components/Card/ChangePasswordCard'

export default function Profile() {
  return (
    <div>
        <Navbar/>
        <div className='flex'>
            <Sidebar />
            <div className='flex flex-wrap justify-center items-center w-full gap-6'>
                <div className='p-3 w-full sm:w-fit flex flex-col gap-6'>
                    <InfomationCard />
                    <ChangePasswordCard />
                </div>
                <div className='p-3 w-fit flex flex-col gap-6'>
                    <ProfileCard />
                    <InformationDetail />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
