import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'
import Footer from '../Components/Footer/Footer'
import ProfileCard from '../Components/Card/ProfileCard'

export default function Home() {
  return (
    <div>
        <Navbar />
        <div className='flex'>
            <Sidebar />
            <div className=' flex flex-col p-3 w-full md:hidden'>
                <div>
                    <p className='text-xl font-bold '>Dashboard</p>
                </div>
                <div className='flex flex-wrap mt-3 gap-6 '>
                        <div className=' w-full p-6 shadow-lg rounded-lg border'>
                            <p className='font-bold text-lg'>Upcoming Tests</p>
                            <div className='flex flex-col justify-center items-center mt-3 text-center'>
                                <img  className='w-20' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzpfF9JQ8S-3yextczkPpYtj7yi660mfH9kBLtj564KgPfq2_DrAbayHSI8XtqUTiI9T8&usqp=CAU" alt="" />
                                <p className='text-xs font-bold mt-3'>Database System(25% mark)</p>
                                <p className='text-gray-500 font-medium text-xs mt-2'>Chapter 2 - 4 (mySQL)</p>
                                <p className='text-xs font-bold mt-3'>Deadline:17/02/2024</p>
                            </div>
                            <div>
                                <button className='text-white bg-black rounded-md my-6 text-xs py-2 font-medium w-full'>Take Test</button>
                            </div>
                        </div>
                        <section className='w-full gap-6 flex flex-col'>
                        <div className='w-full p-6 shadow-lg rounded-lg border'>
                            <p className='font-bold text-lg'>Performance </p>
                            <div className='flex justify-center items-center space-x-3 flex-wrap '>
                                <div className=' text-center mt-3'>
                                    <p className='font-bold text-gray-500 text-lg'>6.5% </p>
                                    <p className='text-gray-500 font-medium text-xs mt-2'>Increase</p>
                                </div>
                                <div className='' >
                                    <img className='w-36 h-36 object-cover' src="https://static.vecteezy.com/system/resources/previews/026/626/167/original/increase-icon-symbol-design-illustration-vector.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-6 shadow-lg rounded-lg border'>
                            <p className='font-bold text-lg'>Last Tests</p>
                            <div className='flex mt-3 justify-center items-center space-x-3 flex-wrap'>
                                <div>
                                    <img className='w-36 h-36 object-cover' src="https://i.stack.imgur.com/IfI7i.png" alt="" />
                                </div>
                                <div>
                                    <p className='text-xs font-bold mt-3'>Sotfware Requirement</p>
                                    <p className='text-gray-500 font-medium text-xs mt-2'>[85 marks]</p>
                                    <p className='text-gray-500 font-medium text-xs mt-2'>15/02/2024</p>
                                    <p className='text-gray-500 font-medium text-xs mt-2'>2 hours</p>
                                    <button className='text-white bg-black rounded-md my-6 text-xs py-2 font-medium w-full'>Take Test</button>
                                </div>
                            </div>
                        </div>
                        </section>
                   
                        <div className='w-full md:w-80 p-6 shadow-lg rounded-lg border'>
                            <p className='font-bold text-sm'>Task Tests</p>
                        </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
