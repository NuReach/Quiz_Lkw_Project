import React from 'react'
import Dailog from '../Card/Dailog'
import { useDispatch } from 'react-redux';
import { deleteItem, showDailog } from '../../Slice/functionSlice';

export default function TeacherCourseTableXl({data}) {
    const dispatch = useDispatch();
    const show = (e,id,route)=>{
        e.preventDefault();
        dispatch(showDailog());
        dispatch(deleteItem({id:id,route:route}))
    }
  return (
    <div className='p-6 mt-3 border rounded-lg shadow-lg hidden lg:block w-full'>
        <header className='font-bold text-sm flex justify-between'>
            <p className='w-12'>ID</p>
            <p className='w-96'>Course</p>
            <p className='w-48'>State</p>
        </header>
        {
            data.map((item,i)=>(
                <div className='font-bold text-sm flex justify-between items-center my-6 border-b-2 pb-3'>
                    <p className='w-12'>{i+1}</p>
                    <div className='w-96'>
                    <p className='w-72 font-medium text-gray-600 line-clamp-1'>Introdcution to computer  science </p>
                    <p className='w-72 font-normal line-clamp-1 text-xs text-gray-500 mt-3'>Asign 2h ago</p>
                    </div>
                    <div className='w-48 gap-3 flex'>
                    <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-yellow-400 w-fit  my-1'>Edit</button>
                    <button onClick={(e)=>show(e,"item12233","/api/course/")} className='font-medium text-xs py-1 rounded-full px-4 text-white bg-red-500 w-fit  my-1'>Delete</button> 
                    </div>
                </div>
            ))
        }

        <div className='w-full flex justify-end'>
            <button  className='font-medium text-xs py-1 rounded-md px-4 text-white bg-black  my-1 hidden xl:block'>Next</button>
        </div>
    </div>
  )
}
