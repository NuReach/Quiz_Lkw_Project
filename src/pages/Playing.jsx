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
  const [quizzes,setQuizzes] = useState(quiz.quizzes);
  const page = useSelector((state)=>state.function.page);
  console.log(quizzes);
  return (
    <div>
      <Navbar />
        <div className='flex flex-col min-h-screen justify-center items-center '>
          {
            start ?
            <div className='w-full p-6 '>
                  <div className='flex justify-end'>
                    {/* <div>
                      <Clock />
                    </div> */}
                  </div>
                  <div className=' items-center justify-center flex py-3  '>
                    {
                      quizzes[page].type == "qna" ? 
                      <QAplaying item={quizzes[page]} number={page+1} /> :
                      (quizzes[page].type == "qcm") ?
                      <QCMplaying item={quizzes[page]} number={page+1} /> :
                      (quizzes[page].type == "tf") ? 
                      <TFplaying item={quizzes[page]} number={page+1} /> : <OPplaying item={quizzes[page]} number={page+1} />
                    }
                  </div>
                  <div className='flex justify-between items-center'>
                      <PreviousQuestion />
                      {
                        page == quizzes.length-1 ? 
                        <SubmitAnswerBtn />
                        :
                      <NextQuestion quizzes={quizzes} />  
                      }

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
