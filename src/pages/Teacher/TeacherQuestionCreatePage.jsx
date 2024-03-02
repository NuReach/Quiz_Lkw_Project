import React from 'react'
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar'
import Footer from '../../Components/Footer/Footer'
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar'
import { useLocation } from 'react-router-dom'
import CreateTfCard from '../../Components/Table/CreateTfCard'
import CreateQcmCard from '../../Components/Table/CreateQcmCard'

export default function TeacherQuestionCreatePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const qcm = queryParams.get('qcm');
  const tf = queryParams.get('tf');
  console.log(qcm,tf);
  return (
    <div>
        <TeacherNavbar />
        <div className='flex'>
            <TeacherSidebar path={"/teacher/questionbank"} />
            <section className='w-full flex flex-col justify-center items-center '>
              <div className='md:w-1/2 flex flex-col gap-9 p-6'>
                <p className='font-bold text-lg '>Create Quesstion</p>
                <div className='w-full '>
                  {
                    tf != null ? <CreateTfCard /> : <CreateQcmCard />
                  }
                </div>
              </div>
            </section>
        </div>
        <Footer />
    </div>
  )
}
