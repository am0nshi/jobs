import React, { memo, InputHTMLAttributes } from 'react'
import InputError from '../InputError';

export interface InputSelectProps extends InputHTMLAttributes<HTMLSelectElement> {
  options: Array<string>;
  name: string,
  srcIcon?: string;
  errors?: { [key: string]: string | undefined };
}
const InputSelect: React.FC<InputSelectProps> = memo(({
  className,
  name,
  value,
  errors,
  title,
  srcIcon,
  options,
  onChange,
  onBlur, }) => {

  return (
    <div className={className}>
      <div className="form-inner mb-25">
        <label htmlFor={name}>{title}</label>
        <div className="input-area">
          {srcIcon ? <img src={srcIcon} alt="" /> : null}
          <select
            className="nice-select"
            onChange={onChange}
            onBlur={onBlur}
            value={value}
            id={name}
            name={name}>
            {options.map((option, index) => {
              return (
                <option key={index} value={option}>{option}</option>
              )
            })}
          </select>
        </div>
        {errors?.[name] ? <InputError message={errors[name]} /> : null}
      </div>
    </div>
  )
})

export default InputSelect