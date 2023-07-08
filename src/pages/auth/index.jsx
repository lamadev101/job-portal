import { Button, Grid, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Input from './input'
import { IoMdCloseCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
// import {HiOutlineArrowUturnLeft} from 'react-icons/hi'

const initialState = { fname: '', lname: '', email: '', password: '', password2: '', tc: false }

const LoginSignup = ({ setOpenModel }) => {
  const [form, setForm] = useState(initialState)
  const [isSignup, setIsSignup] = useState(true)
  const [showPassword, setShowPassword] = useState(false)

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
  }

  return (
    <main className='fixed w-full h-[100vh] bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-2xl top-0 left-0 flex items-center justify-center'>
      <div className='w-full md:w-[26rem] bg-white mt-20 px-4 py-6 rounded-xl relative'>
        <Typography component="h1" variant="h5" sx={{ marginBottom: "20px", textAlign: "center", color: "green" }}>{isSignup ? 'Sign up' : 'Sign in'}</Typography>
        <IoMdCloseCircle onClick={() => setOpenModel(false)} className='absolute right-2 top-2 cursor-pointer text-2xl text-gray-600' />
        <form action="" onSubmit={handleSubmit} className="px-4">
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name="fname" label="First Name" handleChange={handleChange} autoFocus half />
                <Input name="lname" label="Last Name" handleChange={handleChange} half />
              </>
            )}
            <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
            <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="password2" label="Confirm Password" handleChange={handleChange} type="password" />}
          </Grid>
          <Button type="submit" fullWidth variant='contained' color={isSignup ? 'primary' : 'success'} sx={{ marginTop: '20px' }}>{isSignup ? 'Sign Up' : 'Sign In'}</Button>

          <Grid container justify="flex-end">
            <Grid item>
              <Button onClick={switchMode} size="large" type="submit">{isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up"}</Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </main>
  )
}

export default LoginSignup