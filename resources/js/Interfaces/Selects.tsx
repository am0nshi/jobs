import { MultiValue, SingleValue } from "react-select";


export interface IInputTextProps {
    name: string;
    title: string;
    srcIcon?: string;
    errors?: Record<string, string | undefined>;
    className?: string;
    isClearable?:boolean;
  }
  export interface IWrap extends IInputTextProps{ 
    children:JSX.Element;
  }
  export interface ISelect extends IInputTextProps{ 
    options:Array<ISelectOptions>;
    value:string;
    onChange:(selected:ISelectOptions|null)=>void;
  }
  export interface ISelectAsync extends IInputTextProps{ 
    values:string[]|[];
    onChange:(values: MultiValue<ISelectOptions> | SingleValue<ISelectOptions>)=>void;
    isMulti?:boolean;
    cacheOptions?:boolean;
    loadOptions:(
      inputValue: string,
      callback: (options: ISelectOptions[]) => void
    ) =>void;
    defaultOptions:Array<ISelectOptions>
  }
  export interface ISelectOptions{ 
    readonly value: string;
    readonly label: string;
    readonly color?: string;
    readonly isDisabled?: boolean;

  }