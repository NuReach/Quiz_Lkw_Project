import React from 'react'
import AdminNavbar from '../../Components/Admin-Component/AdminNavbar'
import AdminSiderbar from '../../Components/Admin-Component/AdminSidebar'
import Footer from '../../Components/Footer/Footer'
import { useForm } from 'react-hook-form';
import { createUserApi } from '../../Api/Authentication';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function AdminUserCreatePage() {
  const navigate = useNavigate();
  const {register , handleSubmit , watch ,formState: { errors }  } = useForm();
  const onsubmit = async (data)=>{
    await createUserMutation(data);
  };
  const { mutateAsync  : createUserMutation   } = useMutation({
    mutationFn : createUserApi,
    onSuccess : ()=>{
      toast.success("Create Successfully")
      navigate('/admin/user/page');
    },
    onError : ()=>{
        toast.error("Something went wrong !!")
    }
  })
  return (
    <div>
      <AdminNavbar />
      <div className='flex'>
        <AdminSiderbar />
        <div className='p-3 w-full flex justify-center items-center'>
        <form  onSubmit={handleSubmit(onsubmit)} className='w-full md:w-1/2 lg:w-1/3 p-6 py-12 border-2 rounded-lg flex flex-col gap-3'>
            <p className='font-bold text-lg'>Create User</p>
            <div className='mt-3'>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">Name</label>
                <input {...register("name", { required: "Name is required" })} type="text" id="name" name="name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                <div className='h-3 mt-1'>
                    {errors.name && <div className='text-xs text-red-600'>{errors.name.message}</div>}
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                <input {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" }  })} type="text" id="email" name="email" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                <div className='h-3 mt-1'>
                    {errors.email && <div className='text-xs text-red-600'>{errors.email.message}</div>}
                </div>
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                <input {...register("password", { required: "Password is required" })} type="password" id="password" name="password" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                <div className='h-3 mt-1'>
                    {errors.password && <div className='text-xs text-red-600'>{errors.password.message}</div>}
                </div>
            </div>
            <div>
                <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900">Confirm Password</label>
                <input {...register("confirmPassword", { required: "Please confirm password", validate: value => value === watch('password') || "Passwords do not match" })} type="password" id="confirmPassword" name="confirmPassword" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                <div className='h-3 mt-1'>
                    {errors.confirmPassword && <div className='text-xs text-red-600'>{errors.confirmPassword.message}</div>}
                </div>
            </div>
            <div>
                <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">Role</label>
                <select {...register("role", { required: "Role is required" })} id="role" name="role" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg sm:text-xs focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Select a role</option>
                    <option value="admin">Admin</option>
                    <option value="teacher">Teacher</option>
                    <option value="user">User</option>
                </select>
                <div className='h-3 mt-1'>
                    {errors.role && <div className='text-xs text-red-600'>{errors.role.message}</div>}
                </div>
            </div>
            <div>
                <input type="submit" value="Submit" className="block w-full px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg cursor-pointer hover:bg-blue-600" />
            </div>
        </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}
