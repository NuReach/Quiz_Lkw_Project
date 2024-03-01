import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function CreateExamStep2() {
    const navigate = useNavigate();
    return (
      <div className='w-full p-6 flex flex-col justify-center items-center'>
                <div className='w-full md:w-1/2'>
                  <p className='font-bold text-lg '>Create Section</p>
                  <div className='flex justify-between items-center w-full mt-6'>  
                    <div className='relative w-fit'>
                      <svg className='' xmlns="http://www.w3.org/2000/svg" width="60" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m0 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/></svg>
                      <p className='text-xs font-bold absolute w-24 -left-1 hidden md:block'>Create Exam</p>
                    </div>            
                    <div className='h-1 w-full bg-black'></div>
                    <div className='relative w-fit'>
                      <svg className='text-green-400' xmlns="http://www.w3.org/2000/svg" width="60" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m0 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/></svg>
                      <p className='text-xs font-bold absolute w-24 -left-3 hidden md:block text-green-400'>Create Section</p>
                    </div> 
                    <div className='h-1 w-full bg-black'></div>
                    <div className='relative w-fit'>
                      <svg className='' xmlns="http://www.w3.org/2000/svg" width="60" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8m0 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m0 2a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"/></svg>
                      <p className='text-xs font-bold absolute w-28 -left-3 hidden md:block'>Create Question</p>
                    </div>      
                  </div>
                  <div className='rounded-lg shadow-lg p-9 border-2 w-full mt-16 gap-3 flex flex-col'>
                    <p className='font-bold text-sm '>Enter the details for new exam</p>
                    <div>
                      <p className='text-xs'>Section Name</p>
                      <input type="text" name="" id="" className='bg-inherit text-xs mt-1 w-full md:w-1/2 focus:ring-0 focus:outline-none focus:border-black rounded-sm' />
                    </div>
                    <div>
                      <p className='text-xs'>Duration</p>
                      <input type="text" name="" id="" className='bg-inherit mt-1 w-full md:w-1/2 focus:ring-0 focus:outline-none focus:border-black rounded-sm text-xs' />
                    </div>
                    <div>
                      <p className='text-xs'>Description</p>
                      <input type="text" name="" id="" className='bg-inherit mt-1 w-full md:w-1/2 focus:ring-0 focus:outline-none focus:border-black rounded-sm text-xs' />
                    </div>
                    <div className='w-full flex  justify-start'>
                      <button onClick={()=>{
                        navigate("/teacher/exam/create?step3=true")
                      }} className='font-medium text-xs w-full md:w-1/3 py-2 rounded-md px-4 text-white bg-black  my-1 '>Next</button>
                  </div>
                  </div>
                </div>         
              </div>
    )
}
