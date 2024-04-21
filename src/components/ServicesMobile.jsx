import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown"; // Ensure your DropDown is responsive if it includes any content that needs to adjust
import { Images } from "../assets";
import DropDownService from "./DropDownServices";
import LinkButtons from "./LinkButtons";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const ServicesMobile = ({servicesOpen,servicesHandler,backHandler}) => {
  return (
    <div
    className={`lg:hidden ${
      servicesOpen ? "block" : "hidden"
    } relative  w-full bg-white h-screen shadow-md z-50`}
  >
    <div className="flex flex-col items-center">
      <div
        onClick={backHandler}
        className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-5 my-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
        </svg>
          <div className="px-2 font-bold text-xl ">Training</div>
        </div>
      </div>
      <Link
        to="/Training"
       onClick={servicesHandler}
        className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row rounded-2xl font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex">
       
          <div className="px-2 font-bold text-xl"> Our Training</div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>
      <div
        
        className="text-lg flex flex-col bg-slate-200  mt-1 duration-300 rounded-2xl font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
          

          <div className="px-2 font-bold flex w-full">
            <p className="">
            Ethical hacking
            </p>
          </div>
          
          
        </div>
            {/* LINK */}
            <Link onClick={servicesHandler} to='/training/bugbounty' className="text-lg flex hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row rounded-2xl font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
       
        <img src={Images.bugs} className="w-7" />
          <div className="px-2 ">Bug Bounty</div>
        </div>
         <ChevronDownIcon className="-rotate-90 w-6" />
      </Link>
        {/* LINK */}

        {/* LINK */}
        <Link onClick={servicesHandler} to='/training/linuxfundamentals' className="text-lg flex hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row rounded-2xl font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
       
        <img src={Images.linux} className="w-7" />
          <div className="px-2 ">Linux Fundamental</div>
        </div>
         <ChevronDownIcon className="-rotate-90 w-6" />
      </Link>
        {/* LINK */}
        
        {/* LINK */}
        <Link onClick={servicesHandler} to='/training/ethicalhacking' className="text-lg flex hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row rounded-2xl font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
       
        <img src={Images.hacker} className="w-7" />
          <div className="px-2 ">Advanced Ethical Hacking</div>
        </div>
         <ChevronDownIcon className="-rotate-90 w-6" />
      </Link>
        {/* LINK */}
        
      
        
        {/* LINK */}
        <Link onClick={servicesHandler} to='/training/networkpt' className="text-lg flex hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row rounded-2xl font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
       
        <img src={Images.webbug} className="w-7" />
          <div className="px-2 ">Network Penetration Testing</div>
        </div>
         <ChevronDownIcon className="-rotate-90 w-6" />
      </Link>
        {/* LINK */}
          {/* LINK */}
          <Link onClick={servicesHandler} to='/training/webpt' className="text-lg flex hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row rounded-2xl font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
       
        <img src={Images.webhack} className="w-7" />
          <div className="px-2 "> Web App Penetration Testing</div>
        </div>
         <ChevronDownIcon className="-rotate-90 w-6" />
      </Link>
        {/* LINK */}
           {/* LINK */}
           <Link onClick={servicesHandler} to='/training/mobilept' className="text-lg flex hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row rounded-2xl font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
       
        <img src={Images.mobsec} className="w-7" />
          <div className="px-2 ">Mobile App Penetration Testing</div>
        </div>
         <ChevronDownIcon className="-rotate-90 w-6" />
      </Link>
        {/* LINK */}
    
        
     


        </div>
        <Link
        to="training/corporatetraining"
        onClick={servicesHandler}
        className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row rounded-2xl font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex">
    


          <div className="px-2 font-bold text-xl"> Corporate training</div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>
      <Link
       to="training/diploma"
       onClick={servicesHandler}
        className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row rounded-2xl font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex">
    

          <div className="px-2 font-bold text-xl"> Diploma in Cyber security</div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>
      <Link
       to='training/internship'
       onClick={servicesHandler}
        className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row rounded-2xl font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex">
        

          <div className="px-2 font-bold text-xl"> Internship Training</div>
        </div>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </Link>


        
        </div>

  </div>
  )
}

export default ServicesMobile