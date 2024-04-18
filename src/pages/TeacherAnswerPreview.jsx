import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useLocation } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import QCM from '../Components/Card/QCM';
import TF from '../Components/Card/TF';
import Footer from '../Components/Footer/Footer';
import { getUserResultApi, getUserResultApiByTeacher } from '../Api/SubmitExamApi';
import TeacherNavbar from '../Components/Navbar/TeacherNavbar';
import TeacherSidebar from '../Components/Sidebar/TeacherSidebar';

export default function TeacherAnswerPreview() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const exam_id = queryParams.get('exam');
    const user_id = queryParams.get('user');
    const { data:userResult } = useQuery({
      queryKey : ['userResult',{exam_id},{user_id}],
      queryFn : ()=>getUserResultApiByTeacher(exam_id,user_id)
    });
    console.log(userResult);
  return (
    <div>
      <TeacherNavbar />
        <div className='flex'>
            <TeacherSidebar />
            <div className='p-3 w-full justify-center items-center flex gap-6 flex-col' >
              <div className='lg:w-2/3 md:w-96 w-96 flex flex-col justify-start'>
                <div className='w-full md:w-96  flex gap-3'>
                  <p className='text-sm font-bold capitalize w-16'>Exam</p>
                  <p className='text-sm font-medium capitalize '>{userResult?.exam.exam_title}</p>
                </div>
                <div className='w-full md:w-96  flex gap-3'>
                  <p className='text-sm font-bold capitalize w-16 '>Course</p>
                  <p className='text-sm font-medium capitalize '>{userResult?.exam.course.course_title}</p>
                </div>
                <div className='w-full md:w-96  flex gap-3'>
                  <p className='text-sm font-bold capitalize w-16'>Duration</p>
                  <p className='text-sm font-medium '>{userResult?.exam.exam_duration} mn</p>
                </div>
                <div className='w-full md:w-96  flex gap-3'>
                  <p className='text-sm font-bold capitalize w-16 '>Score</p>
                  <p className='text-sm font-medium capitalize '>{userResult?.exam.exam_score} points</p>
                </div>
                <div className='w-full md:w-96  flex gap-3'>
                  <p className='text-sm font-bold capitalize w-16 '>Questions</p>
                  <p className='text-sm font-medium capitalize '>{userResult?.total_questions} questions</p>
                </div>
                <div className='w-full md:w-96  flex gap-3'>
                  <p className='text-sm font-bold capitalize w-16 '>Minimum</p>
                  <p className='text-sm font-medium capitalize '>{userResult?.exam.exam_percentage} %</p>
                </div>
                <div className='w-full md:w-96  flex gap-3 '>
                  <p className='text-sm font-bold capitalize w-16 '>User</p>
                  <p className='text-sm font-medium capitalize '>{userResult?.user.name}</p>
                </div>
                <div className='w-full md:w-96  flex gap-3'>
                  <p className='text-sm font-bold capitalize w-16 '>Email</p>
                  <p className='text-sm font-medium capitalize '>{userResult?.user.email}</p>
                </div>
                <div className='w-full md:w-96  flex gap-3 border-t-2 mt-6 pt-3'>
                  <p className='text-sm font-bold capitalize '>Your Result</p>
                  <p className='text-sm font-medium capitalize '>{userResult?.total_is_correct*100/userResult?.total_questions}%</p>
                </div>
                {
                  userResult?.total_missing > 0 &&
                <div className='w-full md:w-96  flex gap-3 text-red-600'>
                  <p className='text-sm font-bold capitalize w-16 '>Missing</p>
                  <p className='text-sm font-medium capitalize '>{userResult?.total_missing} quesitons</p>
                </div>
                }
              </div>
              <div className=' lg:w-2/3 md:w-96 w-96 flex flex-wrap gap-14'>
                {
                 userResult?.answers.map((item,i)=>(
                  item.question.question_type == "multiple choice" ?
                  <QCM key={i} item={item} userChoice={item?.choice} number={i+1} /> :
                  <TF key={i} item={item} userChoice={item?.choice}  number={i+1} />
                 ))
                }
              </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}
