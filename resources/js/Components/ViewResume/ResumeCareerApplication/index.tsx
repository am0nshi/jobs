import React from 'react'

const ResumeCareerApplication = () => {
  return (
    <div className="single-information-area">
      <div className="section-title">
        <h6>Career Application</h6>
        <div className="dash"></div>
      </div>
      <div className="row g-4 ">
        <div className="col-lg-6 devaider1 position-relative">
          <div className="informations">
            <ul>
              <li><span>Current Job Place:</span>  Norland Tech of Industry</li>
              <li><span>Position:</span>  UI/UX Engineer</li>
              <li><span>Experiences:</span>  3 Years</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 pl-40">
          <div className="informations">
            <ul>
              <li><span>Current Salary:</span>  30000/=</li>
              <li><span>Expected Salary:</span>  40000/=</li>
              <li><span>Available:</span>  Full Time</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeCareerApplication