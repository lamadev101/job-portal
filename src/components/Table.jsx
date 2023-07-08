// import { RiDeleteBin2Fill, RiEyeFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import moment from 'moment'
import 'moment/locale/es'
moment.locale('es')

const Table = ({data}) => {
  // const handleResume = (resume)=>{
  //   return resume?.split('\\').pop()
  // }

  return (
    <section className='mt-4'>
      <table className="w-full">
        <thead className=' bg-gray-200 border-[1px] border-gray-300 py-4 rounded-2xl'>
          <tr className='h-16'>
            <th>SN</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th>Post</th>
            <th>Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className='font-semibold'>
          {data?.map(item => (
            <tr key={item.aId} className='table-auto hover:bg-gray-100 h-16 text-center'>
              <td >{item.aId || <Skeleton/>}</td>
              <td>{item.name || <Skeleton/>}</td>
              <td>{item.email || <Skeleton/>}</td>
              <td>{item.contact || <Skeleton/>}</td>
              <td>{item.desirejob || <Skeleton/>}</td>
              <td>{moment(item.created_at).fromNow()}</td>
              <td className='text-blue-600 underline'>
                <Link to={`/details/${item.eId}`} state={item}>View</Link>
              </td>
            </tr>))}
        </tbody>
      </table>
    </section>
  )
}

export default Table