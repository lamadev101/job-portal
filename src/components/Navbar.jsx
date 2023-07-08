import React from 'react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import LoginSignup from '../pages/auth'

const Navbar = () => {
  const [openModel, setOpenModel] = useState(false)

  return (
    <nav className='sticky top-0 itemCenter bg-gray-50 bg-opacity-50 rounded-md px-6 backdrop-filter backdrop-blur-lg shadow-sm py-8 z-50'>
      <div className='width grid grid-cols-2 justify-between items-center'>
        <div>
          <Link to="/">Job Portal</Link>
        </div>
        <div className='flex items-center justify-end gap-4'>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/internship">Internship</NavLink>
          <NavLink to="/courses">Courses</NavLink>
          <NavLink to="/about-us">About</NavLink>
          <NavLink to="/contact-us">Contact Us</NavLink>
          <NavLink to="/profile/101">Profile</NavLink>

          <button className='text-green-500 border border-green-600 px-4 py-1 rounded-3xl' onClick={()=>setOpenModel(true)}>Singn UP</button>
        </div>
      </div>
      {openModel && <LoginSignup setOpenModel={setOpenModel}/>}
    </nav>
  )
}

export default Navbar