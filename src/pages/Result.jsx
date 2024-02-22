import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'

export default function Result() {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <Sidebar />
        </div>
        <Footer />
    </div>
  )
}
