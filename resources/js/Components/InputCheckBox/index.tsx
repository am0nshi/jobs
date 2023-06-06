import React from 'react'
import InputError from '../InputError';
import {InputTextProps} from "@/Components/InputText";

export interface InputCheckboxProps extends Omit<InputTextProps, 'value'> {
  text?: string,
  value: boolean;
}

const InputCheckBox: React.FC<InputCheckboxProps> = ({
  children,
  className,
  name,
  text,
  value,
  errors,
  onChange
}) => {
  return (
    <div className={className}>
      <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
        <div className="form-group two">
          <input
            type="checkbox"
            id={name}
            name={name}
            onChange={onChange}
            checked={value}
          />
          <label htmlFor={name}>
            {text}
          </label>
          {errors?.[name] ? <InputError message={errors[name]} /> : null}
        </div>
        {children}
      </div>
    </div>
  )
}

export default InputCheckBox