import React from 'react'

export default function ProfileCard({user}) {
  return (
    <div className='border rounded-lg shadow-lg p-3 w-full sm:w-60 md:w-72 lg:w-80 xl:w-96'>
        <div className='text-sm uppercase font-bold'>
            <p className='text-purple-700 capitalize'>{user?.name}</p>
            <p className='text-gray-500 text-xs capitalize'>{user?.email}</p>
        </div>
        <div className='bg-gray-300 my-3 py-2 px-4'>
            <p className='text-xs text-gray-500 font-bold capitalize'>Role : {user?.role} </p>
        </div>
        <div>
            {
              user?.image_url == null ?
              <img className='w-full max-h-72 object-contain' src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png" alt="" />
              :
            <img className='w-full max-h-72 object-contain' src={user?.image_url} alt="" />
            }
        </div>
    </div>
  )
}
