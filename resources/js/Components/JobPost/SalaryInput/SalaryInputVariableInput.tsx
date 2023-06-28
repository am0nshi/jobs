


import { useCallback } from "react";
import SimpleSalaryInput from './SimpleSalaryInput';
import { SalaryPerOptions } from '../OptionsForSelects';
import { GetValueFromSelect } from '../Functions';
import { MySimpleSelect } from "@/Components/Selects";

import { EJobPos, ESalaryType } from "@/Enums/JobPost";
import { IJobPost } from "@/Interfaces/JobPost";

import Salary from "/public/assets/images/icon/salary-2.svg";

const SalaryInputVariableInput: React.FC<{
    data: IJobPost,
    salaryType: ESalaryType,
    setFieldNewObj: (obj: IJobPost) => void,
}> = ({ data, setFieldNewObj }) => {

    const onChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>, isMin = true): void => {
        let num: number = e.target.valueAsNumber
        if (data.salaryType === ESalaryType.fixedSalary) {
            setFieldNewObj({ ...data, [EJobPos.salaryMin]: num, [EJobPos.salaryMax]: num })
        }
        else if (data.salaryType === ESalaryType.rangeSalary && isMin) {
            setFieldNewObj({ ...data, [EJobPos.salaryMin]: num })
        }
        else if (data.salaryType === ESalaryType.rangeSalary && !isMin) {
            setFieldNewObj({ ...data, [EJobPos.salaryMax]: num })
        }
        else {
            setFieldNewObj({ ...data, [EJobPos.salaryMin]: 0, [EJobPos.salaryMax]: 0 })
        }

    }, [data])

    return (<>
        {data.salaryType == ESalaryType.fixedSalary || data.salaryType == ESalaryType.rangeSalary ?
            <SimpleSalaryInput
                onChange={e => onChangeInput(e, true)}
                value={data.salaryMin}
                name={EJobPos.salaryMin}
            />
            : null}
        {data.salaryType == ESalaryType.rangeSalary ?
            <SimpleSalaryInput
                onChange={e => onChangeInput(e, false)}
                value={data.salaryMax}
                name={EJobPos.salaryMax}
            />
            : null}
        {data.salaryType == ESalaryType.fixedSalary || data.salaryType == ESalaryType.rangeSalary ? <>
            <MySimpleSelect
                name={EJobPos.salaryPer}
                options={SalaryPerOptions}
                value={data.salaryPer}
                srcIcon={Salary}
                title=''
                onChange={selected => setFieldNewObj({ ...data, [EJobPos.salaryPer]: GetValueFromSelect(selected) })}
                className='col'
                isClearable={false}
            />
        </> : null}
    </>)


}
export default SalaryInputVariableInput;



