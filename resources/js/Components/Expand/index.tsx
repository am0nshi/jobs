import { useState, memo } from 'react'
type ExpandProps = {
  children: string | JSX.Element | JSX.Element[]
}
const Expand = memo(({ children }: ExpandProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = () => {
    setIsOpened(state => !state);
  };

  return (
    <div className=' container mt-20'>
      {/* block */}
      <div className='block'>
        {/* wrap */}
        <div className={` 
        ${isOpened ? "max-h-[unset]" : "max-h-24"}
        overflow-hidden
        relative expand 
        after:content-[""]
        after:absolute 
        after:bottom-0 
        after:left-0 
        after:w-full 
        after:h-[50px] 
        after:bg-white/[0%] 
        after:bg-gradient-to-b 
        after:from-[#F8F8F8]/[0%] 
        after:to-[#F8F8F8]/[100%] 
        after:border-0
        `}>
          {/* Inner */}
          <div className=' text-sm leading-6 text-[#999999] relative indent-[4em]'>
            {children}
          </div>
        </div>
        {/* button */}
        <div onClick={handleToggle} className=' 
        block
        text-sm
        leading-6
        text-[#0165FC]
        mt-2
        cursor-pointer
        font-medium'>{isOpened ? "Close" : "Open"}</div>
      </div>
    </div>
  )
}
)
export default Expand