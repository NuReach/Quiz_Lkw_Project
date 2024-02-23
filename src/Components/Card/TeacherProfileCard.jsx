import React from 'react'
import { Link } from 'react-router-dom'

export default function TeacherProfileCard() {
  return (
    <div className=' w-full  sm:w-80 md:w-96 flex flex-col rounded-lg p-3 border shadow-lg relative h-96 max-h-96'>
        <div className='absolute -top-9'>
            <p className='font-bold text-lg'>Dashboard</p>
        </div>
        <div className='relative'>
            <Link to={"/teacher/dashboard"}>
                <img className='w-full h-36 object-cover' src="https://upload.wikimedia.org/wikipedia/commons/0/08/Limkokwing_Corporate_Logo_2018.png" alt="" />
            </Link>
        </div>
        <div className=' mt-3 flex space-x-3 items-center'>
            <div className='border p-1 rounded-lg bg-white shadow-lg w-fit'>
                <img className='w-24 h-26 rounded-md' src="https://media.licdn.com/dms/image/C4D03AQGN45a9_qXexg/profile-displayphoto-shrink_200_200/0/1614820492981?e=2147483647&v=beta&t=V5F_lF_AGnvP7R43oLNesvqensIRx4QcgdvgP_sKqN4" alt="" />
            </div>
            <div className='w-full mt-1 flex flex-col'>
                <div className='bg-gray-400 text-white p-1 w-full'>
                    <p className='font-bold text-xs '>Name : Hov Vathana</p>
                </div>
                <div className='p-1 bg-black bg-opacity-15'>
                    <p className='font-bold text-xs '>Role : Teacher </p>
                </div>
            </div>
        </div>
        <div className='mt-3 flex flex-wrap gap-3 justify-between'>
            <div className=' border-2 rounded-lg shadow-lg p-2 '   >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 17.32q1.215-.68 2.453-.98q1.237-.302 2.547-.302q.9 0 1.618.112q.719.112 1.267.296q.23.096.423-.029q.192-.125.192-.394V7.008q0-.173-.096-.308t-.327-.23q-.825-.293-1.501-.4q-.676-.108-1.576-.108q-1.31 0-2.613.386q-1.304.387-2.387 1.16zm-.5 1.136q-.235 0-.432-.059t-.376-.15q-1.09-.595-2.27-.902q-1.182-.307-2.422-.307q-.78 0-1.534.131q-.753.131-1.466.42q-.544.217-1.022-.131T2 16.496V6.831q0-.371.195-.689q.195-.317.547-.442q.887-.383 1.836-.56q.949-.178 1.922-.178q1.47 0 2.866.423q1.397.423 2.634 1.23q1.237-.807 2.634-1.23q1.397-.423 2.866-.423q.973 0 1.922.177q.95.178 1.836.561q.352.125.547.442q.195.318.195.689v9.665q0 .614-.516.942q-.517.33-1.1.112q-.694-.27-1.418-.39q-.724-.122-1.466-.122q-1.24 0-2.421.307t-2.271.901q-.18.092-.376.151q-.197.059-.432.059m1.885-9.508q0-.11.076-.222q.076-.113.18-.168q.763-.346 1.613-.53q.85-.182 1.746-.182q.48 0 .91.053q.43.053.886.153q.129.03.224.135q.095.103.095.257q0 .252-.15.366q-.15.113-.402.052q-.369-.075-.756-.103q-.388-.028-.807-.028q-.804 0-1.573.154t-1.46.43q-.257.098-.42-.005q-.162-.104-.162-.362m0 5.423q0-.11.076-.232q.076-.122.18-.177q.724-.347 1.613-.52q.888-.173 1.746-.173q.48 0 .91.053q.43.053.886.153q.129.03.224.135q.095.103.095.257q0 .252-.15.366q-.15.113-.402.052q-.369-.075-.756-.103q-.388-.028-.807-.028q-.785 0-1.544.16q-.76.161-1.45.457q-.258.117-.44-.003q-.181-.12-.181-.397m0-2.692q0-.11.076-.222q.076-.113.18-.169q.763-.346 1.613-.528q.85-.183 1.746-.183q.48 0 .91.053q.43.053.886.153q.129.03.224.134q.095.104.095.258q0 .252-.15.365q-.15.114-.402.052q-.369-.075-.756-.103q-.388-.027-.807-.027q-.804 0-1.573.153q-.77.154-1.46.431q-.257.098-.42-.006q-.162-.103-.162-.361"/></svg>
                <p className='font-bold text-lg'>150</p>
                <p className='text-xs text-gray-500 font-medium'>Questions</p>
            </div>           
            <div className=' border-2 rounded-lg shadow-lg p-2 '   >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 17.32q1.215-.68 2.453-.98q1.237-.302 2.547-.302q.9 0 1.618.112q.719.112 1.267.296q.23.096.423-.029q.192-.125.192-.394V7.008q0-.173-.096-.308t-.327-.23q-.825-.293-1.501-.4q-.676-.108-1.576-.108q-1.31 0-2.613.386q-1.304.387-2.387 1.16zm-.5 1.136q-.235 0-.432-.059t-.376-.15q-1.09-.595-2.27-.902q-1.182-.307-2.422-.307q-.78 0-1.534.131q-.753.131-1.466.42q-.544.217-1.022-.131T2 16.496V6.831q0-.371.195-.689q.195-.317.547-.442q.887-.383 1.836-.56q.949-.178 1.922-.178q1.47 0 2.866.423q1.397.423 2.634 1.23q1.237-.807 2.634-1.23q1.397-.423 2.866-.423q.973 0 1.922.177q.95.178 1.836.561q.352.125.547.442q.195.318.195.689v9.665q0 .614-.516.942q-.517.33-1.1.112q-.694-.27-1.418-.39q-.724-.122-1.466-.122q-1.24 0-2.421.307t-2.271.901q-.18.092-.376.151q-.197.059-.432.059m1.885-9.508q0-.11.076-.222q.076-.113.18-.168q.763-.346 1.613-.53q.85-.182 1.746-.182q.48 0 .91.053q.43.053.886.153q.129.03.224.135q.095.103.095.257q0 .252-.15.366q-.15.113-.402.052q-.369-.075-.756-.103q-.388-.028-.807-.028q-.804 0-1.573.154t-1.46.43q-.257.098-.42-.005q-.162-.104-.162-.362m0 5.423q0-.11.076-.232q.076-.122.18-.177q.724-.347 1.613-.52q.888-.173 1.746-.173q.48 0 .91.053q.43.053.886.153q.129.03.224.135q.095.103.095.257q0 .252-.15.366q-.15.113-.402.052q-.369-.075-.756-.103q-.388-.028-.807-.028q-.785 0-1.544.16q-.76.161-1.45.457q-.258.117-.44-.003q-.181-.12-.181-.397m0-2.692q0-.11.076-.222q.076-.113.18-.169q.763-.346 1.613-.528q.85-.183 1.746-.183q.48 0 .91.053q.43.053.886.153q.129.03.224.134q.095.104.095.258q0 .252-.15.365q-.15.114-.402.052q-.369-.075-.756-.103q-.388-.027-.807-.027q-.804 0-1.573.153q-.77.154-1.46.431q-.257.098-.42-.006q-.162-.103-.162-.361"/></svg>
                <p className='font-bold text-lg'>15</p>
                <p className='text-xs text-gray-500 font-medium'>Courses</p>
            </div>
            <div className=' border-2 rounded-lg shadow-lg p-2 '   >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 17.32q1.215-.68 2.453-.98q1.237-.302 2.547-.302q.9 0 1.618.112q.719.112 1.267.296q.23.096.423-.029q.192-.125.192-.394V7.008q0-.173-.096-.308t-.327-.23q-.825-.293-1.501-.4q-.676-.108-1.576-.108q-1.31 0-2.613.386q-1.304.387-2.387 1.16zm-.5 1.136q-.235 0-.432-.059t-.376-.15q-1.09-.595-2.27-.902q-1.182-.307-2.422-.307q-.78 0-1.534.131q-.753.131-1.466.42q-.544.217-1.022-.131T2 16.496V6.831q0-.371.195-.689q.195-.317.547-.442q.887-.383 1.836-.56q.949-.178 1.922-.178q1.47 0 2.866.423q1.397.423 2.634 1.23q1.237-.807 2.634-1.23q1.397-.423 2.866-.423q.973 0 1.922.177q.95.178 1.836.561q.352.125.547.442q.195.318.195.689v9.665q0 .614-.516.942q-.517.33-1.1.112q-.694-.27-1.418-.39q-.724-.122-1.466-.122q-1.24 0-2.421.307t-2.271.901q-.18.092-.376.151q-.197.059-.432.059m1.885-9.508q0-.11.076-.222q.076-.113.18-.168q.763-.346 1.613-.53q.85-.182 1.746-.182q.48 0 .91.053q.43.053.886.153q.129.03.224.135q.095.103.095.257q0 .252-.15.366q-.15.113-.402.052q-.369-.075-.756-.103q-.388-.028-.807-.028q-.804 0-1.573.154t-1.46.43q-.257.098-.42-.005q-.162-.104-.162-.362m0 5.423q0-.11.076-.232q.076-.122.18-.177q.724-.347 1.613-.52q.888-.173 1.746-.173q.48 0 .91.053q.43.053.886.153q.129.03.224.135q.095.103.095.257q0 .252-.15.366q-.15.113-.402.052q-.369-.075-.756-.103q-.388-.028-.807-.028q-.785 0-1.544.16q-.76.161-1.45.457q-.258.117-.44-.003q-.181-.12-.181-.397m0-2.692q0-.11.076-.222q.076-.113.18-.169q.763-.346 1.613-.528q.85-.183 1.746-.183q.48 0 .91.053q.43.053.886.153q.129.03.224.134q.095.104.095.258q0 .252-.15.365q-.15.114-.402.052q-.369-.075-.756-.103q-.388-.027-.807-.027q-.804 0-1.573.153q-.77.154-1.46.431q-.257.098-.42-.006q-.162-.103-.162-.361"/></svg>
                <p className='font-bold text-lg'>150</p>
                <p className='text-xs text-gray-500 font-medium'>Student</p>
            </div>           
            <div className=' border-2 rounded-lg shadow-lg p-2 '   >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="currentColor" d="M12.5 17.32q1.215-.68 2.453-.98q1.237-.302 2.547-.302q.9 0 1.618.112q.719.112 1.267.296q.23.096.423-.029q.192-.125.192-.394V7.008q0-.173-.096-.308t-.327-.23q-.825-.293-1.501-.4q-.676-.108-1.576-.108q-1.31 0-2.613.386q-1.304.387-2.387 1.16zm-.5 1.136q-.235 0-.432-.059t-.376-.15q-1.09-.595-2.27-.902q-1.182-.307-2.422-.307q-.78 0-1.534.131q-.753.131-1.466.42q-.544.217-1.022-.131T2 16.496V6.831q0-.371.195-.689q.195-.317.547-.442q.887-.383 1.836-.56q.949-.178 1.922-.178q1.47 0 2.866.423q1.397.423 2.634 1.23q1.237-.807 2.634-1.23q1.397-.423 2.866-.423q.973 0 1.922.177q.95.178 1.836.561q.352.125.547.442q.195.318.195.689v9.665q0 .614-.516.942q-.517.33-1.1.112q-.694-.27-1.418-.39q-.724-.122-1.466-.122q-1.24 0-2.421.307t-2.271.901q-.18.092-.376.151q-.197.059-.432.059m1.885-9.508q0-.11.076-.222q.076-.113.18-.168q.763-.346 1.613-.53q.85-.182 1.746-.182q.48 0 .91.053q.43.053.886.153q.129.03.224.135q.095.103.095.257q0 .252-.15.366q-.15.113-.402.052q-.369-.075-.756-.103q-.388-.028-.807-.028q-.804 0-1.573.154t-1.46.43q-.257.098-.42-.005q-.162-.104-.162-.362m0 5.423q0-.11.076-.232q.076-.122.18-.177q.724-.347 1.613-.52q.888-.173 1.746-.173q.48 0 .91.053q.43.053.886.153q.129.03.224.135q.095.103.095.257q0 .252-.15.366q-.15.113-.402.052q-.369-.075-.756-.103q-.388-.028-.807-.028q-.785 0-1.544.16q-.76.161-1.45.457q-.258.117-.44-.003q-.181-.12-.181-.397m0-2.692q0-.11.076-.222q.076-.113.18-.169q.763-.346 1.613-.528q.85-.183 1.746-.183q.48 0 .91.053q.43.053.886.153q.129.03.224.134q.095.104.095.258q0 .252-.15.365q-.15.114-.402.052q-.369-.075-.756-.103q-.388-.027-.807-.027q-.804 0-1.573.153q-.77.154-1.46.431q-.257.098-.42-.006q-.162-.103-.162-.361"/></svg>
                <p className='font-bold text-lg'>15</p>
                <p className='text-xs text-gray-500 font-medium'>Exams</p>
            </div>
        </div>
    </div>
  )
}