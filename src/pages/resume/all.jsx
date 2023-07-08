import React from 'react'
import Table from '../../components/Table'
import { fetchData } from '../../utils/endPoints'

const All = () => {
  const {data} = fetchData('all', 'application/?is_viewed=false')
  const apps = data?.data

  return (
    <div>
      <div>
      <h1 className='text-3xl text-gray-500 mb-4'>New Applications</h1>
      </div>
      <Table data={apps} />
    </div>
  )
}

export default All