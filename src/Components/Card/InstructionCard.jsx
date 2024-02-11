import React from 'react'
import StartBtn from '../Button/StartBtn'

export default function InstructionCard() {
  return (
            <div className=' w-full flex flex-col rounded-md md:w-96 p-6 shadow-lg border mt-3'>
                <div>
                    <p className='font-medium text-lg'>Instruction Warning</p>
                    <div className='text-sm flex flex-col space-y-2'>
                        <p>-Turn off all electronic devices and keep them out of sight.</p>
                        <p>-Read each question carefully before answering.</p>
                        <p>-Manage your time wisely and budget sufficient time for each section.</p>
                        <p>-If you have any questions during the exam, please raise your hand and a proctor will assist you.</p>
                    </div>
                </div>
                <div>         
                    <StartBtn />
                </div>
            </div>
  )
}
