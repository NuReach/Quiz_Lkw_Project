import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../Components/Admin-Component/AdminNavbar'
import AdminSiderbar from '../../Components/Admin-Component/AdminSidebar'
import Footer from '../../Components/Footer/Footer'
import { motion } from 'framer-motion'
import UserTableXL from '../../Components/Table/UserTableXL'
import { containerMotion } from '../../animation'
import { useLocation, useNavigate } from 'react-router-dom'
import Search from '../../Components/Input/Search'
import { useQuery } from '@tanstack/react-query'
import { getAllUserApi } from '../../Api/Authentication'
import { useDispatch, useSelector } from 'react-redux'
import { filterItem } from '../../Slice/functionSlice'
import LoadingPage from '../LoadingPage'

export default function AdminUserPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page= queryParams.get('page');
  const dispatch = useDispatch();
  const [sort,setSort] = useState({sortBy:"created_at",sortDir:"asc"});
  const search = useSelector((state)=>state.function.search);

  
  useEffect(()=>{
    dispatch(filterItem({search:"all"}));
  },[])
  
  const { isLoading  , isError , data:users } = useQuery({
    queryKey : ['users',{search,sortBy:sort.sortBy,sortDir:sort.sortDir,page}],
    queryFn : ()=>getAllUserApi(search,sort.sortBy,sort.sortDir,page)
  });

  if (isLoading) {
    return <LoadingPage />
  }

  return (
    <div>
        <AdminNavbar />
        <div className='flex'>
            <AdminSiderbar />
            <motion.div
                variants={containerMotion}
                initial = "hidden"
                animate = "visible"
                exit= "exit"
               className='w-full p-3' >
               <div className='flex justify-between '>
                <p className='text-xl font-bold mt-2 '>User List</p>
                <div onClick={(e)=>{
                  navigate("/admin/user/create/page")
                }} className='flex justify-center  items-center gap-3 cursor-pointer hover:scale-105 transition'>
                    <p className='text-sm font-bold'>Create User</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16"/></svg>
                </div>
               </div>
                <div className='flex items-center justify-between flex-wrap'>
                  <Search />
                </div>
                <div>
                  {/* <ExamTableXl data={userexamsList} result={userResultsList} /> */}
                  <UserTableXL data={users}/>
                </div>
            </motion.div>
        </div>
        <Footer />
    </div>
  )
}
