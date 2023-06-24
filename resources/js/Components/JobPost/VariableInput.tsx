
import { EJobPos, ESalaryType, ESalaryPer, IJobPost } from "./Interfaces";
import Salary from "/public/assets/images/icon/salary-2.svg";
import InputNumber from '../InputNumber';
import { ISelectOptions } from '../Selects/Interface';
import { MySimpleSelect } from '../Selects';



const VariableInput:React.FC<{
    data:IJobPost,
    salaryType:ESalaryType,
    setFieldNewObj:(obj:IJobPost)=>void ,
}>=({data,setFieldNewObj})=>{
    function onChangeInput(e:React.ChangeEvent<HTMLInputElement>,isMin=true):void{
        let num:number=e.target.valueAsNumber
        if(data.salaryType===ESalaryType.fixedSalary){
            setFieldNewObj({...data,[EJobPos.salaryMin]:num,[EJobPos.salaryMax]:num})     
        }
        else if(data.salaryType===ESalaryType.rangeSalary&&isMin){
            setFieldNewObj({...data,[EJobPos.salaryMin]:num})       
        }
        else if(data.salaryType===ESalaryType.rangeSalary&&!isMin){
            setFieldNewObj({...data,[EJobPos.salaryMax]:num}) 
        }
        else{
            setFieldNewObj({...data,[EJobPos.salaryMin]:0,[EJobPos.salaryMax]:0})
        }

    }
    function onChangeSelect(per:string):void{
       setFieldNewObj({...data,[EJobPos.salaryPer]:per})           
    }
    return (<>
    {data.salaryType==ESalaryType.fixedSalary||data.salaryType==ESalaryType.rangeSalary? <>
            <NumInput 
                onChangeInput={onChangeInput} 
                value={data.salaryMin} 
                />
               </>:null}
    {data.salaryType==ESalaryType.rangeSalary? <>
        <NumInput 
                    onChangeInput={onChangeInput} 
                    value={data.salaryMax} 
                    isMin={false}
                    />
        </>:null}
    {data.salaryType==ESalaryType.fixedSalary||data.salaryType==ESalaryType.rangeSalary? <>
        <MySimpleSelect
                name='per'
                options={salaryPerOptions}
                value={data.salaryPer}
                srcIcon={Salary} 
                title=''
                setField={onChangeSelect}
                className='col'
                isClearable={false}
                />
            </>:null}
    </>)
   
    
}
export default VariableInput;
const salaryPerOptions:ISelectOptions[] = [
    { value: ESalaryPer.annual, label: 'Annual' },
    { value: ESalaryPer.month, label: 'Per month' },
    { value: ESalaryPer.hour, label: 'Per hour' },
]

const NumInput:React.FC<{
    onChangeInput:(e:React.ChangeEvent<HTMLInputElement>,isMin:boolean)=>void,
        value:number,
        isMin?:boolean}>=({onChangeInput,value,isMin=true})=>{
    return <InputNumber  
        name={isMin?EJobPos.salaryMin:EJobPos.salaryMax} 
        className='col-lg-6 col-12' 
        value={value}  
        srcIcon={Salary} 
        onChange={(e)=>onChangeInput(e,isMin)}
        />
}

