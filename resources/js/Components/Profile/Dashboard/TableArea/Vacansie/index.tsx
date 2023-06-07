import React from 'react'
export interface VacancieProps {
  logoSrc: string;
  jobTitle: string;
  location: string;
  postedDate: string;
  aplyDate: string;
  salary: string;
  salaryTime: string;
  companyName: string;
  status: string;
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
  status }) => {

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
      <td data-label="Status"><button className="eg-btn purple-btn">{status}</button></td>
    </tr>
  )
}

export default Vacancie