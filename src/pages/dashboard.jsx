import React from 'react'
import Card from '../components/Card'
import {FaUserTie} from 'react-icons/fa'
import {ImUserCheck} from 'react-icons/im'
import {RiFilePdfLine} from 'react-icons/ri'

const Dashboard = () => {
  return (
    <div>
      <div>
      <h1 className='text-sm text-gray-500 mb-4 font-bold'>Weekly Activities</h1>
      </div>
      <div className='grid grid-cols-3 gap-8'>
        <Card title="Resume" number={24} icon={<RiFilePdfLine/>} />
        <Card title="Interviewed" number={15} icon={<ImUserCheck/>} />
        <Card title="Hired" number={10} icon={<FaUserTie/>} />
      </div>
    </div>
  )
}

export default Dashboard
