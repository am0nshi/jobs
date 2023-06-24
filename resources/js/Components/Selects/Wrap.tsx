import React, {  memo } from 'react';
import InputError from "../InputError";
import { IWrap } from './Interface';

const Wrap: React.FC<IWrap> = ({
    className,
    name,
    errors,
    title,
    srcIcon,
    children
  }) => {
    return ( <div className={className}>
        <div className="form-inner mb-25">
          <label htmlFor={name}>{title}</label>
          <div className="input-area"> 
            {srcIcon ? <img src={srcIcon} alt="" /> : null}
            {children}
          </div>
          {errors?.[name] ? <InputError message={errors[name]} /> : null}
        </div>
      </div>);
}


export default memo(Wrap);

