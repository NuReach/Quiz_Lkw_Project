import React, { useState } from 'react'
import { createNotificationApi } from '../../Api/NotificationApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function AdminTextArea() {
    const [text, setText] = useState("")
    const [desc,setDesc] = useState("");
    const queryClient = useQueryClient();
    const { mutateAsync  : createNotificationMutation   } = useMutation({
      mutationFn : createNotificationApi,
      onSuccess : ()=>{
        toast.success("Create Successfully")
        queryClient.invalidateQueries(['notifications'])
      },
      onError : ()=>{
          toast.error("Something went wrong !!")
      }
    })

    const goBtn = async (e)=>{
      e.preventDefault();
      await createNotificationMutation({message:text,desc:desc})
    }
  return (
    <div class=" w-full">
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your Title</label>
        <input type="text" onChange={(e)=>setText(e.target.value)} value={text} placeholder='Enter Message Title ...' className='rounded-lg p-3 w-full my-3 text text-xs' name="" id="" />
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
        <div className='relative'>
            <textarea onChange={(e)=>setDesc(e.target.value)} value={desc} id="message" rows="4" class="block p-2.5 w-full h-96 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message..."></textarea>
            <button onClick={goBtn} className='bg-sky-500 text-xs text-white font-bold p-3 rounded-full w-12 h-12 absolute -right-2 -bottom-3 hover:scale-105 transition'>GO</button>
        </div>
        <p class="mt-5">
        Please write something that is important, Remember: All your text will send to everyone
        </p>
    </div>
  )
}
