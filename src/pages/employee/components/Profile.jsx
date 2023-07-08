import React, { useState } from 'react'
import { BsPencilSquare } from 'react-icons/bs'
import ProfileForm from './input/ProfileForm'

const Profile = () => {
  const [open, setOpen] = useState(false)

  return (
  <>
    <div className='bg-gray-100 backdrop-filter backdrop-blur-md shadow-sm'>
      <div className='relative'>
        <div>
          <img className='h-80 w-full object-cover rounded-lg' src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <BsPencilSquare className='text-blue-400 text-xl cursor-pointer absolute right-2 top-2 hover:text-blue-800' />
        </div>
        <img className='absolute mx-auto top-48 shadow-lg left-5 w-40 h-40 object-cover rounded-full border-2 border-green-500' src="https://images.pexels.com/photos/859264/pexels-photo-859264.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <BsPencilSquare className='text-blue-400 text-xl cursor-pointer absolute left-40 top-56 hover:text-blue-800' />
        <div className='mt-12 px-4 pb-4 relative'>
          <BsPencilSquare onClick={()=>setOpen(true)} className='text-blue-400 text-xl cursor-pointer absolute right-2 -top-6 hover:text-blue-800' />
          <h1 className='text-3xl'>John Doe</h1>
          <div>Senior Data Aanalyst</div>
          <div>Newyork City.</div>
          <div className='text-white font-bold'><span className='bg-blue-500 px-2 rounded-md'>Job Seeking</span><span className='bg-green-500 px-2 rounded-md ml-2'>Employeed</span></div>
        </div>
      </div>
    </div>
    {open && <ProfileForm setOpen={setOpen} />}
  </>
  )
}

export default Profile