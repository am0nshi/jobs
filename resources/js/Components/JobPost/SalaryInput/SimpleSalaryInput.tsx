
import InputText from "@/Components/InputText";
import Salary from "/public/assets/images/icon/salary-2.svg";

const SimpleSalaryInput:React.FC<{
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    value:number,
    name:string }>=({
    onChange,
    value,
    name})=>{        
    return <InputText 
        type="number"
        name={name} 
        className='col-lg-6 col-12' 
        value={value}  
        srcIcon={Salary} 
        onChange={onChange}
        min={0}
        />
}
export default SimpleSalaryInput;