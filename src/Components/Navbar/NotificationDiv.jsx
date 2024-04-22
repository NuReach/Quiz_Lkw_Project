import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { filterItem } from '../../Slice/functionSlice';
import { useQuery } from '@tanstack/react-query';
import { getSearchNotfication } from '../../Api/NotificationApi';
import LoadingPage from '../../pages/LoadingPage';

export default function NotificationDiv() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const page= queryParams.get('page');
    const dispatch = useDispatch();
    const [sort,setSort] = useState({sortBy:"created_at",sortDir:"desc"});

    
    useEffect(()=>{
        dispatch(filterItem({search:"all"}));
      },[])

        
    const search = useSelector((state)=>state.function.search);
    
    const { isLoading  , isError , data:notifications } = useQuery({
        queryKey : ['notifications',{search,sortBy:sort.sortBy,sortDir:sort.sortDir,page}],
        queryFn : ()=>getSearchNotfication(search,sort.sortBy,sort.sortDir,page)
    });

    const navigate = useNavigate();

    
    if (isLoading) {
        return <LoadingPage />
    } 
  return (
    <div>
        <div className='absolute w-80 border-2 border-t-0 shadow-lg -right-1 top-14 h-96 bg-white rounded-lg p-3 z-50'>
            <svg className='absolute -top-4 right-0 text-white' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m7 14l5-5l5 5z"/></svg>
            <section onClick={()=>navigate('/notifications/list/page') } className='flex flex-col gap-2'>
                {
                    notifications.data.slice(0,4).map((item,i)=>(
                        <div key={i} className='border-b pb-2 cursor-pointer'>
                            <div className='flex flex-wrap justify-between items-center'>
                            <p className='text-xs text-gray-500'>{item.user.email}</p>
                            <p className='text-xs text-gray-500'> {item.created_at.slice(0,10)} </p>
                            </div>
                            <p className='text-sm font-medium line-clamp-1'>{item.message}</p>
                            <p className='text-xs line-clamp-2'>{item.desc}</p>
                        </div>
                    ))
                }
                <div className='w-full flex justify-center'>
                  <p className='text-xs font-semibold'>SEE MORE</p>
                </div>
            </section>
        </div>
    </div>
  )
}
