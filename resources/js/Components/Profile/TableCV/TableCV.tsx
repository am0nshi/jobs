import { Link } from '@inertiajs/react';
import React from 'react'
export interface TableCVProps {
  status: "On" | "Off";
  date: string;
  hrefLink: string;
  jobTitle: string;
}
const TableCV: React.FC<TableCVProps> = ({ status, date, hrefLink, jobTitle }) => {

  const statusClass = (status: string) => {
    switch (status) {
      case 'Off':
        return 'text-gray-400 ';
      case 'On':
        return 'text-green-400';
    }
  }
  return (
    <tr >
      <td data-label="Job Title" className='text-center' >
        {jobTitle}
      </td>
      <td data-label="Apply Job" className='text-center'>{date}</td>
      <td data-label="Status CV"><button className={`${statusClass(status)}`}>{status}</button></td>
      <td data-label="Company">
        <Link className="view-btn" href={hrefLink}>Link</Link>
      </td>
    </tr>
  )
}

export default TableCV