import React, { InputHTMLAttributes } from 'react'

export interface InputFileProps extends InputHTMLAttributes<HTMLInputElement> {
  srcIcon?: string;
  errors?: Record<string, string | undefined>;
  isFocused?: boolean;
}

const InputFile: React.FC<InputFileProps> = ({
  className,
  name,
  srcIcon,
  value,
  title,
  placeholder,
  onChange,
  onBlur,
}) => {
  return (
    <div className={`form-inner mb-25 ${className}`}>
      <label>{title}</label>
      <div className="input-area">
        <img src={srcIcon} alt="" />
        <input
          onChange={onChange}
          onBlur={onBlur}
          value={value || ""}
          type="file"
          id={name}
          name={name}
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}

export default InputFile