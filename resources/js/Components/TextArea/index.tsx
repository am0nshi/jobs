import React, { useRef, useEffect, memo, InputHTMLAttributes } from 'react'
export interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string,
  isFocused?: boolean;
}
const TextArea: React.FC<TextAreaProps> = memo(({
  name,
  value,
  title,
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