import React from 'react'
import pdf from '../../assets/Main.pdf'

const Details = ({setOpen}) => {
  return (
    <section className='h-[42rem] w-[60rem] overflow-hidden absolute right-8 top-2'>
      <div>
        <div className='absolute bottom-2 right-6 bg-gray-200 rounded-lg px-2 text-red-500 cursor-pointer' onClick={()=>setOpen(false)}>Close</div>
        <iframe className='w-[60rem] h-screen ' src={pdf} frameborder="0"></iframe>
      </div>
    </section>
  )
}

export default Details