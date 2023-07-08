
const NewsLetter = () => {
  return (
    <div className='relative my-20 rounded-3xl overflow-hidden shadow-gray-300 shadow-md'>
      <img src="./img/job.jpg" className='h-80 w-full object-cover' alt="" />
      <div className='px-4 flex items-center flex-col gap-6 justify-center absolute top-0 left-0 w-full h-full bg-gray-600 bg-opacity-60 backdrop-filter backdrop-blur-sm'>
        <h1 className='text-4xl text-white'>Get The Right Job For You</h1>
        <p className='text-gray-100'>Subscribe to get updated on latest and relevant career opportunities</p>
        <form action="" className='w-full md:w-1/2 h-16 rounded-lg overflow-hidden bg-white flex items-center'>
          <input type="email" placeholder='Email Address' required className='h-full w-full outline-none pl-4' />
          <button className='bg-green-500 hover:bg-green-700 text-white h-full px-2 md:px-4' type='submit'>Subscribe</button>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter