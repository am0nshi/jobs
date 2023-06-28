import { InputText } from 'primereact/inputtext'
import React from 'react'

const FilterList = () => {
  return (
    <div className='mb-40 w-full'>
      <span className="p-input-icon-right w-full">
        <i className="pi pi-search cursor-pointer" />
        <InputText className='w-full' placeholder="Search" />
      </span>
    </div>

  )
}

export default FilterList