import { Button, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import Input from './input'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { storeToken } from '../../utils/localStorage';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const validation = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  fname: Yup.string().required('Required'),
  lname: Yup.string().required('Required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
  password2: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Required'),
});

const initialValues = { fname: '', lname: '', email: '', password: '', password2: '' }
const baseUrl = 'http://127.0.0.1:8000/api/'

const LoginSignup = () => {
  const [isSignup, setIsSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  // const [error, setError] = useState()
  // const [success, setSuccess] = useState()

  const navigate = useNavigate()

  const handleShowPassword = () => setShowPassword(!showPassword);
  // const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = () => {
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false)
  };


  const { values, errors, touched, handleSubmit, handleChange } = useFormik({
    initialValues,
    validationSchema: isSignup && validation,

    onSubmit: async (values, action) => {
      try {
        if (isSignup) {
          const res = await axios.post(baseUrl + "register/", values, { headers: { 'Content-Type': 'application/json' } })
          if (res.data) {
            toast("Registration Completed Successfully.");
            // localStorage.setItem('access_token', JSON.stringify(res.data.token.access))
            storeToken(res.data.token)
          }
        } else {
          // const access_token = JSON.parse(localStorage.getItem('access_token'))
          const data = { email: values.email, password: values.password }

          const res = await axios.post(baseUrl + "login/", data, {
            headers: { 'Content-Type': 'application/json' }
          })
          if (res.data) {
            storeToken(res.data.token)
            navigate('/');
            action.resetForm()
          }
        }
      } catch (err) {
        if (err.response.status === 401) {
          toast(err.response.data.error)
        }
        if (err.response.status === 400) {
          toast("Email is already exist!")
        }
        console.log(err)
      }
    }
  })

  return (
    <main className='flex items-center justify-center h-screen bg-gray-600 bg-opacity-20'>
      {/* <div className='absolute top-8 md:top-8 md:right-2'>
        {success && <div className=' bg-green-300 rounded-lg text-xl px-4 md:px-8 py-2 md:py-4'>{success}</div>}
        {error && <div className=' bg-red-200 text-xl px-4 md:px-8 py-2 md:py-4 rounded-lg'>{error}</div>}
      </div> */}
      <section className='mx-4 md:w-[24rem] relative'>
        <div className=' p-6 bg-gray-50 bg-opacity-20 backdrop-filter backdrop-blur-xl shadow-xl z-10'>
          <Typography component="h4" variant="h4" sx={{ marginBottom: "20px", textAlign: "center" }}>{isSignup ? 'Sign up' : 'Admin Login'}</Typography>
          <form onSubmit={handleSubmit} className="px-2">
            <Grid container spacing={2}>
              {isSignup && (
                <>
                  <Input name="fname" label="First Name" value={values} handleChange={handleChange} autoFocus half />
                  {errors.fname && touched.fname ? <Typography style={{ color: 'red', fontSize: 12 }}>{errors.fname}</Typography> : ""}
                  <Input name="lname" label="Last Name" value={values} handleChange={handleChange} half />
                  {errors.lname && touched.lname ? <Typography style={{ color: 'red', fontSize: 12 }}>{errors.lname}</Typography> : ""}
                </>
              )}
              <Input name="email" label="Email Address" value={values} handleChange={handleChange} type="email" />
              {errors.email && touched.email ? <Typography style={{ color: 'red', fontSize: 12 }}>{errors.email}</Typography> : ""}
              <Input name="password" label="Password" value={values} handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
              {errors.password && touched.password ? <Typography style={{ color: 'red', fontSize: 12 }}>{errors.password}</Typography> : ""}
              {isSignup &&
                <>
                  <Input name="password2" value={values} handleChange={handleChange} label="Confirm Password" type="password" />
                  {errors.password2 && touched.password2 ? <Typography style={{ color: 'red', fontSize: 12 }}>{errors.password2}</Typography> : ""}
                </>
              }
            </Grid>
            <Button type="submit" fullWidth variant='contained' color={isSignup ? 'primary' : 'success'} sx={{ marginTop: '20px' }} size="large">{isSignup ? 'Sign Up' : 'Sign In'}</Button>

            {/* <Grid container justify="flex-end">
              <Grid item>
                <Button onClick={switchMode}>{isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}</Button>
              </Grid>
            </Grid> */}
          </form>
        </div>
        <div className='w-28 h-28 bg-green-500 rounded-full absolute -top-6 -left-8 -z-20' />
        <ToastContainer/>
      </section>
    </main>
  )
}

export default LoginSignup