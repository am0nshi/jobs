import React, { memo, useEffect, useRef, useState } from 'react'
import InputError from '../InputError';
import { InputTextProps } from "@/Components/InputText";
const InputPassword: React.FC<InputTextProps> = memo(({
  className,
  name,
  title,
  placeholder,
  value,
  errors,
  onBlur,
  onChange,
  isFocused,
  srcIcon,
}) => {
  const localRef = useRef<HTMLInputElement>(null);

  const [passwordType, setPasswordType] = useState("password");
  const [passwordIconClass, setPasswordIconClass] = useState("bi bi-eye-slash")

  useEffect(() => {
    if (isFocused) {
      localRef.current?.focus();
    }
  }, []);

  const handleToggle = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setPasswordIconClass("bi bi-eye-slash bi-eye")
    } else {
      setPasswordType("password");
      setPasswordIconClass("bi bi-eye-slash")
    }
  }
  return (
    <div className={className}>
      <div className="form-inner mb-25">
        <label htmlFor={name}>{title}</label>
        {srcIcon ? <img src={srcIcon} alt="" /> : null}
        <input
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          autoComplete="on"
          id={name}
          name={name}
          type={passwordType}
          placeholder={placeholder}
          ref={localRef}
        />
        <i onClick={handleToggle} className={passwordIconClass} id="togglePassword"></i>
      </div>
      {errors?.[name] ? <InputError message={errors[name]} /> : null}
    </div>
  )
})

export default InputPassword