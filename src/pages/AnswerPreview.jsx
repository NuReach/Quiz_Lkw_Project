import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Sidebar from '../Components/Sidebar/Sidebar'
import { useQuery } from '@tanstack/react-query';
import { getUserResultApi } from '../Api/SubmitExamApi';
import { useLocation } from 'react-router-dom';
import { getExamByID } from '../Api/ExamApi';

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
            <div className='p-3'>
                result
            </div>
        </div>
      <Footer />
    </div>
  )
}
