

import InputText from "../InputText";
import {MyAsyncSelect, MySimpleSelect} from "../Selects/";
import { ISelectOptions } from "../Selects/Interface";
import { IJobPost,TError, TKey,EJobPos } from "./Interfaces";


import CompanySvg from "/public/assets/images/icon/company-2.svg";
import UserSvg from "/public/assets/images/icon/user-2.svg";
import SearchSvg from "/public/assets/images/icon/search-2.svg";
import CategorySvg from "/public/assets/images/icon/category-2.svg";
import EmailSvg from "/public/assets/images/icon/email-2.svg";

import SalaryInput from './SalaryInput';
import InputDate from '../InputDate';


const FieldsPart:React.FC<{
    data:IJobPost,
    errors:TError,
    setFieldByKey :(key:TKey,value:string|string[]|[])=>void ,
    setFieldNewObj:(obj:IJobPost)=>void ,
}>=({data,errors,setFieldByKey,setFieldNewObj})=>{
    return(<>
     <InputText 
        className="col-md-6"   
        onChange={e => setFieldByKey(EJobPos.jobtitle, e.target.value)}
        value={data.jobtitle}
        errors={errors}
        name={EJobPos.jobtitle}
        placeholder='Senior Engineer'
        srcIcon={CompanySvg}
        title='Job Title*'
        />
        <MySimpleSelect 
          className="col-md-6"   
          value={data.jobcategory}
          name={EJobPos.jobcategory}
          srcIcon={CategorySvg}
          title='Job Category*'
          errors={errors}
          options={jobCategoryOptions}
          setField={value => setFieldByKey(EJobPos.jobcategory, value)}
          />      
         <InputText 
        className="col-md-6"   
        onChange={e => setFieldByKey(EJobPos.vacancies, e.target.value)}
        value={data.vacancies}
        errors={errors}
        name={EJobPos.vacancies}
        placeholder='7 Person'
        srcIcon={UserSvg}
        title='Vacancies*'
        />
        <SalaryInput data={data}  setFieldNewObj={setFieldNewObj}/>     
        <MySimpleSelect 
        className="col-md-6"  
        value={data.jobtype}
        name={EJobPos.jobtype}
        srcIcon={CompanySvg}
        title='Job Type*'
        errors={errors}
        options={jobTypeOptions}
        setField={value => setFieldByKey(EJobPos.jobtype, value)}
        />
         <MySimpleSelect 
        className="col-md-6"  
        name={EJobPos.experiences}
        value={data.experiences}
        srcIcon={EmailSvg}
        title='Experience Level*'
        errors={errors}
        options={jobExperiencesOptions}
        setField={value => setFieldByKey(EJobPos.experiences, value)}
        />
         <MyAsyncSelect 
        className="col-md-6"  
        name={EJobPos.jobtag}
        values={data.jobtag}
        srcIcon={SearchSvg}
        title='Job Tag*'
        errors={errors}
        setField={valueArr => setFieldByKey(EJobPos.jobtag, valueArr?valueArr:[])} 
        loadOptions={jobTagLoadOptions} 
        defaultOptions={jobTagOptionsDef}
        isMulti={true}
        />
       <InputDate 
        className="col-md-6"    
        name={EJobPos.deadline}
        title='Deadline*'
        setField={date=>setFieldByKey(EJobPos.deadline, date)}
        value={data.deadline}
       />
    </>)
}
export default FieldsPart;

const jobTypeOptions:  ISelectOptions[] = [
    { value: 'Full Time', label: 'Full Time' },
    { value: 'Part Time', label: 'Part Time' },
  ];
  const jobCategoryOptions:  ISelectOptions[] = [
    { value: 'UI/UX Designer', label: 'UI/UX Designer' },
    { value: 'Font End Developer', label: 'Font End Developer' },
    { value: 'Next Js', label: 'Next Js' },
    { value: 'Laravel Devloper', label: 'Laravel Devloper' },   
  ];

  const jobExperiencesOptions:  ISelectOptions[] = [
    { value: 'Trainee', label: 'Trainee' },
    { value: 'Junior', label: 'Junior' },
    { value: 'Middle', label: 'Middle' },
    { value: 'Senior', label: 'Senior' },
    { value: 'Another', label: 'Another' },
  ];

 
  
const filterPresentationFun = (inputValue: string) => {
  return jobTagOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const jobTagLoadOptions = (
  inputValue: string,
  callback: (options: ISelectOptions[]) => void
) => {
  setTimeout(() => {
    callback(filterPresentationFun(inputValue));
  }, 1000);
};
  

 const jobTagOptions:  ISelectOptions[] = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];
const jobTagOptionsDef:  ISelectOptions[] = jobTagOptions.slice(-3)

