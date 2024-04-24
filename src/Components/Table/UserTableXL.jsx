import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Pagination from '../Pagination/Pagination';
import { AnimatePresence } from 'framer-motion';
import Dailog from '../Card/Dailog';

export default function UserTableXL({data}) {
    const navigate = useNavigate();


    const [modal,setModal] = useState(false);
    const [content,setContent] = useState(null);
    const show = (e,id,name)=>{
        e.preventDefault();
        setContent({id,name})
        setModal(!modal);

    }
    return (
      <div className='p-6 mt-3 border rounded-lg shadow-lg '>
        <AnimatePresence>
        {
            modal ? <Dailog setModal={setModal} modal={modal} content = {content}  /> : ""
        }
        </AnimatePresence>
          <header className='font-bold text-sm flex justify-between'>
              <p className='w-12'>ID</p>
              <p className='lg:w-72'>Email</p>
              <p className='lg:w-28 uppercase lg:block hidden font-medium text-gray-600 line-clamp-1'>Name</p>
              <p className='lg:w-28 lg:block hidden font-medium text-gray-600 line-clamp-1'>Role</p>
              <p className='lg:w-48 flex justify-end'>State</p>
          </header>
          {
            data?.data.length > 0 ?
            data?.data.map((item,i)=>(
                <div key={i} className='font-bold text-sm flex justify-between items-center my-6 border-b-2 pb-3'>
                    <p className='w-12'>{i+1}</p>
                    <div className='lg:w-72'>
                    <p className='font-medium text-gray-600 line-clamp-1 lowercase'>{item.email}</p>
                    <p className='font-normal line-clamp-1 text-xs text-gray-500 mt-3'>Asign {item.created_at.slice(0,10)}</p>
                    </div>
                    <p className='lg:w-28 uppercase lg:block hidden font-medium text-gray-600 line-clamp-1'>{item.name}</p>
                    <p className='lg:w-28 lg:block hidden font-medium text-gray-600 line-clamp-1'>{item.role}</p>
                    <div className='lg:w-48 flex justify-end w-24 capitalize gap-3'>  
                    <button onClick={(e)=>show(e,item.id,"users")} className='font-medium text-xs py-1 rounded-full px-4 text-white bg-red-500 w-fit  my-1'>Delete</button> 
                    <Link to={`/teacher/exam/update/${item.id}`} className='font-medium text-center text-xs py-1 rounded-full px-4 text-white bg-black   my-1 w-fit'>Edit</Link>
                    </div>
                </div>
            )):
            <div className='w-full flex justify-center items-center min-h-96'>
                <p className='font-bold text-sm'>No Item !!</p>
            </div>
        }
      </div>
    )
  }
