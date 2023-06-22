import React from 'react'

const ResumePersonalInfo = () => {
  return (
    <div className="single-information-area">
      <div className="section-title">
        <h6>Personal Information</h6>
        <div className="dash"></div>
      </div>
      <div className="row g-4">
        <div className="col-lg-6 devaider1 position-relative">
          <div className="informations">
            <ul>
              <li><span>Father’s Name:</span>  Mr. Norman Frankly</li>
              <li><span>Date of Birth:</span>  03 January,1998</li>
              <li><span>Nationality:</span>  Bangladeshi</li>
              <li><span>Marital Status:</span>  Unmarried</li>
              <li><span>Height:</span>  5’ 5’’</li>
              <li><span>Blood Group:</span>  O ve+</li>
              <li><span>Permanent Address:</span>  Village: Mirpur-12 Block-C, Thana: Pallavi, District: Dhaka, Division: Dhaka</li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 pl-40">
          <div className="informations d-flex justify-content-end">
            <ul>
              <li><span>Mother’s Name:</span>  Mrs. Macoline Frankly</li>
              <li><span>National ID:</span>  88 9919 6712 8762</li>
              <li><span>Religion:</span>  Islam</li>
              <li><span>Gender:</span>  Male</li>
              <li><span>Weight:</span>  75 KG</li>
              <li><span>Height:</span>  5’ 5’’</li>
              <li><span>Present Address:</span>  Village: Mirpur DOSH, Block-C, Avenue-02, Thana: Pallavi, District: Dhaka, Division: Dhaka.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumePersonalInfo