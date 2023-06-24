
import React,{useMemo,memo} from 'react';

import Select from 'react-select';
import Wrap from './Wrap';
import   "./../../../css/custom-select.css";
import { ISelect } from './Interface';
import {SelectedOption} from "./index"

const  MySimpleSelect:React.FC<ISelect>=memo(({
    options,
    value,
    setField,
    className,
    name,
    errors,
    title,
    srcIcon,
    isClearable=true
  })=> {
    
    const memoizedValue = useMemo(() => SelectedOption(value,options), [value])  

    return (<Wrap name={name} srcIcon={srcIcon} className={className} title={title} errors={errors}>
     <Select
        className="col"
        classNamePrefix="select"
        value={memoizedValue}
        autoFocus={false}
        isDisabled={false}
        isLoading={false}
        isClearable={isClearable}
        isRtl={false}
        isSearchable={true}
        name={name}
        options={options}
        onChange={o=>{
          setField(o?.value??"")
        }}
      />
    </Wrap>)
})

export default MySimpleSelect;


  