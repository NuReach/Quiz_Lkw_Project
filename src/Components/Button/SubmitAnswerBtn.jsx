import { useMutation } from '@tanstack/react-query';
import { useDispatch, useSelector } from 'react-redux';
import { submitExamApi } from '../../Api/SubmitExamApi';
import { resetUserAnswer } from '../../Slice/functionSlice';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function SubmitAnswerBtn() {
    const userAnswer = useSelector((state)=>state.function.userAnswers);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('userData'));
    const navigate = useNavigate();
    const handleClick = async (e)=>{
      e.preventDefault();
      const userAnswerObj = {
        exam_id : userAnswer[0].exam_id,
        user_id : user.user_id, 
        answer : userAnswer.map((item)=>(
          {question_id: item.question_id,
          choice_id: item.choice_id}
        )) 
      }
      await submitExamMutation(userAnswerObj);
    };
    const { mutateAsync  : submitExamMutation   } = useMutation({
      mutationFn : submitExamApi,
      onSuccess : ()=>{
        toast.success("Exam Submited Successfully")
        navigate(`/submite/exam/page?exam=${userAnswer[0]?.exam_id}`);
        dispatch(resetUserAnswer());
      },
      onError : ()=>{
          toast.error("Something went wrong !!")
      }
    })

  return (
    <div>
    <button onClick={handleClick} className='px-4 py-2 mt-3 text-white font-medium text-sm rounded-md bg-purple-600  hover:scale-105 transition'>Submit</button> 
    </div>
  )
}
