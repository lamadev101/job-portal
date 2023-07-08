import { FormControlLabel, FormLabel, Radio, Checkbox, RadioGroup, TextField } from '@mui/material'
import { useLocation } from 'react-router-dom'
import moment from 'moment'
import axios from 'axios'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useFormik } from 'formik'


const Details = () => {
  const { state } = useLocation()
  
  const { aId, name, email, desirejob, created_at, contact, resume, status, is_viewed, remark } = state
  const initialValues = {is_viewed: is_viewed, status: status, remark: remark}
  
  const url = `http://127.0.0.1:8000/api/application/${aId}/`

  const {values, handleSubmit, handleChange} = useFormik({
    initialValues,
    onSubmit: async (values)=>{
      try {
        const res = await axios.put(url, values);
        if (res.data) {
          toast("Remark successfully submitted!!");
        }
      } catch (e) {
        console.log(e)
        toast("Oops! Something went wrong. Please try again!!")
      }
    }
  })

  return (
    <div>
      <div className='bg-gray-100 rounded-md p-4 shadow-md mb-4 relative'>
        <h1 className='text-sm font-bold'>Applicant's Info</h1>
        <div className='w-20 h-[1px] bg-gray-800' />
        <div className='mt-2 flex flex-col gap-2'>
          <div className='text-xl'>
            <span>Name: </span>
            <span className='font-bold'>{name}</span>
          </div>
          <div className='text-xl'>
            <span>Email: </span>
            <span className='font-bold'>{email}</span>
          </div>
          <div className='text-xl'>
            <span>Phone Number: </span>
            <span className='font-bold'>{contact}</span>
          </div>
          <div className='text-xl'>
            <span>Desire Post: </span>
            <span className='font-bold'>{desirejob}</span>
          </div>
          <div className='text-xl'>
            <span>Upload Date: </span>
            <span className='font-bold'>{moment(created_at).format("MMM Do YY")}</span>
          </div>
        </div>
        <div className='absolute right-4 top-4 flex gap-2 text-white font-bold'>
          <button className=' bg-green-400 rounded-2xl px-4 py-1 shadow-sm hover:bg-green-600'>
            <a href={`tel:${contact}`}>Call Now</a>
          </button>
          <button className='bg-orange-400 hover:bg-orange-600 rounded-2xl px-4 py-1 shadow-sm'>
            <a href={`mailto:${email}`}>E-mail</a>
          </button>
        </div>
      </div>

      <div className='bg-gray-100 rounded-md p-4 shadow-md mb-4'>
        <h1 className='text-sm font-bold'>Remark</h1>
        <div className='w-12 h-[1px] bg-gray-800' />
        <form action="" onSubmit={handleSubmit}>
          <div className='flex items-center gap-4 mb-6'>
            <FormLabel id="status">Status:</FormLabel>
            <RadioGroup aria-labelledby="status" value={values.status} name="status" onChange={handleChange} row>
              <FormControlLabel value="accept" control={<Radio />} label="Accept" />
              <FormControlLabel value="pending" control={<Radio />} label="Pending" />
              <FormControlLabel value="reject" control={<Radio />} label="Reject" />
            </RadioGroup>
          </div>
          <TextField name='remark' value={values?.remark} label="Note" variant='outlined' placeholder='What do you think?' onChange={handleChange} multiline maxRows={4} required fullWidth />
          <FormControlLabel name='is_viewed' control={<Checkbox value={values.is_viewed} onChange={handleChange} />} label="Is Viewed" required />
          <div>
            <button className='bg-blue-500 px-4 py-2 text-white uppercase hover:bg-blue-600' type='submit'>Submit</button>
          </div>
        </form>
      </div>

      <div className='h-screen mb-20 bg-gray-400 pb-8'>
        <iframe className='w-full h-full' src={resume} ></iframe>
      </div>
      <ToastContainer />
    </div>
  )
}

export default Details