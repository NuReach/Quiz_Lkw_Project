import React from 'react'
import { Link } from 'react-router-dom'

export default function NewsTable() {
  return (
    <div >
    <section className='mt-3 w-full flex justify-center items-center '>
        <p className='font-medium text-lg '>Total News : 16 </p>  
        <button className='px-3 py-1 text-white font-medium text-sm rounded-md bg-purple-600 mx-3 hover:scale-105 transition'>Add</button>   
    </section>
    <section className='mt-3 w-full flex justify-center items-center '  >
        <div className='w-80 md:w-96 lg:w-full overflow-x-scroll'>
            <table  className=' text-sm text-left border shadow-lg w-full'>
                <thead className='text-xs text-white uppercase bg-green-500'>
                    <tr>
                        <th scope="col" className="px-6 py-3 w-6">
                            No.
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Autor
                        </th>
                        <th scope="col" className="px-6 py-3 ">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>  
                    </tr>
                </thead>
                <tbody>
                    <tr  className='odd:bg-white even:bg-gray-50 border-b'>
                        <td className="px-6 py-4">
                            1
                        </td>
                        <td className="px-6 py-4 ">
                            <p className='line-clamp-1'>News One</p>
                        </td>
                        <td className="px-6 py-4 ">
                            <p className='line-clamp-1'>Hot</p>
                        </td>
                        <td className="px-6 py-4 ">
                            <p className='line-clamp-1'>Reach</p>
                        </td>
                        <td className="px-6 py-4 ">
                            <p className='line-clamp-1'>2024-15-03</p>
                        </td>
                        <td className="px-6 py-4 flex items-center space-x-3">
                        <button>
                        <svg className='hover:scale-105' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 72 72"><path fill="#FFF" d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4"/><path fill="#9b9b9a" d="M51 37v20.621L48.3 60H33z"/><path fill="#FFF" d="M17 16h38v4H17z"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55"/></svg>
                        </button>
                        <Link href={"/"} >
                        <svg className='hover:scale-105' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="#45413c" d="M.87 45.22a23.13 1.78 0 1 0 46.26 0a23.13 1.78 0 1 0-46.26 0" opacity=".15"/><path fill="#bdbec0" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M45 12.57a1.18 1.18 0 0 0-1.19-1.18H10.62V44H42a3 3 0 0 0 3-3Z"/><path fill="#f0f0f0" d="M39.67 41.63A2.37 2.37 0 0 0 42 44H5.87a2.37 2.37 0 0 1-2.37-2.37V6.05a1.18 1.18 0 0 1 1.19-1.18h33.79a1.18 1.18 0 0 1 1.19 1.18Z"/><path fill="#e0e0e0" d="M42 44a2.37 2.37 0 0 1-2.37-2.37v-.89H5.87a2.37 2.37 0 0 1-2.37-2.37v3.26A2.37 2.37 0 0 0 5.87 44Z"/><path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M39.67 41.63A2.37 2.37 0 0 0 42 44H5.87a2.37 2.37 0 0 1-2.37-2.37V6.05a1.18 1.18 0 0 1 1.19-1.18h33.79a1.18 1.18 0 0 1 1.19 1.18Z"/><path fill="#87898c" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M7.06 9.02h28.46v6.52H7.06Zm.59 10.08h15.42v15.42H7.65Z"/><path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M26.63 27.14h8.89m-8.89-3.68h8.89m-8.89-3.69h8.89m-8.89 11.06h8.89m-8.89 3.68h8.89M7.65 39.26h27.87"/><path fill="#bdbec0" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M18.82 28a13.43 13.43 0 0 1-1.27-4a.59.59 0 0 0-.59-.56h-2.9a.57.57 0 0 0-.58.49a18.34 18.34 0 0 1-1.23 3.74A13.34 13.34 0 0 1 7.65 33v.18A1.34 1.34 0 0 0 9 34.51h12.72a1.35 1.35 0 0 0 1.35-1.35v-1A9.31 9.31 0 0 1 18.82 28"/></svg>
                        </Link>
                        </td>
                    </tr>
                    <tr  className='odd:bg-white even:bg-gray-50 border-b'>
                        <td className="px-6 py-4">
                            2
                        </td>
                        <td className="px-6 py-4 ">
                            <p className='line-clamp-1'>Data Structure</p>
                        </td>
                        <td className="px-6 py-4 ">
                            <p className='line-clamp-1'>Reach</p>
                        </td>
                        <td className="px-6 py-4 ">
                            <p className='line-clamp-1'>Mobile</p>
                        </td>
                        <td className="px-6 py-4 ">
                            <p className='line-clamp-1'>2024-15-03</p>
                        </td>
                        <td className="px-6 py-4 flex items-center space-x-3">
                        <button>
                        <svg className='hover:scale-105' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 72 72"><path fill="#FFF" d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4"/><path fill="#9b9b9a" d="M51 37v20.621L48.3 60H33z"/><path fill="#FFF" d="M17 16h38v4H17z"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55"/></svg>
                        </button>
                        <Link href={"/"} >
                        <svg className='hover:scale-105' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48"><path fill="#45413c" d="M.87 45.22a23.13 1.78 0 1 0 46.26 0a23.13 1.78 0 1 0-46.26 0" opacity=".15"/><path fill="#bdbec0" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M45 12.57a1.18 1.18 0 0 0-1.19-1.18H10.62V44H42a3 3 0 0 0 3-3Z"/><path fill="#f0f0f0" d="M39.67 41.63A2.37 2.37 0 0 0 42 44H5.87a2.37 2.37 0 0 1-2.37-2.37V6.05a1.18 1.18 0 0 1 1.19-1.18h33.79a1.18 1.18 0 0 1 1.19 1.18Z"/><path fill="#e0e0e0" d="M42 44a2.37 2.37 0 0 1-2.37-2.37v-.89H5.87a2.37 2.37 0 0 1-2.37-2.37v3.26A2.37 2.37 0 0 0 5.87 44Z"/><path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M39.67 41.63A2.37 2.37 0 0 0 42 44H5.87a2.37 2.37 0 0 1-2.37-2.37V6.05a1.18 1.18 0 0 1 1.19-1.18h33.79a1.18 1.18 0 0 1 1.19 1.18Z"/><path fill="#87898c" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M7.06 9.02h28.46v6.52H7.06Zm.59 10.08h15.42v15.42H7.65Z"/><path fill="none" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M26.63 27.14h8.89m-8.89-3.68h8.89m-8.89-3.69h8.89m-8.89 11.06h8.89m-8.89 3.68h8.89M7.65 39.26h27.87"/><path fill="#bdbec0" stroke="#45413c" strokeLinecap="round" strokeLinejoin="round" d="M18.82 28a13.43 13.43 0 0 1-1.27-4a.59.59 0 0 0-.59-.56h-2.9a.57.57 0 0 0-.58.49a18.34 18.34 0 0 1-1.23 3.74A13.34 13.34 0 0 1 7.65 33v.18A1.34 1.34 0 0 0 9 34.51h12.72a1.35 1.35 0 0 0 1.35-1.35v-1A9.31 9.31 0 0 1 18.82 28"/></svg>
                        </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
       
    </section>
</div>
  )
}
