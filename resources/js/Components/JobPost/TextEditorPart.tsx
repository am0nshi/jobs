

import {useRef, useEffect} from "react"
import InputError from "../InputError";
import TextEditor  from "../TextEditor";
import { IJobPost,TError } from "@/Interfaces/JobPost";


const TextEditorPart:React.FC<{
    data:IJobPost,
    value:string,
    errors:TError,
    title:string,
    setFieldNewObj:(obj:IJobPost) => void;
    name:string
}>=({errors,setFieldNewObj,name,data,value,title})=>{
    
    const ref = useRef<IJobPost>(data);
    useEffect(() => {ref.current = data;},[data]);
    
    return(<>
     <div className="col-md-12">
        <div className="form-inner mb-30">
            <label htmlFor={name}>{title}</label>
            <TextEditor 
                onChange={desc=>setFieldNewObj({... ref.current,[name]:desc})} 
                value={value}
                />
            {errors?.[name] ? <InputError message={errors[name]} /> : null}
        </div>      
     </div>
    </>)
}
export default TextEditorPart;

