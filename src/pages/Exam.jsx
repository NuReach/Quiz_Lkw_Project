import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'

export default function Exam() {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <div>
                <p className='text-xl font-bold '>Exam</p>
                {/* <div className=' absolute -top-9 left-0 '>
                </div> */}
            </div>
        </div>
        <Footer />
    </div>
  )
}
