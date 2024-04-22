import React, { useState } from 'react'
import ProfileCard from './ProfileCard'
import { toast } from 'sonner';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUserApi } from '../../Api/Authentication';

export default function InformationDetail({user}) {
    const [img,setImg] = useState(null);
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const queryClinet = useQueryClient();
    const save = async (e)=>{
        e.preventDefault();
        setLoading(true);
        const formData = new FormData();
        formData.append('file', img);
        formData.append('upload_preset', 'pwgyap0d_lkw');
        try {
            const response = await fetch(
              'https://api.cloudinary.com/v1_1/dt5rv45ac/image/upload',
              {
                method: 'POST',
                body: formData,
              }
            );
            const data = await response.json();
            setImageUrl(data.secure_url);
            await updateUserMutation({name:user?.name,email:user?.email,id:user?.id,role:user?.role,user_image:data.secure_url})
            setLoading(false);
          } catch (error) {
            console.error('Error uploading image: ', error);
            setLoading(false);
          }
        toast.success('Your infoamtion have been saved')
    }
    const { mutateAsync : updateUserMutation , isPending    } = useMutation({
        mutationFn : updateUserApi,
        onSuccess : ()=>{
          toast.success("Updated Successfully");
          queryClinet.invalidateQueries(['user']);
          
        },
        onError : ()=>{
            toast.error("Please feild the correct information")
        }
      })
  return (
    <div className='shadow-lg rounded-lg p-6 w-full sm:w-60 md:w-72 lg:w-80 xl:w-96'>
        <section className='border-b pb-3 mt-3'>
            <p className='text-sm font-medium'>User Detail </p>
        </section>
        <section className='mt-3 space-y-3'>
            <div>
                <p className='text-sm font-medium'>Account Type </p>
                <input type="text" value={user?.role} disabled className='w-full border shadow-sm text-xs border-gray-200 rounded-md mt-2 bg-gray-100 capitalize' />
            </div>
            <div>
            <div>
                <p className='text-sm font-medium'>Change Image</p>
                <input type="file" onChange={(e)=>setImg(e.target.files[0])}   className='w-full shadow-sm text-xs border border-gray-200 rounded-md mt-2' />
            </div>
            </div>
            <button onClick={save} className='px-3 py-2  text-white font-medium text-sm rounded-md bg-blue-600 hover:scale-105 transition'>{
                loading ? "Loading..." : "Save"
            }</button>   
        </section>
    </div>
  )
}
