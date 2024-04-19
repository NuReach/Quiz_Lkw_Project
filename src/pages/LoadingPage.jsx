import { motion } from 'framer-motion'
import React from 'react'
import { Link } from 'react-router-dom'

export default function LoadingPage() {
   
  return (
    <div className='bg-black w-screen h-screen flex justify-center items-center text-white'>
        <Link to={"/teacher/dashboard"}>
        <img className='w-96 object-cover' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Limkokwing_Corporate_Logo_2018.png" alt="" />
        </Link>
    </div>
  )
}
