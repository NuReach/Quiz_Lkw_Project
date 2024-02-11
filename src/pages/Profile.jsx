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
            <div className='w-full justify-center items-center flex flex-wrap'>
                <div className='flex flex-col p-3 space-y-3' >
                    <InfomationCard />
                    <ChangePasswordCard />
                </div>
                <div className='flex flex-col w-80 lg:w-96 space-y-3 my-6'>
                    <ProfileCard />
                    <InformationDetail />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
