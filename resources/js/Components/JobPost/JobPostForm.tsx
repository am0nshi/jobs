
import { FormEventHandler } from "react"
import { useForm } from "@inertiajs/react";
import { EJobPos, ESalaryType, IJobPost, TKey } from "./Interfaces";
import FieldsPart from "./FieldsPart";
import TextEditorPart from "./TextEditorPart";

import AgreementPart from "./AgreementPart";



const JobPostForm=() =>  {
  const { data, errors, setData, reset } = useForm<IJobPost>(initialJobPost)
  const setFieldByKey =(key:TKey,value:string|string[]|[]|boolean) =>  setData(key,value);
  const setFieldNewObj =(obj:IJobPost) =>  setData(obj);
 
  const onSubmit: FormEventHandler = (e) => {
    e.preventDefault();
    reset();
  };

  return (<>
  <div className="job-post-area pt-120 mb-120">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                     <div className="form-wrapper">
                        <form>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-title2">
                                        <h5>Job Information:</h5>
                                    </div>
                                </div>
                                <FieldsPart 
                                    data={data} 
                                    errors={errors} 
                                    setFieldByKey={setFieldByKey}  
                                    setFieldNewObj={setFieldNewObj}
                                />
                                <TextEditorPart 
                                    data={data}
                                    value={data.description}
                                    setField={setFieldNewObj} 
                                    title="Job Description*"
                                    errors={errors} 
                                    name={EJobPos.description}
                                />
                                <AgreementPart 
                                    value={data.agreement} 
                                    setField={setFieldByKey} 
                                    errors={errors} 
                                    name={EJobPos.agreement}
                                />
                                <div className="col-md-12">
                                    <div className="form-inner">
                                        <button className="primry-btn-2 lg-btn w-unset" type="submit">Post Now</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                     </div>
                </div>
            </div>
        </div>
    </div>                           
  </>)
  
}

export default JobPostForm

const initialJobPost:IJobPost={
    jobtitle: "",
    jobtype:"",
    jobcategory:"",
    vacancies: "",
    description: "",
    experiences:"",
    salaryType:ESalaryType.negotiableSalary,
    salaryMin:0,
    salaryMax:0,
    salaryPer:"",
    jobtag:[],
    deadline:"",
    agreement:false
}