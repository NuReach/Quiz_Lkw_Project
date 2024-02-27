import React from 'react'
import { Link } from 'react-router-dom'

export default function TeacherLiveCard() {
  return (
    <div className='w-full border-2 shadow-lg rounded-lg p-3 h-56 sm:w-80 md:w-96 xl:w-60 '>
      <div className='flex flex-col justify-center items-center mt-3'>
      <p className='font-bold text-sm'>Live Exam</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="120" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 17.15l3.98-2.28c.67-.38.67-1.35 0-1.74l-3.98-2.28c-.67-.38-1.5.11-1.5.87v4.55c0 .77.83 1.26 1.5.88M21 6h-7.59l2.94-2.94c.2-.2.2-.51 0-.71s-.51-.2-.71 0L12 5.99L8.36 2.35c-.2-.2-.51-.2-.71 0s-.2.51 0 .71L10.59 6H3a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V8a2 2 0 0 0-2-2m-1 14H4c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h16c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1"/></svg>
      <Link to={"/teacher/dashboard"} className='font-medium text-center text-xs py-1 rounded-md px-4 text-white bg-red-600  my-1 w-full'>Live</Link>
      </div>
    </div>

  )
}
