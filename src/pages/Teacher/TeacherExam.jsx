import React, { useEffect, useState } from 'react'
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar'
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar'
import Footer from '../../Components/Footer/Footer'
import Search from '../../Components/Input/Search'
import ExamFilter from '../../Components/Button/ExamFilter'
import TeacherExamListTableXl from '../../Components/Table/TeacherExamListTableXl'
import TeacherExamListTableSm from '../../Components/Table/TeacherExamListTableSm'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { containerMotion } from '../../animation'
import { useDispatch, useSelector } from 'react-redux'
import { filterItem } from '../../Slice/functionSlice'
import { getSearchExams } from '../../Api/ExamApi'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'sonner'
import Loading from '../../Components/Loading/Loading'

export default function TeacherExam() {
  const text ="asdfgh";
  const [data,setData]=useState(text.split(""));
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page= queryParams.get('page');
  const dispatch = useDispatch();
  const [sort,setSort] = useState({sortBy:"created_at",sortDir:"asc"});
  
  useEffect(()=>{
    dispatch(filterItem({search:"all"}));
  },[])

  const search = useSelector((state)=>state.function.search);

  const { isLoading : searchExamLoading , isError:searchExamError , data:searchExams } = useQuery({
    queryKey : ['searchExams',{search,sortBy:sort.sortBy,sortDir:sort.sortDir,page}],
    queryFn : ()=>getSearchExams(search,sort.sortBy,sort.sortDir,page)
  });

  if (searchExamError) {
    toast.error("Something went wrong");
    dispatch(filterItem({search:"all"}));
    navigate("/teacher/dashboard");
  }
  
  return (
    <div>
      <TeacherNavbar />
      <div className='flex'>
        <TeacherSidebar />
        <motion.div
             variants={containerMotion}
                initial = "hidden"
                animate = "visible"
                exit= "exit"
           className='p-3 w-full'>
          <p className='font-bold text-lg '>Exam List</p>
          <div>
            <div className='flex justify-between items-center flex-wrap'>
                <Search name="exam" />
                <div onClick={(e)=>{
                  navigate("/teacher/exam/create?step1=true")
                }} className='flex justify-center  items-center gap-3 cursor-pointer hover:scale-105 transition'>
                    <p className='text-sm font-bold'>Create Exam</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16"/></svg>
                </div>
            </div>
            <div className='filter'>
              <ExamFilter setSort={setSort} />
            </div>
            {
              searchExamLoading ? 
              <Loading />
              :
              <div className='gap-3 flex flex-wrap w-full justify-center'>
                <TeacherExamListTableXl data={searchExams} />
              </div>
            }
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}
