import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import { toast } from 'sonner';

export default function InformationDetail() {
    const [nationality,setNationality] = useState("Cambodia");
    const [img,setImg] = useState(null);
    const save = (e)=>{
        e.preventDefault();
        console.log(img);
        toast.success('Your infoamtion have been saved')
    }
  return (
    <div className='shadow-lg rounded-lg p-6 w-full sm:w-60 md:w-72 lg:w-80 xl:w-96'>
        <section className='border-b pb-3 mt-3'>
            <p className='text-sm font-medium'>User Detail </p>
        </section>
        <section className='mt-3 space-y-3'>
            <div>
                <p className='text-sm font-medium'>Account Type </p>
                <input type="text" value={"Admin"} disabled className='w-full border shadow-sm text-xs border-gray-200 rounded-md mt-2 bg-gray-100 ' />
            </div>
            <div>
                <p className='text-sm font-medium'>Nationality</p>
                <input type="text" value={nationality} onChange={(e)=>setNationality(e.target.value)}  className='w-full shadow-sm text-xs border border-gray-200 rounded-md mt-2' />
            </div>
            <div>
            <div>
                <p className='text-sm font-medium'>Change Image</p>
                <input type="file" onChange={(e)=>setImg(e.target.files[0])}   className='w-full shadow-sm text-xs border border-gray-200 rounded-md mt-2' />
            </div>
            </div>
            <button onClick={save} className='px-3 py-2  text-white font-medium text-sm rounded-md bg-blue-600 hover:scale-105 transition'>Save</button>   
        </section>
    </div>
  )
}
