import React, { useCallback, memo, } from 'react'
import InputError from '../InputError';
import Select from "react-select";

type OptionType = {
  value: string;
  label: string;
};
interface InputSelectProps {
  className?: string;
  name: string;
  value?: string;
  title?: string;
  srcIcon?: string;
  options: Record<string, string>;
  isMulti?: boolean;
  errors?: { [key: string]: string };
  onChange?: any;
  setData?: Function
  onBlur?: any
}

const InputSelect: React.FC<InputSelectProps> = memo(({
  className = "mb-25",
  name,
  value,
  errors,
  title,
  srcIcon,
  options,
  isMulti = false,
  onChange,
  onBlur,
}) => {

  const selectOptions: OptionType[] = Object.keys(options).map((key) => {
    return {
      value: key,
      label: options[key]
    }
  })
  const selectStyles = {
    control: (styles: any) => ({ ...styles, width: "100%", height: "100%", backGround: "#eff3f2" })
  }
  return (
    <div className={` w-[100%] h-[100%] bg-[#EFF3F2;] ${className}`}>
      <label htmlFor={name}>{title}</label>
      {srcIcon ? <div className="flex gap-2">
        <img src={srcIcon} alt="" />
        <Select
          className="w-[100%]"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          id={name}
          name={name}
          options={selectOptions}
          isMulti={isMulti}
          styles={selectStyles}
        />
      </div>
        :
        <Select
          className="w-[100%]"
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          id={name}
          name={name}
          options={selectOptions}
          isMulti={isMulti}
          styles={selectStyles}
        />
      }

      {errors?.[name] ? <InputError message={errors[name]} /> : null}
    </div>
  )
})

export default InputSelect