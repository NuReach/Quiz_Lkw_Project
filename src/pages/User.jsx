import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import UserTable from '../Components/Table/UserTable'

export default function User() {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <div className='w-full p-3'>
                <UserTable />
            </div>
        </div>
        <Footer />
    </div>
  )
}
