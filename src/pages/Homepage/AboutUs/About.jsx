import React from "react";
import { Images } from "../../../assets";

const About = () => {
  return (
    <div className="px-4 md:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row w-full pt-8 mb-10">
        <div className="md:w-1/2 lg:flex-shrink-0">
          <img src={Images.aboutImages} alt="This is image" className="w-full h-auto" />
        </div>
        <div className="md:w-2/3 lg:w-1/2 p-5 md:p-20 bg-custom-greyLightColor mt-10 md:mt-0">
          <h1 className="text-3xl lg:text-5xl text-black font-bold">About Us</h1>
          <div className="h-1 w-56 bg-custom-buttonColor-Green mt-6 rounded-full"></div>
          <p className="text-lg lg:text-xl mt-6 text-custom-fontColor-grey">
            Welcome to Cyberous, your premier cyber security partner. Specializing in ethical hacking training, VAPT services covering web, network, mobile, and cloud platforms, as well as red teaming and consultancy solutions. Founded in 2020 by Mr. Yogesh Saini, renowned for training over 10,000 students globally and 2,500+ corporate employees. Recognized as a Top 10 CEO in Jaipur, Rajasthan, Cyberous is committed to empowering individuals and organizations while ensuring a secure digital future. Join us in safeguarding your digital assets today.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-start items-center">
            <img src={Images.aboutimg1} alt="Image of something" className="w-28 h-28 sm:w-28 sm:h-28" />
            <h1 className="text-custom-buttonColor-Green text-lg mt-4 sm:mt-0 sm:ml-10">
              1000+ Projects
            </h1>
            <img src={Images.aboutimg2} className="w-28 h-28 sm:w-28 sm:h-28 mt-4 sm:mt-0 sm:ml-20" alt="Cyberous achievement" />
            <h1 className="text-custom-buttonColor-Green text-lg mt-4 sm:mt-0 sm:ml-10">
              50+
            </h1>
          </div>
          <div className="text-center mt-12">
            <button className="h-12 md:h-16 w-48 md:w-60 bg-custom-buttonColor-Green rounded-full text-white text-lg">
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
