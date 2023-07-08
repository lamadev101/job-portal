import React from 'react'
import { BsFillBriefcaseFill } from 'react-icons/bs'
import { AiOutlineDashboard } from 'react-icons/ai'
import { HiDocumentReport } from 'react-icons/hi'
import { FaUserAlt } from 'react-icons/fa'
import NavItem from './navitem'

const Aside = () => {
  return (
    <div className=''>
      <div className='text-center text-2xl my-4'>Logo</div>
      <hr />
      <div className='px-6 flex flex-col gap-2 mt-4'>
        <NavItem icon={<AiOutlineDashboard/>} title="Dashboard" />
        <NavItem icon={<BsFillBriefcaseFill />} title="Application" />
        <NavItem icon={<FaUserAlt />} title="Applicant" />
        <NavItem icon={<HiDocumentReport />} title="Desire Post" />
      </div>
    </div>
  )
}

export default Aside