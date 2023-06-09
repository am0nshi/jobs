import React from 'react'
export interface PrivacyCheckBoxProps {
  title: string;
  text?: string
}
const ToggleCheckBox: React.FC<PrivacyCheckBoxProps> = ({ title, text }) => {
  return (
    <div className="single-permission mb-2">
      <div className="title">
        <h6>{title}</h6>
        {text ? <p>If you log in again you will able to see all the match jobs and get all information.</p> : null}
      </div>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault1" />
      </div>
    </div>
  )
}

export default ToggleCheckBox