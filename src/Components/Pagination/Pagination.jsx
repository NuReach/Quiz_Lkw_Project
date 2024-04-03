import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Pagination({lastPage,total,size,currentPage}) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page= queryParams.get('page');
  const array = Array.from({ length: lastPage }, (_, index) => index + 1);
  return (
    <div className='flex flex-col mt-3'>
        <div className='flex justify-end'>
          <p className='text-xs text-gray-500 mb-1 mr-3'>Current Data : {size} / {total}</p>
        </div>
        <nav aria-label="Page navigation example">
          <ul className="inline-flex -space-x-px text-sm">
            {
              currentPage >1 &&
              <li>
                <Link to={`/teacher/course?page=${currentPage-1}`}  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</Link>
              </li>
            }
            {
              array.length > 1 && 
              array.map((item,i)=>(
                <li key={i}>
                  <Link to={`/teacher/course?page=${i+1}`}  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{i+1}</Link>
                </li>
              ))
            }
            {
              currentPage < lastPage &&
              <li>
                <Link to={`/teacher/course?page=${currentPage+1}`} className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</Link>
              </li>
            }
          </ul>
        </nav>
    </div>
  )
}
