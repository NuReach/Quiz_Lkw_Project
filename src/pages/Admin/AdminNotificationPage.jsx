import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../Components/Admin-Component/AdminNavbar'
import AdminSiderbar from '../../Components/Admin-Component/AdminSidebar'
import Footer from '../../Components/Footer/Footer'
import AdminTextArea from '../../Components/Admin-Component/AdminTextArea'
import NotificationBox from '../../Components/Admin-Component/NotificationBox'
import { useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { filterItem } from '../../Slice/functionSlice'
import { getSearchNotfication } from '../../Api/NotificationApi'
import { useQuery } from '@tanstack/react-query'
import LoadingPage from '../LoadingPage'

export default function AdminNotificationPage() {

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

    console.log(notifications);

  return (
    <div>
        <AdminNavbar />
        <div className='flex'>
            <AdminSiderbar />
            <div className='p-3 flex flex-col lg:flex-row gap-9  '>
                <div className='lg:max-w-80 w-full'>
                    <AdminTextArea />
                </div>
                <div className='flex flex-wrap gap-9 '>
        
                {
                    notifications.data.map((item,i)=>(
                        <NotificationBox key={i} item={item}/>
                    ))
                }

                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
