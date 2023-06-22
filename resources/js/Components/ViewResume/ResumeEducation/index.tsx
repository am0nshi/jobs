import React from 'react'

const ResumeEducation = () => {
  return (
    <div className="single-information-area">
      <div className="section-title">
        <h6>Educational Qualification</h6>
        <div className="dash"></div>
      </div>

      <div className="educational-qualification mb-30">
        <div className="passing-year">
          <p><span>01.</span>April, 2016- May, 2020</p>
          <span></span>
        </div>
        <div className="education-dt">
          <h6>Royals Republic Science & Technology University</h6>
          <ul>
            <li><span>Education Level:</span> Graduation</li>
            <li><span>My Major:</span> Bachelor Degree In CSE</li>
            <li><span>Result/GPA:</span> 3.75/4.00</li>
          </ul>
        </div>
      </div>
      <div className="educational-qualification">
        <div className="passing-year">
          <p><span>02.</span>June, 2014- April, 2016</p>
          <span></span>
        </div>
        <div className="education-dt">
          <h6>International Collegiate School & College</h6>
          <ul>
            <li><span>Education Level:</span> HSC</li>
            <li><span>My Major:</span> Science</li>
            <li><span>Result/GPA:</span> 4.96/5.00</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ResumeEducation