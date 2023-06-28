import React from 'react'
import { Card } from 'primereact/card';
import { Avatar } from "primereact/avatar";
import { Button } from 'primereact/button';
const Column = () => {
  const titleCard = (

    <div className='flex  gap-2'>
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
    <div className='flex flex-col'>
      <Card title={titleCard} footer={footer}>
        <ul className='flex gap-10'>
          <li className='after:content-[""] after:h-[9px] w-[9px] rounded-full '>Expirience: 1 Year</li>
          <li>Salary: 100$</li>
        </ul>
      </Card>
    </div>
  )
}

export default Column