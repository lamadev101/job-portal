import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchData } from '../../utils/endPoints'
import moment from 'moment'
import {AiFillPhone, AiFillMail, AiFillDelete} from 'react-icons/ai'
import Empty from '../../components/Empty'
import ConformBox from '../../components/ConformBox'

const statusBtns = [
  { id: 0, title: 'Accepted', key: 'accept', color: 'bg-green-500' },
  { id: 1, title: 'Pending', key: 'pending', color: 'bg-yellow-500' },
  { id: 2, title: 'Rejected', key: 'reject', color: 'bg-red-500' }
]

const Viewed = () => {
  const [status, setStatus] = useState('accept')
  const [open, setOpen] = useState(false)
  const [id, setId] = useState()

  const {data} = fetchData(status, `application/?status=${status}&is_viewed=true`)
  const apps = data?.data

  return (
    <div>
      <div>
        <h1 className='text-3xl text-gray-500 mb-4'>Viewed Applications</h1>
        <div className='w-[max-content] space-x-2'>
          {statusBtns.map(item => (
            <button key={item.id} onClick={() => setStatus(item.key)} className={` font-semibold px-4 py-2 ${item.key === status ? `text-white shadow-3xl ${item.color}` : `bg-gray-200`}`}>{item.title}</button>
          ))}
        </div>
        <hr className='my-4' />
        <div >{apps?.length === 0 ? <Empty/> :
          <table className="w-full">
            <thead className=' bg-gray-200 border-[1px] border-gray-300 py-4 rounded-2xl'>
              <tr className='h-16'>
                <th>App ID</th>
                <th>Full Name</th>
                <th>Post</th>
                <th>Remark</th>
                <th>Viewed Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className='font-semibold'>
              {apps?.map(item => (
                <tr key={item.aId} className='table-auto hover:bg-gray-100 h-16 text-center'>
                  <td className='text-blue-600 underline'>
                    <Link to={`/details/${item.aId}`} state={item}>{item.aId}</Link>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.desirejob}</td>
                  <td>{item.remark}</td>
                  <td>{moment(item.created_at).format("MMM Do YY")}</td>
                  {status !== 'reject' ?<td className='flex items-center gap-4 justify-center mt-6 text-2xl'>
                    <a href={`tel:${item.contact}`} className='text-green-400 hover:text-green-600'><AiFillPhone/></a>
                    <a href={`mailto:${item.email}`} className='text-orange-400 hover:text-orange-600'><AiFillMail/></a>
                  </td>:
                  <td className='flex items-center justify-center mt-6'>
                    <AiFillDelete onClick={()=>{setOpen(true); setId(item.aId); console.log(id)}} className='text-red-400 hover:text-red-500 cursor-pointer text-2xl' />
                  </td>}
                </tr>))}
            </tbody>
          </table>}
        </div>
      </div>
      {open && <ConformBox setOpen={setOpen} aId={id} />}
    </div>
  )
}

export default Viewed