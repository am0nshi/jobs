import React, { useState } from 'react'
export interface VacancieProps {
  logoSrc: string;
  jobTitle: string;
  location: string;
  postedDate: string;
  aplyDate: string;
  salary: string;
  salaryTime: string;
  companyName: string;
  status?: string;
  action?: boolean;
}
const Vacancie: React.FC<VacancieProps> = ({
  logoSrc,
  jobTitle,
  postedDate,
  aplyDate,
  location,
  salary,
  salaryTime,
  companyName,
  status,
  action }) => {

  const statusClass = (status: string) => {
    switch (status) {
      case 'Viewed':
        return 'eg-btn purple-btn  ';
      case 'Canceled':
        return 'eg-btn orenge-btn';
      case 'Success':
        return 'eg-btn green-btn';
      case "Interview":
        return "eg-btn yellow-btn";
    }
  }

  return (
    <tr>
      <td data-label="Job Title">
        <div className="company-info">
          <div className="logo">
            <img src={logoSrc} alt="" />
          </div>
          <div className="company-details">
            <div className="top">
              <h6><a href="job-details.html">{jobTitle}</a></h6>
              <span><img src="assets/images/icon/calender2.svg" alt="" /> {postedDate}</span>
            </div>
            <ul>
              <li><img src="assets/images/icon/location.svg" alt="" />{location}</li>
              <li>
                <img src="assets/images/icon/arrow2.svg" alt="" />
                <p><span className="title">Salary:</span> {salary} / <span className="time">{salaryTime}</span></p>
              </li>
            </ul>
          </div>
        </div>
      </td>
      <td data-label="Apply Job">{aplyDate}</td>
      <td data-label="Company"><a className="view-btn" href="company-details.html">{companyName} </a></td>
      {status ? <td data-label="Status"><button className={statusClass(status)}>{status}</button></td> : null}
      {action ? <td data-label="Action"><button className="view-btn">Apply Now</button></td> : null}
    </tr>
  )
}

export default Vacancie