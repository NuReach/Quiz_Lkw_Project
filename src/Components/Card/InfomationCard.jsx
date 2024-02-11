import React from 'react'

export default function InfomationCard() {
  return (
    <div className='shadow-lg rounded-lg p-6 w-80 lg:w-96'>
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
                <input type="text" value={"Hong Nnureach"}  className='w-full shadow-sm text-xs border border-gray-200 rounded-md mt-2' />
            </div>
            <div>
                <p className='text-sm font-medium'>Email </p>
                <input type="text" value={"nureach46@gmail.com"}  className='w-full shadow-sm text-xs border border-gray-200 rounded-md mt-2  ' />
            </div>
            <button className='px-3 py-2 w-full text-white font-medium text-sm rounded-md bg-purple-600 hover:scale-105 transition'>Save</button>   
        </section>
    </div>
  )
}
