import React from "react";
import { Images } from "../../../assets";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row py-10">
        <div className="md:w-1/2">
          <img src={Images.aboutImages} alt="This is image" className="h-full w-full pointer-events-none select-none" />
        </div>
        <div className="w-full md:w-1/2 p-5 md:p-20 bg-custom-greyLightColor">
          <h1 className="text-3xl lg:text-5xl text-black font-bold font-serif text-center ">About Us</h1>
          <div className="justify-center flex">
            <div className="h-1 w-28 md:w-48 bg-custom-buttonColor-Green m-4"></div>
          </div>
          <p className="text-lg lg:text-xl mt-6 text-custom-fontColor-grey text-justify">
            Welcome to Cyberous, your premier cyber security partner. Specializing in ethical hacking training, VAPT services covering web, network, mobile, and cloud platforms, as well as red teaming and consultancy solutions. Founded in 2020 by Mr. Yogesh Saini, renowned for training over 10,000 students globally and 2,500+ corporate employees. Recognized as a Top 10 CEO in Jaipur, Rajasthan. Cyberous is committed to empowering individuals and organizations while ensuring a secure digital future. Join us in safeguarding your digital assets today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-start items-center">
            <img src={Images.aboutimg1} alt="Image of something" className="pointer-events-none select-none w-28 h-28 sm:w-28 sm:h-28" />
            <div className="flex flex-col">
              <h1 className="text-black text-3xl font-bold m-2 sm:mt-0 sm:ml-10">
                1000 +
              </h1>
              <h1 className="text-custom-buttonColor-Green text-xl mt-4 sm:mt-0 sm:ml-10">
                Happy Clients
              </h1>
            </div>
            <img src={Images.aboutimg2} className="pointer-events-none select-none w-28 h-28 sm:w-28 sm:h-28 mt-4 sm:mt-0 sm:ml-20" alt="Cyberous achievement" />
            <div className="flex flex-col">
              <h1 className="text-black text-3xl font-bold m-2 sm:mt-0 sm:ml-10">
                50+
              </h1>
              <h1 className="text-custom-buttonColor-Green text-xl mt-4 sm:mt-0 sm:ml-10">
                Projects Done
              </h1>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link to={'/about'}>
              <button className="h-12 md:h-16 w-48 md:w-60 duration-500  focus:ring hover:ring-4 active:bg-green-700 ring-green-300  bg-custom-buttonColor-Green rounded-full text-white text-lg">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
