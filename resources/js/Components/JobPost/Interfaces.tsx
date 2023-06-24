

export interface IJobPost extends Record<string,any>{
    jobtitle: string,
    jobcategory: string,
    jobtype: string,
    jobtag: string[]|[],
    vacancies: string,
    description: string,
    experiences: string,
    salaryMin:number,
    salaryMax:number,
    salaryPer:ESalaryPer|string
    salaryType: ESalaryType,
    deadline: string,
    agreement:boolean
}

export enum ESalaryType {
    fixedSalary="fixedSalary",
    rangeSalary="rangeSalary",
    negotiableSalary="negotiableSalary"
}
export enum ESalaryPer {
    hour="hour",
    month="month",
    annual="annual"
}

export type TError=Partial<Record<keyof IJobPost, string>>
export type TKey=keyof IJobPost
export type TValue= string;

export enum EJobPos
{
    jobtitle= "jobtitle",
    jobcategory="jobcategory",
    vacancies ="vacancies",
    description= "description",
    jobtype="jobtype",
    experiences="experiences",
    jobtag="jobtag",
    salaryMin="salaryMin",
    salaryMax="salaryMax",
    salaryPer="salaryPer",
    salaryType="salaryType",
    deadline="deadline",
    agreement="agreement"
}