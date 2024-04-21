import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import DropDown from "./DropDown"; // Ensure your DropDown is responsive if it includes any content that needs to adjust
import { Images } from "../assets";
import DropDownService from "./DropDownServices";
import LinkButtons from "./LinkButtons";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const TrainingMobile = ({trainingOpen,trainingHandler,backHandlerTraining,}) => {
  return (
    <div
    className={`lg:hidden ${
      trainingOpen ? "block" : "hidden"
    } relative  w-full bg-white h-screen shadow-md z-50`}
  >
    <div className="flex flex-col items-center">
      <div
        onClick={backHandlerTraining}
        className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-5 my-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z" clipRule="evenodd" />
        </svg>
          <div className="px-2 font-bold text-xl ">Services</div>
        </div>
      </div>
      <Link
        to="/services"
       onClick={trainingHandler}
        className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-2 rounded-2xl border items-center justify-between w-full text-black px-3"
      >
        <div className="flex ">
       
          <div className="px-2  font-bold text-xl"> Our Services</div>
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
        
        className="text-lg flex flex-col bg-slate-200 rounded-2xl mt-1 duration-300 font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
          

          <div className="px-2 font-bold flex w-full">
            <p className="">
            VAPT
            </p>
          </div>
          
          
        </div>
            {/* LINK */}
            <Link onClick={trainingHandler} to='/services/websecurity' className="text-lg flex hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
       
        <img src={Images.websec} className="w-7" />
          <div className="px-2 ">Web Application Testing</div>
        </div>
         <ChevronDownIcon className="-rotate-90 w-6" />
      </Link>
        {/* LINK */}

        {/* LINK */}
        <Link onClick={trainingHandler} to='/services/networksecurity' className="text-lg flex hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
       
        <img src={Images.hacker} className="w-7" />
          <div className="px-2 ">Network Penetration Testing</div>
        </div>
         <ChevronDownIcon className="-rotate-90 w-6" />
      </Link>
        {/* LINK */}
        
        {/* LINK */}
        <Link onClick={trainingHandler} to='/services/IoTsecurity' className="text-lg flex hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
       
        <img src={Images.IoTsec} className="w-7" />
          <div className="px-2 "> IoT Penetration Testing</div>
        </div>
         <ChevronDownIcon className="-rotate-90 w-6" />
      </Link>
        {/* LINK */}
        
      
        
        {/* LINK */}
        <Link onClick={trainingHandler} to='/services/source-code-review' className="text-lg flex hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
       
        <img src={Images.webbug} className="w-7" />
          <div className="px-2 ">Source Code Review</div>
        </div>
         <ChevronDownIcon className="-rotate-90 w-6" />
      </Link>
        {/* LINK */}
          {/* LINK */}
          <Link onClick={trainingHandler} to='/services/androidsecurity' className="text-lg flex hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
       
        <img src={Images.mobsec} className="w-7" />
          <div className="px-2 "> Android Pen Testing</div>
        </div>
         <ChevronDownIcon className="-rotate-90 w-6" />
      </Link>
        {/* LINK */}
          {/* LINK */}
          <Link onClick={trainingHandler} to='/services/iossecurity' className="text-lg flex hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
       
        <img src={Images.mobsec} className="w-7" />
          <div className="px-2 ">iOS Pen Testing</div>
        </div>
         <ChevronDownIcon className="-rotate-90 w-6" />
      </Link>
        {/* LINK */}
           {/* LINK */}
           <Link onClick={trainingHandler} to='/services/apisecurity' className="text-lg flex hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-2  border items-center justify-between w-full text-black px-3"
      >
        <div className="flex flex-row">
       
        <img src={Images.bugs} className="w-7" />
          <div className="px-2 "> API Pen Testing</div>
        </div>
         <ChevronDownIcon className="-rotate-90 w-6" />
      </Link>
        {/* LINK */}
    
        
     


        </div>
        <Link
        to="services/RedTeaming"
        onClick={trainingHandler}
        className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-2 rounded-2xl border items-center justify-between w-full text-black px-3"
      >
        <div className="flex">
    


          <div className="px-2 font-bold text-xl">Red Teaming</div>
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
       to="services/Consultancy"
       onClick={trainingHandler}
        className="text-lg flex bg-slate-200 hover:bg-custom-buttonColor-Green hover:rounded-xl mt-1 duration-300 flex-row font-medium py-2 rounded-2xl border items-center justify-between w-full text-black px-3"
      >
        <div className="flex">
    

          <div className="px-2 font-bold text-xl"> Cybersecurity Consultancy</div>
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

export default TrainingMobile