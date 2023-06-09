import React, { InputHTMLAttributes } from 'react';

export interface PrivacyCheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
  text?: string
  errors?: Record<string, string | undefined>;
}
const PrivacyCheckBox: React.FC<PrivacyCheckBoxProps> = ({ title, name, value, text, onChange }) => {
  return (
    <div className="single-permission mb-2">
      <div className="title">
        <h6>{title}</h6>
        {text ? <p>If you log in again you will able to see all the match jobs and get all information.</p> : null}
      </div>
      <div className="form-check form-switch">
        <input
          name={name}
          id={name}
          onChange={onChange}
          className="form-check-input" type="checkbox" />
      </div>
    </div>
  )
}

export default PrivacyCheckBox