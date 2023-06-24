import React, { memo} from "react";
import SunEditor from "suneditor-react";
import { en } from 'suneditor/src/lang'
import "suneditor/dist/css/suneditor.min.css";

import "/resources/css/text-editor.css";
import { MySetButtons } from "./Buttons";

 const TextEditor:React.FC<{
  value:string,
  setField(desc:string):void
}>=memo(({value,setField})=>{
 
  return (
    <>
      <SunEditor
        lang={en}
        setContents={value}
        setOptions={{       
          buttonList: MySetButtons,
          showPathLabel: false,
          resizeEnable:true,
          className: "",
          minHeight: "250px",
          "colorList": [         
              "#00ff76",
              "#Fffa00",
              "#Ff0004",
          ],
    }} 
    
        onChange={desc=>setField(desc)}
        
      />
    </>
  );

})

export default TextEditor;

