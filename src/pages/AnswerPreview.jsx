import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Sidebar from '../Components/Sidebar/Sidebar'
import { useQuery } from '@tanstack/react-query';
import { getUserResultApi } from '../Api/SubmitExamApi';
import { useLocation } from 'react-router-dom';
import { getExamByID } from '../Api/ExamApi';
import QCM from '../Components/Card/QCM';
import TF from '../Components/Card/TF';

export default function AnswerPreview() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const exam_id = queryParams.get('exam');
  const id = exam_id;
  const { data:userResult } = useQuery({
    queryKey : ['userResult',{exam_id}],
    queryFn : ()=>getUserResultApi(exam_id)
  });
  console.log(userResult);
  return (
    <div>
      <Navbar />
        <div className='flex'>
            <Sidebar />
            <div className='p-3 w-full justify-center flex flex-wrap gap-6' >
                {
                 userResult?.answers.map((item,i)=>(
                  item.question.question_type == "multiple choice" ?
                  <QCM key={i} item={item} number={i+1} /> :
                  <TF key={i} item={item} number={i+1} />
                 ))
                }
            </div>
        </div>
      <Footer />
    </div>
  )
}
