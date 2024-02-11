import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import QuizTable from '../Components/Table/QuizTable'

export default function Quiz() {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <div className=' p-3 w-full'>
                <QuizTable />
            </div>
        </div>
        <Footer />
    </div>
  )
}
