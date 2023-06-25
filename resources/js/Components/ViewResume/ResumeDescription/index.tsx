import React from 'react'

const ResumeDescription = ({ description }: { description: string }) => {
  return (
    <div className="single-information-area">
      <div className="section-title">
        <h6>Career Objective</h6>
        <div className="dash"></div>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ResumeDescription