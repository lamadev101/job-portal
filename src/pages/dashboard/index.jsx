import React from 'react'
import Aside from './aside'
import Table from './table'

const Dashboard = () => {
  return (
    <main>
      <div className='grid grid-cols-4'>
        <aside className='col-span-1 h-screen bg-gray-50 shadow-lg'>
          <Aside/>
        </aside>
        <section className='col-span-3 mt-8 px-8'>
          <div>
            <h1 className='text-lg'>Hi, Welcome back</h1>
            <div className='mt-8 text-2xl'>Applicantion</div>
            <Table/>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Dashboard