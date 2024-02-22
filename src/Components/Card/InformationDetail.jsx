import React from 'react'
import ProfileCard from './ProfileCard'

export default function InformationDetail() {
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
                <input type="text" value={"Cambodia"}  className='w-full shadow-sm text-xs border border-gray-200 rounded-md mt-2' />
            </div>
            <div>
                <p className='text-sm font-medium'>Change Image</p>
                <input type="file"   className='w-full shadow-sm text-xs border border-gray-200 rounded-md mt-2' />
            </div>
            <button className='px-3 py-2  text-white font-medium text-sm rounded-md bg-blue-600 hover:scale-105 transition'>Save</button>   
        </section>
    </div>
  )
}
