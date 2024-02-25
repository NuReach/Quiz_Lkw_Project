import React, { useState } from 'react'
import TeacherSidebar from '../../Components/Sidebar/TeacherSidebar'
import TeacherNavbar from '../../Components/Navbar/TeacherNavbar'
import Footer from '../../Components/Footer/Footer'
import Search from '../../Components/Input/Search'
import TeacherResultFilter from '../../Components/Button/TeacherResultFilter'
import TeacherResultTable from '../../Components/Table/TeacherResultTable'

export default function TeacherResult() {
    const text ="asdfgh";
    const [data,setData]=useState(text.split(""));
    const [id,setId] = useState(null);
    const [show,setShow] = useState(false);
    const handleClick = (e,id)=>{
        e.preventDefault();
        setId(id);
        setShow(!show);
        console.log(id);
    }
  return (
    <div>
        <TeacherNavbar />
        <div className='flex'> 
            <TeacherSidebar />
            <div className='p-3 w-full' >
                <p className='font-bold text-lg '>Result List</p>
                <div className='flex justify-between items-center flex-wrap w-full'>
                    <Search />  
                    <TeacherResultFilter />
                </div>
                <div className='w-full flex justify-center flex-col items-center gap-9 mt-3'>
                    {
                        data.map((item,i)=>(
                        <div className='flex flex-col lg:w-1/2 border-b pb-1 '>
                            <div onClick={(e)=>handleClick(e,i)}  className='flex  w-full justify-between items-center cursor-pointer'>
                                <div className=' flex items-end gap-1 flex-wrap'>
                                    <p className='font-bold text-sm '>CS101:Introduction to computer science</p>
                                    <p className='font-bold text-xs text-gray-500 '>15/02/2024</p>
                                </div>
                                {
                                    id == i && show == true ? 
                                    <div>
                                    <svg className='cursor-pointer rotate-180' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M128 192l128 128 128-128z" fill="currentColor"/></svg>
                                    </div> :
                                    <div>
                                    <svg className='cursor-pointer' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512"><path d="M128 192l128 128 128-128z" fill="currentColor"/></svg>
                                </div>
                                }
                             
                            </div>
                            {
                                id == i && show == true ? 
                                <div className='my-3 transition-all'>
                                    <TeacherResultTable data={data} />
                                </div>  : ""
                            }
                           
                        </div>
                            
                        ))
                    }
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}
