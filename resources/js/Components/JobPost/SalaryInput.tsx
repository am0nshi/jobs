
import { EJobPos, ESalaryType, ESalaryPer, IJobPost } from "./Interfaces";
import VariableInput from './VariableInput';


const SalaryInput:React.FC<{
    data:IJobPost,
    setFieldNewObj:(obj:IJobPost)=>void ,
}>=({data,setFieldNewObj})=>{
  
    function onChangeCheckBox(salaryType:ESalaryType){

        if(data.salaryType!==salaryType){
            let per= data.salaryPer.length?  data.salaryPer : ESalaryPer.annual;            
            if(salaryType===ESalaryType.fixedSalary){
                setFieldNewObj({ ...data,
                    [EJobPos.salaryType]:salaryType, 
                    [EJobPos.salaryMax]:data.salaryMin, 
                    [EJobPos.salaryPer]:per})
            }
            else if(salaryType===ESalaryType.rangeSalary){
                let max= data.salaryMax < data.salaryMin?  data.salaryMin : data.salaryMax;
                setFieldNewObj({ ...data,
                    [EJobPos.salaryType]:salaryType, 
                    [EJobPos.salaryMax]:max, 
                    [EJobPos.salaryPer]:per})
            }
            else{
                setFieldNewObj({ ...data,
                    [EJobPos.salaryType]:salaryType, 
                    [EJobPos.salaryMax]:0, 
                    [EJobPos.salaryMin]:0, 
                    [EJobPos.salaryPer]:""  }) 
            }
        }
    }

    return(<>
        <div className="col-md-6">
            <div className="form-inner">
                <div className="salary-wrap">
                    <label className="label">Budget/Salary*</label>
                    <div className="salery-select-area">
                        <MyCheckBox  type={ESalaryType.fixedSalary} 
                            isChecked={data.salaryType===ESalaryType.fixedSalary} 
                            setSalaryType={onChangeCheckBox}
                            label="Fixed Salary"
                            />
                        <MyCheckBox  type={ESalaryType.rangeSalary}
                            isChecked={data.salaryType===ESalaryType.rangeSalary} 
                            setSalaryType={onChangeCheckBox}
                            label="Salary Range"
                            />
                        <MyCheckBox  type={ESalaryType.negotiableSalary} 
                            isChecked={data.salaryType===ESalaryType.negotiableSalary} 
                            setSalaryType={onChangeCheckBox}
                            label="Negotiable"
                            />                      
                    </div>
                     <VariableInput  data={data} setFieldNewObj={setFieldNewObj} salaryType={data.salaryType}/> 
                </div> 
            </div>
        </div>      
 
    </>)
}
export default SalaryInput;

const MyCheckBox:React.FC<{
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

