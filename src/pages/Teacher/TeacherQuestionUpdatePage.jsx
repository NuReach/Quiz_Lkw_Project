import React from 'react'
import { useLocation } from 'react-router-dom';
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar';
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar';
import Footer from '../../Components/Footer/Footer';
import CreateTfCard from '../../Components/Table/CreateTfCard';
import CreateQcmCard from '../../Components/Table/CreateQcmCard';
import UpdateTfCard from '../../Components/Card/UpdateTfCard';
import UpdateQcmCard from '../../Components/Card/UpdateQcmCard';

export default function TeacherQuestionUpdatePage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');
    return (
      <div>
          <TeacherNavbar />
          <div className='flex'>
              <TeacherSidebar path={"/teacher/questionbank"} />
              <section className='w-full flex flex-col justify-center items-center '>
                <div className='md:w-1/2 flex flex-col gap-9 p-6'>
                  <p className='font-bold text-lg '>Update Question</p>
                  <div className='w-full '>
                    {
                      type != "qcm" ? <UpdateTfCard /> : <UpdateQcmCard />
                    }
                  </div>
                </div>
              </section>
          </div>
          <Footer />
      </div>
    )
  }
  