import React, { useState } from 'react'
import { RiDeleteBin2Fill, RiEyeFill } from 'react-icons/ri'
import Details from './details'

const Table = () => {
  const [open, setOpen] = useState(false)

  return (
    <section className='mt-4'>
      <table class="w-full">
        <thead className=' bg-gray-200 border-[1px] border-gray-300 py-4 rounded-2xl'>
          <tr className='h-16'>
            <th>SN</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Post</th>
            <th>Resume</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='font-light'>
          {[1, 2,3,4,5].map(index=>(<tr key={index} className='table-auto hover:bg-gray-100 h-16 text-center'>
            <td>1</td>
            <td>John Doe</td>
            <td>
              <a href="mailto:doejohn@gmail.com">doejohn@gmail.com</a>
            </td>
            <td>
              <a href="tel:2389235723">2389235723</a>
            </td>
            <td>Software Engineer</td>
            <td>file</td>
            <td>5 Days Ago</td>
            <td className='flex items-center gap-2 text-2xl mt-6'>
              <RiEyeFill className='text-blue-500 cursor-pointer' onClick={()=>setOpen(true)} />
              <RiDeleteBin2Fill className='text-red-500 cursor-pointer' />
            </td>
          </tr>))}
        </tbody>
      </table>
      {open && <Details setOpen={setOpen} />}
    </section>
  )
}

export default Table