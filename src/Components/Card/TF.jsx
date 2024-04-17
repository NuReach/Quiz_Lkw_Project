import React from 'react'

export default function TF({item,number,userChoice}) {
  return (
    <div className=' w-full '>
      <div className=''>
      <p className='my-2 text-sm font-medium capitalize'>{number}.{item?.question.question_prompt}</p>
      </div>
      <div className='flex flex-col gap-3 justify-center items-center mt-3  '>
        {
            item.question.choices.map((item,i)=>(
            <div key={i} className={item.is_correct === 1 ? 'w-full p-2 border-2 rounded-lg border-blue-500 text-xs bg-black bg-opacity-5 hover:bg-opacity-0 transition' :'w-full p-2 text-xs border-2 border-gray-300 rounded-lg bg-black bg-opacity-5 hover:bg-opacity-0 transition '}>
                <div className='flex items-center space-x-3 p-1'>
                {
                    item.is_correct == 1 ? <svg className='text-blue-500 font-medium' xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="currentColor"/></svg>
                
                }
                <p className='font-medium capitalize'> {item.text}</p>
                </div>
            </div>
            ))
          }
      </div>
      <div className='w-full flex justify-start flex-col gap-3 mt-3'>
          <p className='text-xs font-bold'>Your Answer</p>
          <div className={userChoice.is_correct === 1 ? 'w-full p-2 border-4 rounded-lg border-green-500 text-xs bg-black bg-opacity-5 hover:bg-opacity-0 transition' :'w-full p-2 text-xs border-4 border-red-500 rounded-lg bg-black bg-opacity-5 hover:bg-opacity-0 transition '}>
                <div className='flex items-center space-x-3 p-1'>
                {
                  userChoice.is_correct === 1  ? <svg className='text-blue-500 font-medium' xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 15"><path fill="none" stroke="currentColor" d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 32 32"><circle cx="16" cy="16" r="14" fill="currentColor"/></svg>
                
                }
                <p className='font-medium capitalize'> {userChoice.text}</p>
                </div>
            </div>
          </div>
  </div>
  )
}
