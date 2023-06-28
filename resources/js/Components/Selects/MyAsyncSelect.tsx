
import React,{useMemo,memo} from 'react';
import Wrap from './Wrap';
import { ISelectAsync, ISelectOptions } from '@/Interfaces/Selects';
import AsyncCreatableSelect  from 'react-select/async-creatable';
import {SelectedOptions} from "./index"
import "/resources/css/custom-select.css";

const  MyAsyncSelect:React.FC<ISelectAsync>=memo(({
    isMulti=false,
    values=[],
    onChange,
    className,
    name,
    errors,
    title,
    srcIcon,
    isClearable=true,
    cacheOptions=true,
    loadOptions,
    defaultOptions
  })=> {
    const memoizedValue = useMemo(() => SelectedOptions(values,defaultOptions), [values])
    
    return (<Wrap name={name} srcIcon={srcIcon} className={className} title={title} errors={errors}>
     <AsyncCreatableSelect
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
        onChange={onChange}
        cacheOptions={cacheOptions} 
        loadOptions={loadOptions} 
        defaultOptions={defaultOptions}
        isMulti={isMulti}
      />
    </Wrap>)
})

export default MyAsyncSelect;

