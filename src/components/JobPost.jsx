import React from 'react'
// import {BsFillFileEarmarkRuledFill} from 'react-icons/bs'
import {motion} from 'framer-motion'


const leftVariants = {
  hidden:{
    x:'-100vw',
    opacity:0,
  },
  visible:{
    x:0,
    opacity:1,
    transition:{duration:15, type:'spring', stifness:200}
  }
}

const JobPost = () => {
  return (
    <section className='mb-40'>
      <div className='grid md:grid-cols-2 items-center'>
        <motion.div variants={leftVariants} initial="hidden" animate="visible">
          <span className='text-green-600'>FOR RECRUTER</span>
          <h1 className='text-[2rem] md:text-[3rem]'>Do You Have A Position To Post Job?</h1>
          <p className='py-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut exercitationem vero ad possimus quaerat necessitatibus inventore distinctio, libero fugiat nostrum.</p>
          {/* <button className='flex items-center gap-4 w-max bg-green-500 hover:bg-white hover:border border-green-500 hover:text-green-500 rounded-3xl px-6 py-2 text-xl text-white mt-8'><span>Post a Job</span> <BsFillFileEarmarkRuledFill /> </button> */}
          <button className='bg-green-500 hover:bg-white hover:border border-green-500 hover:text-green-500 rounded-3xl px-6 py-2 text-xl text-white'> Post a Job </button>
        </motion.div>
        <div>
          <img src="./img/vacant.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default JobPost