import { TextField } from '@mui/material'
import React from 'react'
import {IoMdCloseCircle} from 'react-icons/io'
import {motion} from 'framer-motion'

const contactVariants = {
  hidden:{
    opacity:0,
    y:'100vh',
  },
  visible:{
    opacity:1,
    y:0,
    transiton:{
      duration:5
    }
  }
}

const Contact = ({setOpen}) => {
  return (
    <motion.div variants={contactVariants} initial="hidden" animate="visible" className='fixed top-0 left-0 h-screen w-full glass z-50 flex items-center justify-center'>
      <div className='bg-white w-1/3 p-6 border border-green-500 rounded-md shadow-md relative'>
        <IoMdCloseCircle className='absolute right-2 top-3 text-2xl text-gray-300 hover:text-gray-500 cursor-pointer' onClick={()=>setOpen(false)} />
        <h1 className='text-2xl'>Contact Info</h1>
        <hr />
        <form action="" className='space-y-4 mt-6'>
          <TextField type="email" name='email' label="Email" variant='outlined' fullWidth required />
          <TextField type="number" name='contact' label="Phone Number" variant='outlined' fullWidth required />
          <button type='submit' className='bg-green-500 px-4 py-2 text-white hover:bg-green-600 rounded-lg'>Save</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Contact