import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react'
import Dailog from '../Card/Dailog';

export default function NotificationBox({item}) {
    
    const [modal,setModal] = useState(false);
    const [content,setContent] = useState(null);
    const show = (e,id,name)=>{
        e.preventDefault();
        setContent({id,name})
        setModal(!modal);

    }
  return (
    <div className="flex flex-col justify-center border-2 shadow-lg w-60 p-3 rounded-lg  h-fit">
        <AnimatePresence>
        {
            modal ? <Dailog setModal={setModal} modal={modal} content = {content}  /> : ""
        }
        </AnimatePresence>
        <div className="space-y-6 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
            <p className='text-black font-bold'>{item.message}</p>
        </div>
        <div>
            <p className='text-xs'>{item.desc}</p>
        </div>
        <div className='w-full flex gap-3  flex-col'>
            <p className='text-xs font-medium'>Created At : {item.created_at.slice(1,10)}</p>
            <button onClick={(e)=>show(e,item.id,"notification")} className='p-2 text-xs bg-red-500 text-white rounded-lg w-fit'>Delete</button>
        </div>
    </div>
  )
}
