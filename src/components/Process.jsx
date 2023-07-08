import React from 'react'
import { CgFileDocument } from 'react-icons/cg'
import { FaPeopleArrows, FaUserTie } from 'react-icons/fa'
import { motion } from 'framer-motion'

const stepVariants = {
  hidden: {
    opacity: 0,
    y: '20vh'
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 2, delay: 1 }
  }
}

const steps = [
  {
    id: 1,
    title: "CV Analysis",
    icon: <CgFileDocument />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos distinctio nihil tenetur. Officiis, itaque?"
  },
  {
    id: 2,
    title: "Interview",
    icon: <FaPeopleArrows />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos distinctio nihil tenetur. Officiis, itaque?"
  },
  {
    id: 3,
    title: "Placement",
    icon: <FaUserTie />,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi eos distinctio nihil tenetur. Officiis, itaque?"
  },
]

const Process = () => {
  return (
    <section className='my-20'>
      <div className='text-center text-4xl md:text-[4rem] mb-8 font-bold'>How GD Job Wroks</div>
      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, veniam.</p>
      <div className='grid md:grid-cols-3 justify-between items-center gap-8 mt-20'>
        {steps.map(step => (
          <motion.div variants={stepVariants} initial="hidden" whileInView="visible" key={step.id} className="hover:shadow-lg hover:bg-[#F1F5F8] p-4 rounded-3xl border-[1px] border-green-500">
            <div className='flex items-center gap-4 mb-4'>
              <div className='text-2xl rounded-full bg-green-500 p-4 text-white'>
                {step.icon}
              </div>
              <h1 className='text-3xl font-semibold'>{step.title}</h1>
            </div>
            <p className='text-gray-600'>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Process