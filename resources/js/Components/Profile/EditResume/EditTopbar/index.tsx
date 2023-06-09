import React from 'react'
import EditTopbarItem from './EditTopbarItem'
import { EditResumeTypes } from "@/Enums/EditResumeTypeEnum"
const EditTopbar = ({ type }: { type: string }) => {
  return (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <EditTopbarItem text='Basic Information:'
        href="/edit-resume"
        className={type === EditResumeTypes.BasicInformation ? "nav-link active" : "nav-link"}
      />
      <EditTopbarItem text='Profile'
        href="/edit-resume/profile"
        className={type === EditResumeTypes.Profile ? "nav-link active" : "nav-link"}
      />
      <EditTopbarItem text='Education'
        href="/edit-resume/education"
        className={type === EditResumeTypes.Education ? "nav-link active" : "nav-link"}
      />
      <EditTopbarItem text='Professional Info'
        href="/edit-resume/professional-info"
        className={type === EditResumeTypes.ProfessionalInfo ? "nav-link active" : "nav-link"}
      />
    </ul>
  )
}

export default EditTopbar