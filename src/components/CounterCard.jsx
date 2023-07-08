import React from 'react'
import CountUp from 'react-countup'

const CounterCard = ({start, end, title}) => {
  return (
    <div className="bg-gray-50 p-4 rounded-md">
      <div className='flex items-center flex-col gap-4'>
          <div className="text-6xl font-bold text-green-400">
            <CountUp start={start} end={end} delay={5} duration={10} />
            <span>+</span>
          </div>
          <div className='text-xl'>{title}</div>
          <p className=' font-light text-center text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa suscipit laboriosam excepturi, sed a.</p>
        </div>
    </div>
  )
}

export default CounterCard