import React from 'react'

const EditTopbar = () => {
  return (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button"
          role="tab" aria-controls="home" aria-selected="true"><span></span>Basic Information:</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button"
          role="tab" aria-controls="profile" aria-selected="false"><span></span>Profile</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button"
          role="tab" aria-controls="contact" aria-selected="false"><span></span>Education</button>
      </li>
      <li className="nav-item" role="presentation">
        <button className="nav-link" id="professional-tab" data-bs-toggle="tab" data-bs-target="#professional" type="button"
          role="tab" aria-controls="professional" aria-selected="false"><span></span>Professional Info</button>
      </li>
    </ul>
  )
}

export default EditTopbar