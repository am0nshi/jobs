import React, { useRef, useEffect, memo, InputHTMLAttributes } from 'react'
export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string,
  srcIcon?: string;
  isFocused?: boolean;
}
const TextArea: React.FC<TextAreaProps> = memo(({
  className,
  name,
  value,
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
    <div className="form-inner mb-50">
      <label>{title}</label>
      <textarea
        onChange={onChange}
        onBlur={onBlur}
        autoComplete={autoComplete ? autoComplete : "on"}
        value={value || ""}
        id={name}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}
)
export default TextArea