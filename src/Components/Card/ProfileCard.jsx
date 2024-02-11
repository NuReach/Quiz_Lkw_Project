import React from 'react'

export default function ProfileCard() {
  return (
    <div className='border rounded-lg shadow-lg p-3 '>
        <div className='text-sm uppercase font-bold'>
            <p className='text-purple-700'>Reach</p>
            <p className='text-gray-500 text-xs'>Nureach46@gmail.com</p>
        </div>
        <div className='bg-gray-300 my-3 py-2 px-4'>
            <p className='text-xs text-gray-500 font-bold'>Role : Teacher </p>
        </div>
        <div>
            <img className='w-full max-h-72 object-contain' src="https://6.soompi.io/wp-content/uploads/image/a37ea60272db4eb3a9fa70665614e50f.jpeg?s=900x600&e=t" alt="" />
        </div>
    </div>
  )
}
