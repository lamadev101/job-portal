import { TextField } from '@mui/material'
import { useRef, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
  const ref = useRef()

  return (
    <main className='itemCenter px-4 md:0'>
      <div className='w-[600px] py-10'>
        <h1 className='text-2xl mb-4'>Contact Us</h1>
        <p>Connect with Us Today - Let's Get in Touch!. We're here to help. </p>
        <div className='relative mt-12'>
          <div className='p-4 md:p-10 shadow-lg bg-gray-50 bg-opacity-50 backdrop-filter backdrop-blur-md'>
            <form ref={ref} className='flex gap-4 flex-col'>
              <TextField type="text" name='name' label="Full Name" variant='outlined' fullWidth required />
              <TextField type="email" name='email' label="Email" variant='outlined' fullWidth required />
              <TextField type="number" name='contact' label="Contact" variant='outlined' fullWidth required />
              <TextField type="text" name='message' label="Message" multiline rows={5} variant='outlined' fullWidth required />
              <button type='submit' className='bg-green-500 py-3 px-4 text-white hover:bg-green-700 rounded mt-4 w-[max-content]'>Submit</button>
              <ToastContainer />
            </form>
          </div>
          <div className='w-40 h-40 bg-green-400 rounded-full absolute -right-10 -top-10 -z-10'></div>
        </div>
      </div>
    </main>
  )
}

export default Contact