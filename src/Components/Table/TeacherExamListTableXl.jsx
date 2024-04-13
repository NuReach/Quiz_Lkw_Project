import React from 'react'
import Pagination from '../Pagination/Pagination'
import { Link } from 'react-router-dom'

export default function TeacherExamListTableXl({data}) {
  return (
    <div className='p-6 mt-3 border rounded-lg shadow-lg w-full'>
        <header className='font-bold text-sm flex justify-between'>
            <p className='w-12'>ID</p>
            <p className='lg:w-72'>Title</p>
            <p className='lg:w-20 lg:block  hidden'>Course</p>
            <p className='lg:w-28 lg:block hidden'>Time</p>
            <p className='lg:w-48 lg:flex flex justify-end w-w-20'>State</p>
        </header>
        {
            data.data.length > 0 ?
            data.data.map((item,i)=>(
                <div key={i} className='font-bold text-sm flex justify-between items-center my-6 border-b-2 pb-3'>
                    <p className='w-12'>{i+1}</p>
                    <div className='lg:w-72'>
                    <p className='font-medium text-gray-600 line-clamp-1 capitalize'>{item.exam_title}</p>
                    <p className='font-normal line-clamp-1 text-xs text-gray-500 mt-3'>Asign {item.created_at.slice(0,10)}</p>
                    </div>
                    <p className='lg:w-20 uppercase lg:block hidden font-medium text-gray-600 line-clamp-1'>{item.course.course_code}</p>
                    <p className='lg:w-28 lg:block hidden font-medium text-gray-600 line-clamp-1'>{item.exam_duration}mn</p>
                    <div className='lg:w-48 flex justify-end w-24 capitalize gap-3'>  
                    {
                        item.status == "live" ? <button className='font-medium hidden lg:block text-xs py-1 rounded-full px-4 text-white bg-green-500 lg:w-1/2  my-1 w-full'>Live</button> : (
                            item.status == "prepared" ?  <button className='font-medium hidden lg:block text-xs py-1 rounded-full px-4 text-white bg-red-500 lg:w-1/2  my-1 w-full'>Prepared</button> :  <button className='font-medium hidden lg:block text-xs py-1 rounded-full px-4 text-white bg-yellow-400 lg:w-1/2  my-1 w-full'>Published</button>
                        ) 
                    }
                    <Link to={`/teacher/exam/update/${item.id}`} className='font-medium text-center text-xs py-1 rounded-full px-4 text-white bg-black   my-1 w-fit'>Edit</Link>
                    </div>
                </div>
            )):
            <div className='w-full flex justify-center items-center min-h-96'>
                <p className='font-bold text-sm'>No Item !!</p>
            </div>
        }
        <div className='w-full flex justify-end'>
           <Pagination name="exam" lastPage = { data.last_page} total = { data.total } size = {data.to} currentPage = {data.current_page} />
        </div>
    </div>
  )
}
