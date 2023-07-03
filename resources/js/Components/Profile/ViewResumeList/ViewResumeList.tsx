import TableArea from '@/Components/TableArea/TableArea'
import React from 'react'
import CompanyIcon from "/public/assets/images/bg/company-logo/company-06.png"
import TableCV from '../TableCV/TableCV'
const tableHeaders = ["CV NAME", "Date of creation", "Status", "View"]
const ViewResumeList = () => {



  return (
    <TableArea
      tableHeaders={tableHeaders}
    >
      <TableCV
        jobTitle="Front-End"
        status='Off'
        date='01.07.2023'
        hrefLink='/view-resume'
      />
      <TableCV
        jobTitle="Web-Designer"
        status='On'
        date='01.07.2023'
        hrefLink='/view-resume'
      />
      <TableCV
        jobTitle="Kitchen helper"
        status='Off'
        date='01.07.2023'
        hrefLink='/view-resume'
      />
      <TableCV
        jobTitle="Manager"
        status='On'
        date='01.07.2023'
        hrefLink='/view-resume'
      />
      <TableCV
        jobTitle="Worker"
        status='Off'
        date='01.07.2023'
        hrefLink='/view-resume'
      />
    </TableArea>
  )
}

export default ViewResumeList
