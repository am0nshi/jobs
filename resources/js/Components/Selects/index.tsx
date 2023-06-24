import MySimpleSelect from "./MySimpleSelect"
import MyAsyncSelect from "./MyAsyncSelect"
import { ISelectOptions } from "./Interface";

export  {MySimpleSelect,MyAsyncSelect,SelectedOptions,SelectedOption};

 function SelectedOption(value:string,arr:ISelectOptions[]|[]):ISelectOptions[]|[]{
    let resp=SelectedOptionObject(value,arr);
    if(resp) return [resp];
    else return [];
}

 function SelectedOptions(values:string[]|[],arr:ISelectOptions[]|[]):ISelectOptions[]|[]{
    if (!values.length) return []
    else{
      let resp:ISelectOptions[]=[];
      for (let value of values) {
        let item=SelectedOptionObject(value,arr);
        if(item){
          resp.push(item)
        }
      }
      if(resp.length) return resp
      else return []
    }
  }
  function SelectedOptionObject(value:string,arr:ISelectOptions[]|[]):ISelectOptions|undefined{
    if (!value.length) return undefined
    let resp:ISelectOptions| undefined=undefined;
    if(arr.length){
      resp=arr.filter(x=>x.value===value)[0];
    }
    if(!resp){
      resp={value: value, label: value}
    }
    return resp;
  }