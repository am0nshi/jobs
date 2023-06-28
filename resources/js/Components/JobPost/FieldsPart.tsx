

import InputText from "../InputText";
import { MyAsyncSelect, MySimpleSelect } from "../Selects/";
import SalaryInput from './SalaryInput/SalaryInput';
import InputDate from '../InputDate';
import { JobCategoryOptions, JobExperiencesOptions, JobTagLoadOptions, JobTagOptionsDef, JobTypeOptions } from "./OptionsForSelects";
import { GetValuesFromSelect } from "./Functions";

import { IJobPost, TError, TKey } from "@/Interfaces/JobPost";
import { EJobPos } from "@/Enums/JobPost";

import CompanySvg from "/public/assets/images/icon/company-2.svg";
import UserSvg from "/public/assets/images/icon/user-2.svg";
import SearchSvg from "/public/assets/images/icon/search-2.svg";
import CategorySvg from "/public/assets/images/icon/category-2.svg";
import EmailSvg from "/public/assets/images/icon/email-2.svg";

const FieldsPart: React.FC<{
    data: IJobPost,
    errors: TError,
    setFieldByKey: (key: TKey, value: string | string[] | []) => void,
    setFieldNewObj: (obj: IJobPost) => void,
}> = ({ data, errors, setFieldByKey, setFieldNewObj }) => {
    return (<>
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
            options={JobCategoryOptions}
            onChange={selected => setFieldByKey(EJobPos.jobcategory, GetValuesFromSelect(selected))}
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
        <SalaryInput data={data} setFieldNewObj={setFieldNewObj} />
        <MySimpleSelect
            className="col-md-6"
            value={data.jobtype}
            name={EJobPos.jobtype}
            srcIcon={CompanySvg}
            title='Job Type*'
            errors={errors}
            options={JobTypeOptions}
            onChange={selected => setFieldByKey(EJobPos.jobtype, GetValuesFromSelect(selected))}
        />
        <MySimpleSelect
            className="col-md-6"
            name={EJobPos.experiences}
            value={data.experiences}
            srcIcon={EmailSvg}
            title='Experience Level*'
            errors={errors}
            options={JobExperiencesOptions}
            onChange={selected => setFieldByKey(EJobPos.experiences, GetValuesFromSelect(selected))}

        />
        <MyAsyncSelect
            className="col-md-6"
            name={EJobPos.jobtag}
            values={data.jobtag}
            srcIcon={SearchSvg}
            title='Job Tag*'
            errors={errors}
            onChange={selected => setFieldByKey(EJobPos.jobtag, GetValuesFromSelect(selected))}
            loadOptions={JobTagLoadOptions}
            defaultOptions={JobTagOptionsDef}
            isMulti={true}
        />
        <InputDate
            className="col-md-6"
            name={EJobPos.deadline}
            title='Deadline*'
            onChange={date => setFieldByKey(EJobPos.deadline, date)}
            value={data.deadline}
        />
    </>)
}
export default FieldsPart;