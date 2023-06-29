import { Card } from 'primereact/card';
import { Avatar } from "primereact/avatar";
import { Button } from 'primereact/button';
import React from 'react'

const ColumnCard = () => {
  const titleCard = (

    <div className='flex gap-2'>
      <div>
        <Avatar image="/images/avatar/amyelsner.png" size="xlarge" shape="circle" />
      </div>
      <div className=''>
        <b>Name</b>
        <p>Position</p></div>

    </div>
  )

  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Save" icon="pi pi-check" />
      <Button label="Cancel" icon="pi pi-times" className="p-button-outlined p-button-secondary" />
    </div>
  );
  return (
    <Card title={titleCard} footer={footer}>
      <div>
        <ul className='flex gap-10 list-none'>
          <li className='relative before:content-[""] 
          before:h-[9px]
          before:w-[9px]
          before:rounded-full
          before:border-solid
          before:border-2
          before:border-[#00a7ac]
          before:absolute
            before:left-[-15px]
          before:top-[7px] '>Expirience: 1 Year</li>
          <li className=' relative before:content-[""] 
          before:h-[9px]
          before:w-[9px]
          before:rounded-full
          before:border-solid
          before:border-2
          before:border-[#00a7ac]
          before:absolute
          before:left-[-15px]
          before:top-[7px] '>Salary: 100$</li>
        </ul></div>
      <div>
        <p>☛☛☛Do you want to have a professional, secured and fast solution, then you are in the right place.</p>
        <p>I create PSR-2 compatible, clear, intuitive, easily maintained, secure code. I know what is SOLID, DRY, KISS means and like to use them. Had expirience with relational databases over 500Gb, have deep understanding how they works and how to cook them. Familiar with security and potential attacks vectors. Familiar with async coding via queues/db/redis, daemons, resultset caching. Prefer to work with laravel projects.</p>
      </div>

    </Card>
  )
}

export default ColumnCard