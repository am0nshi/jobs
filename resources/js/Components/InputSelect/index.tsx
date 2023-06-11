import React, { useRef, useEffect, memo, InputHTMLAttributes } from 'react'
import InputError from '../InputError';

export interface InputSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: Record<string, string>;
  name: string,
  srcIcon?: string;
  errors?: { [key: string]: string | undefined };
  isFocused?: boolean;
}
const InputSelect: React.FC<InputSelectProps> = memo(({
  className = "mb-25",
  name,
  value,
  errors,
  title,
  srcIcon,
  options,
  onChange,
  onBlur,
}) => {

  return (

    <div className={`form-inner ${className}`}>
      <label htmlFor={name}>{title}</label>
      {srcIcon ? <div className="input-area">
        <img src={srcIcon} alt="" />
        <select
          className="nice-select"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          id={name}
          name={name}>
          {Object.keys(options).map((key) => {
            return (
              <option key={key} value={key}>{options[key]}</option>
            )
          })}
        </select>
      </div>
        :
        <select
          className="nice-select"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          id={name}
          name={name}>
          {Object.keys(options).map((key) => {
            return (
              <option key={key} value={key}>{options[key]}</option>
            )
          })}
        </select>}

      {errors?.[name] ? <InputError message={errors[name]} /> : null}
    </div>
  )
})

export default InputSelect