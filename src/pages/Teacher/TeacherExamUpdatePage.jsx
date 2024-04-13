import React, { useEffect, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar'
import Footer from '../../Components/Footer/Footer'
import { useMutation, useQuery } from '@tanstack/react-query';
import { getExamByID, updateExamApi } from '../../Api/ExamApi';
import { useNavigate, useParams } from 'react-router-dom';
import { getCourses } from '../../Api/CourseApi';
import QuestionBank from '../../Components/Table/QuestionBank';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../../Components/Loading/Loading';
import { addQuestion, deleteQuestion, resetSelectedQuestions, showDailog } from '../../Slice/functionSlice';
import { toast } from 'sonner';

export default function TeacherExamUpdatePage() {
    const {id} = useParams();
    const dailog = useSelector((state)=>state.function.dailog);
    const selectedQuestion = useSelector((state)=>state.function.selectedQuestion);
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { isLoading , isError , data:exam } = useQuery({
        queryKey : ['exam',{id}],
        queryFn : () => getExamByID(id)
    });
    const { isLoading : courseLoading , isError:courseError , data:courses } = useQuery({
        queryKey : ['courses'],
        queryFn : getCourses
      });
    const [title,setTitle] = useState("");
    const [courseId,setCourseId] = useState(0);
    const [percentage,setPercentage] = useState(0);
    const [score,setScore] = useState(0);
    const [duration,setDuration] = useState(0);
    const [description,setDescription] = useState("");
    const [status , setStatus ] = useState("");

    const { mutateAsync  : updateExamMutation   } = useMutation({
        mutationFn : updateExamApi,
        onSuccess : ()=>{
          toast.success("Updated Successfully")
          navigate('/teacher/exam');
          dispatch(resetSelectedQuestions());
        },
        onError : ()=>{
            toast.error("Something went wrong!!")
        }
      })

    useEffect(()=>{
        setTitle(exam?.exam_title);
        setCourseId(exam?.course.id);
        setPercentage(exam?.exam_percentage);
        setScore(exam?.exam_score);
        setDuration(exam?.exam_duration);
        setDescription(exam?.exam_description);
        setStatus(exam?.status);
    },[exam])

    const show = (e)=>{
        e.preventDefault();
        dispatch(showDailog());
        for (let i = 0; i < exam?.questions.length; i++) {
            dispatch(addQuestion({ item: exam?.questions[i], selectedQuestion: selectedQuestion }));
        }
    }
    
    const removeQuestion = (e,id)=>{
        e.preventDefault();
        dispatch(deleteQuestion({deletedItemId:id}));
    }

    useEffect(()=>{
        dispatch(resetSelectedQuestions());
        for (let i = 0; i < exam?.questions.length; i++) {
            dispatch(addQuestion({ item: exam?.questions[i], selectedQuestion: selectedQuestion }));
        }
    },[exam])

    const updateBtn = async (e)=>{
        e.preventDefault();
        const examObj = {
            id : id,
            exam_title : title,
            course_id : courseId,
            exam_percentage : percentage,
            exam_score : score,
            exam_duration : duration ,
            exam_description : description,
            status : status,
            questions : selectedQuestion?.map((item=>item.id))
       }
       await updateExamMutation(examObj);
    }


    const deleteBtn = (e)=>{
        e.preventDefault();
    }
      

  return (
    <div>
        <Navbar />
        <div className='flex '>
            <TeacherSidebar path={"/teacher/exam"} />
            {
                isLoading ? <Loading /> :
            <div className='p-3 w-full flex flex-col gap-3 items-center justify-center'>
                <div className=' flex flex-col w-full md:w-96'>
                    <p className='text-lg font-bold my-3'>Update Exam</p>
                    <div className='flex flex-col gap-3 '>
                        <div>
                            <p className='text-xs'>Enter Name</p>
                            <input required onChange={(e)=>setTitle(e.target.value)} value={title}  type="text" name="" id="" className='bg-inherit text-xs mt-1 w-full focus:ring-0 focus:outline-none focus:border-black rounded-sm' />
                        </div>
                        <div>
                            <p className='text-xs'>Enter Course</p>
                            <select required onChange={(e)=>setCourseId(e.target.value)} value={courseId} name="" id="" className='focus:ring-0 focus:outline-none mt-1 w-full focus:border-black rounded-sm text-xs'>
                            <option className='capitalize' value={""}>Please Select Course</option>
                            {
                                courses?.map((item,i)=>(
                                <option key={i} className='capitalize' value={item.id}>{item.course_title}</option>
                                ))
                            }
                            </select>
                        </div>
                        <div>
                            <p className='text-xs'>Enter Percentage</p>
                            <input required onChange={(e)=>setPercentage(e.target.value)} value={percentage} type="text" name="" id="" className='bg-inherit mt-1 w-full focus:ring-0 focus:outline-none focus:border-black rounded-sm text-xs' />
                        </div>
                        <div>
                            <p className='text-xs'>Full Score</p> 
                            <input onChange={(e)=>setScore(e.target.value)} value={score} type="text" name="" id="" className='bg-inherit text-xs mt-1 w-full l focus:ring-0 focus:outline-none focus:border-black rounded-sm' />
                        </div>
                        <div>
                            <div className='flex gap-3'>
                            <p className='text-xs'>Duration</p>
                            <p className='text-xs text-red-600'>Note : In Minute</p>
                            </div>
                            <input onChange={(e)=>setDuration(e.target.value)} value={duration} type="text" name="" id="" className='bg-inherit mt-1 w-full focus:ring-0 focus:outline-none focus:border-black rounded-sm text-xs' />
                        </div>
                        <div>
                            <p className='text-xs'>Description</p>
                            <input onChange={(e)=>setDescription(e.target.value)} value={description} type="text" name="" id="" className='bg-inherit mt-1 w-full l focus:ring-0 focus:outline-none focus:border-black rounded-sm text-xs' />
                        </div>
                        <div>
                            <p className='text-xs'>Status</p>
                            <select required onChange={(e)=>setStatus(e.target.value)} value={status} name="" id="" className='focus:ring-0 focus:outline-none mt-1 w-full focus:border-black rounded-sm text-xs'>
                            <option className='capitalize' value={""}>Please Select Status</option>
                            <option  className='capitalize' value={"published"}>published</option>
                            <option  className='capitalize' value={"prepared"}>prepared</option>
                            <option  className='capitalize' value={"live"}>live</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-96'>
                    <div className='flex gap-3 items-center'>
                        <p className='text-lg font-bold my-3'>Questions</p>
                        <button onClick={show}  className='text-xs font-medium bg-green-500 text-white  p-3 rounded-lg'>ADD MORE</button>
                    </div>
                    {
                        selectedQuestion.map((item,i)=>(
                            <div className=' flex justify-between my-6 ' key={i}>
                                <div  className='w-full text-xs flex flex-wrap  items-center border-b-2 pb-3 gap-1 cursor-pointer '>
                                    <p className='w-6'>{i+1}</p>
                                    <div className=''>
                                    <p className=' font-medium text-gray-600 line-clamp-1 w-64 capitalize'>{item.question_prompt}</p>
                                    </div>
                                    <p className='  font-medium text-gray-600 line-clamp-1 w-36 capitalize'>{item.question_type}</p>
                                    <p className=' font-medium text-gray-600 line-clamp-1 capitalize'>{item.question_level}</p>
                                </div>
                                <div>
                                <svg onClick={(e)=>removeQuestion(e,item.id)}  className='cursor-pointer items-end' xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="m6.4 18.308l-.708-.708l5.6-5.6l-5.6-5.6l.708-.708l5.6 5.6l5.6-5.6l.708.708l-5.6 5.6l5.6 5.6l-.708.708l-5.6-5.6z"/></svg>
                                </div>
                            </div>
                            ))
                    }
                </div>

                <div className='w-full md:w-96'>
                    {
                    dailog &&
                    <QuestionBank />
                    }
                </div>
            
                <div className='w-full md:w-96 gap-3 flex flex-col'>
                    <button onClick={updateBtn}  className='text-white bg-blue-600 p-3 w-full font-medium text-xs rounded-lg '>Update</button>
                    <button onClick={deleteBtn} className='text-white bg-red-600 p-3 w-full font-medium text-xs rounded-lg '>Delete</button>
                </div>
            </div>
            }
        </div>
        <Footer />
    </div>
  )
}
