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
            <div className=' flex flex-col p-3 w-full '>
                <div className='flex flex-wrap  gap-6 sm:justify-center mt-9'>
                        <section className='w-full sm:w-fit'>
                            <div className=' relative w-full h-fit p-6 shadow-lg rounded-lg border sm:w-60 lg:w-80 xl:w-96 '>
                                <div className=' absolute -top-9 left-0 '>
                                    <p className='text-xl font-bold '>Dashboard</p>
                                </div>
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
                            <div className='w-full hidden p-6 shadow-lg rounded-lg border sm:block sm:w-60 mt-6 lg:w-80 xl:hidden'>
                                <div className=' flex justify-between items-center'>
                                    <p className='font-bold text-lg'>Task</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="32" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="2" r="1.5"/><circle cx="7" cy="7" r="1.5"/><circle cx="7" cy="12" r="1.5"/></g></svg>
                                </div>
                                <div className='flex w-full justify-center'>
                                    <p className='text-gray-500 font-medium text-xs mt-2'>This Week</p>
                                </div>
                                <div>
                                    <div className='flex items-center justify-between mt-6'>
                                        <div className='w-9/12 '>
                                        <p className='text-sm font-bold '>Sotfware Requirement</p>
                                        <p className='text-gray-500 font-medium text-xs mt-2 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore dolorum ut voluptatum facere eius tempora quo amet, eum nulla suscipit assumenda nobis dolores, voluptas eveniet adipisci dolore obcaecati maxime.</p>
                                        </div>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='flex items-center justify-between mt-6'>
                                        <div className='w-9/12 '>
                                        <p className='text-sm font-bold '>Sotfware Requirement</p>
                                        <p className='text-gray-500 font-medium text-xs mt-2 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore dolorum ut voluptatum facere eius tempora quo amet, eum nulla suscipit assumenda nobis dolores, voluptas eveniet adipisci dolore obcaecati maxime.</p>
                                        </div>
                                        <input type="checkbox" />
                                    </div>
                                    <div className='flex items-center justify-between mt-6'>
                                        <div className='w-9/12 '>
                                        <p className='text-sm font-bold '>Sotfware Requirement</p>
                                        <p className='text-gray-500 font-medium text-xs mt-2 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore dolorum ut voluptatum facere eius tempora quo amet, eum nulla suscipit assumenda nobis dolores, voluptas eveniet adipisci dolore obcaecati maxime.</p>
                                        </div>
                                        <input type="checkbox" />
                                    </div>             <div className='flex items-center justify-between mt-6'>
                                        <div className='w-9/12 '>
                                        <p className='text-sm font-bold '>Sotfware Requirement</p>
                                        <p className='text-gray-500 font-medium text-xs mt-2 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore dolorum ut voluptatum facere eius tempora quo amet, eum nulla suscipit assumenda nobis dolores, voluptas eveniet adipisci dolore obcaecati maxime.</p>
                                        </div>
                                        <input type="checkbox" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='w-full gap-6 flex flex-col sm:w-fit'>
                        <div className='w-full p-6 shadow-lg rounded-lg border sm:w-60 lg:w-80 xl:w-96'>
                            <p className='font-bold text-lg'>Performance </p>
                            <div className='flex justify-center items-center space-x-3 flex-wrap '>
                                <div className=' text-center mt-3'>
                                    <p className='font-bold text-gray-500 text-lg w-36'>6.5% </p>
                                    <p className='text-gray-500 font-medium text-xs mt-2'>Increase</p>
                                </div>
                                <div className='' >
                                    <img className='w-36 h-36 object-cover' src="https://static.vecteezy.com/system/resources/previews/026/626/167/original/increase-icon-symbol-design-illustration-vector.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='w-full p-6 shadow-lg rounded-lg border sm:w-60 lg:w-80 xl:w-96'>
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
                        {/* sm:hidden */}
                        <div className='w-full p-6 shadow-lg rounded-lg border sm:w-60 sm:hidden xl:block'>
                            <div className=' flex justify-between items-center'>
                                <p className='font-bold text-lg'>Task</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="32" viewBox="0 0 14 14"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><circle cx="7" cy="2" r="1.5"/><circle cx="7" cy="7" r="1.5"/><circle cx="7" cy="12" r="1.5"/></g></svg>
                            </div>
                            <div className='flex w-full justify-center'>
                                <p className='text-gray-500 font-medium text-xs mt-2'>This Week</p>
                            </div>
                            <div>
                                <div className='flex items-center justify-between mt-6'>
                                    <div className='w-9/12 '>
                                    <p className='text-sm font-bold '>Sotfware Requirement</p>
                                    <p className='text-gray-500 font-medium text-xs mt-2 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore dolorum ut voluptatum facere eius tempora quo amet, eum nulla suscipit assumenda nobis dolores, voluptas eveniet adipisci dolore obcaecati maxime.</p>
                                    </div>
                                    <input type="checkbox" />
                                </div>
                                <div className='flex items-center justify-between mt-6'>
                                    <div className='w-9/12 '>
                                    <p className='text-sm font-bold '>Sotfware Requirement</p>
                                    <p className='text-gray-500 font-medium text-xs mt-2 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore dolorum ut voluptatum facere eius tempora quo amet, eum nulla suscipit assumenda nobis dolores, voluptas eveniet adipisci dolore obcaecati maxime.</p>
                                    </div>
                                    <input type="checkbox" />
                                </div>
                                <div className='flex items-center justify-between mt-6'>
                                    <div className='w-9/12 '>
                                    <p className='text-sm font-bold '>Sotfware Requirement</p>
                                    <p className='text-gray-500 font-medium text-xs mt-2 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore dolorum ut voluptatum facere eius tempora quo amet, eum nulla suscipit assumenda nobis dolores, voluptas eveniet adipisci dolore obcaecati maxime.</p>
                                    </div>
                                    <input type="checkbox" />
                                </div>             <div className='flex items-center justify-between mt-6'>
                                    <div className='w-9/12 '>
                                    <p className='text-sm font-bold '>Sotfware Requirement</p>
                                    <p className='text-gray-500 font-medium text-xs mt-2 line-clamp-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur inventore dolorum ut voluptatum facere eius tempora quo amet, eum nulla suscipit assumenda nobis dolores, voluptas eveniet adipisci dolore obcaecati maxime.</p>
                                    </div>
                                    <input type="checkbox" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
