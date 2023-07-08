import axios from 'axios'
import React from 'react'

const ConformBox = ({setOpen, aId}) => {
  const url = `http://127.0.0.1:8000/api/application/${aId}/`;

  const handleDelete = async ()=>{
    try{
      const res = await axios.delete(url)
      console.log(res)
      if(res.status === 204){
        setOpen(false)
      }
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div className='fixed top-0 left-[14rem] w-full h-screen flex items-center justify-center bg-[#111111cc]'>
      <div className=' p-6 bg-white hover:bg-[#f1f5f8] w-[max-content] rounded-lg shadow-lg'>
        <div className='font-bold text-gray-500'>Rejected Application</div>
        <hr />
        <p className='text-lg font-bold mt-4'>You are going to delete application Id : {aId}</p>
        <h1 className='text-red-500 text-3xl'>Are you sure?</h1>
        <div className='flex justify-end'>
        <div className='space-x-2 text-white mt-8'>
          <button className='bg-gray-400 hover:bg-gray-500 px-4 py-2 rounded-md uppercase' onClick={()=>setOpen(false)}>Cancle</button>
          <button onClick={handleDelete} className='bg-red-400 hover:bg-red-600 px-4 py-2 rounded-md uppercase'>Delete</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ConformBox