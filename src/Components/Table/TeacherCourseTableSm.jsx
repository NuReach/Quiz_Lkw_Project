import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem, showDailog } from '../../Slice/functionSlice';

export default function TeacherCourseTableSm({index}) {
  const dispatch = useDispatch();
  const show = (e,id,route)=>{
      e.preventDefault();
      dispatch(showDailog());
      dispatch(deleteItem({id:id,route:route}))
  }
  return (
    <div className='border rounded-md p-3 text-xs w-full sm:w-full md:w-64  lg:w-96 lg:hidden '>
    <div className='flex space-x-3'>
        <p className='font-medium w-12 '>Title</p>
        <p className='line-clamp-1'>{index+1}.Dabase Design and Technolog</p>
    </div>
    <div className='flex gap-3'>
    <button className='font-medium text-xs py-1 rounded-full px-4 text-white bg-yellow-400 w-fit  my-1'>Edit</button>
    <button onClick={(e)=>show(e,"item12233","/api/course/")} className='font-medium text-xs py-1 rounded-full px-4 text-white bg-red-500 w-fit  my-1'>Delete</button> 
    </div>
</div>
  )
}
