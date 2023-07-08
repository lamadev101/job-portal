import React from 'react'
import {BsPencilSquare} from 'react-icons/bs'

const Experiences = () => {
  return (
    <div className='glass mt-8 p-4 relative'>
      <BsPencilSquare className='text-blue-400 text-xl cursor-pointer absolute right-2 top-2 hover:text-blue-800'/>
      <div>
        <h1 className='text-gray-500 underline mb-4'>Experience</h1>
        {[1,2,3].map(index=>(
        <div key={index} className='w-full h-auto border-l-2 border-green-500 pl-4 relative'>
          <div className='absolute -left-3 -top-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white'>
            <span>{index}</span>
          </div>
          <h1 className='text-xl text-green-500'>ABC Enterprises</h1>
          <h2>Sr. Graphics Designer [2019 - 2022]</h2>
          <h3 className='text-gray-500'>Responsibilites</h3>
          <ul className='list-disc ml-5 text-sm text-gray-800 mb-4'>
            <li>Logo Design</li>
            <li>Social Media Post Design</li>
            <li>Motion video</li>
          </ul>
        </div>))}
      </div>
    </div>
  )
}

export default Experiences