import React from 'react'
import VerifiedIcon from "/public/assets/images/icon/verified.svg"
export interface FeaturedAreaCardProps {
  companySrc: string;
  position: string;
  jobType: string;
  companyName: string;
  isVerified: boolean;
  location: string;
  salary: string;
  salaryType: string;
  experience: string;
  deadline: string;
}
const FeaturedAreaCard: React.FC<FeaturedAreaCardProps> = (
  {
    companySrc,
    position,
    jobType,
    companyName,
    isVerified,
    location,
    salary,
    salaryType,
    experience,
    deadline,
  }
) => {
  return (
    <div className="feature-card2">
      <div className="company-area">
        <span></span>
        <div className="logo">
          <img src="assets/images/bg/company-logo/company-02.png" alt="" />

        </div>
        <div className="company-details">
          <div className="name-location">
            <h5><a href="job-details.html">{position}</a> <span>{jobType}</span></h5>
            <ul>
              <li><a href="company-details.html">{companyName}</a></li>
              {
                isVerified ?
                  <li className="verified"><img src={VerifiedIcon} alt="" /> Verified Company</li>
                  :
                  null
              }
            </ul>
          </div>
          <div className="bookmark">
            <i className="bi bi-bookmark-fill"></i>
          </div>
        </div>
      </div>
      <div className="job-discription">
        <ul className="one">
          <li>
            <p><span className="title">Location:</span> {location}</p>
          </li>
          <li>
            <p><span className="title">Salary:</span> {salary} / <span className="time">{salaryType}</span></p>
          </li>
        </ul>
        <ul>
          <li>
            <p><span className="title">Experience:</span> {experience}</p>
          </li>
          <li>
            <p><span className="title">Deadline:</span><span className="time"> {deadline}</span></p>
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

export default FeaturedAreaCard