import React, { useState } from 'react'
import {BsFacebook, BsPencilSquare, BsWhatsapp, } from 'react-icons/bs'
import {FaViber} from 'react-icons/fa'
import {FiPhoneCall} from 'react-icons/fi'
import {TfiEmail} from 'react-icons/tfi'
import Contact from './input/Contact'

const ContactInfo = () => {
  // Edit form open
  const [open, setOpen] = useState(false)

  return (
    <>
    <div className='glass mt-10 p-4 relative'>
      <BsPencilSquare onClick={()=>setOpen(true)} className='text-blue-400 text-xl cursor-pointer absolute right-2 top-2 hover:text-blue-800'/>
      <div>
        <h1 className=' text-gray-500 underline mb-4'>Contact Info</h1>
        <div className=' space-y-3'>
          <div className='flex items-center gap-4'>
            <TfiEmail className='text-2xl' />
            <div>
              <div>Email:</div>
              <a href='mailto:doejohn@gmail.com'>doejohn@gmail.com</a>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <FiPhoneCall className='text-2xl' />
            <div>
              <div>Phone:</div>
              <div>+977 982423532</div>
            </div>
          </div>
        </div>
      </div>
    </div>
      {open && <Contact setOpen={setOpen} />}
    </>
  )
}

export default ContactInfo