import React from 'react'
// import { BiLogInCircle } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { removeToken } from '../utils/localStorage'

const Navbar = () => {
  const navigate = useNavigate()

  const handleLogout= ()=>{
    removeToken()
    navigate("/login")
  }
  
  return (
    <div className='bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur shadow-md p-5 sticky top-0 z-20 flex justify-between'>
      <span>Hi, Welcome back</span>
      <div className='flex items-center gap-2'>
        <span>Admin,</span>
        <Link to="/">
          <span className='underline text-blue-400'>View Site</span>
        </Link>
        <div onClick={handleLogout} className="flex items-center cursor-pointer" >Logout</div>
      </div>
    </div>
  )
}

export default Navbar