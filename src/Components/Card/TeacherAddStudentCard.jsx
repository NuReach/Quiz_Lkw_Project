import React from 'react'
import { Link } from 'react-router-dom'

export default function TeacherAddStudentCard() {
  return (
    <div className='w-full border-2 shadow-lg rounded-lg p-3 h-56 sm:w-80 md:w-96 xl:w-60 '>
      <div className='flex flex-col justify-center items-center mt-3'>
      <p className='font-bold text-sm'>Register New Student</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="120" viewBox="0 0 256 256"><path fill="currentColor" d="m227.79 52.62l-96-32a11.85 11.85 0 0 0-7.58 0l-96 32A12 12 0 0 0 20 63.37a6.05 6.05 0 0 0 0 .63v80a12 12 0 0 0 24 0V80.65l23.71 7.9a67.92 67.92 0 0 0 18.42 85A100.36 100.36 0 0 0 46 209.44a12 12 0 1 0 20.1 13.11C80.37 200.59 103 188 128 188s47.63 12.59 61.95 34.55a12 12 0 1 0 20.1-13.11a100.36 100.36 0 0 0-40.18-35.92a67.92 67.92 0 0 0 18.42-85l39.5-13.17a12 12 0 0 0 0-22.76Zm-99.79-8L186.05 64L128 83.35L70 64ZM172 120a44 44 0 1 1-81.06-23.71l33.27 11.09a11.89 11.89 0 0 0 7.58 0l33.27-11.09A43.85 43.85 0 0 1 172 120"/></svg>
      <Link to={"/signup"} className='font-medium text-center text-xs py-1 rounded-md px-4 text-white bg-black  my-1 w-full'>ADD</Link>
      </div>
    </div>
  )
}
