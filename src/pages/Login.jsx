import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import { loginApi } from '../Api/Authentication';
import { toast } from 'sonner';


export default function Login() {
    const {register , handleSubmit , formState: { errors }  } = useForm();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const user = JSON.parse(localStorage.getItem('userData'));

    const onSubmit = async ( data )=>{
        const userData  = await login ( data );
        queryClient.invalidateQueries(['user']);
        if (userData && userData.role == "teacher") {
            navigate("/teacher/dashboard");
        }else if (userData && userData.role == "user"){
            navigate("/");
        }else{
            navigate("/admin/notification/page");
        }
    }

    const { mutateAsync : login , isPending , data   } = useMutation({
        mutationFn : loginApi,
        onSuccess : ()=>{
          toast.success("Login Successfully")
        },
        onError : ()=>{
            toast.error("Please feild the correct information")
        }
      })
    

  return (
    <div className='flex'>
        <div className=' hidden md:w-1/2 md:h-screen bg-black md:flex md:justify-center md:items-center'>
            <img className='w-80' src="https://upload.wikimedia.org/wikipedia/commons/0/00/Limkokwing.jpg" alt="" />
        </div>
        <div className='w-full h-screen md:w-1/2 justify-center items-center flex px-9'>
        <form className="bg-white w-96" onSubmit={handleSubmit(onSubmit)}>
                <img className='mb-3 md:hidden rounded-lg' src="https://upload.wikimedia.org/wikipedia/commons/0/00/Limkokwing.jpg" alt="" />
                <div className=''>
                    <h1 className="text-gray-800 font-bold text-lg mb-1">Hello again!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-3">Welcome back!</p>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2 mt-9">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                        </svg>
                        <input {...register("email", { required : "Email is required" , pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}  className="pl-2 outline-none border-none focus:ring-0" type="text" name="email" id="" placeholder="Email Address" />
                    </div>
                    <div className='h-6'>
                        {errors.email && <div className='text-xs text-red-600 pl-3'>{errors.email.message}</div> }
                        {errors.email && errors.email.type === "pattern" && <p className="text-red-500 text-xs pl-3">Please enter a valid email address</p>}
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        <input {...register("password",{required : "Password is required"})}  className="pl-2 outline-none border-none focus:ring-0" type="password" name="password" id="" placeholder="Password" />
                    </div>
                    <div className='h-6'>

                    {errors.password && <div className='text-xs text-red-600 pl-3'>{errors.password.message}</div> }
                    </div>
                    <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">{isPending ? "Loading..." : "Login"}</button>
                    <Link to={"/signup"} className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Create new account ?</Link>
                </div>
            </form>
        </div>
    </div>
  )
}
