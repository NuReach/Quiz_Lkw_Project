
import { createPortal } from 'react-dom'
import {motion} from 'framer-motion'
import { modalContainer } from '../../animation';
import { createExamApi } from '../../Api/ExamApi';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { resetSelectedQuestions } from '../../Slice/functionSlice';

export default function ExamDailog({examObj,setExamDailog, examDailog}) {
  const mountElemet = document.getElementById("modal");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutateAsync  : createExamMutation   } = useMutation({
    mutationFn : createExamApi,
    onSuccess : ()=>{
      toast.success("Create Successfully")
      navigate('/teacher/exam');
      dispatch(resetSelectedQuestions());
    },
    onError : ()=>{
        toast.error("Something went wrong !!")
    }
  })
  return createPortal(
    <div
         className='portal-wrapper flex justify-center items-center'>
        <motion.div
        variants={modalContainer}
        initial = "hidden"
        animate = "visible"
        exit="exit"
         className='bg-white w-96 rounded-lg p-3'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-sm'>Preview</h1>  
                <svg onClick={()=>{
                    setExamDailog(!examDailog)
                }}  className='cursor-pointer font-bold' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"/></svg>
            </div>
            <div className='flex justify-between mt-3'>
                <p className='text-xs font-medium w-24'>Title</p>
                <p  className='text-xs font-medium '>{examObj.exam_title}</p>
            </div>
            <div className='flex justify-between mt-3'>
                <p className='text-xs font-medium w-24'>Description</p>
                <p  className='text-xs font-medium '>{examObj.exam_description}</p>
            </div>
            <div className='flex justify-between mt-3'>
                <p className='text-xs font-medium w-24'>Duration</p>
                <p  className='text-xs font-medium '>{examObj.exam_duration}</p>
            </div>
            <div className='flex justify-between mt-3'>
                <p className='text-xs font-medium w-24'>Percentage</p>
                <p  className='text-xs font-medium '>{examObj.exam_percentage}</p>
            </div>
            <div className='flex justify-between mt-3'>
                <p className='text-xs font-medium w-24'>Score</p>
                <p  className='text-xs font-medium '>{examObj.exam_score}</p>
            </div>
            <div className='flex justify-between mt-3'>
                <p className='text-xs font-medium w-24'>Question</p>
                <p  className='text-xs font-medium '>{examObj.questions.length}</p>
            </div>
            <button  onClick={ async ()=>{
               await createExamMutation(examObj);
            }} className='font-medium text-xs py-2 w-full md:w-1/3 rounded-md  px-4 text-white bg-black  mt-6 '>Submit</button>
        </motion.div>
    </div>,
    mountElemet
  )
}
