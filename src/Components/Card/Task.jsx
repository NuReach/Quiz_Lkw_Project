
export default function Task({data}) {
  return (
    <div className='w-full p-6 shadow-lg lg:h-full rounded-lg border sm:w-60 sm:hidden xl:block xl:w-72 '>
    <div className=' flex justify-between items-center'>
        <p className='font-bold text-lg'>Your Classes</p>
    </div>
    <div>
        {
            data.map((item,i)=>(
            <div key={i} className='flex flex-col mt-3 border-b-2 pb-3'>
                <p className='text-sm font-bold capitalize'>{item.course.course_title}</p>
                <p className='text-gray-500 font-medium text-xs line-clamp-2 uppercase'>{item.course.course_code}</p>    
                <p className='text-gray-500 font-medium text-xs line-clamp-2 uppercase'>{item.user.name}</p>    
                <p className='text-gray-500 font-medium text-xs line-clamp-2 uppercase'>{item.user.email}</p>        
            </div>

            ))
        }
    </div>
</div>
  )
}
