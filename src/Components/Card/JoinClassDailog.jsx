import { motion } from 'framer-motion';
import React from 'react'
import { createPortal } from 'react-dom';
import { modalContainer } from '../../animation';
import { addCourseToStudentApi } from '../../Api/CourseApi';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';

export default function JoinClassDailog({setModal,modal,content}) {
const mountElemet = document.getElementById("modal");
const close = (e)=>{
    e.preventDefault();
    setModal(!modal);
};

const queryClient = useQueryClient();

const joinClassBtn = async ()=>{
    setModal(!modal);
    await addCourseStudentMutation(content.id);
}
const { mutateAsync : addCourseStudentMutation   } = useMutation({
    mutationFn : addCourseToStudentApi,
    onSuccess : ()=>{
      toast.success("Join Course Successfully")
      queryClient.invalidateQueries(['studentCourse']);
    },
    onError : ()=>{
        toast.error("Sorry, Something went wrong !!")
    }
  })
  return createPortal(
    <div  className=" bg-white portal-wrapper w-full h-full absolute top-0 right-0 flex  justify-center items-center z-10">
            <div className="relative p-4 w-full max-w-md max-h-full ">
                <motion.div
                    variants={modalContainer}
                    initial = "hidden"
                    animate = "visible"
                    exit="exit"
                     className="relative bg-white rounded-lg  border-2 dark:bg-gray-700 shadow-lg">
                    <button onClick={close} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="p-4 md:p-5 text-center">
                        <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to Join This Class?</h3>
                        <button onClick={joinClassBtn} data-modal-hide="popup-modal" type="button" className="text-white bg-green-500 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
                            Yes, I'm sure
                        </button>
                        <button onClick={close} data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                    </div>
                </motion.div>
            </div>
        </div>        ,
        mountElemet
  )
}
