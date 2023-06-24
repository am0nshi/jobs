import ReactDatePicker from "react-datepicker";
import React, {  memo, useEffect, useRef } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import "/resources/css/custom-datepicker.css";



import CalenderSvg from "/public/assets/images/icon/calender2.svg";
import InputError from "../InputError";

const InputDate:React.FC<IInputData> = memo(({
    className,
    name,
    value,
    errors,
    title,
    srcIcon,
    placeholder="MM/DD/YY",
    dateFormat="MM/dd/yy",
    setField,
    isFocused
  }) => {
    const localRef = useRef<HTMLInputElement>(null);
    const today = new Date()

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
        {srcIcon ? <img src={srcIcon} alt="" /> : <img src={CalenderSvg} alt="" />}
            <ReactDatePicker 
            popperPlacement="top-start"
            value={value}
            // onChange={date=>console.log(date)}
            onChange={(date) => setField(date?.toLocaleDateString('en-US')??"")} 
            placeholderText={placeholder}
            dateFormat={dateFormat}
            minDate={today}
            />
            <div 
                className={value.length?"react-datepicker__close-button":"display_none" }
                aria-hidden="true"
                onClick={()=>setField("")}
            >
                <svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false" className="css-tj5bde-Svg">
                    <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                    </svg>
            </div>
             {errors?.[name] ? <InputError message={errors[name]} /> : null}
        </div>     
    </div> 
</div>)
})

export default InputDate;

interface IInputData{
    title: string,
    placeholder?: string,
    className: string,
    name: string,
    value: string,
    srcIcon?: string;
    errors?: Record<string, string | undefined>;
    isFocused?: boolean;
    setField:(date:string)=>void
    dateFormat?: string,
}

