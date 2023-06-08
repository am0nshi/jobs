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
  className,
  name,
  value,
  errors,
  title,
  srcIcon,
  options,
  onChange,
  onBlur,
  isFocused
}) => {

  const localRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, []);
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
            {Object.keys(options).map((key) => {
              return (
                <option key={key} value={key}>{options[key]}</option>
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