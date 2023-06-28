import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import InputError from '../InputError';

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  srcIcon?: string;
  errors?: Record<string, string | undefined>;
  isFocused?: boolean;
}

const InputText: React.FC<InputTextProps> = memo(({
  className,
  name,
  value,
  type="text",
  errors,
  title,
  srcIcon,
  autoComplete,
  placeholder,
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

          <input
            onChange={onChange}
            onBlur={onBlur}
            autoComplete={autoComplete ? autoComplete : "on"}
            value={value??""}
            type={type}
            id={name}
            name={name}
            placeholder={placeholder}
            ref={localRef}
          />
        </div>
        {errors?.[name] ? <InputError message={errors[name]} /> : null}
      </div>
    </div>
  )
})

export default InputText