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
    const dispatch = useDispatch();
    const [quiz,setQuiz] = useState(null);
    const quizzes = useSelector((state)=>state.function.quizzes);
    const quizId = useSelector((state)=>state.function.quizId);
    useEffect(()=>{
      setQuiz(quizzes.find((item)=>item.id == quizId));
    },[quizId])
   return (
    <div>
        <Navbar />
        <div className='flex'>
           <CreateSidebar />
            <div className='flex justify-center items-center w-full'> 
                {
                <div>{
                quiz?.type == "qna" ?  <QAform key={quiz.id} quiz={quiz} /> :
                (quiz?.type == "qcm" ? <QCMform key={quiz.id} quiz={quiz} /> :
                (quiz?.type == "tf" ? <TFform key={quiz.id} quiz={quiz} /> : 
                (quiz?.type == "op" ? <OPform key={quiz.id} quiz={quiz}/> : "" )  
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
