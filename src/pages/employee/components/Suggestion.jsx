import React from 'react'

const Suggestion = () => {
  return (
    <div className='py-4 sticky top-28 bg-gray-100 rounded-md px-4 h-auto'>
      <div className=''>
        <h1>Recommendated Jobs</h1>
        <hr className='mb-4' />
        <div className='space-y-4'>
          {[1, 2, 3, 4].map(index => (
            <div className='bg-gray-50 bg-opacity-50 backdrop-filter backdrop-blur-md shadow-sm flex gap-4 items-center py-4'>
              <img className='w-10 h-10 object-cover' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wiki-tech-logo-hub.svg/2048px-Wiki-tech-logo-hub.svg.png" alt="" />
              <div>
                <h1>Frontend Developer</h1>
                <h2 className='text-[12px]'>Golden Duck Interprises</h2>
                <h3 className='text-[10px] text-gray-500'>Anamnagar, Kathmandu.</h3>
                <h4 className='text-green-500 font-thin text-sm'>22 hours ago</h4>
              </div>
            </div>
          ))

          }
        </div>
      </div>
    </div>
  )
}

export default Suggestion