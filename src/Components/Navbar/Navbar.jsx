import React, { useState } from 'react'
import DarkBtn from '../DarkModeBtn/DarkBtn'
import { Link, useNavigate } from 'react-router-dom'
import { all } from '../../Data';
export default function Navbar() {
  const [dailog, setdailog] = useState(false);
  const [quizId,setQuizId] = useState("");
  const [title,settitle]=useState("");
  const [data,setData]= useState(all);
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    console.log(quizId);
    const quiz = data.find((item)=>item.id==quizId);
    if (quiz) {
      navigate(`/quiz/playing/${quizId}`);
    }else{
      alert("No Quiz !!")
    }
  }

  return (
    <nav className='bg-black flex justify-between items-center px-6  '>
        <Link to={"/"}>
          <img className='w-24' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Limkokwing_Corporate_Logo_2018.png" alt="" />
        </Link>
        {/* <div className='relative md:block hidden'>
          <input placeholder='Input Quiz Code...' className=' bg-inherit lg:w-96 text-xs rounded-md text-white border-2 border-gray-400 focus:border-2 focus:border-gray-400 focus:ring-0  transition'  type="text" value={quizId} onChange={(e)=>setQuizId(e.target.value)} />
          <button onClick={handleClick} className='text-white text-xs absolute  font-medium z-10 right-0 rounded-r-md bg-green-500 h-full border-2 border-l-0 p-2 border-gray-400 '>GO</button>
        </div> */}
        <div className='flex space-x-6 items-center'>
          <button onClick={()=>navigate("/create/quiz")} className='py-2 px-4 hidden md:block bg-white dark:text-white dark:bg-pink-600 rounded-md text-sm font-medium hover:scale-105 transition'>Create</button>
          <Link to={"/profile"}>
          <svg className='text-white dark:text-pink-600 hover:scale-105 transition' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M5.85 17.1q1.275-.975 2.85-1.537T12 15q1.725 0 3.3.563t2.85 1.537q.875-1.025 1.363-2.325T20 12q0-3.325-2.337-5.663T12 4Q8.675 4 6.337 6.338T4 12q0 1.475.488 2.775T5.85 17.1M12 13q-1.475 0-2.488-1.012T8.5 9.5q0-1.475 1.013-2.488T12 6q1.475 0 2.488 1.013T15.5 9.5q0 1.475-1.012 2.488T12 13m0 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>
          </Link>
        </div>
        {/* {
          dailog ? 
          <section className='flex transition ease-in-out justify-center items-center absolute left-0 w-full h-screen top-0 bg-black bg-opacity-60'>
          <div className=' border rounded-lg bg-white w-96 p-9 relative'>
            <svg className='absolute right-0 top-0 m-3 text-red-600 hover:scale-105 transition' onClick={()=>setdailog(!dailog)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m8.4 17l3.6-3.6l3.6 3.6l1.4-1.4l-3.6-3.6L17 8.4L15.6 7L12 10.6L8.4 7L7 8.4l3.6 3.6L7 15.6zm3.6 5q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>
            <div className='my-6'>
              <input className='border-none focus:ring-0 placeholder:uppercase' type="text" placeholder='Input Quiz title' onChange={(e)=>settitle(e.target.value)} />
              <Link to={`/create/quiz/${title}`} className='py-2 px-4 rounded-lg bg-purple-600 text-white hover:scale-105 transition font-medium'>Continue</Link>
            
            </div>
          </div>
        </section>
          :
          null
        } */}

    </nav>
  )
}
