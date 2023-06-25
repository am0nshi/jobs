import { InputHTMLAttributes, useEffect, useRef, useState } from 'react';
import InputMask from 'react-input-mask';
import InputError from '../InputError';
export interface MaskedInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  srcIcon?: string;
  errors?: { [key: string]: string | undefined };
  isFocused?: boolean;
  mask: string;
}
const MaskedInput: React.FC<MaskedInputProps> = ({
  className,
  name,
  value,
  errors,
  title,
  srcIcon,
  autoComplete,
  placeholder,
  onChange,
  onBlur,
  mask,
}) => {

  return (
    <div className={className}>
      <div className="form-inner mb-25">
        <label htmlFor={name}>{title}</label>
        <div className="input-area">

          {srcIcon ? <img src={srcIcon} alt="" /> : null}
          <InputMask
            mask={mask}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete={autoComplete ? autoComplete : "on"}
            value={value || ""}
            type="text"
            id={name}
            name={name}
            placeholder={placeholder}
          />

        </div>
        {errors?.[name] ? <InputError message={errors[name]} /> : null}
      </div>
    </div>

  );
}
export default MaskedInput