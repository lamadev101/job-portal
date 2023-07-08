import React from 'react'
import ContactInfo from './components/ContactInfo'
import Experiences from './components/Experiences'
import Portfolio from './components/Portfolio'
import Profile from './components/Profile'
import Suggestion from './components/Suggestion'
import ToolsTech from './components/ToolsTech'
import {BiCloudDownload} from 'react-icons/bi'

const Employee = () => {
  return (
    <main className='itemCenter mt-12'>
      <div className='width grid grid-cols-3 gap-8'>
        <section className='col-span-2'>
          <Profile />
          <ContactInfo />
          <ToolsTech />
          <Experiences />
          <Portfolio />
          <div>
            <button className='bg-green-500 px-4 py-3 text-white rounded-md flex items-center gap-2 hover:bg-green-600'><span>Download CV </span><BiCloudDownload className='text-2xl'/></button>
          </div>
        </section>
        <section className='col-span-1'>
          <Suggestion />
        </section>
      </div>
    </main>
  )
}

export default Employee