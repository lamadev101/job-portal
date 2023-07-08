import React from 'react'
import { BsFillBriefcaseFill, BsFillChatQuoteFill } from 'react-icons/bs'
import { AiOutlineDashboard } from 'react-icons/ai'
import { FaEnvelopeOpenText, FaEnvelope } from 'react-icons/fa'
import { HiDocumentReport } from 'react-icons/hi'
import { FaUserAlt } from 'react-icons/fa'
import { RiFilePdfLine } from 'react-icons/ri'
import { FaUserTie } from 'react-icons/fa'
import { ImUserCheck } from 'react-icons/im'
import { SlDocs } from 'react-icons/sl'
import {TbBuildingCommunity} from 'react-icons/tb'
import NavItem from './navitem'


const Sidebar = () => {

  return (
    <div>
      <div className='text-center text-2xl my-4'>Logo</div>
      <hr />
      <div className='text-gray-600 space-y-3'>
        <div>
          <h2 className='font-bold text-gray-400 ml-3'>MAIN</h2>
          <NavItem icon={<AiOutlineDashboard />} title="Dashboard" url="/" />
        </div>
        <div>
          <h2 className='font-bold text-gray-400 ml-3'>GENERAL</h2>
          <div className='flex flex-col '>
            <NavItem icon={<TbBuildingCommunity />} title="Employeer" url="interviewed" />
            <NavItem icon={<FaUserTie />} title="Employee" url="hired" />
            <NavItem icon={<BsFillChatQuoteFill />} title="Feedback" url="feedback" />
          </div>
        </div>
        <div>
          <h2 className='font-bold text-gray-400 ml-3'>APPLICATION</h2>
          <div className='flex flex-col '>
            {/* <NavItem icon={<SlDocs />} title="All" url="all-applications" /> */}
            <NavItem icon={<RiFilePdfLine />} title="New" url="new-applications" />
            <NavItem icon={<FaEnvelopeOpenText />} title="Viewed" url="viewed-applications" />
            <NavItem icon={<HiDocumentReport />} title="Desire Post" url="desire-post" />
          </div>
        </div>
        <div>
          <h2 className='font-bold text-gray-400 ml-3'>APPLICANT</h2>
          <div className='flex flex-col '>
            <NavItem icon={<ImUserCheck />} title="Interviewed" url="interviewed" />
            <NavItem icon={<FaUserTie />} title="Hired" url="hired" />
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Sidebar