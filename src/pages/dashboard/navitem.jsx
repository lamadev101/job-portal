import React from 'react'

const NavItem = ({icon, title}) => {
  return (
    <div className='flex items-center gap-4 text-2xl rounded-md cursor-pointer p-2 bg-gray-200 text-gray-800'>
      <span>{icon}</span>
      <span>{ title }</span>
    </div>
  )
}

export default NavItem