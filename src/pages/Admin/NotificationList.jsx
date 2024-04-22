import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { filterItem } from '../../Slice/functionSlice';
import { useQuery } from '@tanstack/react-query';
import { getSearchNotfication } from '../../Api/NotificationApi';
import LoadingPage from '../../pages/LoadingPage';
import Footer from '../../Components/Footer/Footer';




export default function NotificationList() {
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

    
    if (isLoading) {
        return <LoadingPage />
    }
    return (
        <>
        <div className='border p-9 flex justify-center items-center bg-white shadow-inner'>
            <p>Notifications serve as vital prompts, ensuring timely engagement and fostering active participation, thus enhancing user experience and app retention.</p>
        </div>
        <div className='flex gap-6 flex-wrap justify-center items-center p-24'>
            {
                notifications.data.map((item,i)=>(
                    <div key={i} className="flex flex-col  justify-center border-2 min-h-60 shadow-lg w-60 p-3 rounded-lg  h-fit">
                        <div className="space-y-6 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                            <p className='text-black font-bold'>{item.message}</p>
                        </div>
                        <div>
                            <p className='text-xs'>{item.desc}</p>
                        </div>
                        <div className='w-full flex gap-3  flex-col'>
                            <p className='text-xs font-medium'>Created At : {item.created_at.slice(1,10)}</p>
                        </div>
                    </div>
                ))
            }
        </div>
        <Footer />
        </>
    )
}
