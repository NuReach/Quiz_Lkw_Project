import React from 'react'
import { useLocation } from 'react-router-dom';
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar';
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar';
import Footer from '../../Components/Footer/Footer';
import UpdateTfCard from '../../Components/Card/UpdateTfCard';
import UpdateQcmCard from '../../Components/Card/UpdateQcmCard';
import { useParams } from 'react-router-dom';
import { getQuestionById } from '../../Api/QuestionApi';
import { useQuery } from '@tanstack/react-query'
import Loading from '../../Components/Loading/Loading';

export default function TeacherQuestionUpdatePage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const type = queryParams.get('type');
  const {id}  = useParams();

  const { isLoading , isError , data:questionById } = useQuery({
    queryKey : ['questionById',{id}],
    queryFn : () => getQuestionById(id)
  });

  console.log(questionById);

    return (
      <div>
          <TeacherNavbar />
          <div className='flex'>
              <TeacherSidebar path={"/teacher/questionbank"} />
              <section className='w-full flex flex-col justify-center items-center '>
                <div className='md:w-1/2 flex flex-col gap-9 p-6'>
                  <p className='font-bold text-lg '>Update Question</p>
                  {
                    isLoading ? <Loading /> : 
                    <div className='w-full '>
                      {
                        type != "multiple choice" ? <UpdateTfCard data={questionById} id={id} /> : <UpdateQcmCard data={questionById} id={id} />
                      }
                    </div>
                  }
                </div>
              </section>
          </div>
          <Footer />
      </div>
    )
  }
  