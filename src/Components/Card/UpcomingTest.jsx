import React from 'react'

export default function UpcomingTest() {
  return (
    <div className=' relative p-6 shadow-lg rounded-lg border sm:w-60 lg:w-80 items-center xl:h-full   '>
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
                                <div className=''>
                                    <p className='font-bold text-lg'>Recent Test Result</p>
                                    <div className='-space-y-2 border-b'>
                                        <p className='text-xs font-bold mt-1'>Database System</p>
                                        <div className='flex justify-between'>
                                        <p className='text-gray-500 font-medium text-xs mt-2'>Chapter 2 (35/100)</p>
                                        <p className='text-gray-500 font-medium text-xs mt-2'>15/02/2023</p>
                                        </div>
                                    </div>
                                    <div className='-space-y-2 border-b'>
                                        <p className='text-xs font-bold mt-1'>Database System</p>
                                        <div className='flex justify-between'>
                                        <p className='text-gray-500 font-medium text-xs mt-2'>Chapter 2 (35/100)</p>
                                        <p className='text-gray-500 font-medium text-xs mt-2'>15/02/2023</p>
                                        </div>
                                    </div>
                                    <div className='-space-y-2 border-b'>
                                        <p className='text-xs font-bold mt-1'>Database System</p>
                                        <div className='flex justify-between'>
                                        <p className='text-gray-500 font-medium text-xs mt-2'>Chapter 2 (35/100)</p>
                                        <p className='text-gray-500 font-medium text-xs mt-2'>15/02/2023</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
  )
}
