import { FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material'
import React from 'react'
import { IoMdCloseCircle } from 'react-icons/io'
import { motion } from 'framer-motion'

const contactVariants = {
  hidden: {
    opacity: 0,
    y: '100vh',
  },
  visible: {
    opacity: 1,
    y: 0,
    transiton: {
      duration: 5
    }
  }
}

const ProfileForm = ({ setOpen }) => {
  return (
    <motion.div variants={contactVariants} initial="hidden" animate="visible" className='fixed top-0 left-0 h-screen w-full glass z-50 flex items-center justify-center'>
      <div className='bg-white w-1/3 p-6 border border-green-500 rounded-md shadow-md relative'>
        <IoMdCloseCircle className='absolute right-2 top-3 text-2xl text-gray-300 hover:text-gray-500 cursor-pointer' onClick={() => setOpen(false)} />
        <h1 className='text-2xl'>Edit/Update Profile</h1>
        <hr />
        <form action="" className='space-y-4 mt-6'>
          <div className='flex items-center justify-between gap-2'>
            <TextField name="fname" label="First Name" autoFocus half />
            <TextField name="lname" label="Last Name" half />
          </div>
          <TextField type="text" name='address' label="Address" variant='outlined' fullWidth required />
          <TextField type="text" name='company' label="Company" variant='outlined' fullWidth />
          <TextField type="text" name='job' label="Post" variant='outlined' fullWidth />
          <div className='flex items-center gap-4 mb-6'>
            <FormLabel id="status">Status:</FormLabel>
            <RadioGroup aria-labelledby="status" name="status"  row>
              <FormControlLabel value="accept" control={<Radio />} label="Employeed" />
              <FormControlLabel value="pending" control={<Radio />} label="Job Seeking" />
            </RadioGroup>
          </div>
          <button type='submit' className='bg-green-500 px-4 py-2 text-white hover:bg-green-600 rounded-lg'>Save</button>
        </form>
      </div>
    </motion.div>
  )
}

export default ProfileForm