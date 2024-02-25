import React from 'react'

export default function TeacherResultTable({data}) {
  return (
    <div className='border rounded-lg p-3 shadow-lg'>
        <header className='font-bold text-xs flex justify-between border-b pb-2'>
            <p className='sm:w-36'>Strudent</p>
            <p className='sm:w-14'>Marks</p>
            <p className='sm:w-20 text-center'>Grade</p>
        </header>
        {
            data.map((item,i)=>(
                <div className='font-medium text-xs flex justify-between py-6 border-b '>
                    <p className='sm:w-36 line-clamp-1'>Hong Nnureach</p>
                    <p className='sm:w-14'>60</p>
                    <div className='sm:w-20  text-white p-1 rounded-full text-center bg-green-500 ' >A</div>
                </div>
            ))
        }
    </div>
  )
}
