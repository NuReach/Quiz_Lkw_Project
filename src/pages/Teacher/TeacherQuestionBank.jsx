import React, { useEffect, useState } from 'react'
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar'
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar'
import Footer from '../../Components/Footer/Footer'
import Search from '../../Components/Input/Search'
import QuestionFilter from '../../Components/Button/QuestionFilter'
import TeacherQuestionTableXl from '../../Components/Table/TeacherQuestionTableXl'
import Dailog from '../../Components/Card/Dailog'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { containerMotion } from '../../animation'
import { filterItem } from '../../Slice/functionSlice'
import { useLocation } from 'react-router-dom'
import { getSearchQuestions } from '../../Api/QuestionApi'
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Components/Loading/Loading'
import {toast} from 'sonner';

export default function TeacherQuestionBank() {

    const showDailog = useSelector((state)=>state.function.dailog);
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
    

    const { isLoading : searchQuestionsLoading , isError:searchQuestionsError , data:searchQuestions } = useQuery({
        queryKey : ['searchQuestions',{search,sortBy:sort.sortBy,sortDir:sort.sortDir,page}],
        queryFn : ()=>getSearchQuestions(search,sort.sortBy,sort.sortDir,page)
    });


    if (searchQuestionsError) {
        toast.error("Something went wrong");
        dispatch(filterItem({search:"all"}));
        navigate("/teacher/dashboard");
      }


  return (
    <div>
        <TeacherNavbar />
        <div className='flex'>
            <TeacherSidebar/>
            <motion.div
                variants={containerMotion}
                initial = "hidden"
                animate = "visible"
                exit= "exit"
                 className='p-3 w-full'>
                <p className='font-bold text-lg '>Question List</p>
                <div className='flex justify-between items-center flex-wrap w-full'>
                    <Search name="questions" />
                    <div onClick={(e)=>{
                        navigate("/teacher/questionbank/create")
                    }} className='flex justify-center  items-center gap-3 cursor-pointer hover:scale-105 transition'>
                        <p className='text-sm font-bold'>Create Question</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24m40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16"/></svg>
                    </div>
                </div>
                <div>
                    <QuestionFilter setSort={setSort} />
                </div>
                {
                    searchQuestionsLoading ?
                     <Loading />
                     :
                <div className='flex flex-wrap gap-3 w-full justify-center '>
                    <TeacherQuestionTableXl data={searchQuestions} />
                </div>
                }
            </motion.div>
        </div>
        {
            showDailog ? <Dailog /> : ""
        }
        
        <Footer />
    </div>
  )
}
