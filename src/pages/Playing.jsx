import React, { useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Clock from '../Components/Clock/Clock'
import InstructionCard from '../Components/Card/InstructionCard'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import QCMplaying from '../Components/Quiz/QCMplaying.jsx'
import TFplaying from '../Components/Quiz/TFplaying.jsx'
import SubmitAnswerBtn from '../Components/Button/SubmitAnswerBtn.jsx'
import { useQuery } from '@tanstack/react-query'
import { getExamByID } from '../Api/ExamApi.jsx'

export default function Playing() {
  const start = useSelector((state)=>state.function.start);
  const param = useParams();
  const id = param.id;
  const { isLoading , isError , data:exam } = useQuery({
    queryKey : ['exam',{id}],
    queryFn : () => getExamByID(id)
  });
  if (isLoading) {
    return <div>
      loading...
    </div>
  }
  return (
    <div>
      <Navbar />
        <div className='flex flex-col min-h-screen justify-center items-center test '>
          {
            start ?
            <div className='w-full p-6 '>
                    <div className='fixed bottom-3 right-3 md:bottom-9 md:right-9'>
                      <Clock duration={exam?.exam_duration} />
                    </div>
                  <div className=' items-center justify-center flex flex-col py-3 gap-9 '>
                    {
                      exam?.questions.map((item,i)=>(
                      (item.question_type == "multiple choice") ?
                      <QCMplaying key={i} item={item} number={i+1} quizId={exam?.id} /> :  <TFplaying item={item} key={i} number={i+1} quizId={exam?.id} />
                      ))
                    }
                  </div>
                  <div className='flex justify-center w-full'>
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
