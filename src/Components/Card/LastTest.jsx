import React from 'react'

export default function LastTest() {
  return (
    <div className='w-full p-6 shadow-lg rounded-lg border sm:w-60 lg:w-80 h-fit xl:h-full '>
    <p className='font-bold text-lg'>Last Tests</p>
    <div className='flex mt-3 justify-center items-center space-x-3 flex-wrap'>
        <div>
            <img className='w-28 h-28 object-cover' src="https://i.stack.imgur.com/IfI7i.png" alt="" />
        </div>
        <div>
            <p className='text-xs font-bold mt-3'>Sotfware Requirement</p>
            <p className='text-gray-500 font-medium text-xs mt-2'>[85 marks]</p>
            <p className='text-gray-500 font-medium text-xs mt-2'>15/02/2024</p>
            <p className='text-gray-500 font-medium text-xs mt-2'>2 hours</p>
            <button className='text-white bg-black rounded-md my-6 text-xs py-2 font-medium w-full'>Take Test</button>
        </div>
    </div>
</div>
  )
}
