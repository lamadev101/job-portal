import React from 'react'
import { FaCloudUploadAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'

const imgVariants = {
  hidden:{
    opacity:0,
    y:'100vh'
  },
  visible:{
    opacity:1,
    y:0,
    transition:{duration:4, type:'spring', stifness:200}
  }
}
const btnVariants = {
  hidden:{
    opacity:0,
    x:'-100vw'
  },
  visible:{
    opacity:1,
    x:0,
    transition:{duration:2, type:'spring', stifness:200}
  }
  // transition:{duration:5, yoyo:Infinity, type:'spring', stifness:400}
}
const Hero = () => {
  return (
    <section className='py-20 md:py-0'>
      <div className='grid md:grid-cols-2 items-center'>
        <div className='flex items-center md:items-start gap-8 flex-col'>
          <h1 className='text-4xl md:text-[6rem] font-bold leading-tight'>Get your <br /> Dream Job</h1>
          <p className='text-gray-700'>Getting your dream job is challenging but rewarding. It requires persistence, dedication, and a clear understanding of your career goals. Preparation and research are key to securing your ideal job. So, if you're ready to take the next step towards your dream career, let's get started!</p>
          <Link to="/form">
            <motion.button variants={btnVariants} initial="hidden" animate="visible" className='flex items-center gap-4 w-max bg-green-500 hover:bg-white hover:border border-green-500 hover:text-green-500 rounded-3xl px-6 py-2 text-xl text-white'><span>Upload CV</span> <FaCloudUploadAlt /> </motion.button>
          </Link>
        </div>
        <motion.div variants={imgVariants} initial="hidden" animate="visible" className='hidden md:block'>
          <img src="/img/picture1.png" width={600} height={400} alt="" />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
