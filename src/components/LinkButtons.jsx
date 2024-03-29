import { useState } from "react";

const LinkButtons = ({ links,nobold,isOpen }) => {
    const [isHover, setIsHover] = useState(false);
  
    return (
      <>
      <p className={`${isHover ||isOpen ? 'text-green-500' : '' }  rounded-lg duration-200 text-center  lg:font-bold`} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)}>{links}</p>
              <div className={`${isHover ||isOpen ? 'lg:border-b-4 border-green-500 w-full' : 'w-0'} duration-150`}></div>
      </>
  
    );
  };

export default LinkButtons;