import React from 'react'

export default function TeacherClassCard() {
  return (
    <div className='border-2  rounded-lg p-3 w-full items-center shadow-lg sm:w-80 md:w-96 xl:w-1/2 '>
        <p className='font-bold text-sm '>Your Classes</p>
        <div className='p-3 w-full flex-wrap rounded-lg border-2 flex justify-between mt-3'>
            <div>
                <p className='font-bold text-sm '>Web Development</p>
                <p className='text-xs font-medium text-gray-500'>Wednesday</p>
                <p className='text-xs font-medium text-gray-500'>8 am - 10 am</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <p className='font-bold text-sm '>Students</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.89 47.89 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z"/></svg>
                <p className='text-xs font-medium text-gray-500'>24</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <p className='font-bold text-sm '>Duration</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-3h3v-2h-3V9h-2v3H8v2h3zm1 5q-1.875 0-3.512-.712t-2.85-1.925q-1.213-1.213-1.925-2.85T3 13q0-1.875.713-3.512t1.924-2.85q1.213-1.213 2.85-1.925T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.712 3.513t-1.925 2.85q-1.213 1.212-2.85 1.925T12 22M5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75zM12 20q2.925 0 4.963-2.037T19 13q0-2.925-2.037-4.962T12 6Q9.075 6 7.038 8.038T5 13q0 2.925 2.038 4.963T12 20"/></svg>
                <p className='text-xs font-medium text-gray-500'>24</p>
            </div>
        </div>
        <div className='p-3 w-full flex-wrap rounded-lg border-2 flex justify-between mt-3'>
            <div>
                <p className='font-bold text-sm '>Web Development</p>
                <p className='text-xs font-medium text-gray-500'>Wednesday</p>
                <p className='text-xs font-medium text-gray-500'>8 am - 10 am</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <p className='font-bold text-sm '>Students</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.89 47.89 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z"/></svg>
                <p className='text-xs font-medium text-gray-500'>24</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <p className='font-bold text-sm '>Duration</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-3h3v-2h-3V9h-2v3H8v2h3zm1 5q-1.875 0-3.512-.712t-2.85-1.925q-1.213-1.213-1.925-2.85T3 13q0-1.875.713-3.512t1.924-2.85q1.213-1.213 2.85-1.925T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.712 3.513t-1.925 2.85q-1.213 1.212-2.85 1.925T12 22M5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75zM12 20q2.925 0 4.963-2.037T19 13q0-2.925-2.037-4.962T12 6Q9.075 6 7.038 8.038T5 13q0 2.925 2.038 4.963T12 20"/></svg>
                <p className='text-xs font-medium text-gray-500'>24</p>
            </div>
        </div>
       
        <div className='p-3 w-full flex-wrap rounded-lg border-2 flex justify-between mt-3'>
            <div>
                <p className='font-bold text-sm '>Web Development</p>
                <p className='text-xs font-medium text-gray-500'>Wednesday</p>
                <p className='text-xs font-medium text-gray-500'>8 am - 10 am</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <p className='font-bold text-sm '>Students</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="m226.53 56.41l-96-32a8 8 0 0 0-5.06 0l-96 32A8 8 0 0 0 24 64v80a8 8 0 0 0 16 0V75.1l33.59 11.19a64 64 0 0 0 20.65 88.05c-18 7.06-33.56 19.83-44.94 37.29a8 8 0 1 0 13.4 8.74C77.77 197.25 101.57 184 128 184s50.23 13.25 65.3 36.37a8 8 0 0 0 13.4-8.74c-11.38-17.46-27-30.23-44.94-37.29a64 64 0 0 0 20.65-88l44.12-14.7a8 8 0 0 0 0-15.18ZM176 120a48 48 0 1 1-86.65-28.45l36.12 12a8 8 0 0 0 5.06 0l36.12-12A47.89 47.89 0 0 1 176 120m-48-32.43L57.3 64L128 40.43L198.7 64Z"/></svg>
                <p className='text-xs font-medium text-gray-500'>24</p>
            </div>
            <div className='flex justify-center items-center flex-col'>
                <p className='font-bold text-sm '>Duration</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 17h2v-3h3v-2h-3V9h-2v3H8v2h3zm1 5q-1.875 0-3.512-.712t-2.85-1.925q-1.213-1.213-1.925-2.85T3 13q0-1.875.713-3.512t1.924-2.85q1.213-1.213 2.85-1.925T12 4q1.875 0 3.513.713t2.85 1.925q1.212 1.212 1.925 2.85T21 13q0 1.875-.712 3.513t-1.925 2.85q-1.213 1.212-2.85 1.925T12 22M5.6 2.35L7 3.75L2.75 8l-1.4-1.4zm12.8 0l4.25 4.25l-1.4 1.4L17 3.75zM12 20q2.925 0 4.963-2.037T19 13q0-2.925-2.037-4.962T12 6Q9.075 6 7.038 8.038T5 13q0 2.925 2.038 4.963T12 20"/></svg>
                <p className='text-xs font-medium text-gray-500'>24</p>
            </div>
        </div>
       
       
        
    </div>
  )
}
