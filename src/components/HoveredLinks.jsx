import { useState } from "react";
import { Link } from "react-router-dom";

const HoveredLinks = ({name,data,link,isOpen}) => {
    const [isHover, setIsHover] = useState(false);
  
    return (
      <Link to={`${link}`}
      onMouseEnter={()=>setIsHover(true)}
      onMouseLeave={()=>setIsHover(false)}
        key={name}
        className={` border-b-2 p-2 text-center lg:text-left lg:font-bold  lg:text-2xl lg:uppercase lg:border lg:grid lg:p-10 flex justify-start items-start lg:justify-normal  ${isHover? `lg:bg-green-500 lg:text-white`:''} ${name==='Red Teaming'?'hover:lg:bg-red-500':''} transition duration-200`}
      >
        <p className={`${isHover? 'scale-105 lg:translate-x-7 lg:scale-100':''} text-white duration-300 `}>
       {name?.split('_').join(' ')}
        </p>
          
        <div className={`${isHover ? 'lg:h-7 lg:bg-white  lg:w-full' : 'lg:w-0 lg:h-7'} duration-500`}></div>
      </Link>
    )
  }

  export default HoveredLinks;