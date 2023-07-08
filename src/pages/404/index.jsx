import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='m-20'>
      <div className='flex flex-col items-center gap-10'>
        <p className='text-gray-500'>Oops! Looks like you followed a bad link.</p>
        <img src="./img/notfound.svg" alt="" />
        <Link to="/" className=' animate-bounce'>
          <button className='bg-green-500 px-4 py-2 rounded-lg text-white'>Go Home</button>
        </Link>
      </div>
    </div>
  )
}

export default NotFound