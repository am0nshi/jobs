import { ISelectOptions } from "@/Interfaces/Selects";
import { MultiValue, SingleValue } from "react-select";

export function GetValueFromSelect(selected: SingleValue<ISelectOptions>):string{
    return selected?.value??"";
}
export function GetValuesFromSelect(selected: MultiValue<ISelectOptions>|SingleValue<ISelectOptions>):Array<string>|string{
    if(Array.isArray(selected)) return selected?.map(x=>x.value)||[];
    else return GetValueFromSelect(selected as SingleValue<ISelectOptions>);
}
export function DoSelectOptions(array:Array<string>):Array<ISelectOptions>|[]{  
    return array?.map(item=>({value:item,label:item})||[] )
}
