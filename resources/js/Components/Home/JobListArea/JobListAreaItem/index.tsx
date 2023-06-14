import React from 'react'
export interface JobListAreaItemProps {
  position: string;
  companyName: string;
  companySrc: string;
  salary: string;
  salaryType: string;
  type: string;
  deadline: string;
  isUrgent?: boolean;
}
const JobListAreaItem: React.FC<JobListAreaItemProps> = ({
  isUrgent,
  companySrc,
  position,
  companyName,
  salary,
  salaryType,
  type,
  deadline }) => {
  return (
    <div className="job-list-card">
      {isUrgent ?
        <div className="urgent-batch">
          <span>Urgent</span>
        </div>
        :
        null
      }
      <div className="company-area">
        <div className="logo">
          <img src={companySrc} alt="" />
        </div>
        <div className="company-details">
          <div className="name-location">
            <h5><a href="job-details.html">{position}</a></h5>
            <p><a href="company-details.html">{companyName}</a></p>
          </div>
          <div className="bookmark">
            <i className="bi bi-bookmark"></i>
          </div>
        </div>
      </div>
      <div className="job-discription">
        <ul>
          <li>
            <p><span className="title">Salary:</span> {salary} / <span className="time">{salaryType}</span></p>
          </li>
          <li>
            <p><span className="title">Job Type:</span> <span> {type}</span></p>
          </li>
          <li>
            <p><span className="title">Deadline:</span> <span className="time">{deadline}</span></p>
          </li>
        </ul>
      </div>
      <div className="job-type-apply">
        <div className="apply-btn">
          <a href="job-details.html"><span><img src="assets/images/icon/apply-ellipse.svg" alt="" /></span>Apply Now</a>
        </div>
      </div>
    </div>
  )
}

export default JobListAreaItem