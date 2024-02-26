import React, { useState } from 'react'
import { toast } from 'sonner';

export default function InfomationCard() {
    const [name,setName] = useState("Hong Nnureach");
    const [email,setEmail] = useState("nureach46@gmail.com");
    const save = (e)=>{
        e.preventDefault();
        console.log(name,email);
        toast.success('Your infoamtion have been saved')
    }
  return (
    <div className='shadow-lg rounded-lg p-6 sm:w-60 md:w-72 lg:w-80 xl:w-96 '>
        <section className='border-b pb-3 '>
            <p className='text-sm font-medium'>User Information</p>
        </section>
        <section className='mt-3 space-y-3'>
            <div>
                <p className='text-sm font-medium'>User ID </p>
                <input type="text" value={"123456789"} disabled className='w-full border shadow-sm text-xs border-gray-200 rounded-md mt-2 bg-gray-100 ' />
            </div>
            <div>
                <p className='text-sm font-medium'>Name</p>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}  className='w-full shadow-sm text-xs border border-gray-200 rounded-md mt-2' />
            </div>
            <div>
                <p className='text-sm font-medium'>Email </p>
                <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}  className='w-full shadow-sm text-xs border border-gray-200 rounded-md mt-2  ' />
            </div>
            <button onClick={save} className='px-3 py-2 w-full text-white font-medium text-sm rounded-md bg-purple-600 hover:scale-105 transition'>Save</button>   
        </section>
    </div>
  )
}
