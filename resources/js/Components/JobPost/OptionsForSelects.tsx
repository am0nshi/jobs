import { ESalaryPer } from "@/Enums/JobPost";
import { ISelectOptions } from "@/Interfaces/Selects";
import { DoSelectOptions } from "./Functions";


const jobTypeArray=['Full Time','Part Time']
const jobCategoryArray=['UI/UX Designer','Font End Developer','Next Js','Laravel Devloper']
const obExperiencesArray=['Trainee','Junior','Middle','Senior','Another']
const jobTagArray=['devjobs','writingjobs','itjobs','marketing','hrjobs','graduate','legaljobs','salesjobs','adminjobs','webjobs',]


export const JobTypeOptions:  ISelectOptions[] = DoSelectOptions(jobTypeArray);
export const JobCategoryOptions:  ISelectOptions[] =  DoSelectOptions(jobCategoryArray);
export const JobExperiencesOptions:  ISelectOptions[] =  DoSelectOptions(obExperiencesArray);
export const JobTagOptions:  ISelectOptions[] =  DoSelectOptions(jobTagArray);
export const JobTagOptionsDef:  ISelectOptions[] = JobTagOptions.slice(-3)

export const SalaryPerOptions:ISelectOptions[] = [
    { value: ESalaryPer.annual, label: 'Annual' },
    { value: ESalaryPer.month, label: 'Per month' },
    { value: ESalaryPer.hour, label: 'Per hour' },
]
  

const filterPresentationFun = (inputValue: string) => {
  return JobTagOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

export const JobTagLoadOptions = (
  inputValue: string,
  callback: (options: ISelectOptions[]) => void
) => {
  setTimeout(() => {
    callback(filterPresentationFun(inputValue));
  }, 1000);
};
  

