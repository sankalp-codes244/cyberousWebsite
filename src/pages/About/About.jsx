import React, { useEffect } from 'react';
import { Images } from '../../assets';
import BrandsTrustUs from '../Homepage/BrandsTrustUs/BrandsTrustUs';
import Testemonial from '../Homepage/Testimonial/Testemonial';
import MediaGallery from '../Homepage/MediaGallery/MediaGallery';
import IndustrialRecognition from '../Homepage/IndustrialRecognition/IndustrialRecognition'
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className='h-full'>
      {/* Background section */}
      <div className='text-center relative bg-no-repeat bg-cover bg-center h-screen object-cover' style={{ backgroundImage: `url(${Images.aboutBg})`, }}>
        <div className='h-full bg-black bg-opacity-50 flex flex-col justify-center'>
          <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold text-white'>About Us</h1>
          <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div>
          <h2 className='text-xl sm:text-2xl lg:text-3xl text-white font-bold'>ISO:27001:2013 CERTIFIED COMPANY</h2>
        </div>
      </div>

      {/* Company info */}
      <div className='text-center py-8'>
        <h1 className='text-3xl lg:text-5xl font-bold font-serif '>Our Company</h1>
        <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div>
        <p className='text-lg mx-4 lg:text-xl lg:mx-32'>
          "Cyberous offers a comprehensive range of cybersecurity services dedicated to ensuring your success."
        </p>
      </div>

      {/* Service details */}
      <div className='px-4 lg:px-32 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='flex flex-col'>
            <div className='flex text-9xl text-green-500 font-serif font-bold items-center'>4+<p className='text-lg m-2 font-sans'>Years of Excellence Services</p></div>
            <p className='text-2xl md:text-5xl font-serif mt-8 m-4 md:mr-10 font-bold'>
              Learn More About Our Success Stories
            </p>
          </div>
          <div className='text-lg text-justify'>
            Welcome to Cyberous, your premier cyber security partner. Specializing in ethical hacking training, VAPT services covering web, network, mobile, and cloud platforms, as well as red teaming and consultancy solutions. Founded in 2020 by Mr. Yogesh Saini, renowned for training over 10,000 students globally and 2,500+ corporate employees. Recognized as a Top 10 CEO in Jaipur, Rajasthan. Cyberous is committed to empowering individuals and organizations while ensuring a secure digital future. Join us in safeguarding your digital assets today.
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center mt-20'>
          <div className=''>
            <div className='flex flex-col'>
              <p className='font-bold text-3xl md:text-6xl font-serif'>Download a copy of our <p className='text-green-500'>Company Profile</p></p>
            </div>
            <div className='flex flex-row justify-between '>
              <button className=' h-full w-40 mt-4 mb-4 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-700 md:h-14 md:w-1/2'>Download Brochure</button>
            <div className='text-lg mt-8 text-center md:text-3xl'>Cyberous LOGO</div>
            </div>
          </div>
        </div>
      </div>

      {/* We Excel section */}
      <div className='text-center my-8'>
        <h2 className='text-3xl lg:text-4xl font-bold font-serif'>We Excel in Delivering</h2>
        <p className='text-green-500 text-2xl lg:text-3xl'>Optimal Solution</p>
        <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div>
      </div>
      <div className='flex justify-center'>
      </div>
      <div className='flex flex-col lg:flex-row justify-around p-4 lg:p-10'>
        <div className='text-lg lg:text-2xl font-semibold mb-8 xl:mr-6 lg:mb-0'>
          <ul className='text-green-500 space-y-4 '>
            <li className='font-serif'>
              Ethical Hacking training
              <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>Elevate your cybersecurity skills with our expert-led Ethical Hacking Training programs.</div>
            </li>
            <li className='font-serif'>
              Cyber Security
              <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>Get tailored cybersecurity solutions and expert guidance to protect your organization's digital assets.</div>
            </li>
            <li className='font-serif'>
              Red Teaming
              <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>Assess and enhance your organization's security posture with our simulated cyber attack scenarios.</div>
            </li>
            <li className='font-serif'>
              IOT Testing
              <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>Safeguard your IoT devices and networks from cyber attacks with our comprehensive testing procedures.</div>
            </li>
            <li className='font-serif'>
              IOS Application Testing
              <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>Secure your iOS apps against cyber threats with our specialized Penetration Testing services.</div>
            </li>
          </ul>
        </div>
        <div className='text-lg lg:text-xl font-semibold'>
          <ul className=' xl:mr-6 text-green-500 space-y-4' >
            <li className='font-serif'>
              Web Application Penetration Testing
              <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>Ensure your web applications are secure and resilient with our comprehensive Penetration Testing services.</div>
            </li>
            <li className='font-serif'>
              Network Penetration Testing
              <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>Identify and mitigate vulnerabilities in your network infrastructure with our thorough Penetration Testing solutions.</div>
            </li>
            <li className='font-serif'>
              Android Application Penetration Testing
              <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>Protect your Android applications from potential breaches with our rigorous Penetration Testing procedures.</div>
            </li>
            <li className='font-serif'>
              Source Code Review
              <div className='text-base lg:text-lg font-normal text-gray-600 font-sans'>Strengthen your software security with our meticulous Source Code Review assessments.</div>
            </li>
            <li className='font-serif'>
              API Penetration Testing
              <div className='text-base lg:text-lg font-normal text-gray-600'>Ensure the integrity of your APIs with our specialized Penetration Testing services.</div>
            </li>
          </ul>
        </div>

      </div>
      <div className="p-6 bg-custom-buttonColor-GreenDark text-white md:p-20">
        <div className="container mx-auto px-4 ">
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col justify-center">
              <span className="text-3xl md:text-5xl font-bold">30+</span>
              <span className="text-xl md:text-3xl">CLIENTS SECURED</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-3xl md:text-5xl font-bold">150+</span>
              <span className="text-xl md:text-3xl">PROJECTS COMPLETED</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-3xl md:text-5xl font-bold">20+</span>
              <span className="text-xl md:text-3xl">SKILLED PROFESSIONAL</span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-3xl md:text-5xl font-bold">12000+</span>
              <span className="text-xl md:text-3xl">STUDENTS TRAINED</span>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center relative bg-no-repeat bg-center h-32 pt-10 bg-white'>
        <div className='h-full  bg-opacity-50 flex flex-col justify-center'>
          <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold text-black'>Our Clients</h1>
          <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div>
        </div>
      </div>



      {/* Service List */}
      <div id="brands" className='min-h-full bg-white'>
        <BrandsTrustUs />
      </div>
      <div id="brands" className='min-h-full bg-white'>
        <IndustrialRecognition/>
      </div>
      <div id="testimonials" className='min-h-full bg-white'>
        <Testemonial />
      </div>
      <div id="gallery" className='min-h-full bg-white'>
        <MediaGallery />
      </div>
    </div>
  );
}

export default About;
