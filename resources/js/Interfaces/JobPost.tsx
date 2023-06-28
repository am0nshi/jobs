import { ESalaryPer, ESalaryType } from "@/Enums/JobPost";


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


export type TError=Partial<Record<keyof IJobPost, string>>
export type TKey=keyof IJobPost
