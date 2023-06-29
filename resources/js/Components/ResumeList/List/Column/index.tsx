import React from 'react'

import ColumnCard from './ColumnCard';
const Column = () => {

  return (
    <div className='flex flex-col gap-10'>
      <ColumnCard />
      <ColumnCard />
      <ColumnCard />
      <ColumnCard />
    </div>
  )
}

export default Column