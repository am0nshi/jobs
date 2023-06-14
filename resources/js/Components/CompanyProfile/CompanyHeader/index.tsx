import React from 'react'
import editIcon from "/public/assets/images/icon/edit2.svg"
import CompanyIcon from "/public/assets/images/bg/company-img2.png"
const CompanyHeader = (
  { companyName,
    companyIcon = CompanyIcon
  }:
    {
      companyName: string,
      companyIcon?: string
    }) => {
  return (
    <div className="author-and-action-btn-area two mb-40">
      <div className="author-area two">
        <div className="author-img">
          <img src={companyIcon} alt="" />
        </div>
        <div className="author-content">
          <span>Hello,</span>
          <h4>{companyName}</h4>
        </div>
      </div>

      <div className="action-btn-group">
        <ul>
          <li><a href="company-profile.html"><span><img src={editIcon} alt="" /></span>Edit Profile</a></li>
        </ul>
      </div>
    </div>
  )
}

export default CompanyHeader