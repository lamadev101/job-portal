import React from 'react'
import { NavLink } from 'react-router-dom'

const NavItem = ({icon, title, url}) => {
  return (
    <NavLink to={url}>
      <div className='flex items-center gap-2 text-xl cursor-pointer pl-2 py-1 ml-6'>
        <span>{icon}</span>
        <span>{title}</span>
      </div>
    </NavLink>
  )
}

export default NavItem