import InputError from "../InputError";
import { TError } from "./Interfaces";


const AgreementPart:React.FC<{
    value:boolean,
    setField:(key:string,value:boolean)=>void ,
    errors:TError,
    name:string
}>=({value,setField,name,errors})=>{
  
  
    return(<>
<div className="col-md-12">
    <div className="form-agreement form-inner d-flex justify-content-between flex-wrap">
        <div className="form-group two">
            <input type="checkbox" id={name} checked={value} onChange={()=>setField(name,!value)}/>
            <label htmlFor={name}>Here, I accepted company terms & conditions.</label>
            {errors?.[name] ? <InputError message={errors[name]} /> : null}
        </div>        
    </div>
</div>
    </>)
}




export default AgreementPart;