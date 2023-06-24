
import React,{useMemo,memo} from 'react';
import Wrap from './Wrap';
import   "./../../../css/custom-select.css";
import {  ISelectAsync } from './Interface';
import AsyncCreatableSelect  from 'react-select/async-creatable';
import {SelectedOptions} from "./index"

const  MyAsyncSelect:React.FC<ISelectAsync>=memo(({
    isMulti=false,
    values=[],
    setField,
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
        onChange={(options)=>{
          if (options !==undefined&& options instanceof Array) {
            let resp=options?.map(x=>x.value)||[];
            setField(resp)
        }
           else  setField([])         
        }}
        cacheOptions={cacheOptions} 
        loadOptions={loadOptions} 
        defaultOptions={defaultOptions}
        isMulti={isMulti}
      />
    </Wrap>)
})

export default MyAsyncSelect;

