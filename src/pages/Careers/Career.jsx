import React, { useEffect } from 'react'
import { Images } from '../../assets'
import About from '../Homepage/AboutUs/About'
import Profiles from './Profiles/Profiles'

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
    <div className='bg-custom-black-color h-screen'>
        <div className='flex justify-center flex-col text-white py-40 md:p-60'>
            <h1 className='font-Roboto text-center p-4 text-5xl'>Join us and transform the World</h1>
            <h1 className='font-Roboto text-center text-custom-fontColor-Green text-2xl'>Start your career with Cyberous</h1>
            <p className='font-Roboto text-base md:text-lg my-4 px-4 text-center '>
            Diploma in Cyber Security, also known as Diploma in Information Security, trains students for industrial work methodologies with job assistance.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 px-20 md:px-0'>
              <button className='w-full md:w-1/2 h-16 my-10 sm:m-0 md:m-10 bg-custom-buttonColor-Green text-white duration-300 border border-solid border-green-700 rounded-lg text-base md:ml-52'>
                Contact Us +91 81999 85888</button>
              <button className='relative bg-transparent w-full md:w-1/2 h-16 sm:m-0 md:m-10 hover:bg-custom-buttonColor-Green hover:text-white text-green-500 duration-300 border border-solid border-custom-buttonColor-Green rounded-lg text-base md:ml-10'> 
              <img src={Images.chevronDown}  className='absolute invert -rotate-90 left-4 top-3 border-2 rounded-full border-solid border-black p-2  w-8 md:w-10 '/>
              Apply Now</button>
            </div>
        </div>
    </div>
    <div>
      <Profiles/>
    </div>
    <div>
    <About/>
    </div>
    </div>
  )
}

export default Career