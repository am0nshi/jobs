import React, { InputHTMLAttributes } from 'react'

export interface InputImgProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  text: string;
  maxSizeFile: number;
  srcIcon?: string;
  errors?: Record<string, string | undefined>;
  isFocused?: boolean;
}

const InputImg: React.FC<InputImgProps> = ({
  className,
  name,
  text,
  maxSizeFile,
  value,
  title,
  autoComplete,
  placeholder,
  onChange,
  onBlur,
}) => {
  return (
    <div className={className}>
      <h5>{title} </h5>
      <div className="drag-area">
        <p>{text}</p>
        <label htmlFor={name} className="upload-btn flex justify-center items-center cursor-pointer"><i className="bi bi-plus-lg"></i></label>
        <input
          onChange={onChange}
          onBlur={onBlur}
          autoComplete={autoComplete ? autoComplete : "on"}
          value={value || ""}
          type="file"
          id={name}
          name={name}
          placeholder={placeholder}
          hidden
        />
      </div>
      <span>{`Maximum File Upload: ${maxSizeFile} MB `}</span>
    </div>
  )
}

export default InputImg