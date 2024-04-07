import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { updateQuestion } from '../../Api/QuestionApi';
import {useMutation,useQueryClient} from '@tanstack/react-query';
import {toast} from 'sonner'

export default function UpdateQcmCard({data,id}) {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [difficulty,setDifficulty] = useState(data.question_level);
    const [mark,setMark] = useState(data.mark);
    const [op1,setOp1] = useState(data.choices[0].text);
    const [op2,setOp2] = useState(data.choices[1].text);
    const [op3,setOp3] = useState(data.choices[2].text);
    const [op4,setOp4] = useState(data.choices[3].text);
    const [question,setQuestion] = useState(data.question_prompt);
    const [answer,setAnswer] = useState(data.choices.findIndex((item)=>item.is_correct == 1) == 0 ? "op1" :
    (data.choices.findIndex((item)=>item.is_correct == 1) == 1 ? "op2" : (
    data.choices.findIndex((item)=>item.is_correct == 1) == 2 ? "op3" : "op4"
    )));

    const queryClient = useQueryClient();

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
    const handleClick = async (e)=>{
        e.preventDefault();
        const questionObj = {
            id:id,
            question_prompt : question.toLowerCase(),
            question_image: selectedFile,
            question_type: "multiple choice",
            question_level: difficulty,
            question_mark:mark,
            question_choices : [
                {
                    id:data.choices[0].id,
                    question_id : data.choices[0].question_id ,
                    text : op1,
                    is_correct :  answer == 'op1' ? true : false 
                },
                {
                    id:data.choices[1].id,
                    question_id : data.choices[1].question_id ,
                    text : op2,
                    is_correct :   answer == 'op2' ? true : false 
                },
                {
                    id:data.choices[2].id,
                    question_id : data.choices[2].question_id ,
                    text : op3,
                    is_correct :  answer == 'op3' ? true : false 
                },
                {
                    id:data.choices[3].id,
                    question_id : data.choices[3].question_id ,
                    text : op4,
                    is_correct :  answer == 'op4' ? true : false 
                },
            ]
        }
        await updateQuestionFunc(questionObj);
    }

    const { mutateAsync : updateQuestionFunc , isPending  } = useMutation({
        mutationFn : updateQuestion,
        onSuccess : ()=>{
          toast.success("Question Updated Successfully")
          navigate('/teacher/questionbank/');
          queryClient.invalidateQueries(['searchQuestions']);
        },
        onError : ()=>{
            toast.error("Sorry, Something went wrong !!")
        }
      })
  return (
    <div className='flex flex-col gap-9'>
        <section className='flex gap-16'>
            <div className='w-28 text-center border-b-4 pb-3 border-black cursor-pointer'>
                <p className='font-bold text-sm '>Muliple Choice Question</p>
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
                    imagePreview != null && <img className='w-36 h-56 object-cover' src={imagePreview} alt="" />
                }
                {
                    data.question_image != 'no image' && 
                    <img className='w-36 object-cover h-56' src={data.question_image} alt="" />
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
                <input onChange={(e)=>setOp1(e.target.value)} value={op1} type="text" className='p-2 text-xs rounded-md' />
                <input  value="op1" checked={answer=='op1'} onClick={(e)=>setAnswer(e.target.value)} type="checkbox" className='checked:bg-black' />
            </div>
            <div className='flex flex-wrap gap-6 items-center'>
                <p className='font-bold text-xs '>Option 2</p>
                <input onChange={(e)=>setOp2(e.target.value)} value={op2} type="text" className='p-2 text-xs rounded-md' />
                <input  value="op2" checked={answer=='op2'} onClick={(e)=>setAnswer(e.target.value)} type="checkbox" className='checked:bg-black' />
            </div>
            <div className='flex flex-wrap gap-6 items-center'>
                <p className='font-bold text-xs '>Option 3</p>
                <input onChange={(e)=>setOp3(e.target.value)} value={op3} type="text" className='p-2 text-xs rounded-md' />
                <input  value="op3" checked={answer=='op3'} onClick={(e)=>setAnswer(e.target.value)} type="checkbox" className='checked:bg-black' />
            </div>
            <div className='flex flex-wrap gap-6 items-center'>
                <p className='font-bold text-xs '>Option 4</p>
                <input onChange={(e)=>setOp4(e.target.value)} value={op4} type="text" className='p-2 text-xs rounded-md' />
                <input  value="op4" checked={answer=='op4'} onClick={(e)=>setAnswer(e.target.value)} type="checkbox" className='checked:bg-black' />
            </div>
            <div className='flex flex-wrap gap-6 items-center'>
                <p className='font-bold w-16 text-sm '>Mark</p>
                <input onChange={(e)=>setMark(e.target.value)} value={mark} type="number" className='p-2 text-xs rounded-md' />
            </div>
        </section>
        <section className='w-full flex justify-end'>
            <button onClick={handleClick} className='bg-black font-bold text-xs px-6 py-2 rounded-md text-white'>Submit</button>
        </section>
    </div>
  )
}