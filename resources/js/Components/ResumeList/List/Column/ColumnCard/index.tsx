import { Card } from 'primereact/card';
import { Avatar } from "primereact/avatar";
import { Button } from 'primereact/button';
import React from 'react'
import Expand from '@/Components/Expand';

const ColumnCard = () => {
  const titleCard = (

    <div className='flex gap-2'>
      <div className=''>
        <b>Name N.</b>
        </div>

    </div>
  )

  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2">
      <Button label="Download CV" icon="pi pi-download" />
     
    </div>
  );
  return (
    <Card title={titleCard} footer={footer}>
      <div>
       
        </div>
      <div>
        <Expand>
        <p>☛☛☛Do you want to have a professional, secured and fast solution, then you are in the right place.</p>
        <p>I create PSR-2 compatible, clear, intuitive, easily maintained, secure code. I know what is SOLID, DRY, KISS means and like to use them. Had expirience with relational databases over 500Gb, have deep understanding how they works and how to cook them. Familiar with security and potential attacks vectors. Familiar with async coding via queues/db/redis, daemons, resultset caching. Prefer to work with laravel projects.</p>
        </Expand>
      
      </div>

    </Card>
  )
}

export default ColumnCard