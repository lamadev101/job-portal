import { TextField } from '@mui/material'
import {IoMdCloseCircle} from 'react-icons/io'
import {AiFillPlusCircle} from 'react-icons/ai'
import {motion} from 'framer-motion'
import { useState } from 'react'

const contactVariants = {
  hidden:{
    opacity:0,
    y:'100vh',
  },
  visible:{
    opacity:1,
    y:0,
    transiton:{
      duration:5
    }
  }
}

const Skills = ({setOpen}) => {
  const [skill, setSkill] = useState("")
  const [skills, setSkills] = useState([])
  console.log(skills)

  const addMore = ()=>{
    if(skill){
      setSkills([...skills, skill])
      setSkill("")
    }
  }
  return (
    <motion.div variants={contactVariants} initial="hidden" animate="visible" className='fixed top-0 left-0 h-screen w-full glass z-50 flex items-center justify-center'>
      <div className='bg-white w-1/3 p-6 border border-green-500 rounded-xl shadow-md relative'>
        <IoMdCloseCircle className='absolute right-2 top-3 text-2xl text-gray-300 hover:text-gray-500 cursor-pointer' onClick={()=>setOpen(false)} />
        <h1 className='text-2xl'>Add/Update your Skills</h1>
        <hr />
        <div className='flex flex-wrap gap-1 mt-2'>
          {skills.map((data, i)=>(
            <div className='border border-green-500 rounded-lg px-2' key={i}>{data}</div>
          ))}
        </div>
        <form action="" className='space-y-4 mt-6'>
          <div className='flex items-center gap-4'>
            <TextField type="text" name='skill' value={skill} label="Skill" onChange={(e)=>setSkill(e.target.value)} variant='outlined' fullWidth required />
            <AiFillPlusCircle onClick={addMore} className='text-3xl text-green-400 cursor-pointer hover:text-green-600'/>
          </div>
          <button type='submit' className='bg-green-500 px-4 py-2 text-white hover:bg-green-600 rounded-lg'>Save</button>
        </form>
      </div>
    </motion.div>
  )
}

export default Skills