import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Sidebar from '../Components/Sidebar/Sidebar'
import Clock from '../Components/Clock/Clock'
import InstructionCard from '../Components/Card/InstructionCard'
import {all} from "../Data.jsx"
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import QAplaying from '../Components/Quiz/QAplaying.jsx'
import QCMplaying from '../Components/Quiz/QCMplaying.jsx'
import TFplaying from '../Components/Quiz/TFplaying.jsx'
import OPplaying from '../Components/Quiz/OPplaying.jsx'
import PreviousQuestion from '../Components/Button/PreviousQuestion.jsx'
import NextQuestion from '../Components/Button/NextQuestion.jsx'
import SubmitAnswerBtn from '../Components/Button/SubmitAnswerBtn.jsx'

export default function Playing() {
  const [data,setData] = useState(all);
  const [next,setNext] = useState(false);
  const start = useSelector((state)=>state.function.start);
  const param = useParams();
  const id = param.id;
  const quiz = data.find(item=>item.id == id);
  const [questions,setQuestions] = useState(quiz.questions);
  const page = useSelector((state)=>state.function.page);
  const userAnswr = useSelector((state)=>state.function.userAnswers);
  console.log(userAnswr);
  return (
    <div>
      <Navbar />
        <div className='flex flex-col min-h-screen justify-center items-center test '>
          {
            start ?
            <div className='w-full p-6 '>
                    <div className='fixed bottom-3 right-3 md:bottom-9 md:right-9'>
                      <Clock />
                    </div>
                  <div className=' items-center justify-center flex flex-col py-3 gap-9 '>
                    {/* {
                      questions[page].type == "qna" ? 
                      <QAplaying item={questions[page]} number={page+1} quizId={id} /> :
                      (questions[page].type == "qcm") ?
                      <QCMplaying item={questions[page]} number={page+1} quizId={id} /> :
                      (questions[page].type == "tf") ? 
                      <TFplaying item={questions[page]} number={page+1} quizId={id} /> : <OPplaying item={questions[page]} number={page+1} quizId={id} />
                    } */}
                    
                    {
                      questions.map((item,i)=>(
                      (item.type == "qcm") ?
                      <QCMplaying item={item} number={i+1} quizId={id} /> :  <TFplaying item={item} number={i+1} quizId={id} />
                      ))
                    }
                  </div>
                  <div className='flex justify-center w-full'>
                      {/* <PreviousQuestion />
                      {
                        page == questions.length-1 ? 
                        <SubmitAnswerBtn />
                        :
                      <NextQuestion quizzes={questions} />  
                      } */}
                      <div className='w-full md:w-96 lg:w-1/3 flex justify-end'>
                      <SubmitAnswerBtn />
                      </div>
                  </div>
            </div>
             :
            <InstructionCard />
          }
         
        </div>
      <Footer />
    </div>
  )
}
