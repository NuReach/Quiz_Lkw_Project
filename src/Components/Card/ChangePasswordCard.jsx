import React from 'react'

export default function ChangePasswordCard() {
  return (
    <div className='shadow-lg rounded-lg p-6  sm:w-60 md:w-72 lg:w-80 xl:w-96'>
        <section className='border-b pb-3 mt-3'>
            <p className='text-sm font-medium'>Change Password</p>
        </section>
        <section className='mt-3 space-y-3'>
            <div>
                <p className='text-sm font-medium'>Current Password </p>
                <input type="password" value={"Admin"} disabled className='w-full border shadow-sm text-xs border-gray-200 rounded-md mt-2 bg-gray-100 ' />
            </div>
            <div>
                <p className='text-sm font-medium'>New Password</p>
                <input type="password" value={"Cambodia"}  className='w-full shadow-sm text-xs border border-gray-200 rounded-md mt-2' />
            </div>
            <button className='px-3 py-2  text-white font-medium text-sm rounded-md bg-yellow-400 hover:scale-105 transition'>Save</button>   
        </section>
    </div>
  )
}
