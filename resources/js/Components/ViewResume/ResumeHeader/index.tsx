import React from 'react'
//icons
import PhoneIcon from "/public/assets/images/icon/phone-5.svg"
import EnvlopIcon from "/public/assets/images/icon/envlop-5.svg"
import WebIcon from "/public/assets/images/icon/web-5.svg"
export interface ResumeHeaderProps {
  name: string;
  position: string;
  phoneNumber: string;
  email: string;
  website: string;
  srcIcon: string;
}

const ResumeHeader: React.FC<ResumeHeaderProps> = ({
  name,
  position,
  phoneNumber,
  email,
  website,
  srcIcon }) => {
  return (
    <div className="row g-4 mb-40">
      <div className="col-lg-6">
        <div className="author-area">
          <div className="author-img">
            <img src={srcIcon} alt="" />
          </div>
          <div className="name-degination">
            <h4>{name}</h4>
            <span>{position}</span>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="contact-area">
          <h4>Contact Info</h4>
          <ul>
            <li>Phone:<a href="#">{phoneNumber} <span><img src={PhoneIcon} alt="" /></span></a></li>
            <li>Email:<a href="#">{email}<span><img src={EnvlopIcon} alt="" /></span></a></li>
            <li>Website:<a href="#">{website} <span><img src={WebIcon} alt="" /></span></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResumeHeader