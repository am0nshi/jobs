import React from 'react'

const ResumeProfInfo = () => {
  return (
    <div className="single-information-area">
      <div className="section-title">
        <h6>Professionals Information</h6>
        <div className="dash"></div>
      </div>

      <div className="educational-qualification mb-30">
        <div className="passing-year">
          <p><span>01.</span>April, 2021- May, 2022</p>
          <span></span>
        </div>
        <div className="education-dt">
          <h6>Bistro.Tech Group of Industry</h6>
          <p className="position"><span>Position:</span> UI/UX Engineer ( Full-Time)</p>
          <div className="responsibility">
            <h6>Responsibility:</h6>
            <ul>
              <li>Creating high quality landing pages optimized for client website brands.</li>
              <li>Creating e-commerce interfaces, design enhancements, and overall improved user experience of existing sites</li>
            </ul>
          </div>

        </div>
      </div>
      <div className="educational-qualification">
        <div className="passing-year">
          <p><span>02.</span>April, 2022- Continuing</p>
          <span></span>
        </div>
        <div className="education-dt">
          <h6>Norland Tech of Industry</h6>
          <p className="position"><span>Position:</span> UI/UX Engineer ( Full-Time)</p>
          <div className="responsibility">
            <h6>Responsibility:</h6>
            <ul>
              <li>Creating high quality landing pages optimized for client website brands.</li>
              <li>Creating e-commerce interfaces, design enhancements, and overall improved user experience of existing sites</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ResumeProfInfo