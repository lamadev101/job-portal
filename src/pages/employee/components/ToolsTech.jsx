import React, { useState } from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import Skills from './input/Skills'

const ToolsTech = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
    <div className='glass mt-10 p-4 relative'>
      <BsPencilSquare onClick={()=>setOpen(true)} className='text-blue-400 text-xl cursor-pointer absolute right-2 top-2 hover:text-blue-800'/>
      <div>
        <h1 className='text-gray-500 underline'>Skills</h1>
      </div>
    </div>
    {open && <Skills setOpen={setOpen}/>}
    </>
  )
}

export default ToolsTech