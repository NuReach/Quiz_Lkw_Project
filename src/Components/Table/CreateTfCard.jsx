import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { createQuestion } from '../../Api/QuestionApi';
import { useMutation , useQueryClient } from '@tanstack/react-query';
import {toast} from 'sonner' ;


export default function CreateTfCard() {
    const navigate = useNavigate();
    const queryClient  = useQueryClient();
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [difficulty,setDifficulty] = useState("");
    const [question,setQuestion] = useState("");
    const [answer,setAnswer] = useState("");
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setSelectedFile(file);
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
      const handleSubmit = async (e)=>{
        e.preventDefault();
        const questionObj = {
            question_prompt : question.toLowerCase(),
            question_image: selectedFile,
            question_type: "true or false",
            question_level: difficulty,
            question_choices : [
                {
                    text : "true",
                    is_correct :  answer == 'true' ? true : false 
                },
                {
                    text : "false",
                    is_correct :   answer == 'false' ? true : false 
                },
            ]
        }
        await createQuestionFunc(questionObj);
    }
    const { mutateAsync : createQuestionFunc , isPending , data   } = useMutation({
        mutationFn : createQuestion,
        onSuccess : ()=>{
          toast.success("Question Created Successfully")
          navigate('/teacher/questionbank/create?tf=true');
          queryClient.invalidateQueries(['searchQuestions']);
        },
        onError : ()=>{
            toast.error("Sorry, Something went wrong !!")
        }
      })
    return (
      <div className='flex flex-col gap-9 pb-16'>
          <section className='flex gap-16'>
              <div onClick={(e)=>navigate("/teacher/questionbank/create")} className='w-28 text-center border-b-4 pb-3 border-gray-500 cursor-pointer'>
                  <p className='font-bold text-sm text-gray-500 '>Muliple Choice Question</p>
              </div>
              <div onClick={(e)=>navigate("/teacher/questionbank/create?tf=true")} className='w-24 text-center cursor-pointer  '>
                  <p className='font-bold text-sm border-b-4 pb-3 border-black'>True False Question</p>
              </div>
          </section>
          <section>
              <textarea onChange={(e)=>setQuestion(e.target.value)} value={question}  className='w-full rounded-md text-sm font-medium p-3 placeholder:text-gray-500' placeholder='Question Prompt'></textarea>
          </section>
          <section className='flex flex-col gap-6'>
            <p className='font-bold text-sm '>Upload Image </p>
            <div className='flex flex-col gap-9'>
                <input onChange={handleFileChange} type="file" className='text-xs file:text-xs rounded-lg' />
                {
                    imagePreview != null && <img className='w-36 object-cover' src={imagePreview} alt="" />
                }
            </div>
        </section>
        <section className='flex flex-col gap-6'>
            <p className='font-bold text-sm '>Difficulty Level</p>
            <div className='flex flex-wrap gap-9'>
                <button onClick={(e)=>setDifficulty(e.target.value)} value="easy" className={difficulty == "easy" ?'border-4 border-black py-2 px-6 text-xs  rounded-md font-medium':'border py-2 px-6 text-xs rounded-md font-medium'}>Easy</button>
                <button onClick={(e)=>setDifficulty(e.target.value)} value="medium" className={difficulty == "medium" ?'border-4 border-black py-2 px-6 text-xs  rounded-md font-medium':'border py-2 px-6 text-xs rounded-md font-medium'}>Medium</button>
                <button onClick={(e)=>setDifficulty(e.target.value)} value="hard" className={difficulty == "hard" ?'border-4 border-black py-2 px-6 text-xs  rounded-md font-medium':'border py-2 px-6 text-xs rounded-md font-medium'}>Hard</button>
            </div>
        </section>
          <section className='flex flex-col gap-6'>
              <p className=' text-sm font-bold'>Answer Question </p>
              <div className='flex flex-wrap gap-6 items-center'>
                  <p className='font-bold text-xs '>Option 1</p>
                  <p className='font-bold text-xs w-12 '>True </p>
                  <input onClick={(e)=>setAnswer(e.target.value)} value="true" checked={answer=="true"} type="checkbox" className='checked:bg-black' />
              </div>
              <div className='flex flex-wrap gap-6 items-center'>
                  <p className='font-bold text-xs '>Option 2</p>
                  <p className='font-bold text-xs w-12'>False </p>
                  <input onClick={(e)=>setAnswer(e.target.value)} value="false" checked={answer=="false"} type="checkbox" className='checked:bg-black' />
              </div>
          </section>
          <section className='w-full flex justify-end'>
              <button onClick={handleSubmit} className='bg-black font-bold text-xs px-6 py-2 rounded-md text-white'>Submit</button>
          </section>
      </div>
    )
  }
