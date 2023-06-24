import React, { InputHTMLAttributes, memo, useEffect, useRef } from 'react';
import InputError from '../InputError';

export interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  srcIcon?: string;
  errors?: Record<string, string | undefined>;
  isFocused?: boolean;
}

const InputNumber: React.FC<InputTextProps> = memo(({
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
            defaultValue={value || 0}
            type="number"
            id={name}
            name={name}
            placeholder={placeholder}
            ref={localRef}
            min={0}
          />
        </div>
        {errors?.[name] ? <InputError message={errors[name]} /> : null}
      </div>
    </div>
  )
})

export default InputNumber