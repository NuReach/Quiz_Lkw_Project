import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Link, useLocation } from 'react-router-dom'

export default function SuccessfulPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const exam_id = queryParams.get('exam');
  return (
    <div>
        <Navbar />
        <div className='flex  justify-center flex-col gap-3 items-center my-36'>
            <svg className='text-green-500 w-fit' xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24"><path fill="currentColor" d="M18.5 2h-13C3.6 2 2 3.6 2 5.5v13C2 20.4 3.6 22 5.5 22H16l6-6V5.5C22 3.6 20.4 2 18.5 2M7 12.5l1.3-1.4l2.1 2.1L15.6 8L17 9.4L10.5 16zm8 7.5v-1.5c0-1.9 1.6-3.5 3.5-3.5H20z"/></svg>
            <p className='font-bold text-3xl w-fit'>Congratulations!</p>
            <p className='font-bold w-fit text-3xl'>You Submited Successfully !!</p>
            <div className='mt-6 gap-3 flex'>
                <Link to={`/`} className='text-xs bg-blue-600 px-9 py-3 text-white rounded-lg font-bold'>Home</Link>
                <Link to={`/exam/answer/preview?exam=${exam_id}`} className='text-xs bg-purple-600 px-9 py-3 text-white rounded-lg font-bold'>Preview</Link>
            </div>
        </div>
        
        <Footer />
    </div>
  )
}
