import { useState, memo, ReactNode } from 'react'
type ExpandProps = {
  children: string | JSX.Element | JSX.Element[] | ReactNode
}
const Expand = memo(({ children }: ExpandProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggle = () => {
    setIsOpened(state => !state);
  };

  return (
    <>
      {/* block */}
      <div className='block mb-20'>
        {/* wrap */}
        <div className={` 
        ${isOpened ? "max-h-[unset]" : "max-h-24"}
        overflow-hidden
        relative expand 
       ${!isOpened ? ' after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[50px] after:bg-white/[0%] after:bg-gradient-to-b after:from-[#F8F8F8]/[0%] after:to-[#F8F8F8]/[100%] after:border-0'
            :
            ""
          }
        `}>
          {/* Inner */}
          <div className=' text-sm leading-6 text-[#999999] relative '>
            {children}
          </div>
        </div>
        {/* button */}
        <div onClick={handleToggle} className=' 
        block
        text-md
        leading-6
        text-[#00A7AC]
        mt-2
        cursor-pointer
        font-medium'>{isOpened ? "Close" : "Open"}</div>
      </div>
    </>
  )
}
)
export default Expand