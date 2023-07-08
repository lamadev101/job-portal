import React from 'react'
import CounterCard from './CounterCard'

const Statistics = () => {
  return (
    <section className='px-8 py-12 md:my-[10rem]'>
      <div className='grid md:grid-cols-3 items-center justify-center gap-8'>
        <CounterCard start="10" end="299" title="Interviewed" />        
        <CounterCard start="1" end="230" title="Hired" />        
        <CounterCard start="0" end="50" title="Associated Company" />        
      </div>
    </section>
  )
}

export default Statistics