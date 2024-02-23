import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function TeacherNavbar() {
    const [noti,setNoti] = useState(false);
    const navigate = useNavigate();
  
    const showNoti = (e)=>{
      e.preventDefault();
      setNoti(!noti);
    }
  
    return (
      <nav className='bg-black flex justify-between items-center px-6  '>
          <Link to={"/teacher/dashboard"}>
            <img className='w-24' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Limkokwing_Corporate_Logo_2018.png" alt="" />
          </Link>
          <div className='flex space-x-3  items-center'>
            <button onClick={()=>navigate("/create/quiz")} className='py-2 px-4 hidden md:block bg-white dark:text-white dark:bg-pink-600 rounded-md text-sm font-medium hover:scale-105 transition'>Create</button>
            <div onClick={showNoti} className='relative'>
              <div className='text-xs text-white bg-red-500 rounded-full w-3 h-3 absolute top-3 z-0 right-1'></div>
              <svg className='text-white cursor-pointer ' xmlns="http://www.w3.org/2000/svg" width="30" height="60" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19q-.425 0-.712-.288T4 18q0-.425.288-.712T5 17h1v-7q0-2.075 1.25-3.687T10.5 4.2v-.7q0-.625.438-1.062T12 2q.625 0 1.063.438T13.5 3.5v.7q2 .5 3.25 2.113T18 10v7h1q.425 0 .713.288T20 18q0 .425-.288.713T19 19zm7 3q-.825 0-1.412-.587T10 20h4q0 .825-.587 1.413T12 22"/></svg>
              {
                noti ? 
                <div className='absolute w-80 border-2 border-t-0 shadow-lg -right-1 top-14 h-96 bg-white rounded-lg z-50 '>
                <svg className='absolute -top-4 right-0 text-white' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m7 14l5-5l5 5z"/></svg>
                </div>
                : ""
              }
           
            </div>
            <Link to={"/teacher/profile"} className='flex items-center'>
            <svg className='text-white dark:text-pink-600 hover:scale-105 transition' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>
            <p className='hidden sm:block font-medium text-xs text-white ml-3'>Hong Nnureach</p>
            </Link>
          </div> 
      </nav>
    )
  }
