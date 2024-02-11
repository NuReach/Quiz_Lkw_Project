import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { useParams } from 'react-router-dom'
import QAform from '../Components/Quiz/QAform'
import { useDispatch, useSelector } from 'react-redux'
import TFform from '../Components/Quiz/TFform'
import OPform from '../Components/Quiz/OPform'
import QCMform from '../Components/Quiz/QCMform'
import CreateSidebar from '../Components/Sidebar/CreateSidebar'

export default function CreatePage() {
    const param = useParams();
    const {title} = param;
    const dispatch = useDispatch();
    const quizzes = useSelector((state)=>state.function.quizzes);
    const quizId = useSelector((state)=>state.function.quizId);
    const getOneQuiz = quizzes.filter((item)=>item.id == quizId);
    console.log(getOneQuiz);
    
  return (
    <div>
        <Navbar />
        <div className='flex'>
           <CreateSidebar />
            <div className='flex justify-center items-center w-full'> 
                {
                <div>{
                getOneQuiz[0]?.type == "qna" ?  <QAform /> :
                (getOneQuiz[0]?.type == "qcm" ? <QCMform /> :
                (getOneQuiz[0]?.type == "tf" ? <TFform /> : 
                (getOneQuiz[0]?.type == "op" ? <OPform/> : "" )  
                ))
                }
                </div>
                }
            </div>
        </div>
        <Footer />
    </div>
  )
}
