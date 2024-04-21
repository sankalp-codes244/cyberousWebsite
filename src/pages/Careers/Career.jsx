import React, { useEffect } from "react";
import { Images } from "../../assets";
import About from "../Homepage/AboutUs/About";
import Profiles from "./Profiles/Profiles";

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="bg-custom-black-color h-screen">
        <div className="flex justify-center flex-col text-white py-40 md:p-60">
          <h1 className="font-Roboto text-center p-4 text-5xl">
            Join us and transform the World
          </h1>
          <h1 className="font-Roboto text-center text-custom-fontColor-Green text-2xl">
            Start your career with Cyberous
          </h1>
          <p className="font-Roboto text-base md:text-lg my-4 px-4 text-center ">
            Diploma in Cyber Security, also known as Diploma in Information
            Security, trains students for industrial work methodologies with job
            assistance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 px-20 md:px-0">
            <button className="w-full md:w-1/2 h-16 my-10 sm:m-0 md:m-10 bg-custom-buttonColor-Green text-white duration-300 border border-solid border-green-700 rounded-lg text-base md:ml-52">
              Contact Us +91 81999 85888
            </button>
            <button className="relative bg-transparent w-full md:w-1/2 h-16 sm:m-0 md:m-10 hover:bg-custom-buttonColor-Green hover:text-white text-green-500 duration-300 border border-solid border-custom-buttonColor-Green rounded-lg text-base md:ml-10">
              <img
                src={Images.chevronDown}
                className="absolute invert -rotate-90 left-4 top-3 border-2 rounded-full border-solid border-black p-2 w-8 md:w-10 "
              />
              Apply Now
            </button>
          </div>
        </div>
      </div>
      <div>
        <Profiles />
      </div>
      <div>
        <About />
      </div>
      <div className="bg-custom-black-color relative h-ful pb-20 lg:px-20 lg:py-40">
       <div className="lg:mb-32 pt-10">
       <h1 className="font-serif text-center  text-white text-3xl lg:text-5xl ">
          HOW WE WORK?
        </h1>
        <div className="bg-green-500 h-2 w-1/4 mx-auto mt-2 mb-7"></div>
       </div>
        <div className="grid grid-cols-1 lg:flex  gap-4">
            <img src={Images.howWeWork} alt="how we work" className="lg:w-1/3 px-8 lg:px-0 object-cover" />
          <div className="mx-7 lg:1/3 justify-center   p-2">
            <p className="text-white  text-justify lg:text-2xl">
            At Cyberous, our approach to cybersecurity is proactive,
              collaborative, and results- driven. We begin by understanding our
              clients' unique challenges and objectives, allowing us to tailor
              our solutions accordingly. Our team of experts employs a
              combination of cutting-edge technologies, industry best practices,
              and hands-on experience to deliver effective results. We
              prioritize open communication and collaboration, working closely
              with our clients to ensure transparency and alignment throughout
              the process.
              <br />
              <br />
              At Cyberous, we work tirelessly to fortify your digital defenses,
              employing a proactive approach and unparalleled expertise to
              safeguard your assets and privacy in an increasingly
              interconnected world. 
              <br />
              <br />
              Whether it's cybersecurity training or providing consulting
              services, we strive to empower our clients with the knowledge and
              tools needed to mitigate risks and protect their digital assets.
              With a focus on continuous improvement and staying ahead of
              emerging threats, we are dedicated to delivering exceptional value
              and peace of mind to our clients. At Cyberous, we don't just
              provide solutions—we partner with you to safeguard your digital
              future.
            </p>
          </div>
          
        </div>
      </div>
      
      <div></div>
    </div>
  );
};

export default Career;
