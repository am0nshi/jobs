import React, { useCallback, memo, } from 'react'
import InputError from '../InputError';
import Select from "react-select";

export type OptionType = {
  value: string;
  label: string;
};
export interface InputSelectProps {
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
    container: (styles: any) => ({ ...styles, width: "100%", height: "25%", backGround: "none", display: "flex", justifyItems: "center", alignItems: "center" }),
    control: (styles: any) => ({ ...styles, width: "100%", background: "none", border: "none" }),
    indicatorsContainer: (styles: any) => ({ ...styles, display: "none" })
  }
  return (
    <div className={className}>
      <label htmlFor={name}>{title}</label>
      {srcIcon ? <div className="flex gap-2">
        <img src={srcIcon} alt="" />
        <Select
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