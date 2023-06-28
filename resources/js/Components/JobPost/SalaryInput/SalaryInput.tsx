
import { EJobPos, ESalaryPer, ESalaryType } from "@/Enums/JobPost";
import { IJobPost }  from "../../../Interfaces/JobPost";
import SalaryInputVariableInput from './SalaryInputVariableInput';
import SalaryInputCheckBox from "./SalaryInputCheckBox";


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
                        <SalaryInputCheckBox  type={ESalaryType.fixedSalary} 
                            isChecked={data.salaryType===ESalaryType.fixedSalary} 
                            setSalaryType={onChangeCheckBox}
                            label="Fixed Salary"
                            />
                        <SalaryInputCheckBox  type={ESalaryType.rangeSalary}
                            isChecked={data.salaryType===ESalaryType.rangeSalary} 
                            setSalaryType={onChangeCheckBox}
                            label="Salary Range"
                            />
                        <SalaryInputCheckBox  type={ESalaryType.negotiableSalary} 
                            isChecked={data.salaryType===ESalaryType.negotiableSalary} 
                            setSalaryType={onChangeCheckBox}
                            label="Negotiable"
                            />                      
                    </div>
                     <SalaryInputVariableInput  data={data} setFieldNewObj={setFieldNewObj} salaryType={data.salaryType}/> 
                </div> 
            </div>
        </div>      
 
    </>)
}
export default SalaryInput;



