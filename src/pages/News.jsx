import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import NewsTable from '../Components/Table/NewsTable'

export default function News() {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <div className=' p-3 w-full'>
                <NewsTable />
            </div>
        </div>
        <Footer />
    </div>
  )
}
