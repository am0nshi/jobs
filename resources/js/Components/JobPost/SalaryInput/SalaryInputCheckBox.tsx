import { ESalaryType } from "@/Enums/JobPost";

const SalaryInputCheckBox:React.FC<{
    type:ESalaryType,
    isChecked:boolean,
    label:string,
    setSalaryType: (type:ESalaryType)=>void,
}>=({type,isChecked,label,setSalaryType})=>{

    return (<>
     <div className="single-salery">
        <input className="form-check-input" type="radio" 
        id={type} name="showInputBox" 
        checked={isChecked}
        onChange={()=>setSalaryType(type)}
        />
        <label htmlFor={type}>{label}</label>
    </div>
    </>)
}
export default SalaryInputCheckBox;