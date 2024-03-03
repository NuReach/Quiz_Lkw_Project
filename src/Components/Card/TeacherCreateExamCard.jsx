import React from 'react'
import { Link } from 'react-router-dom'

export default function TeacherCreateExamCard() {
  return (
    <div className='w-full border-2 shadow-lg rounded-lg p-3 h-56 sm:w-80 md:w-96 xl:w-60 '>
      <div className='flex flex-col justify-center items-center mt-3'>
      <p className='font-bold text-sm'>Create New Exam</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="120" viewBox="0 0 48 48"><path fill="currentColor" fill-rule="evenodd" d="M39 13a3 3 0 0 0-3 3v2h6v-2a3 3 0 0 0-3-3m3 7h-6v16.5l3 4.5l3-4.5zM6 9v30a3 3 0 0 0 3 3h22a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3m14 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-1 10a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2h-8a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2zm-9-3v3h3v-3zm-1-2h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1m6.707-10.293a1 1 0 0 0-1.414-1.414L13 17.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L13 20.414z" clip-rule="evenodd"/></svg>
      <Link to={"/teacher/exam/create"} className='font-medium text-center text-xs py-1 rounded-md px-4 text-white bg-black  my-1 w-full'>ADD</Link>
      </div>
  </div>
  )
}
