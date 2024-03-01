import React from 'react'
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar'
import Footer from '../../Components/Footer/Footer'
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import CreateExamStep1 from '../../Components/Card/CreateExamStep1'
import CreateExamStep2 from '../../Components/Card/CreateExamStep2'
import CreateExamStep3 from '../../Components/Card/CreateExamStep3'

export default function TeacherExamCreatePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const step1 = queryParams.get('step1');
  const step2 = queryParams.get('step2');
  const step3 = queryParams.get('step3');

  return (
    <div>
        <TeacherNavbar />
        <div className='flex'>
            <TeacherSidebar path={"/teacher/exam"} />
            {
              step1 ? 
            <CreateExamStep1 /> :
            ( step2 ? <CreateExamStep2 /> : (
              step3 ? <CreateExamStep3 /> : <CreateExamStep1 />
            ) )
            }
        </div>
        <Footer />
    </div>
  )
}
