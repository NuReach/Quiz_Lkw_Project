import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function UpdateTfCard() {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [difficulty,setDifficulty] = useState("easy");
    const [question,setQuestion] = useState("What is this ?");
    const [answer,setAnswer] = useState("true");
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
    return (
      <div className='flex flex-col gap-9 pb-16'>
          <section className='flex gap-16'>
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
              <button className='bg-black font-bold text-xs px-6 py-2 rounded-md text-white'>Submit</button>
          </section>
      </div>
    )
  }
