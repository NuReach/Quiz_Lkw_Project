import { useMutation } from '@tanstack/react-query';
import React, { useEffect, useRef, useState } from 'react'
import Countdown from 'react-countdown'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { submitExamApi } from '../../Api/SubmitExamApi';
import { resetUserAnswer } from '../../Slice/functionSlice';
import { toast } from 'sonner';

export default function Clock({duration}) {
    const [timeLeft, setTimeLeft] = useState(duration*60);
    const intervalRef = useRef(null);
    const user = JSON.parse(localStorage.getItem('userData'));
    const userAnswer = useSelector((state)=>state.function.userAnswers);
    const navigate = useNavigate();
    const dispatch = useDispatch();
      useEffect(() => {
        const intervalId = setInterval(() => {
          setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
        }, 1000);
      
        intervalRef.current = intervalId;

        return () => clearInterval(intervalId);
      }, []);
    
      let completionistCalled = false;
      const Completionist = () => {
        if (!completionistCalled) {
          completionistCalled = true;
          try {
              const userAnswerObj = {
                exam_id : userAnswer[0]?.exam_id,
                user_id : user.user_id, 
                answer : userAnswer?.map((item)=>(
                  {question_id: item.question_id,
                  choice_id: item.choice_id}
                )) 
              }
              const submit = async()=>{
                if (userAnswer[0]?.exam_id,userAnswer) {
                  await submitExamMutation(userAnswerObj);
                }
              }
              submit();
              navigate("/submite/exam/page");
              dispatch(resetUserAnswer());    

          } catch (error) {
            console.log(error);
          }
        }

      };
      
      const { mutateAsync  : submitExamMutation   } = useMutation({
        mutationFn : submitExamApi,
        onSuccess : ()=>{
          toast.success("Exam Submited Successfully")
          //navigate('/');
          dispatch(resetUserAnswer());
        },
        onError : ()=>{
            toast.error("Something went wrong !!")
        }
      })
  

      const renderer = ({ hours, minutes, seconds, completed }) => {
        if (completed) {
          return <Completionist />;
        } else {
          return <div className='p-3 flex flex-col justify-center items-center'>
          <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 24 24"><path fill="currentColor" d="M12 20c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8m0-18c5.5 0 10 4.5 10 10s-4.5 10-10 10S2 17.5 2 12S6.5 2 12 2m5 9.5V13h-6V7h1.5v4.5z"/></svg>
            <div className='font-bold flex font-mono'>
            {
              hours != 0 && hours + ":"
            }
            {
              minutes != 0 && minutes + ":"
            }
            {
              seconds + ""
            }
            <p className='pl-1'>Left</p>
            </div>      
          </div>;
        }
      };
    
  return (
    <div className='w-full'>
        <section className=''>
            <div>
                 <Countdown 
                 date={Date.now() + timeLeft * 1000}
                 renderer={renderer}
                 >
                </Countdown>
            </div>
        </section>
    </div>
  )
}
