import React from 'react';
import { Images } from '../../assets';
import BrandsTrustUs from '../Homepage/BrandsTrustUs/BrandsTrustUs';
import Testemonial from '../Homepage/Testimonial/Testemonial';
import MediaGallery from '../Homepage/MediaGallery/MediaGallery';

const About = () => {
  return (
    <div className='h-full'>
      {/* Background section */}
      <div className='text-center relative bg-no-repeat bg-cover bg-center h-96 object-cover' style={{ backgroundImage: `url(${Images.aboutBg})`, }}>
        <div className='h-full bg-black bg-opacity-50 flex flex-col justify-center'>
          <h1 className='text-2xl sm:text-3xl lg:text-5xl font-bold text-white'>About Us</h1>
          <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div>
          <h2 className='text-xl sm:text-2xl lg:text-3xl text-white font-bold'>ISO:27001:2013 CERTIFIED COMPANY</h2>
        </div>
      </div>

      {/* Company info */}
      <div className='text-center py-8'>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Our Company</h1>
        <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div>
        <p className='text-2xl sm:text-2xl mx-4 lg:mx-32'>
          Cyberous offers a comprehensive range of cybersecurity services dedicated to ensuring your success.
        </p>
      </div>

      {/* Service details */}
      <div className='px-4 lg:px-32 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          <div className='text-9xl text-green-500 font-bold'>4+<p className='text-xl'>years of Excellence Services</p></div>
          <div className='text-lg'>
          Welcome to Cyberous, your premier cyber security partner. Specializing in ethical hacking training, VAPT services covering web, network, mobile, and cloud platforms, as well as red teaming and consultancy solutions. Founded in 2020 by Mr. Yogesh Saini, renowned for training over 10,000 students globally and 2,500+ corporate employees. Recognized as a Top 10 CEO in Jaipur, Rajasthan, Cyberous is committed to empowering individuals and organizations while ensuring a secure digital future. Join us in safeguarding your digital assets today.
          </div>
        </div>
        <div className='flex flex-col md:flex-row justify-around items-center my-10'>
          <div>
            <p className='font-bold text-xl md:text-2xl lg:text-3xl'>Download a copy of our <span className='text-green-500'>Company Profile</span></p>
            <button className='mt-4 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-700'>Download</button>
          </div>
          <div>Cyberous LOGO</div>
        </div>
      </div>

      {/* We Excel section */}
      <div className='text-center my-8'>
        <h2 className='text-3xl lg:text-4xl font-bold'>We Excel in Delivering</h2>
        <p className='text-green-500 text-2xl lg:text-3xl'>Optimal Solution</p>
        <div className="h-1 w-32 bg-custom-buttonColor-Green my-4 mx-auto rounded-full"></div>
      </div>
      <div className='flex justify-center'>
</div>
<div className='flex flex-col lg:flex-row justify-around p-4 lg:p-10'>
  <div className='text-lg lg:text-2xl font-semibold mb-8 lg:mb-0'>
    <ol className='list-decimal text-green-500 space-y-4'>
      <li>
        Ethical Hacking training
        <div className='text-base lg:text-lg font-normal text-gray-600'>Elevate your cybersecurity skills with our expert-led Ethical Hacking Training programs.</div>
      </li>
      <li>
        Cybersecurity
        <div className='text-base lg:text-lg font-normal text-gray-600'>Get tailored cybersecurity solutions and expert guidance to protect your organization's digital assets.</div>
      </li>
      <li>
        Red Teaming
        <div className='text-base lg:text-lg font-normal text-gray-600'>Assess and enhance your organization's security posture with our simulated cyber attack scenarios.</div>
      </li>
      <li>
        IOT Testing
        <div className='text-base lg:text-lg font-normal text-gray-600'>Safeguard your IoT devices and networks from cyber attacks with our comprehensive testing procedures.</div>
      </li>
      <li>
        IOS Application Testing
        <div className='text-base lg:text-lg font-normal text-gray-600'>Secure your iOS apps against cyber threats with our specialized Penetration Testing services.</div>
      </li>
    </ol>
  </div>
  <div className='text-lg lg:text-2xl font-semibold'>
    <ol className='list-decimal text-green-500 space-y-4' start={6}>
      <li>
        Web Application Penetration Testing
        <div className='text-base lg:text-lg font-normal text-gray-600'>Ensure your web applications are secure and resilient with our comprehensive Penetration Testing services.</div>
      </li>
      <li>
        Network Penetration Testing
        <div className='text-base lg:text-lg font-normal text-gray-600'>Identify and mitigate vulnerabilities in your network infrastructure with our thorough Penetration Testing solutions.</div>
      </li>
      <li>
        Android Application Penetration Testing
        <div className='text-base lg:text-lg font-normal text-gray-600'>Protect your Android applications from potential breaches with our rigorous Penetration Testing procedures.</div>
      </li>
      <li>
        Source Code Review
        <div className='text-base lg:text-lg font-normal text-gray-600'>Strengthen your software security with our meticulous Source Code Review assessments.</div>
      </li>
      <li>
        API Penetration Testing
        <div className='text-base lg:text-lg font-normal text-gray-600'>Ensure the integrity of your APIs with our specialized Penetration Testing services.</div>
      </li>
    </ol>
  </div>
  
</div>
<div className="bg-custom-buttonColor-GreenDark text-white py-4">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
      <div className="flex flex-col justify-center">
        <span className="text-3xl font-bold">30+</span>
        <span className="text-xl">CLIENTS SECURED</span>
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-3xl font-bold">150+</span>
        <span className="text-xl">PROJECTS COMPLETED</span>
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-3xl font-bold">20+</span>
        <span className="text-xl">SKILLED PROFESSIONAL</span>
      </div>
      <div className="flex flex-col justify-center">
        <span className="text-3xl font-bold">12000+</span>
        <span className="text-xl">STUDENTS TRAINED</span>
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
        <BrandsTrustUs/>
      </div>
      <div id="testimonials" className='min-h-full bg-white'>
        <Testemonial/>
      </div>
      <div id="gallery" className='min-h-full bg-white'>
        <MediaGallery/>
      </div>
    </div>
  );
}

export default About;
