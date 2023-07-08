import React from 'react'

const Card = ({title, number, icon}) => {
  return (
    <div className='bg-[#f1f5f8] w-full rounded-2xl shadow-md hover:bg-gray-200'>
      <div className='flex flex-col items-center pt-8 relative'>
        <div className='text-[3rem] bg-white p-2 rounded-full text-green-300'>{icon}</div>
        <div className='text-[4rem] font-bold text-gray-600'>{number}</div>
        <h2 className='absolute top-4 left-4 font-bold'>{title}</h2>
      </div>
    </div>
  )
}

export default Card